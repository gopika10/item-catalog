import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CatalogRoutingModule} from './catalog-routing.module';
import {ListComponent} from './components/list/list.component';
import {ItemComponent} from './components/item/item.component';


@NgModule({
  declarations: [ListComponent, ItemComponent],
  imports: [
    CommonModule,
    CatalogRoutingModule
  ],
  exports: [ListComponent, ItemComponent]
})
export class CatalogModule {
}
