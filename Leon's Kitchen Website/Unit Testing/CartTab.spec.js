// Login to cart tab
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Login to Cart Tab', function() {
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
  it('Login to Cart Tab', async function() {
    await driver.get("http://localhost:3000/restaurantdetailpagedesktop")
    await driver.manage().window().setRect({ width: 1552, height: 832 })
    await driver.findElement(By.css(".text-black-900:nth-child(6)")).click()
  })
})

// Increase the no of items
describe('Increase the Quantity', function() {
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
  it('Increase Qauntity', async function() {
    await driver.get("http://localhost:3000/orderingpage")
    await driver.manage().window().setRect({ width: 1552, height: 832 })
    // await driver.findElement(By.css(".bg-gray-50_02:nth-child(1) .arrow-button:nth-child(1) path")).click()
    // await driver.findElement(By.css(".bg-gray-50_02:nth-child(1) .arrow-button:nth-child(1) path")).click()
    // await driver.findElement(By.css(".bg-gray-50_02:nth-child(2) .arrow-button:nth-child(1) > .svg-inline--fa")).click()
    // await driver.findElement(By.css(".bg-gray-50_02:nth-child(2) .arrow-button:nth-child(1) > .svg-inline--fa")).click()
    // await driver.findElement(By.css(".bg-gray-50_02:nth-child(3) .arrow-button:nth-child(1) path")).click()
    // await driver.findElement(By.css(".bg-gray-50_02:nth-child(3) .arrow-button:nth-child(1) path")).click()
  })
})

// Decrease the no of items
describe('Decrease the Quantity', function() {
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
  it('Decreasing Quantity', async function() {
    await driver.get("http://localhost:3000/orderingpage")
    await driver.manage().window().setRect({ width: 1552, height: 832 })
    // await driver.findElement(By.css(".bg-gray-50_02:nth-child(1) .arrow-button:nth-child(1) > .svg-inline--fa")).click()
    // await driver.findElement(By.css(".bg-gray-50_02:nth-child(1) .arrow-button:nth-child(1) > .svg-inline--fa")).click()
    // await driver.findElement(By.css(".bg-gray-50_02:nth-child(1) .arrow-button:nth-child(3) path")).click()
    // await driver.findElement(By.css(".bg-gray-50_02:nth-child(3) .arrow-button:nth-child(1) > .svg-inline--fa")).click()
    // await driver.findElement(By.css(".bg-gray-50_02:nth-child(3) .arrow-button:nth-child(1) path")).click()
    // await driver.findElement(By.css(".bg-gray-50_02:nth-child(3) .arrow-button:nth-child(3) > .svg-inline--fa")).click()
  })
})

// Delete items
describe('Delete Items', function() {
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
  it('Delete Item', async function() {
    await driver.get("http://localhost:3000/orderingpage")
    await driver.manage().window().setRect({ width: 1552, height: 832 })
    // await driver.findElement(By.css(".bg-gray-50_02:nth-child(3) > .delete-button path")).click()
  })
})

// Place order
describe('Place Order', function() {
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
  async function waitForWindow(timeout = 2) {
    await driver.sleep(timeout)
    const handlesThen = vars["windowHandles"]
    const handlesNow = await driver.getAllWindowHandles()
    if (handlesNow.length > handlesThen.length) {
      return handlesNow.find(handle => (!handlesThen.includes(handle)))
    }
    throw new Error("New window did not appear before timeout")
  }
  it('Place Order', async function() {
    await driver.get("http://localhost:3000/orderingpage")
    await driver.manage().window().setRect({ width: 1552, height: 832 })
    await driver.findElement(By.css(".bg-orange-600_cc:nth-child(2) > .ml-\\[26px\\]")).click()
    vars["windowHandles"] = await driver.getAllWindowHandles()
    await driver.findElement(By.css(".border-black-1900_1c > span:nth-child(2)")).click()
    vars["win1048"] = await waitForWindow(2000)
    await driver.switchTo().window(vars["win1048"])
  })
})

