import { Injectable } from '@angular/core';
import { LocalStorage } from "./localstorage.service";

@Injectable()
export class Service {

    constructor(public ls:LocalStorage){

    }

}