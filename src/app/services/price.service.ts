import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { IntervalObservable } from 'rxjs/observable/IntervalObservable'; 
import { Http, Response } from '@angular/http';

@Injectable()
export class PriceService {

  constructor(private http: Http) { }

  getPrice(url: string): Observable<any> {
    return this.http.get(url).map((res: Response) => res.json());
  }

  getPriceInterval(url: string, interval: number): Observable<any> {
    return Observable 
      .interval(interval)
      .flatMap((i) => this.http.get(url).map((res: Response) => res.json()));
  }

}
