export class Ng2UiRouterPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2-ui-router-app h1')).getText();
  }
}
