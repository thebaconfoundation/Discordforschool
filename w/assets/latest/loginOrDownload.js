( () => {
    "use strict";
    var o = {
        32383: (o, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.getChromeVersion = function() {
                var o = navigator.userAgent.match(/Chrom(?:e|ium)\/([0-9]+)\./);
                return null != o ? parseInt(o[1], 10) : -1
            }
            ;
            t.getCurrentPlatform = function() {
                var o = window.navigator.userAgent
                  , t = window.navigator.platform;
                if (e.includes(t))
                    return "IOS";
                if (r.includes(t))
                    return "MAC";
                if (n.includes(t))
                    return "WINDOWS";
                if (/Android/.test(o))
                    return "ANDROID";
                if (i.includes(t) || /Linux/.test(o))
                    return "LINUX";
                return
            }
            ;
            t.windowsPlatforms = t.macosPlatforms = t.linuxPlatforms = t.iosPlatforms = void 0;
            var e = t.iosPlatforms = ["iPhone", "iPad", "iPod"]
              , n = t.windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"]
              , r = t.macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"]
              , i = t.linuxPlatforms = ["Linux", "Linux i686", "Linux armv7l", "Linux armv8l", "Linux x86_64"]
        }
    }
      , t = {};
    function e(n) {
        var r = t[n];
        if (void 0 !== r)
            return r.exports;
        var i = t[n] = {
            exports: {}
        };
        o[n](i, i.exports, e);
        return i.exports
    }
    ( () => {
        var o, t, n, r, i, a = e(32383);
        function s() {
            var o = window.location.hostname;
            return ["discord.com", "ptb.discord.com", "canary.discord.com", "staging.discord.co"].includes(o) ? o : "discord.com"
        }
        o = s(),
        t = "https://" + o + "/register",
        n = "https://" + o + "/channels/@me",
        r = null != window.localStorage.getItem("token"),
        (i = document.querySelectorAll(".open-or-signup-js")).length > 0 && i.forEach((function(o) {
            if (r) {
                o.innerText = "Open Discord";
                o.href = n
            } else {
                o.innerText = "Sign up";
                o.href = t
            }
        }
        ));
        !function() {
            var o, t, e, n, r = !0, i = s(), a = "https://" + i + "/login", l = "https://" + i + "/register", c = "https://" + i + "/channels/@me";
            if (null != window.localStorage.getItem("token")) {
                o = "Open Discord";
                t = c;
                r = !0;
                e = "Open Discord";
                n = c
            } else {
                r = !1;
                o = "Login";
                e = "Sign up";
                t = a;
                n = l
            }
            var d = document.querySelectorAll(".login-button-js")
              , u = document.querySelectorAll(".footer-open-discord-button-js");
            d.length > 0 && d.forEach((function(e) {
                r || e.classList.add("hide-on-mobile");
                e.innerText = o;
                e.href = t;
                r && (e.dataset.trackNav = "navbar-open-button")
            }
            ));
            u.length > 0 && u.forEach((function(o) {
                window.innerWidth <= 768 ? o.innerText = "Download" : o.innerText = e;
                o.href = n
            }
            ))
        }();
        !function() {
            var o = s()
              , t = (0,
            a.getCurrentPlatform)()
              , e = {
                text: "Download",
                href: "https://discord.com/download"
            };
            switch (t) {
            case "IOS":
                e.text = "Download on the App Store";
                e.href = "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746";
                break;
            case "ANDROID":
                e.text = "Download on Google Play";
                e.href = "https://play.google.com/store/apps/details?id=com.discord";
                break;
            case "WINDOWS":
                e.text = "Download for Windows";
                e.href = "https://" + o + "/api/download?platform=win";
                break;
            case "MAC":
                e.text = "Download for Mac";
                e.href = "https://" + o + "/api/download?platform=osx";
                break;
            case "LINUX":
                e.text = "Download for Linux";
                e.href = "https://" + o + "/api/download?platform=linux"
            }
            document.querySelectorAll(".download-button").forEach((function(o) {
                o.text = e.text;
                o.href = e.href
            }
            ))
        }()
    }
    )()
}
)();
//# sourceMappingURL=loginOrDownload.js.map
