import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../../../core/users.service';

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
    constructor(private userModel: UserService){}

    search() {
        //Au clique on emet un evenement
        this.onSearch.emit(this.username)
    }

    ngOnInit() {
        this.searchField = new FormControl
        this.searchField.valueChanges.subscribe((str:string) => {
            this.userModel.ob.next(str)
        })
        this.myform = new FormGroup({
            search: this.searchField
        })
    }
}