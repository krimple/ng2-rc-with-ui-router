import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Ng2UiRouterAppComponent } from '../app/ng2-ui-router.component';

beforeEachProviders(() => [Ng2UiRouterAppComponent]);

describe('App: Ng2UiRouter', () => {
  it('should create the app',
      inject([Ng2UiRouterAppComponent], (app: Ng2UiRouterAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng2-ui-router works!\'',
      inject([Ng2UiRouterAppComponent], (app: Ng2UiRouterAppComponent) => {
    expect(app.title).toEqual('ng2-ui-router works!');
  }));
});
