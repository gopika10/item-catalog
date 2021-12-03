import {Component, OnInit} from '@angular/core';
import {Item} from '../../../item';
import {ActivatedRoute} from '@angular/router';
import {ItemStoreService} from '../../../store/item.store.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  item: Item | undefined;
  itemId: string | undefined;

  constructor(private route: ActivatedRoute, private itemStoreService: ItemStoreService) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(queryParams => {
      const {id} = queryParams;
      this.itemId = id;
      this.itemStoreService.getItem(id);
    });

    this.itemStoreService.items.pipe(map((items: Item[]) => {
      return items.find((item: Item) => item.id === this.itemId);
    }))
    .subscribe((item: Item | undefined) => {
      this.item = item;
    });

  }

}
