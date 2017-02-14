import { JitVSaotPage } from './app.po';

describe('jit-vsaot App', function() {
  let page: JitVSaotPage;

  beforeEach(() => {
    page = new JitVSaotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
