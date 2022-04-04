import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrondEnd';

  /**
   *
   */
  constructor(private toastr:ToastrService) {}
    
    showToastr(){
      this.toastr.success('some messages', 'tittle');
  }
}
