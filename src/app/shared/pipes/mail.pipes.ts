import {Pipe, PipeTransform} from '@angular/core'


@Pipe({
    name: 'mailPipe'
})
export class MailPipe implements PipeTransform{
    transform(users:any, ext:string ){
        
        return users.filter(user => user.email.endsWith(ext))
    }
}