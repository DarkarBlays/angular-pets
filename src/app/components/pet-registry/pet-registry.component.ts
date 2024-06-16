// pet-registry.component.ts
import { Component, Injector, OnInit } from '@angular/core';
import { Pet } from '../../models/pet';
import { PetService } from '../../services/pet.service';

@Component({
  selector: 'app-pet-registry',
  standalone: true,
  templateUrl: './pet-registry.component.html',
  styleUrls: ['./pet-registry.component.css'],
})
export class PetRegistryComponent implements OnInit {
  pet: Pet = new Pet();
  private petService: PetService;

  constructor(private injector: Injector) {
    this.petService = this.injector.get(PetService);
  }

  ngOnInit(): void {
  }

  createPet(): void {
    this.petService.createPet(this.pet).subscribe(response => {
      console.log(response);
    });
  }
}
