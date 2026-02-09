// ==UserScript==
// @name         Hide SoundCloud Visual Ads
// @namespace    https://github.com/ZeyFoxOFF/userscript-soundcloud
// @version      1.0.5
// @description  Hide visual ads for soundcloud
// @author       ZeyFox
// @match        *://soundcloud.com/*
// @icon         https://i.ibb.co/QFQyyK3q/Icon.jpg
// @grant        GM_addStyle
// @homepageURL  https://github.com/ZeyFoxOFF/userscript-soundcloud
// @license MIT
// @downloadURL https://github.com/ZeyFoxOFF/userscript-soundcloud/raw/refs/heads/main/userscript-soundcloud.user.js
// @updateURL https://github.com/ZeyFoxOFF/userscript-soundcloud/raw/refs/heads/main/userscript-soundcloud.user.js
// ==/UserScript==

(function() {
    'use strict';

    const CSS = `
        .creatorSubscriptionsButton,
        .header__upsellWrapper,
        .mobileApps,
        .l-product-banners,
        .m-promotion,
        .webiEmbeddedModule:has([src*="embeds/credit-tracker"]),
        .m-highlight,
        .sidebarModule:has(.velvetCakeIframe),
        a.sc-button[href*="checkout.soundcloud.com"],
        .streamHTUpsell {
            display: none !important;
        }
    `;
    GM_addStyle(CSS);
})();
