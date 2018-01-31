import { AppTwoPage } from './app.po';

describe('app-two App', function() {
  let page: AppTwoPage;

  beforeEach(() => {
    page = new AppTwoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
