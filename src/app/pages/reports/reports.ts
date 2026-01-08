import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-reports',
  standalone: true,
  templateUrl: './reports.html',
  styleUrls: ['./reports.css'],
  imports: [
    CommonModule,
    FormsModule,

    /* Angular Material */
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class Reports implements AfterViewInit {

  /* ================= SUMMARY DATA ================= */
  totalRevenue = 125000;
  convertedLeads = 418;
  totalSubUsers = 6;

  /* ================= FILTERS ================= */
  selectedUser = '';
  startDate!: Date;
  endDate!: Date;

  subUsers = ['Akshay', 'Rohit', 'Pooja', 'Sneha', 'Amit'];

  downloadReport() {
    console.log(
      'Downloading report for:',
      this.selectedUser,
      this.startDate,
      this.endDate
    );
  }

  /* ================= HISTORY TABLE ================= */
  displayedColumns: string[] = [
    'fileName',
    'subUser',
    'dateRange',
    'downloadedBy',
    'downloadedAt'
  ];

  dataSource = new MatTableDataSource([
    {
      fileName: 'Akshay_Leads_Report.xlsx',
      subUser: 'Akshay',
      dateRange: '01 Aug - 31 Aug',
      downloadedBy: 'Admin',
      downloadedAt: '02 Sep 2025, 11:30 AM'
    },
    {
      fileName: 'Rohit_Leads_Report.xlsx',
      subUser: 'Rohit',
      dateRange: '01 Aug - 31 Aug',
      downloadedBy: 'Manager',
      downloadedAt: '02 Sep 2025, 12:10 PM'
    }
  ]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
