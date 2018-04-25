import { Component, Input, Output, EventEmitter} from '@angular/core'

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
    search(ev:any) {
        //Au clique on emet un evenement
        this.onSearch.emit(this.username)
    }
}