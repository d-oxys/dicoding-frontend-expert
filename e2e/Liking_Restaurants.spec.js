const { test, expect } = require('@jest/globals');
const { Builder, By, until } = require('selenium-webdriver');

let driver;

beforeAll(async () => {
  driver = await new Builder().forBrowser('MicrosoftEdge').build();
  await driver.get('http://localhost:9000/#/favorite');
});

afterAll(async () => {
  await driver.quit();
}, 15000);

test('showing empty liked restaurants', async () => {
  let element = await driver.wait(until.elementLocated(By.xpath("//*[contains(text(), 'Tidak ada favorite restaurant yang ditampilkan')]")), 5000);
  expect(await element.getText()).toBe('Tidak ada favorite restaurant yang ditampilkan');
});

test('liking one restaurant', async () => {
  await driver.get('http://localhost:9000/#/detail/rqdv5juczeskfw1e867');
  let likeButton = await driver.wait(until.elementLocated(By.id('likeButton')), 5000);
  await likeButton.click();
  let likedRestaurant = await driver.wait(until.elementLocated(By.xpath("//*[contains(@aria-label, 'unlike this restaurant')]")), 5000);
  expect(await likedRestaurant.isDisplayed()).toBe(true);
});

test('unliking one restaurant', async () => {
  await driver.get('http://localhost:9000/#/detail/rqdv5juczeskfw1e867');

  let unlikeButton = await driver.wait(until.elementLocated(By.xpath("//*[contains(@aria-label, 'unlike this restaurant')]")), 5000);
  await unlikeButton.click();

  let unlikedRestaurant = await driver.wait(until.elementLocated(By.xpath("//*[contains(@aria-label, 'like this restaurant')]")), 5000);
  expect(await unlikedRestaurant.isDisplayed()).toBe(true);
});
