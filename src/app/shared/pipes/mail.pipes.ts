import {Pipe, PipeTransform} from '@angular/core'


@Pipe({
    name: 'mailPipe'
})
export class mailPipe implements PipeTransform{
    transform(users:any, ext:string ){
        
        //return  (lan == 'fr' ? 'supprimer' : 'delete')
        return users.filter(user => user.mail.endsWith(ext))
    }
}