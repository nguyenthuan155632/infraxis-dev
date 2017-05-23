import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MessageService {

  private subject = new Subject<any>();

  sendMsg(msg: any) {
    this.subject.next(msg);
  }

  clearMsg() {
    this.subject.next();
  }

  getMsg(): Observable<any> {
    return this.subject.asObservable();
  }

  constructor() { }

}
