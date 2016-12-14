import {isPrimitiveOrPrimitiveClass, isArrayOrArrayClass} from '../utils/utils';
import Metadata from '../metadata/metadata';
import {JSON_CONVERTERS, DESIGN_PARAM_TYPES} from '../constants/metadata-keys';
import {JSON_DESERIALIZE_CONVERTER, JSON_SERIALIZE_CONVERTER} from '../constants/errors-msgs';
import {getClassName} from '../utils/class';
import {IStaticJsonConverter} from '../interfaces/JsonConverter';

export class Converters {

    private static defaultConverter: IStaticJsonConverter;

    /**
     *
     * @param customConvert
     */
    static setDefaultConverter(customConvert: IStaticJsonConverter): void {
        this.defaultConverter = customConvert;
    }
    /**
     * Deserialize any type or array type to his class or array class.
     * @param obj
     * @param targetType
     * @returns {any}
     */
    static deserialize<T extends IStaticJsonConverter>(obj: any, targetType: IStaticJsonConverter): T {

        try {

            if (isArrayOrArrayClass(obj)) {

                obj = (<Array<T>>obj).map((item) => this.jsonObjectMapper(item, targetType));

            } else {

                obj = this.jsonObjectMapper(obj, targetType);

            }

        } catch(err) {
            const castedError = new Error(JSON_DESERIALIZE_CONVERTER(getClassName(targetType), obj));
            castedError.stack = err.stack;
            throw castedError;
        }


        return obj;
    }

    /**
     * Map an object to Class.
     * @param obj
     * @param targetType
     * @param converter
     */
    static jsonObjectMapper<T extends IStaticJsonConverter>(obj, targetType: IStaticJsonConverter): T {

        if (!this.isEmpty(obj)
            && targetType !== undefined
            && !isPrimitiveOrPrimitiveClass(obj)
            && !isPrimitiveOrPrimitiveClass(targetType)) {

            const converter = this.getConverter<T>(targetType);

            if (converter) {
                // deserialize from a custom JsonConverter
                obj = converter.deserialize<T>(obj, targetType);

            } else if (typeof targetType.deserialize === "function") { // static
                // deserialize from static method
                obj = targetType.deserialize(obj, targetType);

            } else if ((<any>targetType).prototype && typeof (<any>targetType).prototype.deserialize === "function") {
                // deserialize from static method
                obj = new targetType().deserialize(obj);

            } else if (this.defaultConverter) {
                obj = this.defaultConverter.deserialize<T>(obj, targetType);
            }
            else {
                // last chance to deserialize object from his object
                obj = new (<any>targetType)(obj);
            }
        }

        return obj;
    }
    /**
     *
     * @param obj
     * @returns {string}
     */
    static serialize(obj: any): string {

        let json: string = obj;

        try {
            if (!this.isEmpty(obj)
                && !isPrimitiveOrPrimitiveClass(obj)) {

                const converter = this.getConverter<any>(obj);

                if (converter){
                    // deserialize from a custom JsonConverter
                    json = converter.serialize(obj);

                } else if(typeof obj.serialize === "function") {
                    // deserialize from serialize method
                    json = obj.serialize(obj);

                } else {
                    // last chance to serialize object from toJson method.
                    json = JSON.stringify(obj);
                }

            }

        } catch(err) {
            const castedError = new Error(JSON_SERIALIZE_CONVERTER(getClassName(obj), obj));
            castedError.stack = err.stack;
            throw castedError;
        }

        return json;
    }

    /**
     * Return the right converter for a type.
     * @param targetType
     * @returns {any}
     */
    static getConverter<T>(targetType: any): IStaticJsonConverter {
        return Metadata.get(JSON_CONVERTERS, targetType);
    }

    /**
     *
     * @param targetClass
     * @param attributs
     * @returns {any}
     */
    static getTargetType(targetClass, attributs: string): any {
        return Metadata.get(DESIGN_PARAM_TYPES, targetClass, attributs);
    }

    static isEmpty = (value: any): boolean =>
        value === "" || value === null || value === undefined;

}