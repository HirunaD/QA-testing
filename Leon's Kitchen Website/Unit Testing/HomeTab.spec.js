// Login to home tab
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Login to Home Tab', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Home Tab', async function() {
    await driver.get("http://localhost:3000/orderingpage")
    await driver.manage().window().setRect({ width: 1552, height: 832 })
    await driver.findElement(By.css(".text-white")).click()
  })
})
