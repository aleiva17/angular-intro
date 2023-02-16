import { Component, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html'
})
export class SearchBarComponent {
  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;
  @Output() onNewFilter: EventEmitter<string> = new EventEmitter<string>();

  applyFilter(): void {
    this.onNewFilter.emit(this.txtSearch.nativeElement.value);
  }
}
