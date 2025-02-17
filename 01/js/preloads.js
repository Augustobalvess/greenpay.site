
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/polyfills.DMy9iVwD.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/app.9Kucdr2b.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/page-OnePage.2IJlwPwS.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/DeliveryMethodSelectorSection.B4ZwSN49.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/useEditorShopPayNavigation.XtV3TZT-.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/VaultedPayment.C9xkyZxC.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/LocalizationExtensionField.AdY0DTT0.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/RememberMeDescriptionText.Dv0UNHwN.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/PayButtonSection.DZCQhNio.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/component-ShopPayVerificationSwitch.89bGVB1U.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/useSubscribeMessenger.CwWnt_aq.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/index.BwNPprDG.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/assets/app.CPvkeqJT.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/assets/OnePage.PMX4OSBO.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/assets/DeliveryMethodSelectorSection.DmqjTkNB.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/assets/useEditorShopPayNavigation.DCOTvxC3.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/assets/ShopPayVerificationSwitch.DW7NMDXG.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  