import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { Character } from '../../../interfaces/character.interface';//buena practica poner el type cuanse trate de interfaces

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent {

  character = input.required<Character[]>();
  listName = input.required<string>();
}
