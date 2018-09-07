import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

  //another approach
  // selector: 'app-root',
  // template: `<p>hello</p> 
  //  <h2>bye</h2>
  //  <h3>test</h3>`,
  // styles: [`p{color:red}
  // h3{color:blue};`]
})
export class AppComponent {
  title = 'app';
}
