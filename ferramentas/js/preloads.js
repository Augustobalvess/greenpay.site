
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/polyfills.CG3oGVWg.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/app.LfFHyfmH.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/VaultedContact.DbptEzzE.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/DeliveryMethodSelectorSection.Com9cXH9.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/useAmazonContact.BqbPCUAD.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/useUnauthenticatedErrorModal.BaSqCrff.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/LegacyVaultedShippingMethods.C-aN7NQf.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/Rollup.BH-aXP7c.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/MarketsProDisclaimer.DNAFfVGt.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/ShopPayLogo.LYKbn89e.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/index.CmbIBO3i.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/PickupPointCarrierLogo.DrTV3snh.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/hooks.BS6eodKI.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/LocalizationExtensionField.DWvzSY2e.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/useShowShopPayOptin.BerbGg30.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/useShopPayRequiresVerification.Pn6QlbcE.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/Section.CDt5Sz48.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/useGetBuyWithPrimeCheckoutSessionId.CbSuJzGX.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/publishMessage.D7iKvgpT.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/PayButtonSection.MZDkUF_M.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/RageClickCapture.DjVw08iL.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/context.BTp2P2NZ.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/DutyOptions.B6FR7J_V.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/SubscriptionPriceBreakdown.1Wt93y5c.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/StockProblemsLineItemList.CMiUh6MV.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/component-ShopPayVerificationSwitch.CJsjH2wp.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/index.CArnRgOI.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/app.FfBYqr4g.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/VaultedContact.BsDM6oHQ.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/DeliveryMethodSelectorSection.DNerkzQV.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/useAmazonContact.D-Ox6Dnf.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/Rollup.o9Mx-fKL.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/ShopPayLogo.D_HPU8Dh.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/PickupPointCarrierLogo.C0wRU6wV.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/LocalizationExtensionField.BO3829nT.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/Section.BzDw6wmZ.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/useGetBuyWithPrimeCheckoutSessionId.CjGSo8kt.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/PayButtonSection.DF7trkKf.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/RageClickCapture.DnkQ4tsk.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/DutyOptions.Bd1Z60K2.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/SubscriptionPriceBreakdown.Bqs0s4oM.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/StockProblemsLineItemList.CxdIQKjw.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/ShopPayVerificationSwitch.DVQdwG9J.css"];
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
  