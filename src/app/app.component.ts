import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    // AuthModule,
    // RegisterComponent,
    // ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  goToBack() {
    this.router.navigate(['/']);
  }
  title = 'mca';

  constructor(private router: Router) {}
  goToRegistration() {
    this.router.navigate(['register']);
  }
}
