import {Component, ElementRef, Input} from '@angular/core';
import iconList from './icon-list';

@Component({
  selector: 'icon-lib',
  template: `
    <ng-content></ng-content>`,
  styleUrls: ['./icon-library.component.scss']
})
export class IconLibraryComponent {

  @Input()
  set name(iconName: string) {
    this.element.nativeElement.innerHTML = iconList.get(iconName);
  }

  constructor(private element: ElementRef) {
  }

}
