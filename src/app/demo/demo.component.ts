import { Component } from '@angular/core';
import { CompsuccessDirective } from '../compsuccess.directive';
import { CompfailureDirective } from '../compfailure.directive';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CompsuccessDirective, CompfailureDirective],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {

}
