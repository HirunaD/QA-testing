// Add items to cart
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Add items to cart', function() {
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
  it('addtocart', async function() {
    await driver.get("http://localhost:3000/restaurantdetailpagedesktop")
    await driver.manage().window().setRect({ width: 1552, height: 832 })
    await driver.findElement(By.css(".gap-5:nth-child(4) > .bg-gray-50_02:nth-child(5) .h-\\[49px\\]")).click()
    await driver.findElement(By.css(".common-pointer:nth-child(2) .h-\\[49px\\]")).click()
    await driver.findElement(By.css(".focus\\3Ascale-300")).click()
  })
})
