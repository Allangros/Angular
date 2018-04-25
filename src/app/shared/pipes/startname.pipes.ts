import {Pipe, PipeTransform} from '@angular/core'


@Pipe({
    name: 'startname'
})
export class StartNamePipe implements PipeTransform{
    transform(users:Array<string>): Array<string>{
        
        //return  (lan == 'fr' ? 'supprimer' : 'delete')
        return users.filter(user => user[0] === 'a')
    }
}