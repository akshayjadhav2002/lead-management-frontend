import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
@Component({
  selector: 'app-profile',
  imports: [  CommonModule, 
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements OnInit {

  currentUser!: User;
  subUsers: User[] = [];

  ngOnInit() {
    // 🔹 Mock logged-in user (replace with API/Auth service)
    this.currentUser = {
      id: 1,
      name: 'John Admin',
      email: 'john@company.com',
      role: 'ADMIN',
    };

    // 🔹 If admin, load sub users
    if (this.currentUser.role === 'ADMIN') {
      this.subUsers = [
        { id: 2, name: 'Alice', email: 'alice@company.com', role: 'USER' },
        { id: 3, name: 'Bob', email: 'bob@company.com', role: 'USER' },
      ];
    }
  }

  logout() {
    console.log('Logging out...');
  }
}
