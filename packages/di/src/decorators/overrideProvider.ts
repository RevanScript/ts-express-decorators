import {Type} from "@tsed/core";
import {GlobalProviders} from "@tsed/di";

/**
 * Override a provider which is already registered in ProviderRegistry.
 * @returns {Function}
 * @decorators
 * @param originalProvider
 */
export function OverrideProvider(originalProvider: Type<any>): Function {
  return (target: Type<any>): void => {
    GlobalProviders.get(originalProvider)!.useClass = target;
  };
}
