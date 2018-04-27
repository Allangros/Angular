import {FormControl} from '@angular/forms'

export function letterValidator(){
    return function (input:FormControl) {
        return /@/.test(input.value) ? null : {email : true}
    }
}

 export function uniqEmailValidator(input: FormControl) {
     return new Promise((resolve, reject) => {
         setTimeout(() => {
             if (input.value == 'test@test.net') {
                 resolve({ uniqEmail: true})
             }
             else {
                 resolve(null)
             }
         }, 2000)
     })
 }