import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-delete-button',
    templateUrl: './delete-button.component.html',
    styleUrls: ['./delete-button.component.scss']
})
export class DeleteButtonComponent {
    @Output() delete = new EventEmitter<boolean>();

    public canDelete!: boolean;

    constructor() { }

    prepareForDelete() {
        this.canDelete = true;
    }

    cancel() {
        this.canDelete = false;
    }

    deleteBoard() {
        this.delete.emit(true);
        this.canDelete = false;
    }
}
