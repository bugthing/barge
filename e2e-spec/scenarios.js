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
        var e = element(by.css('a.e2e-startbutton'));
        expect(e.getText()).toBe('START HERE');
        e.click();
        var e2 = element(by.css('div#chart'));
        expect(e2.isDisplayed()).toBe(true);
    });

    describe('starting the forms', function() {
    //  beforeEach(function() {
    //    browser.get('index.html#/view1');
    //  });
        it('should render an form when start clicked', function() {
            //var e = element(by.css('a.e2e-startbutton'));
            //e.click();
            //var e2 = element(by.css('div#chart'));
            //expect(e2.isDisplayed()).toBe(true);
            ////TODO: Added clicking of the next button
        });
    });
});
