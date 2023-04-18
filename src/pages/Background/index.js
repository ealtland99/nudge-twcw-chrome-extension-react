console.log('This is the background page.');
console.log('Put the background scripts here.');

async function getTab() {
  let queryOptions = { active: true, currentWindow: true };
  let tabs = await chrome.tabs.query(queryOptions);
  return tabs[0].url;
};

chrome.tabs.onUpdated.addListener(function () {
  console.log("TAB UPDATED func 1")
  getTab().then(url => {
    console.log(url);
  })
});

chrome.tabs.onUpdated.addListener(async function () {
  console.log("TAB UPDATED func 2")
  let url = await getTab()
  console.log(url)
});