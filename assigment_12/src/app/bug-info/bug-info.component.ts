import { Component, OnInit} from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { BugReportService } from '../bug-report.service';
@Component({
  selector: 'app-bug-info',
  standalone: true, 
  imports: [ReactiveFormsModule],
  templateUrl: './bug-info.component.html',
  styleUrl: './bug-info.component.css',
  providers : [BugReportService],
})
export class BugInfoComponent{

   public formData = new FormGroup(
    {
      Date : new FormControl(),
      Time : new FormControl(),
      Impact : new FormControl(),
      Details : new FormControl(),
    }
  )

}
