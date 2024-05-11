// Login to cart tab
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Login to cart tab', function() {
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
  it('carttab', async function() {
    await driver.get("http://localhost:3000/restaurantdetailpagedesktop")
    await driver.manage().window().setRect({ width: 1552, height: 832 })
    await driver.findElement(By.css(".text-black-900:nth-child(6)")).click()
  })
})

// Increase the no of items
describe('Increase the quantity of an item', function() {
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
  it('Decrease the quantity of an item', async function() {
    await driver.get("http://localhost:3000/orderingpage")
    await driver.manage().window().setRect({ width: 1552, height: 832 })
    await driver.findElement(By.css(".bg-gray-50_02:nth-child(1) .arrow-button:nth-child(1) > .svg-inline--fa")).click()
    await driver.findElement(By.css(".bg-gray-50_02:nth-child(1) .arrow-button:nth-child(1) > .svg-inline--fa")).click()
    await driver.findElement(By.css(".bg-gray-50_02:nth-child(2) .arrow-button:nth-child(1) > .svg-inline--fa")).click()
    await driver.findElement(By.css(".bg-gray-50_02:nth-child(2) .arrow-button:nth-child(1) path")).click()
    await driver.findElement(By.css(".bg-gray-50_02:nth-child(3) .arrow-button:nth-child(1) path")).click()
    await driver.findElement(By.css(".bg-gray-50_02:nth-child(3) .arrow-button:nth-child(1) path")).click()
    await driver.findElement(By.css(".bg-gray-50_02:nth-child(3) .arrow-button:nth-child(1) path")).click()
  })
})

// Decrease the no of items
describe('decreaseitems', function() {
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
  it('decreaseitems', async function() {
    await driver.get("http://localhost:3000/orderingpage")
    await driver.manage().window().setRect({ width: 1552, height: 832 })
    await driver.findElement(By.css(".bg-gray-50_02:nth-child(1) .arrow-button:nth-child(1) > .svg-inline--fa")).click()
    await driver.findElement(By.css(".bg-gray-50_02:nth-child(1) .arrow-button:nth-child(1) > .svg-inline--fa")).click()
    await driver.findElement(By.css(".bg-gray-50_02:nth-child(1) .arrow-button:nth-child(3) path")).click()
    await driver.findElement(By.css(".bg-gray-50_02:nth-child(3) .arrow-button:nth-child(1) > .svg-inline--fa")).click()
    await driver.findElement(By.css(".bg-gray-50_02:nth-child(3) .arrow-button:nth-child(1) path")).click()
    await driver.findElement(By.css(".bg-gray-50_02:nth-child(3) .arrow-button:nth-child(3) > .svg-inline--fa")).click()
  })
})

// Delete items
describe('Delete the items', function() {
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
  it('Decrease items', async function() {
    await driver.get("http://localhost:3000/orderingpage")
    await driver.manage().window().setRect({ width: 1552, height: 832 })
    await driver.findElement(By.css(".bg-gray-50_02:nth-child(3) > .delete-button path")).click()
    await driver.findElement(By.css(".bg-gray-50_02:nth-child(2) > .delete-button path")).click()
  })
})

// Place order
describe('Place the order', function() {
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
  it('placeorder', async function() {
    await driver.get("http://localhost:3000/orderingpage")
    await driver.manage().window().setRect({ width: 1552, height: 832 })
    vars["windowHandles"] = await driver.getAllWindowHandles()
    await driver.findElement(By.css(".bg-orange-600_cc:nth-child(2)")).click()
    vars["win3500"] = await waitForWindow(2000)
    vars["root"] = await driver.getWindowHandle()
    await driver.switchTo().window(vars["win3500"])
    await driver.switchTo().window(vars["root"])
  })
})


