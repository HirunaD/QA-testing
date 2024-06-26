const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Caculate Route', function() {
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
  it('Caculate Route', async function() {
    await driver.get("http://localhost:3000/map")
    await driver.manage().window().setRect({ width: 1552, height: 832 })
    await driver.findElement(By.css(".pac-target-input")).click()
    await driver.findElement(By.css(".pac-target-input")).sendKeys(Key.DOWN)
    await driver.findElement(By.css(".pac-target-input")).sendKeys("Galle, Sri Lanka")
    await driver.findElement(By.css(".pac-target-input")).sendKeys(Key.ENTER)
    await driver.findElement(By.css("div:nth-child(2) > .bg-orange-600_cc:nth-child(2)")).click()
  })
})

describe('Clear Route', function() {
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
  it('Clear Route', async function() {
    await driver.get("http://localhost:3000/map")
    await driver.manage().window().setRect({ width: 1552, height: 832 })
    await driver.findElement(By.css(".pac-target-input")).click()
    // await driver.findElement(By.css(".pac-target-input")).sendKeys("galle,")
    // {
    //   const element = await driver.findElement(By.css("div:nth-child(2) > .bg-orange-600_cc:nth-child(2)"))
    //   await driver.actions({ bridge: true }).moveToElement(element).release().perform()
    // }
    await driver.findElement(By.css(".pac-target-input")).click()
    await driver.findElement(By.css(".pac-target-input")).sendKeys("galle,")
    // {
    //   const element = await driver.findElement(By.css("div:nth-child(2) > .bg-orange-600_cc:nth-child(2)"))
    //   await driver.actions({ bridge: true }).moveToElement(element).release().perform()
    // }
    await driver.findElement(By.css(".pac-target-input")).click()
    await driver.findElement(By.css(".pac-target-input")).sendKeys("galle,")
    // {
    //   const element = await driver.findElement(By.css("div:nth-child(2) > .bg-orange-600_cc:nth-child(2)"))
    //   await driver.actions({ bridge: true }).moveToElement(element).release().perform()
    // }
  })
})

describe('Save Destination', function() {
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
  it('Save Destination', async function() {
    await driver.get("http://localhost:3000/map")
    await driver.manage().window().setRect({ width: 1552, height: 832 })
    await driver.findElement(By.css(".pac-target-input")).click()
    await driver.findElement(By.css(".pac-target-input")).sendKeys("galle,")
    // {
    //   const element = await driver.findElement(By.css(".sc-beySPh > div > div:nth-child(2)"))
    //   await driver.actions({ bridge: true }).moveToElement(element).release().perform()
    // }
    // assert(await driver.switchTo().alert().getText() == "Destination saved successfully!")
    await driver.findElement(By.css(".pac-target-input")).click()
    await driver.findElement(By.css(".pac-target-input")).sendKeys("galle,")
    // {
    //   const element = await driver.findElement(By.css("div:nth-child(2) > .bg-orange-600_cc:nth-child(2)"))
    //   await driver.actions({ bridge: true }).moveToElement(element).release().perform()
    // }
    // assert(await driver.switchTo().alert().getText() == "Destination saved successfully!")
  })
})

describe('Center Map', function() {
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
  it('Center Map', async function() {
    await driver.get("http://localhost:3000/map")
    await driver.manage().window().setRect({ width: 1552, height: 832 })
    await driver.findElement(By.css(".pac-target-input")).click()
    await driver.findElement(By.css(".pac-target-input")).sendKeys("galle,")
    await driver.findElement(By.css(".pac-target-input")).sendKeys(Key.DOWN)
    await driver.findElement(By.css(".pac-target-input")).sendKeys(Key.ENTER)
    await driver.findElement(By.css("div:nth-child(2) > .bg-orange-600_cc:nth-child(2)")).click()
    await driver.findElement(By.css("button:nth-child(7)")).click()
  })
})





