import {Component, OnInit} from '@angular/core'
import {FormGroup, FormControl, FormBuilder, Validator, Validators} from '@angular/forms'
import {letterValidator} from '../shared/validators/letter.validator'

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit{

    propEmail: FormControl
    propPassword: FormControl
    myform: FormGroup
    lettre:string ="z"

    constructor(private builder:FormBuilder) {}

    ngOnInit(){
        this.propEmail = new FormControl('', [
            Validators.required,
            Validators.minLength(3),
            letterValidator(this.lettre)
        ])
        this.propPassword = new FormControl('', [])
        this.myform = this.builder.group({
            email: this.propEmail,
            password: this.propPassword
        })
    }

    send () {
        console.log(this.myform.value)
    }
}