import { InfraxisDevPage } from './app.po';

describe('infraxis-dev App', () => {
  let page: InfraxisDevPage;

  beforeEach(() => {
    page = new InfraxisDevPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
