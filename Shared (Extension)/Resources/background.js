browser.action.onClicked.addListener(function (tab) {
    // relocate the user to `/wp-admin` in the current tab
    const url = new URL(tab.url)
    browser.tabs.update(tab.id, {url: `${url.origin}/wp-admin`});
});
