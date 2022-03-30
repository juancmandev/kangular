import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KanbanRoutingModule } from './kanban-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { BoardListComponent } from './board-list/board-list.component';
import { BoardComponent } from './board/board.component';
import { BoardDialogComponent } from './dialogs/board-dialog/board-dialog.component';
import { TaskDialogComponent } from './dialogs/task-dialog/task-dialog.component';


@NgModule({
    declarations: [
        BoardListComponent,
        BoardComponent,
        BoardDialogComponent,
        TaskDialogComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        KanbanRoutingModule,
        SharedModule,
        FormsModule,
        DragDropModule,
        MatButtonToggleModule,
        MatDialogModule
    ],
    entryComponents: [
        BoardDialogComponent
    ]
})
export class KanbanModule { }
