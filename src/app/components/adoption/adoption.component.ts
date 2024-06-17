import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface AnimalDetail {
  id: number;
  name: string;
  birthDate: string;
  type: string;
  gender: string;
  size: string;
  color: string;
  story: string;
  specialSkills: string;
  energyLevel: string;
  compatibility: string;
  status: string;
  imageUrl: string; // Agrega la propiedad imageUrl
}

@Component({
  selector: 'app-adoption',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './adoption.component.html',
  styleUrls: ['./adoption.component.css']
})
export class AdoptionComponent implements OnInit {
  animalDetail: AnimalDetail | undefined;
  adoptionForm = {
    adoptionDate: '',
    adoptionType: '',
    adoptionDuration: '',
    adoptionConditions: '',
    pet_id: null as number | null,  // Ajustamos el tipo a number o null
    user_id: null as number | null  // Ajustamos el tipo a number o null
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAnimalDetail('1');
    this.setDefaultAdoptionDate();
  }

  setDefaultAdoptionDate() {
    const today = new Date().toISOString().split('T')[0];
    this.adoptionForm.adoptionDate = today;
  }

  getAnimalDetail(id: string) {
    // Simula una llamada a la API para obtener los detalles del animal por id
    // Reemplaza este código con la llamada real a la API
    this.animalDetail = {
      id: 1,
      name: 'Fido',
      birthDate: '2020-01-01',
      type: 'Perro',
      gender: 'Macho',
      size: 'Grande',
      color: 'Dorado',
      story: 'Una historia conmovedora...',
      specialSkills: 'Habilidades especiales',
      energyLevel: 'Alto',
      compatibility: 'Compatible con niños y otros animales',
      status: 'Disponible',
      imageUrl: 'https://imgs.search.brave.com/OeCUcSltf0mKOKTV86oizKMxLpbVsaKoT7AJOrutifc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50Lm5hdGlvbmFs/Z2VvZ3JhcGhpYy5j/b20uZXMvbWVkaW8v/MjAyMy8xMS8wOC9t/YXN0aW4taW5nbGVz/LWlzdG9jay1kYXJ3/aW4tYnJhbmRpc19m/MzU3NDU4OF8yMzEx/MDgxODQzNTdfODAw/eDgwMC5qcGc' // Agrega una URL de imagen
    };
    this.adoptionForm.pet_id = this.animalDetail.id;
  }

  onAdoptionTypeChange() {
    if (this.adoptionForm.adoptionType === 'Permanente') {
      this.adoptionForm.adoptionDuration = '';
    }
  }

  onSubmit() {
    console.log('Formulario de adopción enviado', this.adoptionForm);
    // Aquí puedes manejar el envío del formulario
  }
}
