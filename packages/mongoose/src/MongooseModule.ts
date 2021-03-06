import {AfterRoutesInit, Constant, ExpressApplication, OnInit, Service} from "@tsed/common";
import * as Mongoose from "mongoose";
import {MDBConnection} from "./interfaces";
import {ValidationErrorMiddleware} from "./middlewares/ValidationErrorMiddleware";
import {MongooseService} from "./services/MongooseService";

@Service()
export class MongooseModule implements OnInit, AfterRoutesInit {
  @Constant("mongoose.url")
  private url: string;

  @Constant("mongoose.connectionOptions")
  private connectionOptions: Mongoose.ConnectionOptions;

  @Constant("mongoose.urls")
  private urls: {[key: string]: MDBConnection};

  /**
   *
   * @type {Map<any, any>}
   * @private
   */
  private _instances: Map<string, Mongoose.Mongoose> = new Map();

  constructor(@ExpressApplication private expressApp: ExpressApplication, private mongooseService: MongooseService) {}

  $onInit(): Promise<any> | void {
    const promises: Promise<Mongoose.Mongoose>[] = [];

    if (this.url) {
      promises.push(this.mongooseService.connect("default", this.url, this.connectionOptions || {}));
    }

    if (this.urls) {
      Object.keys(this.urls).forEach((key: string) => {
        promises.push(this.mongooseService.connect(key, this.urls[key].url, this.urls[key].connectionOptions || {}));
      });
    }

    return Promise.all(promises);
  }

  $afterRoutesInit(): void {
    this.expressApp.use(ValidationErrorMiddleware as any);
  }
}
