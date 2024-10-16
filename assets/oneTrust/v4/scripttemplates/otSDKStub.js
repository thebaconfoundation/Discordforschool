var OneTrustStub = function(e) {
    "use strict";
    var t, o, n, i, a, r, s, l, c, p, u, d, m, h, g, f, A, b, y, v, C, S, I, L, D, T, R, w, B, P, _, E, U, G, O, k, F, V, N, x, M, H, j, z, K, q, W, J, Y, Q, X, Z, $, ee, te, oe, ne, ie = new function() {
        this.optanonCookieName = "OptanonConsent",
        this.optanonHtmlGroupData = [],
        this.optanonHostData = [],
        this.genVendorsData = [],
        this.vendorsServiceData = [],
        this.IABCookieValue = "",
        this.oneTrustIABCookieName = "eupubconsent",
        this.oneTrustIsIABCrossConsentEnableParam = "isIABGlobal",
        this.isStubReady = !0,
        this.geolocationCookiesParam = "geolocation",
        this.EUCOUNTRIES = ["BE", "BG", "CZ", "DK", "DE", "EE", "IE", "GR", "ES", "FR", "IT", "CY", "LV", "LT", "LU", "HU", "MT", "NL", "AT", "PL", "PT", "RO", "SI", "SK", "FI", "SE", "GB", "HR", "LI", "NO", "IS"],
        this.stubFileName = "otSDKStub",
        this.DATAFILEATTRIBUTE = "data-domain-script",
        this.bannerScriptName = "otBannerSdk.js",
        this.mobileOnlineURL = [],
        this.isMigratedURL = !1,
        this.migratedCCTID = "[[OldCCTID]]",
        this.migratedDomainId = "[[NewDomainId]]",
        this.userLocation = {
            country: "",
            state: ""
        }
    }
    ;
    (o = t = t || {})[o.Unknown = 0] = "Unknown",
    o[o.BannerCloseButton = 1] = "BannerCloseButton",
    o[o.ConfirmChoiceButton = 2] = "ConfirmChoiceButton",
    o[o.AcceptAll = 3] = "AcceptAll",
    o[o.RejectAll = 4] = "RejectAll",
    o[o.BannerSaveSettings = 5] = "BannerSaveSettings",
    o[o.ContinueWithoutAcceptingButton = 6] = "ContinueWithoutAcceptingButton",
    (i = n = n || {})[i.Banner = 1] = "Banner",
    i[i.PC = 2] = "PC",
    i[i.API = 3] = "API",
    (r = a = a || {}).AcceptAll = "AcceptAll",
    r.RejectAll = "RejectAll",
    r.UpdateConsent = "UpdateConsent",
    (l = s = s || {})[l.Purpose = 1] = "Purpose",
    l[l.SpecialFeature = 2] = "SpecialFeature",
    (p = c = c || {}).Legal = "legal",
    p.UserFriendly = "user_friendly",
    (d = u = u || {}).Top = "top",
    d.Bottom = "bottom",
    (h = m = m || {})[h.Banner = 0] = "Banner",
    h[h.PrefCenterHome = 1] = "PrefCenterHome",
    h[h.VendorList = 2] = "VendorList",
    h[h.CookieList = 3] = "CookieList",
    (f = g = g || {})[f.RightArrow = 39] = "RightArrow",
    f[f.LeftArrow = 37] = "LeftArrow",
    (b = A = A || {}).AfterTitle = "AfterTitle",
    b.AfterDescription = "AfterDescription",
    b.AfterDPD = "AfterDPD",
    (v = y = y || {}).PlusMinus = "Plusminus",
    v.Caret = "Caret",
    v.NoAccordion = "NoAccordion",
    (S = C = C || {}).Consent = "Consent",
    S.LI = "LI",
    S.AddtlConsent = "AddtlConsent",
    (L = I = I || {}).Iab1Pub = "eupubconsent",
    L.Iab2Pub = "eupubconsent-v2",
    L.Iab1Eu = "euconsent",
    L.Iab2Eu = "euconsent-v2",
    (T = D = D || {})[T.Disabled = 0] = "Disabled",
    T[T.Consent = 1] = "Consent",
    T[T.LegInt = 2] = "LegInt",
    (w = R = R || {})[w["Banner - Allow All"] = 1] = "Banner - Allow All",
    w[w["Banner - Reject All"] = 2] = "Banner - Reject All",
    w[w["Banner - Close"] = 3] = "Banner - Close",
    w[w["Preference Center - Allow All"] = 4] = "Preference Center - Allow All",
    w[w["Preference Center - Reject All"] = 5] = "Preference Center - Reject All",
    w[w["Preference Center - Confirm"] = 6] = "Preference Center - Confirm",
    (P = B = B || {}).Active = "1",
    P.InActive = "0",
    (E = _ = _ || {}).Host = "Host",
    E.GenVendor = "GenVen",
    (G = U = U || {})[G.Host = 1] = "Host",
    G[G.GenVen = 2] = "GenVen",
    G[G.HostAndGenVen = 3] = "HostAndGenVen",
    (k = O = O || {})[k.minDays = 1] = "minDays",
    k[k.maxDays = 30] = "maxDays",
    k[k.maxYear = 31536e3] = "maxYear",
    k[k.maxSecToDays = 86400] = "maxSecToDays",
    (V = F = F || {})[V.RTL = 0] = "RTL",
    V[V.LTR = 1] = "LTR",
    (x = N = N || {})[x.GoogleVendor = 1] = "GoogleVendor",
    x[x.GeneralVendor = 2] = "GeneralVendor",
    (H = M = M || {})[H.Days = 1] = "Days",
    H[H.Weeks = 7] = "Weeks",
    H[H.Months = 30] = "Months",
    H[H.Years = 365] = "Years",
    (z = j = j || {}).Checkbox = "Checkbox",
    z.Toggle = "Toggle",
    (q = K = K || {}).SlideIn = "Slide_In",
    q.FadeIn = "Fade_In",
    q.RemoveAnimation = "Remove_Animation",
    (J = W = W || {}).Link = "Link",
    J.Icon = "Icon",
    (Q = Y = Y || {}).consent = "consent",
    Q.set = "set",
    (Z = X = X || {}).update = "update",
    Z.default = "default",
    Z.ads_data_redaction = "ads_data_redaction",
    (ee = $ = $ || {}).analytics_storage = "analytics_storage",
    ee.ad_storage = "ad_storage",
    ee.functionality_storage = "functionality_storage",
    ee.personalization_storage = "personalization_storage",
    ee.security_storage = "security_storage",
    ee.region = "region",
    ee.wait_for_update = "wait_for_update",
    (oe = te = te || {}).granted = "granted",
    oe.denied = "denied";
    var ae = "geo"
      , re = "otpreview"
      , se = "PRODUCTION"
      , le = ((ne = {})[M.Days] = "PCenterVendorListLifespanDay",
    ne[M.Weeks] = "LfSpnWk",
    ne[M.Months] = "PCenterVendorListLifespanMonth",
    ne[M.Years] = "LfSpnYr",
    ce.prototype.camelize = function(e) {
        return e.split("-").map(function(e, t) {
            return 0 === t ? e : e[0].toUpperCase() + e.slice(1)
        }).join("")
    }
    ,
    ce.prototype.strToObj = function(e) {
        for (var t = {}, o = e.split(";").map(function(e) {
            return e.trim()
        }), n = 0, i = void 0; n < o.length; ++n)
            if (/:/.test(o[n])) {
                if (!(i = o[n].split(/:(.+)/))[1])
                    return null;
                t[this.camelize(i[0])] = i[1].trim()
            }
        return t
    }
    ,
    ce);
    function ce() {
        var e = this;
        this.implementThePolyfill = function() {
            var i = e
              , a = Element.prototype.setAttribute;
            return Element.prototype.setAttribute = function(e, t) {
                if ("style" !== e.toLowerCase() && a.apply(this, [e, t]),
                "style" === e.toLowerCase()) {
                    this.removeAttribute("style");
                    var o = i.strToObj(t);
                    for (var n in o)
                        this.style[n] = o[n]
                }
            }
            ,
            !0
        }
    }
    function pe(e, t, o) {
        void 0 === o && (o = !1);
        function n(e) {
            if (!e)
                return null;
            var t = e.trim();
            return ";" !== t.charAt(t.length - 1) && (t += ";"),
            t.trim()
        }
        var a = n(e.getAttribute("style"))
          , r = n(t)
          , i = "";
        i = o && a ? function() {
            for (var e = a.split(";").concat(r.split(";")).filter(function(e) {
                return 0 !== e.length
            }), t = "", o = "", n = e.length - 1; 0 <= n; n--) {
                var i = e[n].substring(0, e[n].indexOf(":")).trim();
                t.indexOf(i) < 0 && (t += i,
                o += e[n] + ";")
            }
            return o
        }() : r,
        e.setAttribute("style", i)
    }
    var ue = (de.prototype.initConsentSDK = function() {
        this.initCustomEventPolyfill(),
        this.ensureHtmlGroupDataInitialised(),
        this.setStubScriptElement(),
        this.setOTDataLayer(),
        this.getParam(),
        this.fetchBannerSDKDependency(),
        this.captureNonce()
    }
    ,
    de.prototype.captureNonce = function() {
        this.nonce = ie.stubScriptElement.nonce || ie.stubScriptElement.getAttribute("nonce") || null
    }
    ,
    de.prototype.fetchBannerSDKDependency = function() {
        this.setDomainDataFileURL(),
        this.crossOrigin = ie.stubScriptElement.getAttribute("crossorigin") || null,
        this.otFetch(ie.bannerDataParentURL, this.getLocation.bind(this))
    }
    ,
    de.prototype.getLocation = function(e) {
        var t = e && e.TenantFeatures
          , o = window.location.hostname
          , n = e.Domain
          , i = e.BulkDomainCheckUrl;
        if (t && t.CookieV2BulkDomainManagement && o !== n && e.ScriptType === se) {
            var a = {
                location: ie.storageBaseURL.replace(/^https?:\/\//, ""),
                domainId: this.domainId,
                url: o
            };
            this.otFetch(i, this.handleBulkDomainMgmt, !1, a, e)
        }
        if (t && t.CookieV2CSP && this.nonce && (this.setAttributePolyfillIsActive = !0,
        (new le).implementThePolyfill()),
        !e.RuleSet[0].Type)
            return this.iabTypeAdded = !1,
            window.__cmp = this.executeCmpApi,
            window.__tcfapi = this.executeTcfApi,
            this.intializeIabStub(),
            this.addBannerSDKScript(e);
        var r = window;
        if (r.OneTrust && r.OneTrust.geolocationResponse) {
            var s = r.OneTrust.geolocationResponse;
            this.setGeoLocation(s.countryCode, s.stateCode),
            this.addBannerSDKScript(e)
        } else {
            var l = this.readCookieParam(ie.optanonCookieName, ie.geolocationCookiesParam);
            if (l || e.SkipGeolocation) {
                var c = l.split(";")[0]
                  , p = l.split(";")[1];
                this.setGeoLocation(c, p),
                this.addBannerSDKScript(e)
            } else
                this.getGeoLocation(e)
        }
    }
    ,
    de.prototype.handleBulkDomainMgmt = function(e, t) {
        e.isValid && (t.Domain = window.location.hostname)
    }
    ,
    de.prototype.getGeolocationURL = function(e) {
        e.TenantFeatures;
        var t = "" + ie.stubScriptElement.getAttribute("src").split(ie.stubFileName)[0] + e.Version;
        if (new RegExp("^file://","i").test(t) && e.MobileSDK) {
            var o = "/" + e.GeolocationUrl.replace(/^(http|https):\/\//, "").split("/").slice(1).join("/") + ".js";
            return ie.storageBaseURL + o
        }
        return e.GeolocationUrl
    }
    ,
    de.prototype.geoLocationJsonCallback = function(e, t) {
        t && this.setGeoLocation(t.country, t.state),
        this.addBannerSDKScript(e)
    }
    ,
    de.prototype.getGeoLocation = function(e) {
        var t = this.getGeolocationURL(e);
        this.otFetch(t, this.geoLocationJsonCallback.bind(this, e), !0)
    }
    ,
    de.prototype.setOTDataLayer = function() {
        var e = "data-dLayer-ignore"
          , t = ie.stubScriptElement.hasAttribute(e)
          , o = ie.stubScriptElement.getAttribute(e)
          , n = t && "true" === o || t && "" === o;
        this.otDataLayer = {
            ignore: n,
            name: ie.stubScriptElement.getAttribute("data-dLayer-name") || "dataLayer"
        }
    }
    ,
    de.prototype.setGeoLocation = function(e, t) {
        void 0 === t && (t = ""),
        ie.userLocation = {
            country: e,
            state: t
        }
    }
    ,
    de.prototype.otFetch = function(e, t, o, n, i) {
        if (void 0 === o && (o = !1),
        void 0 === n && (n = null),
        new RegExp("^file://","i").test(e))
            this.otFetchOfflineFile(e, t);
        else {
            ie.mobileOnlineURL.push(e);
            var a = new XMLHttpRequest;
            if (a.onload = function() {
                i ? t(JSON.parse(this.responseText), i) : t(JSON.parse(this.responseText))
            }
            ,
            a.onerror = function() {
                t()
            }
            ,
            a.open("GET", e),
            o && a.setRequestHeader("accept", "application/json"),
            n)
                for (var r in n)
                    a.setRequestHeader(r, n[r]);
            a.send()
        }
    }
    ,
    de.prototype.otFetchOfflineFile = function(e, t) {
        var o = (e = e.replace(".json", ".js")).split("/")
          , n = o[o.length - 1].split(".js")[0];
        this.jsonp(e, function() {
            t(window[n])
        })
    }
    ,
    de.prototype.jsonp = function(e, t) {
        var o = document.createElement("script");
        o.setAttribute("src", e),
        this.nonce && o.setAttribute("nonce", this.nonce),
        o.async = !0,
        o.type = "text/javascript",
        this.crossOrigin && o.setAttribute("crossorigin", this.crossOrigin),
        document.getElementsByTagName("head")[0].appendChild(o),
        new RegExp("^file://","i").test(e) || ie.mobileOnlineURL.push(e),
        t && (o.onload = o.onerror = function() {
            t()
        }
        )
    }
    ,
    de.prototype.getRegionSet = function(e) {
        var t, o, n, i = ie.userLocation, a = e.RuleSet.filter(function(e) {
            return !0 === e.Default
        });
        if (!i.country && !i.state)
            return a && 0 < a.length ? a[0] : null;
        for (var r = i.state.toLowerCase(), s = i.country.toLowerCase(), l = 0; l < e.RuleSet.length; l++)
            if (!0 === e.RuleSet[l].Global)
                n = e.RuleSet[l];
            else {
                var c = e.RuleSet[l].States;
                if (c[s] && 0 <= c[s].indexOf(r)) {
                    o = e.RuleSet[l];
                    break
                }
                0 <= e.RuleSet[l].Countries.indexOf(s) && (t = e.RuleSet[l])
            }
        return o || t || n
    }
    ,
    de.prototype.ensureHtmlGroupDataInitialised = function() {
        this.initializeIABData(),
        this.initializeGroupData(),
        this.initializeHostData(),
        this.initializeGenVenData()
    }
    ,
    de.prototype.initializeGroupData = function() {
        var e = this.readCookieParam(ie.optanonCookieName, "groups");
        e && (ie.optanonHtmlGroupData = this.deserialiseStringToArray(e))
    }
    ,
    de.prototype.initializeHostData = function() {
        var e = this.readCookieParam(ie.optanonCookieName, "hosts");
        e && (ie.optanonHostData = this.deserialiseStringToArray(e))
    }
    ,
    de.prototype.initializeGenVenData = function() {
        var e = this.readCookieParam(ie.optanonCookieName, "genVendors");
        e && (ie.genVendorsData = this.deserialiseStringToArray(e))
    }
    ,
    de.prototype.initializeIABData = function() {
        this.validateIABGDPRApplied(),
        this.validateIABGlobalScope()
    }
    ,
    de.prototype.validateIABGlobalScope = function() {
        var e = this.readCookieParam(ie.optanonCookieName, ie.oneTrustIsIABCrossConsentEnableParam);
        e ? "true" === e ? (ie.hasIABGlobalScope = !0,
        ie.isStubReady = !1) : (ie.hasIABGlobalScope = !1,
        ie.IABCookieValue = this.getCookie(ie.oneTrustIABCookieName)) : ie.isStubReady = !1
    }
    ,
    de.prototype.validateIABGDPRApplied = function() {
        var e = this.readCookieParam(ie.optanonCookieName, ie.geolocationCookiesParam).split(";")[0];
        e ? this.isBoolean(e) ? ie.oneTrustIABgdprAppliesGlobally = "true" === e : ie.oneTrustIABgdprAppliesGlobally = 0 <= ie.EUCOUNTRIES.indexOf(e) : ie.isStubReady = !1
    }
    ,
    de.prototype.isBoolean = function(e) {
        return "true" === e || "false" === e
    }
    ,
    de.prototype.readCookieParam = function(e, t) {
        var o, n, i, a, r = this.getCookie(e);
        if (r) {
            for (n = {},
            i = r.split("&"),
            o = 0; o < i.length; o += 1)
                a = i[o].split("="),
                n[decodeURIComponent(a[0])] = decodeURIComponent(a[1]).replace(/\+/g, " ");
            return t && n[t] ? n[t] : t && !n[t] ? "" : n
        }
        return ""
    }
    ,
    de.prototype.getCookie = function(e) {
        if (this.isAmp) {
            var t = JSON.parse(window.localStorage.getItem(this.domainId)) || {};
            if (t)
                return t[e] || null
        }
        var o, n, i = e + "=", a = document.cookie.split(";");
        for (o = 0; o < a.length; o += 1) {
            for (n = a[o]; " " == n.charAt(0); )
                n = n.substring(1, n.length);
            if (0 == n.indexOf(i))
                return n.substring(i.length, n.length)
        }
        return null
    }
    ,
    de.prototype.updateGtmMacros = function() {
        var e, t = [], o = ie.optanonHtmlGroupData.length;
        for (e = 0; e < o; e++)
            this.endsWith(ie.optanonHtmlGroupData[e], ":1") && t.push(ie.optanonHtmlGroupData[e].replace(":1", ""));
        for (o = ie.optanonHostData.length,
        e = 0; e < o; e++)
            this.endsWith(ie.optanonHostData[e], ":1") && t.push(ie.optanonHostData[e].replace(":1", ""));
        for (o = ie.genVendorsData.length,
        e = 0; e < o; e++)
            this.endsWith(ie.genVendorsData[e], ":1") && t.push(ie.genVendorsData[e].replace(":1", ""));
        for (o = ie.vendorsServiceData.length,
        e = 0; e < o; e++)
            this.endsWith(ie.vendorsServiceData[e], ":1") && t.push(ie.vendorsServiceData[e].replace(":1", ""));
        var n = "," + this.serialiseArrayToString(t) + ",";
        window.OnetrustActiveGroups = n,
        window.OptanonActiveGroups = n;
        var i = window;
        this.otDataLayer.ignore || void 0 === i[this.otDataLayer.name] ? this.otDataLayer.ignore || (i[this.otDataLayer.name] = [{
            event: "OneTrustLoaded",
            OnetrustActiveGroups: n
        }, {
            event: "OptanonLoaded",
            OptanonActiveGroups: n
        }]) : i[this.otDataLayer.name].constructor === Array && (i[this.otDataLayer.name].push({
            OnetrustActiveGroups: n
        }),
        i[this.otDataLayer.name].push({
            OptanonActiveGroups: n
        }));
        var a, r = new CustomEvent("consent.onetrust",{
            detail: t
        });
        !this.otDataLayer.ignore && t.length && (i[this.otDataLayer.name].constructor === Array && i[this.otDataLayer.name].push({
            event: "OneTrustGroupsUpdated",
            OnetrustActiveGroups: n
        }),
        a = new CustomEvent("OneTrustGroupsUpdated",{
            detail: t
        })),
        setTimeout(function() {
            window.dispatchEvent(r),
            a && window.dispatchEvent(a)
        })
    }
    ,
    de.prototype.deserialiseStringToArray = function(e) {
        return e ? e.split(",") : []
    }
    ,
    de.prototype.endsWith = function(e, t) {
        return -1 !== e.indexOf(t, e.length - t.length)
    }
    ,
    de.prototype.serialiseArrayToString = function(e) {
        return e.toString()
    }
    ,
    de.prototype.setStubScriptElement = function() {
        ie.stubScriptElement = document.querySelector("script[src*='" + ie.stubFileName + "']");
        var e = ie.stubScriptElement && 0 <= ie.stubScriptElement.getAttribute("src").indexOf("did=");
        ie.stubScriptElement && ie.stubScriptElement.hasAttribute(ie.DATAFILEATTRIBUTE) ? this.domainId = ie.stubScriptElement.getAttribute(ie.DATAFILEATTRIBUTE).trim() : e ? this.domainId = ie.stubScriptElement.getAttribute("src").split("did=")[1] : ie.stubScriptElement || (ie.stubScriptElement = document.querySelector("script[src*='" + ie.migratedCCTID + "']"),
        ie.stubScriptElement && (ie.isMigratedURL = !0,
        this.domainId = ie.migratedDomainId.trim()))
    }
    ,
    de.prototype.setDomainDataFileURL = function() {
        var e = ie.stubScriptElement.getAttribute("src")
          , t = -1 < e.indexOf("/consent");
        e && (ie.isMigratedURL ? ie.storageBaseURL = e.split("/consent/" + ie.migratedCCTID)[0] : ie.storageBaseURL = t ? e.split("/consent")[0] : e.split("/scripttemplates/" + ie.stubFileName)[0]),
        this.storageBaseURL = ie.storageBaseURL,
        this.isPreview && -1 === this.domainId.indexOf("test") ? this.domainId = this.domainId + "-test" : this.isPreview = !1,
        ie.bannerBaseDataURL = ie.storageBaseURL && ie.storageBaseURL + "/consent/" + this.domainId,
        ie.bannerDataParentURL = ie.bannerBaseDataURL + "/" + this.domainId + ".json"
    }
    ,
    de.prototype.initCustomEventPolyfill = function() {
        if ("function" == typeof window.CustomEvent)
            return !1;
        function e(e, t) {
            t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var o = document.createEvent("CustomEvent");
            return o.initCustomEvent(e, t.bubbles, t.cancelable, t.detail),
            o
        }
        e.prototype = window.Event.prototype,
        window.CustomEvent = e
    }
    ,
    de.prototype.removeTcf = function() {
        delete window.__tcfapi;
        var e = document.querySelectorAll("iframe[name='__tcfapiLocator']")[0];
        e && e.parentElement.removeChild(e)
    }
    ,
    de.prototype.getParamForIE = function() {
        return {
            get: function(e) {
                var t = new RegExp("[?&]" + e + "=([^&#]*)").exec(window.location.search);
                return null === t ? null : decodeURI(t[1]) || ""
            }
        }
    }
    ,
    de.prototype.getParam = function() {
        window.document.documentMode || !window.URLSearchParams ? this.urlParams = this.getParamForIE() : this.urlParams = new URLSearchParams(window.location.search);
        var e = "true" === this.urlParams.get("otreset")
          , t = "true" === this.urlParams.get("otpreview");
        this.geoFromUrl = (this.urlParams.get("otgeo") || "").toLowerCase();
        var o = this.readCookieParam(re, "expiry")
          , n = this.readCookieParam(re, ae);
        this.isReset = e || o && new Date(o) < new Date,
        this.isPreview = !this.isReset && (t || o && new Date(o) > new Date),
        this.setGeoParam(this.geoFromUrl || n)
    }
    ,
    de.prototype.setGeoParam = function(e) {
        if (e) {
            var t = window;
            t.OneTrust || (t.OneTrust = {});
            var o = e.split(",");
            t.OneTrust.geolocationResponse = {
                countryCode: o[0],
                stateCode: o[1]
            }
        }
    }
    ,
    de);
    function de() {
        var c = this;
        this.iabType = null,
        this.iabTypeAdded = !0,
        this.crossOrigin = null,
        this.isAmp = !1,
        this.domainId = "",
        this.isReset = !1,
        this.isPreview = !1,
        this.geoFromUrl = "",
        this.nonce = "",
        this.setAttributePolyfillIsActive = !1,
        this.storageBaseURL = "",
        this.addBannerSDKScript = function(e) {
            var t = c.getRegionSet(e);
            t.GCEnable || (c.updateGtmMacros(),
            c.gtmUpdated = !0),
            c.iabTypeAdded && ("IAB" !== t.Type && "IAB2" !== t.Type || (c.iabType = t.Type,
            c.intializeIabStub()),
            "IAB2" !== t.Type && c.removeTcf());
            var o = ie.stubScriptElement.cloneNode(!0)
              , n = "";
            n = e.UseSDKRefactor ? (ie.isMigratedURL && (o.src = ie.storageBaseURL + "/scripttemplates/new/scripttemplates/" + ie.stubFileName + ".js"),
            ie.storageBaseURL + "/scripttemplates/new/scripttemplates/" + e.Version + "/" + ie.bannerScriptName) : "5.11.0" === e.Version ? (ie.isMigratedURL && (o.src = ie.storageBaseURL + "/scripttemplates/old/scripttemplates/" + ie.stubFileName + ".js"),
            ie.storageBaseURL + "/scripttemplates/old/scripttemplates/5.11.0/" + ie.bannerScriptName) : (ie.isMigratedURL && (o.src = ie.storageBaseURL + "/scripttemplates/" + ie.stubFileName + ".js"),
            ie.storageBaseURL + "/scripttemplates/" + e.Version + "/" + ie.bannerScriptName);
            ["charset", "data-language", "data-document-language", "data-domain-script", "crossorigin", "data-ignore-ga"].forEach(function(e) {
                ie.stubScriptElement.getAttribute(e) && o.setAttribute(e, ie.stubScriptElement.getAttribute(e))
            }),
            c.isAmp = !!ie.stubScriptElement.getAttribute("amp"),
            window.otStubData = {
                bannerBaseDataURL: ie.bannerBaseDataURL,
                crossOrigin: c.crossOrigin,
                domainData: e,
                domainId: c.domainId,
                geoFromUrl: c.geoFromUrl,
                isAmp: c.isAmp,
                isPreview: c.isPreview,
                isReset: c.isReset,
                mobileOnlineURL: ie.mobileOnlineURL,
                nonce: c.nonce,
                otDataLayer: c.otDataLayer,
                regionRule: t,
                setAttributePolyfillIsActive: c.setAttributePolyfillIsActive,
                storageBaseURL: c.storageBaseURL,
                stubElement: o,
                urlParams: c.urlParams,
                userLocation: ie.userLocation,
                gtmUpdated: c.gtmUpdated
            },
            c.jsonp(n, null)
        }
        ,
        this.intializeIabStub = function() {
            var e = window;
            c.iabTypeAdded ? ("IAB" === c.iabType ? void 0 === e.__cmp && (window.__cmp = c.executeCmpApi) : void 0 === e.__tcfapi && (window.__tcfapi = c.executeTcfApi),
            c.addIabFrame()) : c.addBackwardIabFrame(),
            e.receiveOTMessage = c.receiveIabMessage,
            (e.attachEvent || window.addEventListener)("message", e.receiveOTMessage, !1)
        }
        ,
        this.addIabFrame = function() {
            var e = window
              , t = "IAB" === c.iabType ? "__cmpLocator" : "__tcfapiLocator";
            !e.frames[t] && (e.document.body ? c.addLocator(t, "CMP") : setTimeout(c.addIabFrame, 5))
        }
        ,
        this.addBackwardIabFrame = function() {
            var e = window
              , t = "__cmpLocator";
            !e.frames[t] && (e.document.body ? c.addLocator(t, "CMP") : setTimeout(c.addIabFrame, 5));
            var o = "__tcfapiLocator";
            !e.frames[o] && (e.document.body ? c.addLocator(o, "TCF") : setTimeout(c.addIabFrame, 5))
        }
        ,
        this.addLocator = function(e, t) {
            var o = window
              , n = o.document.createElement("iframe");
            pe(n, "display: none;", !0),
            n.name = e,
            n.setAttribute("title", t + " Locator"),
            o.document.body.appendChild(n)
        }
        ,
        this.receiveIabMessage = function(n) {
            var i = "string" == typeof n.data
              , e = {};
            try {
                e = i ? JSON.parse(n.data) : n.data
            } catch (e) {}
            if (e.__cmpCall && "IAB" === c.iabType) {
                var a = e.__cmpCall.callId
                  , r = e.__cmpCall.command
                  , t = e.__cmpCall.parameter;
                c.executeCmpApi(r, t, function(e, t) {
                    var o = {
                        __cmpReturn: {
                            returnValue: e,
                            success: t,
                            callId: a,
                            command: r
                        }
                    };
                    n.source.postMessage(i ? JSON.stringify(o) : o, n.origin)
                })
            } else
                e.__cmpCall && "IAB2" === c.iabType && console.log("Expecting IAB TCF v2.0 vendor iFrame call; Received IAB TCF v1.1");
            if (e.__tcfapiCall && "IAB2" === c.iabType) {
                var s = e.__tcfapiCall.callId
                  , l = e.__tcfapiCall.command
                  , o = (t = e.__tcfapiCall.parameter,
                e.__tcfapiCall.version);
                c.executeTcfApi(l, t, function(e, t) {
                    var o = {
                        __tcfapiReturn: {
                            returnValue: e,
                            success: t,
                            callId: s,
                            command: l
                        }
                    };
                    n && n.source && n.source.postMessage && n.source.postMessage(i ? JSON.stringify(o) : o, "*")
                }, o)
            } else
                e.__tcfapiCall && "IAB" === c.iabType && console.log("Expecting IAB TCF v1.1 vendor iFrame call; Received IAB TCF v2.0")
        }
        ,
        this.executeCmpApi = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            c.iabType = "IAB";
            var o = e[0]
              , n = e[1]
              , i = e[2];
            if ("function" == typeof i && o)
                if (ie.isStubReady && ie.IABCookieValue)
                    switch (o) {
                    case "ping":
                        c.getPingRequest(i, !0);
                        break;
                    case "getConsentData":
                        c.getConsentDataRequest(i);
                        break;
                    default:
                        c.addToQueue(o, n, i)
                    }
                else
                    c.addToQueue(o, n, i)
        }
        ,
        this.executeTcfApi = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            if (c.iabType = "IAB2",
            !e.length)
                return window.__tcfapi.a || [];
            var o = e[0]
              , n = e[1]
              , i = e[2]
              , a = e[3];
            "function" == typeof i && o && ("ping" === o ? c.getPingRequest(i) : c.addToQueue(o, n, i, a))
        }
        ,
        this.addToQueue = function(e, t, o, n) {
            var i = window
              , a = "IAB" === c.iabType ? "__cmp" : "__tcfapi";
            i[a].a = i[a].a || [],
            i[a].a.push([e, t, o, n])
        }
        ,
        this.getPingRequest = function(e, t) {
            if (void 0 === t && (t = !1),
            e) {
                var o = {}
                  , n = !1;
                "IAB" === c.iabType ? (o = {
                    gdprAppliesGlobally: ie.oneTrustIABgdprAppliesGlobally,
                    cmpLoaded: t
                },
                n = !0) : "IAB2" === c.iabType && (o = {
                    gdprApplies: ie.oneTrustIABgdprAppliesGlobally,
                    cmpLoaded: !1,
                    cmpStatus: "stub",
                    displayStatus: "stub",
                    apiVersion: "2.0",
                    cmpVersion: void 0,
                    cmpId: void 0,
                    gvlVersion: void 0,
                    tcfPolicyVersion: void 0
                },
                n = !0),
                e(o, n)
            }
        }
        ,
        this.getConsentDataRequest = function(e) {
            e && ie.IABCookieValue && e({
                gdprApplies: ie.oneTrustIABgdprAppliesGlobally,
                hasGlobalScope: ie.hasIABGlobalScope,
                consentData: ie.IABCookieValue
            }, !0)
        }
        ,
        this.initConsentSDK()
    }
    var me = new ue;
    return e.OtSDKStub = ue,
    e.otSdkStub = me,
    e
}({});
