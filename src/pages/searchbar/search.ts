import { Component, Output, EventEmitter, Input } from "@angular/core";

@Component({
    selector: "search-tag",
    templateUrl: "search.html"
})
export class Search{
    @Input() value;
    @Output() searching=new EventEmitter();
    search(e){
        this.searching.emit(e);
    }
}