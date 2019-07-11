/* eslint-env jest */
import { expect } from 'code'
import * as puppeteer from 'puppeteer'

describe('Given `App`', () => {

  let page: any, browser:any

  beforeEach(async () => {
    browser = await puppeteer.launch()
    page = await browser.newPage()
    await page.goto('http://localhost:8080')
  })

  it('should load the application in the broswer', async () => {
    let app: any = await page.$eval('section.App > section.counter > div.count', (app: any) => app ?  true : false) 
    let incrementButton: any = await page.$eval('section.App > section.counter > button.increment', (increment: any) => increment ?  true : false)
    let decrementButton: any = await page.$eval('section.App > section.counter > button.decrement', (decrement: any) => decrement ?  true : false)

    expect(await page.title()).to.equal('You clicked 0 times')
    expect(app).to.be.true()
    expect(incrementButton).to.be.true()
    expect(decrementButton).to.be.true()
  })

  describe('When the appropriate button is pressed the `count` should react accordingly', () => {
    it('should decrement the count', async () => {
      await page.waitForSelector('button.decrement')
    });
  });
})
