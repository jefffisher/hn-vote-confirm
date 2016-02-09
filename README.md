# hn-vote-confirm
---
### A Safari extension for blocking accidental HN votes

All this extension does is display a `javascript:confirm()` box to make sure that you actually want to up- or downvote a comment. The injected onclick handler in confirm.js can be modified to only require confirmation for downvotes by adding the following line at the top of the for loop: `if (a[i].parentNode.id.includes('down'))`.

This extension is licensed under the terms of Sam Hocevar's WTFPL.
