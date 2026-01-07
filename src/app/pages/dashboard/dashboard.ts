import { Component } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  imports: [ BaseChartDirective],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  
  barChartType: 'bar' = 'bar';
  pieChartType: 'pie' = 'pie';

  barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['New', 'Contacted', 'Converted'],
    datasets: [
      {
        data: [32, 78, 418],
        backgroundColor: ['#60a5fa', '#fbbf24', '#22c55e']
      }
    ]
  };

  barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    plugins: {
      legend: { display: false }
    }
  };

  pieChartData: ChartConfiguration<'pie'>['data'] = {
    labels: ['Website', 'Email', 'Referral'],
    datasets: [
      {
        data: [55, 30, 15],
        backgroundColor: ['#3b82f6', '#a855f7', '#f97316']
      }
    ]
  };
}
