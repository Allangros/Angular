import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'

import 'rxjs/add/operator/map'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {

    uri: string ='https://jsonplaceholder.typicode.com/users'

    ob: BehaviorSubject<any> = new BehaviorSubject(undefined)

    constructor(private http:HttpClient){
        
    }

    fetch() {
        return new Promise((resolve, reject) => {
            this.http
                .get(this.uri)
                .subscribe((users) => {
                    resolve(users)
                }, (err) => {
                    reject(err)
                })
        })
    }

    create(data: any) {
        return this.http.post(this.uri, data)
    }

    delete(id: number) {
        return this.http.delete(`${this.uri}/${id}`)
    }

    getUserById(id: number){
        return this.http.get(`${this.uri}/${id}`)
    }
}