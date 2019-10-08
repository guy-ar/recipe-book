import { Component, Output, EventEmitter} from '@angular/core'
//import { EventEmitter } from 'events';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
@Output() componenetSelected: EventEmitter<String> = new EventEmitter<string>();

    onSelectRecipes() {
        this.componenetSelected.emit('Recipes');
        console.log("componenetSelected emitted with Recipes")
    }

    onSelectShoppingList() {
        this.componenetSelected.emit('Shopping');
        console.log("componenetSelected emitted with Shopping")
    }
}