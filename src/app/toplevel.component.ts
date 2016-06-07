import { Component } from '@angular/core';
import {UIROUTER_DIRECTIVES} from "ui-router-ng2";

@Component({
    directives: [UIROUTER_DIRECTIVES],
    template: `
    <p>Routed Content</p>
    <hr>
    <ui-view></ui-view>
    `
})
export class TopLevelComponent {
    
}