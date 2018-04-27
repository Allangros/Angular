import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {FormGroup, FormControl, FormBuilder, Validator, Validators} from '@angular/forms'
import {letterValidator,uniqEmailValidator} from '../../shared/validators/letter.validator'
import { UserService } from '../../core/users.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  usermail: FormControl
  username: FormControl
  name: FormControl
  modifyform: FormGroup
  lettre:string ="@"

  user: any = {}

  constructor(private route: ActivatedRoute, private builder:FormBuilder, private userModel: UserService) { }

  ngOnInit() {
    this.route.params.subscribe((paramsUrl) => {
      this.userModel.getUserById(paramsUrl.id).subscribe((user) => {
        this.user=user
        this.modifyform.patchValue(this.user)
      })
    })
    this.usermail = new FormControl('', [
      letterValidator()
    ], [
      uniqEmailValidator
    ])
    this.username = new FormControl('', [])
    this.name = new FormControl('', [])
    this.modifyform = this.builder.group({
      email: this.usermail,
      name: this.name,
      username: this.username
    })
    // this.user = Object.assign(this.user, thois.modifyform.value)
  }
}
