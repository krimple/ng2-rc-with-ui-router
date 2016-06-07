import { Ng2UiRouterPage } from './app.po';

describe('ng2-ui-router App', function() {
  let page: Ng2UiRouterPage;

  beforeEach(() => {
    page = new Ng2UiRouterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng2-ui-router works!');
  });
});
