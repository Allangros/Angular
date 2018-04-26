import {Pipe, PipeTransform} from '@angular/core'
import { registerLocaleData } from '@angular/common';


@Pipe({
    name: 'mailPipe'
})
export class MailPipe implements PipeTransform{
    transform(users: Array<any>, ext:string ){
        
        if (!ext){
            return users
        }
/*         //solution 1
        return users.filter(user => {
            switch (ext) {
                case 'me':
                    return /me$/.test(user.email)
                case 'biz':
                    return /biz$/.test(user.email)
                default:
                return true
            }
            //solution 2
            const regexp = new RegExp(ext + '$')
            return regexp.test(user.email)

        }) */
        //solution 3
        return (users.filter(user => user.email.endsWith(ext)))
    }
}