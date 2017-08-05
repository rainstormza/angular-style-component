import { StyleComponentPage } from './app.po';

describe('style-component App', () => {
  let page: StyleComponentPage;

  beforeEach(() => {
    page = new StyleComponentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
