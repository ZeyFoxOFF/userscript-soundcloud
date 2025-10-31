// ==UserScript==
// @name         Hide SoundCloud Visual Ads
// @namespace    https://github.com/ZeyFoxOFF/userscript-soundcloud
// @version      1.0.1
// @description  Hide visual ads for soundcloud
// @author       ZeyFox
// @match        *://soundcloud.com/*
// @icon         https://i.ibb.co/QFQyyK3q/Icon.jpg
// @grant        GM_addStyle
// @homepageURL  https://github.com/ZeyFoxOFF/userscript-soundcloud
// @updateURL    https://raw.githubusercontent.com/ZeyFoxOFF/userscript-soundcloud/refs/heads/main/userscript-soundcloud.user.js
// @downloadURL  https://raw.githubusercontent.com/ZeyFoxOFF/userscript-soundcloud/refs/heads/main/userscript-soundcloud.user.js
// @license MIT
// ==/UserScript==

(function() {
    'use strict';

    const CSS = `
        .ouxtlr0 {
            display: none;
        }
        .creatorBadge__custom {
            display: none;
        }
        .creatorSubscriptionsButton {
            display: none;
        }
        .soundTitle__usernameHeroContainer {
            display: none;
        }
        .velvetCakeIframe {
            display: none;
        }
        .header__upsellWrapper {
            display: none !important;
        }
        .mobileApps {
            display: none !important;
        }
        .l-product-banners {
            display: none;
        }
        .m-promotion {
            display: none;
        }
        .webiEmbeddedModule {
            display: none !important;
        }
        .profileMenu__premium {
            display: none !important;
        }
    `;
    GM_addStyle(CSS);
})();
