browser.menus.create({
    id: "ffckthis",
    title: "Fuck this",
    contexts: ["all"],
  icons: {
    "16": "icons/menu-16.png",
    "32": "icons/menu-32.png"
    }
});
browser.menus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "ffckthis") {
    browser.tabs.executeScript({
      code: `document.querySelectorAll('iframe').forEach(function(currentValue, currentIndex, listObj){
                if(currentIndex == 0) currentValue.remove();
                console.log(listObj);
            });`
    });
    }
});
