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
        .creatorSubscriptionsButton {
            display: none !important;
        }
        .header__upsellWrapper {
            display: none !important;
        }
        .mobileApps {
            display: none !important;
        }
        .l-product-banners {
            display: none !important;
        }
        .m-promotion {
            display: none !important;
        }
        .webiEmbeddedModule:has([src*="embeds/credit-tracker"]) {
            display: none !important;
        }
        .m-highlight {
            display: none !important;
        }
        .sidebarModule:has(.velvetCakeIframe) {
            display: none !important;
        }
        a.sc-button[href*="checkout.soundcloud.com"] {
            display: none !important;
        }
        .streamHTUpsell {
            display: none !important;
        }
    `;
    GM_addStyle(CSS);
})();
