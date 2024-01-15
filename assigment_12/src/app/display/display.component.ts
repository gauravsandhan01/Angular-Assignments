import { Component } from '@angular/core';
import { BugReportService } from '../bug-report.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-display',
  standalone: true,
  imports: [],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css',
  providers: [BugReportService]
})
export class DisplayComponent implements OnInit{
  constructor(private bugReportService: BugReportService) {}

  bugReport: BugReportService = new BugReportService;

  ngOnInit() {
    this.bugReport = this.bugReportService.getBugReport();
  }
}
