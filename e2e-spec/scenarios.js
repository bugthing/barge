'use strict';

describe('Barge App', function() {

  beforeEach(function() {
    browser.ignoreSynchronization = true;
  });

  it('has a start button', function() {
    browser.get('/');
    var e = element(by.css('a.btn'));
    expect(e.getText()).toBe('START HERE');
  });

  //describe('view1', function() {
  //  beforeEach(function() {
  //    browser.get('index.html#/view1');
  //  });
  //  it('should render view1 when user navigates to /view1', function() {
  //    expect(element.all(by.css('[ng-view] p')).first().getText()).
  //      toMatch(/partial for view 1/);
  //  });
  //});

  //describe('view2', function() {
  //  beforeEach(function() {
  //    browser.get('index.html#/view2');
  //  });
  //  it('should render view2 when user navigates to /view2', function() {
  //    expect(element.all(by.css('[ng-view] p')).first().getText()).
  //      toMatch(/partial for view 2/);
  //  });
  //});
});
