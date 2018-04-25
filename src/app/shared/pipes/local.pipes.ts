import {Pipe, PipeTransform} from '@angular/core'


@Pipe({
    name: 'local'
})
export class LocalPipe implements PipeTransform{
    transform(str:string, lan:string ){
        
        return  (lan == 'fr' ? 'supprimer' : 'delete')
    }
}