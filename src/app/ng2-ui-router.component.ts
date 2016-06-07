import { Component } from '@angular/core';
import {UIROUTER_DIRECTIVES} from "ui-router-ng2";

@Component({
  moduleId: module.id,
  selector: 'ng2-ui-router-app',
  template: `
      <a uiSref="app.route1" [uiOptions]="{ inherit: false }" uiSrefActive="active">One</a>
      <a uiSref="app.route2" [uiOptions]="{ inherit: false }" uiSrefActive="active">Two</a>
      <ui-view></ui-view>
      <ui-view name="footer"></ui-view>
`,
  styleUrls: ['ng2-ui-router.component.css'],
  directives: [UIROUTER_DIRECTIVES]
})
export class Ng2UiRouterAppComponent {
  title = 'ng2-ui-router works!';
}
