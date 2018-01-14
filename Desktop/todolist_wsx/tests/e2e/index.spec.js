// const {Builder, By, Key, until} = require('selenium-webdriver');
// const firefox = require('selenium-webdriver/firefox');

//   let driver =  new Builder()
//             .forBrowser('firefox')
//             .build();

//      driver.get('http://www.baidu.com/');
//      driver.findElement(By.name('wd')).sendKeys('webdriver', Key.RETURN);
//      driver.wait(until.titleIs('webdriver_百度搜索'), 1000);
//      driver.quit();
var webdriver = require('selenium-webdriver'),
By = webdriver.By,
until = webdriver.until;

var driver = new webdriver.Builder()
.forBrowser('firefox')
.build();

driver.get('https://www.baidu.com');
driver.findElement(By.id('kw')).sendKeys('webdriver');
driver.findElement(By.id('su')).click();
driver.wait(until.titleIs('webdriver_百度搜索'), 1000);
driver.quit();
