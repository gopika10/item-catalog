import {Component, OnInit} from '@angular/core';
import {ItemStoreService} from '../../../store/item.store.service';
import {Observable} from 'rxjs';
import {Item, ListItem} from '../../../item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  items: Observable<ListItem[]> | undefined;

  constructor(private itemStoreService: ItemStoreService) {
  }

  ngOnInit(): void {
    this.items = this.itemStoreService.items;
    this.itemStoreService.loadItems();
  }
}
