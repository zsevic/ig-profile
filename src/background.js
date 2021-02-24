const goToInstagramProfile = () => {
  chrome.tabs.query(
    {
      active: true,
      currentWindow: true,
    },
    (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {});
    },
  );
};

chrome.contextMenus.create({
  title: 'Go to Instagram profile',
  contexts: ['selection'],
  onclick: goToInstagramProfile,
});
