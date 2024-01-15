import { Component } from '@angular/core';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BugReportService } from '../bug-report.service';
import { BugInfoComponent } from '../bug-info/bug-info.component';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ButtonsModule,BugInfoComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  providers : [BugReportService]
})
export class FooterComponent {
}
