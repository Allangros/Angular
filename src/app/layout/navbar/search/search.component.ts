import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms';

@Component ({
    selector: 'app-search',
    templateUrl:'search.component.html',
    styles: [
    `
    .red {
        color: red;
    }
    .bold {
        font-weight: bold;
    }
    `
    ]
})
export class SearchComponent{
    //Permet de d'indiquer que l'attribut peut etre setté par le parent en entrée
    @Input() username: string
    @Output() onSearch: EventEmitter<String> = new EventEmitter()
    names: Array<string> =['Jim','JO','BOB', 'ana']

    myform: FormGroup
    searchField: FormControl 

    search() {
        //Au clique on emet un evenement
        this.onSearch.emit(this.username)
    }

    ngOnInit() {
        this.searchField = new FormControl
        this.searchField.valueChanges.subscribe((str:string) => {
            console.log(str)
        })
        this.myform = new FormGroup({
            search: this.searchField
        })
    }
}