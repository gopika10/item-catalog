import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Item} from '../item';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) {
  }

  getAllItems(): Observable<Item[]> {
    return this.http.get('./assets/data/list.json').pipe(map((list: any) => list));
  }

  getItem(id: string): Observable<Item> {
    return this.http.get('./assets/data/listDetails.json').pipe(map((list: any) => list))
      .pipe(
        map((items) => {
          return items.find((item: Item) => item.id === id);
        }));
  }

}
