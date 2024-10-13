/** 
 * onetrust-banner-sdk
 * v6.33.0
 * by OneTrust LLC
 * Copyright 2022 
 */
!function() {
    "use strict";
    var o = function(e, t) {
        return (o = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var o in t)
                t.hasOwnProperty(o) && (e[o] = t[o])
        }
        )(e, t)
    };
    var v, e, r = function() {
        return (r = Object.assign || function(e) {
            for (var t, o = 1, n = arguments.length; o < n; o++)
                for (var r in t = arguments[o])
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        }
        ).apply(this, arguments)
    };
    function l(s, i, a, l) {
        return new (a = a || Promise)(function(e, t) {
            function o(e) {
                try {
                    r(l.next(e))
                } catch (e) {
                    t(e)
                }
            }
            function n(e) {
                try {
                    r(l.throw(e))
                } catch (e) {
                    t(e)
                }
            }
            function r(t) {
                t.done ? e(t.value) : new a(function(e) {
                    e(t.value)
                }
                ).then(o, n)
            }
            r((l = l.apply(s, i || [])).next())
        }
        )
    }
    function h(o, n) {
        var r, s, i, e, a = {
            label: 0,
            sent: function() {
                if (1 & i[0])
                    throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return e = {
            next: t(0),
            throw: t(1),
            return: t(2)
        },
        "function" == typeof Symbol && (e[Symbol.iterator] = function() {
            return this
        }
        ),
        e;
        function t(t) {
            return function(e) {
                return function(t) {
                    if (r)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (r = 1,
                            s && (i = 2 & t[0] ? s.return : t[0] ? s.throw || ((i = s.return) && i.call(s),
                            0) : s.next) && !(i = i.call(s, t[1])).done)
                                return i;
                            switch (s = 0,
                            i && (t = [2 & t[0], i.value]),
                            t[0]) {
                            case 0:
                            case 1:
                                i = t;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: t[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                s = t[1],
                                t = [0];
                                continue;
                            case 7:
                                t = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(i = 0 < (i = a.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                    a.label = t[1];
                                    break
                                }
                                if (6 === t[0] && a.label < i[1]) {
                                    a.label = i[1],
                                    i = t;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2],
                                    a.ops.push(t);
                                    break
                                }
                                i[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            t = n.call(o, a)
                        } catch (e) {
                            t = [6, e],
                            s = 0
                        } finally {
                            r = i = 0
                        }
                    if (5 & t[0])
                        throw t[1];
                    return {
                        value: t[0] ? t[1] : void 0,
                        done: !0
                    }
                }([t, e])
            }
        }
    }
    function C() {
        for (var e = 0, t = 0, o = arguments.length; t < o; t++)
            e += arguments[t].length;
        var n = Array(e)
          , r = 0;
        for (t = 0; t < o; t++)
            for (var s = arguments[t], i = 0, a = s.length; i < a; i++,
            r++)
                n[r] = s[i];
        return n
    }
    (e = v = v || {})[e.ACTIVE = 0] = "ACTIVE",
    e[e.ALWAYS_ACTIVE = 1] = "ALWAYS_ACTIVE",
    e[e.EXPIRED = 2] = "EXPIRED",
    e[e.NO_CONSENT = 3] = "NO_CONSENT",
    e[e.OPT_OUT = 4] = "OPT_OUT",
    e[e.PENDING = 5] = "PENDING",
    e[e.WITHDRAWN = 6] = "WITHDRAWN";
    var t = setTimeout;
    function c(e) {
        return Boolean(e && void 0 !== e.length)
    }
    function n() {}
    function s(e) {
        if (!(this instanceof s))
            throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e)
            throw new TypeError("not a function");
        this._state = 0,
        this._handled = !1,
        this._value = void 0,
        this._deferreds = [],
        g(e, this)
    }
    function i(o, n) {
        for (; 3 === o._state; )
            o = o._value;
        0 !== o._state ? (o._handled = !0,
        s._immediateFn(function() {
            var e = 1 === o._state ? n.onFulfilled : n.onRejected;
            if (null !== e) {
                var t;
                try {
                    t = e(o._value)
                } catch (e) {
                    return void d(n.promise, e)
                }
                a(n.promise, t)
            } else
                (1 === o._state ? a : d)(n.promise, o._value)
        })) : o._deferreds.push(n)
    }
    function a(t, e) {
        try {
            if (e === t)
                throw new TypeError("A promise cannot be resolved with itself.");
            if (e && ("object" == typeof e || "function" == typeof e)) {
                var o = e.then;
                if (e instanceof s)
                    return t._state = 3,
                    t._value = e,
                    void u(t);
                if ("function" == typeof o)
                    return void g((n = o,
                    r = e,
                    function() {
                        n.apply(r, arguments)
                    }
                    ), t)
            }
            t._state = 1,
            t._value = e,
            u(t)
        } catch (e) {
            d(t, e)
        }
        var n, r
    }
    function d(e, t) {
        e._state = 2,
        e._value = t,
        u(e)
    }
    function u(e) {
        2 === e._state && 0 === e._deferreds.length && s._immediateFn(function() {
            e._handled || s._unhandledRejectionFn(e._value)
        });
        for (var t = 0, o = e._deferreds.length; t < o; t++)
            i(e, e._deferreds[t]);
        e._deferreds = null
    }
    function p(e, t, o) {
        this.onFulfilled = "function" == typeof e ? e : null,
        this.onRejected = "function" == typeof t ? t : null,
        this.promise = o
    }
    function g(e, t) {
        var o = !1;
        try {
            e(function(e) {
                o || (o = !0,
                a(t, e))
            }, function(e) {
                o || (o = !0,
                d(t, e))
            })
        } catch (e) {
            if (o)
                return;
            o = !0,
            d(t, e)
        }
    }
    function y() {}
    s.prototype.catch = function(e) {
        return this.then(null, e)
    }
    ,
    s.prototype.then = function(e, t) {
        var o = new this.constructor(n);
        return i(this, new p(e,t,o)),
        o
    }
    ,
    s.prototype.finally = function(t) {
        var o = this.constructor;
        return this.then(function(e) {
            return o.resolve(t()).then(function() {
                return e
            })
        }, function(e) {
            return o.resolve(t()).then(function() {
                return o.reject(e)
            })
        })
    }
    ,
    s.all = function(t) {
        return new s(function(n, r) {
            if (!c(t))
                return r(new TypeError("Promise.all accepts an array"));
            var s = Array.prototype.slice.call(t);
            if (0 === s.length)
                return n([]);
            var i = s.length;
            function a(t, e) {
                try {
                    if (e && ("object" == typeof e || "function" == typeof e)) {
                        var o = e.then;
                        if ("function" == typeof o)
                            return void o.call(e, function(e) {
                                a(t, e)
                            }, r)
                    }
                    s[t] = e,
                    0 == --i && n(s)
                } catch (e) {
                    r(e)
                }
            }
            for (var e = 0; e < s.length; e++)
                a(e, s[e])
        }
        )
    }
    ,
    s.resolve = function(t) {
        return t && "object" == typeof t && t.constructor === s ? t : new s(function(e) {
            e(t)
        }
        )
    }
    ,
    s.reject = function(o) {
        return new s(function(e, t) {
            t(o)
        }
        )
    }
    ,
    s.race = function(r) {
        return new s(function(e, t) {
            if (!c(r))
                return t(new TypeError("Promise.race accepts an array"));
            for (var o = 0, n = r.length; o < n; o++)
                s.resolve(r[o]).then(e, t)
        }
        )
    }
    ,
    s._immediateFn = "function" == typeof setImmediate ? function(e) {
        setImmediate(e)
    }
    : function(e) {
        t(e, 0)
    }
    ,
    s._unhandledRejectionFn = function(e) {
        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
    }
    ;
    var f, k, b, m, P, A, B, S, T, I, L, _, E, w, W, x, V, G, O, N, D, H, F, R, q, M, U, j, z, K, J, Y, X, $, Q, Z, ee, te, oe, ne, re, se, ie, ae, le, ce, de, ue, pe, he, ge, Ce, ye, fe = new (y.prototype.initPolyfill = function() {
        this.initArrayIncludesPolyfill(),
        this.initObjectAssignPolyfill(),
        this.initArrayFillPolyfill(),
        this.initClosestPolyfill(),
        this.initIncludesPolyfill(),
        this.initEndsWithPoly(),
        this.initCustomEventPolyfill(),
        this.promisesPolyfil()
    }
    ,
    y.prototype.initArrayIncludesPolyfill = function() {
        Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
            value: function(e) {
                for (var t = [], o = 1; o < arguments.length; o++)
                    t[o - 1] = arguments[o];
                if (null == this)
                    throw new TypeError("Array.prototype.includes called on null or undefined");
                var n = Object(this)
                  , r = parseInt(n.length, 10) || 0;
                if (0 === r)
                    return !1;
                var s, i, a = t[1] || 0;
                for (0 <= a ? s = a : (s = r + a) < 0 && (s = 0); s < r; ) {
                    if (e === (i = n[s]) || e != e && i != i)
                        return !0;
                    s++
                }
                return !1
            },
            writable: !0,
            configurable: !0
        })
    }
    ,
    y.prototype.initEndsWithPoly = function() {
        String.prototype.endsWith || Object.defineProperty(String.prototype, "endsWith", {
            value: function(e, t) {
                return (void 0 === t || t > this.length) && (t = this.length),
                this.substring(t - e.length, t) === e
            },
            writable: !0,
            configurable: !0
        })
    }
    ,
    y.prototype.initClosestPolyfill = function() {
        Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector),
        Element.prototype.closest || Object.defineProperty(Element.prototype, "closest", {
            value: function(e) {
                var t = this;
                do {
                    if (t.matches(e))
                        return t;
                    t = t.parentElement || t.parentNode
                } while (null !== t && 1 === t.nodeType);
                return null
            },
            writable: !0,
            configurable: !0
        })
    }
    ,
    y.prototype.initIncludesPolyfill = function() {
        String.prototype.includes || Object.defineProperty(String.prototype, "includes", {
            value: function(e, t) {
                return "number" != typeof t && (t = 0),
                !(t + e.length > this.length) && -1 !== this.indexOf(e, t)
            },
            writable: !0,
            configurable: !0
        })
    }
    ,
    y.prototype.initObjectAssignPolyfill = function() {
        "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
            value: function(e, t) {
                if (null == e)
                    throw new TypeError("Cannot convert undefined or null to object");
                for (var o = Object(e), n = 1; n < arguments.length; n++) {
                    var r = arguments[n];
                    if (null != r)
                        for (var s in r)
                            Object.prototype.hasOwnProperty.call(r, s) && (o[s] = r[s])
                }
                return o
            },
            writable: !0,
            configurable: !0
        })
    }
    ,
    y.prototype.initArrayFillPolyfill = function() {
        Array.prototype.fill || Object.defineProperty(Array.prototype, "fill", {
            value: function(e) {
                if (null == this)
                    throw new TypeError("this is null or not defined");
                for (var t = Object(this), o = t.length >>> 0, n = arguments[1] >> 0, r = n < 0 ? Math.max(o + n, 0) : Math.min(n, o), s = arguments[2], i = void 0 === s ? o : s >> 0, a = i < 0 ? Math.max(o + i, 0) : Math.min(i, o); r < a; )
                    t[r] = e,
                    r++;
                return t
            }
        })
    }
    ,
    y.prototype.initCustomEventPolyfill = function() {
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
    y.prototype.insertViewPortTag = function() {
        var e = document.querySelector('meta[name="viewport"]')
          , t = document.createElement("meta");
        t.name = "viewport",
        t.content = "width=device-width, initial-scale=1",
        e || document.head.appendChild(t)
    }
    ,
    y.prototype.promisesPolyfil = function() {
        "undefined" == typeof Promise && (window.Promise = s)
    }
    ,
    y);
    (k = f = f || {})[k.Unknown = 0] = "Unknown",
    k[k.BannerCloseButton = 1] = "BannerCloseButton",
    k[k.ConfirmChoiceButton = 2] = "ConfirmChoiceButton",
    k[k.AcceptAll = 3] = "AcceptAll",
    k[k.RejectAll = 4] = "RejectAll",
    k[k.BannerSaveSettings = 5] = "BannerSaveSettings",
    k[k.ContinueWithoutAcceptingButton = 6] = "ContinueWithoutAcceptingButton",
    (m = b = b || {})[m.Purpose = 1] = "Purpose",
    m[m.SpecialFeature = 2] = "SpecialFeature",
    (A = P = P || {}).Legal = "legal",
    A.UserFriendly = "user_friendly",
    (S = B = B || {}).Top = "top",
    S.Bottom = "bottom",
    (I = T = T || {})[I.Banner = 0] = "Banner",
    I[I.PrefCenterHome = 1] = "PrefCenterHome",
    I[I.VendorList = 2] = "VendorList",
    I[I.CookieList = 3] = "CookieList",
    (_ = L = L || {})[_.RightArrow = 39] = "RightArrow",
    _[_.LeftArrow = 37] = "LeftArrow",
    (w = E = E || {}).AfterTitle = "AfterTitle",
    w.AfterDescription = "AfterDescription",
    w.AfterDPD = "AfterDPD",
    (x = W = W || {}).PlusMinus = "Plusminus",
    x.Caret = "Caret",
    x.NoAccordion = "NoAccordion",
    (G = V = V || {}).Consent = "Consent",
    G.LI = "LI",
    G.AddtlConsent = "AddtlConsent",
    (N = O = O || {}).Iab1Pub = "eupubconsent",
    N.Iab2Pub = "eupubconsent-v2",
    N.Iab1Eu = "euconsent",
    N.Iab2Eu = "euconsent-v2",
    (H = D = D || {})[H.Disabled = 0] = "Disabled",
    H[H.Consent = 1] = "Consent",
    H[H.LegInt = 2] = "LegInt",
    (R = F = F || {})[R["Banner - Allow All"] = 1] = "Banner - Allow All",
    R[R["Banner - Reject All"] = 2] = "Banner - Reject All",
    R[R["Banner - Close"] = 3] = "Banner - Close",
    R[R["Preference Center - Allow All"] = 4] = "Preference Center - Allow All",
    R[R["Preference Center - Reject All"] = 5] = "Preference Center - Reject All",
    R[R["Preference Center - Confirm"] = 6] = "Preference Center - Confirm",
    (M = q = q || {}).Active = "1",
    M.InActive = "0",
    (j = U = U || {}).Host = "Host",
    j.GenVendor = "GenVen",
    (K = z = z || {})[K.Host = 1] = "Host",
    K[K.GenVen = 2] = "GenVen",
    K[K.HostAndGenVen = 3] = "HostAndGenVen",
    (Y = J = J || {})[Y.minDays = 1] = "minDays",
    Y[Y.maxDays = 30] = "maxDays",
    Y[Y.maxYear = 31536e3] = "maxYear",
    Y[Y.maxSecToDays = 86400] = "maxSecToDays",
    ($ = X = X || {})[$.RTL = 0] = "RTL",
    $[$.LTR = 1] = "LTR",
    (Z = Q = Q || {})[Z.GoogleVendor = 1] = "GoogleVendor",
    Z[Z.GeneralVendor = 2] = "GeneralVendor",
    (te = ee = ee || {})[te.Days = 1] = "Days",
    te[te.Weeks = 7] = "Weeks",
    te[te.Months = 30] = "Months",
    te[te.Years = 365] = "Years",
    (ne = oe = oe || {}).Checkbox = "Checkbox",
    ne.Toggle = "Toggle",
    (se = re = re || {}).SlideIn = "Slide_In",
    se.FadeIn = "Fade_In",
    se.RemoveAnimation = "Remove_Animation",
    (ae = ie = ie || {}).Link = "Link",
    ae.Icon = "Icon",
    (ce = le = le || {}).consent = "consent",
    ce.set = "set",
    (ue = de = de || {}).update = "update",
    ue.default = "default",
    ue.ads_data_redaction = "ads_data_redaction",
    (he = pe = pe || {}).analytics_storage = "analytics_storage",
    he.ad_storage = "ad_storage",
    he.functionality_storage = "functionality_storage",
    he.personalization_storage = "personalization_storage",
    he.security_storage = "security_storage",
    he.region = "region",
    he.wait_for_update = "wait_for_update",
    (Ce = ge = ge || {}).granted = "granted",
    Ce.denied = "denied";
    var ke = "AwaitingReconsent"
      , ve = "consentId"
      , be = "geolocation"
      , me = "interactionCount"
      , Pe = "isIABGlobal"
      , Ae = "NotLandingPage"
      , Se = "isGpcEnabled"
      , Te = {
        ADDITIONAL_CONSENT_STRING: "OTAdditionalConsentString",
        ALERT_BOX_CLOSED: "OptanonAlertBoxClosed",
        OPTANON_CONSENT: "OptanonConsent",
        EU_PUB_CONSENT: "eupubconsent-v2",
        EU_CONSENT: "euconsent-v2",
        SELECTED_VARIANT: "OTVariant",
        OT_PREVIEW: "otpreview"
    }
      , Ie = "CONFIRMED"
      , Le = "OPT_OUT"
      , _e = "NO_CHOICE"
      , Be = "NOTGIVEN"
      , Ee = "NO_OPT_OUT"
      , we = "always active"
      , xe = "active"
      , Ve = "inactive landingpage"
      , Ge = "inactive"
      , Oe = "dnt"
      , Ne = "LOCAL"
      , De = "TEST"
      , He = "LOCAL_TEST"
      , Fe = "data-language"
      , Re = "otCookieSettingsButton.json"
      , qe = "otCookieSettingsButtonRtl.json"
      , Me = "otCenterRounded"
      , Ue = "otFlat"
      , je = "otFloatingRoundedCorner"
      , ze = "otFloatingFlat"
      , Ke = "otFloatingRoundedIcon"
      , We = "otFloatingRounded"
      , Je = "otChoicesBanner"
      , Ye = "otNoBanner"
      , Xe = "otPcCenter"
      , $e = "otPcList"
      , Qe = "otPcPanel"
      , Ze = "otPcPopup"
      , et = "otPcTab"
      , tt = "hidebanner"
      , ot = ((ye = {})[ee.Days] = "PCenterVendorListLifespanDay",
    ye[ee.Weeks] = "LfSpnWk",
    ye[ee.Months] = "PCenterVendorListLifespanMonth",
    ye[ee.Years] = "LfSpnYr",
    ye)
      , nt = "DNAC"
      , rt = "Category"
      , st = "Host"
      , it = "General Vendor"
      , at = new function() {
        this.otSDKVersion = "6.33.0",
        this.isAMP = !1,
        this.ampData = {},
        this.otCookieData = window.OneTrust && window.OneTrust.otCookieData || [],
        this.syncRequired = !1,
        this.isIabSynced = !1,
        this.isGacSynced = !1,
        this.grpsSynced = [],
        this.syncedValidGrp = !1,
        this.groupsConsent = [],
        this.initialGroupsConsent = [],
        this.hostsConsent = [],
        this.initialHostConsent = [],
        this.genVendorsConsent = {},
        this.initialGenVendorsConsent = {},
        this.vendors = {
            list: [],
            searchParam: "",
            vendorTemplate: null,
            selectedVendors: [],
            selectedPurpose: [],
            selectedLegInt: [],
            selectedLegIntVendors: [],
            selectedSpecialFeatures: []
        },
        this.initialVendors = {
            list: [],
            searchParam: "",
            vendorTemplate: null,
            selectedVendors: [],
            selectedPurpose: [],
            selectedLegInt: [],
            selectedLegIntVendors: [],
            selectedSpecialFeatures: []
        },
        this.oneTrustIABConsent = {
            purpose: [],
            legimateInterest: [],
            features: [],
            specialFeatures: [],
            specialPurposes: [],
            vendors: [],
            legIntVendors: [],
            vendorList: null,
            IABCookieValue: ""
        },
        this.initialOneTrustIABConsent = {
            purpose: [],
            legimateInterest: [],
            features: [],
            specialFeatures: [],
            specialPurposes: [],
            vendors: [],
            legIntVendors: [],
            vendorList: null,
            IABCookieValue: ""
        },
        this.addtlVendors = {
            vendorConsent: [],
            vendorSelected: {}
        },
        this.initialAddtlVendors = {
            vendorConsent: [],
            vendorSelected: {}
        },
        this.addtlConsentVersion = "1~",
        this.initialAddtlVendorsList = {},
        this.isAddtlConsent = !1,
        this.currentGlobalFilteredList = [],
        this.filterByIABCategories = [],
        this.filterByCategories = [],
        this.hosts = {
            hostTemplate: null,
            hostCookieTemplate: null
        },
        this.generalVendors = {
            gvTemplate: null,
            gvCookieTemplate: null
        },
        this.oneTrustAlwaysActiveHosts = [],
        this.alwaysActiveGenVendors = [],
        this.softOptInGenVendors = [],
        this.optInGenVendors = [],
        this.optanonHostList = [],
        this.srcExecGrps = [],
        this.htmlExecGrps = [],
        this.srcExecGrpsTemp = [],
        this.htmlExecGrpsTemp = [],
        this.isPCVisible = !1,
        this.dataGroupState = [],
        this.userLocation = {
            country: "",
            state: ""
        },
        this.vendorsSetting = {},
        this.dsParams = {},
        this.isV2Stub = !1,
        this.fireOnetrustGrp = !1,
        this.showGeneralVendors = !1,
        this.genVenOptOutEnabled = !1,
        this.bAsset = {},
        this.pcAsset = {},
        this.csBtnAsset = {},
        this.cStyles = {},
        this.vendorDomInit = !1,
        this.genVendorDomInit = !1,
        this.syncNtfyContent = {},
        this.ntfyRequired = !1,
        this.skipAddingHTML = !1,
        this.bnrAnimationInProg = !1,
        this.isPreview = !1,
        this.geoFromUrl = "",
        this.hideBanner = !1,
        this.setAttributePolyfillIsActive = !1,
        this.storageBaseURL = "",
        this.isKeyboardUser = !1
    }
      , lt = new function() {}
      , ct = "BRANCH"
      , dt = "COOKIE"
      , ut = "IAB2_FEATURE"
      , pt = "IAB2_PURPOSE"
      , ht = "IAB2_SPL_FEATURE"
      , gt = "IAB2_SPL_PURPOSE"
      , Ct = "IAB2_STACK"
      , yt = ["IAB2_PURPOSE", "IAB2_STACK", "IAB2_FEATURE", "IAB2_SPL_PURPOSE", "IAB2_SPL_FEATURE"]
      , ft = ["COOKIE", "BRANCH", "IAB2_STACK"]
      , kt = ["IAB2_PURPOSE", "IAB2_SPL_FEATURE"]
      , vt = ["IAB2_FEATURE", "IAB2_SPL_PURPOSE"]
      , bt = ["IAB2_PURPOSE", "IAB2_SPL_PURPOSE", "IAB2_FEATURE", "IAB2_SPL_FEATURE"]
      , mt = (Pt.prototype.setRegionRule = function(e) {
        this.rule = e
    }
    ,
    Pt.prototype.getRegionRule = function() {
        return this.rule
    }
    ,
    Pt.prototype.getRegionRuleType = function() {
        return this.multiVariantTestingEnabled && this.selectedVariant ? this.selectedVariant.TemplateType : this.conditionalLogicEnabled && !this.allConditionsFailed ? this.Condition.TemplateType : this.rule.Type
    }
    ,
    Pt.prototype.canUseGoogleVendors = function(e) {
        return !!e && (this.conditionalLogicEnabled && !this.allConditionsFailed ? this.Condition.UseGoogleVendors : this.rule.UseGoogleVendors)
    }
    ,
    Pt.prototype.initVariables = function() {
        this.consentableGrps = [],
        this.consentableIabGrps = [],
        this.iabGrps = [],
        this.iabGrpIdMap = {},
        this.domainGrps = {},
        this.iabGroups = {
            purposes: {},
            legIntPurposes: {},
            specialPurposes: {},
            features: {},
            specialFeatures: {}
        }
    }
    ,
    Pt.prototype.init = function(e) {
        this.getGPCSignal(),
        this.initVariables();
        var t = e.DomainData;
        this.setPublicDomainData(JSON.parse(JSON.stringify(t))),
        this.domainDataMapper(t),
        this.commonDataMapper(e.CommonData),
        St.NtfyConfig = e.NtfyConfig || {},
        this.setBannerName(),
        this.setPcName(),
        this.populateGPCSignal(),
        St.GoogleConsent.GCEnable && this.initGCM()
    }
    ,
    Pt.prototype.getGPCSignal = function() {
        this.gpcEnabled = !0 === navigator.globalPrivacyControl
    }
    ,
    Pt.prototype.isValidConsentNoticeGroup = function(e, t) {
        if (!e.ShowInPopup)
            return !1;
        var o = e.FirstPartyCookies.length || e.Hosts.length || e.GeneralVendorsIds && e.GeneralVendorsIds.length
          , n = !1
          , r = !1
          , s = !1;
        if (e && !e.Parent) {
            e.SubGroups.length && (n = e.SubGroups.some(function(e) {
                return e.GroupName && e.ShowInPopup && e.FirstPartyCookies.length
            }),
            r = e.SubGroups.some(function(e) {
                return e.GroupName && e.ShowInPopup && (e.Hosts.length || e.GeneralVendorsIds && e.GeneralVendorsIds.length)
            }),
            !t || e.FirstPartyCookies.length && e.Hosts.length || (s = !e.SubGroups.some(function(e) {
                return -1 === yt.indexOf(e.Type)
            })));
            var i = e.SubGroups.some(function(e) {
                return -1 < yt.indexOf(e.Type)
            });
            (-1 < yt.indexOf(e.Type) || i) && (e.ShowVendorList = !0),
            (e.Hosts.length || r || n) && (e.ShowHostList = !0)
        }
        return o || -1 < yt.indexOf(e.Type) || n || r || s
    }
    ,
    Pt.prototype.extractGroupIdForIabGroup = function(e) {
        return -1 < e.indexOf("ISPV2_") ? e = e.replace("ISPV2_", "") : -1 < e.indexOf("IABV2_") ? e = e.replace("IABV2_", "") : -1 < e.indexOf("IFEV2_") ? e = e.replace("IFEV2_", "") : -1 < e.indexOf("ISFV2_") && (e = e.replace("ISFV2_", "")),
        e
    }
    ,
    Pt.prototype.populateGroups = function(e, r) {
        var s = this
          , i = {}
          , a = [];
        e.forEach(function(e) {
            var t = e.CustomGroupId;
            if (void 0 !== e.HasConsentOptOut && e.IsIabPurpose || (e.HasConsentOptOut = !0),
            !(!r.IsIabEnabled && -1 < yt.indexOf(e.Type) || "IAB2" === s.iabType && (e.Type === pt || e.Type === Ct) && !e.HasConsentOptOut && !e.HasLegIntOptOut || e.Type === ht && !e.HasConsentOptOut) && (t !== At.purposeOneGrpId || e.ShowInPopup || (s.purposeOneTreatment = !0),
            s.grpContainLegalOptOut = e.HasLegIntOptOut || s.grpContainLegalOptOut,
            e.SubGroups = [],
            e.Parent ? a.push(e) : i[t] = e,
            "IAB2" === s.iabType && -1 < yt.indexOf(e.Type))) {
                var o = s.extractGroupIdForIabGroup(t);
                s.iabGrpIdMap[t] = o,
                e.IabGrpId = o;
                var n = {
                    description: e.GroupDescription,
                    descriptionLegal: e.DescriptionLegal,
                    id: Number(o),
                    name: e.GroupName
                };
                switch (e.Type) {
                case pt:
                    s.iabGroups.purposes[o] = n;
                    break;
                case gt:
                    s.iabGroups.specialPurposes[o] = n;
                    break;
                case ut:
                    s.iabGroups.features[o] = n;
                    break;
                case ht:
                    s.iabGroups.specialFeatures[o] = n
                }
            }
        }),
        a.forEach(function(e) {
            i[e.Parent] && e.ShowInPopup && (e.FirstPartyCookies.length || e.Hosts.length || e.GeneralVendorsIds && e.GeneralVendorsIds.length || -1 < yt.indexOf(e.Type)) && i[e.Parent].SubGroups.push(e)
        });
        var t = [];
        return Object.keys(i).forEach(function(e) {
            s.isValidConsentNoticeGroup(i[e], r.IsIabEnabled) && (i[e].SubGroups.sort(function(e, t) {
                return e.Order - t.Order
            }),
            t.push(i[e]))
        }),
        this.initGrpVar(t),
        t.sort(function(e, t) {
            return e.Order - t.Order
        })
    }
    ,
    Pt.prototype.initGrpVar = function(e) {
        var o = this
          , n = !0
          , r = !0;
        e.forEach(function(e) {
            C([e], e.SubGroups).forEach(function(e) {
                var t;
                e.Type !== dt && e.Type !== pt && e.Type !== ht || (o.domainGrps[e.PurposeId.toLowerCase()] = e.CustomGroupId),
                -1 < ft.indexOf(e.Type) && o.consentableGrps.push(e),
                -1 < kt.indexOf(e.Type) && o.consentableIabGrps.push(e),
                -1 === ft.indexOf(e.Type) && o.iabGrps.push(e),
                o.gpcEnabled && e.IsGpcEnabled && (e.Status = Ge),
                (t = o.DNTEnabled && e.IsDntEnabled ? Oe : e.Status.toLowerCase()) !== xe && t !== Ve && t !== Oe || (n = !1),
                t !== Ve && t !== we && (r = !1),
                o.gpcForAGrpEnabled || (o.gpcForAGrpEnabled = e.IsGpcEnabled)
            })
        }),
        this.isOptInMode = n,
        this.isSoftOptInMode = r
    }
    ,
    Pt.prototype.domainDataMapper = function(e) {
        var t = {
            AriaClosePreferences: e.AriaClosePreferences,
            AriaOpenPreferences: e.AriaOpenPreferences,
            AriaPrivacy: e.AriaPrivacy,
            CenterRounded: e.CenterRounded,
            Flat: e.Flat,
            FloatingFlat: e.FloatingFlat,
            FloatingRounded: e.FloatingRounded,
            FloatingRoundedCorner: e.FloatingRoundedCorner,
            FloatingRoundedIcon: e.FloatingRoundedIcon,
            VendorLevelOptOut: e.IsIabEnabled,
            AboutCookiesText: e.AboutCookiesText,
            AboutLink: e.AboutLink,
            AboutText: e.AboutText,
            ActiveText: e.ActiveText,
            AddLinksToCookiepedia: e.AddLinksToCookiepedia,
            AdvancedAnalyticsCategory: e.AdvancedAnalyticsCategory || "",
            AlertAllowCookiesText: e.AlertAllowCookiesText,
            AlertCloseText: e.AlertCloseText,
            AlertLayout: e.AlertLayout,
            AlertMoreInfoText: e.AlertMoreInfoText,
            AlertNoticeText: e.AlertNoticeText,
            AllowAllText: e.PreferenceCenterConfirmText,
            AlwaysActiveText: e.AlwaysActiveText,
            BannerAdditionalDescPlacement: e.BannerAdditionalDescPlacement,
            BannerAdditionalDescription: e.BannerAdditionalDescription,
            BannerCloseButtonText: e.BannerCloseButtonText,
            BannerDPDDescription: e.BannerDPDDescription || [],
            BannerDPDDescriptionFormat: e.BannerDPDDescriptionFormat || "",
            BannerDPDTitle: e.BannerDPDTitle || "",
            BannerFeatureDescription: e.BannerFeatureDescription,
            BannerFeatureTitle: e.BannerFeatureTitle,
            BannerIABPartnersLink: e.BannerIABPartnersLink,
            BannerInformationDescription: e.BannerInformationDescription,
            BannerInformationTitle: e.BannerInformationTitle,
            BannerNonIABVendorListText: e.BannerNonIABVendorListText,
            BannerPosition: e.BannerPosition,
            BannerPurposeDescription: e.BannerPurposeDescription,
            BannerPurposeTitle: e.BannerPurposeTitle,
            BannerRejectAllButtonText: e.BannerRejectAllButtonText,
            BannerRelativeFontSizesToggle: e.BannerRelativeFontSizesToggle,
            BannerSettingsButtonDisplayLink: e.BannerSettingsButtonDisplayLink,
            BannerShowRejectAllButton: e.BannerShowRejectAllButton,
            BannerTitle: e.BannerTitle,
            BCloseButtonType: e.BCloseButtonType,
            BContinueText: e.BContinueText,
            BCookiePolicyLinkScreenReader: e.BCookiePolicyLinkScreenReader,
            BImprintLinkScreenReader: e.BImprintLinkScreenReader,
            BInitialFocus: e.BInitialFocus,
            BInitialFocusLinkAndButton: e.BInitialFocusLinkAndButton,
            BSaveBtnTxt: e.BSaveBtnText,
            BShowImprintLink: e.BShowImprintLink,
            BShowPolicyLink: e.BShowPolicyLink,
            BShowSaveBtn: e.BShowSaveBtn,
            CategoriesText: e.CategoriesText || "Categories",
            cctId: e.cctId,
            ChoicesBanner: e.ChoicesBanner,
            CloseShouldAcceptAllCookies: e.CloseShouldAcceptAllCookies,
            CloseText: e.CloseText,
            ConfirmText: e.ConfirmText,
            ConsentModel: {
                Name: e.ConsentModel
            },
            CookieListDescription: e.CookieListDescription,
            CookieListTitle: e.CookieListTitle,
            CookieSettingButtonText: e.CookieSettingButtonText,
            CookiesText: e.CookiesText || "Cookies",
            CookiesUsedText: e.CookiesUsedText,
            CustomJs: e.CustomJs,
            firstPartyTxt: e.CookieFirstPartyText,
            FooterDescriptionText: e.FooterDescriptionText,
            ForceConsent: e.ForceConsent,
            GeneralVendors: e.GeneralVendors,
            GeneralVendorsEnabled: e.PCenterUseGeneralVendorsToggle,
            GenVenOptOut: e.PCenterAllowVendorOptout,
            GlobalRestrictionEnabled: e.GlobalRestrictionEnabled,
            GlobalRestrictions: e.GlobalRestrictions,
            GoogleConsent: {
                GCAdStorage: e.GCAdStorage,
                GCAnalyticsStorage: e.GCAnalyticsStorage,
                GCEnable: e.GCEnable,
                GCFunctionalityStorage: e.GCFunctionalityStorage,
                GCPersonalizationStorage: e.GCPersonalizationStorage,
                GCRedactEnable: e.GCRedactEnable,
                GCSecurityStorage: e.GCSecurityStorage,
                GCWaitTime: e.GCWaitTime
            },
            GroupGenVenListLabel: e.PCenterGeneralVendorThirdPartyCookiesText,
            Groups: this.populateGroups(e.Groups, e),
            HideToolbarCookieList: e.HideToolbarCookieList,
            IabType: e.IabType,
            InactiveText: e.InactiveText,
            IsConsentLoggingEnabled: e.IsConsentLoggingEnabled,
            IsIabEnabled: e.IsIabEnabled,
            IsIabThirdPartyCookieEnabled: e.IsIabThirdPartyCookieEnabled,
            IsLifespanEnabled: e.IsLifespanEnabled,
            Language: e.Language,
            LastReconsentDate: e.LastReconsentDate,
            LfSpanSecs: e.PCLifeSpanSecs,
            LfSpnWk: e.PCLifeSpanWk,
            LfSpnWks: e.PCLifeSpanWks,
            LfSpnYr: e.PCLifeSpanYr,
            LfSpnYrs: e.PCLifeSpanYrs,
            LifespanDurationText: e.LifespanDurationText || "days",
            LifespanText: e.LifespanText || "Lifespan",
            LifespanTypeText: e.LifespanTypeText || "Session",
            MainInfoText: e.MainInfoText,
            MainText: e.MainText,
            ManagePreferenceText: e.PreferenceCenterManagePreferencesText,
            NewVendorsInactiveEnabled: e.NewVendorsInactiveEnabled,
            NewWinTxt: e.PreferenceCenterMoreInfoScreenReader,
            NextPageAcceptAllCookies: e.NextPageAcceptAllCookies,
            NextPageCloseBanner: e.NextPageCloseBanner,
            NoBanner: e.NoBanner,
            OnClickAcceptAllCookies: e.OnClickAcceptAllCookies,
            OnClickCloseBanner: e.OnClickCloseBanner,
            OverriddenVendors: e.OverriddenVendors,
            OverridenGoogleVendors: e.OverridenGoogleVendors,
            PCAccordionStyle: W.Caret,
            PCActiveText: e.PCActiveText,
            PCCloseButtonType: e.PCCloseButtonType,
            PCContinueText: e.PCContinueText,
            PCCookiePolicyLinkScreenReader: e.PCCookiePolicyLinkScreenReader,
            PCCookiePolicyText: e.PCCookiePolicyText,
            PCenterAllowAllConsentText: e.PCenterAllowAllConsentText,
            PCenterApplyFiltersText: e.PCenterApplyFiltersText,
            PCenterBackText: e.PCenterBackText,
            PCenterCancelFiltersText: e.PCenterCancelFiltersText,
            PCenterClearFiltersText: e.PCenterClearFiltersText,
            PCenterConsentText: e.PCenterConsentText || "Consent",
            PCenterCookieListFilterAria: e.PCenterCookieListFilterAria || "Filter",
            PCenterCookieListSearch: e.PCenterCookieListSearch || "Search",
            PCenterCookieSearchAriaLabel: e.PCenterCookieSearchAriaLabel || "Cookie list search",
            PCenterCookiesListText: e.PCenterCookiesListText,
            PCenterEnableAccordion: e.PCenterEnableAccordion,
            PCenterFilterAppliedAria: e.PCenterFilterAppliedAria || "Applied",
            PCenterFilterClearedAria: e.PCenterFilterClearedAria || "Filters Cleared",
            PCenterFilterText: e.PCenterFilterText,
            PCenterGeneralVendorsText: e.PCenterGeneralVendorsText,
            PCenterLegIntColumnHeader: e.PCenterLegIntColumnHeader || "Legitimate Interest",
            PCenterLegitInterestText: e.PCenterLegitInterestText || "Legitimate Interest",
            PCenterRejectAllButtonText: e.PCenterRejectAllButtonText,
            PCenterSelectAllVendorsText: e.PCenterSelectAllVendorsText,
            PCenterShowRejectAllButton: e.PCenterShowRejectAllButton,
            PCenterUserIdDescriptionText: e.PCenterUserIdDescriptionText,
            PCenterUserIdNotYetConsentedText: e.PCenterUserIdNotYetConsentedText,
            PCenterUserIdTimestampTitleText: e.PCenterUserIdTimestampTitleText,
            PCenterUserIdTitleText: e.PCenterUserIdTitleText,
            PCenterVendorListDescText: e.PCenterVendorListDescText,
            PCenterVendorListDisclosure: e.PCenterVendorListDisclosure,
            PCenterVendorListFilterAria: e.PCenterVendorListFilterAria || "Filter",
            PCenterVendorListLifespan: e.PCenterVendorListLifespan,
            PCenterVendorListLifespanDay: e.PCenterVendorListLifespanDay,
            PCenterVendorListLifespanDays: e.PCenterVendorListLifespanDays,
            PCenterVendorListLifespanMonth: e.PCenterVendorListLifespanMonth,
            PCenterVendorListLifespanMonths: e.PCenterVendorListLifespanMonths,
            PCenterVendorListNonCookieUsage: e.PCenterVendorListNonCookieUsage,
            PCenterVendorListSearch: e.PCenterVendorListSearch || "Search",
            PCenterVendorListStorageDomain: e.PCenterVendorListStorageDomain,
            PCenterVendorListStorageIdentifier: e.PCenterVendorListStorageIdentifier,
            PCenterVendorListStoragePurposes: e.PCenterVendorListStoragePurposes,
            PCenterVendorListStorageType: e.PCenterVendorListStorageType,
            PCenterVendorSearchAriaLabel: e.PCenterVendorSearchAriaLabel || "Vendor list search",
            PCenterVendorsListText: e.PCenterVendorsListText,
            PCenterViewPrivacyPolicyText: e.PCenterViewPrivacyPolicyText,
            PCFirstPartyCookieListText: e.PCFirstPartyCookieListText || "First Party Cookies",
            PCGoogleVendorsText: e.PCGoogleVendorsText,
            PCGrpDescLinkPosition: e.PCGrpDescLinkPosition,
            PCGrpDescType: e.PCGrpDescType,
            PCGVenPolicyTxt: e.PCGeneralVendorsPolicyText,
            PCIABVendorsText: e.PCIABVendorsText,
            PCInactiveText: e.PCInactiveText,
            PCLogoAria: e.PCLogoScreenReader,
            PCOpensCookiesDetailsAlert: e.PCOpensCookiesDetailsAlert,
            PCenterVendorListScreenReader: e.PCenterVendorListScreenReader,
            PCOpensVendorDetailsAlert: e.PCOpensVendorDetailsAlert,
            PCShowConsentLabels: !(!e.Tab || !e.PCTemplateUpgrade) && e.PCShowConsentLabels,
            PCShowPersistentCookiesHoverButton: e.PCShowPersistentCookiesHoverButton || !1,
            PCTemplateUpgrade: e.PCTemplateUpgrade,
            PCVendorFullLegalText: e.PCVendorFullLegalText,
            PCViewCookiesText: e.PCViewCookiesText,
            PCLayout: {
                Center: e.Center,
                List: e.List,
                Panel: e.Panel,
                Popup: e.Popup,
                Tab: e.Tab
            },
            PCenterVendorListLinkText: e.PCenterVendorListLinkText,
            PCenterVendorListLinkAriaLabel: e.PCenterVendorListLinkAriaLabel,
            PreferenceCenterPosition: e.PreferenceCenterPosition,
            Publisher: e.publisher,
            PublisherCC: e.PublisherCC,
            ReconsentFrequencyDays: e.ReconsentFrequencyDays,
            ScrollAcceptAllCookies: e.ScrollAcceptAllCookies,
            ScrollCloseBanner: e.ScrollCloseBanner,
            ShowAlertNotice: e.ShowAlertNotice,
            showBannerCloseButton: e.showBannerCloseButton,
            ShowPreferenceCenterCloseButton: e.ShowPreferenceCenterCloseButton,
            ThirdPartyCookieListText: e.ThirdPartyCookieListText,
            thirdPartyTxt: e.CookieThirdPartyText,
            UseGoogleVendors: this.canUseGoogleVendors(e.PCTemplateUpgrade),
            VendorConsentModel: e.VendorConsentModel,
            VendorListText: e.VendorListText,
            Vendors: e.Vendors
        };
        e.PCTemplateUpgrade && (e.Center || e.Panel) && e.PCAccordionStyle === W.PlusMinus && (t.PCAccordionStyle = e.PCAccordionStyle),
        t.PCenterEnableAccordion = e.PCAccordionStyle !== W.NoAccordion,
        this.legIntSettings = e.LegIntSettings || {},
        void 0 === this.legIntSettings.PAllowLI && (this.legIntSettings.PAllowLI = !0),
        lt.moduleInitializer.MobileSDK || (this.pagePushedDown = e.BannerPushesDownPage),
        St = r(r({}, St), t)
    }
    ,
    Pt.prototype.commonDataMapper = function(e) {
        var t = {
            iabThirdPartyConsentUrl: e.IabThirdPartyCookieUrl,
            optanonHideAcceptButton: e.OptanonHideAcceptButton,
            optanonHideCookieSettingButton: e.OptanonHideCookieSettingButton,
            optanonStyle: e.OptanonStyle,
            optanonStaticContentLocation: e.OptanonStaticContentLocation,
            bannerCustomCSS: e.BannerCustomCSS.replace(/\\n/g, ""),
            pcCustomCSS: e.PCCustomCSS.replace(/\\n/g, ""),
            textColor: e.TextColor,
            buttonColor: e.ButtonColor,
            buttonTextColor: e.ButtonTextColor,
            bannerMPButtonColor: e.BannerMPButtonColor,
            bannerMPButtonTextColor: e.BannerMPButtonTextColor,
            backgroundColor: e.BackgroundColor,
            bannerAccordionBackgroundColor: e.BannerAccordionBackgroundColor,
            BContinueColor: e.BContinueColor,
            PCContinueColor: e.PCContinueColor,
            pcTextColor: e.PcTextColor,
            pcButtonColor: e.PcButtonColor,
            pcButtonTextColor: e.PcButtonTextColor,
            pcAccordionBackgroundColor: e.PcAccordionBackgroundColor,
            pcLinksTextColor: e.PcLinksTextColor,
            bannerLinksTextColor: e.BannerLinksTextColor,
            pcEnableToggles: e.PcEnableToggles,
            pcBackgroundColor: e.PcBackgroundColor,
            pcMenuColor: e.PcMenuColor,
            pcMenuHighLightColor: e.PcMenuHighLightColor,
            legacyBannerLayout: e.LegacyBannerLayout,
            optanonLogo: e.OptanonLogo,
            oneTrustFtrLogo: e.OneTrustFooterLogo,
            optanonCookieDomain: e.OptanonCookieDomain,
            cookiePersistentLogo: e.CookiePersistentLogo,
            optanonGroupIdPerformanceCookies: e.OptanonGroupIdPerformanceCookies,
            optanonGroupIdFunctionalityCookies: e.OptanonGroupIdFunctionalityCookies,
            optanonGroupIdTargetingCookies: e.OptanonGroupIdTargetingCookies,
            optanonGroupIdSocialCookies: e.OptanonGroupIdSocialCookies,
            optanonShowSubGroupCookies: e.ShowSubGroupCookies,
            useRTL: e.UseRTL,
            showBannerCookieSettings: e.ShowBannerCookieSettings,
            showBannerAcceptButton: e.ShowBannerAcceptButton,
            showCookieList: e.ShowCookieList,
            allowHostOptOut: e.AllowHostOptOut,
            CookiesV2NewCookiePolicy: e.CookiesV2NewCookiePolicy,
            cookieListTitleColor: e.CookieListTitleColor,
            cookieListGroupNameColor: e.CookieListGroupNameColor,
            cookieListTableHeaderColor: e.CookieListTableHeaderColor,
            CookieListTableHeaderBackgroundColor: e.CookieListTableHeaderBackgroundColor,
            cookieListPrimaryColor: e.CookieListPrimaryColor,
            cookieListCustomCss: e.CookieListCustomCss,
            pcShowCookieHost: e.PCShowCookieHost,
            pcShowCookieDuration: e.PCShowCookieDuration,
            pcShowCookieType: e.PCShowCookieType,
            pcShowCookieCategory: e.PCShowCookieCategory,
            pcShowCookieDescription: e.PCShowCookieDescription,
            ConsentIntegration: e.ConsentIntegration,
            ConsentPurposesText: e.BConsentPurposesText || "Consent Purposes",
            FeaturesText: e.BFeaturesText || "Features",
            LegitimateInterestPurposesText: e.BLegitimateInterestPurposesText || "Legitimate Interest Purposes",
            ConsentText: e.BConsentText || "Consent",
            LegitInterestText: e.BLegitInterestText || "Legit. Interest",
            pcDialogClose: e.PCDialogClose || "dialog closed",
            pCFooterLogoUrl: e.PCFooterLogoUrl,
            SpecialFeaturesText: e.BSpecialFeaturesText || "Special Features",
            SpecialPurposesText: e.BSpecialPurposesText || "Special Purposes",
            pcCListName: e.PCCListName || "Name",
            pcCListHost: e.PCCListHost || "Host",
            pcCListDuration: e.PCCListDuration || "Duration",
            pcCListType: e.PCCListType || "Type",
            pcCListCategory: e.PCCListCategory || "Category",
            pcCListDescription: e.PCCListDescription || "Description",
            IabLegalTextUrl: e.IabLegalTextUrl,
            pcLegIntButtonColor: e.PcLegIntButtonColor,
            pcLegIntButtonTextColor: e.PcLegIntButtonTextColor,
            PCenterExpandToViewText: e.PCenterExpandToViewText,
            BCategoryContainerColor: e.BCategoryContainerColor,
            BCategoryStyleColor: e.BCategoryStyleColor,
            BLineBreakColor: e.BLineBreakColor,
            BSaveBtnColor: e.BSaveBtnColor,
            BCategoryStyle: e.BCategoryStyle,
            BAnimation: e.BAnimation,
            BFocusBorderColor: e.BFocusBorderColor,
            PCFocusBorderColor: e.PCFocusBorderColor
        };
        St = r(r({}, St), t)
    }
    ,
    Pt.prototype.setPublicDomainData = function(r) {
        this.pubDomainData = {
            AboutCookiesText: r.AboutCookiesText,
            AboutLink: r.AboutLink,
            AboutText: r.AboutText,
            ActiveText: r.ActiveText,
            AddLinksToCookiepedia: r.AddLinksToCookiepedia,
            AlertAllowCookiesText: r.AlertAllowCookiesText,
            AlertCloseText: r.AlertCloseText,
            AlertLayout: r.AlertLayout,
            AlertMoreInfoText: r.AlertMoreInfoText,
            AlertNoticeText: r.AlertNoticeText,
            AllowAllText: r.PreferenceCenterConfirmText,
            AlwaysActiveText: r.AlwaysActiveText,
            BAnimation: r.BAnimation,
            BannerCloseButtonText: r.BannerCloseButtonText,
            BannerDPDDescription: r.BannerDPDDescription || [],
            BannerDPDDescriptionFormat: r.BannerDPDDescriptionFormat || "",
            BannerDPDTitle: r.BannerDPDTitle || "",
            BannerFeatureDescription: r.BannerFeatureDescription,
            BannerFeatureTitle: r.BannerFeatureTitle,
            BannerIABPartnersLink: r.BannerIABPartnersLink,
            BannerInformationDescription: r.BannerInformationDescription,
            BannerInformationTitle: r.BannerInformationTitle,
            BannerPosition: r.BannerPosition,
            BannerPurposeDescription: r.BannerPurposeDescription,
            BannerPurposeTitle: r.BannerPurposeTitle,
            BannerRejectAllButtonText: r.BannerRejectAllButtonText,
            BannerRelativeFontSizesToggle: r.BannerRelativeFontSizesToggle,
            BannerSettingsButtonDisplayLink: r.BannerSettingsButtonDisplayLink,
            BannerShowRejectAllButton: r.BannerShowRejectAllButton,
            BannerTitle: r.BannerTitle,
            BCategoryContainerColor: r.BCategoryContainerColor,
            BCategoryStyle: r.BCategoryStyle,
            BCategoryStyleColor: r.BCategoryStyleColor,
            BCloseButtonType: r.BCloseButtonType,
            BContinueText: r.BContinueText,
            BInitialFocus: r.BInitialFocus,
            BInitialFocusLinkAndButton: r.BInitialFocusLinkAndButton,
            BLineBreakColor: r.BLineBreakColor,
            BSaveBtnColor: r.BSaveBtnColor,
            BSaveBtnTxt: r.BSaveBtnText,
            BShowSaveBtn: r.BShowSaveBtn,
            CategoriesText: r.CategoriesText,
            cctId: r.cctId,
            ChoicesBanner: r.ChoicesBanner,
            CloseShouldAcceptAllCookies: r.CloseShouldAcceptAllCookies,
            CloseText: r.CloseText,
            ConfirmText: r.ConfirmText,
            ConsentIntegrationData: null,
            ConsentModel: {
                Name: r.ConsentModel
            },
            CookieListDescription: r.CookieListDescription,
            CookieListTitle: r.CookieListTitle,
            CookieSettingButtonText: r.CookieSettingButtonText,
            CookiesText: r.CookiesText,
            CookiesUsedText: r.CookiesUsedText,
            CustomJs: r.CustomJs,
            Domain: lt.moduleInitializer.Domain,
            FooterDescriptionText: r.FooterDescriptionText,
            ForceConsent: r.ForceConsent,
            GeneralVendors: r.GeneralVendors,
            GoogleConsent: {
                GCAdStorage: r.GCAdStorage,
                GCAnalyticsStorage: r.GCAnalyticsStorage,
                GCEnable: r.GCEnable,
                GCFunctionalityStorage: r.GCFunctionalityStorage,
                GCPersonalizationStorage: r.GCPersonalizationStorage,
                GCRedactEnable: r.GCRedactEnable,
                GCSecurityStorage: r.GCSecurityStorage,
                GCWaitTime: r.GCWaitTime
            },
            Groups: null,
            HideToolbarCookieList: r.HideToolbarCookieList,
            IabType: r.IabType,
            InactiveText: r.InactiveText,
            IsBannerLoaded: !1,
            IsConsentLoggingEnabled: r.IsConsentLoggingEnabled,
            IsIABEnabled: r.IsIabEnabled,
            IsIabThirdPartyCookieEnabled: r.IsIabThirdPartyCookieEnabled,
            IsLifespanEnabled: r.IsLifespanEnabled,
            Language: r.Language,
            LastReconsentDate: r.LastReconsentDate,
            LifespanDurationText: r.LifespanDurationText,
            LifespanText: r.LifespanText,
            LifespanTypeText: r.LifespanTypeText,
            MainInfoText: r.MainInfoText,
            MainText: r.MainText,
            ManagePreferenceText: r.PreferenceCenterManagePreferencesText,
            NextPageAcceptAllCookies: r.NextPageAcceptAllCookies,
            NextPageCloseBanner: r.NextPageCloseBanner,
            NoBanner: r.NoBanner,
            OnClickAcceptAllCookies: r.OnClickAcceptAllCookies,
            OnClickCloseBanner: r.OnClickCloseBanner,
            OverridenGoogleVendors: r.OverridenGoogleVendors,
            PCAccordionStyle: W.Caret,
            PCCloseButtonType: r.PCCloseButtonType,
            PCContinueText: r.PCContinueText,
            PCenterAllowAllConsentText: r.PCenterAllowAllConsentText,
            PCenterApplyFiltersText: r.PCenterApplyFiltersText,
            PCenterBackText: r.PCenterBackText,
            PCenterCancelFiltersText: r.PCenterCancelFiltersText,
            PCenterClearFiltersText: r.PCenterClearFiltersText,
            PCenterCookieSearchAriaLabel: r.PCenterCookieSearchAriaLabel || "Cookie list search",
            PCenterCookiesListText: r.PCenterCookiesListText,
            PCenterEnableAccordion: r.PCenterEnableAccordion,
            PCenterExpandToViewText: r.PCenterExpandToViewText,
            PCenterFilterAppliedAria: r.PCenterFilterAppliedAria || "Applied",
            PCenterFilterClearedAria: r.PCenterFilterClearedAria || "Filters Cleared",
            PCenterFilterText: r.PCenterFilterText,
            PCenterRejectAllButtonText: r.PCenterRejectAllButtonText,
            PCenterSelectAllVendorsText: r.PCenterSelectAllVendorsText,
            PCenterShowRejectAllButton: r.PCenterShowRejectAllButton,
            PCenterUserIdDescriptionText: r.PCenterUserIdDescriptionText,
            PCenterUserIdNotYetConsentedText: r.PCenterUserIdNotYetConsentedText,
            PCenterUserIdTimestampTitleText: r.PCenterUserIdTimestampTitleText,
            PCenterUserIdTitleText: r.PCenterUserIdTitleText,
            PCenterVendorListDescText: r.PCenterVendorListDescText,
            PCenterVendorSearchAriaLabel: r.PCenterVendorSearchAriaLabel || "Vendor list search",
            PCenterVendorsListText: r.PCenterVendorsListText,
            PCenterViewPrivacyPolicyText: r.PCenterViewPrivacyPolicyText,
            PCFirstPartyCookieListText: r.PCFirstPartyCookieListText,
            PCGoogleVendorsText: r.PCGoogleVendorsText,
            PCGrpDescLinkPosition: r.PCGrpDescLinkPosition,
            PCGrpDescType: r.PCGrpDescType,
            PCIABVendorsText: r.PCIABVendorsText,
            PCLogoAria: r.PCLogoScreenReader,
            PCOpensCookiesDetailsAlert: r.PCOpensCookiesDetailsAlert,
            PCenterVendorListScreenReader: r.PCenterVendorListScreenReader,
            PCOpensVendorDetailsAlert: r.PCOpensVendorDetailsAlert,
            PCShowPersistentCookiesHoverButton: r.PCShowPersistentCookiesHoverButton,
            PCTemplateUpgrade: r.PCTemplateUpgrade,
            PCVendorFullLegalText: r.PCVendorFullLegalText,
            PCViewCookiesText: r.PCViewCookiesText,
            PCLayout: {
                Center: r.Center,
                List: r.List,
                Panel: r.Panel,
                Popup: r.Popup,
                Tab: r.Tab
            },
            PCenterVendorListLinkText: r.PCenterVendorListLinkText,
            PCenterVendorListLinkAriaLabel: r.PCenterVendorListLinkAriaLabel,
            PreferenceCenterPosition: r.PreferenceCenterPosition,
            ScrollAcceptAllCookies: r.ScrollAcceptAllCookies,
            ScrollCloseBanner: r.ScrollCloseBanner,
            ShowAlertNotice: r.ShowAlertNotice,
            showBannerCloseButton: r.showBannerCloseButton,
            ShowPreferenceCenterCloseButton: r.ShowPreferenceCenterCloseButton,
            ThirdPartyCookieListText: r.ThirdPartyCookieListText,
            UseGoogleVendors: this.canUseGoogleVendors(r.PCTemplateUpgrade),
            VendorConsentModel: r.VendorConsentModel,
            VendorLevelOptOut: r.IsIabEnabled,
            VendorListText: r.VendorListText
        },
        r.PCTemplateUpgrade && (r.Center || r.Panel) && r.PCAccordionStyle !== W.NoAccordion && (this.pubDomainData.PCAccordionStyle = r.PCAccordionStyle),
        this.pubDomainData.PCenterEnableAccordion = r.PCAccordionStyle !== W.NoAccordion;
        var s = [];
        r.Groups.forEach(function(e) {
            var t, o;
            if (r.IsIabEnabled || !e.IsIabPurpose) {
                e.Cookies = JSON.parse(JSON.stringify(e.FirstPartyCookies));
                var n = null === (o = e.Hosts) || void 0 === o ? void 0 : o.reduce(function(e, t) {
                    return e.concat(JSON.parse(JSON.stringify(t.Cookies)))
                }, []);
                (t = e.Cookies).push.apply(t, n),
                s.push(e)
            }
        }),
        this.pubDomainData.Groups = s
    }
    ,
    Pt.prototype.setBannerScriptElement = function(e) {
        this.bannerScriptElement = e,
        this.setDomainElementAttributes()
    }
    ,
    Pt.prototype.setDomainElementAttributes = function() {
        this.bannerScriptElement && (this.bannerScriptElement.hasAttribute("data-document-language") && this.setUseDocumentLanguage("true" === this.bannerScriptElement.getAttribute("data-document-language")),
        this.bannerScriptElement.hasAttribute("data-ignore-ga") && (this.ignoreGoogleAnlyticsCall = "true" === this.bannerScriptElement.getAttribute("data-ignore-ga")),
        this.bannerScriptElement.hasAttribute("data-ignore-html") && (this.ignoreInjectingHtmlCss = "true" === this.bannerScriptElement.getAttribute("data-ignore-html")))
    }
    ,
    Pt.prototype.setUseDocumentLanguage = function(e) {
        this.useDocumentLanguage = e
    }
    ,
    Pt.prototype.setPcName = function() {
        var e = St.PCLayout;
        e.Center ? this.pcName = Xe : e.Panel ? this.pcName = Qe : e.Popup ? this.pcName = Ze : e.List ? this.pcName = $e : e.Tab && (this.pcName = et)
    }
    ,
    Pt.prototype.setBannerName = function() {
        St.Flat ? this.bannerName = Ue : St.FloatingRoundedCorner ? this.bannerName = je : St.FloatingFlat ? this.bannerName = ze : St.FloatingRounded ? this.bannerName = We : St.FloatingRoundedIcon ? this.bannerName = Ke : St.CenterRounded ? this.bannerName = Me : St.ChoicesBanner ? this.bannerName = Je : St.NoBanner && (this.bannerName = Ye)
    }
    ,
    Pt.prototype.populateGPCSignal = function() {
        var e = Lt.readCookieParam(Te.OPTANON_CONSENT, Se)
          , t = this.gpcForAGrpEnabled && this.gpcEnabled ? "1" : "0";
        this.gpcValueChanged = e ? e != t : this.gpcForAGrpEnabled,
        this.gpcForAGrpEnabled && Lt.writeCookieParam(Te.OPTANON_CONSENT, Se, t)
    }
    ,
    Pt.prototype.initGCM = function() {
        var o = [];
        Object.keys(this.rule.States).forEach(function(t) {
            At.rule.States[t].forEach(function(e) {
                o.push((t + "-" + e).toUpperCase())
            })
        });
        var e = At.rule.Countries.map(function(e) {
            return e.toUpperCase()
        });
        At.gcmCountries = e.concat(o)
    }
    ,
    Pt);
    function Pt() {
        var t = this;
        this.DNTEnabled = "yes" === navigator.doNotTrack || "1" === navigator.doNotTrack,
        this.gpcEnabled = !1,
        this.gpcForAGrpEnabled = !1,
        this.pagePushedDown = !1,
        this.iabGroups = {
            purposes: {},
            legIntPurposes: {},
            specialPurposes: {},
            features: {},
            specialFeatures: {}
        },
        this.iabType = null,
        this.grpContainLegalOptOut = !1,
        this.purposeOneTreatment = !1,
        this.ignoreInjectingHtmlCss = !1,
        this.ignoreGoogleAnlyticsCall = !1,
        this.mobileOnlineURL = [],
        this.iabGrpIdMap = {},
        this.iabGrps = [],
        this.consentableGrps = [],
        this.consentableIabGrps = [],
        this.domainGrps = {},
        this.thirdPartyiFrameLoaded = !1,
        this.thirdPartyiFrameResolve = null,
        this.thirdPartyiFramePromise = new Promise(function(e) {
            t.thirdPartyiFrameResolve = e
        }
        ),
        this.isOptInMode = !1,
        this.isSoftOptInMode = !1,
        this.gpcValueChanged = !1,
        this.conditionalLogicEnabled = !1,
        this.allConditionsFailed = !1,
        this.canUseConditionalLogic = !1,
        this.gtmUpdatedinStub = !1,
        this.gcmDevIdSet = !1,
        this.purposeOneGrpId = "IABV2_1"
    }
    var At, St = {};
    function Tt(e, t, o) {
        void 0 === o && (o = !1);
        function n(e) {
            if (!e)
                return null;
            var t = e.trim();
            return ";" !== t.charAt(t.length - 1) && (t += ";"),
            t.trim()
        }
        var s = n(e.getAttribute("style"))
          , i = n(t)
          , r = "";
        r = o && s ? function() {
            for (var e = s.split(";").concat(i.split(";")).filter(function(e) {
                return 0 !== e.length
            }), t = "", o = "", n = e.length - 1; 0 <= n; n--) {
                var r = e[n].substring(0, e[n].indexOf(":")).trim();
                t.indexOf(r) < 0 && (t += r,
                o += e[n] + ";")
            }
            return o
        }() : i,
        e.setAttribute("style", r)
    }
    function It() {}
    var Lt, _t = new (It.prototype.convertKeyValueLowerCase = function(e) {
        for (var t in e)
            e[t.toLowerCase()] ? e[t.toLowerCase()] = e[t].toLowerCase() : (e[t] && (e[t.toLowerCase()] = e[t].toLowerCase()),
            delete e[t]);
        return e
    }
    ,
    It.prototype.arrToStr = function(e) {
        return e.toString()
    }
    ,
    It.prototype.strToArr = function(e) {
        return e ? e.split(",") : []
    }
    ,
    It.prototype.empty = function(e) {
        var t = document.getElementById(e);
        if (t)
            for (; t.hasChildNodes(); )
                t.removeChild(t.lastChild)
    }
    ,
    It.prototype.show = function(e) {
        var t = document.getElementById(e);
        t && Tt(t, "display: block;", !0)
    }
    ,
    It.prototype.remove = function(e) {
        var t = document.getElementById(e);
        t && t.parentNode && t.parentNode.removeChild(t)
    }
    ,
    It.prototype.appendTo = function(e, t) {
        var o, n = document.getElementById(e);
        n && ((o = document.createElement("div")).innerHTML = t,
        n.appendChild(o))
    }
    ,
    It.prototype.contains = function(e, t) {
        var o;
        for (o = 0; o < e.length; o += 1)
            if (e[o].toString().toLowerCase() === t.toString().toLowerCase())
                return !0;
        return !1
    }
    ,
    It.prototype.indexOf = function(e, t) {
        var o;
        for (o = 0; o < e.length; o += 1)
            if (e[o] === t)
                return o;
        return -1
    }
    ,
    It.prototype.endsWith = function(e, t) {
        return -1 !== e.indexOf(t, e.length - t.length)
    }
    ,
    It.prototype.generateUUID = function() {
        var o = (new Date).getTime();
        return "undefined" != typeof performance && "function" == typeof performance.now && (o += performance.now()),
        "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
            var t = (o + 16 * Math.random()) % 16 | 0;
            return o = Math.floor(o / 16),
            ("x" === e ? t : 3 & t | 8).toString(16)
        })
    }
    ,
    It.prototype.getActiveIdArray = function(e) {
        return e.filter(function(e) {
            return "true" === e.split(":")[1]
        }).map(function(e) {
            return parseInt(e.split(":")[0])
        })
    }
    ,
    It.prototype.distinctArray = function(e) {
        var t = new Array;
        return e.forEach(function(e) {
            t.indexOf(e) < 0 && t.push(e)
        }),
        t
    }
    ,
    It.prototype.findIndex = function(e, t) {
        for (var o = -1, n = 0; n < e.length; n++)
            if (void 0 !== e[n] && t(e[n], n)) {
                o = n;
                break
            }
        return o
    }
    ,
    It.prototype.getURL = function(e) {
        var t = document.createElement("a");
        return t.href = e,
        t
    }
    ,
    It.prototype.removeURLPrefixes = function(e) {
        return e.toLowerCase().replace(/(^\w+:|^)\/\//, "").replace("www.", "")
    }
    ,
    It.prototype.removeChild = function(e) {
        if (e)
            if (e instanceof NodeList || e instanceof Array)
                for (var t = 0; t < e.length; t++)
                    e[t].parentElement.removeChild(e[t]);
            else
                e.parentElement.removeChild(e)
    }
    ,
    It.prototype.getRelativeURL = function(e, t, o) {
        if (void 0 === o && (o = !1),
        t) {
            var n = "./" + e.replace(/^(http|https):\/\//, "").split("/").slice(1).join("/").replace(".json", "");
            return o ? n : n + ".js"
        }
        return e
    }
    ,
    It.prototype.setCheckedAttribute = function(e, t, o) {
        e && (t = document.querySelector(e)),
        t && (t.setAttribute("aria-checked", o.toString()),
        o ? t.setAttribute("checked", "") : t.removeAttribute("checked"),
        t.checked = o)
    }
    ,
    It.prototype.setDisabledAttribute = function(e, t, o) {
        e && (t = document.querySelector(e)),
        t && (o ? t.setAttribute("disabled", o.toString()) : t.removeAttribute("disabled"))
    }
    ,
    It.prototype.setHtmlAttributes = function(e, t) {
        for (var o in t)
            e.setAttribute(o, t[o]),
            e[o] = t[o]
    }
    ,
    It.prototype.calculateCookieLifespan = function(e) {
        if (e < 0)
            return St.LifespanTypeText;
        var t = Math.floor(e / J.maxSecToDays);
        if (t < J.minDays)
            return "< 1 " + St.PCenterVendorListLifespanDay;
        if (t < J.maxDays)
            return t + " " + St.PCenterVendorListLifespanDays;
        var o = Math.floor(t / J.maxDays);
        return 1 === o ? o + " " + St.PCenterVendorListLifespanMonth : o + " " + St.PCenterVendorListLifespanMonths
    }
    ,
    It.prototype.insertElement = function(e, t, o) {
        e && t && e.insertAdjacentElement(o, t)
    }
    ,
    It), Bt = (Et.prototype.removeAlertBox = function() {
        null !== this.getCookie(Te.ALERT_BOX_CLOSED) && this.setCookie(Te.ALERT_BOX_CLOSED, "", 0, !0)
    }
    ,
    Et.prototype.removeIab1 = function() {
        null !== this.getCookie(O.Iab1Pub) && this.setCookie(O.Iab1Pub, "", 0, !0)
    }
    ,
    Et.prototype.removeIab2 = function() {
        null !== this.getCookie(O.Iab2Pub) && this.setCookie(O.Iab2Pub, "", 0, !0)
    }
    ,
    Et.prototype.removeAddtlStr = function() {
        null !== this.getCookie(Te.ADDITIONAL_CONSENT_STRING) && this.setCookie(Te.ADDITIONAL_CONSENT_STRING, "", 0, !0)
    }
    ,
    Et.prototype.removeVariant = function() {
        null !== this.getCookie(Te.SELECTED_VARIANT) && this.setCookie(Te.SELECTED_VARIANT, "", 0, !0)
    }
    ,
    Et.prototype.removeOptanon = function() {
        null !== this.getCookie(Te.OPTANON_CONSENT) && this.setCookie(Te.OPTANON_CONSENT, "", 0, !0)
    }
    ,
    Et.prototype.removePreview = function() {
        null !== this.getCookie(Te.OT_PREVIEW) && this.setCookie(Te.OT_PREVIEW, "", 0, !0)
    }
    ,
    Et.prototype.writeCookieParam = function(e, t, o, n) {
        var r, s, i, a, l = {}, c = this.getCookie(e);
        if (c)
            for (s = c.split("&"),
            r = 0; r < s.length; r += 1)
                i = s[r].split("="),
                l[decodeURIComponent(i[0])] = i[0] === t && n ? decodeURIComponent(i[1]) : decodeURIComponent(i[1]).replace(/\+/g, " ");
        l[t] = o;
        var d = lt.moduleInitializer.TenantFeatures;
        d && d.CookieV2CookieDateTimeInISO ? l.datestamp = (new Date).toISOString() : l.datestamp = (new Date).toString(),
        l.version = at.otSDKVersion,
        a = this.param(l),
        this.setCookie(e, a, St.ReconsentFrequencyDays)
    }
    ,
    Et.prototype.readCookieParam = function(e, t, o) {
        var n, r, s, i, a = this.getCookie(e);
        if (a) {
            for (r = {},
            s = a.split("&"),
            n = 0; n < s.length; n += 1)
                i = s[n].split("="),
                r[decodeURIComponent(i[0])] = o ? decodeURIComponent(i[1]) : decodeURIComponent(i[1]).replace(/\+/g, " ");
            return t && r[t] ? r[t] : t && !r[t] ? "" : r
        }
        return ""
    }
    ,
    Et.prototype.getCookie = function(e) {
        if (lt && lt.moduleInitializer && lt.moduleInitializer.MobileSDK) {
            var t = this.getCookieDataObj(e);
            if (t)
                return t.value
        }
        if (at.isAMP && (at.ampData = JSON.parse(localStorage.getItem(at.dataDomainId)) || {},
        at.ampData))
            return at.ampData[e] || null;
        var o, n, r = e + "=", s = document.cookie.split(";");
        for (o = 0; o < s.length; o += 1) {
            for (n = s[o]; " " === n.charAt(0); )
                n = n.substring(1, n.length);
            if (0 === n.indexOf(r))
                return n.substring(r.length, n.length)
        }
        return null
    }
    ,
    Et.prototype.setAmpStorage = function() {
        window.localStorage.setItem(at.dataDomainId, JSON.stringify(at.ampData))
    }
    ,
    Et.prototype.removeAmpStorage = function() {
        window.localStorage.removeItem(at.dataDomainId)
    }
    ,
    Et.prototype.handleAmp = function(e, t) {
        "" !== t ? at.ampData[e] = t : delete at.ampData[e],
        0 === Object.keys(at.ampData).length ? this.removeAmpStorage() : this.setAmpStorage()
    }
    ,
    Et.prototype.setCookie = function(e, t, o, n, r) {
        if (void 0 === n && (n = !1),
        void 0 === r && (r = new Date),
        at.isAMP)
            this.handleAmp(e, t);
        else {
            var s = void 0;
            s = o ? (r.setTime(r.getTime() + 24 * o * 60 * 60 * 1e3),
            "; expires=" + r.toUTCString()) : n ? "; expires=" + new Date(0).toUTCString() : "";
            var i = lt.moduleInitializer
              , a = i && i.Domain ? i.Domain.split("/") : []
              , l = ""
              , c = i.TenantFeatures;
            a.length <= 1 ? a[1] = "" : l = a.slice(1).join("/");
            var d = "Samesite=Lax";
            c && c.CookiesSameSiteNone && (d = "Samesite=None; Secure");
            var u = i.ScriptType === De || i.ScriptType === He;
            if (at.isPreview || !u && !i.MobileSDK)
                p = t + s + "; path=/" + l + "; domain=." + a[0] + "; " + d,
                document.cookie = e + "=" + p;
            else {
                var p = t + s + "; path=/; " + d;
                i.MobileSDK ? this.setCookieDataObj({
                    name: e,
                    value: t,
                    expires: s,
                    date: r,
                    domainAndPath: a
                }) : document.cookie = e + "=" + p
            }
        }
    }
    ,
    Et.prototype.setCookieDataObj = function(t) {
        if (t) {
            at.otCookieData || (window.OneTrust && window.OneTrust.otCookieData ? at.otCookieData = window.OneTrust.otCookieData : at.otCookieData = []);
            var e = _t.findIndex(at.otCookieData, function(e) {
                return e.name === t.name
            });
            -1 < e ? at.otCookieData[e] = t : at.otCookieData.push(t)
        }
    }
    ,
    Et.prototype.getCookieDataObj = function(t) {
        at.otCookieData && 0 !== at.otCookieData.length || (window.OneTrust && window.OneTrust.otCookieData ? at.otCookieData = window.OneTrust.otCookieData : at.otCookieData = []);
        var e = _t.findIndex(at.otCookieData, function(e) {
            return e.name === t
        });
        if (0 <= e) {
            var o = at.otCookieData[e];
            if (o.date)
                return new Date(o.date) < new Date ? (at.otCookieData.splice(e, 1),
                null) : o
        }
        return null
    }
    ,
    Et.prototype.param = function(e) {
        var t, o = "";
        for (t in e)
            e.hasOwnProperty(t) && ("" !== o && (o += "&"),
            o += t + "=" + encodeURIComponent(e[t]).replace(/%20/g, "+"));
        return o
    }
    ,
    Et);
    function Et() {}
    var wt = (xt.insertAfter = function(e, t) {
        t.parentNode.insertBefore(e, t.nextSibling)
    }
    ,
    xt.insertBefore = function(e, t) {
        t.parentNode.insertBefore(e, t)
    }
    ,
    xt.inArray = function(e, t) {
        return t.indexOf(e)
    }
    ,
    xt.ajax = function(e) {
        var t, o, n, r, s, i, a = null, l = new XMLHttpRequest;
        t = e.type,
        o = e.url,
        e.dataType,
        n = e.contentType,
        r = e.data,
        s = e.success,
        a = e.error,
        i = e.sync,
        l.open(t, o, !i),
        l.setRequestHeader("Content-Type", n),
        l.onload = function() {
            if (200 <= this.status && this.status < 400) {
                var e = JSON.parse(this.responseText);
                s(e)
            } else
                a({
                    message: "Error Loading Data",
                    statusCode: this.status
                })
        }
        ,
        l.onerror = function(e) {
            a(e)
        }
        ,
        "post" === t.toLowerCase() || "put" === t.toLowerCase() ? l.send(r) : l.send()
    }
    ,
    xt.prevNextHelper = function(o, e, n) {
        var r = [];
        function s(e, t, o) {
            t[e] && o ? o.includes(".") ? (t[e].classList[0] || t[e].classList.value && t[e].classList.value.includes(o.split(".")[1])) && r.push(t[e]) : o.includes("#") ? t[e].id === o.split("#")[1] && r.push(t[e]) : t[e].tagName === document.createElement(o.trim()).tagName && r.push(t[e]) : t[e] && r.push(t[e])
        }
        return "string" == typeof e ? Array.prototype.forEach.call(document.querySelectorAll(e), function(e, t) {
            s(o, e, n)
        }) : s(o, e, n),
        r
    }
    ,
    xt.browser = function() {
        var e, t, o;
        return navigator.sayswho = (t = navigator.userAgent,
        o = t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [],
        /trident/i.test(o[1]) ? "IE " + ((e = /\brv[ :]+(\d+)/g.exec(t) || [])[1] || "") : "Chrome" === o[1] && null != (e = t.match(/\b(OPR|Edge)\/(\d+)/)) ? e.slice(1).join(" ").replace("OPR", "Opera") : (o = o[2] ? [o[1], o[2]] : [navigator.appName, navigator.appVersion, "-?"],
        null != (e = t.match(/version\/(\d+)/i)) && o.splice(1, 1, e[1]),
        o.join(" "))),
        {
            version: parseInt(navigator.sayswho.split(" ")[1]),
            type: navigator.sayswho.split(" ")[0],
            userAgent: navigator.userAgent
        }
    }
    ,
    xt.isNodeList = function(e) {
        var t = Object.prototype.toString.call(e);
        return "[object NodeList]" === t || "[object Array]" === t
    }
    ,
    xt.prototype.fadeOut = function(e) {
        var t = this;
        if (void 0 === e && (e = 60),
        1 <= this.el.length)
            for (var o = 0; o < this.el.length; o++) {
                var n = "\n                    visibility: hidden;\n                    opacity: 0;\n                    transition: visibility 0s " + e + "ms, opacity " + e + "ms linear;\n                ";
                Tt(this.el[o], n, !0)
            }
        var r = setInterval(function() {
            if (1 <= t.el.length)
                for (var e = 0; e < t.el.length; e++)
                    t.el[e].style.opacity <= 0 && (Tt(t.el[e], "display: none;", !0),
                    clearInterval(r),
                    "optanon-popup-bg" === t.el[e].id && t.el[e].removeAttribute("style"))
        }, e);
        return this
    }
    ,
    xt.prototype.hide = function() {
        if (1 <= this.el.length)
            for (var e = 0; e < this.el.length; e++)
                Tt(this.el[e], "display: none;", !0);
        else
            xt.isNodeList(this.el) || Tt(this.el, "display: none;", !0);
        return this
    }
    ,
    xt.prototype.show = function(e) {
        if (void 0 === e && (e = "block"),
        1 <= this.el.length)
            for (var t = 0; t < this.el.length; t++)
                Tt(this.el[t], "display: " + e + ";", !0);
        else
            xt.isNodeList(this.el) || Tt(this.el, "display: " + e + ";", !0);
        return this
    }
    ,
    xt.prototype.remove = function() {
        if (1 <= this.el.length)
            for (var e = 0; e < this.el.length; e++)
                this.el[e].parentNode.removeChild(this.el[e]);
        else
            this.el.parentNode.removeChild(this.el);
        return this
    }
    ,
    xt.prototype.css = function(e) {
        if (e)
            if (1 <= this.el.length) {
                if (!e.includes(":"))
                    return this.el[0].style[e];
                for (var t = 0; t < this.el.length; t++)
                    Tt(this.el[t], e)
            } else {
                if (!e.includes(":"))
                    return this.el.style[e];
                Tt(this.el, e)
            }
        return this
    }
    ,
    xt.prototype.removeClass = function(e) {
        if (1 <= this.el.length)
            for (var t = 0; t < this.el.length; t++)
                this.el[t].classList ? this.el[t].classList.remove(e) : this.el[t].className = this.el[t].className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)","gi"), " ");
        else
            this.el.classList ? this.el.classList.remove(e) : this.el.className = this.el.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)","gi"), " ");
        return this
    }
    ,
    xt.prototype.addClass = function(e) {
        if (1 <= this.el.length)
            for (var t = 0; t < this.el.length; t++)
                this.el[t].classList ? this.el[t].classList.add(e) : this.el[t].className += " " + e;
        else
            this.el.classList ? this.el.classList.add(e) : this.el.className += " " + e;
        return this
    }
    ,
    xt.prototype.on = function(r, s, i) {
        var e = this;
        if ("string" != typeof s)
            if (this.el && "HTML" === this.el.nodeName && "load" === r || "resize" === r || "scroll" === r)
                switch (r) {
                case "load":
                    window.onload = s;
                    break;
                case "resize":
                    window.onresize = s;
                    break;
                case "scroll":
                    window.onscroll = s
                }
            else if (this.el && 1 <= this.el.length)
                for (var t = 0; t < this.el.length; t++)
                    this.el[t].addEventListener(r, s);
            else
                this.el && this.el instanceof Element && this.el.addEventListener(r, s);
        else if (this.el && "HTML" === this.el.nodeName && "load" === r || "resize" === r || "scroll" === r)
            switch (r) {
            case "load":
                window.onload = i;
                break;
            case "resize":
                window.onresize = i;
                break;
            case "scroll":
                window.onscroll = i
            }
        else {
            var a = function(o) {
                var n = o.target;
                e.el.eventExecuted = !0,
                Array.prototype.forEach.call(document.querySelectorAll(s), function(e, t) {
                    Ot["" + r + s] && delete Ot["" + r + s],
                    e.addEventListener(r, i),
                    e === n && i && i.call(e, o)
                }),
                e.el && e.el[0] ? e.el[0].removeEventListener(r, a) : e.el && e.el instanceof Element && e.el.removeEventListener(r, a)
            };
            if (this.el && 1 <= this.el.length)
                for (t = 0; t < this.el.length; t++)
                    this.el[t].eventExecuted = !1,
                    this.el[t].eventExecuted || this.el[t].addEventListener(r, a);
            else
                this.el && (this.el.eventExecuted = !1,
                !this.el.eventExecuted && this.el instanceof Element && (Ot["" + r + s] || (Ot["" + r + s] = !0,
                this.el.addEventListener(r, a))))
        }
        return this
    }
    ,
    xt.prototype.off = function(e, t) {
        if (1 <= this.el.length)
            for (var o = 0; o < this.el.length; o++)
                this.el[o].removeEventListener(e, t);
        else
            this.el.removeEventListener(e, t);
        return this
    }
    ,
    xt.prototype.one = function(t, o) {
        var n = this;
        if (1 <= this.el.length)
            for (var e = 0; e < this.el.length; e++)
                this.el[e].addEventListener(t, function(e) {
                    e.stopPropagation(),
                    e.currentTarget.dataset.triggered || (o(),
                    e.currentTarget.dataset.triggered = !0)
                });
        else {
            var r = function(e) {
                e.stopPropagation(),
                o(),
                n.off(t, r)
            };
            this.el.addEventListener(t, r)
        }
        return this
    }
    ,
    xt.prototype.trigger = function(e) {
        var t = new CustomEvent(e,{
            customEvent: "yes"
        });
        return this.el.dispatchEvent(t),
        this
    }
    ,
    xt.prototype.focus = function() {
        return 1 <= this.el.length ? this.el[0].focus() : this.el.focus(),
        this
    }
    ,
    xt.prototype.attr = function(e, t) {
        return this.el && 1 <= this.el.length ? t ? ("class" === e ? this.addClass(t) : this.el[0].setAttribute(e, t),
        this) : this.el[0].getAttribute(e) : t && this.el ? ("class" === e ? this.addClass(t) : this.el.setAttribute(e, t),
        this) : this.el && this.el.getAttribute(e)
    }
    ,
    xt.prototype.html = function(e) {
        if (null == e)
            return 1 <= this.el.length ? this.el[0].innerHTML : this.el.innerHTML;
        if (1 <= this.el.length)
            for (var t = 0; t < this.el.length; t++)
                this.el[t].innerHTML = e;
        else
            this.el.innerHTML = e;
        return this
    }
    ,
    xt.prototype.append = function(o) {
        if ("string" != typeof o || o.includes("<") || o.includes(">"))
            if (Array.isArray(o)) {
                var n = this;
                Array.prototype.forEach.call(o, function(e, t) {
                    document.querySelector(n.selector).appendChild(new xt(e,"ce").el)
                })
            } else if ("string" == typeof o || Array.isArray(o))
                if ("string" == typeof this.selector)
                    document.querySelector(this.selector).appendChild(new xt(o,"ce").el);
                else if (this.useEl) {
                    var r = document.createDocumentFragment()
                      , s = !(!o.includes("<th") && !o.includes("<td"));
                    if (s) {
                        var e = o.split(" ")[0].split("<")[1];
                        r.appendChild(document.createElement(e)),
                        r.firstChild.innerHTML = o
                    }
                    Array.prototype.forEach.call(this.el, function(e, t) {
                        s ? e.appendChild(r.firstChild) : e.appendChild(new xt(o,"ce").el)
                    })
                } else
                    this.selector.appendChild(new xt(o,"ce").el);
            else if ("string" == typeof this.selector)
                document.querySelector(this.selector).appendChild(o);
            else if (1 <= o.length)
                for (var t = 0; t < o.length; t++)
                    this.selector.appendChild(o[t]);
            else
                this.selector.appendChild(o);
        else
            this.el.insertAdjacentText("beforeend", o);
        return this
    }
    ,
    xt.prototype.text = function(o) {
        if (this.el) {
            if (1 <= this.el.length) {
                if (!o)
                    return this.el[0].textContent;
                Array.prototype.forEach.call(this.el, function(e, t) {
                    e.textContent = o
                })
            } else {
                if (!o)
                    return this.el.textContent;
                this.el.textContent = o
            }
            return this
        }
    }
    ,
    xt.prototype.data = function(o, n) {
        if (this.el.length < 1)
            return this;
        if (!(1 <= this.el.length))
            return r(this.el, n);
        function r(e, t) {
            if (!t)
                return JSON.parse(e.getAttribute("data-" + o));
            "object" == typeof t ? e.setAttribute("data-" + o, JSON.stringify(t)) : e.setAttribute("data-" + o, t)
        }
        return Array.prototype.forEach.call(this.el, function(e, t) {
            r(e, n)
        }),
        this
    }
    ,
    xt.prototype.height = function(e) {
        this.el.length && (this.el = this.el[0]);
        for (var t = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("padding-top").split("px")[0]), o = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("padding-bottom").split("px")[0]), n = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("margin-top").split("px")[0]), r = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("margin-bottom").split("px")[0]), s = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("height").split("px")[0]), i = [t, o, n, r], a = 0, l = 0; l < i.length; l++)
            0 < i[l] && (a += i[l]);
        if (!e)
            return this.selector === document ? s : this.el.clientHeight - a;
        var c = e.toString().split(parseInt(e))[1] ? e.toString().split(parseInt(e))[1] : "px"
          , d = "number" == typeof e ? e : parseInt(e.toString().split(c)[0]);
        return (c && "px" === c || "%" === c || "em" === c || "rem" === c) && (0 < d ? Tt(this.el, "height: " + (a + d + c) + ";", !0) : "auto" === e && Tt(this.el, "height: " + e + ";", !0)),
        this
    }
    ,
    xt.prototype.each = function(e) {
        var t = !1;
        return void 0 === this.el.length && (this.el = [this.el],
        t = !0),
        Array.prototype.forEach.call(this.el, e),
        t && (this.el = this.el[0]),
        this
    }
    ,
    xt.prototype.is = function(e) {
        return this.el.length ? (this.el[0].matches || this.el[0].matchesSelector || this.el[0].msMatchesSelector || this.el[0].mozMatchesSelector || this.el[0].webkitMatchesSelector || this.el[0].oMatchesSelector).call(this.el[0], e) : (this.el.matches || this.el.matchesSelector || this.el.msMatchesSelector || this.el.mozMatchesSelector || this.el.webkitMatchesSelector || this.el.oMatchesSelector).call(this.el, e)
    }
    ,
    xt.prototype.filter = function(e) {
        return this.el = Array.prototype.filter.call(document.querySelectorAll(this.selector), e),
        this
    }
    ,
    xt.prototype.animate = function(i, a) {
        var l, c = this;
        for (var e in this.el = document.querySelector(this.selector),
        i)
            l = e,
            function() {
                var e = parseInt(i[l])
                  , t = i[l].split(parseInt(i[l]))[1] ? i[l].split(parseInt(i[l]))[1] : "px"
                  , o = "\n                      @keyframes slide-" + ("top" === l ? "up" : "down") + "-custom {\n                          0% {\n                              " + ("top" === l ? "top" : "bottom") + ": " + ("top" === l ? c.el.getBoundingClientRect().top : window.innerHeight) + "px !important;\n                          }\n                          100% {\n                              " + ("top" === l ? "top" : "bottom") + ": " + (e + t) + ";\n                          }\n                      }\n                      @-webkit-keyframes slide-" + ("top" === l ? "up" : "down") + "-custom {\n                          0% {\n                              " + ("top" === l ? "top" : "bottom") + ": " + ("top" === l ? c.el.getBoundingClientRect().top : window.innerHeight) + "px !important;\n                          }\n                          100% {\n                              " + ("top" === l ? "top" : "bottom") + ": " + (e + t) + ";\n                          }\n                      }\n                      @-moz-keyframes slide-" + ("top" === l ? "up" : "down") + "-custom {\n                          0% {\n                              " + ("top" === l ? "top" : "bottom") + ": " + ("top" === l ? c.el.getBoundingClientRect().top : window.innerHeight) + "px !important;\n                          }\n                          100% {\n                              " + ("top" === l ? "top" : "bottom") + ": " + (e + t) + ";\n                          }\n                      }\n                      "
                  , n = document.head.querySelector("#onetrust-style");
                if (n ? n.innerHTML += o : ((s = document.createElement("style")).id = "onetrust-legacy-style",
                s.type = "text/css",
                s.innerHTML = o,
                document.head.appendChild(s)),
                xt.browser().type = xt.browser().version <= 8) {
                    var r = "top" === l ? "-webkit-animation: slide-up-custom " : "-webkit-animation: slide-down-custom " + a + "ms ease-out forwards;";
                    Tt(c.el, r)
                } else {
                    var s = "\n                        animation-name: " + ("top" === l ? "slide-up-custom" : "slide-down-custom") + ";\n                        animation-duration: " + a + "ms;\n                        animation-fill-mode: forwards;\n                        animation-timing-function: ease-out;\n                    ";
                    Tt(c.el, s, !0)
                }
            }();
        return this
    }
    ,
    xt.prototype.scrollTop = function() {
        return this.el.scrollTop
    }
    ,
    xt);
    function xt(e, t) {
        switch (void 0 === t && (t = ""),
        this.selector = e,
        this.useEl = !1,
        t) {
        case "ce":
            var o = xt.browser().type.toLowerCase()
              , n = xt.browser().version;
            if (n < 10 && "safari" === o || "chrome" === o && n <= 44 || n <= 40 && "firefox" === o) {
                var r = document.implementation.createHTMLDocument();
                r.body.innerHTML = e,
                this.el = r.body.children[0]
            } else {
                var s = document.createRange().createContextualFragment(e);
                this.el = s.firstChild
            }
            this.length = 1;
            break;
        case "":
            this.el = e === document || e === window ? document.documentElement : "string" != typeof e ? e : document.querySelectorAll(e),
            this.length = e === document || e === window || "string" != typeof e ? 1 : this.el.length;
            break;
        default:
            this.length = 0
        }
    }
    function Vt(e, t) {
        return void 0 === t && (t = ""),
        new wt(e,t)
    }
    var Gt, Ot = {}, Nt = (Dt.prototype.addLogoUrls = function() {
        Gt.checkMobileOfflineRequest(Gt.getBannerVersionUrl()) || (At.mobileOnlineURL.push(Gt.updateCorrectUrl(St.optanonLogo)),
        At.mobileOnlineURL.push(Gt.updateCorrectUrl(St.oneTrustFtrLogo)))
    }
    ,
    Dt.prototype.getCookieLabel = function(e, t, o) {
        if (void 0 === o && (o = !0),
        !e)
            return "";
        var n = e.Name;
        return t && (n = '\n                <a  class="cookie-label"\n                    href="' + (o ? "http://cookiepedia.co.uk/cookies/" : "http://cookiepedia.co.uk/host/") + e.Name + '"\n                    rel="noopener"\n                    target="_blank"\n                >\n                    ' + e.Name + '&nbsp;<span class="ot-scrn-rdr">' + St.NewWinTxt + "</span>\n                </a>\n            "),
        n
    }
    ,
    Dt.prototype.getBannerSDKAssestsUrl = function() {
        return this.getBannerVersionUrl() + "/assets"
    }
    ,
    Dt.prototype.getBannerVersionUrl = function() {
        var e = At.bannerScriptElement.getAttribute("src");
        return "" + (-1 !== e.indexOf("/consent/") ? e.split("consent/")[0] + "scripttemplates/" : e.split("otSDKStub")[0]) + lt.moduleInitializer.Version
    }
    ,
    Dt.prototype.checkMobileOfflineRequest = function(e) {
        return lt.moduleInitializer.MobileSDK && new RegExp("^file://","i").test(e)
    }
    ,
    Dt.prototype.updateCorrectIABUrl = function(e) {
        var t = lt.moduleInitializer.ScriptType;
        if (t === Ne || t === He) {
            var o = _t.getURL(e)
              , n = At.bannerScriptElement
              , r = n && n.getAttribute("src") ? _t.getURL(n.getAttribute("src")) : null;
            r && o && r.hostname !== o.hostname && (e = (e = (r = "" + At.bannerDataParentURL) + o.pathname.split("/").pop().replace(/(^\/?)/, "/")).replace(o.hostname, r.hostname))
        }
        return e
    }
    ,
    Dt.prototype.updateCorrectUrl = function(e, t) {
        void 0 === t && (t = !1);
        var o = _t.getURL(e)
          , n = At.bannerScriptElement
          , r = n && n.getAttribute("src") ? _t.getURL(n.getAttribute("src")) : null;
        if (r && o && r.hostname !== o.hostname) {
            var s = lt.moduleInitializer.ScriptType;
            if (s === Ne || s === He) {
                if (t)
                    return e;
                e = (r = At.bannerDataParentURL + "/" + At.getRegionRule().Id) + o.pathname.replace(/(^\/?)/, "/")
            } else
                e = e.replace(o.hostname, r.hostname)
        }
        return e
    }
    ,
    Dt.prototype.isBundleOrStackActive = function(n, r) {
        void 0 === r && (r = null);
        var s = at.oneTrustIABConsent
          , i = !0;
        r = r || at.groupsConsent;
        for (var a = 0, e = function() {
            var t = n.SubGroups[a];
            if (t.Type === dt)
                (-1 < (e = _t.findIndex(r, function(e) {
                    return e.split(":")[0] === t.CustomGroupId
                })) && "0" === r[e].split(":")[1] || !r.length) && (i = !1);
            else {
                var e, o = t.Type === ht ? s.specialFeatures : s.purpose;
                (-1 < (e = _t.findIndex(o, function(e) {
                    return e.split(":")[0] === t.IabGrpId
                })) && "false" === o[e].split(":")[1] || !o.length) && (i = !1)
            }
            a++
        }; e(),
        i && a < n.SubGroups.length; )
            ;
        return i
    }
    ,
    Dt.prototype.otFetchOfflineFile = function(r) {
        return l(this, void 0, void 0, function() {
            var t, o, n;
            return h(this, function(e) {
                switch (e.label) {
                case 0:
                    return r = r.replace(".json", ".js"),
                    t = r.split("/"),
                    o = t[t.length - 1],
                    n = o.split(".js")[0],
                    [4, new Promise(function(e) {
                        function t() {
                            e(window[n])
                        }
                        Gt.jsonp(r, t, t)
                    }
                    )];
                case 1:
                    return [2, e.sent()]
                }
            })
        })
    }
    ,
    Dt.prototype.jsonp = function(e, t, o) {
        Gt.checkMobileOfflineRequest(e) || At.mobileOnlineURL.push(e);
        var n = document.createElement("script")
          , r = document.getElementsByTagName("head")[0];
        function s() {
            t()
        }
        n.onreadystatechange = function() {
            "loaded" !== this.readyState && "complete" !== this.readyState || s()
        }
        ,
        n.onload = s,
        n.onerror = function() {
            o()
        }
        ,
        n.type = "text/javascript",
        n.async = !0,
        n.src = e,
        at.crossOrigin && n.setAttribute("crossorigin", at.crossOrigin),
        r.appendChild(n)
    }
    ,
    Dt.prototype.isCookiePolicyPage = function(e) {
        var t = !1
          , o = _t.removeURLPrefixes(window.location.href)
          , n = Vt("<div></div>", "ce").el;
        Vt(n).html(e);
        for (var r = n.querySelectorAll("a"), s = 0; s < r.length; s++)
            if (_t.removeURLPrefixes(r[s].href) === o) {
                t = !0;
                break
            }
        return t
    }
    ,
    Dt.prototype.isBannerVisible = function() {
        var e = !1
          , t = document.getElementById("onetrust-banner-sdk");
        return t && t.getAttribute("style") && (e = -1 !== t.getAttribute("style").indexOf("display: none") || -1 !== t.getAttribute("style").indexOf("display:none")),
        e
    }
    ,
    Dt.prototype.hideBanner = function() {
        var e = this;
        at.bnrAnimationInProg ? setTimeout(function() {
            return e.hideBanner()
        }, 100) : Vt("#onetrust-banner-sdk").fadeOut(400)
    }
    ,
    Dt.prototype.resetFocusToBody = function() {
        document.activeElement && document.activeElement.blur()
    }
    ,
    Dt.prototype.getDuration = function(e) {
        var t = e.Length
          , o = e.DurationType
          , n = "";
        if (!t || 0 === parseInt(t))
            return St.LfSpanSecs;
        var r = parseInt(t);
        if (o) {
            var s = 1 < (r = this.round_to_precision(r / o, .5)) ? ot[o] + "s" : ot[o];
            n = r + " " + St[s]
        } else
            n = this.getDurationText(r);
        return n
    }
    ,
    Dt.prototype.isDateCurrent = function(e) {
        var t = e.split("/")
          , o = parseInt(t[1])
          , n = parseInt(t[0])
          , r = parseInt(t[2])
          , s = new Date
          , i = s.getDate()
          , a = s.getFullYear()
          , l = s.getMonth() + 1;
        return a < r || r === a && l < n || r === a && n === l && i <= o
    }
    ,
    Dt.prototype.insertFooterLogo = function(e) {
        var t = Vt(e).el;
        if (t.length && St.oneTrustFtrLogo) {
            var o = Gt.updateCorrectUrl(St.oneTrustFtrLogo);
            Gt.checkMobileOfflineRequest(Gt.getBannerVersionUrl()) && (o = _t.getRelativeURL(o, !0, !0));
            for (var n = 0; n < t.length; n++) {
                var r = t[n].querySelector("img")
                  , s = "Powered by OneTrust " + St.NewWinTxt;
                Vt(t[n]).attr("href", St.pCFooterLogoUrl),
                r.setAttribute("src", o),
                r.setAttribute("title", s),
                Vt(t[n]).attr("aria-label", s)
            }
        }
    }
    ,
    Dt.prototype.getUTCFormattedDate = function(e) {
        var t = new Date(e);
        return t.getUTCFullYear() + "-" + (t.getUTCMonth() + 1).toString().padStart(2, "0") + "-" + t.getUTCDate().toString().toString().padStart(2, "0") + " " + t.getUTCHours() + ":" + t.getUTCMinutes().toString().toString().padStart(2, "0") + ":" + t.getUTCSeconds().toString().toString().padStart(2, "0")
    }
    ,
    Dt.prototype.getDurationText = function(e) {
        return 365 <= e ? (e /= 365,
        (e = this.round_to_precision(e, .5)) + " " + (1 < e ? St.LfSpnYrs : St.LfSpnYr)) : e + " " + (1 < e ? St.PCenterVendorListLifespanDays : St.PCenterVendorListLifespanDay)
    }
    ,
    Dt.prototype.round_to_precision = function(e, t) {
        var o = +e + (void 0 === t ? .5 : t / 2);
        return o - o % (void 0 === t ? 1 : +t)
    }
    ,
    Dt.prototype.isOptOutEnabled = function() {
        return St.PCTemplateUpgrade ? at.genVenOptOutEnabled : St.allowHostOptOut
    }
    ,
    Dt.prototype.findUserType = function(e) {
        at.isKeyboardUser = !(!e || 0 !== e.detail)
    }
    ,
    Dt);
    function Dt() {}
    var Ht, Ft = {
        P_Content: "#ot-pc-content",
        P_Logo: ".ot-pc-logo",
        P_Title: "#ot-pc-title",
        P_Policy_Txt: "#ot-pc-desc",
        P_Vendor_Title_Elm: "#ot-lst-title",
        P_Vendor_Title: "#ot-lst-title h3",
        P_Manage_Cookies_Txt: "#ot-category-title",
        P_Label_Txt: ".ot-label-txt",
        P_Category_Header: ".ot-cat-header",
        P_Category_Grp: ".ot-cat-grp",
        P_Category_Item: ".ot-cat-item",
        P_Vendor_List: "#ot-pc-lst",
        P_Vendor_Content: "#ot-lst-cnt",
        P_Vendor_Container: "#ot-ven-lst",
        P_Ven_Bx: "ot-ven-box",
        P_Ven_Name: ".ot-ven-name",
        P_Ven_Link: ".ot-ven-link",
        P_Ven_Ctgl: "ot-ven-ctgl",
        P_Ven_Ltgl: "ot-ven-litgl",
        P_Ven_Ltgl_Only: "ot-ven-litgl-only",
        P_Ven_Opts: ".ot-ven-opts",
        P_Triangle: "#ot-anchor",
        P_Fltr_Modal: "#ot-fltr-modal",
        P_Fltr_Options: ".ot-fltr-opts",
        P_Fltr_Option: ".ot-fltr-opt",
        P_Select_Cntr: "#ot-sel-blk",
        P_Host_Cntr: "#ot-host-lst",
        P_Host_Hdr: ".ot-host-hdr",
        P_Host_Desc: ".ot-host-desc",
        P_Li_Hdr: ".ot-pli-hdr",
        P_Li_Title: ".ot-li-title",
        P_Sel_All_Vendor_Consent_Handler: "#select-all-vendor-leg-handler",
        P_Sel_All_Vendor_Leg_Handler: "#select-all-vendor-groups-handler",
        P_Sel_All_Host_Handler: "#select-all-hosts-groups-handler",
        P_Host_Title: ".ot-host-name",
        P_Leg_Select_All: ".ot-sel-all-hdr",
        P_Leg_Header: ".ot-li-hdr",
        P_Acc_Header: ".ot-acc-hdr",
        P_Cnsnt_Header: ".ot-consent-hdr",
        P_Tgl_Cntr: ".ot-tgl-cntr",
        P_CBx_Cntr: ".ot-chkbox",
        P_Sel_All_Host_El: "ot-selall-hostcntr",
        P_Sel_All_Vendor_Consent_El: "ot-selall-vencntr",
        P_Sel_All_Vendor_Leg_El: "ot-selall-licntr",
        P_c_Name: "ot-c-name",
        P_c_Host: "ot-c-host",
        P_c_Duration: "ot-c-duration",
        P_c_Type: "ot-c-type",
        P_c_Category: "ot-c-category",
        P_c_Desc: "ot-c-description",
        P_Host_View_Cookies: ".ot-host-expand",
        P_Host_Opt: ".ot-host-opt",
        P_Host_Info: ".ot-host-info",
        P_Arrw_Cntr: ".ot-arw-cntr",
        P_Acc_Txt: ".ot-acc-txt",
        P_Vendor_CheckBx: "ot-ven-chkbox",
        P_Vendor_LegCheckBx: "ot-ven-leg-chkbox",
        P_Host_UI: "ot-hosts-ui",
        P_Host_Cnt: "ot-host-cnt",
        P_Host_Bx: "ot-host-box",
        P_Ven_Dets: ".ot-ven-dets",
        P_Ven_Disc: ".ot-ven-disc",
        P_Gven_List: "#ot-gn-venlst",
        P_Close_Btn: ".ot-close-icon",
        P_Ven_Lst_Cntr: ".ot-vlst-cntr",
        P_Host_Lst_cntr: ".ot-hlst-cntr",
        P_Sub_Grp_Cntr: ".ot-subgrp-cntr",
        P_Subgrp_Desc: ".ot-subgrp-desc",
        P_Subgp_ul: ".ot-subgrps",
        P_Subgrp_li: ".ot-subgrp",
        P_Subgrp_Tgl_Cntr: ".ot-subgrp-tgl",
        P_Grp_Container: ".ot-grps-cntr",
        P_Privacy_Txt: "#ot-pvcy-txt",
        P_Privacy_Hdr: "#ot-pvcy-hdr",
        P_Active_Menu: "ot-active-menu",
        P_Desc_Container: ".ot-desc-cntr",
        P_Tab_Grp_Hdr: "ot-grp-hdr1",
        P_Search_Cntr: "#ot-search-cntr",
        P_Clr_Fltr_Txt: "#clear-filters-handler",
        P_Acc_Grp_Desc: ".ot-acc-grpdesc",
        P_Acc_Container: ".ot-acc-grpcntr",
        P_Line_Through: "line-through",
        P_Vendor_Search_Input: "#vendor-search-handler"
    }, Rt = {
        P_Grp_Container: ".groups-container",
        P_Content: "#ot-content",
        P_Category_Header: ".category-header",
        P_Desc_Container: ".description-container",
        P_Label_Txt: ".label-text",
        P_Acc_Grp_Desc: ".ot-accordion-group-pc-container",
        P_Leg_Int_Hdr: ".leg-int-header",
        P_Not_Always_Active: "p:not(.ot-always-active)",
        P_Category_Grp: ".category-group",
        P_Category_Item: ".category-item",
        P_Sub_Grp_Cntr: ".cookie-subgroups-container",
        P_Acc_Container: ".ot-accordion-pc-container",
        P_Close_Btn: ".pc-close-button",
        P_Logo: ".pc-logo",
        P_Title: "#pc-title",
        P_Privacy_Txt: "#privacy-text",
        P_Privacy_Hdr: "#pc-privacy-header",
        P_Policy_Txt: "#pc-policy-text",
        P_Manage_Cookies_Txt: "#manage-cookies-text",
        P_Vendor_Title: "#vendors-list-title",
        P_Vendor_Title_Elm: "#vendors-list-title",
        P_Vendor_List: "#vendors-list",
        P_Vendor_Content: "#vendor-list-content",
        P_Vendor_Container: "#vendors-list-container",
        P_Ven_Bx: "vendor-box",
        P_Ven_Name: ".vendor-title",
        P_Ven_Link: ".vendor-privacy-notice",
        P_Ven_Ctgl: "ot-vendor-consent-tgl",
        P_Ven_Ltgl: "ot-leg-int-tgl",
        P_Ven_Ltgl_Only: "ot-leg-int-tgl-only",
        P_Ven_Opts: ".vendor-options",
        P_Triangle: "#ot-triangle",
        P_Fltr_Modal: "#ot-filter-modal",
        P_Fltr_Options: ".ot-group-options",
        P_Fltr_Option: ".ot-group-option",
        P_Select_Cntr: "#select-all-container",
        P_Host_Cntr: "#hosts-list-container",
        P_Host_Hdr: ".host-info",
        P_Host_Desc: ".host-description",
        P_Host_Opt: ".host-option-group",
        P_Host_Info: ".vendor-host",
        P_Ven_Dets: ".vendor-purpose-groups",
        P_Ven_Disc: ".ot-ven-disc",
        P_Gven_List: "#ot-gn-venlst",
        P_Arrw_Cntr: ".ot-arrow-container",
        P_Li_Hdr: ".leg-int-header",
        P_Li_Title: ".leg-int-title",
        P_Acc_Txt: ".accordion-text",
        P_Tgl_Cntr: ".ot-toggle-group",
        P_CBx_Cntr: ".ot-chkbox-container",
        P_Host_Title: ".host-title",
        P_Leg_Select_All: ".leg-int-sel-all-hdr",
        P_Leg_Header: ".leg-int-hdr",
        P_Cnsnt_Header: ".consent-hdr",
        P_Acc_Header: ".accordion-header",
        P_Sel_All_Vendor_Consent_Handler: "#select-all-vendor-leg-handler",
        P_Sel_All_Vendor_Leg_Handler: "#select-all-vendor-groups-handler",
        P_Sel_All_Host_Handler: "#select-all-hosts-groups-handler",
        P_Sel_All_Host_El: "select-all-hosts-input-container",
        P_Sel_All_Vendor_Consent_El: "select-all-vendors-input-container",
        P_Sel_All_Vendor_Leg_El: "select-all-vendors-leg-input-container",
        P_c_Name: "cookie-name-container",
        P_c_Host: "cookie-host-container",
        P_c_Duration: "cookie-duration-container",
        P_c_Type: "cookie-type-container",
        P_c_Category: "cookie-category-container",
        P_c_Desc: "cookie-description-container",
        P_Host_View_Cookies: ".host-view-cookies",
        P_Vendor_CheckBx: "vendor-chkbox",
        P_Vendor_LegCheckBx: "vendor-leg-chkbox",
        P_Host_UI: "hosts-list",
        P_Host_Cnt: "host-list-content",
        P_Host_Bx: "host-box",
        P_Ven_Lst_Cntr: ".category-vendors-list-container",
        P_Host_Lst_cntr: ".category-host-list-container",
        P_Subgrp_Desc: ".cookie-subgroups-description-legal",
        P_Subgp_ul: ".cookie-subgroups",
        P_Subgrp_li: ".cookie-subgroup",
        P_Subgrp_Tgl_Cntr: ".cookie-subgroup-toggle",
        P_Active_Menu: "active-group",
        P_Tab_Grp_Hdr: "group-toggle",
        P_Search_Cntr: "#search-container",
        P_Clr_Fltr_Txt: "#clear-filters-handler p",
        P_Vendor_Search_Input: "#vendor-search-handler"
    };
    function qt() {}
    var Mt, Ut = new (qt.prototype.initializeBannerVariables = function(e) {
        var t, o = e.DomainData;
        At.iabType = o.IabType,
        t = o.PCTemplateUpgrade,
        Ht = t ? Ft : Rt,
        At.init(e),
        at.showGeneralVendors = St.GeneralVendorsEnabled && St.PCTemplateUpgrade,
        at.genVenOptOutEnabled = at.showGeneralVendors && St.GenVenOptOut,
        Gt.addLogoUrls(),
        this.setGeolocationInCookies(),
        this.setOrUpdate3rdPartyIABConsentFlag()
    }
    ,
    qt.prototype.initializeVendorInOverriddenVendors = function(e, t) {
        St.OverriddenVendors[e] = {
            disabledCP: [],
            disabledLIP: [],
            active: t,
            legInt: !1,
            consent: !1
        }
    }
    ,
    qt.prototype.applyGlobalRestrictionsonNewVendor = function(e, t, o, n) {
        var r = St.GlobalRestrictions
          , s = St.OverriddenVendors;
        switch (s[t] || this.initializeVendorInOverriddenVendors(t, !0),
        s[t].disabledCP || (s[t].disabledCP = []),
        s[t].disabledLIP || (s[t].disabledLIP = []),
        r[o]) {
        case D.Disabled:
            n ? s[t].disabledCP.push(o) : s[t].disabledLIP.push(o),
            St.Publisher.restrictions[o][t] = D.Disabled;
            break;
        case D.Consent:
            n ? (s[t].consent = !0,
            St.Publisher.restrictions[o][t] = D.Consent) : (s[t].disabledLIP.push(o),
            this.checkFlexiblePurpose(e, t, o, !1));
            break;
        case D.LegInt:
            n ? (s[t].disabledCP.push(o),
            this.checkFlexiblePurpose(e, t, o, !0)) : (s[t].legInt = !0,
            St.Publisher.restrictions[o][t] = D.LegInt);
            break;
        case void 0:
            n ? s[t].consent = !0 : s[t].legInt = !0
        }
    }
    ,
    qt.prototype.checkFlexiblePurpose = function(e, t, o, n) {
        e.flexiblePurposes.includes(o) ? (n ? St.OverriddenVendors[t].legInt = !0 : St.OverriddenVendors[t].consent = !0,
        St.Publisher.restrictions[o][t] = n ? D.LegInt : D.Consent) : St.Publisher.restrictions[o][t] = D.Disabled
    }
    ,
    qt.prototype.removeInActiveVendorsForTcf = function(s) {
        var i = this
          , a = at.iabData.vendorListVersion
          , e = St.Publisher
          , l = St.GlobalRestrictionEnabled
          , c = !(0 === Object.keys(e).length || e && 0 === Object.keys(e.restrictions).length);
        Object.keys(s.vendors).forEach(function(t) {
            var o = s.vendors[t];
            o.iab2GVLVersion > a && (St.NewVendorsInactiveEnabled ? i.initializeVendorInOverriddenVendors(t, !1) : l && (o.purposes.forEach(function(e) {
                i.applyGlobalRestrictionsonNewVendor(o, t, e, !0)
            }),
            o.legIntPurposes.forEach(function(e) {
                i.applyGlobalRestrictionsonNewVendor(o, t, e, !1)
            })));
            var e = !1;
            St.IsIabThirdPartyCookieEnabled || (At.legIntSettings.PAllowLI ? St.OverriddenVendors[t] && !St.OverriddenVendors[t].active && (e = !0) : -1 < St.Vendors.indexOf(Number(t)) && (e = !0));
            var n = !o.purposes.length && !o.flexiblePurposes.length;
            St.OverriddenVendors[t] && !St.OverriddenVendors[t].consent && (n = !0);
            var r = !0;
            At.legIntSettings.PAllowLI && (!o.legIntPurposes.length || St.OverriddenVendors[t] && !St.OverriddenVendors[t].legInt || (r = !1)),
            !n || !r || o.specialPurposes.length || o.features.length || o.specialFeatures.length || (e = !0),
            !l && c && o.iab2GVLVersion > a && (e = !0),
            e && delete s.vendors[t]
        })
    }
    ,
    qt.prototype.setPublisherRestrictions = function() {
        var e = St.Publisher;
        if (e && e.restrictions) {
            var i = this.iabStringSDK()
              , t = e.restrictions
              , a = at.iabData
              , l = at.oneTrustIABConsent.vendorList.vendors;
            Object.keys(t).forEach(function(n) {
                var r, s = t[n], e = At.iabGroups.purposes[n];
                e && (r = {
                    description: e.description,
                    purposeId: e.id,
                    purposeName: e.name
                }),
                Object.keys(s).forEach(function(e) {
                    if (at.vendorsSetting[e]) {
                        var t = at.vendorsSetting[e].arrIndex;
                        1 === s[e] && -1 === l[e].purposes.indexOf(Number(n)) ? a.vendors[t].purposes.push(r) : 2 === s[e] && -1 === l[e].legIntPurposes.indexOf(Number(n)) && a.vendors[t].legIntPurposes.push(r);
                        var o = i.purposeRestriction(Number(n), s[e]);
                        at.tcModel.publisherRestrictions.add(Number(e), o)
                    }
                })
            })
        }
    }
    ,
    qt.prototype.populateVendorListTCF = function() {
        return l(this, void 0, void 0, function() {
            var t, o, n, r, s, i, a, l, c;
            return h(this, function(e) {
                switch (e.label) {
                case 0:
                    return t = this.iabStringSDK(),
                    o = at.iabData,
                    n = Gt.updateCorrectIABUrl(o.globalVendorListUrl),
                    r = !this.isIABCrossConsentEnabled(),
                    Gt.checkMobileOfflineRequest(Gt.getBannerVersionUrl()) ? [3, 1] : (At.mobileOnlineURL.push(n),
                    s = t.gvl(n, at.gvlObj),
                    [3, 3]);
                case 1:
                    return a = (i = t).gvl,
                    l = [null],
                    [4, Gt.otFetchOfflineFile(_t.getRelativeURL(n, !0))];
                case 2:
                    s = a.apply(i, l.concat([e.sent()])),
                    e.label = 3;
                case 3:
                    return this.removeInActiveVendorsForTcf(s),
                    at.oneTrustIABConsent.vendorList = s,
                    this.assignIABDataWithGlobalVendorList(s),
                    c = at,
                    [4, t.tcModel(s)];
                case 4:
                    c.tcModel = e.sent(),
                    r && this.setPublisherRestrictions(),
                    at.tcModel.cmpId = parseInt(o.cmpId),
                    at.tcModel.cmpVersion = parseInt(o.cmpVersion);
                    try {
                        at.tcModel.consentLanguage = at.consentLanguage
                    } catch (e) {
                        at.tcModel.consentLanguage = "EN"
                    }
                    return at.tcModel.consentScreen = parseInt(o.consentScreen),
                    at.tcModel.isServiceSpecific = r,
                    at.tcModel.purposeOneTreatment = At.purposeOneTreatment,
                    St.PublisherCC ? at.tcModel.publisherCountryCode = St.PublisherCC : at.userLocation.country && (at.tcModel.publisherCountryCode = at.userLocation.country),
                    at.cmpApi = t.cmpApi(at.tcModel.cmpId, at.tcModel.cmpVersion, r, St.UseGoogleVendors ? {
                        getTCData: this.addtlConsentString,
                        getInAppTCData: this.addtlConsentString
                    } : void 0),
                    null !== this.alertBoxCloseDate() && !this.needReconsent() || this.resetTCModel(),
                    [2]
                }
            })
        })
    }
    ,
    qt.prototype.resetTCModel = function() {
        var e = this.iabStringSDK()
          , t = at.tcModel.clone();
        if (t.unsetAll(),
        At.legIntSettings.PAllowLI) {
            var o = At.consentableIabGrps.filter(function(e) {
                return e.HasLegIntOptOut && e.Type === pt
            }).map(function(e) {
                return parseInt(At.iabGrpIdMap[e.CustomGroupId])
            })
              , n = Object.keys(at.vendorsSetting).filter(function(e) {
                return at.vendorsSetting[e].legInt
            }).map(function(e) {
                return parseInt(e)
            });
            t.purposeLegitimateInterests.set(o),
            t.vendorLegitimateInterests.set(n),
            t.isServiceSpecific && t.publisherLegitimateInterests.set(o)
        }
        at.cmpApi.update(e.tcString().encode(t), !0)
    }
    ,
    qt.prototype.addtlConsentString = function(e, t, o) {
        t && (t.addtlConsent = "" + at.addtlConsentVersion + (at.isAddtlConsent ? at.addtlVendors.vendorConsent.join(".") : "")),
        "function" == typeof e ? e(t, o) : console.error("__tcfapi received invalid parameters.")
    }
    ,
    qt.prototype.setIabData = function() {
        at.iabData = lt.moduleInitializer.IabV2Data,
        at.iabData.consentLanguage = at.consentLanguage
    }
    ,
    qt.prototype.assignIABDataWithGlobalVendorList = function(r) {
        var s = St.OverriddenVendors;
        at.iabData.vendorListVersion = r.vendorListVersion,
        at.iabData.vendors = [],
        Object.keys(r.vendors).forEach(function(n) {
            at.vendorsSetting[n] = {
                consent: !0,
                legInt: !0,
                arrIndex: 0,
                specialPurposesOnly: !1
            };
            var e = {}
              , t = r.vendors[n];
            e.vendorId = n,
            e.vendorName = t.name,
            e.policyUrl = t.policyUrl,
            e.cookieMaxAge = _t.calculateCookieLifespan(t.cookieMaxAgeSeconds),
            e.usesNonCookieAccess = t.usesNonCookieAccess,
            e.deviceStorageDisclosureUrl = t.deviceStorageDisclosureUrl || null;
            var o = !t.legIntPurposes.length && !t.purposes.length && t.specialPurposes.length;
            At.legIntSettings.PAllowLI && ((!s[n] || s[n].legInt) && (s[n] || t.legIntPurposes.length) || o) || (at.vendorsSetting[n].legInt = !1),
            At.legIntSettings.PAllowLI && o && (at.vendorsSetting[n].specialPurposesOnly = !0),
            s[n] && !s[n].consent || !s[n] && !t.purposes.length && !t.flexiblePurposes.length ? at.vendorsSetting[n].consent = !1 : t.purposes.length || t.flexiblePurposes.length || (at.vendorsSetting[n].consent = !1),
            e.features = t.features.map(function(e) {
                var t, o = At.iabGroups.features[e];
                return o && (t = {
                    description: o.description,
                    featureId: o.id,
                    featureName: o.name
                }),
                t
            }),
            e.specialFeatures = r.vendors[n].specialFeatures.reduce(function(e, t) {
                var o = At.iabGroups.specialFeatures[t];
                return o && e.push({
                    description: o.description,
                    featureId: o.id,
                    featureName: o.name
                }),
                e
            }, []),
            e.purposes = r.vendors[n].purposes.reduce(function(e, t) {
                var o = At.iabGroups.purposes[t];
                return !o || s[n] && s[n].disabledCP && -1 !== s[n].disabledCP.indexOf(t) || e.push({
                    description: o.description,
                    purposeId: o.id,
                    purposeName: o.name
                }),
                e
            }, []),
            e.legIntPurposes = r.vendors[n].legIntPurposes.reduce(function(e, t) {
                var o = At.iabGroups.purposes[t];
                return !o || s[n] && s[n].disabledLIP && -1 !== s[n].disabledLIP.indexOf(t) || e.push({
                    description: o.description,
                    purposeId: o.id,
                    purposeName: o.name
                }),
                e
            }, []),
            e.specialPurposes = t.specialPurposes.map(function(e) {
                var t, o = At.iabGroups.specialPurposes[e];
                return o && (t = {
                    description: o.description,
                    purposeId: o.id,
                    purposeName: o.name
                }),
                t
            }),
            at.iabData.vendors.push(e),
            at.vendorsSetting[n].arrIndex = at.iabData.vendors.length - 1
        })
    }
    ,
    qt.prototype.populateIABCookies = function() {
        return l(this, void 0, void 0, function() {
            return h(this, function(e) {
                switch (e.label) {
                case 0:
                    if (!this.isIABCrossConsentEnabled())
                        return [3, 5];
                    e.label = 1;
                case 1:
                    return e.trys.push([1, 3, , 4]),
                    [4, this.setIAB3rdPartyCookie(Te.EU_CONSENT, "", 0, !0)];
                case 2:
                    return e.sent(),
                    [3, 4];
                case 3:
                    return e.sent(),
                    this.setIABCookieData(),
                    this.updateCrossConsentCookie(!1),
                    [3, 4];
                case 4:
                    return [3, 6];
                case 5:
                    Ut.needReconsent() || this.setIABCookieData(),
                    e.label = 6;
                case 6:
                    return [2]
                }
            })
        })
    }
    ,
    qt.prototype.setIAB3rdPartyCookie = function(e, t, o, n) {
        var r = St.iabThirdPartyConsentUrl;
        try {
            if (r && document.body)
                return this.updateThirdPartyConsent(r, e, t, o, n);
            throw new ReferenceError
        } catch (e) {
            throw e
        }
    }
    ,
    qt.prototype.setIABCookieData = function() {
        at.oneTrustIABConsent.IABCookieValue = Lt.getCookie(Te.EU_PUB_CONSENT)
    }
    ,
    qt.prototype.updateThirdPartyConsent = function(n, r, s, i, a) {
        return l(this, void 0, void 0, function() {
            var t, o;
            return h(this, function(e) {
                return t = window.location.protocol + "//" + n + "/?name=" + r + "&value=" + s + "&expire=" + i + "&isFirstRequest=" + a,
                document.getElementById("onetrustIabCookie") ? (document.getElementById("onetrustIabCookie").contentWindow.location.replace(t),
                [2]) : (Tt(o = document.createElement("iframe"), "display: none;", !0),
                o.id = "onetrustIabCookie",
                o.setAttribute("title", "OneTrust IAB Cookie"),
                o.src = t,
                document.body.appendChild(o),
                [2, new Promise(function(e) {
                    o.onload = function() {
                        At.thirdPartyiFrameResolve(),
                        At.thirdPartyiFrameLoaded = !0,
                        e()
                    }
                    ,
                    o.onerror = function() {
                        throw At.thirdPartyiFrameResolve(),
                        At.thirdPartyiFrameLoaded = !0,
                        e(),
                        new URIError
                    }
                }
                )])
            })
        })
    }
    ,
    qt.prototype.setIABVendor = function(n) {
        if (void 0 === n && (n = !0),
        at.iabData.vendors.forEach(function(e) {
            var t = e.vendorId;
            if (At.legIntSettings.PAllowLI) {
                var o = !at.vendorsSetting[t].consent;
                at.oneTrustIABConsent.vendors.push(t.toString() + ":" + (o ? "false" : n)),
                at.oneTrustIABConsent.legIntVendors.push(t.toString() + ":" + at.vendorsSetting[t].legInt)
            } else
                at.oneTrustIABConsent.legIntVendors = [],
                at.oneTrustIABConsent.vendors.push(t.toString() + ":" + n)
        }),
        St.UseGoogleVendors) {
            var t = at.addtlVendors;
            Object.keys(at.addtlVendorsList).forEach(function(e) {
                n && (t.vendorSelected["" + e.toString()] = !0,
                t.vendorConsent.push("" + e.toString()))
            })
        }
    }
    ,
    qt.prototype.setOrUpdate3rdPartyIABConsentFlag = function() {
        var e = this.getIABCrossConsentflagData();
        St.IsIabEnabled ? e && !this.needReconsent() || this.updateCrossConsentCookie(St.IsIabThirdPartyCookieEnabled) : e && !this.reconsentRequired() && "true" !== e || this.updateCrossConsentCookie(!1)
    }
    ,
    qt.prototype.isIABCrossConsentEnabled = function() {
        return "true" === this.getIABCrossConsentflagData()
    }
    ,
    qt.prototype.getIABCrossConsentflagData = function() {
        return Lt.readCookieParam(Te.OPTANON_CONSENT, Pe)
    }
    ,
    qt.prototype.setGeolocationInCookies = function() {
        var e = Lt.readCookieParam(Te.OPTANON_CONSENT, be);
        if (at.userLocation && !e && this.isAlertBoxClosedAndValid()) {
            var t = at.userLocation.country + ";" + at.userLocation.state;
            this.setUpdateGeolocationCookiesData(t)
        } else
            this.reconsentRequired() && e && this.setUpdateGeolocationCookiesData("")
    }
    ,
    qt.prototype.iabStringSDK = function() {
        var e = lt.moduleInitializer.otIABModuleData;
        if (St.IsIabEnabled && e)
            return {
                gvl: e.tcfSdkRef.gvl,
                tcModel: e.tcfSdkRef.tcModel,
                tcString: e.tcfSdkRef.tcString,
                cmpApi: e.tcfSdkRef.cmpApi,
                purposeRestriction: e.tcfSdkRef.purposeRestriction
            }
    }
    ,
    qt.prototype.setUpdateGeolocationCookiesData = function(e) {
        Lt.writeCookieParam(Te.OPTANON_CONSENT, be, e)
    }
    ,
    qt.prototype.reconsentRequired = function() {
        return (lt.moduleInitializer.MobileSDK || this.awaitingReconsent()) && this.needReconsent()
    }
    ,
    qt.prototype.awaitingReconsent = function() {
        return "true" === Lt.readCookieParam(Te.OPTANON_CONSENT, ke)
    }
    ,
    qt.prototype.needReconsent = function() {
        var e = this.alertBoxCloseDate()
          , t = St.LastReconsentDate;
        return e && t && new Date(t) > new Date(e)
    }
    ,
    qt.prototype.updateCrossConsentCookie = function(e) {
        Lt.writeCookieParam(Te.OPTANON_CONSENT, Pe, e)
    }
    ,
    qt.prototype.alertBoxCloseDate = function() {
        return Lt.getCookie(Te.ALERT_BOX_CLOSED)
    }
    ,
    qt.prototype.isAlertBoxClosedAndValid = function() {
        return null !== this.alertBoxCloseDate() && !this.reconsentRequired()
    }
    ,
    qt.prototype.generateLegIntButtonElements = function(e, t, o) {
        void 0 === o && (o = !1);
        var n = e ? "display:none;" : "";
        return '<div class="ot-leg-btn-container" data-group-id="' + t + '" data-el-id="' + t + '-leg-out" is-vendor="' + o + '">\n                    <button class="ot-obj-leg-btn-handler ' + (e ? "ot-leg-int-enabled ot-inactive-leg-btn" : "ot-active-leg-btn") + '">\n                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512">\n                            <path fill="' + St.pcButtonTextColor + '" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/>\n                        </svg>\n                        <span>' + (e ? At.legIntSettings.PObjectLegIntText : At.legIntSettings.PObjectionAppliedText) + '\n                        </span>\n                    </button>\n                    <button\n                        class="ot-remove-objection-handler"\n                            data-style="color:' + St.pcButtonColor + "; " + n + '"\n                    >\n                        ' + At.legIntSettings.PRemoveObjectionText + "\n                    </button>\n                </div>"
    }
    ,
    qt.prototype.syncAlertBoxCookie = function(e) {
        var t = St.ReconsentFrequencyDays;
        Lt.setCookie(Te.ALERT_BOX_CLOSED, e, t, !1, new Date(e))
    }
    ,
    qt.prototype.syncCookieExpiry = function() {
        if (at.syncRequired) {
            var e = St.ReconsentFrequencyDays
              , t = Lt.getCookie(Te.ALERT_BOX_CLOSED)
              , o = Lt.getCookie(Te.OPTANON_CONSENT);
            Lt.setCookie(Te.OPTANON_CONSENT, o, e, !1, new Date(t)),
            Ut.needReconsent() && Lt.removeAlertBox();
            var n = Lt.getCookie(Te.EU_PUB_CONSENT);
            n && (Ut.isIABCrossConsentEnabled() ? Lt.removeIab2() : Lt.setCookie(Te.EU_PUB_CONSENT, n, e, !1, new Date(t)));
            var r = Lt.getCookie(Te.ADDITIONAL_CONSENT_STRING);
            r && Lt.setCookie(Te.ADDITIONAL_CONSENT_STRING, r, e, !1, new Date(t))
        }
    }
    ,
    qt.prototype.syncOtPreviewCookie = function() {
        var e = Lt.getCookie(Te.OT_PREVIEW);
        e && Lt.setCookie(Te.OT_PREVIEW, e, 1, !1)
    }
    ,
    qt.prototype.dispatchConsentEvent = function() {
        window.dispatchEvent(new CustomEvent("OTConsentApplied",{
            OTConsentApplied: "yes"
        }))
    }
    ,
    qt), jt = (zt.prototype.isAlwaysActiveGroup = function(e) {
        if (this.getGrpStatus(e)) {
            var t = this.getGrpStatus(e).toLowerCase();
            return e.Parent && t !== we && (t = this.getGrpStatus(this.getParentGroup(e.Parent)).toLowerCase()),
            t === we
        }
        return !0
    }
    ,
    zt.prototype.getGrpStatus = function(e) {
        return e && e.Status ? At.DNTEnabled && e.IsDntEnabled ? Oe : e.Status : ""
    }
    ,
    zt.prototype.getParentGroup = function(t) {
        if (t) {
            var e = St.Groups.filter(function(e) {
                return e.OptanonGroupId === t
            });
            return 0 < e.length ? e[0] : null
        }
        return null
    }
    ,
    zt.prototype.checkIfGroupHasConsent = function(t) {
        var e = at.groupsConsent
          , o = _t.findIndex(e, function(e) {
            return e.split(":")[0] === t.CustomGroupId
        });
        return -1 < o && "1" === e[o].split(":")[1]
    }
    ,
    zt.prototype.checkIsActiveByDefault = function(e) {
        if (this.getGrpStatus(e)) {
            var t = this.getGrpStatus(e).toLowerCase();
            return e.Parent && t !== we && (t = this.getGrpStatus(this.getParentGroup(e.Parent)).toLowerCase()),
            t === we || t === Ve || t === xe || t === Oe && !At.DNTEnabled
        }
        return !0
    }
    ,
    zt.prototype.getGroupById = function(e) {
        for (var t = null, o = 0, n = St.Groups; o < n.length; o++) {
            for (var r = n[o], s = 0, i = C(r.SubGroups, [r]); s < i.length; s++) {
                var a = i[s];
                if (a.CustomGroupId === e) {
                    t = a;
                    break
                }
            }
            if (t)
                break
        }
        return t
    }
    ,
    zt.prototype.isSoftOptInGrp = function(e) {
        if (e) {
            var t = e && !e.Parent ? e : Mt.getParentGroup(e.Parent);
            return "inactive landingpage" === Mt.getGrpStatus(t).toLowerCase()
        }
        return !1
    }
    ,
    zt.prototype.isOptInGrp = function(e) {
        return !!e && "inactive" === Mt.getGrpStatus(e).toLowerCase()
    }
    ,
    zt);
    function zt() {}
    var Kt, Wt = (Jt.prototype.ensureConsentId = function(e, t) {
        var o, n = !1, r = Lt.readCookieParam(Te.OPTANON_CONSENT, ve, !0);
        if (o = !e && t ? (n = !0,
        1) : 0,
        r) {
            var s = parseInt(Lt.readCookieParam(Te.OPTANON_CONSENT, me), 10);
            isNaN(s) || (o = t ? ++s : s,
            n = !1)
        } else
            r = _t.generateUUID(),
            Lt.writeCookieParam(Te.OPTANON_CONSENT, ve, r);
        return Lt.writeCookieParam(Te.OPTANON_CONSENT, me, o),
        {
            id: r,
            count: o,
            addDfltInt: n
        }
    }
    ,
    Jt.prototype.isAnonymousConsent = function() {
        var e = !0
          , t = at.dsParams;
        return t && t.hasOwnProperty("isAnonymous") && (e = t.isAnonymous),
        e
    }
    ,
    Jt.prototype.isAuthUsr = function(e) {
        at.consentPreferences ? Lt.writeCookieParam(Te.OPTANON_CONSENT, "iType", "") : Lt.writeCookieParam(Te.OPTANON_CONSENT, "iType", "" + F[e])
    }
    ,
    Jt.prototype.createConsentTxn = function(e, t, o, n) {
        void 0 === t && (t = ""),
        void 0 === o && (o = !1),
        void 0 === n && (n = !0);
        var r = this.ensureConsentId(e, n)
          , s = St.ConsentIntegration
          , i = window.navigator.userAgent
          , a = /OneTrustBot/.test(i);
        if (s.ConsentApi && s.RequestInformation && r.id && !a) {
            var l = lt.moduleInitializer
              , c = {
                requestInformation: s.RequestInformation,
                identifier: r.id,
                customPayload: {
                    Interaction: r.count,
                    AddDefaultInteraction: r.addDfltInt
                },
                isAnonymous: this.isAnonymousConsent(),
                test: l.ScriptType === De || l.ScriptType === He,
                purposes: this.getConsetPurposes(e),
                dsDataElements: {}
            };
            at.isV2Stub && (c.syncGroup = at.syncGrpId,
            "IAB2" !== At.iabType || Ut.isIABCrossConsentEnabled() || (c.tcStringV2 = Lt.getCookie(Te.EU_PUB_CONSENT)),
            St.UseGoogleVendors && (c.gacString = Lt.getCookie(Te.ADDITIONAL_CONSENT_STRING)));
            var d = Mt.getGroupById(St.AdvancedAnalyticsCategory);
            if (d && this.canSendAdvancedAnalytics(c.purposes, d) && (c.dsDataElements = {
                InteractionType: t,
                Country: at && at.userLocation ? at.userLocation.country : "",
                UserAgent: i
            }),
            !l.MobileSDK && n && c.purposes.length) {
                var u = JSON.stringify(c);
                e && navigator.sendBeacon ? (navigator.sendBeacon(s.ConsentApi, u),
                Ut.dispatchConsentEvent()) : !o && at.consentInteractionType === t || (at.isV2Stub && t && this.isAuthUsr(t),
                wt.ajax({
                    url: s.ConsentApi,
                    type: "post",
                    dataType: "json",
                    contentType: "application/json",
                    data: JSON.stringify(c),
                    sync: e,
                    success: function() {
                        Ut.dispatchConsentEvent()
                    },
                    error: function() {
                        Ut.dispatchConsentEvent()
                    }
                }))
            }
            At.pubDomainData.ConsentIntegrationData = {
                consentApi: s.ConsentApi,
                consentPayload: c
            }
        }
        at.consentInteractionType = t
    }
    ,
    Jt.prototype.getGrpDetails = function(e, s) {
        var i = [];
        return e.forEach(function(e) {
            var t = e.split(":")
              , o = t[0]
              , n = "true" === t[1] ? "1" : "0"
              , r = Kt.getOptanonIdForIabGroup(o, s);
            i.push(r + ":" + n)
        }),
        i
    }
    ,
    Jt.prototype.getOptanonIdForIabGroup = function(e, t) {
        var o;
        return t === b.Purpose ? o = "IABV2_" + e : t === b.SpecialFeature && (o = "ISFV2_" + e),
        o
    }
    ,
    Jt.prototype.getConsetPurposes = function(r) {
        var e, t, s = this, i = [], o = [], n = [], a = at.oneTrustIABConsent;
        e = a && a.purpose ? this.getGrpDetails(a.purpose, b.Purpose) : [],
        t = a && a.specialFeatures ? this.getGrpDetails(a.specialFeatures, b.SpecialFeature) : [],
        n = C(a.specialPurposes, a.features),
        o = C(at.groupsConsent, e, t);
        var l = lt.moduleInitializer.TenantFeatures.CookieV2NoOptOut
          , c = at.bannerCloseSource
          , d = c === f.BannerCloseButton || c === f.ContinueWithoutAcceptingButton;
        return o.forEach(function(e) {
            var t = e.split(":")
              , o = Mt.getGroupById(t[0]);
            if (o && o.PurposeId) {
                var n = void 0;
                n = o.Status === we ? _e : o.Status === Ge && d || r ? Be : o.Status === xe && d ? l ? Ee : Ie : s.getTxnType(t[1]),
                i.push({
                    Id: o.PurposeId,
                    TransactionType: n
                })
            }
        }),
        n.forEach(function(e) {
            e.purposeId && i.push({
                Id: e.purposeId,
                TransactionType: _e
            })
        }),
        at.bannerCloseSource = f.Unknown,
        i
    }
    ,
    Jt.prototype.getTxnType = function(e) {
        return "0" === e ? Le : Ie
    }
    ,
    Jt.prototype.isPurposeConsentedTo = function(e, t) {
        var o = [Ie, _e];
        return e.some(function(e) {
            return e.Id === t.PurposeId && -1 !== o.indexOf(e.TransactionType)
        })
    }
    ,
    Jt.prototype.canSendAdvancedAnalytics = function(t, e) {
        var o = this;
        return "BRANCH" === e.Type || "IAB2_STACK" === e.Type ? e.SubGroups.length && e.SubGroups.every(function(e) {
            return o.isPurposeConsentedTo(t, e)
        }) : this.isPurposeConsentedTo(t, e)
    }
    ,
    Jt);
    function Jt() {}
    var Yt, Xt = ($t.prototype.isIabCookieValid = function() {
        var e = null;
        switch (At.iabType) {
        case "IAB2":
            e = Lt.getCookie("eupubconsent-v2")
        }
        return null !== e
    }
    ,
    $t.prototype.iabTypeIsChanged = function() {
        this.isIabCookieValid() || (Lt.removeAlertBox(),
        Lt.removeIab1())
    }
    ,
    $t.prototype.initializeIABModule = function() {
        return l(this, void 0, void 0, function() {
            return h(this, function(e) {
                switch (e.label) {
                case 0:
                    return St.IsIabEnabled ? (lt.moduleInitializer.otIABModuleData = window.otIabModule,
                    Ut.setIabData(),
                    [4, Ut.populateVendorListTCF()]) : [3, 2];
                case 1:
                    return e.sent(),
                    Ut.isIABCrossConsentEnabled() || this.iabTypeIsChanged(),
                    Ut.populateIABCookies(),
                    St.UseGoogleVendors && this.removeInActiveAddtlVendors(),
                    [3, 3];
                case 2:
                    Lt.removeIab1(),
                    e.label = 3;
                case 3:
                    return [2]
                }
            })
        })
    }
    ,
    $t.prototype.removeInActiveAddtlVendors = function() {
        var e = St.OverridenGoogleVendors;
        for (var t in at.addtlVendorsList)
            e && e[t] && !e[t].active && delete at.addtlVendorsList[t]
    }
    ,
    $t.prototype.getIABConsentData = function() {
        var e = at.oneTrustIABConsent
          , t = Ut.iabStringSDK().tcString();
        at.tcModel.unsetAllPurposeConsents(),
        at.tcModel.unsetAllVendorConsents(),
        at.tcModel.unsetAllVendorLegitimateInterests(),
        at.tcModel.unsetAllSpecialFeatureOptins(),
        at.tcModel.unsetAllPurposeLegitimateInterests(),
        at.tcModel.publisherConsents.empty(),
        at.tcModel.publisherLegitimateInterests.empty(),
        at.tcModel.purposeConsents.set(_t.getActiveIdArray(e.purpose)),
        at.tcModel.publisherConsents.set(_t.getActiveIdArray(e.purpose));
        var o = At.legIntSettings.PAllowLI ? _t.getActiveIdArray(e.legimateInterest) : [];
        at.tcModel.purposeLegitimateInterests.set(o),
        at.tcModel.publisherLegitimateInterests.set(o),
        at.tcModel.vendorConsents.set(_t.getActiveIdArray(_t.distinctArray(e.vendors))),
        At.legIntSettings.PAllowLI && !o.length && (e.legIntVendors = []),
        at.tcModel.vendorLegitimateInterests.set(_t.getActiveIdArray(_t.distinctArray(e.legIntVendors))),
        at.tcModel.specialFeatureOptins.set(_t.getActiveIdArray(e.specialFeatures));
        var n = new Date
          , r = new Date(n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate(),0,0,0);
        at.tcModel.lastUpdated = r,
        at.tcModel.created = r;
        var s = t.encode(at.tcModel);
        return at.cmpApi.update(s, !1),
        s
    }
    ,
    $t.prototype.decodeTCString = function(e) {
        return Ut.iabStringSDK().tcString().decode(e)
    }
    ,
    $t.prototype.getVendorConsentsRequestV2 = function(e) {
        var o;
        return window.__tcfapi("getInAppTCData", 2, function(e, t) {
            o = [e, t]
        }),
        e.apply(this, o)
    }
    ,
    $t.prototype.getPingRequestForTcf = function(e) {
        var t;
        return window.__tcfapi("ping", 2, function(e) {
            t = [e]
        }),
        e.apply(this, t)
    }
    ,
    $t.prototype.populateVendorAndPurposeFromCookieData = function() {
        var r = at.oneTrustIABConsent
          , e = Yt.decodeTCString(r.IABCookieValue)
          , s = {}
          , i = {};
        At.iabGrps.forEach(function(e) {
            e.Type === pt ? s[At.iabGrpIdMap[e.CustomGroupId]] = e : e.Type === ht && (i[At.iabGrpIdMap[e.CustomGroupId]] = e)
        });
        var a = [];
        e.vendorConsents.forEach(function(e, t) {
            var o = e;
            at.vendorsSetting[t] && at.vendorsSetting[t].consent || !e || (a.push(t),
            o = !1),
            r.vendors.push(t + ":" + o)
        }),
        e.vendorConsents.unset(a),
        a = [],
        e.vendorLegitimateInterests.forEach(function(e, t) {
            var o = e;
            at.vendorsSetting[t] && at.vendorsSetting[t].legInt || !e || (a.push(t),
            o = !1),
            r.legIntVendors.push(t + ":" + o)
        }),
        e.vendorLegitimateInterests.unset(a),
        a = [],
        e.purposeConsents.forEach(function(e, o) {
            var t = e;
            s[o] && s[o].HasConsentOptOut || !e || (a.push(o),
            t = !1);
            var n = _t.findIndex(r.purpose, function(e, t) {
                return e.split(":")[0] === o.toString()
            });
            -1 === n ? r.purpose.push(o + ":" + t) : r.purpose[n] = o + ":" + t
        }),
        e.purposeConsents.unset(a),
        e.publisherConsents.unset(a),
        a = [],
        e.specialFeatureOptins.forEach(function(e, o) {
            var t = e;
            i[o] && i[o].HasConsentOptOut || !e || (a.push(o),
            t = !1);
            var n = _t.findIndex(r.specialFeatures, function(e, t) {
                return e.split(":")[0] === o.toString()
            });
            -1 === n ? r.specialFeatures.push(o + ":" + t) : r.specialFeatures[n] = o + ":" + t
        }),
        e.specialFeatureOptins.unset(a),
        a = [],
        e.purposeLegitimateInterests.forEach(function(e, o) {
            var t = e;
            s[o] && s[o].HasLegIntOptOut && At.legIntSettings.PAllowLI || !e || (a.push(o),
            t = !1);
            var n = _t.findIndex(r.legimateInterest, function(e, t) {
                return e.split(":")[0] === o.toString()
            });
            -1 === n ? r.legimateInterest.push(o + ":" + t) : r.legimateInterest[n] = o + ":" + t
        }),
        e.purposeLegitimateInterests.unset(a),
        e.publisherLegitimateInterests.unset(a),
        this.syncBundleAndStack(),
        e.gvl = at.tcModel.gvl,
        e.isServiceSpecific = !Ut.isIABCrossConsentEnabled(),
        at.tcModel = e;
        var t = Ut.iabStringSDK().tcString().encode(e);
        Ut.isAlertBoxClosedAndValid() ? (r.IABCookieValue !== t && (r.IABCookieValue = t,
        Ut.isIABCrossConsentEnabled() ? Ut.setIAB3rdPartyCookie(Te.EU_CONSENT, r.IABCookieValue, St.ReconsentFrequencyDays, !1) : Lt.setCookie(Te.EU_PUB_CONSENT, r.IABCookieValue, St.ReconsentFrequencyDays)),
        at.cmpApi.update(t, !1)) : Ut.resetTCModel()
    }
    ,
    $t.prototype.syncBundleAndStack = function() {
        var e = Lt.readCookieParam(Te.OPTANON_CONSENT, "groups");
        at.groupsConsent = _t.strToArr(e),
        St.Groups.forEach(function(t) {
            if (t.Type === ct || t.Type === Ct) {
                var e = Gt.isBundleOrStackActive(t)
                  , o = _t.findIndex(at.groupsConsent, function(e) {
                    return e.split(":")[0] === t.CustomGroupId
                })
                  , n = t.CustomGroupId + ":" + Number(e);
                -1 < o ? at.groupsConsent[o] = n : at.groupsConsent.push(n)
            }
        }),
        Lt.writeCookieParam(Te.OPTANON_CONSENT, "groups", at.groupsConsent.join(","))
    }
    ,
    $t.prototype.populateGoogleConsent = function() {
        if (St.UseGoogleVendors) {
            var e = Lt.getCookie(Te.ADDITIONAL_CONSENT_STRING);
            e && (at.isAddtlConsent = !0,
            at.addtlVendors.vendorConsent = e.replace(at.addtlConsentVersion, "").split("."))
        }
    }
    ,
    $t.prototype.isInitIABCookieData = function(e) {
        return "init" === e || Ut.needReconsent()
    }
    ,
    $t.prototype.updateFromGlobalConsent = function(e) {
        var t = at.oneTrustIABConsent;
        t.IABCookieValue = e,
        t.purpose = t.purpose || [],
        t.specialFeatures = t.specialFeatures || [],
        t.legIntVendors = [],
        t.legimateInterest = t.legimateInterest || [],
        t.vendors = [],
        Yt.populateVendorAndPurposeFromCookieData(),
        Lt.setCookie(Te.EU_PUB_CONSENT, "", -1)
    }
    ,
    $t);
    function $t() {}
    var Qt, Zt = (eo.prototype.writeHstParam = function(e, t) {
        void 0 === t && (t = null),
        Lt.writeCookieParam(e, "hosts", _t.arrToStr(t || at.hostsConsent))
    }
    ,
    eo.prototype.writeGenVenCookieParam = function(e) {
        var t = St.GeneralVendors
          , o = at.genVendorsConsent
          , n = "";
        t.forEach(function(e) {
            n += e.VendorCustomId + ":" + (o[e.VendorCustomId] ? "1" : "0") + ","
        }),
        Lt.writeCookieParam(e, "genVendors", n)
    }
    ,
    eo.prototype.updateGroupsInCookie = function(e, t) {
        void 0 === t && (t = null),
        Lt.writeCookieParam(e, "groups", _t.arrToStr(t || at.groupsConsent))
    }
    ,
    eo.prototype.writeGrpParam = function(e, t) {
        void 0 === t && (t = null),
        this.updateGroupsInCookie(e, t),
        St.IsIabEnabled && Ut.isAlertBoxClosedAndValid() && this.insertOrUpdateIabCookies()
    }
    ,
    eo.prototype.insertOrUpdateIabCookies = function() {
        var e = at.oneTrustIABConsent;
        if (e.purpose && e.vendors) {
            at.isAddtlConsent = St.UseGoogleVendors,
            e.IABCookieValue = Yt.getIABConsentData();
            var t = St.ReconsentFrequencyDays;
            Ut.isIABCrossConsentEnabled() ? Ut.setIAB3rdPartyCookie(Te.EU_CONSENT, e.IABCookieValue, t, !1) : (Lt.setCookie(Te.EU_PUB_CONSENT, e.IABCookieValue, t),
            St.UseGoogleVendors && Lt.setCookie(Te.ADDITIONAL_CONSENT_STRING, "" + at.addtlConsentVersion + at.addtlVendors.vendorConsent.join("."), t))
        }
    }
    ,
    eo);
    function eo() {}
    var to, oo = (no.prototype.initGenVendorConsent = function() {
        var n = this;
        if (St.GenVenOptOut) {
            var e = At.consentableGrps
              , t = Lt.readCookieParam(Te.OPTANON_CONSENT, "genVendors");
            t ? (at.genVendorsConsent = {},
            t.split(",").forEach(function(e) {
                if (e) {
                    var t = e.split(":");
                    "1" === t[1] && (at.genVendorsConsent[t[0]] = !0)
                }
            })) : (at.genVendorsConsent = {},
            e.forEach(function(e) {
                var o = at.syncRequired ? Mt.checkIfGroupHasConsent(e) : Mt.checkIsActiveByDefault(e);
                e.GeneralVendorsIds && e.GeneralVendorsIds.length && e.GeneralVendorsIds.forEach(function(e) {
                    var t = n.isGenVenPartOfAlwaysActiveGroup(e);
                    at.genVendorsConsent[e] = t || o
                })
            }))
        } else
            at.genVendorsConsent = {},
            Qt.writeGenVenCookieParam(Te.OPTANON_CONSENT)
    }
    ,
    no.prototype.populateGenVendorLists = function() {
        At.consentableGrps.forEach(function(e) {
            e.GeneralVendorsIds && (Mt.isAlwaysActiveGroup(e) ? e.GeneralVendorsIds.forEach(function(e) {
                at.alwaysActiveGenVendors.push(e)
            }) : Mt.isOptInGrp(e) ? e.GeneralVendorsIds.forEach(function(e) {
                at.optInGenVendors.push(e)
            }) : Mt.isSoftOptInGrp(e) && e.GeneralVendorsIds.forEach(function(e) {
                at.optInGenVendors.includes(e) || at.softOptInGenVendors.push(e)
            }))
        })
    }
    ,
    no.prototype.updateGenVendorStatus = function(e, t) {
        at.genVendorsConsent[e] = t || this.isGenVenPartOfAlwaysActiveGroup(e)
    }
    ,
    no.prototype.isGenVenPartOfAlwaysActiveGroup = function(e) {
        return at.alwaysActiveGenVendors.includes(e)
    }
    ,
    no);
    function no() {}
    var ro, so = (io.prototype.synchroniseCookieGroupData = function(e) {
        var t = Lt.readCookieParam(Te.OPTANON_CONSENT, "groups")
          , a = _t.strToArr(t)
          , l = _t.strToArr(t.replace(/:0|:1/g, ""))
          , c = Ut.needReconsent()
          , d = !Ut.isAlertBoxClosedAndValid()
          , u = !1
          , p = !1;
        e.forEach(function(e) {
            var t = e.CustomGroupId
              , o = e.Type === ct || e.Type === Ct;
            if (-1 === _t.indexOf(l, t)) {
                if (o && St.IsIabEnabled)
                    return;
                var n;
                n = e.Type === ct ? Gt.isBundleOrStackActive(e, a) : (u = !0,
                Mt.checkIsActiveByDefault(e)),
                p = !0,
                a.push(t + (n ? ":1" : ":0"))
            } else {
                if (At.gpcEnabled && e.IsGpcEnabled && (d || c))
                    -1 < (s = a.indexOf(t + ":1")) && (p = !0,
                    a[s] = t + ":0");
                else if (At.gpcValueChanged && d) {
                    var r = Mt.checkIsActiveByDefault(e);
                    -1 < (s = a.indexOf(t + ":" + (r ? "0" : "1"))) && (p = !0,
                    a[s] = t + (r ? ":1" : ":0"))
                }
                if (c && "false" === Ut.getIABCrossConsentflagData() && o) {
                    var s, i = Gt.isBundleOrStackActive(e, a);
                    -1 < (s = a.indexOf(t + ":" + (i ? "0" : "1"))) && (p = !0,
                    a[s] = t + (i ? ":1" : ":0"))
                }
            }
        });
        for (var o = a.length, n = function() {
            var t = a[o].replace(/:0|:1/g, "");
            St.Groups.some(function(e) {
                return (!c || e.Type !== Ct) && (e.CustomGroupId === t || e.SubGroups.some(function(e) {
                    return e.CustomGroupId === t
                }))
            }) || (p = !0,
            a.splice(o, 1))
        }; o--; )
            n();
        p && (at.fireOnetrustGrp = !0,
        Qt.updateGroupsInCookie(Te.OPTANON_CONSENT, a),
        at.syncRequired && u && Lt.removeAlertBox())
    }
    ,
    io.prototype.groupHasConsent = function(t) {
        var e = _t.strToArr(Lt.readCookieParam(Te.OPTANON_CONSENT, "groups"))
          , o = _t.findIndex(e, function(e) {
            return e.split(":")[0] === t.CustomGroupId
        });
        return -1 < o && "1" === e[o].split(":")[1]
    }
    ,
    io.prototype.synchroniseCookieHostData = function() {
        var n = this
          , e = Lt.readCookieParam(Te.OPTANON_CONSENT, "hosts")
          , r = _t.strToArr(e)
          , s = _t.strToArr(e.replace(/:0|:1/g, ""))
          , i = !1;
        St.Groups.forEach(function(e) {
            C(e.SubGroups, [e]).forEach(function(o) {
                o.Hosts.length && o.Hosts.forEach(function(e) {
                    if (-1 === _t.indexOf(s, e.HostId)) {
                        i = !0;
                        var t = at.syncRequired ? n.groupHasConsent(o) : Mt.checkIsActiveByDefault(o);
                        r.push(e.HostId + (t ? ":1" : ":0"))
                    }
                })
            })
        });
        for (var o = r.length, t = function() {
            var t = r[o].replace(/:0|:1/g, "");
            St.Groups.some(function(e) {
                return C(e.SubGroups, [e]).some(function(e) {
                    return e.Hosts.some(function(e) {
                        return e.HostId === t
                    })
                })
            }) || (i = !0,
            r.splice(o, 1))
        }; o--; )
            t();
        i && (at.fireOnetrustGrp = !0,
        Qt.writeHstParam(Te.OPTANON_CONSENT, r))
    }
    ,
    io.prototype.toggleGroupHosts = function(e, t) {
        var o = this;
        e.Hosts.forEach(function(e) {
            o.updateHostStatus(e, t)
        })
    }
    ,
    io.prototype.toggleGroupGenVendors = function(e, t) {
        e.GeneralVendorsIds.forEach(function(e) {
            to.updateGenVendorStatus(e, t)
        })
    }
    ,
    io.prototype.updateHostStatus = function(t, e) {
        var o = _t.findIndex(at.hostsConsent, function(e) {
            return !t.isActive && t.HostId === e.replace(/:0|:1/g, "")
        });
        if (-1 < o) {
            var n = e || this.isHostPartOfAlwaysActiveGroup(t.HostId);
            at.hostsConsent[o] = t.HostId + ":" + (n ? "1" : "0")
        }
    }
    ,
    io.prototype.isHostPartOfAlwaysActiveGroup = function(e) {
        return at.oneTrustAlwaysActiveHosts.includes(e)
    }
    ,
    io);
    function io() {}
    var ao, lo = function() {
        this.assets = function() {
            return {
                name: "otCookiePolicy",
                html: '<div class="ot-sdk-cookie-policy ot-sdk-container">\n    <h3 id="cookie-policy-title">Cookie Tracking Table</h3>\n    <div id="cookie-policy-description"></div>\n    <section>\n        <h4 class="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h4>\n        <p class="ot-sdk-cookie-policy-group-desc">group description</p>\n        <h5 class="cookies-used-header">Cookies Used</h5>\n        <ul class="cookies-list">\n            <li>Cookie 1</li>\n        </ul>\n        <table>\n            <caption class="ot-scrn-rdr">caption</caption>\n            <thead>\n                <tr>\n                    <th scope="col" class="table-header host">Host</th>\n                    <th scope="col" class="table-header host-description">Host Description</th>\n                    <th scope="col" class="table-header cookies">Cookies</th>\n                    <th scope="col" class="table-header life-span">Life Span</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td class="host-td" data-label="Host"><span class="ot-mobile-border"></span><a\n                            href="https://cookiepedia.co.uk/host/.app.onetrust.com?_ga=2.157675898.1572084395.1556120090-1266459230.1555593548&_ga=2.157675898.1572084395.1556120090-1266459230.1555593548">Azure</a>\n                    </td>\n                    <td class="host-description-td" data-label="Host Description"><span\n                            class="ot-mobile-border"></span>These\n                        cookies are used to make sure\n                        visitor page requests are routed to the same server in all browsing sessions.</td>\n                    <td class="cookies-td" data-label="Cookies">\n                        <span class="ot-mobile-border"></span>\n                        <ul>\n                            <li>ARRAffinity</li>\n                        </ul>\n                    </td>\n                    <td class="life-span-td" data-label="Life Span"><span class="ot-mobile-border"></span>\n                        <ul>\n                            <li>100 days</li>\n                        </ul>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </section>\n    <section class="subgroup">\n        <h5 class="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h5>\n        <p class="ot-sdk-cookie-policy-group-desc">description</p>\n        <h6 class="cookies-used-header">Cookies Used</h6>\n        <ul class="cookies-list">\n            <li>Cookie 1</li>\n        </ul>\n        <table>\n            <caption class="ot-scrn-rdr">caption</caption>\n            <thead>\n                <tr>\n                    <th scope="col" class="table-header host">Host</th>\n                    <th scope="col" class="table-header host-description">Host Description</th>\n                    <th scope="col" class="table-header cookies">Cookies</th>\n                    <th scope="col" class="table-header life-span">Life Span</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td class="host-td" data-label="Host"><span class="ot-mobile-border"></span><a\n                            href="https://cookiepedia.co.uk/host/.app.onetrust.com?_ga=2.157675898.1572084395.1556120090-1266459230.1555593548&_ga=2.157675898.1572084395.1556120090-1266459230.1555593548">Azure</a>\n                    </td>\n                    <td class="host-description-td" data-label="Host Description">\n                        <span class="ot-mobile-border"></span>\n                        cookies are used to make sureng sessions.\n                    </td>\n                    <td class="cookies-td" data-label="Cookies">\n                        <span class="ot-mobile-border"></span>\n                        <ul>\n                            <li>ARRAffinity</li>\n                        </ul>\n                    </td>\n                    <td class="life-span-td" data-label="Life Span"><span class="ot-mobile-border"></span>\n                        <ul>\n                            <li>100 days</li>\n                        </ul>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </section>\n</div>\n\x3c!-- New Cookies policy Link--\x3e\n<div id="ot-sdk-cookie-policy-v2" class="ot-sdk-cookie-policy ot-sdk-container">\n    <h3 id="cookie-policy-title" class="ot-sdk-cookie-policy-title">Cookie Tracking Table</h3>\n    <div id="cookie-policy-description"></div>\n    <section>\n        <h4 class="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h4>\n        <p class="ot-sdk-cookie-policy-group-desc">group description</p>\n        <section class="ot-sdk-subgroup">\n            <ul>\n                <li>\n                    <h5 class="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h5>\n                    <p class="ot-sdk-cookie-policy-group-desc">description</p>\n                </li>\n            </ul>\n        </section>\n        <table>\n            <caption class="ot-scrn-rdr">caption</caption>\n            <thead>\n                <tr>\n                    <th scope="col" class="ot-table-header ot-host">Host</th>\n                    <th scope="col" class="ot-table-header ot-host-description">Host Description</th>\n                    <th scope="col" class="ot-table-header ot-cookies">Cookies</th>\n                    <th scope="col" class="ot-table-header ot-cookies-type">Type</th>\n                    <th scope="col" class="ot-table-header ot-life-span">Life Span</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td class="ot-host-td" data-label="Host"><span class="ot-mobile-border"></span><a\n                            href="https://cookiepedia.co.uk/host/.app.onetrust.com?_ga=2.157675898.1572084395.1556120090-1266459230.1555593548&_ga=2.157675898.1572084395.1556120090-1266459230.1555593548">Azure</a>\n                    </td>\n                    <td class="ot-host-description-td" data-label="Host Description">\n                        <span class="ot-mobile-border"></span>\n                        cookies are used to make sureng sessions.\n                    </td>\n                    <td class="ot-cookies-td" data-label="Cookies">\n                        <span class="ot-mobile-border"></span>\n                        <span class="ot-cookies-td-content">ARRAffinity</span>\n                    </td>\n                    <td class="ot-cookies-type" data-label="Type">\n                        <span class="ot-mobile-border"></span>\n                        <span class="ot-cookies-type-td-content">1st Party</span>\n                    </td>\n                    <td class="ot-life-span-td" data-label="Life Span">\n                        <span class="ot-mobile-border"></span>\n                        <span class="ot-life-span-td-content">100 days</span>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </section>\n</div>',
                css: ".ot-sdk-cookie-policy{font-family:inherit;font-size:16px}.ot-sdk-cookie-policy.otRelFont{font-size:1rem}.ot-sdk-cookie-policy h3,.ot-sdk-cookie-policy h4,.ot-sdk-cookie-policy h6,.ot-sdk-cookie-policy p,.ot-sdk-cookie-policy li,.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy th,.ot-sdk-cookie-policy #cookie-policy-description,.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}.ot-sdk-cookie-policy h4{font-size:1.2em}.ot-sdk-cookie-policy h6{font-size:1em;margin-top:2em}.ot-sdk-cookie-policy th{min-width:75px}.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy a:hover{background:#fff}.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}.ot-sdk-cookie-policy .ot-mobile-border{display:none}.ot-sdk-cookie-policy section{margin-bottom:2em}.ot-sdk-cookie-policy table{border-collapse:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy{font-family:inherit;font-size:1rem}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h3,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h4,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h6,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy p,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup{margin-left:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group-desc,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-table-header,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td{font-size:.9em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td a{font-size:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group{font-size:1em;margin-bottom:.6em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-title{margin-bottom:1.2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy>section{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th{min-width:75px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a:hover{background:#fff}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-mobile-border{display:none}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy section{margin-bottom:2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li{list-style:disc;margin-left:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li h4{display:inline-block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{border-collapse:inherit;margin:auto;border:1px solid #d7d7d7;border-radius:5px;border-spacing:initial;width:100%;overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border-bottom:1px solid #d7d7d7;border-right:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr th:last-child,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr td:last-child{border-right:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:25%}.ot-sdk-cookie-policy[dir=rtl]{text-align:left}#ot-sdk-cookie-policy h3{font-size:1.5em}@media only screen and (max-width: 530px){.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) table,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tbody,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) th,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{display:block}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead tr{position:absolute;top:-9999px;left:-9999px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{margin:0 0 1em 0}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd),.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd) a{background:#f6f6f4}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td{border:none;border-bottom:1px solid #eee;position:relative;padding-left:50%}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{position:absolute;height:100%;left:6px;width:40%;padding-right:10px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) .ot-mobile-border{display:inline-block;background-color:#e4e4e4;position:absolute;height:100%;top:0;left:45%;width:2px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{content:attr(data-label);font-weight:bold}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border:none;border-bottom:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tbody,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{display:block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:auto}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{margin:0 0 1em 0}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{height:100%;width:40%;padding-right:10px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{content:attr(data-label);font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead tr{position:absolute;top:-9999px;left:-9999px;z-index:-9999}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:1px solid #d7d7d7;border-right:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td:last-child{border-bottom:0px}}",
                cssRTL: ".ot-sdk-cookie-policy{font-family:inherit;font-size:16px}.ot-sdk-cookie-policy.otRelFont{font-size:1rem}.ot-sdk-cookie-policy h3,.ot-sdk-cookie-policy h4,.ot-sdk-cookie-policy h6,.ot-sdk-cookie-policy p,.ot-sdk-cookie-policy li,.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy th,.ot-sdk-cookie-policy #cookie-policy-description,.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}.ot-sdk-cookie-policy h4{font-size:1.2em}.ot-sdk-cookie-policy h6{font-size:1em;margin-top:2em}.ot-sdk-cookie-policy th{min-width:75px}.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy a:hover{background:#fff}.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}.ot-sdk-cookie-policy .ot-mobile-border{display:none}.ot-sdk-cookie-policy section{margin-bottom:2em}.ot-sdk-cookie-policy table{border-collapse:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy{font-family:inherit;font-size:1rem}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h3,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h4,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h6,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy p,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup{margin-right:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group-desc,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-table-header,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td{font-size:.9em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td a{font-size:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group{font-size:1em;margin-bottom:.6em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-title{margin-bottom:1.2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy>section{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th{min-width:75px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a:hover{background:#fff}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-mobile-border{display:none}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy section{margin-bottom:2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li{list-style:disc;margin-right:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li h4{display:inline-block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{border-collapse:inherit;margin:auto;border:1px solid #d7d7d7;border-radius:5px;border-spacing:initial;width:100%;overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border-bottom:1px solid #d7d7d7;border-left:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr th:last-child,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr td:last-child{border-left:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:25%}.ot-sdk-cookie-policy[dir=rtl]{text-align:right}#ot-sdk-cookie-policy h3{font-size:1.5em}@media only screen and (max-width: 530px){.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) table,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tbody,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) th,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{display:block}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead tr{position:absolute;top:-9999px;right:-9999px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{margin:0 0 1em 0}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd),.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd) a{background:#f6f6f4}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td{border:none;border-bottom:1px solid #eee;position:relative;padding-right:50%}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{position:absolute;height:100%;right:6px;width:40%;padding-left:10px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) .ot-mobile-border{display:inline-block;background-color:#e4e4e4;position:absolute;height:100%;top:0;right:45%;width:2px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{content:attr(data-label);font-weight:bold}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border:none;border-bottom:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tbody,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{display:block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:auto}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{margin:0 0 1em 0}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{height:100%;width:40%;padding-left:10px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{content:attr(data-label);font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead tr{position:absolute;top:-9999px;right:-9999px;z-index:-9999}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:1px solid #d7d7d7;border-left:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td:last-child{border-bottom:0px}}"
            }
        }
    }, co = (uo.prototype.isLandingPage = function() {
        var e = Lt.readCookieParam(Te.OPTANON_CONSENT, "landingPath");
        return !e || e === location.href
    }
    ,
    uo.prototype.setLandingPathParam = function(e) {
        Lt.writeCookieParam(Te.OPTANON_CONSENT, "landingPath", e)
    }
    ,
    uo);
    function uo() {}
    var po, ho = "#onetrust-banner-sdk", go = "#onetrust-pc-sdk", Co = (yo.prototype.BannerPushDownHandler = function() {
        this.checkIsBrowserIE11OrBelow() || (po.pushPageDown(ho),
        Vt(window).on("resize", function() {
            "none" !== Vt(ho).css("display") && po.pushPageDown(ho)
        }))
    }
    ,
    yo.prototype.pushPageUp = function() {
        Vt("body").css("top: 0;")
    }
    ,
    yo.prototype.checkIsBrowserIE11OrBelow = function() {
        var e = window.navigator.userAgent;
        return 0 < e.indexOf("MSIE ") || 0 < e.indexOf("Trident/")
    }
    ,
    yo.prototype.pushPageDown = function(e) {
        var t = Vt(e).height() + "px";
        Vt(e).show().css("\n            bottom: auto;\n            position: absolute;\n            top: -" + t + ";\n        "),
        Vt("body").css("\n            position: relative;\n            top: " + t + ";\n        ")
    }
    ,
    yo);
    function yo() {}
    var fo, ko = (vo.prototype.loadBanner = function() {
        lt.moduleInitializer.ScriptDynamicLoadEnabled ? "complete" === document.readyState ? Vt(window).trigger("otloadbanner") : window.addEventListener("load", function(e) {
            Vt(window).trigger("otloadbanner")
        }) : "loading" !== document.readyState ? Vt(window).trigger("otloadbanner") : window.addEventListener("DOMContentLoaded", function(e) {
            Vt(window).trigger("otloadbanner")
        }),
        At.pubDomainData.IsBannerLoaded = !0
    }
    ,
    vo.prototype.OnConsentChanged = function(e) {
        var t = e.toString();
        fo.consentChangedEventMap[t] || (fo.consentChangedEventMap[t] = !0,
        window.addEventListener("consent.onetrust", e))
    }
    ,
    vo.prototype.triggerGoogleAnalyticsEvent = function(e, t, o, n) {
        if (!At.ignoreGoogleAnlyticsCall) {
            void 0 !== window._gaq && window._gaq.push(["_trackEvent", e, t, o, n]),
            "function" == typeof window.ga && window.ga("send", "event", e, t, o, n);
            var r = window[At.otDataLayer.name];
            !At.otDataLayer.ignore && void 0 !== r && r && r.constructor === Array && r.push({
                event: "trackOptanonEvent",
                optanonCategory: e,
                optanonAction: t,
                optanonLabel: o,
                optanonValue: n
            })
        }
    }
    ,
    vo.prototype.setAlertBoxClosed = function(e) {
        var t = (new Date).toISOString();
        e ? Lt.setCookie(Te.ALERT_BOX_CLOSED, t, St.ReconsentFrequencyDays) : Lt.setCookie(Te.ALERT_BOX_CLOSED, t, 0),
        At.pagePushedDown && !po.checkIsBrowserIE11OrBelow() && po.pushPageUp();
        var o = Vt(".onetrust-pc-dark-filter").el[0];
        o && "none" !== getComputedStyle(o).getPropertyValue("display") && Vt(".onetrust-pc-dark-filter").fadeOut(400)
    }
    ,
    vo.prototype.updateConsentFromCookie = function(t) {
        return l(this, void 0, void 0, function() {
            return h(this, function(e) {
                return t ? (Yt.isInitIABCookieData(t) || Yt.updateFromGlobalConsent(t),
                "init" === t && (Lt.removeIab1(),
                Ut.isAlertBoxClosedAndValid() && Ut.resetTCModel(),
                Lt.removeAlertBox())) : (Ut.resetTCModel(),
                Ut.updateCrossConsentCookie(!1),
                Ut.setIABCookieData()),
                fo.assetPromise.then(function() {
                    fo.loadBanner()
                }),
                [2]
            })
        })
    }
    ,
    vo);
    function vo() {
        var t = this;
        this.consentChangedEventMap = {},
        this.assetResolve = null,
        this.assetPromise = new Promise(function(e) {
            t.assetResolve = e
        }
        )
    }
    var bo, mo = "opt-out", Po = "OneTrust Cookie Consent", Ao = "Banner Auto Close", So = "Banner Close Button", To = "Banner - Continue without Accepting", Io = "Banner - Confirm", Lo = "Preferences Close Button", _o = "Preference Center Opened From Banner", Bo = "Preference Center Opened From Button", Eo = "Preference Center Opened From Function", wo = "Preferences Save Settings", xo = "Vendors List Opened From Function", Vo = "Floating Cookie Settings Open Button", Go = "Floating Cookie Settings Close Button", Oo = "Preferences Toggle On", No = "Preferences Toggle Off", Do = "General Vendor Toggle On", Ho = "General Vendor Toggle Off", Fo = "Host Toggle On", Ro = "Host Toggle Off", qo = "Preferences Legitimate Interest Objection", Mo = "Preferences Legitimate Interest Remove Objection", Uo = "IAB Vendor Toggle ON", jo = "IAB Vendor Toggle Off", zo = "IAB Vendor Legitimate Interest Objection", Ko = "IAB Vendor Legitimate Interest Remove Objection", Wo = (Jo.prototype.getDataLanguageCulture = function() {
        var e = At.bannerScriptElement;
        return e && e.getAttribute(Fe) ? this.checkAndTansformLangCodeWithUnderdscore(e.getAttribute(Fe).toLowerCase()) : this.detectDocumentOrBrowserLanguage().toLowerCase()
    }
    ,
    Jo.prototype.checkAndTansformLangCodeWithUnderdscore = function(e) {
        return e.replace(/\_/, "-")
    }
    ,
    Jo.prototype.detectDocumentOrBrowserLanguage = function() {
        var e = "";
        if (At.langSwitcherPldr) {
            var t = _t.convertKeyValueLowerCase(At.langSwitcherPldr)
              , o = this.getUserLanguage().toLowerCase();
            if (!(e = t[o] || t[o + "-" + o] || (t.default === o ? t.default : null)))
                if (2 === o.length)
                    for (var n = 0; n < Object.keys(t).length; n += 1) {
                        var r = Object.keys(t)[n];
                        if (r.substr(0, 2) === o) {
                            e = t[r];
                            break
                        }
                    }
                else
                    2 < o.length && (e = t[o.substr(0, 2)]);
            e = e || t.default
        }
        return e
    }
    ,
    Jo.prototype.getUserLanguage = function() {
        return At.useDocumentLanguage ? this.checkAndTansformLangCodeWithUnderdscore(document.documentElement.lang) : navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language || navigator.userLanguage
    }
    ,
    Jo.prototype.isValidLanguage = function(e, t) {
        var o = _t.convertKeyValueLowerCase(At.langSwitcherPldr);
        return !(!o || !o[t] && !o[t + "-" + t] && o.default !== t)
    }
    ,
    Jo.prototype.getLangJsonUrl = function(e) {
        void 0 === e && (e = null);
        var t, o = At.getRegionRule();
        if (e) {
            if (e = e.toLowerCase(),
            !this.isValidLanguage(o, e))
                return null
        } else
            e = this.getDataLanguageCulture();
        return at.lang = e,
        at.consentLanguage = e.substr(0, 2),
        t = At.canUseConditionalLogic ? At.bannerDataParentURL + "/" + o.Id + "/" + At.Condition.Id + "/" + e : At.bannerDataParentURL + "/" + o.Id + "/" + e,
        At.multiVariantTestingEnabled && (t = At.bannerDataParentURL + "/" + o.Id + "/variants/" + At.selectedVariant.Id + "/" + e),
        t
    }
    ,
    Jo.prototype.populateLangSwitcherPlhdr = function() {
        var e = At.getRegionRule();
        if (e) {
            var t = e.Variants;
            if (At.multiVariantTestingEnabled && t) {
                var o = Lt.getCookie(Te.SELECTED_VARIANT)
                  , n = void 0;
                o && (n = t[_t.findIndex(t, function(e) {
                    return e.Id === o
                })]),
                o && n || (n = t[Math.floor(Math.random() * t.length)]),
                At.langSwitcherPldr = n.LanguageSwitcherPlaceholder,
                At.selectedVariant = n
            } else
                At.canUseConditionalLogic ? At.langSwitcherPldr = At.Condition.LanguageSwitcherPlaceholder : At.langSwitcherPldr = e.LanguageSwitcherPlaceholder
        }
    }
    ,
    Jo);
    function Jo() {}
    var Yo, Xo = ($o.prototype.getLangJson = function(e) {
        void 0 === e && (e = null);
        var t = bo.getLangJsonUrl(e);
        return t ? Yo.otFetch(t + ".json") : Promise.resolve(null)
    }
    ,
    $o.prototype.getPersistentCookieSvg = function() {
        var e = St.cookiePersistentLogo;
        return e ? Yo.otFetch(e, !0) : Promise.resolve(null)
    }
    ,
    $o.prototype.fetchGvlObj = function() {
        return this.otFetch(lt.moduleInitializer.IabV2Data.globalVendorListUrl)
    }
    ,
    $o.prototype.fetchGoogleVendors = function() {
        var e = Gt.updateCorrectIABUrl(lt.moduleInitializer.GoogleData.googleVendorListUrl);
        return Gt.checkMobileOfflineRequest(Gt.getBannerVersionUrl()) ? Gt.otFetchOfflineFile(_t.getRelativeURL(e, !0)) : (At.mobileOnlineURL.push(e),
        this.otFetch(e))
    }
    ,
    $o.prototype.getStorageDisclosure = function(t) {
        return l(this, void 0, void 0, function() {
            return h(this, function(e) {
                return [2, this.otFetch(t)]
            })
        })
    }
    ,
    $o.prototype.loadCMP = function() {
        var o = this;
        return new Promise(function(e) {
            var t = o.checkIfRequiresPollyfill() ? "otTCF-ie" : "otTCF";
            Gt.jsonp(Gt.getBannerVersionUrl() + "/" + t + ".js", e, e)
        }
        )
    }
    ,
    $o.prototype.getCSBtnContent = function() {
        return l(this, void 0, void 0, function() {
            var t, o, n, r;
            return h(this, function(e) {
                switch (e.label) {
                case 0:
                    return t = St.useRTL ? X.RTL : X.LTR,
                    at.csBtnAsset[t] ? [3, 2] : (o = Gt.getBannerSDKAssestsUrl() + "/" + (St.useRTL ? qe : Re),
                    n = at.csBtnAsset,
                    r = t,
                    [4, this.otFetch(o)]);
                case 1:
                    n[r] = e.sent(),
                    e.label = 2;
                case 2:
                    return [2, at.csBtnAsset[t]]
                }
            })
        })
    }
    ,
    $o.prototype.getPcContent = function(i) {
        return void 0 === i && (i = !1),
        l(this, void 0, void 0, function() {
            var t, o, n, r, s;
            return h(this, function(e) {
                switch (e.label) {
                case 0:
                    return t = St.useRTL ? X.RTL : X.LTR,
                    at.pcAsset[t] && !i ? [3, 2] : (o = Gt.getBannerSDKAssestsUrl(),
                    St.PCTemplateUpgrade && (o += "/v2"),
                    n = o + "/" + At.pcName + (St.useRTL ? "Rtl" : "") + ".json",
                    r = at.pcAsset,
                    s = t,
                    [4, this.otFetch(n)]);
                case 1:
                    r[s] = e.sent(),
                    e.label = 2;
                case 2:
                    return [2, at.pcAsset[t]]
                }
            })
        })
    }
    ,
    $o.prototype.getBannerContent = function(i) {
        return void 0 === i && (i = !1),
        l(this, void 0, void 0, function() {
            var t, o, n, r, s;
            return h(this, function(e) {
                switch (e.label) {
                case 0:
                    return t = St.useRTL ? X.RTL : X.LTR,
                    at.bAsset[t] && !i ? [3, 2] : (o = At.getRegionRule(),
                    n = void 0,
                    lt.fp.CookieV2SSR ? (n = At.bannerDataParentURL + "/" + o.Id,
                    At.canUseConditionalLogic && (n += "/" + At.Condition.Id),
                    n += "/bLayout-" + bo.getDataLanguageCulture() + (St.useRTL ? "Rtl" : "") + ".json") : n = Gt.getBannerSDKAssestsUrl() + "/" + At.bannerName + (St.useRTL ? "Rtl" : "") + ".json",
                    r = at.bAsset,
                    s = t,
                    [4, this.otFetch(n)]);
                case 1:
                    r[s] = e.sent(),
                    e.label = 2;
                case 2:
                    return [2, at.bAsset[t]]
                }
            })
        })
    }
    ,
    $o.prototype.getCommonStyles = function(s) {
        return void 0 === s && (s = !1),
        l(this, void 0, void 0, function() {
            var t, o, n, r;
            return h(this, function(e) {
                switch (e.label) {
                case 0:
                    return t = St.useRTL ? X.RTL : X.LTR,
                    at.cStyles[t] && !s ? [3, 2] : (o = Gt.getBannerSDKAssestsUrl() + "/otCommonStyles" + (St.useRTL ? "Rtl" : "") + ".css",
                    n = at.cStyles,
                    r = t,
                    [4, this.otFetch(o, !0)]);
                case 1:
                    n[r] = e.sent(),
                    e.label = 2;
                case 2:
                    return [2, at.cStyles[t]]
                }
            })
        })
    }
    ,
    $o.prototype.getSyncNtfyContent = function() {
        return l(this, void 0, void 0, function() {
            var t, o, n, r;
            return h(this, function(e) {
                switch (e.label) {
                case 0:
                    return t = St.useRTL ? X.RTL : X.LTR,
                    at.syncNtfyContent[t] ? [3, 2] : (o = Gt.getBannerSDKAssestsUrl() + "/otSyncNotification" + (St.useRTL ? "Rtl" : "") + ".json",
                    n = at.syncNtfyContent,
                    r = t,
                    [4, this.otFetch(o)]);
                case 1:
                    n[r] = e.sent(),
                    e.label = 2;
                case 2:
                    return [2, at.syncNtfyContent[t]]
                }
            })
        })
    }
    ,
    $o.prototype.getConsentProfile = function(e, t) {
        var o = this
          , n = {
            Identifier: e,
            TenantId: at.tenantId,
            Authorization: t
        };
        return new Promise(function(e) {
            o.getJSON(at.consentApi, n, e, e)
        }
        )
    }
    ,
    $o.prototype.checkIfRequiresPollyfill = function() {
        var e = window.navigator.userAgent;
        return 0 < e.indexOf("MSIE ") || 0 < e.indexOf("Trident/") || "undefined" == typeof Set
    }
    ,
    $o.prototype.otFetch = function(r, s) {
        return void 0 === s && (s = !1),
        l(this, void 0, void 0, function() {
            var t, o, n = this;
            return h(this, function(e) {
                switch (e.label) {
                case 0:
                    return Gt.checkMobileOfflineRequest(r) ? [4, Gt.otFetchOfflineFile(r)] : [3, 2];
                case 1:
                    return [2, e.sent()];
                case 2:
                    return e.trys.push([2, 9, , 10]),
                    At.mobileOnlineURL.push(r),
                    "undefined" != typeof fetch ? [3, 3] : [2, new Promise(function(e) {
                        n.getJSON(r, null, e, e, s)
                    }
                    )];
                case 3:
                    return [4, fetch(r)];
                case 4:
                    return t = e.sent(),
                    s ? [4, t.text()] : [3, 6];
                case 5:
                    return [2, e.sent()];
                case 6:
                    return [4, t.json()];
                case 7:
                    return [2, e.sent()];
                case 8:
                    return [3, 10];
                case 9:
                    return o = e.sent(),
                    console.log("Error in fetch URL : " + r + " Exception :" + o),
                    [3, 10];
                case 10:
                    return [2]
                }
            })
        })
    }
    ,
    $o.prototype.getJSON = function(e, t, o, n, r) {
        void 0 === t && (t = null),
        void 0 === r && (r = !1);
        var s = new XMLHttpRequest;
        if (s.open("GET", e, !0),
        t)
            for (var i in t)
                s.setRequestHeader(i, t[i]);
        s.onload = function() {
            if (200 <= this.status && this.status < 400 && this.responseText) {
                var e = void 0;
                e = r ? this.responseText : JSON.parse(this.responseText),
                o(e)
            } else
                n({
                    message: "Error Loading Data",
                    statusCode: this.status
                })
        }
        ,
        s.onerror = function(e) {
            n(e)
        }
        ,
        s.send()
    }
    ,
    $o);
    function $o() {}
    var Qo, Zo = (new lo).assets(), en = (tn.prototype.initializeFeaturesAndSpecialPurposes = function() {
        at.oneTrustIABConsent.features = [],
        at.oneTrustIABConsent.specialPurposes = [],
        St.Groups.forEach(function(e) {
            if ("IAB2_FEATURE" === e.Type || "IAB2_SPL_PURPOSE" === e.Type) {
                var t = {};
                t.groupId = e.OptanonGroupId,
                t.purposeId = e.PurposeId,
                t.value = !0,
                "IAB2_FEATURE" === e.Type ? at.oneTrustIABConsent.features.push(t) : at.oneTrustIABConsent.specialPurposes.push(t)
            }
        })
    }
    ,
    tn.prototype.initGrpsAndHosts = function() {
        this.initializeGroupData(At.consentableGrps),
        St.showCookieList && Gt.isOptOutEnabled() ? this.initializeHostData(At.consentableGrps) : (at.hostsConsent = [],
        Qt.writeHstParam(Te.OPTANON_CONSENT))
    }
    ,
    tn.prototype.ensureHtmlGroupDataInitialised = function() {
        if (this.initGrpsAndHosts(),
        at.showGeneralVendors && (to.populateGenVendorLists(),
        to.initGenVendorConsent()),
        St.IsIabEnabled && (this.initializeIABData(),
        this.initializeFeaturesAndSpecialPurposes()),
        Ut.setOrUpdate3rdPartyIABConsentFlag(),
        Ut.setGeolocationInCookies(),
        St.IsConsentLoggingEnabled) {
            var e = window.OneTrust.dataSubjectParams || {}
              , t = Lt.readCookieParam(Te.OPTANON_CONSENT, "iType")
              , o = ""
              , n = !1;
            t && at.isV2Stub && e.id && e.token && (n = !0,
            o = F[t]),
            Kt.createConsentTxn(!1, o, !1, n)
        }
    }
    ,
    tn.prototype.initializeGroupData = function(e) {
        var t = Lt.readCookieParam(Te.OPTANON_CONSENT, "groups");
        t ? (ro.synchroniseCookieGroupData(e),
        t = Lt.readCookieParam(Te.OPTANON_CONSENT, "groups"),
        at.groupsConsent = _t.strToArr(t)) : (at.groupsConsent = [],
        e.forEach(function(e) {
            at.groupsConsent.push(e.CustomGroupId + (Mt.checkIsActiveByDefault(e) && e.HasConsentOptOut ? ":1" : ":0"))
        }),
        St.IsConsentLoggingEnabled && window.addEventListener("beforeunload", this.consentDefaulCall))
    }
    ,
    tn.prototype.initializeHostData = function(e) {
        var t = Lt.readCookieParam(Te.OPTANON_CONSENT, "hosts");
        if (t)
            ro.synchroniseCookieHostData(),
            t = Lt.readCookieParam(Te.OPTANON_CONSENT, "hosts"),
            at.hostsConsent = _t.strToArr(t),
            e.forEach(function(e) {
                Mt.isAlwaysActiveGroup(e) && e.Hosts.length && e.Hosts.forEach(function(e) {
                    at.oneTrustAlwaysActiveHosts.push(e.HostId)
                })
            });
        else {
            at.hostsConsent = [];
            var r = {};
            e.forEach(function(e) {
                var o = Mt.isAlwaysActiveGroup(e)
                  , n = at.syncRequired ? ro.groupHasConsent(e) : Mt.checkIsActiveByDefault(e);
                e.Hosts.length && e.Hosts.forEach(function(e) {
                    if (r[e.HostId])
                        ro.updateHostStatus(e, n);
                    else {
                        r[e.HostId] = !0,
                        o && at.oneTrustAlwaysActiveHosts.push(e.HostId);
                        var t = ro.isHostPartOfAlwaysActiveGroup(e.HostId);
                        at.hostsConsent.push(e.HostId + (t || n ? ":1" : ":0"))
                    }
                })
            })
        }
    }
    ,
    tn.prototype.consentDefaulCall = function() {
        var e = parseInt(Lt.readCookieParam(Te.OPTANON_CONSENT, me), 10);
        !isNaN(e) && 0 !== e || (fo.triggerGoogleAnalyticsEvent(Po, "Click", "No interaction"),
        St.IsConsentLoggingEnabled && Kt.createConsentTxn(!0),
        window.removeEventListener("beforeunload", Qo.consentDefaulCall))
    }
    ,
    tn.prototype.fetchAssets = function() {
        return l(this, void 0, void 0, function() {
            var t, o, n, r, s, i, a, l, c, d, u, p;
            return h(this, function(e) {
                switch (e.label) {
                case 0:
                    return s = lt.moduleInitializer,
                    i = Ut.isAlertBoxClosedAndValid(),
                    a = !s.IsSuppressBanner || St.ShowAlertNotice && !i && s.IsSuppressBanner && !Vt("#onetrust-banner-sdk").length,
                    l = Vt("#ot-sdk-btn").length || Vt(".ot-sdk-show-settings").length || Vt(".optanon-show-settings").length,
                    c = "IAB2" === St.IabType ? !s.TenantFeatures.CookieV2RemoveSettingsIcon && !l : St.PCShowPersistentCookiesHoverButton,
                    d = "true" === at.urlParams.get(tt),
                    at.hideBanner = d,
                    [4, Promise.all([!a || St.NoBanner || d ? Promise.resolve(null) : Yo.getBannerContent(), !s.IsSuppressPC || at.isPCVisible ? Yo.getPcContent() : Promise.resolve(null), c ? Yo.getCSBtnContent() : Promise.resolve(null), Yo.getCommonStyles()])];
                case 1:
                    return p = e.sent(),
                    t = p[0],
                    o = p[1],
                    n = p[2],
                    r = p[3],
                    t && (u = t.html,
                    lt.fp.CookieV2SSR || (u = atob(t.html)),
                    this.bannerGroup = {
                        name: t.name,
                        html: u,
                        css: t.css
                    }),
                    o && (this.preferenceCenterGroup = {
                        name: o.name,
                        html: atob(o.html),
                        css: o.css
                    },
                    lt.isV2Template = St.PCTemplateUpgrade && /otPcPanel|otPcCenter|otPcTab/.test(o.name)),
                    r && (this.commonStyles = r),
                    this.cookieListGroup = {
                        name: Zo.name,
                        html: Zo.html,
                        css: St.useRTL ? Zo.cssRTL : Zo.css
                    },
                    n && (this.csBtnGroup = {
                        name: "CookieSettingsButton",
                        html: atob(n.html),
                        css: n.css
                    }),
                    [2]
                }
            })
        })
    }
    ,
    tn.prototype.initializeIabPurposeConsentOnReload = function() {
        var t = this;
        At.consentableIabGrps.forEach(function(e) {
            t.setIABConsent(e, !1),
            e.IsLegIntToggle = !0,
            t.setIABConsent(e, !1)
        })
    }
    ,
    tn.prototype.initializeIABData = function(o, n) {
        var r = this;
        void 0 === o && (o = !1),
        void 0 === n && (n = !1);
        var e = at.oneTrustIABConsent;
        if (e.purpose = [],
        e.vendors = [],
        e.legIntVendors = [],
        e.specialFeatures = [],
        e.legimateInterest = [],
        at.addtlVendors.vendorConsent = [],
        !e.IABCookieValue || o || n || Ut.reconsentRequired()) {
            At.consentableIabGrps.forEach(function(e) {
                if (n)
                    r.setIABConsent(e, Mt.isAlwaysActiveGroup(e));
                else {
                    var t = o && e.HasConsentOptOut;
                    r.setIABConsent(e, t),
                    "IAB2_PURPOSE" === e.Type && (e.IsLegIntToggle = !0,
                    r.setIABConsent(e, e.HasLegIntOptOut))
                }
            });
            var t = o || !n && St.VendorConsentModel === mo;
            Ut.setIABVendor(t),
            !Ut.reconsentRequired() || o || n || Ut.resetTCModel()
        } else
            this.initializeIabPurposeConsentOnReload(),
            Yt.populateGoogleConsent(),
            Yt.populateVendorAndPurposeFromCookieData()
    }
    ,
    tn.prototype.canSoftOptInInsertForGroup = function(e) {
        var t = Mt.getGroupById(e);
        if (t) {
            var o = t && !t.Parent ? t : Mt.getParentGroup(t.Parent);
            return "inactive landingpage" !== Mt.getGrpStatus(o).toLowerCase() || !ao.isLandingPage()
        }
    }
    ,
    tn.prototype.setIABConsent = function(e, t) {
        e.Type === ht ? this.setIabSpeciFeatureConsent(e, t) : e.IsLegIntToggle ? (this.setIabLegIntConsent(e, t),
        e.IsLegIntToggle = !1) : this.setIabPurposeConsent(e, t)
    }
    ,
    tn.prototype.setIabPurposeConsent = function(o, n) {
        var r = !1;
        at.oneTrustIABConsent.purpose = at.oneTrustIABConsent.purpose.map(function(e) {
            var t = e.split(":")[0];
            return t === o.IabGrpId && (e = t + ":" + n,
            r = !0),
            e
        }),
        r || at.oneTrustIABConsent.purpose.push(o.IabGrpId + ":" + n)
    }
    ,
    tn.prototype.setIabLegIntConsent = function(o, n) {
        var r = !1;
        at.oneTrustIABConsent.legimateInterest = at.oneTrustIABConsent.legimateInterest.map(function(e) {
            var t = e.split(":")[0];
            return t === o.IabGrpId && (e = t + ":" + n,
            r = !0),
            e
        }),
        r || at.oneTrustIABConsent.legimateInterest.push(o.IabGrpId + ":" + n)
    }
    ,
    tn.prototype.setIabSpeciFeatureConsent = function(o, n) {
        var r = !1;
        at.oneTrustIABConsent.specialFeatures = at.oneTrustIABConsent.specialFeatures.map(function(e) {
            var t = e.split(":")[0];
            return t === o.IabGrpId && (e = t + ":" + n,
            r = !0),
            e
        }),
        r || at.oneTrustIABConsent.specialFeatures.push(o.IabGrpId + ":" + n)
    }
    ,
    tn);
    function tn() {}
    var on, nn = (rn.prototype.getAllowAllButton = function() {
        return Vt("#onetrust-pc-sdk #accept-recommended-btn-handler")
    }
    ,
    rn.prototype.getSelectedVendors = function() {
        return Vt("#onetrust-pc-sdk " + Ht.P_Tgl_Cntr + " .ot-checkbox input:checked")
    }
    ,
    rn);
    function rn() {}
    var sn, an = (ln.prototype.setBannerFocus = function() {
        var e = Array.prototype.slice.call(Vt("#onetrust-banner-sdk .onetrust-vendors-list-handler").el)
          , t = Array.prototype.slice.call(Vt('#onetrust-banner-sdk #onetrust-policy-text [href],#onetrust-banner-sdk #onetrust-policy-text button,#onetrust-banner-sdk #onetrust-policy-text [tabindex]:not([tabindex="-1"])').el)
          , o = Array.prototype.slice.call(Vt("#onetrust-banner-sdk .ot-bnr-save-handler").el)
          , n = Array.prototype.slice.call(Vt("#onetrust-banner-sdk #onetrust-pc-btn-handler").el)
          , r = Array.prototype.concat.call(Array.prototype.slice.call(Vt("#onetrust-banner-sdk .category-switch-handler:not([disabled])").el), Array.prototype.slice.call(Vt("#onetrust-banner-sdk .ot-cat-lst button").el), e)
          , s = Array.prototype.concat.call(t, r)
          , i = Array.prototype.slice.call(Vt("#onetrust-banner-sdk .onetrust-close-btn-handler").el);
        At.bannerName === ze && (s = Array.prototype.concat.call(e, t));
        var a = Array.prototype.slice.call(Vt("#onetrust-banner-sdk #onetrust-accept-btn-handler").el)
          , l = Array.prototype.slice.call(Vt("#onetrust-banner-sdk #onetrust-reject-all-handler").el)
          , c = Array.prototype.concat.call(o, a, l, n);
        (At.bannerName !== Ue || St.IsIabEnabled) && At.bannerName !== Me && At.bannerName !== We || (c = Array.prototype.concat.call(n, l, a));
        var d = Array.prototype.slice.call(Vt("#onetrust-banner-sdk .ot-gv-list-handler").el);
        At.bannerName === Je ? (s = Array.prototype.concat.call(d, s),
        c = Array.prototype.slice.call(Vt("#onetrust-banner-sdk #onetrust-button-group button").el)) : s = Array.prototype.concat.call(s, d),
        this.bannerEl = Array.prototype.concat.call(Array.prototype.slice.call(Vt("#onetrust-banner-sdk #onetrust-cookie-btn").el), s, Array.prototype.slice.call(Vt("#onetrust-banner-sdk .banner-option-input").el), c, Array.prototype.slice.call(Vt("#onetrust-banner-sdk .ot-bnr-footer-logo a").el), i),
        this.banner = Vt("#onetrust-banner-sdk").el[0],
        (St.BInitialFocus || St.BInitialFocusLinkAndButton || St.ForceConsent) && (St.BInitialFocus ? this.banner.focus() : this.bannerEl[0].focus())
    }
    ,
    ln.prototype.handleBannerFocus = function(e, t) {
        var o = e.target
          , n = sn.bannerEl
          , r = n.indexOf(o)
          , s = n.length - 1
          , i = null;
        if (!St.ForceConsent && (St.BInitialFocus || St.BInitialFocusLinkAndButton) && (t && 0 === r || !t && r === s))
            Gt.resetFocusToBody();
        else if (this.banner === o)
            t && St.ForceConsent ? i = n[s] : t || (i = n[0]);
        else
            for (; !i; ) {
                var a = void 0;
                0 !== (a = t ? 0 === r ? n[s] : n[r - 1] : r === s ? n[0] : n[r + 1]).clientHeight || 0 !== a.offsetHeight ? i = a : t ? r-- : r++
            }
        i && (e.preventDefault(),
        i.focus())
    }
    ,
    ln.prototype.setPCFocus = function(e) {
        if (e && !(e.length <= 0)) {
            for (var t = 0; t < e.length; t++)
                e[t].setAttribute("tabindex", "0");
            this.setFirstAndLast(e);
            var o = St.ShowPreferenceCenterCloseButton
              , n = o ? this.getElementForFocus(e, St.PCLayout.Popup ? 2 : 1, !0) : null
              , r = {
                preventScroll: !0
            };
            this.firstItem ? o ? n.focus(r) : this.firstItem.focus(r) : e[0].focus(),
            this.firstItem && Vt(this.firstItem).on("keydown", sn.firstItemHandler),
            this.lastItem && Vt(this.lastItem).on("keydown", sn.lastItemHandler)
        }
    }
    ,
    ln.prototype.setFirstAndLast = function(e) {
        this.firstItem = this.getElementForFocus(e, 0, !0),
        this.lastItem = this.firstItem ? this.getElementForFocus(e, e.length - 1, !1) : null
    }
    ,
    ln.prototype.setLastItem = function() {
        var e = this.getPCElements()
          , t = this.getElementForFocus(e, e.length - 1, !1);
        t !== this.lastItem && (Vt(this.lastItem).off("keydown", sn.lastItemHandler),
        this.lastItem = t,
        Vt(t).on("keydown", sn.lastItemHandler))
    }
    ,
    ln.prototype.getPCElements = function() {
        var e = "#onetrust-pc-sdk #close-pc-btn-handler,\n            #onetrust-pc-sdk .back-btn-handler,\n            #onetrust-pc-sdk ." + Ht.P_Active_Menu + ',\n            #onetrust-pc-sdk input,\n            #onetrust-pc-sdk a,\n            #onetrust-pc-sdk [tabindex="0"] button,\n            #onetrust-pc-sdk .save-preference-btn-handler,\n            #onetrust-pc-sdk .ot-pc-refuse-all-handler,\n            #onetrust-pc-sdk #accept-recommended-btn-handler';
        return at.pcLayer === T.CookieList ? e += " ,#onetrust-pc-sdk " + Ht.P_Content + " .powered-by-logo" : e += ",#onetrust-pc-sdk #vendor-list-save-btn .powered-by-logo",
        Array.prototype.slice.call(Vt(e).el)
    }
    ,
    ln.prototype.getActiveTab = function() {
        return document.querySelector('#onetrust-pc-sdk .category-menu-switch-handler[tabindex="0"]')
    }
    ,
    ln.prototype.getElementForFocus = function(e, t, o) {
        for (var n = e[t]; o ? n && null === n.offsetParent && t < e.length - 1 : n && null === n.offsetParent && 0 < t; )
            n = e[t],
            o ? ++t : --t;
        return n
    }
    ,
    ln.prototype.firstItemHandler = function(e) {
        var t = document.getElementById("onetrust-banner-sdk");
        if (9 === e.keyCode && e.shiftKey && sn.firstItem !== t)
            e.preventDefault(),
            sn.lastItem.focus();
        else {
            var o = "close-pc-btn-handler" === e.target.id && ("13" === e.keyCode || "32" === e.keyCode || "Enter" === e.code || "Space" === e.code);
            if (St.PCLayout.Tab && at.pcLayer === T.PrefCenterHome && !o) {
                var n = sn.getActiveTab();
                n && (e.preventDefault(),
                n.focus())
            }
        }
    }
    ,
    ln.prototype.lastItemHandler = function(e) {
        if (9 === e.keyCode && !e.shiftKey) {
            e.preventDefault();
            var t = at.pcLayer === T.VendorList || at.pcLayer === T.CookieList;
            St.PCLayout.Tab && at.isPCVisible && !St.ShowPreferenceCenterCloseButton && !t ? sn.getActiveTab().focus() : sn.firstItem.focus()
        }
    }
    ,
    ln);
    function ln() {
        this.bannerEl = []
    }
    var cn, dn = (un.prototype.getAllGroupElements = function() {
        return document.querySelectorAll("div#onetrust-pc-sdk " + Ht.P_Category_Grp + " " + Ht.P_Category_Item)
    }
    ,
    un.prototype.toggleGrpElements = function(e, t, o) {
        At.pcName === et && St.PCTemplateUpgrade && (e = document.querySelector("#ot-desc-id-" + e.getAttribute("data-optanongroupid")));
        for (var n = e.querySelectorAll('input[class*="category-switch-handler"]'), r = 0; r < n.length; r++)
            _t.setCheckedAttribute(null, n[r], o),
            n[r] && St.PCShowConsentLabels && (n[r].parentElement.parentElement.querySelector(".ot-label-status").innerHTML = o ? St.PCActiveText : St.PCInactiveText);
        At.legIntSettings.PAllowLI && At.legIntSettings.PShowLegIntBtn && t.Type === pt && t.HasLegIntOptOut && cn.updateLegIntBtnElement(e.querySelector(".ot-leg-btn-container"), o)
    }
    ,
    un.prototype.toogleAllSubGrpElements = function(e, t) {
        if (e.ShowSubgroup) {
            var o = e.CustomGroupId
              , n = this.getGroupElementByOptanonGroupId(o.toString());
            cn.toogleSubGroupElement(n, t, e.IsLegIntToggle)
        } else
            this.updateHiddenSubGroupData(e, t)
    }
    ,
    un.prototype.toogleSubGroupElement = function(e, t, o, n) {
        void 0 === o && (o = !1),
        void 0 === n && (n = !1),
        At.pcName === et && St.PCTemplateUpgrade && (e = document.querySelector("#ot-desc-id-" + e.getAttribute("data-optanongroupid")));
        for (var r = e.querySelectorAll("li" + Ht.P_Subgrp_li), s = 0; s < r.length; s++) {
            var i = Mt.getGroupById(r[s].getAttribute("data-optanongroupid"))
              , a = i.OptanonGroupId
              , l = Mt.getParentGroup(i.Parent);
            At.legIntSettings.PAllowLI && At.legIntSettings.PShowLegIntBtn && o && i.Type === pt && i.HasLegIntOptOut && l.ShowSubgroupToggle && cn.updateLegIntBtnElement(r[s], t);
            var c = o ? "[id='ot-sub-group-id-" + a + "-leg-out']" : "[id='ot-sub-group-id-" + a + "']"
              , d = r[s].querySelector('input[class*="cookie-subgroup-handler"]' + c);
            _t.setCheckedAttribute(null, d, t),
            d && St.PCShowConsentLabels && (d.parentElement.parentElement.querySelector(".ot-label-status").innerHTML = t ? St.PCActiveText : St.PCInactiveText),
            n || (i.IsLegIntToggle = o,
            cn.toggleGrpStatus(i, t),
            i.IsLegIntToggle = !1,
            ro.toggleGroupHosts(i, t),
            at.genVenOptOutEnabled && ro.toggleGroupGenVendors(i, t))
        }
    }
    ,
    un.prototype.toggleGrpStatus = function(e, t) {
        var o = e.IsLegIntToggle && e.Type === pt ? t ? Mo : qo : t ? Oo : No;
        fo.triggerGoogleAnalyticsEvent(Po, o, e.GroupName + ": " + e.OptanonGroupId),
        t ? this.updateEnabledGroupData(e) : this.updateDisabledGroupData(e)
    }
    ,
    un.prototype.setInputID = function(e, t, o, n, r) {
        Vt(e).attr("id", t),
        Vt(e).attr("name", t),
        Vt(e).data("optanonGroupId", o),
        _t.setCheckedAttribute(null, e, n),
        Vt(e).attr("aria-labelledby", r)
    }
    ,
    un.prototype.updateEnabledGroupData = function(e) {
        if (-1 < kt.indexOf(e.Type))
            this.updateIabGroupData(e, !0);
        else {
            var t = cn.getGroupVariable()
              , o = _t.indexOf(t, e.CustomGroupId + ":0");
            -1 !== o && (t[o] = e.CustomGroupId + ":1")
        }
    }
    ,
    un.prototype.updateDisabledGroupData = function(e) {
        if (-1 < kt.indexOf(e.Type))
            this.updateIabGroupData(e, !1);
        else if (e.Status !== we) {
            var t = cn.getGroupVariable()
              , o = _t.indexOf(t, e.CustomGroupId + ":1");
            -1 !== o && (t[o] = e.CustomGroupId + ":0")
        }
    }
    ,
    un.prototype.updateIabGroupData = function(e, t) {
        if (e.Type === ht)
            this.updateIabSpecialFeatureData(e.IabGrpId, t);
        else {
            var o = e.IsLegIntToggle ? at.vendors.selectedLegInt : at.vendors.selectedPurpose;
            this.updateIabPurposeData(e.IabGrpId, t, o)
        }
    }
    ,
    un.prototype.isAllSubgroupsDisabled = function(e) {
        return !e.SubGroups.some(function(e) {
            return cn.isGroupActive(e)
        })
    }
    ,
    un.prototype.isAllSubgroupsEnabled = function(e) {
        return !e.SubGroups.some(function(e) {
            return cn.IsGroupInActive(e)
        })
    }
    ,
    un.prototype.toggleGroupHtmlElement = function(e, t, o) {
        if (At.legIntSettings.PAllowLI && At.legIntSettings.PShowLegIntBtn && e.Type === pt && e.HasLegIntOptOut) {
            var n = document.querySelector("[data-el-id=" + t + "]");
            n && this.updateLegIntBtnElement(n, o)
        }
        var r = Vt("#ot-group-id-" + t).el[0];
        _t.setCheckedAttribute(null, r, o),
        r && St.PCShowConsentLabels && (r.parentElement.querySelector(".ot-label-status").innerHTML = o ? St.PCActiveText : St.PCInactiveText)
    }
    ,
    un.prototype.updateLegIntBtnElement = function(e, t) {
        var o = At.legIntSettings
          , n = e.querySelector(".ot-obj-leg-btn-handler")
          , r = e.querySelector(".ot-remove-objection-handler");
        t ? (n.classList.add("ot-inactive-leg-btn"),
        n.classList.add("ot-leg-int-enabled"),
        n.classList.remove("ot-active-leg-btn")) : (n.classList.add("ot-active-leg-btn"),
        n.classList.remove("ot-inactive-leg-btn"),
        n.classList.remove("ot-leg-int-enabled")),
        n.querySelector("span").innerText = t ? o.PObjectLegIntText : o.PObjectionAppliedText,
        Tt(r, "display: " + (t ? "none" : "inline-block") + ";", !0)
    }
    ,
    un.prototype.isGroupActive = function(e) {
        return -1 < kt.indexOf(e.Type) ? -1 !== this.isIabPurposeActive(e) : -1 !== wt.inArray(e.CustomGroupId + ":1", cn.getGroupVariable())
    }
    ,
    un.prototype.safeFormattedGroupDescription = function(e) {
        return e && e.GroupDescription ? e.GroupDescription.replace(/\r\n/g, "<br>") : ""
    }
    ,
    un.prototype.canInsertForGroup = function(e, t) {
        void 0 === t && (t = !1);
        var o, n = null != e && void 0 !== e, r = Lt.readCookieParam(Te.OPTANON_CONSENT, "groups"), s = at.groupsConsent.join(","), i = Lt.readCookieParam(Te.OPTANON_CONSENT, "hosts"), a = at.hostsConsent.join(",");
        if (t)
            return !0;
        r === s && i === a || Qo.ensureHtmlGroupDataInitialised();
        var l = [];
        if (at.showGeneralVendors)
            for (var c = 0, d = Object.entries(at.genVendorsConsent); c < d.length; c++) {
                var u = d[c]
                  , p = u[0]
                  , h = u[1];
                l.push(p + ":" + (h ? "1" : "0"))
            }
        var g = at.groupsConsent.concat(at.hostsConsent).concat(l);
        o = _t.contains(g, e + ":1");
        var C = this.doesHostExist(e)
          , y = this.doesGroupExist(e)
          , f = at.showGeneralVendors && this.doesGenVendorExist(e)
          , k = !(!C && !f) || o && Qo.canSoftOptInInsertForGroup(e);
        return !(!n || !(o && k || !y && !C && !f))
    }
    ,
    un.prototype.setAllowAllButton = function() {
        var t = 0
          , e = St.Groups.some(function(e) {
            if (-1 === vt.indexOf(e.Type))
                return cn.IsGroupInActive(e) && t++,
                e.SubGroups.some(function(e) {
                    return cn.IsGroupInActive(e)
                }) && t++,
                1 <= t
        })
          , o = on.getAllowAllButton();
        return e ? o.show("inline-block") : o.hide(),
        sn.lastItem && sn.setLastItem(),
        e
    }
    ,
    un.prototype.getGroupVariable = function() {
        return at.groupsConsent
    }
    ,
    un.prototype.IsGroupInActive = function(e) {
        return -1 < kt.indexOf(e.Type) ? -1 === this.isIabPurposeActive(e) : !(-1 < vt.indexOf(e.Type)) && -1 === wt.inArray(e.CustomGroupId + ":1", cn.getGroupVariable())
    }
    ,
    un.prototype.updateIabPurposeData = function(t, e, o) {
        var n = _t.findIndex(o, function(e) {
            return e.split(":")[0] === t
        });
        o[n = -1 === n ? Number(t) : n] = t + ":" + e
    }
    ,
    un.prototype.updateIabSpecialFeatureData = function(t, e) {
        var o = _t.findIndex(at.vendors.selectedSpecialFeatures, function(e) {
            return e.split(":")[0] === t
        });
        o = -1 === o ? Number(t) : o,
        at.vendors.selectedSpecialFeatures[o] = t + ":" + e
    }
    ,
    un.prototype.getGroupElementByOptanonGroupId = function(e) {
        return document.querySelector("#onetrust-pc-sdk " + Ht.P_Category_Grp + " " + Ht.P_Category_Item + '[data-optanongroupid=\n            "' + e + '"]')
    }
    ,
    un.prototype.updateHiddenSubGroupData = function(e, t) {
        e.SubGroups.forEach(function(e) {
            cn.toggleGrpStatus(e, t),
            ro.toggleGroupHosts(e, t),
            at.genVenOptOutEnabled && ro.toggleGroupGenVendors(e, t)
        })
    }
    ,
    un.prototype.isIabPurposeActive = function(e) {
        var t;
        return t = e.Type === ht ? at.vendors.selectedSpecialFeatures : e.IsLegIntToggle ? at.vendors.selectedLegInt : at.vendors.selectedPurpose,
        wt.inArray(e.IabGrpId + ":true", t)
    }
    ,
    un.prototype.doesGroupExist = function(e) {
        return !!Mt.getGroupById(e)
    }
    ,
    un.prototype.doesHostExist = function(e) {
        var t = at.hostsConsent;
        return -1 !== t.indexOf(e + ":0") || -1 !== t.indexOf(e + ":1")
    }
    ,
    un.prototype.doesGenVendorExist = function(t) {
        return !!St.GeneralVendors && !!St.GeneralVendors.find(function(e) {
            return e.VendorCustomId === t
        })
    }
    ,
    un);
    function un() {}
    var pn, hn = (gn.prototype.insertCookiePolicyHtml = function() {
        if (Vt(this.ONETRUST_COOKIE_POLICY).length) {
            var e, t = document.createDocumentFragment();
            if (Qo.cookieListGroup) {
                var o = St.CookiesV2NewCookiePolicy ? ".ot-sdk-cookie-policy" : "#ot-sdk-cookie-policy-v2"
                  , n = document.createElement("div");
                Vt(n).html(Qo.cookieListGroup.html),
                n.removeChild(n.querySelector(o)),
                e = n.querySelector(".ot-sdk-cookie-policy"),
                St.useRTL && Vt(e).attr("dir", "rtl")
            }
            e.querySelector("#cookie-policy-title").innerHTML = St.CookieListTitle || "",
            e.querySelector("#cookie-policy-description").innerHTML = St.CookieListDescription || "";
            var r = e.querySelector("section")
              , s = e.querySelector("section tbody tr")
              , i = null
              , a = null;
            St.CookiesV2NewCookiePolicy || (i = e.querySelector("section.subgroup"),
            a = e.querySelector("section.subgroup tbody tr"),
            Vt(e).el.removeChild(e.querySelector("section.subgroup"))),
            Vt(e).el.removeChild(e.querySelector("section")),
            !Vt("#ot-sdk-cookie-policy").length && Vt("#optanon-cookie-policy").length ? Vt("#optanon-cookie-policy").append('<div id="ot-sdk-cookie-policy"></div>') : (Vt("#ot-sdk-cookie-policy").html(""),
            Vt("#optanon-cookie-policy").html(""));
            for (var l = 0; l < St.Groups.length; l++)
                if (St.CookiesV2NewCookiePolicy)
                    this.insertGroupHTMLV2(St, St.Groups, r, l, s, e, t);
                else if (this.insertGroupHTML(St, St.Groups, r, l, s, e, t),
                St.Groups[l].ShowSubgroup)
                    for (var c = 0; c < St.Groups[l].SubGroups.length; c++)
                        this.insertGroupHTML(St, St.Groups[l].SubGroups, i, c, a, e, t)
        }
    }
    ,
    gn.prototype.insertGroupHTMLV2 = function(a, e, t, o, l, n, r) {
        var s, c, i = this;
        function d(e) {
            return u.querySelector(e)
        }
        s = e[o];
        var u = t.cloneNode(!0)
          , p = e[o].SubGroups;
        Vt(d("tbody")).html("");
        var h = s.Hosts.slice()
          , g = s.FirstPartyCookies.slice()
          , C = h.length || g.length ? s.GroupName : "";
        if (e[o].ShowSubgroup && p.length) {
            var y = u.querySelector("section.ot-sdk-subgroup ul li");
            p.forEach(function(e) {
                var t = y.cloneNode(!0);
                h = h.concat(e.Hosts),
                g = g.concat(e.FirstPartyCookies),
                (e.Hosts.length || e.FirstPartyCookies.length) && (C += "," + e.GroupName),
                Vt(t.querySelector(".ot-sdk-cookie-policy-group")).html(e.GroupName),
                Vt(t.querySelector(".ot-sdk-cookie-policy-group-desc")).html(i.groupsClass.safeFormattedGroupDescription(e)),
                Vt(y.parentElement).append(t)
            }),
            u.querySelector("section.ot-sdk-subgroup ul").removeChild(y)
        } else
            u.removeChild(u.querySelector("section.ot-sdk-subgroup"));
        a.IsLifespanEnabled ? Vt(d("th.ot-life-span")).el.innerHTML = a.LifespanText : Vt(d("thead tr")).el.removeChild(Vt(d("th.ot-life-span")).el),
        Vt(d("th.ot-cookies")).el.innerHTML = a.CookiesText,
        Vt(d("th.ot-host")).el.innerHTML = a.CategoriesText,
        Vt(d("th.ot-cookies-type")).el.innerHTML = a.CookiesUsedText;
        var f = this.transformFirstPartyCookies(g, h, s)
          , k = !1;
        f.some(function(e) {
            return e.Description
        }) ? k = !0 : Vt(d("thead tr")).el.removeChild(Vt(d("th.ot-host-description")).el),
        Vt(d(".ot-sdk-cookie-policy-group")).html(s.GroupName),
        Vt(d(".ot-sdk-cookie-policy-group-desc")).html(this.groupsClass.safeFormattedGroupDescription(s));
        for (var v = function(e) {
            function t(e) {
                return o.querySelector(e)
            }
            var o = l.cloneNode(!0);
            Vt(t(".ot-cookies-td span")).text(""),
            Vt(t(".ot-life-span-td span")).text(""),
            Vt(t(".ot-cookies-type span")).text(""),
            Vt(t(".ot-cookies-td .ot-cookies-td-content")).html(""),
            Vt(t(".ot-host-td")).html(""),
            Vt(t(".ot-host-description-td")).html('<span class="ot-mobile-border"></span><p>' + f[e].Description + "</p> ");
            for (var n = [], r = [], s = 0; s < f[e].Cookies.length; s++)
                (c = f[e].Cookies[s]).IsSession ? n.push(a.LifespanTypeText) : n.push(Gt.getDuration(c)),
                r.push(f[e].Type ? '<a href="https://cookiepedia.co.uk/cookies/' + c.Name + '" rel="noopener" target="_blank" aria-label="' + c.Name + " " + St.NewWinTxt + '">' + c.Name + "</a>" : c.Name);
            Vt(t(".ot-host-td")).append('<span class="ot-mobile-border"></span>'),
            t(".ot-host-td").setAttribute("data-label", a.CategoriesText),
            t(".ot-cookies-td").setAttribute("data-label", a.CookiesText),
            t(".ot-cookies-type").setAttribute("data-label", a.CookiesUsedText),
            t(".ot-life-span-td").setAttribute("data-label", a.LifespanText);
            var i = f[e].DisplayName || f[e].HostName;
            Vt(t(".ot-host-td")).append(f[e].Type ? i : '<a href="https://cookiepedia.co.uk/host/' + c.Host + '" rel="noopener" target="_blank" aria-label="' + i + " " + St.NewWinTxt + '">' + i + "</a>"),
            t(".ot-cookies-td .ot-cookies-td-content").insertAdjacentHTML("beforeend", r.join(", ")),
            t(".ot-life-span-td .ot-life-span-td-content").innerText = n.join(", "),
            t(".ot-cookies-type .ot-cookies-type-td-content").innerText = f[e].Type ? St.firstPartyTxt : St.thirdPartyTxt,
            a.IsLifespanEnabled || o.removeChild(t("td.ot-life-span-td")),
            k || o.removeChild(t("td.ot-host-description-td")),
            Vt(d("tbody")).append(o)
        }, b = 0; b < f.length; b++)
            v(b);
        0 === f.length ? u.removeChild(u.querySelector("table")) : Vt(d("caption")).el.innerHTML = C,
        Vt(n).append(u),
        Vt(r).append(n),
        Vt("#ot-sdk-cookie-policy").append(r)
    }
    ,
    gn.prototype.insertGroupHTML = function(a, e, t, o, l, n, r) {
        var s, i, c, d;
        function u(e) {
            return p.querySelector(e)
        }
        s = e[o];
        var p = t.cloneNode(!0);
        Vt(u("caption")).el.innerHTML = s.GroupName,
        Vt(u("tbody")).html(""),
        Vt(u("thead tr")),
        a.IsLifespanEnabled ? Vt(u("th.life-span")).el.innerHTML = a.LifespanText : Vt(u("thead tr")).el.removeChild(Vt(u("th.life-span")).el),
        Vt(u("th.cookies")).el.innerHTML = a.CookiesText,
        Vt(u("th.host")).el.innerHTML = a.CategoriesText;
        var h = !1;
        if (s.Hosts.some(function(e) {
            return e.description
        }) ? h = !0 : Vt(u("thead tr")).el.removeChild(Vt(u("th.host-description")).el),
        Vt(u(".ot-sdk-cookie-policy-group")).html(s.GroupName),
        Vt(u(".ot-sdk-cookie-policy-group-desc")).html(this.groupsClass.safeFormattedGroupDescription(s)),
        0 < s.FirstPartyCookies.length) {
            Vt(u(".cookies-used-header")).html(a.CookiesUsedText),
            Vt(u(".cookies-list")).html("");
            for (var g = 0; g < s.FirstPartyCookies.length; g++)
                i = s.FirstPartyCookies[g],
                Vt(u(".cookies-list")).append("<li> " + Gt.getCookieLabel(i, a.AddLinksToCookiepedia) + " <li>")
        } else
            p.removeChild(u(".cookies-used-header")),
            p.removeChild(u(".cookies-list"));
        c = s.Hosts;
        for (var C = function(e) {
            function t(e) {
                return o.querySelector(e)
            }
            var o = l.cloneNode(!0);
            Vt(t(".cookies-td ul")).html(""),
            Vt(t(".life-span-td ul")).html(""),
            Vt(t(".host-td")).html(""),
            Vt(t(".host-description-td")).html('<span class="ot-mobile-border"></span><p>' + c[e].Description + "</p> ");
            for (var n = 0; n < c[e].Cookies.length; n++) {
                var r = "";
                r = (d = c[e].Cookies[n]).IsSession ? a.LifespanTypeText : 0 === d.Length ? "<1 " + a.LifespanDurationText : d.Length + " " + a.LifespanDurationText;
                var s = a.IsLifespanEnabled ? "&nbsp;(" + r + ")" : "";
                if (Vt(t(".cookies-td ul")).append("<li> " + d.Name + " " + s + " </li>"),
                a.IsLifespanEnabled) {
                    var i = d.Length ? d.Length + " days" : "N/A";
                    Vt(t(".life-span-td ul")).append("<li>" + i + "</li>")
                }
                0 === n && (Vt(t(".host-td")).append('<span class="ot-mobile-border"></span>'),
                Vt(t(".host-td")).append('<a href="https://cookiepedia.co.uk/host/' + d.Host + '" rel="noopener" target="_blank"\n                        aria-label="' + (c[e].DisplayName || c[e].HostName) + " " + St.NewWinTxt + '">' + (c[e].DisplayName || c[e].HostName) + "</a>"))
            }
            h || o.removeChild(t("td.host-description-td")),
            Vt(u("tbody")).append(o)
        }, y = 0; y < c.length; y++)
            C(y);
        0 === c.length && Vt(u("table")).el.removeChild(Vt(u("thead")).el),
        Vt(n).append(p),
        Vt(r).append(n),
        Vt("#ot-sdk-cookie-policy").append(r)
    }
    ,
    gn.prototype.transformFirstPartyCookies = function(e, t, o) {
        var n = this
          , r = t.slice();
        e.forEach(function(e) {
            n.populateHostGroup(e, r, St.firstPartyTxt)
        });
        var s = o.GeneralVendorsIds;
        this.populateGenVendor(s, o, r);
        var i = o.SubGroups;
        return i.length && i.forEach(function(e) {
            var t = e.GeneralVendorsIds;
            n.populateGenVendor(t, e, r)
        }),
        r
    }
    ,
    gn.prototype.populateGenVendor = function(e, o, n) {
        var r = this;
        e.length && e.forEach(function(t) {
            var e = St.GeneralVendors.find(function(e) {
                return e.VendorCustomId === t
            });
            e.Cookies.length && e.Cookies.forEach(function(e) {
                if (e.category === o.GroupName) {
                    var t = e.isThirdParty ? "" : St.firstPartyTxt;
                    r.populateHostGroup(e, n, t)
                }
            })
        })
    }
    ,
    gn.prototype.populateHostGroup = function(t, e, o) {
        e.some(function(e) {
            if (e.HostName === t.Host && e.Type === o)
                return e.Cookies.push(t),
                !0
        }) || e.unshift({
            HostName: t.Host,
            DisplayName: t.Host,
            HostId: "",
            Description: "",
            Type: o,
            Cookies: [t]
        })
    }
    ,
    gn);
    function gn() {
        this.groupsClass = cn,
        this.ONETRUST_COOKIE_POLICY = "#ot-sdk-cookie-policy, #optanon-cookie-policy"
    }
    var Cn, yn = function() {};
    var fn, kn = (vn.prototype.updateFilterSelection = function(e) {
        var t, o;
        void 0 === e && (e = !1),
        o = e ? (t = at.filterByCategories,
        "data-optanongroupid") : (t = at.filterByIABCategories,
        "data-purposeid");
        for (var n = Vt("#onetrust-pc-sdk .category-filter-handler").el, r = 0; r < n.length; r++) {
            var s = n[r].getAttribute(o)
              , i = -1 < t.indexOf(s);
            _t.setCheckedAttribute(null, n[r], i)
        }
    }
    ,
    vn.prototype.cancelHostFilter = function() {
        for (var e = Vt("#onetrust-pc-sdk .category-filter-handler").el, t = 0; t < e.length; t++) {
            var o = e[t].getAttribute("data-optanongroupid")
              , n = 0 <= at.filterByCategories.indexOf(o);
            _t.setCheckedAttribute(null, e[t], n)
        }
    }
    ,
    vn.prototype.updateHostFilterList = function() {
        for (var e = Vt("#onetrust-pc-sdk .category-filter-handler").el, t = 0; t < e.length; t++) {
            var o = e[t].getAttribute("data-optanongroupid");
            if (e[t].checked && at.filterByCategories.indexOf(o) < 0)
                at.filterByCategories.push(o);
            else if (!e[t].checked && -1 < at.filterByCategories.indexOf(o)) {
                var n = at.filterByCategories;
                at.filterByCategories.splice(n.indexOf(o), 1)
            }
        }
        return at.filterByCategories
    }
    ,
    vn.prototype.InitializeHostList = function() {
        at.hosts.hostTemplate = Vt(Ht.P_Vendor_List + " " + Ht.P_Host_Cntr + " li").el[0].cloneNode(!0),
        at.hosts.hostCookieTemplate = Vt(Ht.P_Vendor_List + " " + Ht.P_Host_Cntr + " " + Ht.P_Host_Opt + " li").el[0].cloneNode(!0)
    }
    ,
    vn.prototype.getCookiesForGroup = function(t) {
        var o = []
          , n = [];
        return t.FirstPartyCookies.length && t.FirstPartyCookies.forEach(function(e) {
            n.push(r(r({}, e), {
                groupName: t.GroupName
            }))
        }),
        t.Hosts.length && t.Hosts.forEach(function(e) {
            o.push(r(r({}, e), {
                isActive: "always active" === Mt.getGrpStatus(t).toLowerCase(),
                groupName: t.GroupName,
                Type: U.Host
            }))
        }),
        {
            firstPartyCookiesList: n,
            thirdPartyCookiesList: o
        }
    }
    ,
    vn.prototype.reactivateSrcTag = function(e) {
        var t = ["src"];
        e.setAttribute(t[0], e.getAttribute("data-" + t[0])),
        e.removeAttribute("data-src")
    }
    ,
    vn.prototype.reactivateScriptTag = function(e) {
        var t = e.parentNode
          , o = document.createElement(e.tagName);
        o.innerHTML = e.innerHTML;
        var n = e.attributes;
        if (0 < n.length)
            for (var r = 0; r < n.length; r++)
                "type" !== n[r].name ? o.setAttribute(n[r].name, n[r].value, !0) : o.setAttribute("type", "text/javascript", !0);
        t.appendChild(o),
        t.removeChild(e)
    }
    ,
    vn.prototype.reactivateTag = function(e, t) {
        var o = e.className.match(/optanon-category(-[a-zA-Z0-9,]+)+($|\s)/)[0].split(/optanon-category-/i)[1].split("-")
          , n = !0;
        if (o && 0 < o.length) {
            for (var r = 0; r < o.length; r++)
                if (!cn.canInsertForGroup(o[r].trim())) {
                    n = !1;
                    break
                }
            n && (t ? this.reactivateSrcTag(e) : this.reactivateScriptTag(e))
        }
    }
    ,
    vn.prototype.substitutePlainTextScriptTags = function() {
        var t = this
          , e = [].slice.call(document.querySelectorAll('script[class*="optanon-category"]'))
          , o = document.querySelectorAll('*[class*="optanon-category"]');
        Array.prototype.forEach.call(o, function(e) {
            "SCRIPT" !== e.tagName && e.hasAttribute("data-src") && t.reactivateTag(e, !0)
        }),
        Array.prototype.forEach.call(e, function(e) {
            e.hasAttribute("type") && "text/plain" === e.getAttribute("type") && t.reactivateTag(e, !1)
        })
    }
    ,
    vn);
    function vn() {}
    var bn, mn = (Pn.prototype.getSearchQuery = function(e) {
        var t = this
          , o = e.trim().split(/\s+/g);
        return new RegExp(o.map(function(e) {
            return t.escapeRegExp(e)
        }).join("|") + "(.+)?","gi")
    }
    ,
    Pn.prototype.escapeRegExp = function(e) {
        return e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")
    }
    ,
    Pn.prototype.setGlobalFilteredList = function(e) {
        return at.currentGlobalFilteredList = e
    }
    ,
    Pn.prototype.filterList = function(t, e, n) {
        var o = n && n.length;
        if ("" === t && !o)
            return this.setGlobalFilteredList(e);
        if (o) {
            var r = Vt("#onetrust-pc-sdk " + Ht.P_Fltr_Options + " input").el.length
              , s = []
              , i = !1;
            r !== n.length ? e.forEach(function(o) {
                i = !0,
                o.vendorName && n.forEach(function(e) {
                    var t = parseInt(At.iabGrpIdMap[e]);
                    -1 < e.indexOf("IFEV2_") ? (o.features || []).forEach(function(e) {
                        e.featureId === t && s.push(o)
                    }) : -1 < e.indexOf("ISFV2_") ? o.specialFeatures.forEach(function(e) {
                        e.featureId === t && s.push(o)
                    }) : -1 < e.indexOf("ISPV2_") ? (o.specialPurposes || []).forEach(function(e) {
                        e.purposeId === t && s.push(o)
                    }) : (o.purposes.forEach(function(e) {
                        e.purposeId === t && s.push(o)
                    }),
                    o.legIntPurposes.forEach(function(e) {
                        e.purposeId === t && s.push(o)
                    }))
                })
            }) : s = e,
            i && (s = s.filter(function(e, t, o) {
                return o.indexOf(e) === t
            })),
            this.setGlobalFilteredList(s)
        }
        return "" === t ? at.currentGlobalFilteredList : at.currentGlobalFilteredList.filter(function(e) {
            if (e.vendorName)
                return e.vendorName.toLowerCase().includes(t.toLowerCase())
        })
    }
    ,
    Pn.prototype.loadVendorList = function(e, t) {
        void 0 === e && (e = "");
        var o = at.vendors;
        at.currentGlobalFilteredList = o.list,
        e ? (o.searchParam = e,
        at.filterByIABCategories = [],
        fn.updateFilterSelection(!1)) : o.searchParam !== e ? o.searchParam = "" : t = at.filterByIABCategories;
        var n = this.filterList(o.searchParam, o.list, t);
        Vt("#onetrust-pc-sdk " + Ht.P_Vendor_Content).el[0].scrollTop = 0,
        this.initVendorsData(e, n)
    }
    ,
    Pn.prototype.searchVendors = function(e, t, o, n) {
        if (n) {
            var r = this.getSearchQuery(n)
              , s = 0;
            for (var i in t)
                if (i) {
                    var a = o === Q.GoogleVendor ? i : t[i].VendorCustomId
                      , l = Vt("" + e.vendorAccBtn + a).el[0].parentElement;
                    r.lastIndex = 0,
                    r.test(t[i][e.name]) ? (Tt(l, this._displayNull, !0),
                    s++) : Tt(l, "display: none;", !0)
                }
            0 === s ? (Vt(e.accId).hide(),
            o === Q.GoogleVendor ? this.hasGoogleVendors = !1 : this.hasGenVendors = !1) : (o === Q.GoogleVendor ? this.hasGoogleVendors = !0 : this.hasGenVendors = !0,
            Vt(e.accId).show()),
            this.showEmptyResults(!this.hasGoogleVendors && !this.hasIabVendors && !this.hasGenVendors, n)
        } else
            for (var c = Vt(" " + e.venListId + ' li[style^="display: none"]').el, d = 0; d < c.length; d++)
                Tt(c[d], this._displayNull, !0);
        var u = Vt("#onetrust-pc-sdk " + e.selectAllEvntHndlr).el[0];
        document.querySelector(e.venListId + ' li:not([style^="display: none"]) ' + e.ctgl + " > input[checked]") ? _t.setCheckedAttribute("", u, !0) : _t.setCheckedAttribute("", u, !1),
        document.querySelector(e.venListId + ' li:not([style^="display: none"]) ' + e.ctgl + " > input:not([checked])") ? u.parentElement.classList.add("line-through") : u.parentElement.classList.remove("line-through")
    }
    ,
    Pn.prototype.initGoogleVendors = function() {
        this.populateAddtlVendors(at.addtlVendorsList),
        this.venAdtlSelAllTglEvent()
    }
    ,
    Pn.prototype.initGenVendors = function() {
        this.populateGeneralVendors(),
        St.GenVenOptOut && St.GeneralVendors && St.GeneralVendors.length && this.genVenSelectAllTglEvent()
    }
    ,
    Pn.prototype.resetAddtlVendors = function() {
        bn.searchVendors(bn.googleSearchSelectors, at.addtlVendorsList, Q.GoogleVendor),
        this.showConsentHeader()
    }
    ,
    Pn.prototype.venAdtlSelAllTglEvent = function() {
        bn.selectAllEventHandler({
            vendorsList: '#ot-addtl-venlst li:not([style^="display: none"]) .ot-ven-adtlctgl input',
            selAllCntr: "#onetrust-pc-sdk #ot-selall-adtlvencntr",
            selAllChkbox: "#onetrust-pc-sdk #ot-selall-adtlven-handler"
        })
    }
    ,
    Pn.prototype.genVenSelectAllTglEvent = function() {
        var e = {
            vendorsList: Ht.P_Gven_List + ' li:not([style^="display: none"]) .ot-ven-gvctgl input',
            selAllCntr: "#onetrust-pc-sdk #ot-selall-gnvencntr",
            selAllChkbox: "#onetrust-pc-sdk #ot-selall-gnven-handler"
        };
        bn.selectAllEventHandler(e)
    }
    ,
    Pn.prototype.selectAllEventHandler = function(e) {
        for (var t = Vt(e.vendorsList).el, o = Vt(e.selAllCntr).el[0], n = Vt(e.selAllChkbox).el[0], r = !0, s = 0; s < t.length; s++) {
            if (!t[s].checked) {
                r = !1;
                break
            }
            r = !0
        }
        o && (r ? o.classList.remove("line-through") : o.classList.add("line-through")),
        n.checked = !0;
        for (var i = 0; i < t.length && !t[i].checked; i++)
            i !== t.length - 1 || t[i].checked || (n.checked = !1);
        _t.setCheckedAttribute("", n, n.checked)
    }
    ,
    Pn.prototype.vendorLegIntToggleEvent = function() {
        for (var e = Vt(Ht.P_Vendor_Container + ' li:not([style^="display: none"]) .' + Ht.P_Ven_Ltgl + " input").el, t = Vt("#onetrust-pc-sdk #" + Ht.P_Sel_All_Vendor_Leg_El).el[0], o = Vt("#onetrust-pc-sdk #select-all-vendor-leg-handler").el[0], n = !0, r = 0; r < e.length; r++) {
            if (!e[r].checked) {
                n = !1;
                break
            }
            n = !0
        }
        n ? t.classList.remove("line-through") : t.classList.add("line-through"),
        o.checked = !0;
        for (var s = 0; s < e.length && !e[s].checked; s++)
            s !== e.length - 1 || e[s].checked || (o.checked = !1);
        _t.setCheckedAttribute("", o, o.checked)
    }
    ,
    Pn.prototype.vendorsListEvent = function() {
        for (var e = Vt(Ht.P_Vendor_Container + ' li:not([style^="display: none"]) .' + Ht.P_Ven_Ctgl + " input").el, t = Vt("#onetrust-pc-sdk #" + Ht.P_Sel_All_Vendor_Consent_El).el[0], o = Vt("#onetrust-pc-sdk #select-all-vendor-groups-handler").el[0], n = !0, r = 0; r < e.length; r++) {
            if (!e[r].checked) {
                n = !1;
                break
            }
            n = !0
        }
        n ? t.classList.remove("line-through") : t.classList.add("line-through"),
        o.checked = !0;
        for (var s = 0; s < e.length && !e[s].checked; s++)
            s !== e.length - 1 || e[s].checked || (o.checked = !1);
        _t.setCheckedAttribute("", o, o.checked)
    }
    ,
    Pn.prototype.showEmptyResults = function(e, t, o) {
        void 0 === o && (o = !1);
        var n = Vt("#onetrust-pc-sdk #no-results");
        e ? this.setNoResultsContent(t, o) : (Vt("#onetrust-pc-sdk " + Ht.P_Vendor_Content).removeClass("no-results"),
        n.length && n.remove())
    }
    ,
    Pn.prototype.playSearchStatus = function(e) {
        var t = e ? document.querySelectorAll(Ht.P_Host_Cntr + " > li") : document.querySelectorAll(Ht.P_Vendor_Container + ' li:not([style$="none;"]),' + Ht.P_Gven_List + ' li:not([style$="none;"])')
          , o = t.length
          , n = Vt('#onetrust-pc-sdk [role="status"]');
        o ? n.text(t.length + " " + (e ? "host" : "vendor") + (1 < o ? "s" : "") + " returned.") : n.el[0].textContent = ""
    }
    ,
    Pn.prototype.setNoResultsContent = function(e, t) {
        void 0 === t && (t = !1);
        var o = Vt("#onetrust-pc-sdk #no-results").el[0];
        if (!o) {
            var n = document.createElement("div")
              , r = document.createElement("p")
              , s = document.createTextNode(" did not match any " + (t ? "hosts." : "vendors."))
              , i = document.createElement("span");
            return n.id = "no-results",
            i.id = "user-text",
            i.innerText = e,
            r.appendChild(i),
            r.appendChild(s),
            n.appendChild(r),
            Vt("#onetrust-pc-sdk " + Ht.P_Vendor_Content).addClass("no-results"),
            Vt("#vendor-search-handler").el[0].setAttribute("aria-describedby", n.id),
            Vt("#onetrust-pc-sdk " + Ht.P_Vendor_Content).append(n)
        }
        o.querySelector("span").innerText = e
    }
    ,
    Pn.prototype.searchHostList = function(e) {
        var t = at.currentGlobalFilteredList;
        e && (t = this.searchList(e, t)),
        this.initHostData(e, t)
    }
    ,
    Pn.prototype.searchList = function(e, t) {
        var o = this.getSearchQuery(e);
        return t.filter(function(e) {
            return o.lastIndex = 0,
            o.test(e.DisplayName || e.HostName)
        })
    }
    ,
    Pn.prototype.setListSearchValues = function() {
        var e = St.PCenterVendorSearchAriaLabel
          , t = St.PCenterVendorListSearch
          , o = St.PCenterVendorsListText;
        St.showCookieList && !St.GeneralVendorsEnabled && (e = St.PCenterCookieSearchAriaLabel,
        t = St.PCenterCookieListSearch,
        o = St.PCenterCookiesListText),
        document.querySelector("#onetrust-pc-sdk " + Ht.P_Vendor_Title).innerText = o;
        var n = Vt("#onetrust-pc-sdk " + Ht.P_Vendor_Search_Input);
        n.el[0].placeholder = t,
        n.attr("aria-label", e)
    }
    ,
    Pn.prototype.initHostData = function(e, d) {
        var u = this;
        at.optanonHostList = d;
        var p = lt.isV2Template
          , h = At.pcName
          , g = Gt.isOptOutEnabled()
          , C = !1;
        this.setBackBtnTxt(),
        Vt(Ht.P_Vendor_List + " #select-all-text-container p").html(St.PCenterAllowAllConsentText),
        Vt("#onetrust-pc-sdk " + Ht.P_Vendor_Content + " ul" + Ht.P_Host_Cntr).html(""),
        this.showEmptyResults(d && 0 === d.length, e, !0),
        !lt.isV2Template && h === et || this.setListSearchValues(),
        Vt("#filter-btn-handler").el[0].setAttribute(this.ARIA_LABEL_ATTRIBUTE, St.PCenterCookieListFilterAria),
        Vt("#filter-btn-handler title").html(St.PCenterCookieListFilterAria),
        lt.isV2Template && Vt("#ot-sel-blk span:first-child").html(St.PCenterAllowAllConsentText || St.ConsentText);
        for (var t = function(o) {
            var n = at.hosts.hostTemplate.cloneNode(!0)
              , e = n.querySelector("." + Ht.P_Host_Bx)
              , t = d[o].DisplayName || d[o].HostName;
            e && _t.setHtmlAttributes(e, {
                id: "host-" + o,
                name: "host-" + o,
                "aria-label": t + " " + St.PCViewCookiesText,
                "aria-controls": "ot-host-acc-txt-" + o
            });
            var r = n.querySelector(Ht.P_Acc_Txt);
            if (r && _t.setHtmlAttributes(r, {
                id: "ot-host-acc-txt-" + o,
                role: "region",
                "aria-labelledby": e.id
            }),
            !g || d[o].isFirstParty) {
                var s = n.querySelector(".ot-host-tgl");
                s && s.parentElement.removeChild(s)
            } else {
                var i = void 0;
                p ? ((i = Cn.chkboxEl.cloneNode(!0)).classList.add("ot-host-tgl"),
                i.querySelector("input").classList.add("host-checkbox-handler"),
                h === et ? n.querySelector(Ht.P_Host_Hdr).insertAdjacentElement("beforeBegin", i) : n.querySelector(Ht.P_Tgl_Cntr).insertAdjacentElement("beforeEnd", i)) : i = n.querySelector(".ot-host-tgl"),
                _t.setHtmlAttributes(i.querySelector("input"), {
                    id: "ot-host-chkbox-" + o,
                    "aria-label": t,
                    hostId: d[o].HostId,
                    ckType: d[o].Type
                }),
                i.querySelector("label").setAttribute("for", "ot-host-chkbox-" + o),
                (d[o].Type === U.GenVendor ? at.genVendorsConsent[d[o].HostId] : -1 !== at.hostsConsent.indexOf(d[o].HostId + ":1")) ? (_t.setCheckedAttribute(null, i.querySelector("input"), !0),
                d[o].isActive ? _t.setDisabledAttribute(null, i.querySelector("input"), !0) : C = C || !0) : (C = !0,
                _t.setCheckedAttribute(null, i.querySelector("input"), !1)),
                i.querySelector(Ht.P_Label_Txt).innerText = t
            }
            if (St.PCAccordionStyle === W.PlusMinus)
                n.querySelector(Ht.P_Acc_Header).insertAdjacentElement("afterBegin", Cn.plusMinusEl.cloneNode(!0));
            else if (p) {
                var a = Cn.arrowEl.cloneNode(!0);
                h === et ? n.querySelector(Ht.P_Host_View_Cookies).insertAdjacentElement("afterend", a) : n.querySelector(Ht.P_Tgl_Cntr).insertAdjacentElement("beforeEnd", a)
            }
            St.AddLinksToCookiepedia && !d[o].isFirstParty && (t = '\n                    <a  class="cookie-label"\n                        href="http://cookiepedia.co.uk/host/' + d[o].HostName + '"\n                        rel="noopener"\n                        target="_blank"\n                    >\n                        ' + t + '&nbsp;<span class="ot-scrn-rdr">' + St.NewWinTxt + "</span>\n                    </a>\n                "),
            n.querySelector(Ht.P_Host_Title).innerHTML = t,
            n.querySelector(Ht.P_Host_Desc).innerHTML = d[o].Description,
            d[o].PrivacyPolicy && St.pcShowCookieHost && n.querySelector(Ht.P_Host_Desc).insertAdjacentHTML("afterend", '<a href="' + d[o].PrivacyPolicy + '" rel="noopener" target="_blank">' + (p ? St.PCGVenPolicyTxt : St.PCCookiePolicyText) + '&nbsp;<span class="ot-scrn-rdr">' + St.NewWinTxt + "</span></a>");
            var l = n.querySelector(Ht.P_Host_View_Cookies);
            if (at.showGeneralVendors && !d[o].Cookies.length ? (_t.removeChild(l),
            Vt(n).addClass("ot-hide-acc")) : St.PCViewCookiesText && (l.innerHTML = St.PCViewCookiesText),
            !d[o].Description || !St.pcShowCookieHost) {
                var c = n.querySelector(Ht.P_Host_Desc);
                c.parentElement.removeChild(c)
            }
            Vt(n.querySelector(Ht.P_Host_Opt)).html(""),
            d[o].Cookies.forEach(function(e) {
                var t = u.getCookieElement(e, d[o]);
                Vt(n.querySelector(Ht.P_Host_Opt)).append(t)
            }),
            Vt("#onetrust-pc-sdk " + Ht.P_Vendor_Content + " ul" + Ht.P_Host_Cntr).append(n)
        }, o = 0; o < d.length; o++)
            t(o);
        var n = 1 === d.length && d[0].HostName === St.PCFirstPartyCookieListText;
        if (Gt.isOptOutEnabled() && !n) {
            _t.setDisabledAttribute("#onetrust-pc-sdk #select-all-hosts-groups-handler", null, !C);
            for (var r = Vt("#onetrust-pc-sdk " + Ht.P_Host_Cntr + " .ot-host-tgl input").el, s = 0; s < r.length; s++)
                r[s].addEventListener("click", this.hostsListEvent);
            Vt("#onetrust-pc-sdk " + Ht.P_Select_Cntr).removeClass("ot-hide"),
            this.hostsListEvent()
        } else
            Vt("#onetrust-pc-sdk " + Ht.P_Select_Cntr).addClass("ot-hide")
    }
    ,
    Pn.prototype.hostsListEvent = function() {
        for (var e = Vt("#onetrust-pc-sdk " + Ht.P_Host_Cntr + " .ot-host-tgl input").el, t = Vt("#onetrust-pc-sdk #" + Ht.P_Sel_All_Host_El).el[0], o = Vt("#onetrust-pc-sdk #select-all-hosts-groups-handler").el[0], n = Vt("#onetrust-pc-sdk " + Ht.P_Cnsnt_Header).el[0], r = !0, s = 0; s < e.length; s++) {
            if (!e[s].checked) {
                r = !1;
                break
            }
            r = !0
        }
        r ? t.classList.remove("line-through") : t.classList.add("line-through"),
        o.checked = !0;
        for (var i = 0; i < e.length && !e[i].checked; i++)
            i !== e.length - 1 || e[i].checked || (o.checked = !1);
        _t.setCheckedAttribute("", o, o.checked),
        o && n && o.setAttribute(this.ARIA_LABEL_ATTRIBUTE, n.textContent + " " + St.PCenterSelectAllVendorsText)
    }
    ,
    Pn.prototype.loadHostList = function(e, o) {
        void 0 === e && (e = "");
        var n = []
          , r = []
          , t = [];
        if (at.cookieListType !== z.GenVen && (St.Groups.forEach(function(e) {
            C(e.SubGroups, [e]).forEach(function(e) {
                if (o.length) {
                    if (-1 !== o.indexOf(e.CustomGroupId)) {
                        var t = fn.getCookiesForGroup(e);
                        r = C(r, t.firstPartyCookiesList),
                        n = C(n, t.thirdPartyCookiesList)
                    }
                } else
                    t = fn.getCookiesForGroup(e),
                    r = C(r, t.firstPartyCookiesList),
                    n = C(n, t.thirdPartyCookiesList)
            })
        }),
        r.length && n.unshift({
            HostName: St.PCFirstPartyCookieListText,
            DisplayName: St.PCFirstPartyCookieListText,
            HostId: "first-party-cookies-group",
            isFirstParty: !0,
            Cookies: r,
            Description: ""
        })),
        at.showGeneralVendors) {
            var s = this.getFilteredGenVendorsList(o)
              , i = this.mapGenVendorListToHostFormat(s);
            t = C(n, i)
        } else
            t = n;
        at.currentGlobalFilteredList = t,
        this.initHostData(e, t)
    }
    ,
    Pn.prototype.mapGenVendorListToHostFormat = function(e) {
        return e.map(function(e) {
            return {
                Cookies: e.Cookies,
                DisplayName: e.Name,
                HostName: e.Name,
                HostId: e.VendorCustomId,
                Description: e.Description,
                Type: U.GenVendor,
                PrivacyPolicy: e.PrivacyPolicyUrl,
                isActive: -1 < at.alwaysActiveGenVendors.indexOf(e.VendorCustomId)
            }
        })
    }
    ,
    Pn.prototype.mapGenVendorToHostFormat = function(e) {
        return {
            Cookies: e.Cookies,
            DisplayName: e.Name,
            HostName: e.Name,
            HostId: e.VendorCustomId,
            Description: e.Description,
            Type: U.GenVendor
        }
    }
    ,
    Pn.prototype.getFilteredGenVendorsList = function(t) {
        var o = []
          , e = [];
        if (t.length) {
            St.Groups.forEach(function(e) {
                C(e.SubGroups, [e]).forEach(function(e) {
                    -1 !== t.indexOf(e.CustomGroupId) && e.GeneralVendorsIds && e.GeneralVendorsIds.forEach(function(e) {
                        o.push(e)
                    })
                })
            });
            var n = St.GeneralVendors;
            return o.length && (e = n.filter(function(e) {
                if (-1 < o.indexOf(e.VendorCustomId))
                    return e
            })),
            e
        }
        return St.GeneralVendors
    }
    ,
    Pn.prototype.initVendorsData = function(e, t) {
        var o = this
          , n = t
          , r = at.vendors.list;
        if (this.setBackBtnTxt(),
        Vt(Ht.P_Vendor_List + " #select-all-text-container p").html(St.PCenterAllowAllConsentText),
        lt.isV2Template && (Vt("#ot-sel-blk span:first-child").html(St.PCenterAllowAllConsentText || St.ConsentText),
        Vt("#ot-sel-blk span:last-child").html(St.LegitInterestText),
        Vt("#onetrust-pc-sdk " + Ht.P_Cnsnt_Header).html(St.PCenterAllowAllConsentText),
        At.legIntSettings.PAllowLI && !At.legIntSettings.PShowLegIntBtn && Vt("#onetrust-pc-sdk .ot-sel-all-hdr .ot-li-hdr").html(St.PCenterLegitInterestText),
        At.legIntSettings.PAllowLI && !At.legIntSettings.PShowLegIntBtn || Tt(Vt("#ot-sel-blk span:first-child").el[0], "max-width: 100%;", !0)),
        Vt("#onetrust-pc-sdk #filter-btn-handler").el[0].setAttribute(this.ARIA_LABEL_ATTRIBUTE, St.PCenterVendorListFilterAria),
        Vt("#onetrust-pc-sdk #filter-btn-handler title").html(St.PCenterVendorListFilterAria),
        this.hasIabVendors = 0 < n.length,
        this.showEmptyResults(!this.hasGoogleVendors && !this.hasIabVendors && !this.hasGenVendors, e, !1),
        0 === n.length ? Vt("#ot-lst-cnt .ot-acc-cntr").hide() : Vt("#ot-lst-cnt .ot-acc-cntr").show(),
        Vt("#onetrust-pc-sdk " + Ht.P_Vendor_Container + " ." + Ht.P_Ven_Bx).length !== r.length && this.attachVendorsToDOM(),
        n.length !== r.length)
            r.forEach(function(e) {
                var t = Vt(Ht.P_Vendor_Container + " #IAB" + e.vendorId).el[0].parentElement;
                -1 === n.indexOf(e) ? Tt(t, "display: none;", !0) : Tt(t, o._displayNull, !0)
            });
        else
            for (var s = Vt(Ht.P_Vendor_Container + ' li[style^="display: none"]').el, i = 0; i < s.length; i++)
                Tt(s[i], this._displayNull, !0);
        !lt.isV2Template && At.pcName === et || this.setListSearchValues();
        var a = document.querySelector("#vdr-lst-dsc");
        if (!a && St.PCenterVendorListDescText)
            if ((a = document.createElement("p")).id = "vdr-lst-dsc",
            Vt(a).html(St.PCenterVendorListDescText),
            At.pcName !== et && At.pcName !== $e) {
                var l = document.querySelector("#onetrust-pc-sdk " + Ht.P_Vendor_Title_Elm);
                l && l.insertAdjacentElement("afterend", a)
            } else {
                var c = document.querySelector(Ht.P_Vendor_Content + " .ot-sdk-row");
                c && c.insertAdjacentElement("beforebegin", a)
            }
        Vt("#onetrust-pc-sdk " + Ht.P_Select_Cntr).removeClass("ot-hide"),
        this.vendorsListEvent(),
        At.legIntSettings.PAllowLI && this.vendorLegIntToggleEvent()
    }
    ,
    Pn.prototype.updateVendorsDOMToggleStatus = function(e) {
        for (var t = Vt(Ht.P_Vendor_Container + " " + Ht.P_Tgl_Cntr).el, o = 0; o < t.length; o++) {
            var n = t[o].querySelector("." + Ht.P_Ven_Ctgl + " input")
              , r = t[o].querySelector("." + Ht.P_Ven_Ltgl + " input");
            n && _t.setCheckedAttribute("", n, e),
            r && _t.setCheckedAttribute("", r, e)
        }
        var s = Vt("#onetrust-pc-sdk #select-all-vendor-leg-handler").el[0];
        s && (s.parentElement.classList.remove("line-through"),
        _t.setCheckedAttribute("", s, e));
        var i = Vt("#onetrust-pc-sdk #select-all-vendor-groups-handler").el[0];
        i && (i.parentElement.classList.remove("line-through"),
        _t.setCheckedAttribute("", i, e)),
        St.UseGoogleVendors && this.updateGoogleCheckbox(e),
        at.showGeneralVendors && St.GenVenOptOut && this.updateGenVenCheckbox(e)
    }
    ,
    Pn.prototype.updateGenVenCheckbox = function(e) {
        for (var t = Vt(Ht.P_Gven_List + " .ot-ven-gvctgl input").el, o = 0; o < t.length; o++)
            _t.setCheckedAttribute("", t[o], e);
        var n = Vt("#onetrust-pc-sdk #ot-selall-gnven-handler").el[0];
        n && (n.parentElement.classList.remove("line-through"),
        _t.setCheckedAttribute("", n, e))
    }
    ,
    Pn.prototype.updateGoogleCheckbox = function(e) {
        for (var t = Vt("#ot-addtl-venlst .ot-tgl-cntr input").el, o = 0; o < t.length; o++)
            _t.setCheckedAttribute("", t[o], e);
        var n = Vt("#onetrust-pc-sdk #ot-selall-adtlven-handler").el[0];
        n && (n.parentElement.classList.remove("line-through"),
        _t.setCheckedAttribute("", n, e))
    }
    ,
    Pn.prototype.updateVendorDisclosure = function(e, t) {
        var o = Vt(Ht.P_Vendor_Container + " #IAB" + e).el[0].parentElement;
        if (t && t.disclosures) {
            var r = o.querySelector(Ht.P_Ven_Dets)
              , s = o.querySelector(Ht.P_Ven_Disc).cloneNode(!0)
              , n = s.cloneNode(!0);
            n.innerHTML = "<p><b>" + St.PCenterVendorListDisclosure + ": </b></p>",
            r.insertAdjacentElement("beforeend", n),
            t.disclosures.forEach(function(e) {
                var t = s.cloneNode(!0)
                  , o = "<p>" + St.PCenterVendorListStorageIdentifier + " </p> <p>" + (e.name || e.identifier) + " </p>";
                if (e.type && (o += "<p>" + St.PCenterVendorListStorageType + " </p> <p>" + e.type + " </p>"),
                e.maxAgeSeconds) {
                    var n = _t.calculateCookieLifespan(e.maxAgeSeconds);
                    o += "<p>" + St.PCenterVendorListLifespan + " </p> <p>" + n + " </p>"
                }
                e.domain && (o += "<p>" + St.PCenterVendorListStorageDomain + " </p> <p>" + e.domain + " </p>"),
                e.purposes && (o += "<p>" + St.PCenterVendorListStoragePurposes + " </p> <p>" + e.purposes + " </p>"),
                t.innerHTML = o,
                r.insertAdjacentElement("beforeend", t)
            })
        }
    }
    ,
    Pn.prototype.addDescriptionElement = function(e, t) {
        var o = document.createElement("p");
        o.innerHTML = t || "",
        e.parentNode.insertBefore(o, e)
    }
    ,
    Pn.prototype.attachVendorsToDOM = function() {
        var R, q, M = at.vendors.list, U = St.IabType, j = At.pcName, z = at.vendors.vendorTemplate.cloneNode(!0);
        at.discVendors = {},
        lt.isV2Template && (R = z.querySelector(".ot-ven-pur").cloneNode(!0),
        q = z.querySelector(Ht.P_Ven_Disc).cloneNode(!0),
        Vt(z.querySelector(".ot-ven-dets")).html(""));
        for (var e = function(e) {
            var t = z.cloneNode(!0)
              , o = M[e].vendorId
              , n = M[e].vendorName
              , r = t.querySelector("." + Ht.P_Ven_Bx)
              , s = at.vendorsSetting[o]
              , i = t.querySelector(Ht.P_Ven_Link);
            _t.setHtmlAttributes(r, {
                id: "IAB" + o,
                name: "IAB" + o,
                "aria-controls": "IAB-ACC-TXT" + o,
                "aria-label": n
            }),
            r.nextElementSibling.setAttribute("for", "IAB" + o),
            t.querySelector(Ht.P_Ven_Name).innerText = n,
            _t.setHtmlAttributes(i, {
                href: M[e].policyUrl,
                rel: "noopener",
                target: "_blank"
            }),
            i.innerHTML = St.PCenterViewPrivacyPolicyText + "&nbsp;<span class='ot-scrn-rdr'>" + n + " " + St.NewWinTxt + "</span>";
            var a = lt.isV2Template ? Cn.chkboxEl.cloneNode(!0) : t.querySelector(".ot-checkbox")
              , l = a.cloneNode(!0)
              , c = a.cloneNode(!0)
              , d = t.querySelector(Ht.P_Tgl_Cntr);
            lt.isV2Template || a.parentElement.removeChild(a);
            var u = t.querySelector(Ht.P_Arrw_Cntr);
            if (s.consent) {
                c.classList.add(Ht.P_Ven_Ctgl);
                var p = -1 !== wt.inArray(o + ":true", at.vendors.selectedVendors)
                  , h = c.querySelector("input");
                if (lt.isV2Template) {
                    h.classList.add("vendor-checkbox-handler");
                    var g = c.querySelector(".ot-label-status");
                    St.PCShowConsentLabels ? g.innerHTML = p ? St.PCActiveText : St.PCInactiveText : _t.removeChild(g)
                }
                _t.setCheckedAttribute("", h, p),
                _t.setHtmlAttributes(h, {
                    id: Ht.P_Vendor_CheckBx + "-" + e,
                    vendorid: o,
                    "aria-label": n
                }),
                c.querySelector("label").setAttribute("for", Ht.P_Vendor_CheckBx + "-" + e),
                c.querySelector(Ht.P_Label_Txt).textContent = n,
                j === et ? St.PCTemplateUpgrade ? d.insertAdjacentElement("beforeend", c) : Vt(d).append(c) : d.insertBefore(c, u)
            }
            if (s.legInt && !s.specialPurposesOnly) {
                var C = -1 !== wt.inArray(o + ":true", at.vendors.selectedLegIntVendors);
                if (At.legIntSettings.PShowLegIntBtn) {
                    var y = Ut.generateLegIntButtonElements(C, o, !0);
                    t.querySelector(Ht.P_Acc_Txt).insertAdjacentHTML("beforeend", y);
                    var f = t.querySelector(".ot-remove-objection-handler");
                    f && Tt(f, f.getAttribute("data-style"))
                } else
                    h = l.querySelector("input"),
                    lt.isV2Template && (h.classList.add("vendor-checkbox-handler"),
                    g = l.querySelector(".ot-label-status"),
                    St.PCShowConsentLabels ? g.innerHTML = C ? St.PCActiveText : St.PCInactiveText : _t.removeChild(g)),
                    l.classList.add(Ht.P_Ven_Ltgl),
                    h.classList.remove("vendor-checkbox-handler"),
                    h.classList.add("vendor-leg-checkbox-handler"),
                    _t.setCheckedAttribute("", h, C),
                    _t.setHtmlAttributes(h, {
                        id: Ht.P_Vendor_LegCheckBx + "-" + e,
                        "leg-vendorid": o,
                        "aria-label": n
                    }),
                    l.querySelector("label").setAttribute("for", Ht.P_Vendor_LegCheckBx + "-" + e),
                    l.querySelector(Ht.P_Label_Txt).textContent = n,
                    t.querySelector("." + Ht.P_Ven_Ctgl) && (u = t.querySelector("." + Ht.P_Ven_Ctgl)),
                    j !== et || d.children.length ? d.insertBefore(l, u) : Vt(d).append(l),
                    s.consent || j !== et || l.classList.add(Ht.P_Ven_Ltgl_Only)
            }
            lt.isV2Template && (d.insertAdjacentElement("beforeend", Cn.arrowEl.cloneNode(!0)),
            St.PCAccordionStyle !== W.Caret && t.querySelector(".ot-ven-hdr").insertAdjacentElement("beforebegin", Cn.plusMinusEl.cloneNode(!0)));
            var k = t.querySelector(Ht.P_Acc_Txt);
            if (k && _t.setHtmlAttributes(k, {
                id: "IAB-ACC-TXT" + o,
                "aria-labelledby": "IAB-ACC-TXT" + o,
                role: "region"
            }),
            M[e].deviceStorageDisclosureUrl && (_t.setHtmlAttributes(r, {
                "disc-vid": o
            }),
            at.discVendors[o] = {
                isFetched: !1,
                disclosureUrl: M[e].deviceStorageDisclosureUrl
            }),
            lt.isV2Template)
                K.populateVendorDetailsHtml(t, R, M[e], q);
            else {
                var v = t.querySelector(".vendor-option-purpose")
                  , b = t.querySelector(".vendor-consent-group")
                  , m = t.querySelector(".legitimate-interest")
                  , P = t.querySelector(".legitimate-interest-group")
                  , A = t.querySelector(".spl-purpose")
                  , S = t.querySelector(".spl-purpose-grp")
                  , T = t.querySelector(".vendor-feature")
                  , I = t.querySelector(".vendor-feature-group")
                  , L = t.querySelector(".vendor-spl-feature")
                  , _ = t.querySelector(".vendor-spl-feature-grp")
                  , B = b.cloneNode(!0)
                  , E = P.cloneNode(!0)
                  , w = S.cloneNode(!0)
                  , x = I.cloneNode(!0)
                  , V = _.cloneNode(!0);
                q = t.querySelector(Ht.P_Ven_Disc);
                var G = t.querySelector(Ht.P_Ven_Dets)
                  , O = q.cloneNode(!0);
                q.parentElement.removeChild(q),
                K.attachVendorDisclosure(O, M[e]),
                G.insertAdjacentElement("afterbegin", O),
                b.parentElement.removeChild(b),
                s.consent && (Vt(v.querySelector("p")).text(St.ConsentPurposesText),
                M[e].purposes.forEach(function(e) {
                    Vt(B.querySelector(".consent-category")).text(e.purposeName);
                    var t = B.querySelector(".consent-status");
                    t && B.removeChild(t),
                    m.insertAdjacentHTML("beforebegin", B.outerHTML)
                })),
                s.consent || v.parentElement.removeChild(v);
                var N = E.querySelector(".vendor-opt-out-handler");
                "IAB2" === St.IabType && N.parentElement.removeChild(N),
                P.parentElement.removeChild(P),
                s.legInt && (Vt(m.querySelector("p")).text(St.LegitimateInterestPurposesText),
                At.legIntSettings.PAllowLI && "IAB2" === St.IabType && M[e].legIntPurposes.forEach(function(e) {
                    Vt(E.querySelector(".consent-category")).text(e.purposeName),
                    m.insertAdjacentHTML("afterend", E.outerHTML)
                })),
                s.legInt || m.parentElement.removeChild(m),
                S.parentElement.removeChild(S),
                "IAB2" === U && M[e].specialPurposes.forEach(function(e) {
                    Vt(w.querySelector(".consent-category")).text(e.purposeName),
                    A.insertAdjacentHTML("afterend", w.outerHTML)
                }),
                0 === M[e].specialPurposes.length ? A.parentElement.removeChild(A) : Vt(A.querySelector("p")).text(St.SpecialPurposesText),
                I.parentElement.removeChild(I),
                Vt(T.querySelector("p")).text(St.FeaturesText),
                M[e].features.forEach(function(e) {
                    Vt(x.querySelector(".consent-category")).text(e.featureName),
                    T.insertAdjacentHTML("afterend", x.outerHTML)
                }),
                0 === M[e].features.length && T.parentElement.removeChild(T),
                L.parentElement.removeChild(_),
                "IAB2" === U && M[e].specialFeatures.forEach(function(e) {
                    Vt(V.querySelector(".consent-category")).text(e.featureName),
                    L.insertAdjacentHTML("afterend", V.outerHTML)
                }),
                0 === M[e].specialFeatures.length ? L.parentElement.removeChild(L) : Vt(L.querySelector("p")).text(St.SpecialFeaturesText);
                var D = r.parentElement.querySelector(".vendor-purposes p");
                D.parentElement.removeChild(D)
            }
            Vt("#onetrust-pc-sdk " + Ht.P_Vendor_Container).append(t);
            var H = Vt("#onetrust-pc-sdk " + Ht.P_Sel_All_Vendor_Consent_Handler).el[0];
            H && H.setAttribute(K.ARIA_LABEL_ATTRIBUTE, St.PCenterSelectAllVendorsText + " " + St.LegitInterestText);
            var F = Vt("#onetrust-pc-sdk " + Ht.P_Sel_All_Vendor_Leg_Handler).el[0];
            F && F.setAttribute(K.ARIA_LABEL_ATTRIBUTE, St.PCenterSelectAllVendorsText + " " + St.ConsentText)
        }, K = this, t = 0; t < M.length; t++)
            e(t)
    }
    ,
    Pn.prototype.populateVendorDetailsHtml = function(e, t, o, n) {
        var r = e.querySelector(".ot-ven-dets")
          , s = at.vendorsSetting[o.vendorId]
          , i = n.cloneNode(!0);
        if (this.attachVendorDisclosure(i, o),
        r.insertAdjacentElement("beforeEnd", i),
        s.consent) {
            var a = t.cloneNode(!0)
              , l = "<h4>" + St.ConsentPurposesText + "</h4>";
            l += "<ul>",
            o.purposes.forEach(function(e) {
                l += "<li><p>" + e.purposeName + "</p></li>"
            }),
            l += "</ul>",
            a.innerHTML = l,
            r.insertAdjacentElement("beforeEnd", a)
        }
        if (s.legInt && o.legIntPurposes.length) {
            var c = t.cloneNode(!0)
              , d = "<h4>" + St.LegitimateInterestPurposesText + "</h4>";
            d += "<ul>",
            o.legIntPurposes.forEach(function(e) {
                d += "<li><p>" + e.purposeName + "</p></li>"
            }),
            d += "</ul>",
            c.innerHTML = d,
            r.insertAdjacentElement("beforeEnd", c)
        }
        if ("IAB2" === At.iabType && o.specialPurposes.length) {
            var u = t.cloneNode(!0)
              , p = "<h4>" + St.SpecialPurposesText + "</h4>";
            p += "<ul>",
            o.specialPurposes.forEach(function(e) {
                p += "<li><p>" + e.purposeName + "</p></li>"
            }),
            p += "</ul>",
            u.innerHTML = p,
            r.insertAdjacentElement("beforeEnd", u)
        }
        if (o.features.length) {
            var h = t.cloneNode(!0)
              , g = "<h4>" + St.FeaturesText + "</h4>";
            g += "<ul>",
            o.features.forEach(function(e) {
                g += "<li><p>" + e.featureName + "</p></li>"
            }),
            g += "</ul>",
            h.innerHTML = g,
            r.insertAdjacentElement("beforeEnd", h)
        }
        if ("IAB2" === At.iabType && o.specialFeatures.length) {
            var C = t.cloneNode(!0)
              , y = "<h4>" + St.SpecialFeaturesText + "</h4>";
            y += "<ul>",
            o.specialFeatures.forEach(function(e) {
                y += "<li><p>" + e.featureName + "</p></li>"
            }),
            y += "</ul>",
            C.innerHTML = y,
            r.insertAdjacentElement("beforeEnd", C)
        }
    }
    ,
    Pn.prototype.InitializeVendorList = function() {
        if (at.vendors.list = at.iabData ? at.iabData.vendors : null,
        at.vendors.vendorTemplate = Vt(Ht.P_Vendor_Container + " li").el[0].cloneNode(!0),
        Vt("#onetrust-pc-sdk " + Ht.P_Vendor_Container).html(""),
        !lt.isV2Template && At.pcName === et) {
            var e, t = at.vendors.vendorTemplate.querySelectorAll(Ht.P_Acc_Header);
            At.legIntSettings.PAllowLI && "IAB2" === At.iabType ? (e = t[0]).parentElement.removeChild(e) : (e = t[1]).parentElement.removeChild(e)
        }
    }
    ,
    Pn.prototype.cancelVendorFilter = function() {
        for (var e = Vt("#onetrust-pc-sdk .category-filter-handler").el, t = 0; t < e.length; t++) {
            var o = e[t].getAttribute("data-purposeid")
              , n = 0 <= at.filterByIABCategories.indexOf(o);
            _t.setCheckedAttribute(null, e[t], n)
        }
    }
    ,
    Pn.prototype.attachVendorDisclosure = function(e, t) {
        var o = "<h4>" + St.PCenterVendorListLifespan + " :</h4><span> " + t.cookieMaxAge + "</span>";
        t.usesNonCookieAccess && (o += "<p>" + St.PCenterVendorListNonCookieUsage + "</p>"),
        e.innerHTML = o
    }
    ,
    Pn.prototype.updateVendorFilterList = function() {
        for (var e = Vt("#onetrust-pc-sdk .category-filter-handler").el, t = 0; t < e.length; t++) {
            var o = e[t].getAttribute("data-purposeid");
            if (e[t].checked && at.filterByIABCategories.indexOf(o) < 0)
                at.filterByIABCategories.push(o);
            else if (!e[t].checked && -1 < at.filterByIABCategories.indexOf(o)) {
                var n = at.filterByIABCategories;
                at.filterByIABCategories.splice(n.indexOf(o), 1)
            }
        }
        return at.filterByIABCategories
    }
    ,
    Pn.prototype.saveVendorStatus = function() {
        var e = at.vendors
          , t = at.oneTrustIABConsent;
        t.purpose = e.selectedPurpose.slice(),
        t.legimateInterest = e.selectedLegInt.slice(),
        t.vendors = e.selectedVendors.slice(),
        t.legIntVendors = e.selectedLegIntVendors.slice(),
        t.specialFeatures = e.selectedSpecialFeatures.slice();
        var o = at.addtlVendors;
        o.vendorConsent = Object.keys(o.vendorSelected)
    }
    ,
    Pn.prototype.updateIabVariableReference = function() {
        var e = at.oneTrustIABConsent
          , t = at.vendors;
        t.selectedPurpose = e.purpose.slice(),
        t.selectedLegInt = e.legimateInterest.slice(),
        t.selectedVendors = e.vendors.slice(),
        t.selectedLegIntVendors = e.legIntVendors.slice(),
        t.selectedSpecialFeatures = e.specialFeatures.slice();
        var o = at.addtlVendors;
        o.vendorSelected = {},
        o.vendorConsent.forEach(function(e) {
            o.vendorSelected[e] = !0
        })
    }
    ,
    Pn.prototype.allowAllhandler = function() {
        Qo.initializeIABData(!0, !1)
    }
    ,
    Pn.prototype.rejectAllHandler = function() {
        Qo.initializeIABData(!1, !0)
    }
    ,
    Pn.prototype.populateAddtlVendors = function(e) {
        var t = St.PCAccordionStyle === W.Caret ? Cn.arrowEl.cloneNode(!0) : Cn.plusMinusEl.cloneNode(!0)
          , o = document.querySelector("#onetrust-pc-sdk .ot-sel-all-chkbox")
          , n = o.cloneNode(!0);
        _t.removeChild(n.querySelector("#ot-selall-hostcntr")),
        _t.removeChild(o.querySelector("#ot-selall-vencntr")),
        _t.removeChild(o.querySelector("#ot-selall-licntr"));
        var r = Cn.accordionEl.cloneNode(!0);
        r.classList.add("ot-iab-acc"),
        r.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", t.cloneNode(!0)),
        r.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "<div class='ot-vensec-title'>" + St.PCIABVendorsText + "</div>"),
        r.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", n),
        r.querySelector(".ot-acc-txt").insertAdjacentElement("beforeEnd", Vt("#ot-ven-lst").el[0]),
        Vt("#ot-lst-cnt .ot-sdk-column").append(r),
        r.querySelector("button").setAttribute(this.ARIA_LABEL_ATTRIBUTE, St.PCIABVendorsText),
        this.iabAccInit = !0;
        var s = n.cloneNode(!0);
        _t.removeChild(s.querySelector("#ot-selall-licntr")),
        s.querySelector(".ot-chkbox").id = "ot-selall-adtlvencntr",
        s.querySelector("input").id = "ot-selall-adtlven-handler",
        s.querySelector("label").setAttribute("for", "ot-selall-adtlven-handler");
        var i = Cn.accordionEl.cloneNode(!0);
        i.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", t.cloneNode(!0)),
        i.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "<div class='ot-vensec-title'>" + St.PCGoogleVendorsText + "</div>"),
        i.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", s),
        i.querySelector(".ot-acc-txt").insertAdjacentHTML("beforeEnd", "<ul id='ot-addtl-venlst'></ul>"),
        i.classList.add("ot-adtlv-acc"),
        i.querySelector("button").setAttribute(this.ARIA_LABEL_ATTRIBUTE, St.PCGoogleVendorsText);
        var a = at.vendors.vendorTemplate.cloneNode(!0);
        for (var l in a.querySelector("button").classList.remove("ot-ven-box"),
        a.querySelector("button").classList.add("ot-addtl-venbox"),
        _t.removeChild(a.querySelector(".ot-acc-txt")),
        e)
            if (e[l]) {
                var c = a.cloneNode(!0)
                  , d = e[l].name;
                c.querySelector(Ht.P_Ven_Name).innerText = d;
                var u = c.querySelector("button");
                _t.setHtmlAttributes(u, {
                    id: "Adtl-IAB" + l
                }),
                _t.setHtmlAttributes(c.querySelector(Ht.P_Ven_Link), {
                    href: e[l].policyUrl,
                    rel: "noopener",
                    target: "_blank"
                }),
                c.querySelector(Ht.P_Ven_Link).innerHTML = St.PCenterViewPrivacyPolicyText + "&nbsp;<span class='ot-scrn-rdr'>" + d + " " + St.NewWinTxt + "</span>";
                var p = Cn.chkboxEl.cloneNode(!0);
                p.classList.remove("ot-ven-ctgl"),
                p.classList.add("ot-ven-adtlctgl");
                var h = Boolean(at.addtlVendors.vendorSelected[l])
                  , g = p.querySelector("input");
                g.classList.add("ot-addtlven-chkbox-handler");
                var C = p.querySelector(".ot-label-status");
                St.PCShowConsentLabels ? C.innerHTML = h ? St.PCActiveText : St.PCInactiveText : _t.removeChild(C),
                _t.setCheckedAttribute("", g, h),
                _t.setHtmlAttributes(g, {
                    id: "ot-addtlven-chkbox-" + l,
                    "addtl-vid": l,
                    "aria-label": d
                }),
                p.querySelector("label").setAttribute("for", "ot-addtlven-chkbox-" + l),
                p.querySelector(Ht.P_Label_Txt).textContent = d;
                var y = c.querySelector(Ht.P_Tgl_Cntr);
                Vt(y).append(p),
                y.insertAdjacentElement("beforeend", Cn.arrowEl.cloneNode(!0)),
                St.PCAccordionStyle !== W.Caret && c.querySelector(".ot-ven-hdr").insertAdjacentElement("beforebegin", Cn.plusMinusEl.cloneNode(!0)),
                Vt(i.querySelector("#ot-addtl-venlst")).append(c)
            }
        Vt("#ot-lst-cnt .ot-sdk-column").append(i),
        Vt("#onetrust-pc-sdk").on("click", "#ot-pc-lst .ot-acc-cntr > input", function(e) {
            _t.setCheckedAttribute(null, e.target, e.target.checked)
        }),
        this.showConsentHeader()
    }
    ,
    Pn.prototype.populateGeneralVendors = function() {
        var p = this
          , e = St.GeneralVendors
          , t = document.querySelector(".ot-gv-acc")
          , h = !!t;
        if (!e.length)
            return this.hasGenVendors = !1,
            void (t && Vt(t).hide());
        this.hasGenVendors = !0,
        t && Vt(t).show();
        var o = St.PCAccordionStyle === W.Caret ? Cn.arrowEl.cloneNode(!0) : Cn.plusMinusEl.cloneNode(!0);
        this.iabAccInit || this.addIabAccordion();
        var n = document.createElement("div");
        n.setAttribute("class", "ot-sel-all-chkbox");
        var r = Cn.chkboxEl.cloneNode(!0);
        r.id = "ot-selall-gnvencntr",
        r.querySelector("input").id = "ot-selall-gnven-handler",
        r.querySelector("label").setAttribute("for", "ot-selall-gnven-handler"),
        Vt(n).append(r);
        var g = Cn.accordionEl.cloneNode(!0);
        g.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", o.cloneNode(!0)),
        g.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "<div class='ot-vensec-title'>" + St.PCenterGeneralVendorsText + "</div>"),
        St.GenVenOptOut && g.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", n),
        g.querySelector(".ot-acc-txt").insertAdjacentHTML("beforeEnd", "<ul id='ot-gn-venlst'></ul>"),
        g.classList.add("ot-gv-acc"),
        g.querySelector("button").setAttribute(this.ARIA_LABEL_ATTRIBUTE, St.PCenterGeneralVendorsText);
        var C = at.vendors.vendorTemplate.cloneNode(!0);
        C.querySelector("button").classList.remove("ot-ven-box"),
        C.querySelector("button").classList.add("ot-gv-venbox"),
        Vt(C.querySelector(".ot-acc-txt")).html('<ul class="ot-host-opt"></ul>'),
        h && Vt("" + Ht.P_Gven_List).html("");
        var y = !0;
        e.forEach(function(e) {
            var o = p.mapGenVendorToHostFormat(e)
              , n = C.cloneNode(!0)
              , t = e.VendorCustomId
              , r = e.Name
              , s = n.querySelector(Ht.P_Ven_Link);
            n.querySelector(Ht.P_Ven_Name).innerText = r;
            var i = n.querySelector("button");
            if (_t.setHtmlAttributes(i, {
                id: "Gn-" + t
            }),
            e.PrivacyPolicyUrl ? (_t.setHtmlAttributes(s, {
                href: e.PrivacyPolicyUrl,
                rel: "noopener",
                target: "_blank"
            }),
            s.innerHTML = St.PCGVenPolicyTxt + "&nbsp;<span class='ot-scrn-rdr'>" + r + " " + St.NewWinTxt + "</span>") : s.classList.add("ot-hide"),
            p.addDescriptionElement(s, e.Description),
            St.GenVenOptOut) {
                var a = Cn.chkboxEl.cloneNode(!0);
                a.classList.remove("ot-ven-ctgl"),
                a.classList.add("ot-ven-gvctgl");
                var l = Boolean(at.genVendorsConsent[t])
                  , c = a.querySelector("input");
                c.classList.add("ot-gnven-chkbox-handler");
                var d = a.querySelector(".ot-label-status");
                St.PCShowConsentLabels ? d.innerHTML = l ? St.PCActiveText : St.PCInactiveText : _t.removeChild(d),
                _t.setCheckedAttribute("", c, l),
                _t.setHtmlAttributes(c, {
                    id: "ot-gnven-chkbox-" + t,
                    "gn-vid": t,
                    "aria-label": r
                }),
                to.isGenVenPartOfAlwaysActiveGroup(t) ? _t.setDisabledAttribute(null, c, !0) : y = !1,
                a.querySelector("label").setAttribute("for", "ot-gnven-chkbox-" + t),
                a.querySelector(Ht.P_Label_Txt).textContent = r;
                var u = n.querySelector(Ht.P_Tgl_Cntr);
                Vt(u).append(a),
                u.insertAdjacentElement("beforeend", Cn.arrowEl.cloneNode(!0))
            }
            St.PCAccordionStyle !== W.Caret && n.querySelector(".ot-ven-hdr").insertAdjacentElement("beforebegin", Cn.plusMinusEl.cloneNode(!0)),
            e.Cookies.length || Vt(n).addClass("ot-hide-acc"),
            e.Cookies.forEach(function(e) {
                var t = p.getCookieElement(e, o);
                Vt(n.querySelector(".ot-host-opt")).append(t)
            }),
            h ? Vt("" + Ht.P_Gven_List).append(n) : Vt(g.querySelector("" + Ht.P_Gven_List)).append(n)
        }),
        h || Vt("#ot-lst-cnt .ot-sdk-column").append(g),
        Vt("#onetrust-pc-sdk").on("click", "#ot-pc-lst .ot-acc-cntr > input", function(e) {
            _t.setCheckedAttribute(null, e.target, e.target.checked)
        }),
        this.showConsentHeader(),
        y && _t.setDisabledAttribute("#ot-selall-gnven-handler", null, !0)
    }
    ,
    Pn.prototype.addIabAccordion = function() {
        var e = St.PCAccordionStyle === W.Caret ? Cn.arrowEl.cloneNode(!0) : Cn.plusMinusEl.cloneNode(!0)
          , t = document.querySelector("#onetrust-pc-sdk .ot-sel-all-chkbox")
          , o = t.cloneNode(!0);
        _t.removeChild(o.querySelector("#ot-selall-hostcntr")),
        _t.removeChild(t.querySelector("#ot-selall-vencntr")),
        _t.removeChild(t.querySelector("#ot-selall-licntr"));
        var n = Cn.accordionEl.cloneNode(!0);
        n.classList.add("ot-iab-acc"),
        n.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", e.cloneNode(!0)),
        n.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "<div class='ot-vensec-title'>" + St.PCIABVendorsText + "</div>"),
        n.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", o),
        n.querySelector(".ot-acc-txt").insertAdjacentElement("beforeEnd", Vt("#ot-ven-lst").el[0]),
        Vt("#ot-lst-cnt .ot-sdk-column").append(n),
        n.querySelector("button").setAttribute(this.ARIA_LABEL_ATTRIBUTE, St.PCIABVendorsText),
        this.iabAccInit = !0
    }
    ,
    Pn.prototype.showConsentHeader = function() {
        var e = At.legIntSettings;
        Vt("#onetrust-pc-sdk .ot-sel-all-hdr").show(),
        e.PAllowLI && !e.PShowLegIntBtn || Vt("#onetrust-pc-sdk .ot-li-hdr").hide()
    }
    ,
    Pn.prototype.setBackBtnTxt = function() {
        lt.isV2Template ? (Vt(Ht.P_Vendor_List + " .back-btn-handler").attr(this.ARIA_LABEL_ATTRIBUTE, St.PCenterBackText),
        Vt(Ht.P_Vendor_List + " .back-btn-handler title").html(St.PCenterBackText)) : Vt(Ht.P_Vendor_List + " .back-btn-handler .pc-back-button-text").html(St.PCenterBackText)
    }
    ,
    Pn.prototype.getCookieElement = function(e, t) {
        var o = at.hosts.hostCookieTemplate.cloneNode(!0)
          , n = o.querySelector("div").cloneNode(!0);
        n.classList.remove("cookie-name-container"),
        Vt(o).html("");
        var r = e.Name;
        St.AddLinksToCookiepedia && t.isFirstParty && (r = Gt.getCookieLabel(e, St.AddLinksToCookiepedia));
        var s = n.cloneNode(!0);
        if (s.classList.add(Ht.P_c_Name),
        s.querySelector("div:nth-child(1)").innerHTML = St.pcCListName,
        s.querySelector("div:nth-child(2)").innerHTML = r,
        Vt(o).append(s),
        St.pcShowCookieHost) {
            var i = n.cloneNode(!0);
            i.classList.add(Ht.P_c_Host),
            i.querySelector("div:nth-child(1)").innerHTML = St.pcCListHost,
            i.querySelector("div:nth-child(2)").innerHTML = e.Host,
            Vt(o).append(i)
        }
        if (St.pcShowCookieDuration) {
            var a = n.cloneNode(!0);
            a.classList.add(Ht.P_c_Duration),
            a.querySelector("div:nth-child(1)").innerHTML = St.pcCListDuration,
            a.querySelector("div:nth-child(2)").innerHTML = e.IsSession ? St.LifespanTypeText : Gt.getDuration(e),
            Vt(o).append(a)
        }
        if (St.pcShowCookieType) {
            var l = t.Type === U.GenVendor ? !e.isThirdParty : t.isFirstParty
              , c = n.cloneNode(!0);
            c.classList.add(Ht.P_c_Type),
            c.querySelector("div:nth-child(1)").innerHTML = St.pcCListType,
            c.querySelector("div:nth-child(2)").innerHTML = l ? St.firstPartyTxt : St.thirdPartyTxt,
            Vt(o).append(c)
        }
        if (St.pcShowCookieCategory) {
            var d = void 0;
            if (d = t.Type === U.GenVendor ? e.category : t.isFirstParty ? e.groupName : t.groupName) {
                var u = n.cloneNode(!0);
                u.classList.add(Ht.P_c_Category),
                u.querySelector("div:nth-child(1)").innerHTML = St.pcCListCategory,
                u.querySelector("div:nth-child(2)").innerHTML = d,
                Vt(o).append(u)
            }
        }
        if (St.pcShowCookieDescription && e.description) {
            var p = n.cloneNode(!0);
            p.classList.add(Ht.P_c_Desc),
            p.querySelector("div:nth-child(1)").innerHTML = St.pcCListDescription,
            p.querySelector("div:nth-child(2)").innerHTML = e.description,
            Vt(o).append(p)
        }
        return o
    }
    ,
    Pn);
    function Pn() {
        this.hasIabVendors = !1,
        this.hasGoogleVendors = !1,
        this.hasGenVendors = !1,
        this.iabAccInit = !1,
        this._displayNull = "display: '';",
        this.ARIA_LABEL_ATTRIBUTE = "aria-label",
        this.googleSearchSelectors = {
            vendorAccBtn: "#ot-addtl-venlst #Adtl-IAB",
            name: "name",
            accId: ".ot-adtlv-acc",
            selectAllEvntHndlr: "#ot-selall-adtlven-handler",
            venListId: "#ot-addtl-venlst",
            ctgl: ".ot-ven-adtlctgl"
        },
        this.genVendorSearchSelectors = {
            vendorAccBtn: "#ot-gn-venlst #Gn-",
            name: "Name",
            accId: ".ot-gv-acc",
            selectAllEvntHndlr: "#ot-selall-gnven-handler",
            venListId: "#ot-gn-venlst",
            ctgl: ".ot-ven-gvctgl"
        }
    }
    var An, Sn = (Tn.prototype.updateGtmMacros = function(e) {
        void 0 === e && (e = !0);
        var n = [];
        at.groupsConsent.forEach(function(e) {
            var t = e.replace(":1", "")
              , o = Mt.getGrpStatus(Mt.getGroupById(t)).toLowerCase() === we;
            _t.endsWith(e, ":1") && (Qo.canSoftOptInInsertForGroup(t) || o) && n.push(t)
        }),
        at.hostsConsent.forEach(function(e) {
            _t.endsWith(e, ":1") && n.push(e.replace(":1", ""))
        }),
        at.showGeneralVendors && St.GenVenOptOut && St.GeneralVendors.forEach(function(e) {
            at.genVendorsConsent[e.VendorCustomId] && (at.softOptInGenVendors.includes(e.VendorCustomId) && ao.isLandingPage() || n.push(e.VendorCustomId))
        });
        var t, o, r = "," + _t.arrToStr(n) + ",";
        St.GoogleConsent.GCEnable && this.updateGCMTags(n),
        window.OnetrustActiveGroups = r,
        window.OptanonActiveGroups = r,
        At.otDataLayer.ignore || void 0 === this._window[At.otDataLayer.name] || this._window[At.otDataLayer.name].constructor !== Array ? !At.otDataLayer.ignore && At.otDataLayer.name && (this._window[At.otDataLayer.name] = [{
            event: "OneTrustLoaded",
            OnetrustActiveGroups: r
        }, {
            event: "OptanonLoaded",
            OptanonActiveGroups: r
        }]) : (this._window[At.otDataLayer.name].push({
            event: "OneTrustLoaded",
            OnetrustActiveGroups: r
        }),
        this._window[At.otDataLayer.name].push({
            event: "OptanonLoaded",
            OptanonActiveGroups: r
        })),
        !e && At.gtmUpdatedinStub || (t = new CustomEvent("consent.onetrust",{
            detail: n
        }));
        var s = Lt.readCookieParam(Te.OPTANON_CONSENT, "groups");
        !at.fireOnetrustGrp && s && !e && At.gtmUpdatedinStub || (at.fireOnetrustGrp = !1,
        !At.otDataLayer.ignore && this._window[At.otDataLayer.name] && this._window[At.otDataLayer.name].constructor === Array && this._window[At.otDataLayer.name].push({
            event: "OneTrustGroupsUpdated",
            OnetrustActiveGroups: r
        }),
        o = new CustomEvent("OneTrustGroupsUpdated",{
            detail: n
        })),
        setTimeout(function() {
            t && window.dispatchEvent(t),
            o && window.dispatchEvent(o)
        })
    }
    ,
    Tn.prototype.updateGCMTags = function(e) {
        var t = {};
        if (this.canUpdateGCMCategories()) {
            if (St.GoogleConsent.GCAdStorage !== nt) {
                var o = e.includes(St.GoogleConsent.GCAdStorage) ? ge.granted : ge.denied;
                t[pe.ad_storage] = o
            }
            if (St.GoogleConsent.GCAnalyticsStorage !== nt) {
                var n = e.includes(St.GoogleConsent.GCAnalyticsStorage) ? ge.granted : ge.denied;
                t[pe.analytics_storage] = n
            }
            if (St.GoogleConsent.GCFunctionalityStorage !== nt) {
                var r = e.includes(St.GoogleConsent.GCFunctionalityStorage) ? ge.granted : ge.denied;
                t[pe.functionality_storage] = r
            }
            if (St.GoogleConsent.GCPersonalizationStorage !== nt) {
                var s = e.includes(St.GoogleConsent.GCPersonalizationStorage) ? ge.granted : ge.denied;
                t[pe.personalization_storage] = s
            }
            if (St.GoogleConsent.GCSecurityStorage !== nt) {
                var i = e.includes(St.GoogleConsent.GCSecurityStorage) ? ge.granted : ge.denied;
                t[pe.security_storage] = i
            }
        }
        var a = Lt.getCookie(Te.ALERT_BOX_CLOSED)
          , l = At.getRegionRule().Global;
        if ("function" != typeof window.gtag) {
            var c = this._window;
            window.gtag = function(e, t, o) {
                At.otDataLayer.ignore || (c[At.otDataLayer.name] ? c[At.otDataLayer.name].push(arguments) : c[At.otDataLayer.name] = [arguments])
            }
        }
        "function" == typeof window.gtag && (At.gcmDevIdSet || (window.gtag(le.set, "developer_id.dYWJhMj", !0),
        At.gcmDevIdSet = !0),
        a && (l || (t[pe.region] = At.gcmCountries),
        0 !== Object.keys(t).length && window.gtag(le.consent, de.update, t)))
    }
    ,
    Tn.prototype.canUpdateGCMCategories = function() {
        return St.GoogleConsent.GCAdStorage !== nt || St.GoogleConsent.GCAnalyticsStorage !== nt || St.GoogleConsent.GCFunctionalityStorage !== nt || St.GoogleConsent.GCPersonalizationStorage !== nt || St.GoogleConsent.GCSecurityStorage !== nt
    }
    ,
    Tn);
    function Tn() {
        this._window = window
    }
    var In, Ln = "Banner", _n = "Preference Center", Bn = "Close", En = "Allow All", wn = "Reject All", xn = "Confirm", Vn = "Confirm", Gn = "Continue without Accepting", On = (Nn.prototype.showConsentNotice = function() {
        switch (!St.NoBanner || St.ForceConsent ? Vt(".onetrust-pc-dark-filter").removeClass("ot-hide") : Vt(".onetrust-pc-dark-filter").addClass("ot-hide"),
        Vt("#onetrust-pc-sdk").removeClass("ot-hide"),
        At.pcName) {
        case Qe:
            Vt("#onetrust-pc-sdk").el[0].classList.contains("ot-animated") || Vt("#onetrust-pc-sdk").addClass("ot-animated");
            var e = St.PreferenceCenterPosition
              , t = St.useRTL
              , o = t ? "right" : "left"
              , n = t ? "left" : "right";
            Vt("#onetrust-pc-sdk").el[0].classList.contains("ot-slide-out-" + ("right" === e ? n : o)) && Vt("#onetrust-pc-sdk").removeClass("ot-slide-out-" + ("right" === e ? n : o)),
            Vt("#onetrust-pc-sdk").addClass("ot-slide-in-" + ("right" === e ? n : o))
        }
        cn.setAllowAllButton(),
        sn.setPCFocus(sn.getPCElements()),
        St.NoBanner && St.ScrollCloseBanner || this.pcHasScroll()
    }
    ,
    Nn.prototype.hideConsentNoticeV2 = function() {
        if (0 !== Vt(this.ONETRUST_PC_SDK).length) {
            if (lt.isV2Template && this.closePCText(),
            St.ForceConsent && !Gt.isCookiePolicyPage(St.AlertNoticeText) && !Ut.isAlertBoxClosedAndValid() && St.ShowAlertNotice ? Vt("" + this.ONETRUST_PC_DARK_FILTER).css("z-index: 2147483645;").show() : Vt("" + this.ONETRUST_PC_DARK_FILTER).fadeOut(St.PCLayout.Panel ? 500 : 400),
            St.PCLayout.Panel) {
                var e = St.PreferenceCenterPosition
                  , t = St.useRTL
                  , o = t ? "right" : "left"
                  , n = t ? "left" : "right";
                Vt("" + this.ONETRUST_PC_SDK).removeClass("ot-slide-in-" + ("right" === e ? n : o)),
                Vt("" + this.ONETRUST_PC_SDK).addClass("ot-slide-out-" + ("right" === e ? n : o))
            }
            if (Vt("" + this.ONETRUST_PC_SDK).fadeOut(St.PCLayout.Panel ? 500 : 400),
            at.isPCVisible = !1,
            (!St.NoBanner || !St.ScrollCloseBanner) && this.bodyStyleChanged) {
                var r = Vt("html").el[0]
                  , s = Vt("body").el[0];
                this.htmlStyleProp ? Tt(r, this.htmlStyleProp, !1) : r.removeAttribute("style"),
                this.bodyStyleProp ? Tt(s, this.bodyStyleProp, !1) : s.removeAttribute("style"),
                this.bodyStyleChanged = !1
            }
            if (at.pcLayer = T.Banner,
            at.pcSource || Ut.isAlertBoxClosedAndValid())
                at.pcSource ? (at.pcSource.focus(),
                at.pcSource = null) : St.BInitialFocus ? Gt.resetFocusToBody() : this.setFocusOnPage();
            else {
                var i = Vt("#onetrust-banner-sdk #onetrust-pc-btn-handler").el[0];
                i && i.focus()
            }
        } else
            this.setFocusOnPage()
    }
    ,
    Nn.prototype.setFocusOnPage = function() {
        var e = document.querySelectorAll('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])');
        at.isKeyboardUser && e.length && e[0].focus()
    }
    ,
    Nn.prototype.closePCText = function() {
        var e = document.querySelector("#onetrust-pc-sdk span[aria-live]")
          , t = St.AboutCookiesText;
        e.innerText = t + " " + St.pcDialogClose
    }
    ,
    Nn.prototype.pcHasScroll = function() {
        var e = Vt(Ht.P_Grp_Container).el[0] || Vt("#onetrust-pc-sdk " + Ht.P_Content).el[0];
        if (e.scrollHeight > e.clientHeight) {
            this.bodyStyleChanged = !0;
            var t = Vt("body");
            t.length && (this.bodyStyleProp = t.el[0].style.cssText,
            this.htmlStyleProp = Vt("html").el[0].style.cssText,
            Tt(Vt("html").el[0], "overflow: hidden;", !0),
            Tt(Vt("body").el[0], "overflow: hidden;", !0))
        }
    }
    ,
    Nn.prototype.checkIfPcSdkContainerExist = function() {
        return !Vt("#onetrust-pc-sdk").length
    }
    ,
    Nn);
    function Nn() {
        this.ONETRUST_PC_SDK = "#onetrust-pc-sdk",
        this.ONETRUST_PC_DARK_FILTER = ".onetrust-pc-dark-filter",
        this.bodyStyleChanged = !1
    }
    var Dn, Hn = (Fn.prototype.init = function() {
        this.insertHtml(),
        this.insertCss(),
        this.showNty(),
        this.initHandler()
    }
    ,
    Fn.prototype.getContent = function() {
        return l(this, void 0, void 0, function() {
            return h(this, function(e) {
                return [2, Yo.getSyncNtfyContent().then(function(e) {
                    at.syncNtfyGrp = {
                        name: e.name,
                        html: atob(e.html),
                        css: e.css
                    }
                })]
            })
        })
    }
    ,
    Fn.prototype.insertHtml = function() {
        function e(e) {
            return t.querySelector(e)
        }
        this.removeHtml();
        var t = document.createDocumentFragment()
          , o = document.createElement("div");
        Vt(o).html(at.syncNtfyGrp.html);
        var n = o.querySelector(this.El);
        St.BannerRelativeFontSizesToggle && Vt(n).addClass("otRelFont"),
        St.useRTL && Vt(n).attr("dir", "rtl"),
        Vt(t).append(n);
        var r = St.NtfyConfig;
        this.initHtml("Sync", r.Sync, e, t.querySelector(this.El)),
        r.ShowCS ? Vt(e(".ot-pc-handler")).html(r.CSTxt) : (Vt(n).addClass("ot-hide-csbtn"),
        e(".ot-sync-btncntr").parentElement.removeChild(e(".ot-sync-btncntr")));
        var s = document.createElement("div");
        Vt(s).append(t),
        Vt("#onetrust-consent-sdk").append(s.firstChild)
    }
    ,
    Fn.prototype.initHandler = function() {
        Vt(this.El + " .ot-sync-close-handler").on("click", function() {
            return Dn.close()
        })
    }
    ,
    Fn.prototype.showNty = function() {
        var e = Vt(this.El);
        e.css("bottom: -300px;"),
        e.animate({
            bottom: "1em;"
        }, 1e3),
        setTimeout(function() {
            e.css("bottom: 1rem;")
        }, 1e3),
        e.focus()
    }
    ,
    Fn.prototype.changeState = function() {
        setTimeout(function() {
            Dn.refreshState()
        }, 1500)
    }
    ,
    Fn.prototype.refreshState = function() {
        function e(e) {
            return t.querySelector(e)
        }
        var t = Vt(this.El).el[0];
        t.classList.add("ot-nty-complete"),
        t.classList.remove("ot-nty-sync");
        var o = St.NtfyConfig;
        this.initHtml("Complete", o.Complete, e, t),
        o.ShowCS && ("LINK" === o.CSType && Vt(e(".ot-pc-handler")).addClass("ot-pc-link"),
        Vt(".ot-sync-btncntr").show("inline-block"),
        this.alignContent(),
        Vt(window).on("resize", function() {
            return Dn.resizeEvent
        })),
        setTimeout(function() {
            Dn.close()
        }, 1e3 * St.NtfyConfig.NtfyDuration)
    }
    ,
    Fn.prototype.insertCss = function() {
        var e = document.getElementById("onetrust-style");
        e.innerHTML += at.syncNtfyGrp.css,
        e.innerHTML += this.addCustomStyles()
    }
    ,
    Fn.prototype.addCustomStyles = function() {
        var e = St.NtfyConfig
          , t = e.Sync
          , o = e.Complete
          , n = e.CSButton
          , r = e.CSLink;
        return "\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-sync {\n            background-color: " + t.BgColor + ";\n            border: 1px solid " + t.BdrColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy .ot-sync-refresh>g {\n            fill: " + t.IconBgColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-sync #ot-sync-title {\n            text-align: " + t.TitleAlign + ";\n            color: " + t.TitleColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-sync .ot-sync-desc  {\n            text-align: " + t.DescAlign + ";\n            color: " + t.DescColor + "; \n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-complete {\n            background-color: " + o.BgColor + ";\n            border: 1px solid " + o.BdrColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy .ot-sync-check>g {\n            fill: " + o.IconBgColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-complete #ot-sync-title {\n            text-align: " + o.TitleAlign + ";\n            color: " + o.TitleColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-complete .ot-sync-desc  {\n            text-align: " + o.DescAlign + ";\n            color: " + o.DescColor + "; \n        }\n        " + ("BUTTON" === e.CSType ? "\n        #onetrust-consent-sdk #ot-sync-ntfy .ot-pc-handler {\n            background-color: " + n.BgColor + ";\n            border: 1px solid " + n.BdrColor + ";\n            color: " + n.Color + ";\n            text-align: " + n.Align + ";\n        }" : " #onetrust-consent-sdk #ot-sync-ntfy .ot-pc-handler.ot-pc-link {\n            color: " + r.Color + ";\n            text-align: " + r.Align + ";\n        }") + "\n        "
    }
    ,
    Fn.prototype.initHtml = function(e, t, o, n) {
        var r = "Sync" === e ? ".ot-sync-refresh" : ".ot-sync-check"
          , s = "Complete" === e ? ".ot-sync-refresh" : ".ot-sync-check";
        t.ShowIcon ? (Vt(o(r)).show(),
        Vt(o(s)).hide(),
        Vt(o(".ot-sync-icon")).show("inline-block"),
        n.classList.remove("ot-hide-icon")) : (Vt(o(".ot-sync-icon")).hide(),
        n.classList.add("ot-hide-icon")),
        t.Title ? Vt(o("#ot-sync-title")).html(t.Title) : Vt(o("#ot-sync-title")).hide(),
        t.Desc ? Vt(o(".ot-sync-desc")).html(t.Desc) : Vt(o(".ot-sync-desc")).hide(),
        t.ShowClose ? (Vt(o(".ot-sync-close-handler")).show("inline-block"),
        Vt(o(".ot-close-icon")).attr("aria-label", t.CloseAria),
        n.classList.remove("ot-hide-close")) : (Vt(o(".ot-sync-close-handler")).hide(),
        n.classList.add("ot-hide-close"))
    }
    ,
    Fn.prototype.close = function() {
        this.hideSyncNtfy(),
        Gt.resetFocusToBody()
    }
    ,
    Fn.prototype.hideSyncNtfy = function() {
        St.NtfyConfig.ShowCS && window.removeEventListener("resize", Dn.resizeEvent),
        Vt("#ot-sync-ntfy").fadeOut(400)
    }
    ,
    Fn.prototype.removeHtml = function() {
        var e = Vt(this.El).el;
        e && _t.removeChild(e)
    }
    ,
    Fn.prototype.alignContent = function() {
        Vt(".ot-sync-btncntr").el[0].clientHeight > Vt(".ot-sync-titlecntr").el[0].clientHeight && (Vt(".ot-sync-titlecntr").addClass("ot-pos-abs"),
        Vt(".ot-sync-btncntr").addClass("ot-pos-rel"))
    }
    ,
    Fn.prototype.resizeEvent = function() {
        window.innerWidth <= 896 && Dn.alignContent()
    }
    ,
    Fn);
    function Fn() {
        this.El = "#ot-sync-ntfy"
    }
    var Rn, qn = (Mn.prototype.toggleVendorConsent = function(e, t) {
        void 0 === e && (e = []),
        void 0 === t && (t = null),
        e.length || (e = at.oneTrustIABConsent.vendors),
        e.forEach(function(e) {
            var t = e.split(":")
              , o = t[0]
              , n = t[1]
              , r = Vt(Ht.P_Vendor_Container + " ." + Ht.P_Ven_Ctgl + ' [vendorid="' + o + '"]').el[0];
            r && _t.setCheckedAttribute("", r, "true" === n)
        });
        var o = Vt("#onetrust-pc-sdk #select-all-vendor-groups-handler").el[0];
        if (o) {
            var n = _t.getActiveIdArray(_t.distinctArray(e));
            null === t && (t = n.length === e.length),
            t || 0 === n.length ? o.parentElement.classList.remove(Ft.P_Line_Through) : o.parentElement.classList.add(Ft.P_Line_Through),
            _t.setCheckedAttribute("", o, t)
        }
    }
    ,
    Mn.prototype.toggleVendorLi = function(e, t) {
        void 0 === e && (e = []),
        void 0 === t && (t = null),
        e.length || (e = at.oneTrustIABConsent.legIntVendors),
        e.forEach(function(e) {
            var t = e.split(":")
              , o = t[0]
              , n = t[1]
              , r = Vt(Ht.P_Vendor_Container + " ." + Ht.P_Ven_Ltgl + ' [leg-vendorid="' + o + '"]').el[0];
            r && _t.setCheckedAttribute("", r, "true" === n)
        });
        var o = Vt("#onetrust-pc-sdk #select-all-vendor-leg-handler").el[0];
        if (o) {
            var n = _t.getActiveIdArray(_t.distinctArray(e));
            null === t && (t = n.length === e.length),
            t || 0 === n.length ? o.parentElement.classList.remove(Ft.P_Line_Through) : o.parentElement.classList.add(Ft.P_Line_Through),
            _t.setCheckedAttribute("", o, t)
        }
    }
    ,
    Mn.prototype.updateVendorLegBtns = function(e) {
        void 0 === e && (e = []),
        e.length || (e = at.oneTrustIABConsent.legIntVendors),
        e.forEach(function(e) {
            var t = e.split(":")
              , o = t[0]
              , n = t[1]
              , r = Vt(Ht.P_Vendor_Container + ' .ot-leg-btn-container[data-group-id="' + o + '"]').el[0];
            r && cn.updateLegIntBtnElement(r, "true" === n)
        })
    }
    ,
    Mn);
    function Mn() {}
    var Un, jn = (zn.prototype.setFilterList = function(t) {
        var o = this
          , n = Vt("#onetrust-pc-sdk " + Ht.P_Fltr_Modal + " " + Ht.P_Fltr_Option).el[0].cloneNode(!0);
        Vt("#onetrust-pc-sdk " + Ht.P_Fltr_Modal + " " + Ht.P_Fltr_Options).html(""),
        (lt.isV2Template || St.PCLayout.Popup) && Vt("#onetrust-pc-sdk #filter-cancel-handler").html(St.PCenterCancelFiltersText || "Cancel"),
        !lt.isV2Template && St.PCLayout.Popup || (Vt("#onetrust-pc-sdk " + Ht.P_Clr_Fltr_Txt).html(St.PCenterClearFiltersText),
        Vt("#filter-btn-handler").el[0].setAttribute("aria-label", St.PCenterFilterText)),
        Vt("#onetrust-pc-sdk #filter-apply-handler").html(St.PCenterApplyFiltersText),
        t ? At.consentableGrps.forEach(function(e) {
            (at.cookieListType === z.GenVen || at.cookieListType === z.HostAndGenVen ? e.Hosts.length || e.FirstPartyCookies.length || e.GeneralVendorsIds && e.GeneralVendorsIds.length : e.Hosts.length || e.FirstPartyCookies.length) && o.filterGroupOptionSetter(n, e, t)
        }) : At.iabGrps.forEach(function(e) {
            o.filterGroupOptionSetter(n, e, t)
        })
    }
    ,
    zn.prototype.filterGroupOptionSetter = function(e, t, o) {
        var n = t.CustomGroupId
          , r = n + "-filter"
          , s = e.cloneNode(!0);
        Vt(Ht.P_Fltr_Modal + " " + Ht.P_Fltr_Options).append(s),
        Vt(s.querySelector("input")).attr("id", r),
        Vt(s.querySelector("label")).attr("for", r),
        lt.isV2Template ? Vt(s.querySelector(Ht.P_Label_Txt)).html(t.GroupName) : Vt(s.querySelector("label span")).html(t.GroupName),
        Vt(s.querySelector("input")).attr(o ? "data-optanongroupid" : "data-purposeid", n)
    }
    ,
    zn);
    function zn() {
        this.bodyScrollProp = "",
        this.htmlScrollProp = "",
        this.ONETRUST_PC_SDK = "#onetrust-pc-sdk",
        this.ONETRUST_PC_DARK_FILTER = ".onetrust-pc-dark-filter"
    }
    var Kn, Wn = (Jn.prototype.initialiseCssReferences = function() {
        var e, t = "";
        document.getElementById("onetrust-style") ? e = document.getElementById("onetrust-style") : ((e = document.createElement("style")).id = "onetrust-style",
        lt.fp.CookieV2CSP && at.nonce && e.setAttribute("nonce", at.nonce)),
        Qo.commonStyles && (t += Qo.commonStyles),
        Qo.bannerGroup && (t += Qo.bannerGroup.css,
        lt.fp.CookieV2SSR || (t += this.addCustomBannerCSS()),
        St.bannerCustomCSS && (t += St.bannerCustomCSS)),
        Qo.preferenceCenterGroup && (t += Qo.preferenceCenterGroup.css,
        t += this.addCustomPreferenceCenterCSS()),
        Qo.cookieListGroup && (t += Qo.cookieListGroup.css,
        t += this.addCustomCookieListCSS()),
        St.cookiePersistentLogo && !St.cookiePersistentLogo.includes("ot_guard_logo.svg") && (t += ".ot-floating-button__front{background-image:url('" + St.cookiePersistentLogo + "')}"),
        this.processedCSS = t,
        At.ignoreInjectingHtmlCss || (e.textContent = t,
        Vt(document.head).append(e))
    }
    ,
    Jn);
    function Jn() {
        this.processedCSS = "",
        this.addCustomBannerCSS = function() {
            var e = St.backgroundColor
              , t = St.buttonColor
              , o = St.textColor
              , n = St.buttonTextColor
              , r = St.bannerMPButtonColor
              , s = St.bannerMPButtonTextColor
              , i = St.bannerAccordionBackgroundColor
              , a = St.BSaveBtnColor
              , l = St.BCategoryContainerColor
              , c = St.BLineBreakColor
              , d = St.BCategoryStyleColor
              , u = St.bannerLinksTextColor
              , p = St.BFocusBorderColor
              , h = "\n        " + (At.bannerName === ze ? e ? "#onetrust-consent-sdk #onetrust-banner-sdk .ot-sdk-container {\n                    background-color: " + e + ";}" : "" : e ? "#onetrust-consent-sdk #onetrust-banner-sdk {background-color: " + e + ";}" : "") + "\n            " + (o ? "#onetrust-consent-sdk #onetrust-policy-title,\n                    #onetrust-consent-sdk #onetrust-policy-text,\n                    #onetrust-consent-sdk .ot-b-addl-desc,\n                    #onetrust-consent-sdk .ot-dpd-desc,\n                    #onetrust-consent-sdk .ot-dpd-title,\n                    #onetrust-consent-sdk #onetrust-policy-text *:not(.onetrust-vendors-list-handler),\n                    #onetrust-consent-sdk .ot-dpd-desc *:not(.onetrust-vendors-list-handler),\n                    #onetrust-consent-sdk #onetrust-banner-sdk #banner-options *,\n                    #onetrust-banner-sdk .ot-cat-header {\n                        color: " + o + ";\n                    }" : "") + "\n            " + (i ? "#onetrust-consent-sdk #onetrust-banner-sdk .banner-option-details {\n                    background-color: " + i + ";}" : "") + "\n            " + (u ? " #onetrust-consent-sdk #onetrust-banner-sdk a[href],\n                    #onetrust-consent-sdk #onetrust-banner-sdk a[href] font,\n                    #onetrust-consent-sdk #onetrust-banner-sdk .ot-link-btn\n                        {\n                            color: " + u + ";\n                        }" : "");
            if ((t || n) && (h += "#onetrust-consent-sdk #onetrust-accept-btn-handler,\n                         #onetrust-banner-sdk #onetrust-reject-all-handler {\n                            " + (t ? "background-color: " + t + ";border-color: " + t + ";" : "") + "\n                " + (n ? "color: " + n + ";" : "") + "\n            }"),
            p && (h += "\n            #onetrust-consent-sdk #onetrust-banner-sdk *:focus,\n            #onetrust-consent-sdk #onetrust-banner-sdk:focus {\n               outline-color: " + p + ";\n               outline-width: 1px;\n            }"),
            (s || r) && (h += "\n            #onetrust-consent-sdk #onetrust-pc-btn-handler,\n            #onetrust-consent-sdk #onetrust-pc-btn-handler.cookie-setting-link {\n                " + (s ? "color: " + s + "; border-color: " + s + ";" : "") + "\n                background-color: \n                " + (r && !St.BannerSettingsButtonDisplayLink ? r : e) + ";\n            }"),
            At.bannerName === Je) {
                var g = void 0
                  , C = void 0
                  , y = void 0
                  , f = void 0
                  , k = void 0;
                a && (g = "color: " + n + ";border-color: " + n + ";background-color: " + a + ";"),
                l && (C = "background-color: " + l + ";"),
                c && (y = "border-color: " + c + ";"),
                d && (f = "background-color: " + d + ";",
                k = "border-color: " + d + ";"),
                p && (h += "\n                #onetrust-consent-sdk #onetrust-banner-sdk .ot-tgl input:focus+.ot-switch .ot-switch-nob,\n                #onetrust-consent-sdk #onetrust-banner-sdk .ot-chkbox input:focus + label::before {\n                    outline-color: " + p + ";\n                    outline-width: 1px;\n                }"),
                h += "#onetrust-banner-sdk .ot-bnr-save-handler {" + g + "}#onetrust-banner-sdk .ot-cat-lst {" + C + "}#onetrust-banner-sdk .ot-cat-bdr {" + y + "}#onetrust-banner-sdk .ot-tgl input:checked+.ot-switch .ot-switch-nob:before,#onetrust-banner-sdk .ot-chkbox input:checked~label::before {" + f + "}#onetrust-banner-sdk .ot-chkbox label::before,#onetrust-banner-sdk .ot-tgl input:checked+.ot-switch .ot-switch-nob {" + k + "}#onetrust-banner-sdk #onetrust-pc-btn-handler.cookie-setting-link {background: inherit}"
            }
            return St.BCloseButtonType === ie.Link && (h += "#onetrust-banner-sdk.ot-close-btn-link .banner-close-button {color: " + St.BContinueColor + "}"),
            h
        }
        ,
        this.addCustomPreferenceCenterCSS = function() {
            var e = St.pcBackgroundColor
              , t = St.pcButtonColor
              , o = St.pcTextColor
              , n = St.pcButtonTextColor
              , r = St.pcLinksTextColor
              , s = St.PCenterEnableAccordion
              , i = St.pcAccordionBackgroundColor
              , a = St.pcMenuColor
              , l = St.pcMenuHighLightColor
              , c = St.pcLegIntButtonColor
              , d = St.pcLegIntButtonTextColor
              , u = St.PCFocusBorderColor
              , p = "\n            " + (e ? (At.pcName === $e ? "#onetrust-consent-sdk #onetrust-pc-sdk .group-parent-container,\n                        #onetrust-consent-sdk #onetrust-pc-sdk .manage-pc-container,\n                        #onetrust-pc-sdk " + Ht.P_Vendor_List : "#onetrust-consent-sdk #onetrust-pc-sdk") + ",\n                #onetrust-consent-sdk " + Ht.P_Search_Cntr + ",\n                " + (s && At.pcName === $e ? "#onetrust-consent-sdk #onetrust-pc-sdk .ot-accordion-layout" + Ht.P_Category_Item : "#onetrust-consent-sdk #onetrust-pc-sdk .ot-switch.ot-toggle") + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Ht.P_Tab_Grp_Hdr + " .checkbox,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Ht.P_Title + ":after\n                " + (lt.isV2Template ? ",#onetrust-consent-sdk #onetrust-pc-sdk #ot-sel-blk,\n                        #onetrust-consent-sdk #onetrust-pc-sdk #ot-fltr-cnt,\n                        #onetrust-consent-sdk #onetrust-pc-sdk " + Ht.P_Triangle : "") + " {\n                    background-color: " + e + ";\n                }\n               " : "") + "\n            " + (o ? "#onetrust-consent-sdk #onetrust-pc-sdk h3,\n                #onetrust-consent-sdk #onetrust-pc-sdk h4,\n                #onetrust-consent-sdk #onetrust-pc-sdk h5,\n                #onetrust-consent-sdk #onetrust-pc-sdk h6,\n                #onetrust-consent-sdk #onetrust-pc-sdk p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Ht.P_Vendor_Container + " " + Ht.P_Ven_Opts + " p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Ht.P_Policy_Txt + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Ht.P_Title + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Ht.P_Li_Title + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Ht.P_Leg_Select_All + " span,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Ht.P_Host_Cntr + " " + Ht.P_Host_Info + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Ht.P_Fltr_Modal + " #modal-header,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-checkbox label span,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Ht.P_Vendor_List + " " + Ht.P_Select_Cntr + " p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Ht.P_Vendor_List + " " + Ht.P_Vendor_Title + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Ht.P_Vendor_List + " .back-btn-handler p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Ht.P_Vendor_List + " " + Ht.P_Ven_Name + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Ht.P_Vendor_List + " " + Ht.P_Vendor_Container + " .consent-category,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-inactive-leg-btn,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-label-status,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-chkbox label span,\n                #onetrust-consent-sdk #onetrust-pc-sdk #clear-filters-handler \n                {\n                    color: " + o + ";\n                }" : "") + "\n            " + (r ? " #onetrust-consent-sdk #onetrust-pc-sdk .privacy-notice-link,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler + a,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .category-host-list-handler,\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + Ht.P_Ven_Link + ",\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + Ht.P_Host_Cntr + " " + Ht.P_Host_Title + " a,\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + Ht.P_Host_Cntr + " " + Ht.P_Acc_Header + " " + Ht.P_Host_View_Cookies + ",\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + Ht.P_Host_Cntr + " " + Ht.P_Host_Info + " a,\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + Ht.P_Content + " " + Ht.P_Policy_Txt + " .ot-link-btn\n                    {\n                        color: " + r + ";\n                    }" : "") + "\n            #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler:hover { opacity: .7;}\n            " + (s && i ? "#onetrust-consent-sdk #onetrust-pc-sdk " + Ht.P_Acc_Container + Ht.P_Acc_Txt + ",\n            #onetrust-consent-sdk #onetrust-pc-sdk " + Ht.P_Acc_Txt + " " + Ht.P_Subgrp_Tgl_Cntr + " .ot-switch.ot-toggle\n             {\n                background-color: " + i + ";\n            }" : "") + "\n            " + (i ? " #onetrust-consent-sdk #onetrust-pc-sdk " + Ht.P_Host_Cntr + " " + Ht.P_Host_Info + ",\n                    " + (lt.isV2Template ? "#onetrust-consent-sdk #onetrust-pc-sdk " + Ht.P_Acc_Txt + " .ot-ven-dets" : "#onetrust-consent-sdk #onetrust-pc-sdk " + Ht.P_Acc_Txt + " " + Ht.P_Ven_Opts) + "\n                            {\n                                background-color: " + i + ";\n                            }" : "") + "\n        ";
            return (t || n) && (p += "#onetrust-consent-sdk #onetrust-pc-sdk \n            button:not(#clear-filters-handler):not(.ot-close-icon):not(#filter-btn-handler):not(.ot-remove-objection-handler):not(.ot-obj-leg-btn-handler):not([aria-expanded]):not(.ot-link-btn),\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-active-leg-btn {\n                " + (t ? "background-color: " + t + ";border-color: " + t + ";" : "") + "\n                " + (n ? "color: " + n + ";" : "") + "\n            }\n            #onetrust-consent-sdk #onetrust-pc-sdk ." + Ht.P_Active_Menu + " {\n                " + (t ? "border-color: " + t + ";" : "") + "\n            }\n            " + (At.pcName === $e ? "#onetrust-consent-sdk #onetrust-pc-sdk " + Ht.P_Category_Item + ",\n            #onetrust-consent-sdk #onetrust-pc-sdk.ot-leg-opt-out " + Ht.P_Li_Hdr + "{\n                border-color: " + t + ";\n            }" : "") + "\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-remove-objection-handler{\n                background-color: transparent;\n                border: 1px solid transparent;\n            }\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-inactive-leg-btn {\n                " + (c ? "background-color: " + c + ";" : "") + "\n                " + (d ? "color: " + d + "; border-color: " + d + ";" : "") + "\n            }\n            "),
            u && (p += '\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-tgl input:focus + .ot-switch, .ot-switch .ot-switch-nob, .ot-switch .ot-switch-nob:before,\n            #onetrust-pc-sdk .ot-checkbox input[type="checkbox"]:focus + label::before,\n            #onetrust-pc-sdk .ot-chkbox input[type="checkbox"]:focus + label::before {\n                outline-color: ' + u + ";\n                outline-width: 1px;\n            }\n            #onetrust-pc-sdk .ot-host-item > button:focus, #onetrust-pc-sdk .ot-ven-item > button:focus {\n                border: 1px solid " + u + ";\n            }\n            #onetrust-consent-sdk #onetrust-pc-sdk *:focus,\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-vlst-cntr > a:focus {\n               outline: 1px solid " + u + ";\n            }"),
            St.PCCloseButtonType === ie.Link && (p += "#onetrust-pc-sdk.ot-close-btn-link .ot-close-icon {color: " + St.PCContinueColor + "}"),
            At.pcName === et && (a && (p += "#onetrust-consent-sdk #onetrust-pc-sdk .category-menu-switch-handler {\n                    background-color: " + a + "\n                }"),
            l && (p += "#onetrust-consent-sdk #onetrust-pc-sdk ." + Ht.P_Active_Menu + " {\n                    background-color: " + l + "\n                }")),
            !St.PCTemplateUpgrade && u && (p += '\n            #onetrust-pc-sdk input[type="checkbox"]:focus + .accordion-header,\n            #onetrust-pc-sdk .category-item .ot-switch.ot-toggle input:focus + .ot-switch-label,\n            #onetrust-pc-sdk .checkbox input:focus + label::after {\n                outline-color: ' + u + ";\n                outline-width: 1px;\n            }"),
            St.pcCustomCSS && (p += St.pcCustomCSS),
            p
        }
        ,
        this.addCustomCookieListCSS = function() {
            var e = St.CookiesV2NewCookiePolicy ? "-v2.ot-sdk-cookie-policy" : ""
              , t = "\n                " + (St.cookieListPrimaryColor ? "\n                    #ot-sdk-cookie-policy" + e + " h5,\n                    #ot-sdk-cookie-policy" + e + " h6,\n                    #ot-sdk-cookie-policy" + e + " li,\n                    #ot-sdk-cookie-policy" + e + " p,\n                    #ot-sdk-cookie-policy" + e + " a,\n                    #ot-sdk-cookie-policy" + e + " span,\n                    #ot-sdk-cookie-policy" + e + " td,\n                    #ot-sdk-cookie-policy" + e + " #cookie-policy-description {\n                        color: " + St.cookieListPrimaryColor + ";\n                    }" : "") + "\n                    " + (St.cookieListTableHeaderColor ? "#ot-sdk-cookie-policy" + e + " th {\n                        color: " + St.cookieListTableHeaderColor + ";\n                    }" : "") + "\n                    " + (St.cookieListGroupNameColor ? "#ot-sdk-cookie-policy" + e + " .ot-sdk-cookie-policy-group {\n                        color: " + St.cookieListGroupNameColor + ";\n                    }" : "") + "\n                    " + (St.cookieListTitleColor ? "\n                    #ot-sdk-cookie-policy" + e + " #cookie-policy-title {\n                            color: " + St.cookieListTitleColor + ";\n                        }\n                    " : "") + "\n            " + (e && St.CookieListTableHeaderBackgroundColor ? "\n                    #ot-sdk-cookie-policy" + e + " table th {\n                            background-color: " + St.CookieListTableHeaderBackgroundColor + ";\n                        }\n                    " : "") + "\n            ";
            return St.cookieListCustomCss && (t += St.cookieListCustomCss),
            t
        }
    }
    var Yn, Xn = ($n.prototype.insertPcHtml = function() {
        Yn.jsonAddAboutCookies(St);
        var t = document.createDocumentFragment();
        if (Qo.preferenceCenterGroup) {
            var e = document.createElement("div");
            Vt(e).html(Qo.preferenceCenterGroup.html);
            var o = e.querySelector("#onetrust-pc-sdk");
            /Chrome|Safari/i.test(navigator.userAgent) && /Google Inc|Apple Computer/i.test(navigator.vendor) || Vt(o).addClass("ot-sdk-not-webkit"),
            St.useRTL && Vt(o).attr("dir", "rtl"),
            At.legIntSettings.PAllowLI && "IAB2" === At.iabType && (Vt(o).addClass("ot-leg-opt-out"),
            At.legIntSettings.PShowLegIntBtn && Vt(o).addClass("ot-leg-btn")),
            St.BannerRelativeFontSizesToggle && Vt(o).addClass("otRelFont"),
            St.PCShowConsentLabels && Vt(o).addClass("ot-tgl-with-label"),
            (St.UseGoogleVendors || at.showGeneralVendors) && Vt(o).addClass("ot-addtl-vendors"),
            "right" === St.PreferenceCenterPosition && Vt(o).addClass(St.useRTL ? "right-rtl" : "right"),
            Vt(t).append(o);
            var n = function(e) {
                return t.querySelector(e)
            }
              , r = function(e) {
                return t.querySelectorAll(e)
            }
              , s = Vt(r(Ht.P_Close_Btn)).el;
            if (St.ShowPreferenceCenterCloseButton)
                for (St.CloseText || (St.CloseText = "Close Preference Center"),
                i = 0; i < s.length; i++)
                    St.PCCloseButtonType === ie.Link && St.PCTemplateUpgrade ? (Vt(s[i]).html(St.PCContinueText),
                    Vt(o).addClass("ot-close-btn-link"),
                    Vt(s[i]).el.removeAttribute("aria-label")) : Vt(s[i]).el.setAttribute("aria-label", St.CloseText);
            else
                for (var i = 0; i < s.length; i++)
                    Vt(s[i].parentElement).el.removeChild(s[i]);
            St.Language && St.Language.Culture && Vt(n("#onetrust-pc-sdk")).attr("lang", St.Language.Culture);
            var a = n(Ht.P_Logo);
            if (a && St.optanonLogo) {
                var l = Gt.updateCorrectUrl(St.optanonLogo);
                Gt.checkMobileOfflineRequest(Gt.getBannerVersionUrl()) && (l = _t.getRelativeURL(l, !0, !0)),
                Vt(a).attr("style", 'background-image: url("' + l + '");\n                    background-position: ' + (St.useRTL ? "right" : "left") + ";"),
                St.PCLogoAria && Vt(a).attr("aria-label", St.PCLogoAria)
            }
            if (Gt.insertFooterLogo(r(".ot-pc-footer-logo a")),
            Vt(n(Ht.P_Title)).html(St.MainText),
            St.PCCloseButtonType === ie.Link && St.PCTemplateUpgrade && At.pcName === et && Vt(n(Ht.P_Title)).addClass("ot-pc-title-shrink"),
            Vt(n(go)).attr("aria-label", St.MainText),
            At.pcName === et && (Vt(n(Ht.P_Privacy_Txt)).html(St.AboutCookiesText),
            Vt(n(Ht.P_Privacy_Hdr)).html(St.AboutCookiesText)),
            Vt(n(Ht.P_Policy_Txt)).html(St.MainInfoText),
            St.AboutText && Vt(n(Ht.P_Policy_Txt)).html(Vt(n(Ht.P_Policy_Txt)).html() + '\n                <br/><a href="' + St.AboutLink + '" class="privacy-notice-link" rel="noopener" target="_blank"\n                        aria-label="' + St.PCCookiePolicyLinkScreenReader + '">' + St.AboutText + "</a>"),
            St.PCenterVendorListLinkText) {
                var c = !St.IsIabEnabled && at.showGeneralVendors ? "ot-gv-list-handler" : "onetrust-vendors-list-handler";
                n(Ht.P_Policy_Txt).insertAdjacentHTML("beforeend", '<button class="ot-link-btn ' + c + '" aria-label="' + St.PCenterVendorListLinkAriaLabel + '">\n                ' + St.PCenterVendorListLinkText + "\n                </button>")
            }
            if (St.PCTemplateUpgrade && St.PCenterUserIdTitleText && St.IsConsentLoggingEnabled) {
                var d = Lt.readCookieParam(Te.OPTANON_CONSENT, ve);
                if (n(Ht.P_Policy_Txt).insertAdjacentHTML("beforeend", '<div class="ot-userid-title"><span>' + St.PCenterUserIdTitleText + ": </span> " + d + "</div>"),
                St.PCenterUserIdDescriptionText && n(Ht.P_Policy_Txt).insertAdjacentHTML("beforeend", '<div class="ot-userid-desc">' + St.PCenterUserIdDescriptionText + "</div>"),
                St.PCenterUserIdTimestampTitleText) {
                    var u = Lt.getCookie(Te.ALERT_BOX_CLOSED)
                      , p = u && Gt.getUTCFormattedDate(u)
                      , h = p || St.PCenterUserIdNotYetConsentedText;
                    n(Ht.P_Policy_Txt).insertAdjacentHTML("beforeend", '<div class="ot-userid-timestamp"><span>' + St.PCenterUserIdTimestampTitleText + ": </span> " + h + "</div>")
                }
            }
            St.ConfirmText.trim() ? Vt(n("#accept-recommended-btn-handler")).html(St.ConfirmText) : n("#accept-recommended-btn-handler").parentElement.removeChild(n("#accept-recommended-btn-handler"));
            var g = r(".save-preference-btn-handler");
            for (i = 0; i < g.length; i++)
                Vt(g[i]).html(St.AllowAllText);
            var C = r(".ot-pc-refuse-all-handler");
            if (St.PCenterShowRejectAllButton && St.PCenterRejectAllButtonText.trim())
                for (i = 0; i < C.length; i++)
                    Vt(C[i]).html(St.PCenterRejectAllButtonText);
            else
                _t.removeChild(C);
            if (n(Ht.P_Manage_Cookies_Txt) && Vt(n(Ht.P_Manage_Cookies_Txt)).html(St.ManagePreferenceText),
            Yn.initializePreferenceCenterGroups(n, t),
            !St.IsIabEnabled) {
                var y = n(Ht.P_Vendor_Container);
                y && y.parentElement.removeChild(y)
            }
            if (!St.showCookieList && !at.showGeneralVendors) {
                var f = n(Ht.P_Host_Cntr);
                f && f.parentElement.removeChild(f)
            }
        }
        var k = document.createElement("iframe");
        k.setAttribute("class", "ot-text-resize"),
        k.setAttribute("title", "onetrust-text-resize"),
        Tt(k, "position: absolute; top: -50000px; width: 100em;"),
        k.setAttribute(this._ariaHidden, "true"),
        Vt(t.querySelector("#onetrust-pc-sdk")).append(k);
        var v = document.getElementById("onetrust-consent-sdk");
        Vt(v).append(t),
        At.ignoreInjectingHtmlCss || Vt(document.body).append(v),
        (St.showCookieList || at.showGeneralVendors) && fn.InitializeHostList()
    }
    ,
    $n.prototype.setParentGroupName = function(e, t, o, n) {
        var r = e.querySelector(".category-header,.ot-cat-header,.category-menu-switch-handler>h3");
        Vt(r).html(t),
        Vt(r).attr("id", o),
        At.pcName === et && (e.querySelector(Ht.P_Category_Header).innerHTML = t,
        e.querySelector("" + Ht.P_Desc_Container).setAttribute("id", n),
        e.querySelector(".category-menu-switch-handler").setAttribute("aria-controls", n))
    }
    ,
    $n.prototype.setLegIntButton = function(e, t, o, n) {
        void 0 === o && (o = !1);
        var r = !0;
        -1 < at.vendors.selectedLegInt.indexOf(t.IabGrpId + ":false") && (r = !1);
        var s = Ut.generateLegIntButtonElements(r, t.OptanonGroupId);
        o ? n.insertAdjacentHTML("afterend", s) : e.insertAdjacentHTML("beforeend", s);
        var i = e.querySelector(".ot-remove-objection-handler");
        i && Tt(i, i.getAttribute("data-style"))
    }
    ,
    $n.prototype.setParentGroupDescription = function(e, t, o, n, r) {
        var s = cn.safeFormattedGroupDescription(t)
          , i = e.querySelector("p:not(.ot-always-active)")
          , a = e.querySelector(Ht.P_Acc_Grp_Desc)
          , l = i || a;
        return -1 < bt.indexOf(t.Type) && o.PCGrpDescType === P.Legal ? s = t.DescriptionLegal : l.classList.add("ot-category-desc"),
        At.legIntSettings.PAllowLI && !At.legIntSettings.PShowLegIntBtn && (t.SubGroups.some(function(e) {
            return e.HasLegIntOptOut
        }) || t.HasLegIntOptOut ? l.parentElement.classList.add("ot-leg-border-color") : _t.removeChild(e.querySelector(Ht.P_Li_Hdr))),
        At.pcName !== et && l.setAttribute("id", n),
        Vt(l).html(s),
        t.Type === Ct && _t.removeChild(l),
        l
    }
    ,
    $n.prototype.cloneOtHtmlEls = function(e) {
        var t = /otPcPanel|otPcCenter/;
        Cn.toggleEl = Vt(e(".ot-tgl")).el.cloneNode(!0),
        Cn.arrowEl = Vt(e("#onetrust-pc-sdk > " + Ht.P_Arrw_Cntr)).el.cloneNode(!0),
        Cn.subGrpEl = Vt(e(Ht.P_Sub_Grp_Cntr)).el.cloneNode(!0),
        Cn.vListEl = Vt(e(Ht.P_Ven_Lst_Cntr)).el.cloneNode(!0),
        Cn.cListEl = Vt(e(Ht.P_Host_Lst_cntr)).el.cloneNode(!0),
        Cn.chkboxEl = Vt(e(Ht.P_CBx_Cntr)).el.cloneNode(!0),
        Cn.accordionEl = Vt(e(".ot-acc-cntr")).el.cloneNode(!0),
        t.test(At.pcName) && (Cn.plusMinusEl = Vt(e(".ot-plus-minus")).el.cloneNode(!0)),
        _t.removeChild(e(".ot-tgl")),
        _t.removeChild(e("#onetrust-pc-sdk > " + Ht.P_Arrw_Cntr)),
        _t.removeChild(e(Ht.P_Sub_Grp_Cntr)),
        _t.removeChild(e(Ht.P_Ven_Lst_Cntr)),
        _t.removeChild(e(Ht.P_Host_Lst_cntr)),
        _t.removeChild(e(Ht.P_CBx_Cntr)),
        _t.removeChild(e(".ot-acc-cntr")),
        t.test(At.pcName) && _t.removeChild(e(".ot-plus-minus"))
    }
    ,
    $n.prototype.insertSelectAllEls = function(e) {
        var t = e(Ht.P_Select_Cntr + " .ot-sel-all-chkbox")
          , o = Cn.chkboxEl.cloneNode(!0);
        o.id = Ht.P_Sel_All_Host_El,
        o.querySelector("input").id = "select-all-hosts-groups-handler",
        o.querySelector("label").setAttribute("for", "select-all-hosts-groups-handler"),
        Vt(t).append(o);
        var n = Cn.chkboxEl.cloneNode(!0);
        n.id = Ht.P_Sel_All_Vendor_Consent_El,
        n.querySelector("input").id = "select-all-vendor-groups-handler",
        n.querySelector("label").setAttribute("for", "select-all-vendor-groups-handler"),
        Vt(t).append(n);
        var r = Cn.chkboxEl.cloneNode(!0);
        r.id = Ht.P_Sel_All_Vendor_Leg_El,
        r.querySelector("input").id = "select-all-vendor-leg-handler",
        r.querySelector("label").setAttribute("for", "select-all-vendor-leg-handler"),
        Vt(t).append(r)
    }
    ,
    $n.prototype.initializePreferenceCenterGroups = function(e, t) {
        var o = At.pcName;
        if (lt.isV2Template) {
            Yn.cloneOtHtmlEls(e);
            var n = Cn.chkboxEl.cloneNode(!0);
            n.querySelector("input").classList.add("category-filter-handler"),
            Vt(e(Ht.P_Fltr_Modal + " " + Ht.P_Fltr_Option)).append(n),
            Yn.insertSelectAllEls(e)
        }
        var r = Vt(e("#onetrust-pc-sdk " + Ht.P_Category_Grp));
        o === Xe || o === Qe || o === $e ? St.PCenterEnableAccordion ? _t.removeChild(r.el.querySelector(Ht.P_Category_Item + ":not(.ot-accordion-layout)")) : _t.removeChild(r.el.querySelector(Ht.P_Category_Item + ".ot-accordion-layout")) : o === et && (St.PCenterEnableAccordion = !1);
        var s, i = e("#onetrust-pc-sdk " + Ht.P_Category_Item), a = lt.isV2Template ? Cn.subGrpEl.cloneNode(!0) : Vt(e(Ht.P_Sub_Grp_Cntr)), l = lt.isV2Template ? "" : Vt(e(Ht.P_Acc_Container + " " + Ht.P_Sub_Grp_Cntr));
        St.PCTemplateUpgrade && /otPcTab/.test(o) && (s = e(".ot-abt-tab").cloneNode(!0),
        _t.removeChild(e(".ot-abt-tab"))),
        r.el.removeChild(i),
        lt.isV2Template ? St.PCAccordionStyle === W.Caret && (Vt(e("#onetrust-pc-sdk " + Ht.P_Vendor_List)).addClass("ot-enbl-chr"),
        St.PCenterEnableAccordion && Vt(e("#onetrust-pc-sdk " + Ht.P_Content)).addClass("ot-enbl-chr")) : Vt(i.querySelector(Ht.P_Sub_Grp_Cntr)).remove();
        var c = St.Groups.filter(function(e) {
            return e.Order
        })
          , d = 0 === r.el.children.length
          , u = e(Ht.P_Li_Hdr) || i.querySelector(Ht.P_Li_Hdr);
        At.legIntSettings.PAllowLI && At.grpContainLegalOptOut && "IAB2" === St.IabType && !At.legIntSettings.PShowLegIntBtn ? (u.querySelector("span:first-child").innerText = St.ConsentText,
        u.querySelector("span:last-child").innerText = St.LegitInterestText,
        lt.isV2Template && (u.querySelector("span:first-child").innerText = St.PCenterConsentText,
        u.querySelector("span:last-child").innerText = St.PCenterLegIntColumnHeader),
        St.PCenterEnableAccordion && u ? u.classList.add("ot-leg-border-color") : "otPcList" === o && i.insertAdjacentElement("afterbegin", u)) : (_t.removeChild(e("#onetrust-pc-sdk " + Ht.P_Li_Hdr)),
        _t.removeChild(i.querySelector(Ht.P_Li_Hdr)));
        for (var p = e(".ot-tab-desc"), h = 0; h < c.length; h++) {
            var g = c[h]
              , C = g.GroupName
              , y = g.CustomGroupId
              , f = i.cloneNode(!0)
              , k = "ot-group-id-" + y
              , v = "ot-header-id-" + y
              , b = "ot-desc-id-" + y;
            (f = Vt(f).el).setAttribute("data-optanongroupid", y);
            var m = f.querySelector("input,button");
            m && (m.setAttribute("aria-controls", b),
            m.setAttribute("aria-labelledby", v)),
            Yn.setParentGroupName(f, C, v, b),
            o === Ze && (g.ShowVendorList && "IAB2" === St.IabType ? (_t.removeChild(f.querySelector("p:not(.ot-always-active)")),
            _t.removeChild(f.querySelector(Ht.P_Acc_Txt + ":not(" + Ht.P_Acc_Container + ")")),
            g.SubGroups.length || lt.isV2Template || _t.removeChild(f.querySelector(Ht.P_Sub_Grp_Cntr))) : _t.removeChild(f.querySelector(Ht.P_Acc_Container)));
            var P = Yn.setParentGroupDescription(f, g, St, b, k);
            lt.isV2Template ? Yn.setToggle(f, P, g, k, v) : Yn.setToggleProps(f, P, g, k, v);
            var A = !!e("#onetrust-pc-sdk " + Ht.P_Category_Grp).querySelector(Ht.P_Category_Item)
              , S = r.el.querySelectorAll(Ht.P_Category_Item);
            if (S = S[S.length - 1],
            d ? r.append(f) : A ? wt.insertAfter(f, S) : wt.insertAfter(f, r.el.querySelector(Ht.P_Li_Hdr) || r.el.querySelector("h3")),
            0 < g.SubGroups.length && g.ShowSubgroup) {
                var T = o === Ze && g.ShowVendorList && "IAB2" === St.IabType && !St.PCTemplateUpgrade;
                Yn.setSubGrps(g, T ? l : a, f, St)
            }
            var I = St.PCGrpDescLinkPosition === B.Top;
            g.Type === Ct && I && (P = f.querySelector(Ht.P_Sub_Grp_Cntr));
            var L = I ? P : null;
            Yn.setVendorListBtn(f, e, t, g, L, St),
            Yn.setHostListBtn(f, e, t, g),
            at.dataGroupState.push(g)
        }
        if ("otPcTab" === o)
            if (s && e("#onetrust-pc-sdk " + Ht.P_Category_Grp).insertAdjacentElement("afterbegin", s),
            p && 640 < window.innerWidth && Vt(p).append(t.querySelectorAll("#onetrust-pc-sdk " + Ht.P_Desc_Container)),
            St.IsIabEnabled)
                e(Ht.P_Desc_Container + " .category-vendors-list-handler").innerHTML = St.VendorListText + "&#x200E;";
            else {
                var _ = e(Ht.P_Desc_Container + " .category-vendors-list-handler");
                _ && _.parentElement.removeChild(_)
            }
    }
    ,
    $n.prototype.jsonAddAboutCookies = function(e) {
        var t = {};
        return t.GroupName = e.AboutCookiesText,
        t.GroupDescription = e.MainInfoText,
        t.ShowInPopup = !0,
        t.Order = 0,
        t.IsAboutGroup = !0,
        t
    }
    ,
    $n.prototype.setVendorListBtn = function(e, t, o, n, r, s) {
        var i = At.pcName;
        if (n.ShowVendorList) {
            var a = void 0
              , l = void 0;
            if (lt.isV2Template ? a = (l = Cn.vListEl.cloneNode(!0)).querySelector(".category-vendors-list-handler") : l = (a = e.querySelector(".category-vendors-list-handler")).parentElement,
            a.innerHTML = s.VendorListText + "&#x200E;",
            a.setAttribute("aria-label", St.PCOpensVendorDetailsAlert),
            a.setAttribute("data-parent-id", n.CustomGroupId),
            s.PCGrpDescType === P.UserFriendly && a.insertAdjacentHTML("afterend", "<a href='" + St.IabLegalTextUrl + "?lang=" + at.consentLanguage + "' rel=\"noopener\" target='_blank'>&nbsp;|&nbsp;" + s.PCVendorFullLegalText + '&nbsp;<span class="ot-scrn-rdr">' + St.NewWinTxt + "</span></a>"),
            lt.isV2Template) {
                var c = e;
                i === et ? c = e.querySelector("" + Ht.P_Desc_Container) : s.PCenterEnableAccordion && (c = e.querySelector(Ht.P_Acc_Txt)),
                c.insertAdjacentElement("beforeend", l)
            }
            r && r.insertAdjacentElement("beforebegin", l)
        } else if (!lt.isV2Template) {
            if (i !== Qe && i !== Xe || s.PCenterEnableAccordion) {
                if (i === Ze || i === Qe || i === Xe && s.PCenterEnableAccordion) {
                    var d = t("#vendor-list-container")
                      , u = e.querySelector(Ht.P_Acc_Txt);
                    d && o.querySelector("" + Ht.P_Content).removeChild(d),
                    lt.isV2Template || Vt(u).el.removeChild(u.querySelector(Ht.P_Ven_Lst_Cntr))
                }
            } else
                _t.removeChild(e.querySelector(Ht.P_Ven_Lst_Cntr));
            if (i === et || i === $e) {
                var p = e.querySelector(Ht.P_Ven_Lst_Cntr);
                p && p.parentElement.removeChild(p)
            }
        }
    }
    ,
    $n.prototype.setHostListBtn = function(e, t, o, n) {
        var r = At.pcName
          , s = !1;
        St.showCookieList && (s = -1 < _t.findIndex(C(n.SubGroups, [n]), function(e) {
            return -1 === yt.indexOf(e.Type) && e.FirstPartyCookies.length
        }));
        var i = at.showGeneralVendors && n.GeneralVendorsIds && n.GeneralVendorsIds.length;
        if ((St.showCookieList || at.showGeneralVendors) && (n.ShowHostList || s || i)) {
            var a = void 0;
            if (lt.isV2Template) {
                var l = Cn.cListEl.cloneNode(!0);
                a = l.querySelector(".category-host-list-handler");
                var c = e;
                r === et ? c = e.querySelector("" + Ht.P_Desc_Container) : St.PCenterEnableAccordion && (c = e.querySelector(Ht.P_Acc_Txt)),
                c.insertAdjacentElement("beforeend", l)
            } else
                a = e.querySelector(".category-host-list-handler");
            if (a) {
                var d = at.showGeneralVendors ? St.GroupGenVenListLabel : St.ThirdPartyCookieListText
                  , u = at.showGeneralVendors ? St.PCenterVendorListScreenReader : St.PCOpensCookiesDetailsAlert;
                a.innerHTML = d + "&#x200E;",
                a.setAttribute("aria-label", u),
                a.setAttribute("data-parent-id", n.CustomGroupId)
            }
        } else if (r === Ze) {
            var p = t("#vendor-list-container")
              , h = e.querySelector(Ht.P_Acc_Txt);
            p && o.querySelector("" + Ht.P_Content).removeChild(p),
            h.querySelector(Ht.P_Host_Lst_cntr) && Vt(h).el.removeChild(h.querySelector(Ht.P_Host_Lst_cntr))
        } else {
            var g = e.querySelector(Ht.P_Host_Lst_cntr);
            g && g.parentElement.removeChild(g)
        }
    }
    ,
    $n.prototype.setSubGrps = function(A, S, T, I) {
        var L = this
          , _ = At.pcName
          , B = I.PCGrpDescType === P.Legal
          , E = C(kt, ft)
          , w = _ === Ze && A.ShowVendorList && "IAB2" === I.IabType;
        if (w && !St.PCTemplateUpgrade) {
            var e = T.querySelector(Ht.P_Sub_Grp_Cntr);
            e.parentElement.removeChild(e)
        }
        A.SubGroups.forEach(function(e) {
            var t;
            "IAB2" !== At.iabType || e.Type !== pt || e.HasConsentOptOut || (t = !0);
            var o, n, r = lt.isV2Template ? S.cloneNode(!0) : S.el.cloneNode(!0), s = r.querySelector(Ht.P_Subgrp_li).cloneNode(!0), i = e.CustomGroupId, a = "ot-sub-group-id-" + i, l = Mt.getGrpStatus(e).toLowerCase(), c = Mt.getGrpStatus(A).toLowerCase(), d = s.querySelector(".cookie-subgroup>h4, .cookie-subgroup>h5, .cookie-subgroup>h6, .ot-subgrp>h4, .ot-subgrp>h5, .ot-subgrp>h6"), u = s.querySelector(Ht.P_Tgl_Cntr);
            s.setAttribute("data-optanongroupid", i),
            lt.isV2Template ? ((n = Cn.toggleEl.cloneNode(!0)).querySelector("input").setAttribute("data-optanongroupid", i),
            n.querySelector("input").classList.add("cookie-subgroup-handler"),
            o = n.cloneNode(!0),
            u.insertAdjacentElement("beforeend", o)) : (o = s.querySelector(".ot-toggle")).querySelector("input").setAttribute("data-optanongroupid", i),
            Vt(r.querySelector(Ht.P_Subgp_ul)).html(""),
            Vt(d).html(e.GroupName),
            o.querySelector("input").setAttribute("id", a),
            o.querySelector("input").setAttribute("aria-label", e.GroupName),
            o.querySelector("label").setAttribute("for", a);
            var p = Vt(s.querySelector(Ht.P_Subgrp_Desc));
            if (w) {
                var h = e.DescriptionLegal && B ? e.DescriptionLegal : e.GroupDescription;
                p.html(h)
            } else {
                h = cn.safeFormattedGroupDescription(e);
                var g = !1;
                -1 < bt.indexOf(e.Type) && B && (g = !0,
                h = e.DescriptionLegal),
                I.PCenterEnableAccordion && g || (p = Vt(s.querySelector("p"))),
                A.ShowSubGroupDescription ? p.html(h) : p.html("")
            }
            if (A.ShowSubgroupToggle && -1 < E.indexOf(e.Type)) {
                var C = cn.isGroupActive(e);
                C && (s.querySelector("input").setAttribute("checked", ""),
                "always active" === c && -1 === bt.indexOf(e.Type) && (s.querySelector("input").disabled = !0,
                s.querySelector("input").setAttribute("disabled", !0)));
                var y = u.querySelector(".ot-label-status");
                if (St.PCShowConsentLabels ? y.innerHTML = C ? St.PCActiveText : St.PCInactiveText : _t.removeChild(y),
                At.legIntSettings.PAllowLI && e.Type === pt && e.HasLegIntOptOut)
                    if (At.legIntSettings.PShowLegIntBtn)
                        Yn.setLegIntButton(s, e);
                    else {
                        var f = u.cloneNode(!0);
                        u.insertAdjacentElement("afterend", f);
                        var k = f.querySelector(".ot-label-status")
                          , v = f.querySelector("input");
                        v.setAttribute("id", a + "-leg-out"),
                        f.querySelector("label").setAttribute("for", a + "-leg-out"),
                        e.IsLegIntToggle = !0;
                        var b = cn.isGroupActive(e);
                        St.PCShowConsentLabels ? k.innerHTML = b ? St.PCActiveText : St.PCInactiveText : _t.removeChild(k),
                        _t.setCheckedAttribute(null, v, b),
                        e.IsLegIntToggle = !1
                    }
            } else
                "always active" === l && (A.ShowSubgroupToggle || -1 === vt.indexOf(e.Type)) || (t = !0);
            if (t && (o.classList.add("ot-hide-tgl"),
            o.querySelector("input").setAttribute(L._ariaHidden, !0)),
            "always active" !== l || t || (o && o.parentElement.removeChild(o),
            s.querySelector(Ht.P_Tgl_Cntr).classList.add("ot-always-active-subgroup"),
            Yn.setAlwaysActive(s, !0)),
            "COOKIE" === e.Type && -1 !== e.Parent.indexOf("STACK") && Tt(r, "display: none;"),
            Vt(r.querySelector(Ht.P_Subgp_ul)).append(s),
            lt.isV2Template) {
                var m = T;
                "otPcTab" === _ ? m = T.querySelector("" + Ht.P_Desc_Container) : I.PCenterEnableAccordion && (m = T.querySelector(Ht.P_Acc_Txt)),
                m.insertAdjacentElement("beforeend", r)
            } else {
                var P = T.querySelector(Ht.P_Category_Item + " " + Ht.P_Ven_Lst_Cntr);
                P && P.insertAdjacentElement("beforebegin", r)
            }
        })
    }
    ,
    $n.prototype.setToggle = function(e, t, o, n, r) {
        var s = Cn.toggleEl.cloneNode(!0);
        s.querySelector("input").classList.add("category-switch-handler");
        var i = s.querySelector("input")
          , a = e.querySelector(Ht.P_Category_Header)
          , l = cn.isGroupActive(o)
          , c = "always active" === Mt.getGrpStatus(o).toLowerCase()
          , d = o.OptanonGroupId.toString()
          , u = !0;
        if ("IAB2" !== At.iabType || o.Type !== pt && o.Type !== Ct || o.HasConsentOptOut || (u = !1),
        Vt(s.querySelector("label")).attr("for", n),
        Vt(s.querySelector(".ot-label-txt")).html(o.GroupName),
        At.legIntSettings.PAllowLI && o.Type === pt && o.HasLegIntOptOut)
            if (At.legIntSettings.PShowLegIntBtn)
                Yn.setLegIntButton(e, o, !0, t);
            else {
                var p = s.cloneNode(!0);
                o.IsLegIntToggle = !0;
                var h = cn.isGroupActive(o)
                  , g = p.querySelector(".ot-label-status");
                St.PCShowConsentLabels ? g.innerHTML = h ? St.PCActiveText : St.PCInactiveText : _t.removeChild(g),
                o.IsLegIntToggle = !1,
                cn.setInputID(p.querySelector("input"), n + "-leg-out", d, h, r),
                Vt(p.querySelector("label")).attr("for", n + "-leg-out"),
                a.insertAdjacentElement("afterend", p)
            }
        var C = s.querySelector(".ot-label-status");
        St.PCShowConsentLabels ? C.innerHTML = l ? St.PCActiveText : St.PCInactiveText : _t.removeChild(C),
        !c && u || (s.classList.add("ot-hide-tgl"),
        s.querySelector("input").setAttribute(this._ariaHidden, !0)),
        u && (c ? Yn.setAlwaysActive(e) : (a.insertAdjacentElement("afterend", s),
        cn.setInputID(i, n, d, l, r))),
        St.PCenterEnableAccordion && (St.PCAccordionStyle === W.Caret ? a.insertAdjacentElement("afterend", Cn.arrowEl.cloneNode(!0)) : a.insertAdjacentElement("beforebegin", Cn.plusMinusEl.cloneNode(!0)))
    }
    ,
    $n.prototype.setToggleProps = function(e, t, o, n, r) {
        var s = e.querySelectorAll("input:not(.cookie-subgroup-handler)")
          , i = e.querySelectorAll("label")
          , a = cn.isGroupActive(o)
          , l = o.CustomGroupId
          , c = e.querySelector(".label-text");
        c && Vt(c).html(o.GroupName);
        for (var d = 0; d < s.length; d++)
            if (i[d] && Vt(i[d]).attr("for", n),
            2 <= s.length && 0 === d)
                Vt(s[d]).attr("id", n + "-toggle");
            else {
                var u = !0;
                if ("IAB2" !== At.iabType || o.Type !== pt && o.Type !== Ct || o.HasConsentOptOut || (u = !1),
                At.legIntSettings.PAllowLI && o.Type === pt && o.HasLegIntOptOut)
                    if (At.legIntSettings.PShowLegIntBtn)
                        Yn.setLegIntButton(e, o, !0, t);
                    else {
                        var p = e.querySelector(Ht.P_Tgl_Cntr + ":not(" + Ht.P_Subgrp_Tgl_Cntr + ")") || e.querySelector(".ot-toggle")
                          , h = p.cloneNode(!0);
                        p.insertAdjacentElement("afterend", h);
                        var g = h.querySelector("input");
                        o.IsLegIntToggle = !0;
                        var C = cn.isGroupActive(o);
                        o.IsLegIntToggle = !1,
                        cn.setInputID(g, n + "-leg-out", l, C, r),
                        Vt(h.querySelector("label")).attr("for", n + "-leg-out"),
                        _t.removeChild(h.querySelector(Ht.P_Arrw_Cntr))
                    }
                var y = "always active" === Mt.getGrpStatus(o).toLowerCase();
                if (y || !u) {
                    var f = s[d].closest(".ot-toggle");
                    f && (f.classList.add("ot-hide-tgl"),
                    f.querySelector("input").setAttribute(this._ariaHidden, !0))
                }
                u && (y && Yn.setAlwaysActive(e),
                cn.setInputID(s[d], n, l, a, r))
            }
    }
    ,
    $n.prototype.setAlwaysActive = function(e, t) {
        void 0 === t && (t = !1);
        var o = At.pcName;
        if (o === Ze || o === et || t)
            e.querySelector(Ht.P_Tgl_Cntr).insertAdjacentElement("afterbegin", Vt("<div class='ot-always-active'>" + St.AlwaysActiveText + "</div>", "ce").el);
        else {
            var n = e.querySelector(Ht.P_Category_Header);
            !lt.isV2Template && St.PCenterEnableAccordion && (n = e.querySelector(Ht.P_Arrw_Cntr)),
            Vt(n).el.insertAdjacentElement("afterend", Vt("<div class='ot-always-active'>" + St.AlwaysActiveText + "</div>", "ce").el)
        }
        if (St.PCenterEnableAccordion) {
            var r = e.querySelector(Ht.P_Acc_Header);
            r && r.classList.add("ot-always-active-group")
        } else {
            var s = e.querySelector("" + Ht.P_Desc_Container);
            s && s.classList.add("ot-always-active-group"),
            e.classList.add("ot-always-active-group")
        }
    }
    ,
    $n);
    function $n() {
        this._ariaHidden = "aria-hidden"
    }
    var Qn, Zn = (er.prototype.showBanner = function() {
        var e = At.bannerName
          , t = Vt(this.El);
        at.skipAddingHTML && "none" === getComputedStyle(t.el[0]).getPropertyValue("display") && e !== je && e !== Ue && e !== We ? t.css("display: block;") : St.BAnimation === re.SlideIn ? this.slideInAnimation(t, e) : St.BAnimation === re.FadeIn && t.addClass("ot-fade-in")
    }
    ,
    er.prototype.insertAlertHtml = function() {
        function e(e) {
            return r.querySelector(e)
        }
        function t(e) {
            return r.querySelectorAll(e)
        }
        var o = this
          , n = St.BannerPurposeTitle || St.BannerPurposeDescription || St.BannerFeatureTitle || St.BannerFeatureDescription || St.BannerInformationTitle || St.BannerInformationDescription
          , r = document.createDocumentFragment()
          , s = At.bannerName
          , i = document.createElement("div");
        Vt(i).html(Qo.bannerGroup.html);
        var a = i.querySelector("#onetrust-banner-sdk");
        if (lt.fp.CookieV2SSR)
            Vt(r).append(a),
            this._rejectBtn = e("#onetrust-reject-all-handler"),
            this._acceptBtn = e("#onetrust-accept-btn-handler");
        else {
            var l = [{
                type: "purpose",
                titleKey: "BannerPurposeTitle",
                descriptionKey: "BannerPurposeDescription",
                identifier: "purpose-option"
            }, {
                type: "feature",
                titleKey: "BannerFeatureTitle",
                descriptionKey: "BannerFeatureDescription",
                identifier: "feature-option"
            }, {
                type: "information",
                titleKey: "BannerInformationTitle",
                descriptionKey: "BannerInformationDescription",
                identifier: "information-option"
            }];
            if (Qo.bannerGroup) {
                St.BannerRelativeFontSizesToggle && Vt(a).addClass("otRelFont"),
                (St.BInitialFocus || St.BInitialFocusLinkAndButton) && a.setAttribute("tabindex", "0"),
                St.useRTL && Vt(a).attr("dir", "rtl"),
                "IAB2" === At.iabType && St.BannerDPDDescription.length && Vt(a).addClass("ot-iab-2");
                var c = St.BannerPosition;
                if (c && ("bottom-left" === c ? Vt(a).addClass("ot-bottom-left") : "bottom-right" === c ? Vt(a).addClass("ot-bottom-right") : Vt(a).addClass(c)),
                Vt(r).append(a),
                St.BannerTitle ? (Vt(e("#onetrust-policy-title")).html(St.BannerTitle),
                Vt(e('[role="alertdialog"]')).attr("aria-label", St.BannerTitle)) : (_t.removeChild(e("#onetrust-policy-title")),
                Vt(e("#onetrust-banner-sdk")).addClass("ot-wo-title"),
                Vt(e('[role="alertdialog"]')).attr("aria-label", St.AriaPrivacy)),
                !St.IsIabEnabled && at.showGeneralVendors && St.BannerNonIABVendorListText) {
                    var d = document.createElement("div");
                    d.setAttribute("id", "ot-gv-link-ctnr"),
                    Vt(d).html('<button class="ot-link-btn ot-gv-list-handler">' + St.BannerNonIABVendorListText + "</button>"),
                    Vt(e("#onetrust-policy")).el.appendChild(d)
                }
                Vt(e("#onetrust-policy-text")).html(St.AlertNoticeText),
                St.BShowPolicyLink && St.BShowImprintLink && Vt(e("#onetrust-policy-text a")).length ? (Vt(e("#onetrust-policy-text a:first-child")).attr("aria-label", St.BCookiePolicyLinkScreenReader),
                Vt(e("#onetrust-policy-text a:last-child")).attr("aria-label", St.BImprintLinkScreenReader)) : St.BShowPolicyLink && Vt(e("#onetrust-policy-text a")).length ? Vt(e("#onetrust-policy-text a")).attr("aria-label", St.BCookiePolicyLinkScreenReader) : St.BShowImprintLink && Vt(e("#onetrust-policy-text a")).length && Vt(e("#onetrust-policy-text a")).attr("aria-label", St.BImprintLinkScreenReader),
                "IAB2" === St.IabType && St.BannerDPDDescription.length && s !== Je ? (Vt(e(".ot-dpd-container .ot-dpd-title")).html(St.BannerDPDTitle),
                Vt(e(".ot-dpd-container .ot-dpd-desc")).html(St.BannerDPDDescription.join(",&nbsp;"))) : _t.removeChild(e(".ot-dpd-container"));
                var u = Vt(e("#onetrust-group-container"));
                "IAB2" === At.iabType && St.BannerAdditionalDescription.trim() && this.setAdditionalDesc(e);
                var p = "IAB2" === St.IabType && St.BannerDPDDescription.length ? s !== Je ? Vt(e(".ot-dpd-container .ot-dpd-desc")) : u : Vt(e("#onetrust-policy-text"));
                St.IsIabEnabled && St.BannerIABPartnersLink && p.append('<button class="ot-link-btn onetrust-vendors-list-handler">\n                ' + St.BannerIABPartnersLink + "\n                </button>"),
                St.showBannerAcceptButton ? (this._acceptBtn = e("#onetrust-accept-btn-handler"),
                Vt(this._acceptBtn).html(St.AlertAllowCookiesText),
                s !== We || St.showBannerCookieSettings || St.BannerShowRejectAllButton || Vt(this._acceptBtn.parentElement).addClass("accept-btn-only")) : _t.removeChild(e("#onetrust-accept-btn-handler")),
                St.BannerShowRejectAllButton && St.BannerRejectAllButtonText.trim() ? (this._rejectBtn = e("#onetrust-reject-all-handler"),
                Vt(this._rejectBtn).html(St.BannerRejectAllButtonText),
                e("#onetrust-button-group-parent").classList.add("has-reject-all-button")) : (_t.removeChild(e("#onetrust-reject-all-handler")),
                _t.removeChild(e("#onetrust-reject-btn-container")));
                var h = Vt(e("#onetrust-pc-btn-handler"));
                St.showBannerCookieSettings ? (h.html(St.AlertMoreInfoText),
                St.BannerSettingsButtonDisplayLink && h.addClass("cookie-setting-link"),
                s !== We || St.showBannerAcceptButton || h.addClass("cookie-settings-btn-only")) : _t.removeChild(h.el);
                var g = !St.showBannerAcceptButton && !St.showBannerCookieSettings && !St.BannerShowRejectAllButton;
                g && e("#onetrust-button-group-parent").parentElement.removeChild(e("#onetrust-button-group-parent"));
                var C = St.showBannerCloseButton
                  , y = Vt(t(".banner-close-button")).el
                  , f = e("#onetrust-button-group")
                  , k = St.BCloseButtonType === ie.Link;
                if (C)
                    for (v = 0; v < y.length; v++)
                        k ? (Vt(y[v]).html(St.BContinueText),
                        Vt(a).addClass("ot-close-btn-link"),
                        Vt(y[v]).addClass("ot-close-link"),
                        Vt(y[v]).removeClass("onetrust-close-btn-ui"),
                        Vt(y[v]).removeClass("ot-close-icon"),
                        s !== ze && s !== Ke || (f.insertAdjacentElement("afterbegin", e(".onetrust-close-btn-handler").parentElement),
                        Vt(y[v]).attr("tabindex", "1"))) : Vt(y[v]).el.setAttribute("aria-label", St.BannerCloseButtonText || "Close Cookie Banner");
                else {
                    for (var v = 0; v < y.length; v++)
                        Vt(y[v].parentElement).el.removeChild(y[v]);
                    s !== Ue && s !== Ke || _t.removeChild(e("#onetrust-close-btn-container-mobile"))
                }
                if (s === Ue && ("IAB2" === At.iabType && (u.removeClass("ot-sdk-eight"),
                St.showBannerAcceptButton && f.insertAdjacentElement("afterbegin", this._acceptBtn),
                St.showBannerCookieSettings && f.insertAdjacentElement("beforeend", e("#onetrust-pc-btn-handler"))),
                C && !g && "IAB2" === At.iabType ? u.addClass("ot-sdk-nine") : C && g ? u.addClass("ot-sdk-eleven") : !C && g ? u.addClass("ot-sdk-twelve") : C || g || "IAB2" !== At.iabType || (u.addClass("ot-sdk-ten"),
                Vt(e("#onetrust-button-group-parent")).addClass("ot-sdk-two"),
                Vt(e("#onetrust-button-group-parent")).removeClass("ot-sdk-three"))),
                C && s === ze && "IAB2" === At.iabType && !k) {
                    var b = e(".banner-close-btn-container");
                    b.parentElement.removeChild(b),
                    Vt(a).el.insertAdjacentElement("beforeEnd", b),
                    Vt(e("#onetrust-banner-sdk .ot-sdk-container")).addClass("ot-top-cntr")
                }
                var m = Vt(e("#banner-options")).el;
                n ? (s === Ke ? this.setFloatingRoundedIconBannerCmpOptions(e, l) : (this.setCmpBannerOptions(e, l),
                s === Je && u.el.insertAdjacentElement("beforeend", m)),
                Vt(window).on("resize", function() {
                    window.innerWidth <= 896 && o.setBannerOptionContent()
                })) : (At.bannerName === ze && (m = Vt(e(".banner-options-card")).el),
                _t.removeChild(m))
            }
        }
        At.bannerName === Je && lt.moduleInitializer.IsSuppressPC && (at.dataGroupState = St.Groups.filter(function(e) {
            return e.Order
        })),
        At.bannerName === Je && (this._fourBtns = St.BannerShowRejectAllButton && St.showBannerAcceptButton && St.showBannerCookieSettings && St.BShowSaveBtn,
        this._saveBtn = e(".ot-bnr-save-handler"),
        this._settingsBtn = e("#onetrust-pc-btn-handler"),
        this._btnsCntr = e(".banner-actions-container"),
        St.BShowSaveBtn ? Vt(this._saveBtn).html(St.BSaveBtnTxt) : (_t.removeChild(this._saveBtn),
        this._saveBtn = null),
        Gt.insertFooterLogo(t(".ot-bnr-footer-logo a")),
        this._descriptCntr = e(".ot-cat-lst"),
        this.setBannerBtn(),
        window.addEventListener("resize", function() {
            o.setBannerBtn()
        }),
        this._fourBtns && Vt(e("#onetrust-banner-sdk")).addClass("has-reject-all-button"),
        this.insertGrps(e));
        var P = document.createElement("div");
        Vt(P).append(r),
        At.ignoreInjectingHtmlCss || (Vt("#onetrust-consent-sdk").append(P.firstChild),
        n && this.setBannerOptionContent()),
        this.setBnrBtnGrpAlignment()
    }
    ,
    er.prototype.setBnrBtnGrpAlignment = function() {
        var e = Vt("#onetrust-group-container").el
          , t = Vt("#onetrust-button-group-parent").el;
        (e.length && e[0].clientHeight) < (t.length && t[0].clientHeight) ? Vt("#onetrust-banner-sdk").removeClass("vertical-align-content") : Vt("#onetrust-banner-sdk").addClass("vertical-align-content");
        var o = document.querySelector("#onetrust-button-group-parent button:first-of-type")
          , n = document.querySelector("#onetrust-button-group-parent button:last-of-type");
        n && o && 1 < Math.abs(n.offsetTop - o.offsetTop) && Vt("#onetrust-banner-sdk").addClass("ot-buttons-fw")
    }
    ,
    er.prototype.slideInAnimation = function(e, t) {
        t === Ue ? "bottom" === St.BannerPosition ? (e.css("bottom: -99px;"),
        e.animate({
            bottom: "0px"
        }, 1e3),
        at.bnrAnimationInProg = !0,
        setTimeout(function() {
            e.css("bottom: 0px;"),
            at.bnrAnimationInProg = !1
        }, 1e3)) : (e.css("top: -99px; bottom: auto;"),
        At.pagePushedDown && !po.checkIsBrowserIE11OrBelow() ? po.BannerPushDownHandler() : (e.animate({
            top: "0"
        }, 1e3),
        at.bnrAnimationInProg = !0,
        setTimeout(function() {
            e.css("top: 0px; bottom: auto;"),
            at.bnrAnimationInProg = !1
        }, 1e3))) : t !== je && t !== We || (e.css("bottom: -300px;"),
        e.animate({
            bottom: "1em"
        }, 2e3),
        at.bnrAnimationInProg = !0,
        setTimeout(function() {
            e.css("bottom: 1rem;"),
            at.bnrAnimationInProg = !1
        }, 2e3))
    }
    ,
    er.prototype.setBannerBtn = function() {
        window.innerWidth <= 600 ? (_t.insertElement(this._btnsCntr, this._settingsBtn, "afterbegin"),
        _t.insertElement(this._btnsCntr, this._saveBtn, "afterbegin"),
        _t.insertElement(this._btnsCntr, this._acceptBtn, "afterbegin"),
        _t.insertElement(this._btnsCntr, this._rejectBtn, "afterbegin")) : this._fourBtns ? (this._descriptCntr.insertAdjacentElement("beforeend", this._settingsBtn),
        this._acceptBtn.insertAdjacentElement("beforebegin", this._rejectBtn),
        this._btnsCntr.insertAdjacentElement("beforebegin", this._saveBtn)) : (_t.insertElement(this._btnsCntr, this._settingsBtn, "beforebegin"),
        _t.insertElement(this._btnsCntr, this._saveBtn, this._settingsBtn ? "afterbegin" : "beforebegin"),
        _t.insertElement(this._btnsCntr, this._rejectBtn, "beforeend"),
        _t.insertElement(this._btnsCntr, this._acceptBtn, "beforeend"))
    }
    ,
    er.prototype.setCmpBannerOptions = function(s, e) {
        var i = Vt(s("#banner-options .banner-option")).el.cloneNode(!0);
        Vt(s("#banner-options")).html("");
        var a = 1;
        e.forEach(function(e) {
            var t = i.cloneNode(!0)
              , o = St[e.titleKey]
              , n = St[e.descriptionKey];
            if (o || n) {
                t.querySelector(".banner-option-header :first-child").innerHTML = o;
                var r = t.querySelector(".banner-option-details");
                n ? (r.setAttribute("id", "option-details-" + a++),
                r.innerHTML = n) : r.parentElement.removeChild(r),
                Vt(s("#banner-options")).el.appendChild(t)
            }
        })
    }
    ,
    er.prototype.setFloatingRoundedIconBannerCmpOptions = function(r, e) {
        var s = Vt(r("#banner-options button")).el.cloneNode(!0)
          , n = Vt(r(".banner-option-details")).el.cloneNode(!0);
        Vt(r("#banner-options")).html(""),
        e.forEach(function(e) {
            var t = s.cloneNode(!0)
              , o = St[e.titleKey]
              , n = St[e.descriptionKey];
            (o || n) && (t.setAttribute("id", e.identifier),
            t.querySelector(".banner-option-header :first-child").innerHTML = o,
            Vt(r("#banner-options")).el.appendChild(t))
        }),
        e.forEach(function(e) {
            var t = St[e.descriptionKey];
            if (t) {
                var o = n.cloneNode(!0);
                o.innerHTML = t,
                o.classList.add(e.identifier),
                Vt(r("#banner-options")).el.appendChild(o)
            }
        })
    }
    ,
    er.prototype.setBannerOptionContent = function() {
        At.bannerName !== Ue && At.bannerName !== Ke || setTimeout(function() {
            if (window.innerWidth < 769) {
                var e = Vt("#banner-options").el[0];
                Vt("#onetrust-group-container").el[0].appendChild(e)
            } else
                e = Vt("#banner-options").el[0],
                At.bannerName === Ke ? Vt(".banner-content").el[0].appendChild(e) : Vt("#onetrust-banner-sdk .ot-sdk-container").el[0].appendChild(e)
        })
    }
    ,
    er.prototype.setAdditionalDesc = function(e) {
        var t = St.BannerAdditionalDescPlacement
          , o = document.createElement("span");
        o.classList.add("ot-b-addl-desc"),
        o.innerHTML = St.BannerAdditionalDescription;
        var n = e("#onetrust-policy-text");
        if (t === E.AfterTitle)
            n.insertAdjacentElement("beforeBegin", o);
        else if (t === E.AfterDescription)
            n.insertAdjacentElement("afterEnd", o);
        else if (t === E.AfterDPD) {
            var r = e(".ot-dpd-container .ot-dpd-desc");
            St.ChoicesBanner && (r = e("#onetrust-group-container")),
            r.insertAdjacentElement("beforeEnd", o)
        }
    }
    ,
    er.prototype.insertGrps = function(e) {
        var p = e(".ot-cat-item").cloneNode(!0);
        _t.removeChild(e(".ot-cat-item")),
        St.BCategoryStyle === oe.Checkbox ? _t.removeChild(p.querySelector(".ot-tgl")) : (_t.removeChild(p.querySelector(".ot-chkbox")),
        Vt(p).addClass("ot-cat-bdr"));
        var h = e(".ot-cat-lst ul");
        St.Groups.forEach(function(e) {
            var t = p.cloneNode(!0)
              , o = t.querySelector(".ot-tgl,.ot-chkbox")
              , n = e.GroupName
              , r = e.CustomGroupId
              , s = "ot-bnr-grp-id-" + r
              , i = "ot-bnr-hdr-id-" + r
              , a = -1 !== vt.indexOf(e.Type)
              , l = Mt.getGrpStatus(e).toLowerCase() === we || a
              , c = cn.isGroupActive(e) || a;
            Vt(o.querySelector("label")).attr("for", s),
            Vt(o.querySelector(".ot-label-txt")).html(e.GroupName);
            var d = o.querySelector("input");
            l && (St.BCategoryStyle === oe.Toggle ? (_t.removeChild(o),
            t.insertAdjacentElement("beforeend", Vt("<div class='ot-always-active'>" + St.AlwaysActiveText + "</div>", "ce").el)) : Vt(d).attr("disabled", !0)),
            d.classList.add("category-switch-handler"),
            cn.setInputID(d, s, r, c, i);
            var u = t.querySelector("h4");
            Vt(u).html(n),
            Vt(u).attr("id", i),
            Vt(h).append(t)
        })
    }
    ,
    er);
    function er() {
        this.El = "#onetrust-banner-sdk",
        this._saveBtn = null,
        this._settingsBtn = null,
        this._acceptBtn = null,
        this._rejectBtn = null,
        this._descriptCntr = null,
        this._btnsCntr = null,
        this._fourBtns = !1
    }
    var tr, or = (nr.prototype.initCookieSettingHandlers = function() {
        Vt(document).on("click", ".optanon-show-settings, .optanon-toggle-display, .ot-sdk-show-settings, .ot-pc-handler", this.cookiesSettingsBoundListener)
    }
    ,
    nr.prototype.initFlgtCkStgBtnEventHandlers = function() {
        Vt(".ot-floating-button__open").on("click", tr.floatingCookieSettingOpenBtnClicked),
        Vt(".ot-floating-button__close").on("click", tr.floatingCookieSettingCloseBtnClicked)
    }
    ,
    nr.prototype.floatingCookieSettingOpenBtnClicked = function(e) {
        Vt(tr.fltgBtnSltr).addClass("ot-pc-open"),
        St.cookiePersistentLogo.includes("ot_guard_logo.svg") && Vt(tr.fltgBtnFSltr).attr("aria-hidden", "true"),
        Vt(tr.fltgBtnBSltr).attr("aria-hidden", ""),
        Vt(tr.fltgBtnFrontBtn).el[0].setAttribute("aria-label", ""),
        Vt(tr.fltgBtnFrontBtn).el[0].setAttribute("aria-hidden", !0),
        Vt(tr.fltgBtnBackBtn).el[0].setAttribute("aria-label", St.AriaClosePreferences),
        Vt(tr.fltgBtnBackBtn).el[0].setAttribute("aria-hidden", !1),
        fo.triggerGoogleAnalyticsEvent(Po, Vo),
        tr.showCookieSettingsHandler(e)
    }
    ,
    nr.prototype.floatingCookieSettingCloseBtnClicked = function(e) {
        Vt(tr.fltgBtnFrontBtn).el[0].setAttribute("aria-label", St.AriaOpenPreferences),
        Vt(tr.fltgBtnFrontBtn).el[0].setAttribute("aria-hidden", !1),
        Vt(tr.fltgBtnBackBtn).el[0].setAttribute("aria-label", ""),
        Vt(tr.fltgBtnBackBtn).el[0].setAttribute("aria-hidden", !0),
        e && (fo.triggerGoogleAnalyticsEvent(Po, Go),
        tr.hideCookieSettingsHandler(e))
    }
    ,
    nr.prototype.initialiseLegIntBtnHandlers = function() {
        Vt(document).on("click", ".ot-obj-leg-btn-handler", tr.onLegIntButtonClick),
        Vt(document).on("click", ".ot-remove-objection-handler", tr.onLegIntButtonClick)
    }
    ,
    nr.prototype.initialiseAddtlVenHandler = function() {
        Vt("#onetrust-pc-sdk #ot-addtl-venlst").on("click", tr.selectVendorsGroupHandler),
        Vt("#onetrust-pc-sdk #ot-selall-adtlven-handler").on("click", tr.selAllAdtlVenHandler)
    }
    ,
    nr.prototype.initializeGenVenHandlers = function() {
        Vt("#onetrust-pc-sdk #ot-gn-venlst .ot-gnven-chkbox-handler").on("click", tr.genVendorToggled),
        Vt("#onetrust-pc-sdk #ot-gn-venlst .ot-gv-venbox").on("click", tr.genVendorDetails),
        Vt("#onetrust-pc-sdk #ot-selall-gnven-handler").on("click", tr.selectAllGenVenHandler)
    }
    ,
    nr.prototype.initialiseConsentNoticeHandlers = function() {
        var e = this
          , t = 37
          , o = 39;
        if (At.pcName === et && tr.categoryMenuSwitchHandler(),
        Vt("#onetrust-pc-sdk .onetrust-close-btn-handler").on("click", tr.bannerCloseButtonHandler),
        Vt("#onetrust-pc-sdk #accept-recommended-btn-handler").on("click", rr.allowAllEventHandler.bind(this, !0)),
        Vt("#onetrust-pc-sdk .ot-pc-refuse-all-handler").on("click", rr.rejectAllEventHandler.bind(this, !0)),
        Vt("#onetrust-pc-sdk #close-pc-btn-handler").on("click", tr.hideCookieSettingsHandler),
        Vt(document).on("keydown", function(e) {
            var t = document.getElementById("onetrust-pc-sdk")
              , o = "none" !== window.getComputedStyle(t).display;
            if (27 === e.keyCode && t && o) {
                var n = Vt("#onetrust-pc-sdk " + Ht.P_Fltr_Modal).el[0];
                "block" === n.style.display || "0px" < n.style.width ? (tr.closeFilter(),
                Vt("#onetrust-pc-sdk #filter-btn-handler").focus()) : St.NoBanner && !St.ShowPreferenceCenterCloseButton || tr.hideCookieSettingsHandler(),
                tr.confirmPC()
            }
            (o && 32 === e.keyCode || "Space" === e.code || 13 === e.keyCode || "Enter" === e.code) && Gt.findUserType(e)
        }),
        Vt("#onetrust-pc-sdk #vendor-close-pc-btn-handler").on("click", tr.hideCookieSettingsHandler),
        Vt("#onetrust-pc-sdk .category-switch-handler").on("click", tr.toggleV2Category),
        Vt("#onetrust-pc-sdk .cookie-subgroup-handler").on("click", tr.toggleSubCategory),
        Vt("#onetrust-pc-sdk .category-menu-switch-handler").on("keydown", function(e) {
            At.pcName === et && (e.keyCode !== t && e.keyCode !== o || (St.PCTemplateUpgrade ? tr.changeSelectedTabV2(e) : tr.changeSelectedTab(e)))
        }),
        Vt("#onetrust-pc-sdk").on("click", Ht.P_Category_Item + " > input:first-child," + Ht.P_Category_Item + " > button:first-child", tr.onCategoryItemToggle.bind(this)),
        (St.showCookieList || at.showGeneralVendors) && (Vt("#onetrust-pc-sdk .category-host-list-handler").on("click", function(e) {
            at.showGeneralVendors && St.showCookieList ? at.cookieListType = z.HostAndGenVen : at.showGeneralVendors ? at.cookieListType = z.GenVen : at.cookieListType = z.Host,
            tr.pcLinkSource = e.target,
            tr.loadCookieList(e.target)
        }),
        Gt.isOptOutEnabled() ? (Vt("#onetrust-pc-sdk #select-all-hosts-groups-handler").on("click", tr.selectAllHostsGroupsHandler),
        Vt("#onetrust-pc-sdk " + Ht.P_Host_Cntr).on("click", tr.selectHostsGroupHandler)) : Vt("#onetrust-pc-sdk " + Ht.P_Host_Cntr).on("click", tr.toggleAccordionStatus)),
        St.IsIabEnabled && (Vt("#onetrust-pc-sdk .category-vendors-list-handler").on("click", function(e) {
            tr.pcLinkSource = e.target,
            tr.showVendorsList(e.target)
        }),
        Vt("#onetrust-pc-sdk " + Ht.P_Vendor_Container).on("click", tr.selectVendorsGroupHandler),
        St.UseGoogleVendors || tr.bindSelAllHandlers(),
        tr.initialiseLegIntBtnHandlers()),
        St.IsIabEnabled || St.showCookieList || at.showGeneralVendors) {
            Vt(document).on("click", ".back-btn-handler", tr.backBtnHandler),
            Vt("#onetrust-pc-sdk #vendor-search-handler").on("keyup", function(e) {
                var t = e.target.value.trim();
                tr.isCookieList ? bn.searchHostList(t) : (bn.loadVendorList(t, []),
                St.UseGoogleVendors && bn.searchVendors(bn.googleSearchSelectors, at.addtlVendorsList, Q.GoogleVendor, t),
                at.showGeneralVendors && bn.searchVendors(bn.genVendorSearchSelectors, St.GeneralVendors, Q.GeneralVendor, t)),
                bn.playSearchStatus(tr.isCookieList)
            }),
            Vt("#onetrust-pc-sdk #filter-btn-handler").on("click", tr.toggleVendorFiltersHandler),
            Vt("#onetrust-pc-sdk #filter-apply-handler").on("click", tr.applyFilterHandler),
            Vt("#onetrust-pc-sdk " + Ht.P_Fltr_Modal).on("click", tr.tglFltrOptionHandler),
            !lt.isV2Template && At.pcName !== Ze || Vt("#onetrust-pc-sdk #filter-cancel-handler").on("click", tr.cancelFilterHandler),
            !lt.isV2Template && At.pcName === Ze || Vt("#onetrust-pc-sdk #clear-filters-handler").on("click", tr.clearFiltersHandler),
            lt.isV2Template ? Vt("#onetrust-pc-sdk #filter-cancel-handler").on("keydown", function(e) {
                9 !== e.keyCode && "tab" !== e.code || e.shiftKey || (e.preventDefault(),
                Vt("#onetrust-pc-sdk #clear-filters-handler").el[0].focus())
            }) : Vt("#onetrust-pc-sdk #filter-apply-handler").on("keydown", function(e) {
                9 !== e.keyCode && "tab" !== e.code || e.shiftKey || (e.preventDefault(),
                Vt("#onetrust-pc-sdk .category-filter-handler").el[0].focus())
            });
            var n = Vt("#onetrust-pc-sdk .category-filter-handler").el;
            Vt(n[0]).on("keydown", function(e) {
                9 !== e.keyCode && "tab" !== e.code || !e.shiftKey || (e.preventDefault(),
                Vt("#onetrust-pc-sdk #filter-apply-handler").el[0].focus())
            })
        }
        St.NoBanner && (St.OnClickCloseBanner && document.body.addEventListener("click", rr.bodyClickEvent),
        St.ScrollCloseBanner && window.addEventListener("scroll", rr.scrollCloseBanner)),
        Vt("#onetrust-pc-sdk .ot-gv-list-handler").on("click", function(t) {
            return l(e, void 0, void 0, function() {
                return h(this, function(e) {
                    return at.cookieListType = z.GenVen,
                    tr.loadCookieList(t.target),
                    [2]
                })
            })
        })
    }
    ,
    nr.prototype.bindSelAllHandlers = function() {
        Vt("#onetrust-pc-sdk #select-all-vendor-leg-handler").on("click", tr.selectAllVendorsLegIntHandler),
        Vt("#onetrust-pc-sdk #select-all-vendor-groups-handler").on("click", tr.SelectAllVendorConsentHandler)
    }
    ,
    nr.prototype.hideCookieSettingsHandler = function(e) {
        return void 0 === e && (e = window.event),
        fo.triggerGoogleAnalyticsEvent(Po, Lo),
        In.hideConsentNoticeV2(),
        tr.getResizeElement().removeEventListener("resize", tr.setCenterLayoutFooterHeight),
        window.removeEventListener("resize", tr.setCenterLayoutFooterHeight),
        !lt.isV2Template && At.pcName !== Ze || tr.closeFilter(!1),
        At.pcName === $e && Vt("#onetrust-pc-sdk " + Ht.P_Content).removeClass("ot-hide"),
        rr.hideVendorsList(),
        Qo.csBtnGroup && (Vt(tr.fltgBtnSltr).removeClass("ot-pc-open"),
        tr.floatingCookieSettingCloseBtnClicked(null)),
        tr.confirmPC(e),
        rr.resetConsent(),
        !1
    }
    ,
    nr.prototype.selectAllHostsGroupsHandler = function(e) {
        var t = e.target.checked
          , o = Vt("#onetrust-pc-sdk #" + Ht.P_Sel_All_Host_El).el[0]
          , n = o.classList.contains("line-through")
          , r = Vt("#onetrust-pc-sdk .host-checkbox-handler").el;
        _t.setCheckedAttribute("#select-all-hosts-groups-handler", null, t);
        for (var s = 0; s < r.length; s++)
            r[s].getAttribute("disabled") || _t.setCheckedAttribute(null, r[s], t);
        at.optanonHostList.forEach(function(e) {
            ro.updateHostStatus(e, t)
        }),
        r.forEach(function(e) {
            to.updateGenVendorStatus(e.getAttribute("hostId"), t)
        }),
        n && o.classList.remove("line-through")
    }
    ,
    nr.prototype.selectHostsGroupHandler = function(e) {
        tr.toggleAccordionStatus(e);
        var t = e.target.getAttribute("hostId")
          , o = e.target.getAttribute("ckType")
          , n = e.target.checked;
        if (null !== t) {
            if (o === U.GenVendor) {
                var r = St.GeneralVendors.find(function(e) {
                    return e.VendorCustomId === t
                }).Name;
                fo.triggerGoogleAnalyticsEvent(Po, n ? Do : Ho, r + ": VEN_" + t),
                to.updateGenVendorStatus(t, n)
            } else {
                var s = _t.findIndex(at.optanonHostList, function(e) {
                    return e.HostId === t
                })
                  , i = at.optanonHostList[s];
                tr.toggleHostStatus(i, n)
            }
            _t.setCheckedAttribute(null, e.target, n)
        }
    }
    ,
    nr.prototype.onCategoryItemToggle = function(e) {
        At.pcName === $e && this.setPcListContainerHeight(),
        tr.toggleAccordionStatus(e)
    }
    ,
    nr.prototype.toggleAccordionStatus = function(e) {
        var t = e.target;
        if (t && t.getAttribute("aria-expanded")) {
            var o = "true" === t.getAttribute("aria-expanded") ? "false" : "true";
            t.setAttribute("aria-expanded", o)
        }
    }
    ,
    nr.prototype.toggleHostStatus = function(e, t) {
        fo.triggerGoogleAnalyticsEvent(Po, t ? Fo : Ro, e.HostName + ": H_" + e.HostId),
        ro.updateHostStatus(e, t)
    }
    ,
    nr.prototype.toggleBannerOptions = function(e) {
        Vt(".banner-option-input").each(function(e) {
            Vt(e).el.setAttribute("aria-expanded", !1)
        }),
        tr.toggleAccordionStatus(e)
    }
    ,
    nr.prototype.bannerCloseButtonHandler = function(e) {
        if (e && e.target && e.target.className) {
            var t = e.target.className;
            if (-1 < t.indexOf("save-preference-btn-handler"))
                at.bannerCloseSource = f.ConfirmChoiceButton,
                fo.triggerGoogleAnalyticsEvent(Po, wo);
            else if (-1 < t.indexOf("banner-close-button")) {
                at.bannerCloseSource = f.BannerCloseButton;
                var o = So;
                -1 < t.indexOf("ot-close-link") && (o = To,
                at.bannerCloseSource = f.ContinueWithoutAcceptingButton),
                fo.triggerGoogleAnalyticsEvent(Po, o)
            } else
                -1 < t.indexOf("ot-bnr-save-handler") && (at.bannerCloseSource = f.BannerSaveSettings,
                fo.triggerGoogleAnalyticsEvent(Po, Io))
        }
        return rr.hideVendorsList(),
        rr.bannerCloseButtonHandler()
    }
    ,
    nr.prototype.onLegIntButtonClick = function(e) {
        if (e) {
            var t = e.currentTarget
              , o = "true" === t.parentElement.getAttribute("is-vendor")
              , n = t.parentElement.getAttribute("data-group-id")
              , r = !t.classList.contains("ot-leg-int-enabled");
            if (o)
                tr.onVendorToggle(n, V.LI);
            else {
                var s = Mt.getGroupById(n);
                s.Parent ? tr.updateSubGroupToggles(s, r, !0) : tr.updateGroupToggles(s, r, !0)
            }
            cn.updateLegIntBtnElement(t.parentElement, r)
        }
    }
    ,
    nr.prototype.updateGroupToggles = function(t, o, e) {
        ro.toggleGroupHosts(t, o),
        at.genVenOptOutEnabled && ro.toggleGroupGenVendors(t, o),
        t.IsLegIntToggle = e,
        cn.toggleGrpStatus(t, o),
        t.SubGroups && t.SubGroups.length && (At.bannerName === Je && lt.moduleInitializer.IsSuppressPC && t.SubGroups.length ? t.SubGroups.forEach(function(e) {
            e.IsLegIntToggle = t.IsLegIntToggle,
            cn.toggleGrpStatus(e, o),
            e.IsLegIntToggle = !1,
            ro.toggleGroupHosts(e, o),
            at.genVenOptOutEnabled && ro.toggleGroupGenVendors(e, o)
        }) : cn.toogleAllSubGrpElements(t, o)),
        this.allowAllVisible(cn.setAllowAllButton()),
        t.IsLegIntToggle = !1
    }
    ,
    nr.prototype.updateSubGroupToggles = function(e, t, o) {
        ro.toggleGroupHosts(e, t),
        at.genVenOptOutEnabled && ro.toggleGroupGenVendors(e, t);
        var n = Mt.getGroupById(e.Parent);
        e.IsLegIntToggle = o,
        n.IsLegIntToggle = e.IsLegIntToggle;
        var r = cn.isGroupActive(n);
        t ? (cn.toggleGrpStatus(e, !0),
        cn.isAllSubgroupsEnabled(n) && !r && (cn.toggleGrpStatus(n, !0),
        ro.toggleGroupHosts(n, t),
        at.genVenOptOutEnabled && ro.toggleGroupGenVendors(n, t),
        cn.toggleGroupHtmlElement(e, e.Parent + (e.IsLegIntToggle ? "-leg-out" : ""), !0))) : (cn.toggleGrpStatus(e, !1),
        cn.isAllSubgroupsDisabled(n) && r ? (cn.toggleGrpStatus(n, !1),
        ro.toggleGroupHosts(n, t),
        at.genVenOptOutEnabled && ro.toggleGroupGenVendors(n, t),
        cn.toggleGroupHtmlElement(e, e.Parent + (e.IsLegIntToggle ? "-leg-out" : ""), t)) : (cn.toggleGrpStatus(n, !1),
        ro.toggleGroupHosts(n, !1),
        at.genVenOptOutEnabled && ro.toggleGroupGenVendors(n, t),
        cn.toggleGroupHtmlElement(e, e.Parent + (e.IsLegIntToggle ? "-leg-out" : ""), !1))),
        this.allowAllVisible(cn.setAllowAllButton()),
        e.IsLegIntToggle = !1,
        n.IsLegIntToggle = e.IsLegIntToggle
    }
    ,
    nr.prototype.hideCategoryContainer = function(e) {
        void 0 === e && (e = !1);
        var t = At.pcName
          , o = lt.isV2Template;
        this.isCookieList = e,
        St.PCTemplateUpgrade ? Vt("#onetrust-pc-sdk " + Ht.P_Content).addClass("ot-hide") : Vt("#onetrust-pc-sdk .ot-main-content").hide(),
        Vt("#onetrust-pc-sdk " + Ht.P_Vendor_List).removeClass("ot-hide"),
        t !== Ze && t !== $e && Vt("#onetrust-pc-sdk #close-pc-btn-handler.main").hide(),
        t === $e && Tt(Vt("#onetrust-pc-sdk").el[0], 'height: "";', !0),
        e ? (Vt(Ht.P_Vendor_List + " #select-all-text-container").show("inline-block"),
        Vt("#onetrust-pc-sdk " + Ht.P_Host_Cntr).show(),
        Gt.isOptOutEnabled() ? Vt("#onetrust-pc-sdk #" + Ht.P_Sel_All_Host_El).show("inline-block") : Vt("#onetrust-pc-sdk #" + Ht.P_Sel_All_Host_El).hide(),
        Vt("#onetrust-pc-sdk #" + Ht.P_Sel_All_Vendor_Leg_El).hide(),
        Vt("#onetrust-pc-sdk " + Ht.P_Leg_Header).hide(),
        o || Vt("#onetrust-pc-sdk " + Ht.P_Leg_Select_All).hide(),
        Vt("#onetrust-pc-sdk #" + Ht.P_Sel_All_Vendor_Consent_El).hide(),
        Vt("#onetrust-pc-sdk  " + Ht.P_Vendor_Container).hide(),
        (St.UseGoogleVendors || at.showGeneralVendors) && Vt("#onetrust-pc-sdk .ot-acc-cntr").hide(),
        Vt("#onetrust-pc-sdk " + Ht.P_Vendor_List).addClass(Ht.P_Host_UI),
        Vt("#onetrust-pc-sdk " + Ht.P_Vendor_Content).addClass(Ht.P_Host_Cnt)) : (Vt("#onetrust-pc-sdk " + Ht.P_Vendor_Container).show(),
        Vt("#onetrust-pc-sdk #" + Ht.P_Sel_All_Vendor_Consent_El).show("inline-block"),
        St.UseGoogleVendors && Vt("#onetrust-pc-sdk .ot-acc-cntr").show(),
        At.legIntSettings.PAllowLI && "IAB2" === At.iabType ? (Vt("#onetrust-pc-sdk " + Ht.P_Select_Cntr).show(lt.isV2Template ? void 0 : "inline-block"),
        Vt("#onetrust-pc-sdk " + Ht.P_Leg_Select_All).show("inline-block"),
        Vt("#onetrust-pc-sdk #" + Ht.P_Sel_All_Vendor_Leg_El).show("inline-block"),
        Vt(Ht.P_Vendor_List + " #select-all-text-container").hide(),
        At.legIntSettings.PShowLegIntBtn ? (Vt("#onetrust-pc-sdk " + Ht.P_Leg_Header).hide(),
        Vt("#onetrust-pc-sdk #" + Ht.P_Sel_All_Vendor_Leg_El).hide()) : Vt("#onetrust-pc-sdk " + Ht.P_Leg_Header).show()) : (Vt("#onetrust-pc-sdk " + Ht.P_Select_Cntr).show(),
        Vt(Ht.P_Vendor_List + " #select-all-text-container").show("inline-block"),
        Vt("#onetrust-pc-sdk " + Ht.P_Leg_Select_All).hide(),
        Vt("#onetrust-pc-sdk #" + Ht.P_Sel_All_Vendor_Leg_El).hide()),
        Vt("#onetrust-pc-sdk #" + Ht.P_Sel_All_Host_El).hide(),
        Vt("#onetrust-pc-sdk " + Ht.P_Host_Cntr).hide(),
        Vt("#onetrust-pc-sdk " + Ht.P_Vendor_List).removeClass(Ht.P_Host_UI),
        Vt("#onetrust-pc-sdk " + Ht.P_Vendor_Content).removeClass(Ht.P_Host_Cnt)),
        Un.setFilterList(e)
    }
    ,
    nr.prototype.showAllVendors = function(t) {
        return l(this, void 0, void 0, function() {
            return h(this, function(e) {
                switch (e.label) {
                case 0:
                    return [4, tr.fetchAndSetupPC()];
                case 1:
                    return e.sent(),
                    tr.showVendorsList(null, !0),
                    at.isPCVisible ? [3, 3] : [4, tr.showCookieSettingsHandler(t)];
                case 2:
                    e.sent(),
                    e.label = 3;
                case 3:
                    return [2]
                }
            })
        })
    }
    ,
    nr.prototype.fetchAndSetupPC = function() {
        return l(this, void 0, void 0, function() {
            var t, o;
            return h(this, function(e) {
                switch (e.label) {
                case 0:
                    return lt.moduleInitializer.IsSuppressPC && 0 === Vt("#onetrust-pc-sdk").length ? [4, Yo.getPcContent()] : [3, 2];
                case 1:
                    t = e.sent(),
                    Qo.preferenceCenterGroup = {
                        name: t.name,
                        html: atob(t.html),
                        css: t.css
                    },
                    lt.isV2Template = St.PCTemplateUpgrade && /otPcPanel|otPcCenter|otPcTab/.test(t.name),
                    (o = document.getElementById("onetrust-style")).innerHTML += Qo.preferenceCenterGroup.css,
                    o.innerHTML += Kn.addCustomPreferenceCenterCSS(),
                    Yn.insertPcHtml(),
                    tr.initialiseConsentNoticeHandlers(),
                    St.IsIabEnabled && bn.InitializeVendorList(),
                    e.label = 2;
                case 2:
                    return [2]
                }
            })
        })
    }
    ,
    nr.prototype.setVendorContent = function() {
        Vt("#onetrust-pc-sdk #filter-count").text(at.filterByIABCategories.length.toString()),
        bn.loadVendorList("", at.filterByIABCategories),
        St.UseGoogleVendors && (at.vendorDomInit ? bn.resetAddtlVendors() : (bn.initGoogleVendors(),
        Vt("#onetrust-pc-sdk").on("click", ".ot-acc-cntr > button", tr.toggleAccordionStatus.bind(this)))),
        at.vendorDomInit || (at.vendorDomInit = !0,
        tr.initialiseLegIntBtnHandlers(),
        St.UseGoogleVendors && (tr.initialiseAddtlVenHandler(),
        tr.bindSelAllHandlers())),
        at.showGeneralVendors && !at.genVendorDomInit && (at.genVendorDomInit = !0,
        bn.initGenVendors(),
        tr.initializeGenVenHandlers(),
        St.UseGoogleVendors || (tr.bindSelAllHandlers(),
        Vt("#onetrust-pc-sdk").on("click", ".ot-acc-cntr > button", tr.toggleAccordionStatus.bind(this))))
    }
    ,
    nr.prototype.showVendorsList = function(e, t) {
        if (void 0 === t && (t = !1),
        tr.hideCategoryContainer(!1),
        !t) {
            var o = e.getAttribute("data-parent-id");
            if (o) {
                var n = Mt.getGroupById(o);
                if (n) {
                    var r = C(n.SubGroups, [n]).reduce(function(e, t) {
                        return -1 < yt.indexOf(t.Type) && e.push(t.CustomGroupId),
                        e
                    }, []);
                    at.filterByIABCategories = C(at.filterByIABCategories, r)
                }
            }
        }
        return tr.setVendorContent(),
        fn.updateFilterSelection(!1),
        at.pcLayer = T.VendorList,
        e && sn.setPCFocus(sn.getPCElements()),
        this.setSearchInputFocus(),
        !1
    }
    ,
    nr.prototype.loadCookieList = function(e) {
        at.filterByCategories = [],
        tr.hideCategoryContainer(!0);
        var t = e && e.getAttribute("data-parent-id");
        if (t) {
            var o = Mt.getGroupById(t);
            at.filterByCategories.push(t),
            o.SubGroups.length && o.SubGroups.forEach(function(e) {
                if (-1 === yt.indexOf(e.Type)) {
                    var t = e.CustomGroupId;
                    at.filterByCategories.indexOf(t) < 0 && at.filterByCategories.push(t)
                }
            })
        }
        return bn.loadHostList("", at.filterByCategories),
        Vt("#onetrust-pc-sdk #filter-count").text(at.filterByCategories.length.toString()),
        fn.updateFilterSelection(!0),
        at.pcLayer = T.CookieList,
        sn.setPCFocus(sn.getPCElements()),
        this.setSearchInputFocus(),
        !1
    }
    ,
    nr.prototype.selectAllVendorsLegIntHandler = function(e) {
        var t = Vt("#onetrust-pc-sdk #" + Ht.P_Sel_All_Vendor_Leg_El).el[0]
          , o = t.classList.contains("line-through")
          , n = Vt(Ht.P_Vendor_Container + ' li:not([style="display: none;"]) .vendor-leg-checkbox-handler').el
          , r = e.target.checked
          , s = {};
        at.vendors.selectedLegIntVendors.map(function(e, t) {
            s[e.split(":")[0]] = t
        });
        for (var i = 0; i < n.length; i++) {
            _t.setCheckedAttribute(null, n[i], r),
            St.PCShowConsentLabels && (n[i].parentElement.querySelector(".ot-label-status").innerHTML = r ? St.PCActiveText : St.PCInactiveText);
            var a = n[i].getAttribute("leg-vendorid")
              , l = s[a];
            void 0 === l && (l = a),
            at.vendors.selectedLegIntVendors[l] = a + ":" + r
        }
        o && t.classList.remove("line-through"),
        _t.setCheckedAttribute(null, e.target, r)
    }
    ,
    nr.prototype.selAllAdtlVenHandler = function(e) {
        for (var t = Vt("#onetrust-pc-sdk #ot-selall-adtlvencntr").el[0], o = t.classList.contains("line-through"), n = Vt("#onetrust-pc-sdk .ot-addtlven-chkbox-handler").el, r = e.target.checked, s = 0; s < n.length; s++)
            _t.setCheckedAttribute(null, n[s], r),
            St.PCShowConsentLabels && (n[s].parentElement.querySelector(".ot-label-status").innerHTML = r ? St.PCActiveText : St.PCInactiveText);
        r ? St.UseGoogleVendors && Object.keys(at.addtlVendorsList).forEach(function(e) {
            at.addtlVendors.vendorSelected[e] = !0
        }) : at.addtlVendors.vendorSelected = {},
        o && t.classList.remove("line-through")
    }
    ,
    nr.prototype.selectAllGenVenHandler = function(e) {
        var t = e.target.checked;
        tr.selectAllHandler({
            selAllEl: "#onetrust-pc-sdk #ot-selall-gnvencntr",
            vendorBoxes: "#onetrust-pc-sdk .ot-gnven-chkbox-handler"
        }, "genven", t)
    }
    ,
    nr.prototype.selectAllHandler = function(e, t, o) {
        for (var n = Vt(e.selAllEl).el[0], r = n.classList.contains("line-through"), s = Vt(e.vendorBoxes).el, i = 0; i < s.length; i++)
            "genven" === t && !o && at.alwaysActiveGenVendors.includes(s[i].getAttribute("gn-vid")) ? (_t.setDisabledAttribute(null, s[i], !0),
            _t.setCheckedAttribute(null, s[i], !0)) : _t.setCheckedAttribute(null, s[i], o),
            St.PCShowConsentLabels && (s[i].parentElement.querySelector(".ot-label-status").innerHTML = o ? St.PCActiveText : St.PCInactiveText);
        o ? "googleven" === t && St.UseGoogleVendors ? Object.keys(at.addtlVendorsList).forEach(function(e) {
            at.addtlVendors.vendorSelected[e] = !0
        }) : "genven" === t && at.showGeneralVendors && St.GeneralVendors.forEach(function(e) {
            at.genVendorsConsent[e.VendorCustomId] = !0
        }) : "googleven" === t ? at.addtlVendors.vendorSelected = {} : (at.genVendorsConsent = {},
        at.alwaysActiveGenVendors.forEach(function(e) {
            at.genVendorsConsent[e] = !0
        })),
        r && n.classList.remove("line-through")
    }
    ,
    nr.prototype.SelectAllVendorConsentHandler = function(e) {
        var t = Vt("#onetrust-pc-sdk #" + Ht.P_Sel_All_Vendor_Consent_El).el[0]
          , o = t.classList.contains("line-through")
          , n = Vt(Ht.P_Vendor_Container + ' li:not([style="display: none;"]) .vendor-checkbox-handler').el
          , r = e.target.checked
          , s = {};
        at.vendors.selectedVendors.map(function(e, t) {
            s[e.split(":")[0]] = t
        });
        for (var i = 0; i < n.length; i++) {
            _t.setCheckedAttribute(null, n[i], r),
            St.PCShowConsentLabels && (n[i].parentElement.querySelector(".ot-label-status").innerHTML = r ? St.PCActiveText : St.PCInactiveText);
            var a = n[i].getAttribute("vendorid")
              , l = s[a];
            void 0 === l && (l = a),
            at.vendors.selectedVendors[l] = a + ":" + r
        }
        o && t.classList.remove("line-through"),
        _t.setCheckedAttribute(null, e.target, r)
    }
    ,
    nr.prototype.onVendorToggle = function(n, e) {
        var t = at.vendors
          , o = at.addtlVendors
          , r = e === V.LI ? t.selectedLegIntVendors : e === V.AddtlConsent ? [] : t.selectedVendors
          , s = !1
          , i = Number(n);
        r.some(function(e, t) {
            var o = e.split(":");
            if (o[0] === n)
                return i = t,
                s = "true" === o[1],
                !0
        }),
        e === V.LI ? (fo.triggerGoogleAnalyticsEvent(Po, s ? zo : Ko, t.list.find(function(e) {
            return e.vendorId === n
        }).vendorName + ": IABV2_" + n),
        t.selectedLegIntVendors[i] = n + ":" + !s,
        At.legIntSettings.PShowLegIntBtn || bn.vendorLegIntToggleEvent()) : e === V.AddtlConsent ? (o.vendorSelected[n] ? delete o.vendorSelected[n] : o.vendorSelected[n] = !0,
        bn.venAdtlSelAllTglEvent()) : (fo.triggerGoogleAnalyticsEvent(Po, s ? jo : Uo, t.list.find(function(e) {
            return e.vendorId === n
        }).vendorName + ": IABV2_" + n),
        t.selectedVendors[i] = n + ":" + !s,
        bn.vendorsListEvent())
    }
    ,
    nr.prototype.onVendorDisclosure = function(n) {
        return l(this, void 0, void 0, function() {
            var t, o;
            return h(this, function(e) {
                switch (e.label) {
                case 0:
                    return (t = at.discVendors)[n].isFetched ? [3, 2] : (t[n].isFetched = !0,
                    [4, Yo.getStorageDisclosure(t[n].disclosureUrl)]);
                case 1:
                    o = e.sent(),
                    bn.updateVendorDisclosure(n, o),
                    e.label = 2;
                case 2:
                    return [2]
                }
            })
        })
    }
    ,
    nr.prototype.tglFltrOptionHandler = function(e) {
        e && e.target.classList.contains("category-filter-handler") && _t.setCheckedAttribute(null, e.target, e.target.checked)
    }
    ,
    nr.prototype.selectVendorsGroupHandler = function(e) {
        tr.toggleAccordionStatus(e);
        var t = e.target.getAttribute("leg-vendorid")
          , o = e.target.getAttribute("vendorid")
          , n = e.target.getAttribute("addtl-vid")
          , r = e.target.getAttribute("disc-vid");
        t ? tr.onVendorToggle(t, V.LI) : o ? tr.onVendorToggle(o, V.Consent) : n && tr.onVendorToggle(n, V.AddtlConsent),
        r && tr.onVendorDisclosure(r),
        (t || o || n) && (_t.setCheckedAttribute(null, e.target, e.target.checked),
        St.PCShowConsentLabels && (e.target.parentElement.querySelector(".ot-label-status").innerHTML = e.target.checked ? St.PCActiveText : St.PCInactiveText))
    }
    ,
    nr.prototype.toggleVendorFiltersHandler = function() {
        var e = !1
          , t = Vt("#onetrust-pc-sdk " + Ht.P_Fltr_Modal).el[0];
        switch (At.pcName) {
        case Qe:
        case Xe:
        case $e:
        case et:
            if (e = "block" === t.style.display)
                tr.closeFilter();
            else {
                var o = Vt("#onetrust-pc-sdk " + Ht.P_Triangle).el[0];
                Vt(o).attr("style", "display: block;"),
                Vt(t).attr("style", "display: block;");
                var n = Array.prototype.slice.call(t.querySelectorAll("[href], input, button"));
                sn.setPCFocus(n)
            }
            break;
        case Ze:
            896 < window.innerWidth || 896 < window.screen.height ? Tt(t, "width: 400px;", !0) : Tt(t, "height: 100%; width: 100%;"),
            t.querySelector(".ot-checkbox input").focus();
            break;
        default:
            return
        }
        lt.isV2Template && !e && (Vt("#onetrust-pc-sdk").addClass("ot-shw-fltr"),
        Vt("#onetrust-pc-sdk .ot-fltr-scrlcnt").el[0].scrollTop = 0)
    }
    ,
    nr.prototype.clearFiltersHandler = function() {
        tr.setAriaLabelforButtonInFilter(St.PCenterFilterClearedAria);
        for (var e = Vt("#onetrust-pc-sdk " + Ht.P_Fltr_Modal + " input").el, t = 0; t < e.length; t++)
            _t.setCheckedAttribute(null, e[t], !1);
        tr.isCookieList ? at.filterByCategories = [] : at.filterByIABCategories = []
    }
    ,
    nr.prototype.cancelFilterHandler = function() {
        tr.isCookieList ? fn.cancelHostFilter() : bn.cancelVendorFilter(),
        tr.closeFilter(),
        Vt("#onetrust-pc-sdk #filter-btn-handler").focus()
    }
    ,
    nr.prototype.applyFilterHandler = function() {
        var e;
        tr.setAriaLabelforButtonInFilter(St.PCenterFilterAppliedAria),
        tr.isCookieList ? (e = fn.updateHostFilterList(),
        bn.loadHostList("", e)) : (e = bn.updateVendorFilterList(),
        bn.loadVendorList("", e)),
        Vt("#onetrust-pc-sdk #filter-count").text(String(e.length)),
        tr.closeFilter(),
        Vt("#onetrust-pc-sdk #filter-btn-handler").focus()
    }
    ,
    nr.prototype.setAriaLabelforButtonInFilter = function(e) {
        var t = document.querySelector("#onetrust-pc-sdk span[aria-live]");
        t || ((t = document.createElement("span")).classList.add("ot-scrn-rdr"),
        t.setAttribute("aria-atomic", "true"),
        document.getElementById("onetrust-pc-sdk").appendChild(t)),
        t.setAttribute("aria-atomic", "true"),
        t.setAttribute("aria-relevant", "additions"),
        t.setAttribute("aria-live", "assertive"),
        t.setAttribute("aria-label", e),
        tr.timeCallback && clearTimeout(tr.timeCallback),
        tr.timeCallback = setTimeout(function() {
            tr.timeCallback = null,
            t.setAttribute("aria-label", "")
        }, 900)
    }
    ,
    nr.prototype.setPcListContainerHeight = function() {
        Vt("#onetrust-pc-sdk " + Ht.P_Content).el[0].classList.contains("ot-hide") ? Tt(Vt("#onetrust-pc-sdk").el[0], 'height: "";', !0) : setTimeout(function() {
            var e = window.innerHeight;
            768 <= window.innerWidth && 600 <= window.innerHeight && (e = .8 * window.innerHeight),
            !Vt("#onetrust-pc-sdk " + Ht.P_Content).el[0].scrollHeight || Vt("#onetrust-pc-sdk " + Ht.P_Content).el[0].scrollHeight >= e ? Tt(Vt("#onetrust-pc-sdk").el[0], "height: " + e + "px;", !0) : Tt(Vt("#onetrust-pc-sdk").el[0], "height: auto;", !0)
        })
    }
    ,
    nr.prototype.changeSelectedTab = function(e) {
        var t, o = Vt("#onetrust-pc-sdk .category-menu-switch-handler"), n = 0, r = Vt(o.el[0]);
        o.each(function(e, t) {
            Vt(e).el.classList.contains(Ht.P_Active_Menu) && (n = t,
            Vt(e).el.classList.remove(Ht.P_Active_Menu),
            r = Vt(e))
        }),
        e.keyCode === L.RightArrow ? t = n + 1 >= o.el.length ? Vt(o.el[0]) : Vt(o.el[n + 1]) : e.keyCode === L.LeftArrow && (t = Vt(n - 1 < 0 ? o.el[o.el.length - 1] : o.el[n - 1])),
        this.tabMenuToggle(t, r)
    }
    ,
    nr.prototype.changeSelectedTabV2 = function(e) {
        var t, o = e.target.parentElement;
        e.keyCode === L.RightArrow ? t = o.nextElementSibling || o.parentElement.firstChild : e.keyCode === L.LeftArrow && (t = o.previousElementSibling || o.parentElement.lastChild);
        var n = t.querySelector(".category-menu-switch-handler");
        n.focus(),
        this.groupTabClick(n)
    }
    ,
    nr.prototype.categoryMenuSwitchHandler = function() {
        for (var t = this, e = Vt("#onetrust-pc-sdk .category-menu-switch-handler").el, o = 0; o < e.length; o++)
            e[o].addEventListener("click", this.groupTabClick),
            e[o].addEventListener("keydown", function(e) {
                if (32 === e.keyCode || "space" === e.code)
                    return t.groupTabClick(e.currentTarget),
                    e.preventDefault(),
                    !1
            })
    }
    ,
    nr.prototype.groupTabClick = function(e) {
        var t = Vt("#onetrust-pc-sdk " + Ht.P_Grp_Container).el[0]
          , o = t.querySelector("." + Ht.P_Active_Menu)
          , n = e.currentTarget || e
          , r = n.getAttribute("aria-controls");
        o.setAttribute("tabindex", -1),
        o.setAttribute("aria-selected", !1),
        o.classList.remove(Ht.P_Active_Menu),
        t.querySelector(Ht.P_Desc_Container + ":not(.ot-hide)").classList.add("ot-hide"),
        t.querySelector("#" + r).classList.remove("ot-hide"),
        n.setAttribute("tabindex", 0),
        n.setAttribute("aria-selected", !0),
        n.classList.add(Ht.P_Active_Menu)
    }
    ,
    nr.prototype.tabMenuToggle = function(e, t) {
        e.el.setAttribute("tabindex", 0),
        e.el.setAttribute("aria-selected", !0),
        t.el.setAttribute("tabindex", -1),
        t.el.setAttribute("aria-selected", !1),
        e.focus(),
        t.el.parentElement.parentElement.querySelector("" + Ht.P_Desc_Container).classList.add("ot-hide"),
        e.el.parentElement.parentElement.querySelector("" + Ht.P_Desc_Container).classList.remove("ot-hide"),
        e.el.classList.add(Ht.P_Active_Menu)
    }
    ,
    nr.prototype.closeFilter = function(e) {
        if (void 0 === e && (e = !0),
        !In.checkIfPcSdkContainerExist()) {
            var t = Vt("#onetrust-pc-sdk " + Ht.P_Fltr_Modal).el[0]
              , o = Vt("#onetrust-pc-sdk " + Ht.P_Triangle).el[0];
            At.pcName === Ze ? 896 < window.innerWidth || 896 < window.screen.height ? Tt(t, "width: 0;", !0) : Tt(t, "height: 0;") : Tt(t, "display: none;"),
            o && Vt(o).attr("style", "display: none;"),
            lt.isV2Template && Vt("#onetrust-pc-sdk").removeClass("ot-shw-fltr"),
            e && sn.setFirstAndLast(sn.getPCElements())
        }
    }
    ,
    nr.prototype.setBackButtonFocus = function() {
        Vt("#onetrust-pc-sdk .back-btn-handler").el[0].focus()
    }
    ,
    nr.prototype.setSearchInputFocus = function() {
        Vt("#onetrust-pc-sdk #vendor-search-handler").el[0].focus()
    }
    ,
    nr.prototype.setCenterLayoutFooterHeight = function() {
        var e = tr.pc;
        if (tr.setMainContentHeight(),
        At.pcName === et && e) {
            var t = e.querySelectorAll("" + Ht.P_Desc_Container)
              , o = e.querySelectorAll("li .category-menu-switch-handler");
            if (!e.querySelector(".category-menu-switch-handler + " + Ht.P_Desc_Container) && window.innerWidth < 640)
                for (var n = 0; n < t.length; n++)
                    o[n].insertAdjacentElement("afterend", t[n]);
            else
                e.querySelector(".category-menu-switch-handler + " + Ht.P_Desc_Container) && 640 < window.innerWidth && Vt(e.querySelector(".ot-tab-desc")).append(t)
        }
    }
    ,
    nr.prototype.setMainContentHeight = function() {
        var e = this.pc
          , t = e.querySelector(".ot-pc-footer")
          , o = e.querySelector(".ot-pc-header")
          , n = e.querySelectorAll(".ot-pc-footer button")
          , r = n[n.length - 1]
          , s = St.PCLayout;
        if (e.classList.remove("ot-ftr-stacked"),
        n[0] && r && 1 < Math.abs(n[0].offsetTop - r.offsetTop) && e.classList.add("ot-ftr-stacked"),
        !St.PCTemplateUpgrade && !s.Center) {
            var i = e.clientHeight - t.clientHeight - o.clientHeight - 3;
            if (St.PCTemplateUpgrade && !s.Tab && St.PCenterVendorListDescText) {
                var a = Vt("#vdr-lst-dsc").el;
                i = i - (a.length && a[0].clientHeight) - 10
            }
            Tt(e.querySelector("" + Ht.P_Vendor_List), "height: " + i + "px;", !0)
        }
        var l = e.querySelector("" + Ht.P_Content);
        if (St.PCTemplateUpgrade && s.Center) {
            var c = 600 < window.innerWidth && 475 < window.innerHeight;
            if (!this.pcBodyHeight && c && (this.pcBodyHeight = l.scrollHeight),
            c) {
                var d = this.pcBodyHeight + t.clientHeight + o.clientHeight + 20;
                d > .8 * window.innerHeight || 0 === this.pcBodyHeight ? Tt(e, "height: " + .8 * window.innerHeight + "px;", !0) : Tt(e, "height: " + d + "px;", !0)
            } else
                Tt(e, "height: 100%;", !0)
        } else
            Tt(e.querySelector("" + Ht.P_Content), "height: " + (e.clientHeight - t.clientHeight - o.clientHeight - 3) + "px;", !0)
    }
    ,
    nr.prototype.allowAllVisible = function(e) {
        e !== this.allowVisible && St.PCLayout.Tab && St.PCTemplateUpgrade && (this.pc && this.setMainContentHeight(),
        this.allowVisible = e)
    }
    ,
    nr.prototype.restorePc = function() {
        at.pcLayer === T.CookieList ? (tr.hideCategoryContainer(!0),
        bn.loadHostList("", at.filterByCategories),
        Vt("#onetrust-pc-sdk #filter-count").text(at.filterByCategories.length.toString())) : at.pcLayer === T.VendorList && (tr.hideCategoryContainer(!1),
        tr.setVendorContent()),
        at.isPCVisible = !1,
        tr.toggleInfoDisplay(),
        at.pcLayer !== T.VendorList && at.pcLayer !== T.CookieList || (fn.updateFilterSelection(at.pcLayer === T.CookieList),
        tr.setBackButtonFocus(),
        sn.setPCFocus(sn.getPCElements()))
    }
    ,
    nr.prototype.toggleInfoDisplay = function() {
        return l(this, void 0, void 0, function() {
            var t, o;
            return h(this, function(e) {
                switch (e.label) {
                case 0:
                    return Qo.csBtnGroup && (Vt(tr.fltgBtnSltr).addClass("ot-pc-open"),
                    tr.otGuardLogoPromise.then(function() {
                        St.cookiePersistentLogo.includes("ot_guard_logo.svg") && Vt(tr.fltgBtnFSltr).attr("aria-hidden", "true")
                    }),
                    Vt(tr.fltgBtnBSltr).attr("aria-hidden", "")),
                    [4, tr.fetchAndSetupPC()];
                case 1:
                    return e.sent(),
                    At.pcName === $e && this.setPcListContainerHeight(),
                    void 0 !== at.pcLayer && at.pcLayer !== T.Banner || (at.pcLayer = T.PrefCenterHome),
                    t = Vt("#onetrust-pc-sdk").el[0],
                    Vt(".onetrust-pc-dark-filter").el[0].removeAttribute("style"),
                    t.removeAttribute("style"),
                    at.isPCVisible || (In.showConsentNotice(),
                    at.isPCVisible = !0,
                    St.PCTemplateUpgrade && (this.pc = t,
                    o = t.querySelector("#accept-recommended-btn-handler"),
                    this.allowVisible = o && 0 < o.clientHeight,
                    this.setCenterLayoutFooterHeight(),
                    tr.getResizeElement().addEventListener("resize", tr.setCenterLayoutFooterHeight),
                    window.addEventListener("resize", tr.setCenterLayoutFooterHeight))),
                    window.dispatchEvent(new CustomEvent("OneTrustPCLoaded",{
                        OneTrustPCLoaded: "yes"
                    })),
                    tr.captureInitialConsent(),
                    [2]
                }
            })
        })
    }
    ,
    nr.prototype.close = function(e) {
        St.BCloseButtonType === ie.Link ? at.bannerCloseSource = f.ContinueWithoutAcceptingButton : at.bannerCloseSource = f.BannerCloseButton,
        rr.bannerCloseButtonHandler(e),
        tr.getResizeElement().removeEventListener("resize", tr.setCenterLayoutFooterHeight),
        window.removeEventListener("resize", tr.setCenterLayoutFooterHeight)
    }
    ,
    nr.prototype.closePreferenceCenter = function(e) {
        e && e.preventDefault(),
        window.location.href = "http://otsdk//consentChanged"
    }
    ,
    nr.prototype.initializeAlartHtmlAndHandler = function() {
        at.skipAddingHTML = 0 < Vt("#onetrust-banner-sdk").length,
        at.skipAddingHTML || Qn.insertAlertHtml(),
        this.initialiseAlertHandlers()
    }
    ,
    nr.prototype.initialiseAlertHandlers = function() {
        var e = this;
        Qn.showBanner(),
        St.ForceConsent && !Gt.isCookiePolicyPage(St.AlertNoticeText) && Vt(".onetrust-pc-dark-filter").removeClass("ot-hide").css("z-index:2147483645;"),
        St.OnClickCloseBanner && document.body.addEventListener("click", rr.bodyClickEvent),
        St.ScrollCloseBanner && (window.addEventListener("scroll", rr.scrollCloseBanner),
        Vt(document).on("click", ".onetrust-close-btn-handler", rr.rmScrollAndClickBodyEvents),
        Vt(document).on("click", "#onetrust-accept-btn-handler", rr.rmScrollAndClickBodyEvents),
        Vt(document).on("click", "#accept-recommended-btn-handler", rr.rmScrollAndClickBodyEvents)),
        (St.IsIabEnabled || St.UseGoogleVendors || at.showGeneralVendors) && Vt(document).on("click", ".onetrust-vendors-list-handler", tr.showAllVendors),
        St.FloatingRoundedIcon && Vt("#onetrust-banner-sdk #onetrust-cookie-btn").on("click", function(e) {
            at.pcSource = e.currentTarget,
            tr.showCookieSettingsHandler(e)
        }),
        Vt("#onetrust-banner-sdk .onetrust-close-btn-handler, #onetrust-banner-sdk .ot-bnr-save-handler").on("click", tr.bannerCloseButtonHandler),
        Vt("#onetrust-banner-sdk #onetrust-pc-btn-handler").on("click", tr.showCookieSettingsHandler),
        Vt("#onetrust-banner-sdk #onetrust-accept-btn-handler").on("click", rr.allowAllEventHandler.bind(this, !1)),
        Vt("#onetrust-banner-sdk #onetrust-reject-all-handler").on("click", rr.rejectAllEventHandler.bind(this, !1)),
        Vt("#onetrust-banner-sdk .banner-option-input").on("click", At.bannerName === Ke ? tr.toggleBannerOptions : tr.toggleAccordionStatus),
        Vt("#onetrust-banner-sdk .ot-gv-list-handler").on("click", function(t) {
            return l(e, void 0, void 0, function() {
                return h(this, function(e) {
                    switch (e.label) {
                    case 0:
                        return at.cookieListType = z.GenVen,
                        [4, tr.fetchAndSetupPC()];
                    case 1:
                        return e.sent(),
                        tr.loadCookieList(t.target),
                        tr.showCookieSettingsHandler(t),
                        [2]
                    }
                })
            })
        }),
        Vt("#onetrust-banner-sdk .category-switch-handler").on("click", tr.toggleBannerCategory),
        Vt("#onetrust-banner-sdk").on("keydown", function(e) {
            9 !== e.keyCode && "tab" !== e.code || sn.handleBannerFocus(e, e.shiftKey),
            32 !== e.keyCode && "Space" !== e.code && 13 !== e.keyCode && "Enter" !== e.code || Gt.findUserType(e)
        })
    }
    ,
    nr.prototype.getResizeElement = function() {
        var e = document.querySelector("#onetrust-pc-sdk .ot-text-resize");
        return e ? e.contentWindow || e : document
    }
    ,
    nr.prototype.insertCookieSettingText = function(e) {
        var t, o;
        void 0 === e && (e = !1);
        for (var n = St.CookieSettingButtonText, r = Vt(".ot-sdk-show-settings").el, s = Vt(".optanon-toggle-display").el, i = 0; i < r.length; i++)
            Vt(r[i]).text(n),
            Vt(s[i]).text(n);
        e ? (null !== (t = document.querySelector(".ot-sdk-show-settings")) && void 0 !== t && t.addEventListener("click", this.cookiesSettingsBoundListener),
        null !== (o = document.querySelector(".optanon-toggle-display")) && void 0 !== o && o.addEventListener("click", this.cookiesSettingsBoundListener)) : tr.initCookieSettingHandlers()
    }
    ,
    nr.prototype.genVendorToggled = function(e) {
        var t = e.target.getAttribute("gn-vid");
        to.updateGenVendorStatus(t, e.target.checked);
        var o = St.GeneralVendors.find(function(e) {
            return e.VendorCustomId === t
        }).Name;
        fo.triggerGoogleAnalyticsEvent(Po, e.target.checked ? Do : Ho, o + ": VEN_" + t),
        bn.genVenSelectAllTglEvent()
    }
    ,
    nr.prototype.genVendorDetails = function(e) {
        tr.toggleAccordionStatus(e)
    }
    ,
    nr.prototype.confirmPC = function(e) {
        var t = Ut.isAlertBoxClosedAndValid();
        St.NoBanner && St.ShowPreferenceCenterCloseButton && !t && rr.bannerCloseButtonHandler();
        var o = Gt.isBannerVisible();
        !lt.moduleInitializer.MobileSDK || !t && o || tr.closePreferenceCenter(e)
    }
    ,
    nr.prototype.captureInitialConsent = function() {
        at.initialGroupsConsent = JSON.parse(JSON.stringify(at.groupsConsent)),
        at.initialHostConsent = JSON.parse(JSON.stringify(at.hostsConsent)),
        at.showGeneralVendors && (at.initialGenVendorsConsent = JSON.parse(JSON.stringify(at.genVendorsConsent))),
        St.IsIabEnabled && (at.initialOneTrustIABConsent = JSON.parse(JSON.stringify(at.oneTrustIABConsent)),
        at.initialVendors = JSON.parse(JSON.stringify(at.vendors)),
        at.initialVendors.vendorTemplate = at.vendors.vendorTemplate),
        St.UseGoogleVendors && (at.initialAddtlVendorsList = JSON.parse(JSON.stringify(at.addtlVendorsList)),
        at.initialAddtlVendors = JSON.parse(JSON.stringify(at.addtlVendors)))
    }
    ,
    nr);
    function nr() {
        var t = this;
        this.fltgBtnSltr = "#ot-sdk-btn-floating",
        this.fltgBtnFrontBtn = ".ot-floating-button__front button",
        this.fltgBtnBackBtn = ".ot-floating-button__back button",
        this.fltgBtnFSltr = ".ot-floating-button__front svg",
        this.fltgBtnBSltr = ".ot-floating-button__back svg",
        this.pc = null,
        this.allowVisible = !1,
        this.pcLinkSource = null,
        this.isCookieList = !1,
        this.otGuardLogoResolve = null,
        this.otGuardLogoPromise = new Promise(function(e) {
            t.otGuardLogoResolve = e
        }
        ),
        this.showCookieSettingsHandler = function(s) {
            return l(t, void 0, void 0, function() {
                var t, o, n, r;
                return h(this, function(e) {
                    switch (e.label) {
                    case 0:
                        return s && s.stopPropagation(),
                        s && s.target && (t = s.target.className,
                        o = "onetrust-pc-btn-handler" === s.target.id,
                        n = "ot-sdk-show-settings" === t,
                        (o || n) && (r = o ? _o : Bo,
                        fo.triggerGoogleAnalyticsEvent(Po, r)),
                        at.pcSource = s.target),
                        [4, tr.toggleInfoDisplay()];
                    case 1:
                        return e.sent(),
                        [2, !1]
                    }
                })
            })
        }
        ,
        this.cookiesSettingsBoundListener = this.showCookieSettingsHandler.bind(this),
        this.backBtnHandler = function() {
            return rr.hideVendorsList(),
            At.pcName === $e && (Vt("#onetrust-pc-sdk " + Ht.P_Content).removeClass("ot-hide"),
            Vt("#onetrust-pc-sdk").el[0].removeAttribute("style"),
            t.setPcListContainerHeight()),
            Vt("#onetrust-pc-sdk #filter-count").text("0"),
            Vt("#onetrust-pc-sdk #vendor-search-handler").length && (Vt("#onetrust-pc-sdk #vendor-search-handler").el[0].value = ""),
            at.currentGlobalFilteredList = [],
            at.filterByCategories = [],
            at.filterByIABCategories = [],
            at.vendors.searchParam = "",
            tr.closeFilter(),
            at.pcLayer = T.PrefCenterHome,
            t.pcLinkSource ? (t.pcLinkSource.focus(),
            t.pcLinkSource = null) : sn.setPCFocus(sn.getPCElements()),
            !1
        }
        ,
        this.bannerCloseBoundListener = this.bannerCloseButtonHandler.bind(this),
        this.toggleV2Category = function(e, t, o, n) {
            var r, s = this;
            if (!t) {
                var i = _t.findIndex(at.dataGroupState, function(e) {
                    return "function" == typeof s.getAttribute && e.CustomGroupId === s.getAttribute("data-optanongroupid")
                });
                t = at.dataGroupState[i]
            }
            void 0 === o && (o = Vt(this).is(":checked")),
            St.ChoicesBanner && _t.setCheckedAttribute("#ot-bnr-grp-id-" + t.CustomGroupId, null, o),
            n ? document.querySelector("#ot-group-id-" + n) && (_t.setCheckedAttribute("#ot-group-id-" + n, null, o),
            r = document.querySelector("#ot-group-id-" + n)) : (r = this,
            _t.setCheckedAttribute(null, this, o),
            r.parentElement.querySelector(".ot-switch-nob").setAttribute("aria-checked", o)),
            St.PCShowConsentLabels && (r.parentElement.parentElement.querySelector(".ot-label-status").innerHTML = o ? St.PCActiveText : St.PCInactiveText);
            var a = this instanceof HTMLElement && -1 !== this.getAttribute("id").indexOf("-leg-out");
            tr.setAriaLabelforButtonInFilter(t.GroupName),
            tr.updateGroupToggles(t, o, a)
        }
        ,
        this.toggleBannerCategory = function() {
            var t = this
              , e = _t.findIndex(at.dataGroupState, function(e) {
                return "function" == typeof t.getAttribute && e.CustomGroupId === t.getAttribute("data-optanongroupid")
            })
              , o = at.dataGroupState[e]
              , n = Vt(t).is(":checked");
            tr.toggleV2Category(null, o, n, o.CustomGroupId)
        }
        ,
        this.toggleSubCategory = function(e, t, o, n) {
            t = t || this.getAttribute("data-optanongroupid");
            var r, s = Mt.getGroupById(t);
            void 0 === o && (o = Vt(this).is(":checked")),
            n ? (_t.setCheckedAttribute("#ot-sub-group-id-" + n, null, o),
            r = document.querySelector("#ot-sub-group-id-" + n)) : (r = this,
            _t.setCheckedAttribute(null, this, o)),
            St.PCShowConsentLabels && (r.parentElement.parentElement.querySelector(".ot-label-status").innerHTML = o ? St.PCActiveText : St.PCInactiveText);
            var i = this instanceof HTMLElement && -1 !== this.getAttribute("id").indexOf("-leg-out");
            tr.setAriaLabelforButtonInFilter(s.GroupName),
            tr.updateSubGroupToggles(s, o, i)
        }
    }
    var rr, sr = (ir.prototype.updateDataSubjectTimestamp = function() {
        var e = Ut.alertBoxCloseDate()
          , t = e && Gt.getUTCFormattedDate(e);
        Vt(".ot-userid-timestamp").html(St.PCenterUserIdTimestampTitleText + ": " + t)
    }
    ,
    ir.prototype.closeBanner = function(e) {
        this.closeOptanonAlertBox(),
        e ? this.allowAll(!1) : this.close(!1)
    }
    ,
    ir.prototype.allowAll = function(e, t) {
        void 0 === t && (t = !1),
        lt.moduleInitializer.MobileSDK ? window.OneTrust.AllowAll() : this.AllowAllV2(e, t)
    }
    ,
    ir.prototype.bannerActionsHandler = function(t, n) {
        ao.setLandingPathParam(Ae),
        at.groupsConsent = [],
        at.hostsConsent = [],
        at.genVendorsConsent = {};
        var r = {};
        St.Groups.forEach(function(e) {
            if (e.IsAboutGroup)
                return !1;
            C(e.SubGroups, [e]).forEach(function(e) {
                var o = !!t || !!n && Mt.isAlwaysActiveGroup(e);
                -1 < ft.indexOf(e.Type) && at.groupsConsent.push(e.CustomGroupId + ":" + (o && e.HasConsentOptOut ? "1" : "0")),
                e.Hosts.length && Gt.isOptOutEnabled() && e.Hosts.forEach(function(e) {
                    if (r[e.HostId])
                        ro.updateHostStatus(e, o);
                    else {
                        r[e.HostId] = !0;
                        var t = ro.isHostPartOfAlwaysActiveGroup(e.HostId) || o;
                        at.hostsConsent.push(e.HostId + ":" + (t ? "1" : "0"))
                    }
                }),
                at.genVenOptOutEnabled && e.GeneralVendorsIds && e.GeneralVendorsIds.length && e.GeneralVendorsIds.forEach(function(e) {
                    to.updateGenVendorStatus(e, o)
                })
            })
        }),
        St.IsIabEnabled && (t ? this.iab.allowAllhandler() : this.iab.rejectAllHandler()),
        In.hideConsentNoticeV2(),
        Qt.writeGrpParam(Te.OPTANON_CONSENT),
        Qt.writeHstParam(Te.OPTANON_CONSENT),
        at.genVenOptOutEnabled && Qt.writeGenVenCookieParam(Te.OPTANON_CONSENT),
        fn.substitutePlainTextScriptTags(),
        An.updateGtmMacros(),
        this.executeOptanonWrapper()
    }
    ,
    ir.prototype.nextPageCloseBanner = function() {
        ao.isLandingPage() || Ut.isAlertBoxClosedAndValid() || this.closeBanner(St.NextPageAcceptAllCookies)
    }
    ,
    ir.prototype.rmScrollAndClickBodyEvents = function() {
        St.ScrollCloseBanner && window.removeEventListener("scroll", this.scrollCloseBanner),
        St.OnClickCloseBanner && document.body.removeEventListener("click", this.bodyClickEvent)
    }
    ,
    ir.prototype.onClickCloseBanner = function(e) {
        Ut.isAlertBoxClosedAndValid() || (fo.triggerGoogleAnalyticsEvent(Po, Ao),
        this.closeBanner(St.OnClickAcceptAllCookies),
        e.stopPropagation()),
        rr.rmScrollAndClickBodyEvents()
    }
    ,
    ir.prototype.scrollCloseBanner = function() {
        var e = Vt(document).height() - Vt(window).height();
        0 === e && (e = Vt(window).height());
        var t = 100 * Vt(window).scrollTop() / e;
        t <= 0 && (t = 100 * (document.scrollingElement && document.scrollingElement.scrollTop || document.documentElement && document.documentElement.scrollTop || document.body && document.body.scrollTop) / (document.scrollingElement && document.scrollingElement.scrollHeight || document.documentElement && document.documentElement.scrollHeight || document.body && document.body.scrollHeight)),
        25 < t && !Ut.isAlertBoxClosedAndValid() && (!at.isPCVisible || St.NoBanner) ? (fo.triggerGoogleAnalyticsEvent(Po, Ao),
        rr.closeBanner(St.ScrollAcceptAllCookies),
        rr.rmScrollAndClickBodyEvents()) : Ut.isAlertBoxClosedAndValid() && rr.rmScrollAndClickBodyEvents()
    }
    ,
    ir.prototype.AllowAllV2 = function(e, t) {
        void 0 === t && (t = !1);
        for (var o = this.groupsClass.getAllGroupElements(), n = 0; n < o.length; n++) {
            var r = Mt.getGroupById(o[n].getAttribute("data-optanongroupid"));
            this.groupsClass.toggleGrpElements(o[n], r, !0),
            this.groupsClass.toogleSubGroupElement(o[n], !0, !1, !0),
            this.groupsClass.toogleSubGroupElement(o[n], !0, !0, !0)
        }
        this.bannerActionsHandler(!0, !1),
        this.consentTransactions(e, !0, t),
        St.IsIabEnabled && (this.iab.updateIabVariableReference(),
        this.iab.updateVendorsDOMToggleStatus(!0),
        this.updateVendorLegBtns(!0))
    }
    ,
    ir.prototype.rejectAll = function(e, t) {
        void 0 === t && (t = !1);
        for (var o = t ? F[5] : F[2], n = this.groupsClass.getAllGroupElements(), r = 0; r < n.length; r++) {
            var s = Mt.getGroupById(n[r].getAttribute("data-optanongroupid"));
            "always active" !== Mt.getGrpStatus(s).toLowerCase() && (cn.toggleGrpElements(n[r], s, !1),
            this.groupsClass.toogleSubGroupElement(n[r], !1, !1, !0),
            this.groupsClass.toogleSubGroupElement(n[r], !1, !0, !0))
        }
        this.bannerActionsHandler(!1, !0),
        o !== at.consentInteractionType && this.consentTransactions(e, !1, t),
        St.IsIabEnabled && (this.iab.updateIabVariableReference(),
        this.iab.updateVendorsDOMToggleStatus(!1),
        this.updateVendorLegBtns(!1))
    }
    ,
    ir.prototype.executeCustomScript = function() {
        St.CustomJs && new Function(St.CustomJs)()
    }
    ,
    ir.prototype.updateConsentData = function(e) {
        ao.setLandingPathParam(Ae),
        St.IsIabEnabled && !e && this.iab.saveVendorStatus(),
        Qt.writeGrpParam(Te.OPTANON_CONSENT),
        Qt.writeHstParam(Te.OPTANON_CONSENT),
        at.showGeneralVendors && St.GenVenOptOut && Qt.writeGenVenCookieParam(Te.OPTANON_CONSENT),
        fn.substitutePlainTextScriptTags(),
        An.updateGtmMacros()
    }
    ,
    ir.prototype.close = function(e, t) {
        if (void 0 === t && (t = !1),
        In.hideConsentNoticeV2(),
        this.updateConsentData(e),
        St.IsConsentLoggingEnabled) {
            var o = t ? xn : Bn
              , n = t ? _n : Ln;
            at.bannerCloseSource === f.ContinueWithoutAcceptingButton && (o = Gn),
            at.bannerCloseSource === f.BannerSaveSettings && (o = Vn),
            Kt.createConsentTxn(!1, n + " - " + o, t)
        } else
            Ut.dispatchConsentEvent();
        this.executeOptanonWrapper()
    }
    ,
    ir.prototype.executeOptanonWrapper = function() {
        try {
            if (this.executeCustomScript(),
            "function" == typeof window.OptanonWrapper && "undefined" !== window.OptanonWrapper) {
                window.OptanonWrapper();
                for (var e = 0, t = at.srcExecGrpsTemp; e < t.length; e++) {
                    var o = t[e];
                    -1 === at.srcExecGrps.indexOf(o) && at.srcExecGrps.push(o)
                }
                at.srcExecGrpsTemp = [];
                for (var n = 0, r = at.htmlExecGrpsTemp; n < r.length; n++)
                    o = r[n],
                    -1 === at.htmlExecGrps.indexOf(o) && at.htmlExecGrps.push(o);
                at.htmlExecGrpsTemp = []
            }
        } catch (e) {
            console.warn("Error in Optanon wrapper, please review your code. " + e)
        }
    }
    ,
    ir.prototype.updateVendorLegBtns = function(e) {
        if (At.legIntSettings.PAllowLI && At.legIntSettings.PShowLegIntBtn)
            for (var t = Vt(Ht.P_Vendor_Container + " .ot-leg-btn-container").el, o = 0; o < t.length; o++)
                this.groupsClass.updateLegIntBtnElement(t[o], e)
    }
    ,
    ir.prototype.showFltgCkStgButton = function() {
        var e = Vt("#ot-sdk-btn-floating");
        e.removeClass("ot-hide"),
        e.removeClass("ot-pc-open"),
        St.cookiePersistentLogo.includes("ot_guard_logo.svg") && Vt(".ot-floating-button__front svg").attr("aria-hidden", ""),
        Vt(".ot-floating-button__back svg").attr("aria-hidden", "true")
    }
    ,
    ir.prototype.consentTransactions = function(e, t, o) {
        void 0 === o && (o = !1),
        Kt && !e && St.IsConsentLoggingEnabled ? Kt.createConsentTxn(!1, (o ? _n : Ln) + " - " + (t ? En : wn), o) : Ut.dispatchConsentEvent()
    }
    ,
    ir.prototype.hideVendorsList = function() {
        In.checkIfPcSdkContainerExist() || (St.PCTemplateUpgrade ? Vt("#onetrust-pc-sdk " + Ht.P_Content).removeClass("ot-hide") : Vt("#onetrust-pc-sdk .ot-main-content").show(),
        Vt("#onetrust-pc-sdk #close-pc-btn-handler.main").show(),
        Vt("#onetrust-pc-sdk " + Ht.P_Vendor_List).addClass("ot-hide"))
    }
    ,
    ir.prototype.resetConsent = function() {
        var e = this;
        at.groupsConsent = JSON.parse(JSON.stringify(at.initialGroupsConsent)),
        at.hostsConsent = JSON.parse(JSON.stringify(at.initialHostConsent)),
        at.showGeneralVendors && (at.genVendorsConsent = JSON.parse(JSON.stringify(at.initialGenVendorsConsent))),
        St.IsIabEnabled && (at.oneTrustIABConsent = JSON.parse(JSON.stringify(at.initialOneTrustIABConsent)),
        at.vendors = JSON.parse(JSON.stringify(at.initialVendors)),
        at.vendors.vendorTemplate = at.initialVendors.vendorTemplate),
        St.UseGoogleVendors && (at.addtlVendors = JSON.parse(JSON.stringify(at.initialAddtlVendors)),
        at.addtlVendorsList = JSON.parse(JSON.stringify(at.initialAddtlVendorsList))),
        this.updateConsentData(!1),
        setTimeout(function() {
            e.resetConsentUI()
        }, 400)
    }
    ,
    ir.prototype.resetConsentUI = function() {
        cn.getAllGroupElements().forEach(function(e) {
            var t = e.getAttribute("data-optanongroupid")
              , o = Mt.getGroupById(t)
              , n = rr.isGroupActive(o, t);
            if (At.pcName === et && St.PCTemplateUpgrade && (e = document.querySelector("#ot-desc-id-" + e.getAttribute("data-optanongroupid"))),
            o.Type === ct || o.Type === Ct) {
                var r = Gt.isBundleOrStackActive(o, at.initialGroupsConsent)
                  , s = e.querySelector('input[class*="category-switch-handler"]');
                _t.setCheckedAttribute(null, s, r);
                for (var i = e.querySelectorAll("li" + Ht.P_Subgrp_li), a = 0; a < i.length; a++) {
                    var l = Mt.getGroupById(i[a].getAttribute("data-optanongroupid"))
                      , c = l.OptanonGroupId
                      , d = rr.isGroupActive(l, c)
                      , u = i[a].querySelector('input[class*="cookie-subgroup-handler"]');
                    _t.setCheckedAttribute(null, u, d),
                    rr.resetLegIntButton(l, i[a])
                }
            } else
                s = e.querySelector('input[class*="category-switch-handler"]'),
                _t.setCheckedAttribute(null, s, n),
                rr.resetLegIntButton(o, e)
        }),
        St.IsIabEnabled && Rn.toggleVendorConsent();
        var e = Vt("#onetrust-pc-sdk .ot-gnven-chkbox-handler").el;
        if (at.showGeneralVendors && e && e.length) {
            for (var t = 0, o = e; t < o.length; t++) {
                var n = (l = o[t]).getAttribute("gn-vid")
                  , r = Boolean(at.genVendorsConsent[n]);
                _t.setCheckedAttribute("", l, r),
                to.updateGenVendorStatus(n, r)
            }
            bn.genVenSelectAllTglEvent()
        }
        var s = Vt("#onetrust-pc-sdk .ot-addtlven-chkbox-handler").el;
        if (St.UseGoogleVendors && s && s.length)
            for (var i = 0, a = s; i < a.length; i++) {
                var l;
                n = (l = a[i]).getAttribute("addtl-vid"),
                at.addtlVendorsList[n] && (r = Boolean(at.addtlVendors.vendorSelected[n]),
                _t.setCheckedAttribute("", l, r))
            }
    }
    ,
    ir.prototype.isGroupActive = function(e, t) {
        var o;
        if (e.IabGrpId) {
            var n = void 0;
            n = e.Type === ht ? at.initialVendors.selectedSpecialFeatures : e.IsLegIntToggle ? at.initialVendors.selectedLegInt : at.initialVendors.selectedPurpose,
            o = -1 !== wt.inArray(e.IabGrpId + ":true", n)
        } else
            o = -1 !== wt.inArray(t + ":1", at.initialGroupsConsent);
        return o
    }
    ,
    ir.prototype.resetLegIntButton = function(e, t) {
        if (At.legIntSettings.PAllowLI && e.Type === pt && e.HasLegIntOptOut && At.legIntSettings.PShowLegIntBtn) {
            var o = !0;
            -1 < at.vendors.selectedLegInt.indexOf(e.IabGrpId + ":false") && (o = !1),
            cn.updateLegIntBtnElement(t, o)
        }
    }
    ,
    ir.prototype.handleTogglesOnSingularConsentUpdate = function(e, t, o) {
        if (this.closeOptanonAlertBox(),
        e === rt)
            for (var n = Mt.getGroupById(t), r = this.groupsClass.getAllGroupElements(), s = 0; s < r.length; s++) {
                var i = Mt.getGroupById(r[s].getAttribute("data-optanongroupid"));
                if (i.OptanonGroupId === n.OptanonGroupId && !i.Parent) {
                    tr.toggleV2Category(null, i, o, i.CustomGroupId);
                    break
                }
                var a = i.SubGroups.find(function(e) {
                    return e.OptanonGroupId === n.OptanonGroupId
                });
                a && tr.toggleSubCategory(null, a.CustomGroupId, o, a.CustomGroupId)
            }
        this.close(!1)
    }
    ,
    ir);
    function ir() {
        var o = this;
        this.iab = bn,
        this.groupsClass = cn,
        this.closeOptanonAlertBox = function() {
            if (Gt.hideBanner(),
            St.NtfyConfig.ShowNtfy && Dn.hideSyncNtfy(),
            At.isOptInMode || !At.isOptInMode && !Ut.isAlertBoxClosedAndValid())
                fo.setAlertBoxClosed(!0),
                St.PCTemplateUpgrade && St.PCenterUserIdTitleText && St.IsConsentLoggingEnabled && o.updateDataSubjectTimestamp();
            else if (Ut.isAlertBoxClosedAndValid()) {
                var e = Vt(".onetrust-pc-dark-filter").el[0];
                e && "none" !== getComputedStyle(e).getPropertyValue("display") && Vt(".onetrust-pc-dark-filter").fadeOut(400)
            }
            Qo.csBtnGroup && o.showFltgCkStgButton()
        }
        ,
        this.bodyClickEvent = function(e) {
            var t = e.target;
            t.closest("#onetrust-banner-sdk") || t.closest("#onetrust-pc-sdk") || t.closest(".onetrust-pc-dark-filter") || t.closest(".ot-sdk-show-settings") || t.closest(".optanon-show-settings") || t.closest(".optanon-toggle-display") || rr.onClickCloseBanner(e)
        }
        ,
        this.bannerCloseButtonHandler = function(e) {
            if (void 0 === e && (e = !1),
            rr.closeOptanonAlertBox(),
            lt.moduleInitializer.MobileSDK)
                window.OneTrust.Close();
            else {
                var t = at.bannerCloseSource === f.ConfirmChoiceButton;
                rr.close(e, t)
            }
            return !1
        }
        ,
        this.allowAllEventHandler = function(e) {
            void 0 === e && (e = !1);
            var t = e ? "Preferences Allow All" : "Banner Accept Cookies";
            fo.triggerGoogleAnalyticsEvent(Po, t),
            o.allowAllEvent(!1, e),
            o.hideVendorsList()
        }
        ,
        this.allowAllEvent = function(e, t) {
            void 0 === e && (e = !1),
            void 0 === t && (t = !1),
            o.closeOptanonAlertBox(),
            rr.allowAll(e, t)
        }
        ,
        this.rejectAllEventHandler = function(e) {
            void 0 === e && (e = !1);
            var t = e ? "Preferences Reject All" : "Banner Reject All";
            fo.triggerGoogleAnalyticsEvent(Po, t),
            lt.moduleInitializer.MobileSDK ? window.OneTrust.RejectAll() : (o.rejectAllEvent(!1, e),
            o.hideVendorsList())
        }
        ,
        this.rejectAllEvent = function(e, t) {
            void 0 === e && (e = !1),
            void 0 === t && (t = !1),
            o.closeOptanonAlertBox(),
            Ut.isIABCrossConsentEnabled() ? At.thirdPartyiFrameLoaded ? o.rejectAll(e, t) : At.thirdPartyiFramePromise.then(function() {
                o.rejectAll(e, t)
            }) : o.rejectAll(e, t)
        }
    }
    var ar, lr = (cr.prototype.initBanner = function() {
        this.canImpliedConsentLandingPage(),
        lt.moduleInitializer.CookieSPAEnabled ? Vt(window).on("otloadbanner", this.windowLoadBanner.bind(this)) : Vt(window).one("otloadbanner", this.windowLoadBanner.bind(this))
    }
    ,
    cr.prototype.insertCSBtnHtmlAndCss = function(e) {
        document.getElementById("onetrust-style").innerHTML += Qo.csBtnGroup.css;
        var t = document.createElement("div");
        Vt(t).html(Qo.csBtnGroup.html);
        var o = t.querySelector("#ot-sdk-btn-floating");
        e && o && Vt(o).removeClass("ot-hide"),
        Vt("#onetrust-consent-sdk").append(o),
        St.cookiePersistentLogo && (St.cookiePersistentLogo.includes("ot_guard_logo.svg") ? this.applyPersistentSvgOnDOM() : Vt(".ot-floating-button__front, .ot-floating-button__back").addClass("custom-persistent-icon"))
    }
    ,
    cr.prototype.applyPersistentSvgOnDOM = function() {
        return l(this, void 0, void 0, function() {
            var t;
            return h(this, function(e) {
                switch (e.label) {
                case 0:
                    return [4, Yo.getPersistentCookieSvg()];
                case 1:
                    return t = e.sent(),
                    Vt(this.FLOATING_COOKIE_FRONT_BTN).html(t),
                    tr.otGuardLogoResolve(!0),
                    [2]
                }
            })
        })
    }
    ,
    cr.prototype.canImpliedConsentLandingPage = function() {
        this.isImpliedConsent() && !ao.isLandingPage() && "true" === Lt.readCookieParam(Te.OPTANON_CONSENT, ke) && this.checkForRefreshCloseImplied()
    }
    ,
    cr.prototype.isImpliedConsent = function() {
        return St.ConsentModel && "implied consent" === St.ConsentModel.Name.toLowerCase()
    }
    ,
    cr.prototype.checkForRefreshCloseImplied = function() {
        rr.closeOptanonAlertBox(),
        rr.close(!0)
    }
    ,
    cr.prototype.hideCustomHtml = function() {
        var e = document.getElementById("onetrust-banner-sdk");
        e && Tt(e, "display: none;")
    }
    ,
    cr.prototype.windowLoadBanner = function() {
        return l(this, void 0, void 0, function() {
            var t, o, n, r, s, i, a, l, c, d;
            return h(this, function(e) {
                switch (e.label) {
                case 0:
                    return this.core.substitutePlainTextScriptTags(),
                    t = lt.moduleInitializer,
                    Vt("#onetrust-consent-sdk").length ? n = document.getElementById("onetrust-consent-sdk") : (n = document.createElement("div"),
                    Vt(n).attr("id", "onetrust-consent-sdk"),
                    Vt(document.body).append(n)),
                    Vt(".onetrust-pc-dark-filter").length || (o = document.createElement("div"),
                    Vt(o).attr("class", "onetrust-pc-dark-filter"),
                    Vt(o).attr("class", "ot-hide"),
                    Vt(o).attr("class", "ot-fade-in"),
                    n.firstChild ? n.insertBefore(o, n.firstChild) : Vt(n).append(o)),
                    St.IsIabEnabled && this.iab.updateIabVariableReference(),
                    r = Ut.isAlertBoxClosedAndValid(),
                    s = St.ShowAlertNotice && !r && !St.NoBanner && !at.hideBanner,
                    i = St.ShowAlertNotice && !r && St.NoBanner,
                    at.ntfyRequired ? (this.hideCustomHtml(),
                    Dn.init(),
                    Dn.changeState()) : s ? tr.initializeAlartHtmlAndHandler() : this.hideCustomHtml(),
                    t.IsSuppressPC || (Yn.insertPcHtml(),
                    tr.initialiseConsentNoticeHandlers(),
                    St.IsIabEnabled && this.iab.InitializeVendorList()),
                    t.RemoteActionsEnabled && ((a = document.getElementById("hbbtv")) && a.remove(),
                    (l = document.createElement("script")).id = "hbbtv",
                    l.src = at.storageBaseURL + "/scripttemplates/" + lt.moduleInitializer.Version + "/hbbtv.js",
                    l.type = "text/javascript",
                    Vt(document.body).append(l)),
                    this.insertCSBtn(!s),
                    i ? [4, tr.toggleInfoDisplay()] : [3, 2];
                case 1:
                    e.sent(),
                    e.label = 2;
                case 2:
                    return tr.insertCookieSettingText(),
                    c = Vt(this.FLOATING_COOKIE_BTN),
                    d = Vt(this.FLOATING_COOKIE_FRONT_BTN),
                    c.length && (c.attr("title", St.CookieSettingButtonText),
                    d.el[0].setAttribute("aria-label", St.AriaOpenPreferences)),
                    pn.insertCookiePolicyHtml(),
                    rr.executeOptanonWrapper(),
                    Lt.readCookieParam(Te.OPTANON_CONSENT, "groups") || Qt.writeGrpParam(Te.OPTANON_CONSENT),
                    Lt.readCookieParam(Te.OPTANON_CONSENT, "hosts") || Qt.writeHstParam(Te.OPTANON_CONSENT),
                    at.showGeneralVendors && !Lt.readCookieParam(Te.OPTANON_CONSENT, "genVendors") && Qt.writeGenVenCookieParam(Te.OPTANON_CONSENT),
                    s && sn.setBannerFocus(),
                    [2]
                }
            })
        })
    }
    ,
    cr.prototype.insertCSBtn = function(e) {
        Qo.csBtnGroup && (this.insertCSBtnHtmlAndCss(e),
        tr.initFlgtCkStgBtnEventHandlers())
    }
    ,
    cr);
    function cr() {
        this.iab = bn,
        this.core = fn,
        this.FLOATING_COOKIE_BTN = "#ot-sdk-btn-floating",
        this.FLOATING_COOKIE_FRONT_BTN = "#ot-sdk-btn-floating .ot-floating-button__front .ot-floating-button__open"
    }
    var dr, ur = (pr.prototype.initialiseLandingPath = function() {
        var e = Ut.needReconsent();
        if (ao.isLandingPage())
            ao.setLandingPathParam(location.href);
        else {
            if (e && !Ut.awaitingReconsent())
                return ao.setLandingPathParam(location.href),
                void Lt.writeCookieParam(Te.OPTANON_CONSENT, ke, !0);
            e || Lt.writeCookieParam(Te.OPTANON_CONSENT, ke, !1),
            ao.setLandingPathParam(Ae),
            At.isSoftOptInMode && !lt.moduleInitializer.MobileSDK && fo.setAlertBoxClosed(!0),
            St.NextPageCloseBanner && St.ShowAlertNotice && rr.nextPageCloseBanner()
        }
    }
    ,
    pr);
    function pr() {}
    var hr, gr = (Cr.prototype.IsAlertBoxClosedAndValid = function() {
        return Ut.isAlertBoxClosedAndValid()
    }
    ,
    Cr.prototype.LoadBanner = function() {
        fo.loadBanner()
    }
    ,
    Cr.prototype.Init = function(e) {
        void 0 === e && (e = !1),
        fe.insertViewPortTag(),
        Qo.ensureHtmlGroupDataInitialised(),
        An.updateGtmMacros(!1),
        dr.initialiseLandingPath(),
        e || Kn.initialiseCssReferences()
    }
    ,
    Cr.prototype.FetchAndDownloadPC = function() {
        tr.fetchAndSetupPC()
    }
    ,
    Cr.prototype.ToggleInfoDisplay = function() {
        fo.triggerGoogleAnalyticsEvent(Po, Eo),
        tr.toggleInfoDisplay()
    }
    ,
    Cr.prototype.Close = function(e) {
        tr.close(e)
    }
    ,
    Cr.prototype.AllowAll = function(e) {
        rr.allowAllEvent(e)
    }
    ,
    Cr.prototype.RejectAll = function(e) {
        rr.rejectAllEvent(e)
    }
    ,
    Cr.prototype.setDataSubjectIdV2 = function(e, t) {
        void 0 === t && (t = !1),
        e && e.trim() && (e = e.replace(/ /g, ""),
        Lt.writeCookieParam(Te.OPTANON_CONSENT, ve, e, !0),
        at.dsParams.isAnonymous = t)
    }
    ,
    Cr.prototype.getDataSubjectId = function() {
        return Lt.readCookieParam(Te.OPTANON_CONSENT, ve, !0)
    }
    ,
    Cr.prototype.synchroniseCookieWithPayload = function(s) {
        var e = Lt.readCookieParam(Te.OPTANON_CONSENT, "groups")
          , t = _t.strToArr(e)
          , i = [];
        t.forEach(function(e) {
            var t = e.split(":")
              , o = Mt.getGroupById(t[0])
              , n = _t.findIndex(s, function(e) {
                return e.Id === o.PurposeId
            })
              , r = s[n];
            r ? r.TransactionType === Ie ? (i.push(t[0] + ":1"),
            o.Parent ? tr.toggleSubCategory(null, o.CustomGroupId, !0, o.CustomGroupId) : tr.toggleV2Category(null, o, !0, o.CustomGroupId)) : (i.push(t[0] + ":0"),
            o.Parent ? tr.toggleSubCategory(null, o.CustomGroupId, !1, o.CustomGroupId) : tr.toggleV2Category(null, o, !1, o.CustomGroupId)) : i.push(t[0] + ":" + t[1])
        }),
        Qt.writeGrpParam(Te.OPTANON_CONSENT, i)
    }
    ,
    Cr.prototype.getGeolocationData = function() {
        return at.userLocation
    }
    ,
    Cr.prototype.TriggerGoogleAnalyticsEvent = function(e, t, o, n) {
        fo.triggerGoogleAnalyticsEvent(e, t, o, n)
    }
    ,
    Cr.prototype.ReconsentGroups = function() {
        var r = !1
          , e = Lt.readCookieParam(Te.OPTANON_CONSENT, "groups")
          , s = _t.strToArr(e)
          , i = _t.strToArr(e.replace(/:0|:1/g, ""))
          , a = !1
          , t = Lt.readCookieParam(Te.OPTANON_CONSENT, "hosts")
          , l = _t.strToArr(t)
          , c = _t.strToArr(t.replace(/:0|:1/g, ""))
          , d = ["inactive", "inactive landingpage", "do not track"];
        e && (St.Groups.forEach(function(e) {
            C(e.SubGroups, [e]).forEach(function(e) {
                var t = e.CustomGroupId
                  , o = _t.indexOf(i, t);
                if (-1 !== o) {
                    var n = Mt.getGrpStatus(e).toLowerCase();
                    -1 < d.indexOf(n) && (r = !0,
                    s[o] = t + ("inactive landingpage" === n ? ":1" : ":0"))
                }
            })
        }),
        r && Qt.writeGrpParam(Te.OPTANON_CONSENT, s)),
        t && (St.Groups.forEach(function(e) {
            C(e.SubGroups, [e]).forEach(function(n) {
                n.Hosts.forEach(function(e) {
                    var t = _t.indexOf(c, e.HostId);
                    if (-1 !== t) {
                        var o = Mt.getGrpStatus(n).toLowerCase();
                        -1 < d.indexOf(o) && (a = !0,
                        l[t] = e.HostId + ("inactive landingpage" === o ? ":1" : ":0"))
                    }
                })
            })
        }),
        a && Qt.writeHstParam(Te.OPTANON_CONSENT, l))
    }
    ,
    Cr.prototype.SetAlertBoxClosed = function(e) {
        fo.setAlertBoxClosed(e)
    }
    ,
    Cr.prototype.GetDomainData = function() {
        return At.pubDomainData
    }
    ,
    Cr.prototype.setGeoLocation = function(e, t) {
        void 0 === t && (t = ""),
        at.userLocation = {
            country: e,
            state: t
        }
    }
    ,
    Cr.prototype.changeLang = function(t) {
        if (t !== at.lang) {
            var o = lt.moduleInitializer;
            Yo.getLangJson(t).then(function(e) {
                e ? (At.init(e),
                Qo.fetchAssets().then(function() {
                    var e = document.getElementById("onetrust-style");
                    e && (e.textContent = ""),
                    Kn.initialiseCssReferences(),
                    o.IsSuppressPC && !at.isPCVisible || (_t.removeChild(Vt("#onetrust-pc-sdk").el),
                    at.vendorDomInit = !1,
                    at.genVendorDomInit = !1,
                    Yn.insertPcHtml(),
                    tr.initialiseConsentNoticeHandlers(),
                    St.IsIabEnabled && bn.InitializeVendorList(),
                    at.isPCVisible && tr.restorePc());
                    var t = !0;
                    Ut.isAlertBoxClosedAndValid() || o.IsSuppressBanner && (!o.IsSuppressBanner || at.skipAddingHTML) || St.NoBanner || (_t.removeChild(Vt("#onetrust-banner-sdk").el),
                    tr.initializeAlartHtmlAndHandler(),
                    t = !1),
                    hr.initCookiePolicyAndSettings(),
                    _t.removeChild(Vt("#ot-sdk-btn-floating").el),
                    ar.insertCSBtn(t),
                    hr.processedHtml = null
                })) : console.error("Language:" + t + " doesn't exist for the geo rule")
            })
        }
    }
    ,
    Cr.prototype.initCookiePolicyAndSettings = function(e) {
        var t, o;
        void 0 === e && (e = !1),
        e && (null !== (t = document.querySelector(".ot-sdk-show-settings")) && void 0 !== t && t.removeEventListener("click", tr.cookiesSettingsBoundListener),
        null !== (o = document.querySelector(".optanon-toggle-display")) && void 0 !== o && o.removeEventListener("click", tr.cookiesSettingsBoundListener)),
        pn.insertCookiePolicyHtml(),
        tr.insertCookieSettingText(e)
    }
    ,
    Cr.prototype.showVendorsList = function() {
        at.pcLayer !== T.VendorList && (tr.showAllVendors(),
        fo.triggerGoogleAnalyticsEvent(Po, xo))
    }
    ,
    Cr.prototype.getTestLogData = function() {
        var e = St.Groups
          , t = At.pubDomainData;
        console.info("%cWelcome to OneTrust Log", "padding: 8px; background-color: #43c233; color: white; font-style: italic; border: 1px solid black; font-size: 1.5em;"),
        console.info("Script is for: %c" + (t.Domain ? t.Domain : St.optanonCookieDomain), "padding: 4px 6px; font-style: italic; border: 2px solid #43c233; font-size: 12px;"),
        console.info("The consent model is: " + t.ConsentModel.Name);
        var o = null !== Ut.alertBoxCloseDate();
        console.info("Consent has " + (o ? "" : "not ") + "been given " + (o ? "👍" : "🛑"));
        var n = [];
        e.forEach(function(e) {
            var t = "";
            t = e.Status && "always active" === e.Status.toLowerCase() ? "Always Active" : cn.isGroupActive(e) ? "Active" : "Inactive",
            n.push({
                CustomGroupId: e.CustomGroupId,
                GroupName: e.GroupName,
                Status: t
            })
        }),
        console.groupCollapsed("Current Category Status"),
        console.table(n),
        console.groupEnd();
        var r = [];
        t.GeneralVendors.forEach(function(e) {
            r.push({
                CustomGroupId: e.VendorCustomId,
                Name: e.Name,
                Status: hr.isCategoryActive(e.VendorCustomId) ? "active" : "inactive"
            })
        }),
        console.groupCollapsed("General Vendor Ids"),
        console.table(r),
        console.groupEnd();
        var s = At.getRegionRule()
          , i = at.userLocation
          , a = lt.moduleInitializer.GeoRuleGroupName;
        At.conditionalLogicEnabled ? console.groupCollapsed("Geolocation, Template & Condition") : console.groupCollapsed("Geolocation and Template"),
        at.userLocation.country && console.info("The Geolocation is " + i.country.toUpperCase()),
        console.info("The Geolocation rule is " + s.Name),
        console.info("The GeolocationRuleGroup is " + a),
        At.canUseConditionalLogic ? (console.info("The Condition name is " + At.Condition.Name),
        console.info("The TemplateName is " + At.Condition.TemplateName)) : console.info("The TemplateName is " + s.TemplateName),
        console.groupEnd();
        var l = e.filter(function(e) {
            return cn.isGroupActive(e) && "COOKIE" === e.Type
        });
        console.groupCollapsed("The cookies expected to be active if blocking has been implemented are"),
        l.forEach(function(e) {
            console.groupCollapsed(e.GroupName);
            var t = hr.getAllFormatCookiesForAGroup(e);
            console.table(t, ["Name", "Host", "description"]),
            console.groupEnd()
        }),
        console.groupEnd()
    }
    ,
    Cr.prototype.isCategoryActive = function(e) {
        return -1 !== window.OptanonActiveGroups.indexOf(e)
    }
    ,
    Cr.prototype.getAllFormatCookiesForAGroup = function(e) {
        var t, o = [];
        return e.FirstPartyCookies.forEach(function(e) {
            return o.push({
                Name: e.Name,
                Host: e.Host,
                Description: e.description
            })
        }),
        (null === (t = e.Hosts) || void 0 === t ? void 0 : t.reduce(function(e, t) {
            return e.concat(JSON.parse(JSON.stringify(t.Cookies)))
        }, [])).forEach(function(e) {
            return o.push({
                Name: e.Name,
                Host: e.Host,
                Description: e.description
            })
        }),
        o
    }
    ,
    Cr.prototype.updateSingularConsent = function(e, t) {
        var o = t.split(":")[0]
          , n = t.split(":")[1];
        e === rt ? "always active" === Mt.getGrpStatus(Mt.getGroupById(o)) || (hr.updateConsentArray(at.groupsConsent, o, n),
        rr.handleTogglesOnSingularConsentUpdate(e, o, Boolean(Number(n)))) : e === st ? (hr.updateConsentArray(at.hostsConsent, o, n),
        rr.handleTogglesOnSingularConsentUpdate(e)) : e === it && (at.genVendorsConsent[o] = Boolean(Number(n)),
        rr.handleTogglesOnSingularConsentUpdate(e))
    }
    ,
    Cr.prototype.updateConsentArray = function(e, t, o) {
        var n = e.findIndex(function(e) {
            return e.includes(t + ":0") || e.includes(t + ":1")
        });
        -1 < n ? e[n] = t + ":" + o : e.push(t + ":" + o)
    }
    ,
    Cr);
    function Cr() {
        this.processedHtml = "",
        this.useGeoLocationService = !0,
        this.IsAlertBoxClosed = this.IsAlertBoxClosedAndValid,
        this.InitializeBanner = function() {
            return ar.initBanner()
        }
        ,
        this.getHTML = function() {
            return document.getElementById("onetrust-banner-sdk") || (Yn.insertPcHtml(),
            Qn.insertAlertHtml()),
            hr.processedHtml || (hr.processedHtml = document.querySelector("#onetrust-consent-sdk").outerHTML),
            hr.processedHtml
        }
        ,
        this.getCSS = function() {
            return Kn.processedCSS
        }
        ,
        this.setConsentProfile = function(e) {
            if (e.customPayload) {
                var t = e.customPayload;
                t.Interaction && Lt.writeCookieParam(Te.OPTANON_CONSENT, me, t.Interaction)
            }
            hr.setDataSubjectIdV2(e.identifier, e.isAnonymous),
            hr.synchroniseCookieWithPayload(e.purposes),
            rr.executeOptanonWrapper()
        }
        ,
        this.InsertScript = function(e, t, o, n, r, s) {
            var i, a = null != n && void 0 !== n, l = a && void 0 !== n.ignoreGroupCheck && !0 === n.ignoreGroupCheck;
            if (cn.canInsertForGroup(r, l) && !_t.contains(at.srcExecGrps, r)) {
                at.srcExecGrpsTemp.push(r),
                a && void 0 !== n.deleteSelectorContent && !0 === n.deleteSelectorContent && _t.empty(t);
                var c = document.createElement("script");
                switch (null != o && void 0 !== o && (i = !1,
                c.onload = c.onreadystatechange = function() {
                    i || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (i = !0,
                    o())
                }
                ),
                c.type = "text/javascript",
                c.src = e,
                s && (c.async = s),
                t) {
                case "head":
                    document.getElementsByTagName("head")[0].appendChild(c);
                    break;
                case "body":
                    document.getElementsByTagName("body")[0].appendChild(c);
                    break;
                default:
                    var d = document.getElementById(t);
                    d && (d.appendChild(c),
                    a && void 0 !== n.makeSelectorVisible && !0 === n.makeSelectorVisible && _t.show(t))
                }
                if (a && void 0 !== n.makeElementsVisible)
                    for (var u = 0, p = n.makeElementsVisible; u < p.length; u++) {
                        var h = p[u];
                        _t.show(h)
                    }
                if (a && void 0 !== n.deleteElements)
                    for (var g = 0, C = n.deleteElements; g < C.length; g++) {
                        h = C[g];
                        _t.remove(h)
                    }
            }
        }
        ,
        this.InsertHtml = function(e, t, o, n, r) {
            var s = null != n && void 0 !== n
              , i = s && void 0 !== n.ignoreGroupCheck && !0 === n.ignoreGroupCheck;
            if (cn.canInsertForGroup(r, i) && !_t.contains(at.htmlExecGrps, r)) {
                if (at.htmlExecGrpsTemp.push(r),
                s && void 0 !== n.deleteSelectorContent && !0 === n.deleteSelectorContent && _t.empty(t),
                _t.appendTo(t, e),
                s && void 0 !== n.makeSelectorVisible && !0 === n.makeSelectorVisible && _t.show(t),
                s && void 0 !== n.makeElementsVisible)
                    for (var a = 0, l = n.makeElementsVisible; a < l.length; a++) {
                        var c = l[a];
                        _t.show(c)
                    }
                if (s && void 0 !== n.deleteElements)
                    for (var d = 0, u = n.deleteElements; d < u.length; d++) {
                        c = u[d];
                        _t.remove(c)
                    }
                null != o && void 0 !== o && o()
            }
        }
        ,
        this.BlockGoogleAnalytics = function(e, t) {
            window["ga-disable-" + e] = !cn.canInsertForGroup(t)
        }
    }
    var yr, fr, kr, vr, br = (o(fr = Pr, kr = yr = gr),
    fr.prototype = null === kr ? Object.create(kr) : (mr.prototype = kr.prototype,
    new mr),
    Pr.prototype.Close = function(e) {
        rr.closeBanner(!1),
        window.location.href = "http://otsdk//consentChanged"
    }
    ,
    Pr.prototype.RejectAll = function(e) {
        rr.rejectAllEvent(),
        window.location.href = "http://otsdk//consentChanged"
    }
    ,
    Pr.prototype.AllowAll = function(e) {
        rr.AllowAllV2(e),
        window.location.href = "http://otsdk//consentChanged"
    }
    ,
    Pr.prototype.ToggleInfoDisplay = function() {
        tr.toggleInfoDisplay()
    }
    ,
    Pr);
    function mr() {
        this.constructor = fr
    }
    function Pr() {
        var e = null !== yr && yr.apply(this, arguments) || this;
        return e.mobileOnlineURL = At.mobileOnlineURL,
        e
    }
    var Ar, Sr = (Tr.prototype.syncConsentProfile = function(e, t, o) {
        void 0 === o && (o = !1),
        e ? (at.dsParams.id = e.trim(),
        hr.setDataSubjectIdV2(e)) : e = at.dsParams.id,
        o && (at.dsParams.isAnonymous = o),
        t = t || at.dsParams.token,
        e && t && Yo.getConsentProfile(e, t).then(function(e) {
            return Ar.consentProfileCallback(e)
        })
    }
    ,
    Tr.prototype.getConsentValue = function(e) {
        var t = null;
        switch (e) {
        case v[v.ACTIVE]:
        case v[v.ALWAYS_ACTIVE]:
            t = q.Active;
            break;
        case v[v.EXPIRED]:
        case v[v.OPT_OUT]:
        case v[v.PENDING]:
        case v[v.WITHDRAWN]:
            t = q.InActive
        }
        return t
    }
    ,
    Tr.prototype.isCookieGroup = function(e) {
        return !/IABV2|ISPV2|IFEV2|ISFV2/.test(e)
    }
    ,
    Tr.prototype.syncPreferences = function(e, t) {
        void 0 === t && (t = !1);
        var o = Lt.getCookie(Te.ALERT_BOX_CLOSED)
          , n = o
          , r = !1
          , s = !0
          , i = !1
          , a = _t.strToArr(Lt.readCookieParam(Te.OPTANON_CONSENT, "groups"));
        if (e && e.preferences.length)
            for (var l = 0, c = e.preferences; l < c.length; l++) {
                var d = c[l]
                  , u = d.status === v[v.NO_CONSENT]
                  , p = At.domainGrps[d.id];
                if (p)
                    if (-1 < at.grpsSynced.indexOf(p) && (at.syncedValidGrp = !0),
                    u && a.length) {
                        for (var h = -1, g = 0; g < a.length; g++)
                            if (a[g].split(":")[0] === p) {
                                h = g;
                                break
                            }
                        -1 < h && (a.splice(h, 1),
                        at.grpsSynced.push(p))
                    } else if (!u && (!o || new Date(d.lastInteractionDate) > new Date(n))) {
                        var C = this.getConsentValue(d.status);
                        if (i = !0,
                        o = d.lastInteractionDate,
                        !t && this.isCookieGroup(p)) {
                            var y = p + ":" + C
                              , f = -1;
                            for (g = 0; g < a.length; g++) {
                                var k = a[g].split(":");
                                if (k[0] === p) {
                                    k[1] !== C && (a[g] = y,
                                    r = !0),
                                    f = g;
                                    break
                                }
                            }
                            -1 === f && (a.push(y),
                            r = !0)
                        }
                    }
            }
        else
            s = !1;
        return {
            alertBoxCookieVal: o,
            groupsConsent: a,
            profileFound: s,
            syncRequired: r,
            syncOnlyDate: i = i && !r
        }
    }
    ,
    Tr.prototype.hideBannerAndPc = function() {
        var e = Gt.isBannerVisible();
        e && Gt.hideBanner(),
        (e || at.isPCVisible) && In.hideConsentNoticeV2()
    }
    ,
    Tr.prototype.setOptanonConsentCookie = function(e, t) {
        if (e.syncRequired) {
            Lt.writeCookieParam(Te.OPTANON_CONSENT, "groups", e.groupsConsent.toString());
            var o = Lt.getCookie(Te.OPTANON_CONSENT);
            Lt.setCookie(Te.OPTANON_CONSENT, o, t, !1, new Date(e.alertBoxCookieVal))
        }
    }
    ,
    Tr.prototype.setIabCookie = function(e, t, o) {
        o.syncGroups && o.syncGroups[at.syncGrpId] && o.syncGroups[at.syncGrpId].tcStringV2 ? Lt.getCookie(Te.EU_PUB_CONSENT) !== o.syncGroups[at.syncGrpId].tcStringV2 && (e.syncRequired = !0,
        Lt.setCookie(Te.EU_PUB_CONSENT, o.syncGroups[at.syncGrpId].tcStringV2, t, !1, new Date(e.alertBoxCookieVal))) : e.profileFound = !1
    }
    ,
    Tr.prototype.setAddtlVendorsCookie = function(e, t) {
        St.UseGoogleVendors && (Lt.getCookie(Te.ADDITIONAL_CONSENT_STRING) || Lt.setCookie(Te.ADDITIONAL_CONSENT_STRING, at.addtlConsentVersion, t, !1, new Date(e.alertBoxCookieVal)))
    }
    ,
    Tr.prototype.createTrans = function() {
        var e = Lt.readCookieParam(Te.OPTANON_CONSENT, "iType");
        Kt.createConsentTxn(!1, F[e], !1, !0)
    }
    ,
    Tr.prototype.updateGrpsDom = function() {
        for (var e = function(e) {
            var t = e.getAttribute("data-optanongroupid")
              , o = Mt.getGroupById(t)
              , n = !0
              , r = _t.findIndex(at.groupsConsent, function(e) {
                return e.split(":")[0] === t
            });
            -1 < r && at.groupsConsent[r].split(":")[1] === q.InActive && (n = !1),
            cn.toggleGrpElements(e, o, n),
            cn.toogleSubGroupElement(e, n, !1, !0),
            cn.toogleSubGroupElement(e, n, !0, !0)
        }, t = 0, o = cn.getAllGroupElements(); t < o.length; t++)
            e(o[t])
    }
    ,
    Tr.prototype.updateVendorsDom = function() {
        St.IsIabEnabled && (bn.updateIabVariableReference(),
        Rn.toggleVendorConsent(),
        At.legIntSettings.PAllowLI && (At.legIntSettings.PShowLegIntBtn ? Rn.updateVendorLegBtns() : Rn.toggleVendorLi()))
    }
    ,
    Tr.prototype.consentProfileCallback = function(r) {
        return l(this, void 0, void 0, function() {
            var t, o, n;
            return h(this, function(e) {
                switch (e.label) {
                case 0:
                    return t = this.syncPreferences(r),
                    o = St.ReconsentFrequencyDays,
                    n = Ut.isIABCrossConsentEnabled(),
                    this.setOptanonConsentCookie(t, o),
                    St.IsIabEnabled && !n && this.setIabCookie(t, o, r),
                    t.syncOnlyDate && (Ut.syncAlertBoxCookie(t.alertBoxCookieVal),
                    Ut.syncCookieExpiry()),
                    t.syncRequired && t.profileFound ? (at.syncRequired = t.syncRequired,
                    Ut.syncAlertBoxCookie(t.alertBoxCookieVal),
                    this.setAddtlVendorsCookie(t, o),
                    this.hideBannerAndPc(),
                    Qo.initGrpsAndHosts(),
                    !n && St.NtfyConfig.ShowNtfy && Ut.isAlertBoxClosedAndValid() ? [4, Dn.getContent()] : [3, 2]) : [3, 3];
                case 1:
                    e.sent(),
                    Dn.init(),
                    Dn.changeState(),
                    e.label = 2;
                case 2:
                    return St.IsIabEnabled && (Ut.setIABCookieData(),
                    Yt.populateVendorAndPurposeFromCookieData()),
                    this.updateGrpsDom(),
                    this.updateVendorsDom(),
                    ao.setLandingPathParam(Ae),
                    fn.substitutePlainTextScriptTags(),
                    An.updateGtmMacros(!0),
                    rr.executeOptanonWrapper(),
                    [3, 4];
                case 3:
                    !t.profileFound && t.alertBoxCookieVal && this.createTrans(),
                    e.label = 4;
                case 4:
                    return [2]
                }
            })
        })
    }
    ,
    Tr);
    function Tr() {}
    var Ir, Lr = (_r.prototype.removeCookies = function() {
        Lt.removePreview(),
        Lt.removeOptanon(),
        Lt.removeAlertBox(),
        Lt.removeIab2(),
        Lt.removeAddtlStr(),
        Lt.removeVariant(),
        at.isPreview && Ir.setPreviewCookie(),
        at.urlParams.get("otreset") && at.urlParams.set("otreset", "false");
        var e = window.location.pathname + "?" + at.urlParams.toString() + window.location.hash;
        Ir.replaceHistory(e)
    }
    ,
    _r.prototype.setPreviewCookie = function() {
        var e = new Date;
        e.setTime(e.getTime() + 864e5);
        var t = at.geoFromUrl ? "&geo=" + at.geoFromUrl : ""
          , o = "expiry=" + e.toISOString() + t;
        Lt.setCookie(Te.OT_PREVIEW, o, 1, !1)
    }
    ,
    _r.prototype.bindStopPreviewEvent = function() {
        (window.attachEvent || window.addEventListener)("message", function(e) {
            return Ir.onMessage(e)
        })
    }
    ,
    _r.prototype.replaceHistory = function(e) {
        history.pushState({}, "", e),
        location.reload()
    }
    ,
    _r.prototype.onMessage = function(e) {
        "string" == typeof e.data && e.data === Ir.CLEAR_COOKIES && (Ir.removeCookies(),
        e.source && e.source.postMessage && e.source.postMessage(Ir.CLEARED_COOKIES, e.origin))
    }
    ,
    _r);
    function _r() {
        this.CLEAR_COOKIES = "CLEAR_OT_COOKIES",
        this.CLEARED_COOKIES = "CLEARED_OT_COOKIES"
    }
    function Br(e) {
        if (e) {
            var t = window.atob(e);
            return Function('"use strict"; return ' + t)()
        }
    }
    fe.initPolyfill(),
    Lt = new Bt,
    Gt = new Nt,
    At = new mt,
    bo = new Wo,
    Ir = new Lr,
    function() {
        var e, t = window.otStubData;
        if (t) {
            lt.moduleInitializer = t.domainData,
            lt.fp = lt.moduleInitializer.TenantFeatures,
            at.isAMP = t.isAmp,
            at.dataDomainId = t.domainId,
            at.isPreview = t.isPreview,
            at.urlParams = t.urlParams,
            at.isV2Stub = t.isV2Stub || !1,
            At.gtmUpdatedinStub = t.gtmUpdated,
            t.isReset ? Ir.removeCookies() : t.isPreview && Ir.setPreviewCookie(),
            At.setBannerScriptElement(t.stubElement),
            At.setRegionRule(t.regionRule),
            lt.fp.CookieV2TargetedTemplates && (At.conditionalLogicEnabled = !(null === (e = At.getRegionRule().Conditions) || void 0 === e || !e.length),
            At.conditionalLogicEnabled && (function() {
                for (var e = At.getRegionRule(), t = 0; t < e.Conditions.length; t++)
                    try {
                        if (Br(e.Conditions[t].Expression))
                            return At.Condition = e.Conditions[t]
                    } catch (e) {
                        console.warn(e);
                        continue
                    }
                At.allConditionsFailed = !0
            }(),
            At.canUseConditionalLogic = !At.allConditionsFailed)),
            at.userLocation = t.userLocation,
            at.crossOrigin = t.crossOrigin,
            At.bannerDataParentURL = t.bannerBaseDataURL,
            At.mobileOnlineURL = C(At.mobileOnlineURL, t.mobileOnlineURL);
            var o = At.getRegionRule();
            At.multiVariantTestingEnabled = lt.moduleInitializer.MultiVariantTestingEnabled && 0 < o.Variants.length && Gt.isDateCurrent(o.TestEndTime),
            At.otDataLayer = t.otDataLayer,
            at.grpsSynced = t.grpsSynced || [],
            at.isIabSynced = t.isIabSynced,
            at.isGacSynced = t.isGacSynced,
            at.syncRequired = t.isIabSynced || t.isGacSynced || t.grpsSynced && 0 < t.grpsSynced.length,
            at.consentPreferences = t.preferences,
            at.syncGrpId = t.syncGrpId,
            at.consentApi = t.consentApi,
            at.tenantId = t.tenantId,
            at.geoFromUrl = t.geoFromUrl,
            at.nonce = t.nonce,
            at.setAttributePolyfillIsActive = t.setAttributePolyfillIsActive,
            at.storageBaseURL = t.storageBaseURL,
            bo.populateLangSwitcherPlhdr(),
            window.otStubData = {
                userLocation: at.userLocation
            },
            window.OneTrustStub = null
        }
    }(),
    function() {
        l(this, void 0, void 0, function() {
            var t, o, n, r, s, i;
            return h(this, function(e) {
                switch (e.label) {
                case 0:
                    return Mt = new jt,
                    cn = new dn,
                    on = new nn,
                    bn = new mn,
                    fn = new kn,
                    rr = new sr,
                    tr = new or,
                    Yn = new Xn,
                    Qn = new Zn,
                    ar = new lr,
                    pn = new hn,
                    Kn = new Wn,
                    to = new oo,
                    Qo = new en,
                    An = new Sn,
                    dr = new ur,
                    fo = new ko,
                    Cn = new yn,
                    Ar = new Sr,
                    Rn = new qn,
                    Yo = new Xo,
                    sn = new an,
                    In = new On,
                    lt.moduleInitializer.MobileSDK ? vr = new br : hr = new gr,
                    Yt = new Xt,
                    t = At.getRegionRule(),
                    o = At.canUseConditionalLogic ? At.Condition.UseGoogleVendors : t.UseGoogleVendors,
                    "IAB2" !== At.getRegionRuleType() ? [3, 2] : [4, Promise.all([Yo.getLangJson(), Yo.fetchGvlObj(), o ? Yo.fetchGoogleVendors() : Promise.resolve(null), Yo.loadCMP()])];
                case 1:
                    return i = e.sent(),
                    n = i[0],
                    r = i[1],
                    s = i[2],
                    at.gvlObj = r,
                    at.addtlVendorsList = s ? s.vendors : null,
                    [3, 4];
                case 2:
                    return [4, Yo.getLangJson()];
                case 3:
                    n = e.sent(),
                    e.label = 4;
                case 4:
                    return function(r) {
                        l(this, void 0, void 0, function() {
                            var t, o, n;
                            return h(this, function(e) {
                                switch (e.label) {
                                case 0:
                                    return window.OneTrust = window.Optanon = Object.assign({}, window.OneTrust, function(e) {
                                        var t, o = lt.moduleInitializer.MobileSDK;
                                        t = o ? vr : hr;
                                        var n = {
                                            AllowAll: t.AllowAll,
                                            BlockGoogleAnalytics: t.BlockGoogleAnalytics,
                                            Close: t.Close,
                                            getCSS: t.getCSS,
                                            GetDomainData: t.GetDomainData,
                                            getGeolocationData: t.getGeolocationData,
                                            getHTML: t.getHTML,
                                            Init: t.Init,
                                            InitializeBanner: t.InitializeBanner,
                                            initializeCookiePolicyHtml: t.initCookiePolicyAndSettings,
                                            InsertHtml: t.InsertHtml,
                                            InsertScript: t.InsertScript,
                                            IsAlertBoxClosed: t.IsAlertBoxClosed,
                                            IsAlertBoxClosedAndValid: t.IsAlertBoxClosedAndValid,
                                            LoadBanner: t.LoadBanner,
                                            OnConsentChanged: fo.OnConsentChanged,
                                            ReconsentGroups: t.ReconsentGroups,
                                            RejectAll: t.RejectAll,
                                            SetAlertBoxClosed: t.SetAlertBoxClosed,
                                            setGeoLocation: t.setGeoLocation,
                                            ToggleInfoDisplay: t.ToggleInfoDisplay,
                                            TriggerGoogleAnalyticsEvent: t.TriggerGoogleAnalyticsEvent,
                                            useGeoLocationService: t.useGeoLocationService,
                                            FetchAndDownloadPC: t.FetchAndDownloadPC,
                                            changeLanguage: t.changeLang,
                                            testLog: t.getTestLogData,
                                            UpdateConsent: t.updateSingularConsent
                                        };
                                        e.IsConsentLoggingEnabled && (n.getDataSubjectId = t.getDataSubjectId,
                                        n.setConsentProfile = t.setConsentProfile,
                                        n.setDataSubjectId = t.setDataSubjectIdV2,
                                        at.isV2Stub && (n.syncConsentProfile = Ar.syncConsentProfile));
                                        o && (n.mobileOnlineURL = t.mobileOnlineURL,
                                        n.otCookieData = at.otCookieData);
                                        e.IsIabEnabled && (n.updateConsentFromCookies = fo.updateConsentFromCookie,
                                        n.getPingRequest = Yt.getPingRequestForTcf,
                                        n.getVendorConsentsRequestV2 = Yt.getVendorConsentsRequestV2,
                                        n.showVendorsList = t.showVendorsList);
                                        return n
                                    }(r.DomainData)),
                                    Ut.initializeBannerVariables(r),
                                    Qt = new Zt,
                                    ro = new so,
                                    Kt = new Wt,
                                    po = new Co,
                                    ao = new co,
                                    Un = new jn,
                                    Dn = new Hn,
                                    function() {
                                        var o = window.OTExternalConsent;
                                        if (o && o.consentedDate && (o.groups || o.tcString || o.addtlString)) {
                                            var n = []
                                              , e = o.groups.split(",");
                                            e.forEach(function(e) {
                                                var t = e.split(":");
                                                n.push({
                                                    lastInteractionDate: o.consentedDate,
                                                    status: "1" === t[1] ? v[v.ACTIVE] : v[v.OPT_OUT],
                                                    id: t[0]
                                                }),
                                                at.grpsSynced.push(t[0])
                                            }),
                                            at.consentPreferences = {
                                                preferences: n,
                                                syncGroups: null
                                            },
                                            at.syncRequired = !0,
                                            Qt.updateGroupsInCookie(Te.OPTANON_CONSENT, e),
                                            Lt.setCookie(Te.ALERT_BOX_CLOSED, o.consentedDate, 365),
                                            o.tcString && (at.isIabSynced = !0,
                                            Lt.setCookie(Te.EU_PUB_CONSENT, o.tcString, 365)),
                                            o.addtlString && (at.isGacSynced = !0,
                                            Lt.setCookie(Te.ADDITIONAL_CONSENT_STRING, "" + o.addtlString, 365))
                                        }
                                    }(),
                                    at.isPreview && (Ut.syncOtPreviewCookie(),
                                    Ir.bindStopPreviewEvent()),
                                    t = Ar.syncPreferences(at.consentPreferences, !0),
                                    (at.syncRequired || t.syncRequired) && Ut.syncAlertBoxCookie(t.alertBoxCookieVal),
                                    Ut.syncCookieExpiry(),
                                    o = window.OneTrust.dataSubjectParams || {},
                                    (at.dsParams = o).id && hr.setDataSubjectIdV2(o.id, o.isAnonymous),
                                    At.multiVariantTestingEnabled && At.selectedVariant && Lt.setCookie(Te.SELECTED_VARIANT, At.selectedVariant.Id, St.ReconsentFrequencyDays),
                                    [4, Yt.initializeIABModule()];
                                case 1:
                                    return e.sent(),
                                    window.OneTrust.Init(!0),
                                    [4, Qo.fetchAssets()];
                                case 2:
                                    return (e.sent(),
                                    ar.initBanner(),
                                    fo.assetResolve(!0),
                                    Kn.initialiseCssReferences(),
                                    n = Ut.isIABCrossConsentEnabled(),
                                    (at.syncedValidGrp || at.isIabSynced || at.isGacSynced) && !n && St.NtfyConfig.ShowNtfy && Ut.isAlertBoxClosedAndValid()) ? (at.ntfyRequired = !0,
                                    [4, Dn.getContent()]) : [3, 4];
                                case 3:
                                    e.sent(),
                                    e.label = 4;
                                case 4:
                                    return n || window.OneTrust.LoadBanner(),
                                    [2]
                                }
                            })
                        })
                    }(n),
                    [2]
                }
            })
        })
    }()
}();
