const { Builder, By, until } = require('selenium-webdriver');
const { test, expect } = require('@jest/globals');

let driver;

beforeAll(async () => {
  driver = await new Builder().forBrowser('MicrosoftEdge').build();
});

afterAll(async () => {
  await driver.quit();
});

test('Post resto review', async () => {
  await driver.get('http://localhost:9000/#/detail/vfsqv0t48jkfw1e867');

  const nameInput = driver.findElement(By.id('inputName'));
  const reviewInput = driver.findElement(By.id('inputReview'));
  const submitButton = driver.findElement(By.id('submit-review'));

  await nameInput.sendKeys('Test Name');
  await reviewInput.sendKeys('Test Review');
  await submitButton.click();

  await driver.wait(until.elementLocated(By.xpath("//*[contains(text(), 'Test Name')]")), 10000);

  const namePosted = await driver.findElement(By.xpath("//*[contains(text(), 'Test Name')]")).getText();
  const reviewPosted = await driver.findElement(By.xpath("//*[contains(text(), 'Test Review')]")).getText();

  expect(namePosted).toContain('Test Name');
  expect(reviewPosted).toContain('Test Review');
});
