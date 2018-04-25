import {Pipe} from '@angular/core'

// {{ "message" | plurial}}

@Pipe({
    name: 'plurial'
})
export class PlurialPipe {
    transform(str:string){
        return str + 's'
    }
}