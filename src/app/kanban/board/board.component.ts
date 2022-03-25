import { Component, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { BoardService } from '../board.service';
import { Task } from '../board.model';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.scss']
})
export class BoardComponent {
    @Input() board: any;

    constructor(
        private boardService: BoardService
    ) { }

    taskDrop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.board.tasks, event.previousIndex, this.board.tasks);
        this.boardService.updateTasks(this.board.id, this.board.tasks);
    }

    openDialog(task?: Task, idx?: number): void {
        const newTask = { label: 'purple' };
    }

    handleDelete() {
        this.boardService.deleteBoard(this.board.id);
    }
}
