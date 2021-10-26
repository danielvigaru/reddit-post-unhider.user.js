// ==UserScript==
// @name        Reddit post unhider
// @namespace   Violentmonkey Scripts
// @match       https://old.reddit.com/user/*/hidden/
// @grant       none
// @version     1.0.1
// @updateURL   https://github.com/danielvigaru/reddit-post-unhider.user.js/raw/main/reddit-post-unhider.user.js
// @downloadURL https://github.com/danielvigaru/reddit-post-unhider.user.js/raw/main/reddit-post-unhider.user.js
// @homepageURL https://github.com/danielvigaru/reddit-post-unhider.user.js
// @description Go to old reddit -> hidden posts. The script will unhide all posts on the current page then reload to get new ones
// ==/UserScript==

window.onload = () => {
  let pageDone = false;
  setInterval(() => {
    try {
      if (!pageDone) $('.unhide-button a')[0].click();
    } catch {
      pageDone = true;
      location.reload();
    }
  }, 750);
};
