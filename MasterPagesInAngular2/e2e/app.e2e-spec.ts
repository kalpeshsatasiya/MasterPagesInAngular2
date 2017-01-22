import { MasterPagesInAngular2Page } from './app.po';

describe('master-pages-in-angular2 App', function() {
  let page: MasterPagesInAngular2Page;

  beforeEach(() => {
    page = new MasterPagesInAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
