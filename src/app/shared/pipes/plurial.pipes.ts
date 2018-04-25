import {Pipe, PipeTransform} from '@angular/core'

// {{ "message" | plurial}}

@Pipe({
    name: 'plurial'
})
export class PlurialPipe implements PipeTransform{
    transform(str:string, nb:number){
        return str + (nb >1 ? 's' : '')
    }
}