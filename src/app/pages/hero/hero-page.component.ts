import { UpperCasePipe } from "@angular/common";
import { Component, computed,signal } from "@angular/core";

@Component({
    templateUrl:'./hero-page.component.html',
    imports: [UpperCasePipe]
})
export class HeroPageComponent{
    name = signal("Ironman");
    age = signal(45);

    heroDescription = computed(()=> {return `${this.name()} - ${this.age()}`});
    /*getHeroDescription(){
        return `${ this.name } - ${ this.age }`;
    }*/
    capitalizedName = computed(()=>{return this.name().toUpperCase()});
    changeHero(){
        this.name.update(current => current="Spiderman")
        this.age.update(current => current = 22);
    }

    resetForm(){
        this.name.set("Ironman")
        this.age.set(45);
    }

    changeAge(){
        this.age.update(current=> current= 60);
    }
}