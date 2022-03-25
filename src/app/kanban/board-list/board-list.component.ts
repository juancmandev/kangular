import { Component, OnDestroy, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Subscription } from 'rxjs';
import { Board } from '../board.model';
import { BoardService } from '../board.service';

@Component({
    selector: 'app-board-list',
    templateUrl: './board-list.component.html',
    styleUrls: ['./board-list.component.scss']
})
export class BoardListComponent implements OnInit, OnDestroy {
    public boards: Board[] = [];
    public subscription?: Subscription;

    constructor(
        private boardService: BoardService
    ) { }

    ngOnInit(): void {
        this.subscription = this.boardService
          .getUserBoards()
          .subscribe(boards => (this.boards = boards));
    }

    ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.boards, event.previousIndex, event.currentIndex);
        this.boardService.sortBoards(this.boards);
    }
}
