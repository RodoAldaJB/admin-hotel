import { NgClass } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-drag-and-drop',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './drag-and-drop.component.html',
  styleUrl: './drag-and-drop.component.scss'
})
export class DragAndDropComponent {

  images: string[] = [];
  @ViewChild('fileInput') fileInput!: ElementRef;

  modal: boolean = false;

  onDragOver(event: DragEvent) {
    event.preventDefault();
    const dropArea = event.target as HTMLElement;
    dropArea.classList.add('dragging');
  }

  onDragLeave(event: DragEvent) {
    const dropArea = event.target as HTMLElement;
    dropArea.classList.remove('dragging');
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    const dropArea = event.target as HTMLElement;
    dropArea.classList.remove('dragging');
    this.handleFiles(event.dataTransfer?.files || null);
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.handleFiles(input.files);
    }
  }

  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }

  private handleFiles(files: FileList | null) {
    if (files) {
      Array.from(files).forEach(file => {
        // Validar que el archivo sea PNG o JPG
        if (file.type === 'image/png' || file.type === 'image/jpeg') {
          const reader = new FileReader();
          reader.onload = (e) => {
            if (e.target?.result) {
              this.images.push(e.target.result as string);
            }
          };
          reader.readAsDataURL(file);
        } else {
          this.modal = true;
        }
      });
    }
  }

  delete(id: any){
    this.images.splice(id, 1);
    console.log(this.images)
  }

}
