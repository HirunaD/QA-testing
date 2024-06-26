const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Login to Restaurant Tab', function() {
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
  it('Login to Restaurant Tab', async function() {
    await driver.get("http://localhost:3000/restaurantdetailpagedesktop")
    await driver.manage().window().setRect({ width: 1552, height: 832 })
    // await driver.findElement(By.css(".text-black-900:nth-child(4)")).click()
    // {
    //   const element = await driver.findElement(By.css(".cart-button"))
    //   await driver.actions({ bridge: true }).moveToElement(element).perform()
    // }
    // {
    //   const element = await driver.findElement(By.CSS_SELECTOR, "body")
    //   await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    // }
  })
})

// describe('Google Reviews', function() {
//   this.timeout(30000)
//   let driver
//   let vars
//   beforeEach(async function() {
//     driver = await new Builder().forBrowser('chrome').build()
//     vars = {}
//   })
//   afterEach(async function() {
//     await driver.quit();
//   })
//   async function waitForWindow(timeout = 2) {
//     await driver.sleep(timeout)
//     const handlesThen = vars["windowHandles"]
//     const handlesNow = await driver.getAllWindowHandles()
//     if (handlesNow.length > handlesThen.length) {
//       return handlesNow.find(handle => (!handlesThen.includes(handle)))
//     }
//     throw new Error("New window did not appear before timeout")
//   }
//   it('Google Reviews', async function() {
//     await driver.get("http://localhost:3000/gallery")
//     await driver.manage().window().setRect({ width: 1552, height: 832 })
//     await driver.findElement(By.css(".nav-button:nth-child(4)")).click()
//     vars["windowHandles"] = await driver.getAllWindowHandles()
//     await driver.findElement(By.linkText("Free Google Reviews widget")).click()
//     vars["win3939"] = await waitForWindow(2000)
//     await driver.switchTo().window(vars["win3939"])
//   })
// })

describe('See Reviews', function() {
  this.timeout(30000);
  let driver;
  let vars;
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build();
    vars = {};
  });
  afterEach(async function() {
    await driver.quit();
  });
  it('See Reviews', async function() {
    await driver.get("http://localhost:3000/gallery");
    await driver.manage().window().setRect({ width: 1552, height: 832 });
    await driver.executeScript("window.scrollTo(0,498.3999938964844)");
    await driver.executeScript("window.scrollTo(0,988)");
    // await driver.findElement(By.css(".swiper-slide:nth-child(3) .ReviewText__Control-sc-t7690a-2")).click();
    // await driver.findElement(By.css(".jAxJlj svg")).click();
  });
});

describe('See Gallery', function() {
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
  it('See Gallery', async function() {
    await driver.get("http://localhost:3000/gallery")
    await driver.manage().window().setRect({ width: 1552, height: 832 })
    await driver.findElement(By.css(".image-wrapper:nth-child(18) > .h-80")).click()
    await driver.findElement(By.css(".ril-inner")).click()
  })
})

