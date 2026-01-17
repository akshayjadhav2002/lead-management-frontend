import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface DownloadHistory {
  fileName: string;
  subUser: string;
  dateRange: string;
  downloadedBy: string;
  downloadedAt: string;
}

@Component({
  selector: 'app-reports',
  standalone: true,
  templateUrl: './reports.html',
  styleUrls: ['./reports.css'],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class Reports implements OnInit {
  // Summary Stats
  totalRevenue: number = 0;
  convertedLeads: number = 0;
  totalSubUsers: number = 0;

  // Filters
  subUsers: string[] = [];
  selectedUser: string = '';
  startDate: string = '';
  endDate: string = '';

  // Table Data
  dataSource: DownloadHistory[] = [];
  
  // Pagination
  currentPage: number = 1;
  pageSize: number = 10;
  totalRecords: number = 0;
  totalPages: number = 0;
  paginatedData: DownloadHistory[] = [];
  Math = Math;

  constructor() {}

  ngOnInit(): void {
    this.loadData();
  }

  /**
   * Load initial data for the reports page
   * Replace the sample data with actual API calls
   */
  loadData(): void {
    // Load summary statistics
    // TODO: Replace with actual API call
    // Example: this.reportService.getSummaryStats().subscribe(...)
    this.totalRevenue = 2567890;
    this.convertedLeads = 145;
    this.totalSubUsers = 23;

    // Load sub users list
    // TODO: Replace with actual API call
    // Example: this.userService.getSubUsers().subscribe(...)
    this.subUsers = [
      'All Users',
      'Rajesh Kumar',
      'Priya Sharma',
      'Amit Patel',
      'Sneha Desai',
      'Vikram Singh'
    ];

    // Set default selected user
    if (this.subUsers.length > 0) {
      this.selectedUser = this.subUsers[0];
    }

    // Load download history
    // TODO: Replace with actual API call
    // Example: this.reportService.getDownloadHistory().subscribe(...)
    this.dataSource = [
      {
        fileName: 'sales_report_jan_2024.xlsx',
        subUser: 'Rajesh Kumar',
        dateRange: '01/01/2024 - 31/01/2024',
        downloadedBy: 'Admin',
        downloadedAt: '15/01/2024 10:30 AM'
      },
      {
        fileName: 'leads_report_dec_2023.xlsx',
        subUser: 'Priya Sharma',
        dateRange: '01/12/2023 - 31/12/2023',
        downloadedBy: 'Admin',
        downloadedAt: '10/01/2024 03:15 PM'
      },
      {
        fileName: 'monthly_summary_nov_2023.xlsx',
        subUser: 'All Users',
        dateRange: '01/11/2023 - 30/11/2023',
        downloadedBy: 'Manager',
        downloadedAt: '05/01/2024 09:45 AM'
      },
      {
        fileName: 'conversion_report_oct_2023.xlsx',
        subUser: 'Amit Patel',
        dateRange: '01/10/2023 - 31/10/2023',
        downloadedBy: 'Admin',
        downloadedAt: '02/01/2024 02:20 PM'
      },
      {
        fileName: 'revenue_analysis_sep_2023.xlsx',
        subUser: 'Sneha Desai',
        dateRange: '01/09/2023 - 30/09/2023',
        downloadedBy: 'Admin',
        downloadedAt: '28/12/2023 11:00 AM'
      },
      {
        fileName: 'quarterly_report_q3_2023.xlsx',
        subUser: 'All Users',
        dateRange: '01/07/2023 - 30/09/2023',
        downloadedBy: 'Manager',
        downloadedAt: '20/12/2023 04:30 PM'
      },
      {
        fileName: 'leads_pipeline_aug_2023.xlsx',
        subUser: 'Vikram Singh',
        dateRange: '01/08/2023 - 31/08/2023',
        downloadedBy: 'Admin',
        downloadedAt: '15/12/2023 01:15 PM'
      },
      {
        fileName: 'sales_forecast_jul_2023.xlsx',
        subUser: 'Rajesh Kumar',
        dateRange: '01/07/2023 - 31/07/2023',
        downloadedBy: 'Manager',
        downloadedAt: '10/12/2023 10:00 AM'
      },
      {
        fileName: 'customer_report_jun_2023.xlsx',
        subUser: 'Priya Sharma',
        dateRange: '01/06/2023 - 30/06/2023',
        downloadedBy: 'Admin',
        downloadedAt: '05/12/2023 03:45 PM'
      },
      {
        fileName: 'performance_metrics_may_2023.xlsx',
        subUser: 'All Users',
        dateRange: '01/05/2023 - 31/05/2023',
        downloadedBy: 'Manager',
        downloadedAt: '01/12/2023 09:30 AM'
      },
      {
        fileName: 'territory_analysis_apr_2023.xlsx',
        subUser: 'Amit Patel',
        dateRange: '01/04/2023 - 30/04/2023',
        downloadedBy: 'Admin',
        downloadedAt: '25/11/2023 02:00 PM'
      },
      {
        fileName: 'conversion_funnel_mar_2023.xlsx',
        subUser: 'Sneha Desai',
        dateRange: '01/03/2023 - 31/03/2023',
        downloadedBy: 'Admin',
        downloadedAt: '20/11/2023 11:20 AM'
      }
    ];

    this.updatePaginatedData();
  }

  /**
   * Handle Excel report download
   */
  downloadReport(): void {
    // Validate date range
    if (!this.startDate || !this.endDate) {
      alert('Please select both start and end dates');
      return;
    }

    const start = new Date(this.startDate);
    const end = new Date(this.endDate);

    if (start > end) {
      alert('Start date must be before end date');
      return;
    }

    // Log the download request
    console.log('Downloading report...');
    console.log('Selected User:', this.selectedUser);
    console.log('Start Date:', this.startDate);
    console.log('End Date:', this.endDate);

    // TODO: Implement actual download logic
    // Example API call:
    /*
    this.reportService.downloadExcelReport({
      user: this.selectedUser,
      startDate: this.startDate,
      endDate: this.endDate
    }).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `report_${this.startDate}_to_${this.endDate}.xlsx`;
        link.click();
        window.URL.revokeObjectURL(url);
        
        // Optionally reload download history
        this.loadData();
      },
      error: (error) => {
        console.error('Download failed:', error);
        alert('Failed to download report. Please try again.');
      }
    });
    */

    // Temporary simulation
    alert(`Downloading report for ${this.selectedUser} from ${this.startDate} to ${this.endDate}`);
  }

  /**
   * Handle page size change
   */
  onPageSizeChange(): void {
    this.currentPage = 1;
    this.updatePaginatedData();
  }

  /**
   * Navigate to specific page
   * @param page - Page number to navigate to
   */
  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePaginatedData();
    }
  }

  /**
   * Get array of page numbers to display in pagination
   * @returns Array of page numbers
   */
  getPageNumbers(): number[] {
    const pages: number[] = [];
    const maxVisible = 5;
    let start = Math.max(1, this.currentPage - 2);
    let end = Math.min(this.totalPages, start + maxVisible - 1);
    
    if (end - start < maxVisible - 1) {
      start = Math.max(1, end - maxVisible + 1);
    }
    
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }

  /**
   * Update paginated data based on current page and page size
   */
  updatePaginatedData(): void {
    this.totalRecords = this.dataSource.length;
    this.totalPages = Math.ceil(this.totalRecords / this.pageSize);
    
    // Ensure current page is valid
    if (this.currentPage > this.totalPages && this.totalPages > 0) {
      this.currentPage = this.totalPages;
    }
    
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedData = this.dataSource.slice(start, end);
  }

  /**
   * Refresh data (can be called on demand)
   */
  refreshData(): void {
    this.loadData();
  }
}