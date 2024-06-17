import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Animal {
  name: string;
  image: string;
  description: string;
  age: number;
  breed: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  animals: Animal[] = [
    {
      name: 'Fido',
      image: 'https://via.placeholder.com/300x200.png?text=Fido',
      description: 'Perro amistoso y juguetón',
      age: 3,
      breed: 'Golden Retriever'
    },
    {
      name: 'Whiskers',
      image: 'https://via.placeholder.com/300x200.png?text=Whiskers',
      description: 'Gato curioso y cariñoso',
      age: 2,
      breed: 'Siames'
    },
    {
      name: 'Buddy',
      image: 'https://via.placeholder.com/300x200.png?text=Buddy',
      description: 'Perro leal y protector',
      age: 5,
      breed: 'German Shepherd'
    },
    {
      name: 'Mittens',
      image: 'https://via.placeholder.com/300x200.png?text=Mittens',
      description: 'Gato juguetón y travieso',
      age: 1,
      breed: 'Persa'
    }
  ];
}
