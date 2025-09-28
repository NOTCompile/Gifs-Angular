import { Component, input } from '@angular/core';

@Component({
  selector: 'list-item',
  imports: [],
  templateUrl: './list-item.component.html',  
})
export class ListItemComponent {
  imageUrl = input.required<string>();
}
