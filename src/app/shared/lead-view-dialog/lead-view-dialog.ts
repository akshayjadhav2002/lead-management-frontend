import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-lead-view-dialog',
  standalone :true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './lead-view-dialog.html',
  styleUrl: './lead-view-dialog.css',
})
export class LeadViewDialog {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}
