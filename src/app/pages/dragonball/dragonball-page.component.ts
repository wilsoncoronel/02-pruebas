import { Component, computed, signal } from '@angular/core';
interface Character{
  id: number;
  name: string;
  power: number;
}
@Component({
  selector: 'app-dragonball',
  imports: [],
  templateUrl: './dragonball-page.component.html'
})
export class DragonballComponent {
  name = signal("");
  power= signal(0);
  character= signal<Character[]>([
    {id: 1, name: 'Wilson', power:9001},
  ]);

  addCharacter(){
    if(!this.name() || !this.power() || this.power() <= 0)
     return;

    const newCharacter: Character={
      id: this.character().length+1,
      name:this.name(),
      power: this.power()
    };
    //this.character().push(newCharacter); no recomendado el push en un signal

    this.character.update(list=> [...list, newCharacter]); //forma correcta de agregr un nuevo elemento a un array desde un signal
  }
}
