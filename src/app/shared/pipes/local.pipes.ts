import {Pipe, PipeTransform} from '@angular/core'

// {{'REMOVE'} | lan:'fr'}

const WORDS = {
    REMOVE: {
        eng: 'Delete',
        fr: 'Supprimer'
    }
}


@Pipe({
    name: 'local'
})
export class LocalPipe implements PipeTransform{
    transform(str:string, lan:string ){
        
        //return  (lan == 'fr' ? 'supprimer' : 'delete')
        return WORDS[str][lan]
    }
}