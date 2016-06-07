import {TopLevelComponent} from './toplevel.component';
import {Ng2StateDeclaration} from "ui-router-ng2/ng2/interface";
import {ROUTE1_STATES} from './route1/route1.states';
import {ROUTE2_STATES} from './route2/route2.states';

let MAIN_STATES: Ng2StateDeclaration[] = [
    { name: 'app', component: TopLevelComponent }
];

export let INITIAL_STATES: Ng2StateDeclaration[] =
    MAIN_STATES.concat(ROUTE1_STATES).concat(ROUTE2_STATES);
