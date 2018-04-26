import {FormControl} from '@angular/forms'

export function letterValidator(letter:string){
    return function (input:FormControl) {
        return input.value[0] != letter ? null : {letter : true}
}
}