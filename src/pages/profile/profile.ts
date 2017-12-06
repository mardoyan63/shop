import { Component } from "@angular/core";
import { LocalStorage } from "../../app/services/localstorage.service";

@Component({
    selector: 'profile-page',
    templateUrl: 'profile.html'
})
export class ProfilePage{
    constructor(private ls:LocalStorage){}
}