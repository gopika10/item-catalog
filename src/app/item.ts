export interface ListItem {
  id: string;
  name: string;
}

export interface Item extends ListItem {
  description?: string;
}

