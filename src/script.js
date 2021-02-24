chrome.extension.onMessage.addListener(() => {
  if (window.getSelection) {
    const username = window.getSelection().toString();
    const newTab = window.open(`https://instagram.com/${username}`, '_blank');
    newTab.focus();
  }
});
