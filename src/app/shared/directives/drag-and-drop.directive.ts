import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[pngDragAndDrop]',
})
export class DrogAndDropDirective {
  @Output() fileDropped: EventEmitter<any> = new EventEmitter();
  @HostBinding('class.fileover') fileOver!: boolean;
  // dragover listener
  @HostListener('dragover', ['$event']) onDragOver(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
     console.log("Drag Over");
  }

  // Draleave listener
  @HostListener('dragleave', ['$event']) public onDragLeave(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
     console.log("Drag Leave");
  }

  // Drop listener
  @HostListener('drop', ['$event']) public ondrop(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
     console.log(evt);

    this.fileOver = false;
    const files = evt.dataTransfer.files;
    if (files.length > 0) {
      this.fileDropped.emit(files);
        console.log(`You dropped ${files.length} files.`);
    }
  }
  constructor() {}
}
