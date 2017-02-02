import { SimpleFullDisplayPage } from './app.po';

describe('simple-full-display App', function() {
  let page: SimpleFullDisplayPage;

  beforeEach(() => {
    page = new SimpleFullDisplayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
