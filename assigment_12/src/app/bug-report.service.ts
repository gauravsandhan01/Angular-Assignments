import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BugReportService {

  public bugReport: any = null;

  setBugReport(report: any) 
  {
    this.bugReport = report;
  }

  getBugReport(): any 
  {
    return this.bugReport;
  }
}
