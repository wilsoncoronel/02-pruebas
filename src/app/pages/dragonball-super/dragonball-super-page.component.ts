import { Component,  inject,  signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add.component';
import { Character } from '../../interfaces/character.interface';
import {DragonballService} from '../../services/dragonball.service';
@Component({
  selector: 'dragonball-super',
  imports: [CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragonball-super-page.component.html'
})
export class DragonballSuperComponent {
  
  public dragonballService = inject(DragonballService);//forma recomendada de usar inyeccion de dependencias en angular

}
