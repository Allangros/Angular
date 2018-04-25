import { Component, Input, Output, EventEmitter} from '@angular/core'

@Component ({
    selector: 'app-search',
    template: `
        <input type="text" [(ngModel)]="username" (keyup.enter)="search()">
        <button (click)="search()" *ngIf="username">Chercher</button>
        <ul>
            <li *ngFor="let name of names ; let i =index ; let isEven = even"
            [ngClass]="{red: isEven, bold: isEven}">
                {{ i }} - {{isEven}} - {{name}}
            </li>
        </ul>

        <ul>
            <li *ngFor="let name of names ; let i =index ; let isEven = even"
            [ngStyle]="{color: 'red', 'font-weight':'bold'}">
                {{ i }} - {{isEven}} - {{name}}
            </li>
        </ul>
    `,
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
    names: Array<string> =['Jim','JO','BOB']
    search(ev:any) {
        //Au clique on emet un evenement
        this.onSearch.emit(this.username)
    }
}