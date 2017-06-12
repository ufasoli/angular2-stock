import { Angular2StockPage } from './app.po';

describe('angular2-stock App', () => {
  let page: Angular2StockPage;

  beforeEach(() => {
    page = new Angular2StockPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
