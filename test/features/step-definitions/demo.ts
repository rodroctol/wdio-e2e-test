import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^google page is opened$/, async () => {
    console.log(`Before opening browser`);
    await browser.url("https://www.google.com");
    await browser.pause(1000)
    console.log(`After opening browser`);
})

When(/^I search with (.*)$/, async (searchItem) => {
    console.log(`>> searchItem: ${searchItem}`);
    let ele = await $(`[name=q]`);
    await ele.setValue(searchItem);
    await browser.keys("Enter")
})

Then(/^Click on the first search result$/, async () => {
    let ele = await $(`<h3>`)
    ele.click()
})

Then(/^the URL should match (.*)$/, (expectedURL) => {
    console.log(`>> expectedURL: ${expectedURL}`)
    let url = browser.getUrl()
    chai.expectedURL(url).to.eq(expectedURL)
})