// ==UserScript==
// @name        Reddit post unhider
// @namespace   Violentmonkey Scripts
// @match       https://old.reddit.com/user/*/hidden/
// @grant       none
// @version     1.0
// @description Go to old reddit -> hidden posts
//              The script will unhide all posts on the current
//              page then reload to get new ones
// ==/UserScript==

window.onload = () => {
  let flag = false;
  setInterval(() => {
    try {
      if (!flag) $('.unhide-button a')[0].click();
    } catch {
      flag = true;
      location.reload();
    }
  }, 750);
};
