'use strict';

describe('Barge App', function() {

  beforeEach(function() {
    browser.ignoreSynchronization = true;
  });

  it('passed the jasmine tests', function() {
    browser.get('/test.html');
    var e = element(by.css('span.passed'));
    expect(e.getText()).toMatch('0 failures');
  });

  it('has a start button and that shows the chart', function() {
    browser.get('/');
    var e = element(by.css('a.btn'));
    expect(e.getText()).toBe('START HERE');
    e.click();
    var e2 = element(by.css('div#chart'));
    expect(e2.isDisplayed()).toBe(true);
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
});
