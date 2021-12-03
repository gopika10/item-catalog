import {Injectable} from '@angular/core';
import {Item} from '../item';
import {BehaviorSubject} from 'rxjs';
import {BackendService} from '../services/backend.service';

@Injectable({
  providedIn: 'root'
})
export class ItemStoreService {

  private itemsSubject = new BehaviorSubject<Item[]>([]);
  private dataStore: { items: Item[] } = {items: []};
  readonly items = this.itemsSubject.asObservable();

  constructor(private backendService: BackendService) {
  }

  loadItems(): void {
    this.backendService.getAllItems()
      .subscribe({
        next: (data: Item[]) => {
          this.dataStore.items = data;
          this.itemsSubject.next(Object.assign({}, this.dataStore).items);
        },
        error: err => console.log('Error retrieving items')
      });
  }

  getItem(id: string): void {
    this.backendService.getItem(id).subscribe(
      data => {
        let notFound = true;
        this.dataStore.items.forEach((item, index) => {
          if (item.id === data.id) {
            this.dataStore.items[index] = data;
            notFound = false;
          }
        });
        if (notFound) {
          this.dataStore.items.push(data);
        }
        this.itemsSubject.next(Object.assign({}, this.dataStore).items);
      },
      error => console.log('Could not load item.')
    );
  }
}
