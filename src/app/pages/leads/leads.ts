import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Lead {
  id: number;
  name: string;
  email: string;
  phone?: string;
  status: 'New' | 'Contacted' | 'Qualified' | 'Converted' | 'Lost';
  source: string;
  dateAdded: string;
}

@Component({
  selector: 'app-leads',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './leads.html',
  styleUrls: ['./leads.css']
})
export class Leads implements OnInit {
  // Search and Filter
  searchTerm: string = '';
  filterStatus: string = '';
  filterSource: string = '';

  // Table Data
  dataSource: Lead[] = [];
  filteredData: Lead[] = [];
  paginatedData: Lead[] = [];

  // Pagination
  currentPage: number = 1;
  pageSize: number = 10;
  totalRecords: number = 0;
  totalPages: number = 0;
  Math = Math;

  // Sorting
  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  constructor() {}

  ngOnInit(): void {
    this.loadLeads();
  }

  /**
   * Load leads data
   */
  loadLeads(): void {
    // TODO: Replace with actual API call
    this.dataSource = [
      {
        id: 1,
        name: 'Rajesh Kumar',
        email: 'rajesh.kumar@example.com',
        phone: '+91 98765 43210',
        status: 'New',
        source: 'Website',
        dateAdded: '15 Jan 2024'
      },
      {
        id: 2,
        name: 'Priya Sharma',
        email: 'priya.sharma@example.com',
        phone: '+91 98765 43211',
        status: 'Contacted',
        source: 'Referral',
        dateAdded: '14 Jan 2024'
      },
      {
        id: 3,
        name: 'Amit Patel',
        email: 'amit.patel@example.com',
        phone: '+91 98765 43212',
        status: 'Qualified',
        source: 'Social Media',
        dateAdded: '13 Jan 2024'
      },
      {
        id: 4,
        name: 'Sneha Desai',
        email: 'sneha.desai@example.com',
        phone: '+91 98765 43213',
        status: 'Converted',
        source: 'Email Campaign',
        dateAdded: '12 Jan 2024'
      },
      {
        id: 5,
        name: 'Vikram Singh',
        email: 'vikram.singh@example.com',
        phone: '+91 98765 43214',
        status: 'Lost',
        source: 'Website',
        dateAdded: '11 Jan 2024'
      },
      {
        id: 6,
        name: 'Ananya Iyer',
        email: 'ananya.iyer@example.com',
        phone: '+91 98765 43215',
        status: 'New',
        source: 'Referral',
        dateAdded: '10 Jan 2024'
      },
      {
        id: 7,
        name: 'Rohan Mehta',
        email: 'rohan.mehta@example.com',
        phone: '+91 98765 43216',
        status: 'Contacted',
        source: 'Social Media',
        dateAdded: '09 Jan 2024'
      },
      {
        id: 8,
        name: 'Kavya Reddy',
        email: 'kavya.reddy@example.com',
        phone: '+91 98765 43217',
        status: 'Qualified',
        source: 'Website',
        dateAdded: '08 Jan 2024'
      },
      {
        id: 9,
        name: 'Arjun Nair',
        email: 'arjun.nair@example.com',
        phone: '+91 98765 43218',
        status: 'Converted',
        source: 'Email Campaign',
        dateAdded: '07 Jan 2024'
      },
      {
        id: 10,
        name: 'Divya Kapoor',
        email: 'divya.kapoor@example.com',
        phone: '+91 98765 43219',
        status: 'New',
        source: 'Referral',
        dateAdded: '06 Jan 2024'
      },
      {
        id: 11,
        name: 'Karan Malhotra',
        email: 'karan.malhotra@example.com',
        phone: '+91 98765 43220',
        status: 'Contacted',
        source: 'Website',
        dateAdded: '05 Jan 2024'
      },
      {
        id: 12,
        name: 'Ishita Gupta',
        email: 'ishita.gupta@example.com',
        phone: '+91 98765 43221',
        status: 'Qualified',
        source: 'Social Media',
        dateAdded: '04 Jan 2024'
      },
      {
        id: 13,
        name: 'Aditya Joshi',
        email: 'aditya.joshi@example.com',
        phone: '+91 98765 43222',
        status: 'Lost',
        source: 'Email Campaign',
        dateAdded: '03 Jan 2024'
      },
      {
        id: 14,
        name: 'Meera Krishnan',
        email: 'meera.krishnan@example.com',
        phone: '+91 98765 43223',
        status: 'Converted',
        source: 'Website',
        dateAdded: '02 Jan 2024'
      },
      {
        id: 15,
        name: 'Siddharth Rao',
        email: 'siddharth.rao@example.com',
        phone: '+91 98765 43224',
        status: 'New',
        source: 'Referral',
        dateAdded: '01 Jan 2024'
      }
    ];

    this.filteredData = [...this.dataSource];
    this.updatePaginatedData();
  }

  /**
   * Search leads
   */
  onSearch(): void {
    this.applyFilters();
  }

  /**
   * Filter change handler
   */
  onFilterChange(): void {
    this.applyFilters();
  }

  /**
   * Apply all filters
   */
  applyFilters(): void {
    this.filteredData = this.dataSource.filter(lead => {
      const matchesSearch = !this.searchTerm || 
        lead.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        lead.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        (lead.phone && lead.phone.includes(this.searchTerm));

      const matchesStatus = !this.filterStatus || lead.status === this.filterStatus;
      const matchesSource = !this.filterSource || lead.source === this.filterSource;

      return matchesSearch && matchesStatus && matchesSource;
    });

    this.currentPage = 1;
    this.updatePaginatedData();
  }

  /**
   * Sort table by column
   */
  sortBy(column: string): void {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    this.filteredData.sort((a: any, b: any) => {
      const aVal = a[column];
      const bVal = b[column];

      if (aVal < bVal) return this.sortDirection === 'asc' ? -1 : 1;
      if (aVal > bVal) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });

    this.updatePaginatedData();
  }

  /**
   * Get initials from name
   */
  getInitials(name: string): string {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  }

  /**
   * Get status class for badge
   */
  getStatusClass(status: string): string {
    const statusMap: { [key: string]: string } = {
      'New': 'status-new',
      'Contacted': 'status-contacted',
      'Qualified': 'status-qualified',
      'Converted': 'status-converted',
      'Lost': 'status-lost'
    };
    return statusMap[status] || '';
  }

  /**
   * View lead details
   */
  viewLead(lead: Lead): void {
    console.log('Viewing lead:', lead);
    // TODO: Navigate to lead details page or open modal
    // Example: this.router.navigate(['/dashboard/leads', lead.id]);
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
   */
  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePaginatedData();
    }
  }

  /**
   * Get page numbers for pagination
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
   * Update paginated data
   */
  updatePaginatedData(): void {
    this.totalRecords = this.filteredData.length;
    this.totalPages = Math.ceil(this.totalRecords / this.pageSize);

    if (this.currentPage > this.totalPages && this.totalPages > 0) {
      this.currentPage = this.totalPages;
    }

    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedData = this.filteredData.slice(start, end);
  }
}