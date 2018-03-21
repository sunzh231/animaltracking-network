import { AngularTestPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('Starting tests for angular-app', function() {
  let page: AngularTestPage;

  beforeEach(() => {
    page = new AngularTestPage();
  });

  it('website title should be angular-app', () => {
    page.navigateTo('/');
    return browser.getTitle().then((result)=>{
      expect(result).toBe('angular-app');
    })
  });

  it('navbar-brand should be animaltracking-network@0.0.1',() => {
    var navbarBrand = element(by.css('.navbar-brand')).getWebElement();
    expect(navbarBrand.getText()).toBe('animaltracking-network@0.0.1');
  });

  
    it('Field component should be loadable',() => {
      page.navigateTo('/Field');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('Field');
    });

    it('Field table should have 4 columns',() => {
      page.navigateTo('/Field');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });

  
    it('Animal component should be loadable',() => {
      page.navigateTo('/Animal');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('Animal');
    });

    it('Animal table should have 7 columns',() => {
      page.navigateTo('/Animal');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(7); // Addition of 1 for 'Action' column
      });
    });

  
    it('Business component should be loadable',() => {
      page.navigateTo('/Business');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('Business');
    });

    it('Business table should have 8 columns',() => {
      page.navigateTo('/Business');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(8); // Addition of 1 for 'Action' column
      });
    });

  

});
