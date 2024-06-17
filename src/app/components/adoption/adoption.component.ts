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
    const animalId = this.route.snapshot.paramMap.get('id');
    if (animalId) {
      this.getAnimalDetail(animalId);
    } else {
      // Manejar el caso donde no hay un ID válido
      console.error('No se proporcionó un ID de animal válido');
    }
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
      status: 'Disponible'
    };
    this.adoptionForm.pet_id = this.animalDetail.id;
  }

  onSubmit() {
    console.log('Formulario de adopción enviado', this.adoptionForm);
    // Aquí puedes manejar el envío del formulario
  }
}
