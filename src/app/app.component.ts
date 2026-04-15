import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Phone, Mail, Linkedin, Code2, Terminal, User, Car, Heart } from 'lucide-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly Phone = Phone;
  readonly Mail = Mail;
  readonly Linkedin = Linkedin;
  readonly Code2 = Code2;
  readonly Terminal = Terminal;
  readonly User = User;
  readonly Car = Car;
  readonly Heart = Heart;

  skills = [
    'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 
    '.NET', 'Python', 'MySQL', 'NoSQL', 'API', 'DevOps', 'Cloud'
  ];
}