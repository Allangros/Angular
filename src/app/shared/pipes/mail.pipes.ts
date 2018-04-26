import {Pipe, PipeTransform} from '@angular/core'
import { registerLocaleData } from '@angular/common';


@Pipe({
    name: 'mailPipe'
})
export class MailPipe implements PipeTransform{
    transform(users: Array<any>, ext:string ): Array<any>{
        
        if (!ext){
            return users
        }
        return users.filter(user => {
/*             switch (ext) {
                case 'me':
                    return /me$/.test(user.email)
                case 'biz':
                    return /biz$/.test(user.email)
                default:
                return true
            } */
/*             const regexp = new RegExp(ext + '$')
            return regexp.test(user.email) */
            return users.filter(user => user.email.endsWith(ext))
        })
    }
}