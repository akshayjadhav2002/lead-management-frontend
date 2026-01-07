import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
 import { LeadViewDialog } from '../../shared/lead-view-dialog/lead-view-dialog';

@Component({
  selector: 'app-leads',
  standalone :true,
  imports: [    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './leads.html',
  styleUrl: './leads.css',
})
export class Leads {

  constructor(private dialog: MatDialog) {}

  displayedColumns: string[] = ['name', 'email', 'status', 'source', 'actions'];

  dataSource = [
    { name: 'John Doe', email: 'john@mail.com', status: 'New', source: 'Website' },
     { name: 'Mark Lee', email: 'mark@mail.com', status: 'Converted', source: 'Referral' },
    { name: 'Jane Smith', email: 'jane@mail.com', status: 'Contacted', source: 'Email' },
    { name: 'Mark Lee', email: 'mark@mail.com', status: 'Converted', source: 'Referral' },
     { name: 'Jane Smith', email: 'jane@mail.com', status: 'Contacted', source: 'Email' },
      { name: 'Jane Smith', email: 'jane@mail.com', status: 'Contacted', source: 'Email' },
       { name: 'Mark Lee', email: 'mark@mail.com', status: 'Converted', source: 'Referral' },
       { name: 'Jane Smith', email: 'jane@mail.com', status: 'Contacted', source: 'Email' },
        { name: 'Jane Smith', email: 'jane@mail.com', status: 'Contacted', source: 'Email' },
         { name: 'Mark Lee', email: 'mark@mail.com', status: 'Converted', source: 'Referral' },
         { name: 'Jane Smith', email: 'jane@mail.com', status: 'Contacted', source: 'Email' },
          { name: 'Mark Lee', email: 'mark@mail.com', status: 'Converted', source: 'Referral' },
  ];

  viewLead(lead: any) {
  this.dialog.open(LeadViewDialog, {
  width: '480px',
  maxWidth: '95vw',
  data: lead
});
}

}
