import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './components/list/list.component';
import {ItemComponent} from './components/item/item.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    children: [
      {
        path: 'item',
        component: ItemComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
