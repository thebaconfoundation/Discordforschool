( () => {
    "use strict";
    var o = {
        5349: (o, n) => {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.getAppDetails = void 0;
            n.getAppDetails = function(o) {
                switch (o) {
                case "WINDOWS":
                    return {
                        main: {
                            downloadText: "Download for Windows",
                            info: "Windows 10 or higher"
                        }
                    };
                case "MAC":
                    return {
                        main: {
                            downloadText: "Download for Mac",
                            info: "macOS 10.15 (Catalina) or higher"
                        }
                    };
                case "LINUX":
                    return {
                        main: {
                            downloadText: "Download for Linux",
                            info: "64-bit Linux required"
                        }
                    };
                case "IOS":
                    return {
                        main: {
                            downloadText: "Download on the App Store",
                            info: "Available on iOS 10.0 and up"
                        }
                    };
                case "ANDROID":
                    return {
                        main: {
                            info: "Available on Android 6.0.x and up",
                            downloadText: "Download on Google Play"
                        }
                    };
                default:
                    return {
                        main: {
                            info: "",
                            downloadText: "Download"
                        }
                    }
                }
            }
        }
        ,
        1741: (o, n) => {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.getCurrentPlatform = n.linuxPlatforms = n.macosPlatforms = n.windowsPlatforms = n.iosPlatforms = void 0,
            n.iosPlatforms = ["iPhone", "iPad", "iPod"],
            n.windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
            n.macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
            n.linuxPlatforms = ["Linux", "Linux i686", "Linux armv7l", "Linux armv8l", "Linux x86_64"],
            n.getCurrentPlatform = function() {
                const o = window.navigator.userAgent
                  , t = window.navigator.platform;
                return n.iosPlatforms.includes(t) ? "IOS" : n.macosPlatforms.includes(t) ? "MAC" : n.windowsPlatforms.includes(t) ? "WINDOWS" : /Android/.test(o) ? "ANDROID" : n.linuxPlatforms.includes(t) || /Linux/.test(o) ? "LINUX" : "GENERIC"
            }
        }
    }
      , n = {};
    function t(e) {
        var a = n[e];
        if (void 0 !== a)
            return a.exports;
        var i = n[e] = {
            exports: {}
        };
        return o[e](i, i.exports, t),
        i.exports
    }
    ( () => {
        const o = t(1741)
          , n = t(5349);
        !function() {
            const t = (0,
            o.getCurrentPlatform)();
            document.querySelector(".download-other").innerText = (0,
            n.getAppDetails)(t).main.downloadText
        }()
    }
    )()
}
)();
