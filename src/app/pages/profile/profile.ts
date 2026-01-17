import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface User {
  id: number;
  name: string;
  email: string;
  phone?: string;
  role: 'ADMIN' | 'USER' | 'MANAGER';
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})
export class Profile implements OnInit {
  currentUser: User = {
    id: 1,
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@company.com',
    phone: '+91 98765 43210',
    role: 'ADMIN'
  };

  subUsers: User[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadCurrentUser();
    if (this.currentUser.role === 'ADMIN') {
      this.loadSubUsers();
    }
  }

  /**
   * Load current user data
   */
  loadCurrentUser(): void {
    // TODO: Replace with actual API call
    // Example: this.authService.getCurrentUser().subscribe(user => this.currentUser = user);
    
    // Sample data - replace with your API
    this.currentUser = {
      id: 1,
      name: 'Rajesh Kumar',
      email: 'rajesh.kumar@company.com',
      phone: '+91 98765 43210',
      role: 'ADMIN'
    };
  }

  /**
   * Load sub users (for admin only)
   */
  loadSubUsers(): void {
    // TODO: Replace with actual API call
    // Example: this.userService.getSubUsers().subscribe(users => this.subUsers = users);
    
    // Sample data
    this.subUsers = [
      {
        id: 2,
        name: 'Priya Sharma',
        email: 'priya.sharma@company.com',
        phone: '+91 98765 43211',
        role: 'USER'
      },
      {
        id: 3,
        name: 'Amit Patel',
        email: 'amit.patel@company.com',
        phone: '+91 98765 43212',
        role: 'MANAGER'
      },
      {
        id: 4,
        name: 'Sneha Desai',
        email: 'sneha.desai@company.com',
        phone: '+91 98765 43213',
        role: 'USER'
      },
      {
        id: 5,
        name: 'Vikram Singh',
        email: 'vikram.singh@company.com',
        phone: '+91 98765 43214',
        role: 'USER'
      },
      {
        id: 6,
        name: 'Ananya Iyer',
        email: 'ananya.iyer@company.com',
        phone: '+91 98765 43215',
        role: 'MANAGER'
      }
    ];
  }

  /**
   * Get initials from name
   */
  getInitials(name: string): string {
    if (!name) return '';
    
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  }

  /**
   * Get CSS class for role badge
   */
  getRoleClass(role: string): string {
    const roleMap: { [key: string]: string } = {
      'ADMIN': 'role-admin',
      'USER': 'role-user',
      'MANAGER': 'role-manager'
    };
    return roleMap[role] || 'role-user';
  }

  /**
   * Logout user
   */
  logout(): void {
    // TODO: Implement actual logout logic
    console.log('Logging out...');
    
    // Example logout implementation:
    /*
    this.authService.logout().subscribe({
      next: () => {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Logout failed:', error);
      }
    });
    */

    // Temporary - for demo purposes
    if (confirm('Are you sure you want to logout?')) {
      // Clear any stored data
      localStorage.clear();
      sessionStorage.clear();
      
      // Navigate to login page
      this.router.navigate(['/login']);
    }
  }

  /**
   * Edit user profile
   */
  editProfile(): void {
    console.log('Edit profile clicked');
    // TODO: Open edit profile modal or navigate to edit page
    // Example: this.router.navigate(['/profile/edit']);
  }

  /**
   * Add new sub user
   */
  addUser(): void {
    console.log('Add user clicked');
    // TODO: Open add user modal
    // Example: this.dialog.open(AddUserDialogComponent);
  }

  /**
   * Edit sub user
   */
  editUser(user: User): void {
    console.log('Edit user:', user);
    // TODO: Open edit user modal with user data
    // Example: this.dialog.open(EditUserDialogComponent, { data: user });
  }

  /**
   * Delete sub user
   */
  deleteUser(user: User): void {
    if (confirm(`Are you sure you want to delete ${user.name}?`)) {
      console.log('Delete user:', user);
      
      // TODO: Implement actual delete API call
      /*
      this.userService.deleteUser(user.id).subscribe({
        next: () => {
          this.subUsers = this.subUsers.filter(u => u.id !== user.id);
          // Show success message
        },
        error: (error) => {
          console.error('Delete failed:', error);
          // Show error message
        }
      });
      */

      // Temporary - for demo purposes
      this.subUsers = this.subUsers.filter(u => u.id !== user.id);
      alert('User deleted successfully!');
    }
  }
}