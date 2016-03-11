'use strict';

describe('Barge App', function() {

  beforeEach(function() {
    browser.ignoreSynchronization = true;
  });

  describe('start a suite', function() {

    beforeEach(function() {
      browser.get('/');
    });

    it('should render an form when start clicked', function() {
        var e1 = element(by.css('a.e2e-button-new-suite'));
        e1.click();
        expect(e1.isDisplayed()).toBe(true);

        var e2 = element(by.css('a.e2e-button-suite'));
        expect(e2.getText()).toEqual('--');
        e2.click();

        var e3 = element(by.css('div.e2e-row-suite-name-input textarea'));
        expect(e3.isDisplayed()).toBe(true);
        e3.sendKeys('My First Suite');

        expect(e2.getText()).toEqual('My First Suite');
    });
  });
});
