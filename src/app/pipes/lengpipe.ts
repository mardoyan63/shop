import { Pipe, PipeTransform } from '@angular/core';
const data={
  "am":{
    "sing_in":"Մուտք Գործել",
    "sing_up":"Գրանցվել"
  },
  "ru":{
    "sing_in":"ифиф",
    "sing_up":"рпорп"
  }
  ,
  "en":{
    "sing_in":"Sing in",
    "sing_up":"Sing up"
  }
}
@Pipe({
  name: 'translate',
})

export class Translate  implements PipeTransform {
    transform(value:string) {
        //let ln = localStorage.getItem("language") || "am";

        return data['en'][value]
    }

}