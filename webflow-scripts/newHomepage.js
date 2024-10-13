( () => {
    "use strict";
    var e = {
        6984: (e, s) => {
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.localizeVideos = void 0;
            const t = [{
                selector: ".home--2section video",
                video: {
                    en: "https://assets-global.website-files.com/6257adef93867e50d84d30e2/663b271d6f05c8c9e11f8d65_Discord Refresh Sound-MP4-transcode.mp4",
                    fr: "https://assets-global.website-files.com/6257adef93867e50d84d30e2%2F66500a5e79044631aa60ed4c_Discord_Websote_Refresh_Emojis_FR_V2-transcode.mp4",
                    de: "https://assets-global.website-files.com/6257adef93867e50d84d30e2%2F66500ef311098963664687ed_Discord_Website_Refresh_Emojis_GE-transcode.mp4",
                    ko: "https://assets-global.website-files.com/6257adef93867e50d84d30e2%2F66500f74018f7d50359d626f_Discord_Website_Refresh_Emojis_KR-transcode.mp4",
                    pt: "https://assets-global.website-files.com/6257adef93867e50d84d30e2%2F66500fd62160990f7737f31d_Discord_Website_Refresh_Emojis_BR_V2-transcode.mp4",
                    jp: "https://assets-global.website-files.com/6257adef93867e50d84d30e2%2F66500ffe5eabd6452b3c5ed2_Discord_Website_Refresh_Emojis_JP_V2-transcode.mp4"
                },
                image: {
                    en: "https://assets-global.website-files.com/6257adef93867e50d84d30e2/663b271d6f05c8c9e11f8d65_Discord Refresh Sound-MP4-transcode.webm",
                    fr: "https://assets-global.website-files.com/6257adef93867e50d84d30e2%2F66500a5e79044631aa60ed4c_Discord_Websote_Refresh_Emojis_FR_V2-transcode.webm",
                    de: "https://assets-global.website-files.com/6257adef93867e50d84d30e2%2F66500ef311098963664687ed_Discord_Website_Refresh_Emojis_GE-transcode.webm",
                    ko: "https://assets-global.website-files.com/6257adef93867e50d84d30e2%2F66500f74018f7d50359d626f_Discord_Website_Refresh_Emojis_KR-transcode.webm",
                    pt: "https://assets-global.website-files.com/6257adef93867e50d84d30e2%2F66500fd62160990f7737f31d_Discord_Website_Refresh_Emojis_BR_V2-transcode.webm",
                    jp: "https://assets-global.website-files.com/6257adef93867e50d84d30e2%2F66500ffe5eabd6452b3c5ed2_Discord_Website_Refresh_Emojis_JP_V2-transcode.webm"
                }
            }, {
                selector: ".home--4section video",
                video: {
                    en: "https://assets-global.website-files.com/6257adef93867e50d84d30e2/6638c6b04eff56a99c1e2d7d_Discord_Website_Refresh_Hop-In-transcode.mp4",
                    fr: "https://assets-global.website-files.com/6257adef93867e50d84d30e2%2F665010311d788257f3b23791_Discord_Website_Refresh_Hop-In_FR-transcode.mp4",
                    de: "https://assets-global.website-files.com/6257adef93867e50d84d30e2%2F665010557d66616f01075a60_Discord_Website_Refresh_Hop-In_GE-transcode.mp4",
                    ko: "https://assets-global.website-files.com/6257adef93867e50d84d30e2%2F6650106e6fb69aef8dc5f004_Discord_Website_Refresh_Hop-In_KR-transcode.mp4",
                    pt: "https://assets-global.website-files.com/6257adef93867e50d84d30e2%2F6650108679044631aa652688_Discord_Website_Refresh_Hop-In_BR-transcode.mp4",
                    jp: "https://assets-global.website-files.com/6257adef93867e50d84d30e2%2F665010bf2c1b1261d1ee74bd_Discord_Website_Refresh_Hop-In_JP-transcode.mp4"
                },
                image: {
                    en: "https://assets-global.website-files.com/6257adef93867e50d84d30e2/6638c6b04eff56a99c1e2d7d_Discord_Website_Refresh_Hop-In-transcode.webm",
                    fr: "https://assets-global.website-files.com/6257adef93867e50d84d30e2%2F665010311d788257f3b23791_Discord_Website_Refresh_Hop-In_FR-transcode.webm",
                    de: "https://assets-global.website-files.com/6257adef93867e50d84d30e2%2F665010557d66616f01075a60_Discord_Website_Refresh_Hop-In_GE-transcode.webm",
                    ko: "https://assets-global.website-files.com/6257adef93867e50d84d30e2%2F6650106e6fb69aef8dc5f004_Discord_Website_Refresh_Hop-In_KR-transcode.webm",
                    pt: "https://assets-global.website-files.com/6257adef93867e50d84d30e2%2F6650108679044631aa652688_Discord_Website_Refresh_Hop-In_BR-transcode.webm",
                    jp: "https://assets-global.website-files.com/6257adef93867e50d84d30e2%2F665010bf2c1b1261d1ee74bd_Discord_Website_Refresh_Hop-In_JP-transcode.webm"
                }
            }, {
                selector: ".home--5section video",
                video: {
                    en: "https://assets-global.website-files.com/6257adef93867e50d84d30e2/6638c7e8907412911166f683_Discord_Website_Refresh_See Who_s Around-transcode.mp4",
                    fr: "https://assets-global.website-files.com/6257adef93867e50d84d30e2%2F665010fd81ada6f992d87ddc_Discord_Website_Refresh_StatusHover_FR_V2-transcode.mp4",
                    de: "https://assets-global.website-files.com/6257adef93867e50d84d30e2%2F6650111b78ee096c094a234c_Discord_Website_Refresh_StatusHover_GE-transcode.mp4",
                    ko: "https://assets-global.website-files.com/6257adef93867e50d84d30e2%2F665011521109896366482edb_Discord_Website_Refresh_StatusHover_KR-transcode.mp4",
                    pt: "https://assets-global.website-files.com/6257adef93867e50d84d30e2%2F6650116ce3e100a7ac12c05c_Discord_Website_Refresh_StatusHover_BR-transcode.mp4",
                    jp: "https://assets-global.website-files.com/6257adef93867e50d84d30e2%2F6650118b40fea0347c59c58d_Discord_Website_Refresh_StatusHover_JP-transcode.mp4"
                },
                image: {
                    en: "https://assets-global.website-files.com/6257adef93867e50d84d30e2/6638c7e8907412911166f683_Discord_Website_Refresh_See Who_s Around-transcode.webm",
                    fr: "https://assets-global.website-files.com/6257adef93867e50d84d30e2%2F665010fd81ada6f992d87ddc_Discord_Website_Refresh_StatusHover_FR_V2-transcode.webm",
                    de: "https://assets-global.website-files.com/6257adef93867e50d84d30e2%2F6650111b78ee096c094a234c_Discord_Website_Refresh_StatusHover_GE-transcode.webm",
                    ko: "https://assets-global.website-files.com/6257adef93867e50d84d30e2%2F665011521109896366482edb_Discord_Website_Refresh_StatusHover_KR-transcode.webm",
                    pt: "https://assets-global.website-files.com/6257adef93867e50d84d30e2%2F6650116ce3e100a7ac12c05c_Discord_Website_Refresh_StatusHover_BR-transcode.webm",
                    jp: "https://assets-global.website-files.com/6257adef93867e50d84d30e2%2F6650118b40fea0347c59c58d_Discord_Website_Refresh_StatusHover_JP-transcode.webm"
                }
            }, {
                selector: ".home--6section video",
                video: {
                    en: "https://assets-global.website-files.com/6257adef93867e50d84d30e2/66446078b3e738a7c1f85e35_Discord_Website_Refresh_Activities_03-transcode.mp4",
                    fr: "https://assets-global.website-files.com/6257adef93867e50d84d30e2%2F665011b0a56d29b2bf1f24dc_Discord_Website_Refresh_Activities_FR-transcode.mp4",
                    de: "https://assets-global.website-files.com/6257adef93867e50d84d30e2%2F665011d65ac8cfa3a46b1e9b_Discord_Website_Refresh_Activities_GE-transcode.mp4",
                    ko: "https://assets-global.website-files.com/6257adef93867e50d84d30e2%2F665011f87c04928bc48daa46_Discord_Website_Refresh_Activities_KR-transcode.mp4",
                    pt: "https://assets-global.website-files.com/6257adef93867e50d84d30e2%2F665012221f3510f10beb4275_Discord_Website_Refresh_Activities_BR-transcode.mp4",
                    jp: "https://assets-global.website-files.com/6257adef93867e50d84d30e2%2F6650123f8c0540f1cf54690b_Discord_Website_Refresh_Activities_JP-transcode.mp4"
                },
                image: {
                    source: "https://assets-global.website-files.com/6257adef93867e50d84d30e2/66446078b3e738a7c1f85e35_Discord_Website_Refresh_Activities_03-transcode.webm",
                    fr: "https://assets-global.website-files.com/6257adef93867e50d84d30e2%2F665011b0a56d29b2bf1f24dc_Discord_Website_Refresh_Activities_FR-transcode.webm",
                    de: "https://assets-global.website-files.com/6257adef93867e50d84d30e2%2F665011d65ac8cfa3a46b1e9b_Discord_Website_Refresh_Activities_GE-transcode.webm",
                    ko: "https://assets-global.website-files.com/6257adef93867e50d84d30e2%2F665011f87c04928bc48daa46_Discord_Website_Refresh_Activities_KR-transcode.webm",
                    pt: "https://assets-global.website-files.com/6257adef93867e50d84d30e2%2F665012221f3510f10beb4275_Discord_Website_Refresh_Activities_BR-transcode.webm",
                    jp: "https://assets-global.website-files.com/6257adef93867e50d84d30e2%2F6650123f8c0540f1cf54690b_Discord_Website_Refresh_Activities_JP-transcode.webm"
                }
            }]
              , o = ["en", "fr", "de", "ko", "pt", "jp"];
            s.localizeVideos = function(e="en") {
                let s = e.split("-")[0];
                o.includes(e) || (s = "en");
                for (const e of t) {
                    const t = document.querySelector(e.selector);
                    t && (t.src = e.video[s])
                }
            }
        }
    }
      , s = {};
    function t(o) {
        var d = s[o];
        if (void 0 !== d)
            return d.exports;
        var i = s[o] = {
            exports: {}
        };
        return e[o](i, i.exports, t),
        i.exports
    }
    ( () => {
        const e = t(6984)
          , s = window.Webflow
          , o = document.getElementById("discord_robot");
        if (window.matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change", (function() {
            window.location.reload()
        }
        )),
        void 0 !== window.matchMedia("(prefers-reduced-motion: reduce)").matches && !0 === window.matchMedia("(prefers-reduced-motion: reduce)").matches)
            !function() {
                const e = window.Webflow;
                e.require("lottie").lottie.freeze(),
                document.querySelector(".chats_top")?.classList.add("hide"),
                document.querySelector(".chats_top-image")?.classList.remove("hide"),
                document.querySelector(".fun2-top")?.classList.add("hide"),
                document.querySelector(".fun2-top_img")?.classList.remove("hide"),
                document.querySelectorAll(".home--group-chat-img.video").forEach((e => {
                    e.classList.add("hide")
                }
                )),
                document.querySelectorAll(".reduce-motion-img").forEach((e => {
                    e.classList.remove("hide")
                }
                ));
                const s = e.require("ix2").store.getState().ixData;
                s.events = Object.fromEntries(Object.entries(s.events).filter((e => {
                    let s = e[1]?.eventTypeId;
                    return /^MOUSE_.*CLICK$/.test(s)
                }
                ))),
                s.site = {
                    mediaQueries: s.mediaQueries
                },
                e.require("ix2").destroy();
                for (const e of document.querySelectorAll("[style*='will-change'], [style*='opacity: 0']"))
                    e.removeAttribute("style");
                e.require("ix2").init(s)
            }(),
            o.style.pointerEvents = "none";
        else {
            const e = document.querySelector(".discord_banner");
            null !== e && new IntersectionObserver(( (e, t) => {
                e[0].isIntersecting && (function() {
                    const e = s.require("lottie").lottie
                      , t = [];
                    o.querySelectorAll(".image-robot").forEach(( (s, o) => {
                        const d = s.getAttribute("data-json-url");
                        d && function(s, o) {
                            let d = e.loadAnimation({
                                container: s,
                                renderer: "svg",
                                loop: 0,
                                autoplay: !1,
                                path: o
                            });
                            t.push(d)
                        }(s, d)
                    }
                    )),
                    setTimeout(( () => {
                        !async function(e) {
                            let s = document.getElementById("robot_head")?.querySelectorAll(".image-robot");
                            if (s) {
                                let t = 0;
                                o.addEventListener("click", (function(d) {
                                    if (d.preventDefault,
                                    t += 1,
                                    t <= 6) {
                                        let d = s[t];
                                        if (d) {
                                            for (let e = 0; e < s.length; e++)
                                                s[e].classList.toggle("hide", d != s[e]);
                                            e[t]?.goToAndStop(0, !0),
                                            e[t]?.play(),
                                            6 === t && (setTimeout(( () => {
                                                let e = document.getElementById("smoke_gif");
                                                e.classList.remove("hide"),
                                                setTimeout(( () => {
                                                    e.style.opacity = "1"
                                                }
                                                ), 500)
                                            }
                                            ), 500),
                                            o.style.pointerEvents = "none");
                                            const i = document.getElementById(`easter_egg_audio_${t}`);
                                            i && (i.pause(),
                                            i.currentTime = 0,
                                            i.play())
                                        }
                                    }
                                }
                                ))
                            }
                        }(t)
                    }
                    ), 100)
                }(),
                t.unobserve(e[0].target))
            }
            ),{
                threshold: .1
            }).observe(e)
        }
        window.Localize?.on("setLanguage", (function(s) {
            (0,
            e.localizeVideos)(s.to)
        }
        ))
    }
    )()
}
)();
