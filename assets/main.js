var style, sheet, rule, on = addEventListener, $ = function(e) {
    return document.querySelector(e)
}, $$ = function(e) {
    return document.querySelectorAll(e)
}, $body = document.body, $inner = $(".inner"), client = function() {
    var e, t, o = {
        browser: "other",
        browserVersion: 0,
        os: "other",
        osVersion: 0,
        canUse: null
    }, n = navigator.userAgent;
    for (e = [["firefox", /Firefox\/([0-9\.]+)/], ["edge", /Edge\/([0-9\.]+)/], ["safari", /Version\/([0-9\.]+).+Safari/], ["chrome", /Chrome\/([0-9\.]+)/], ["ie", /Trident\/.+rv:([0-9]+)/]],
    t = 0; t < e.length; t++)
        if (n.match(e[t][1])) {
            o.browser = e[t][0],
            o.browserVersion = parseFloat(RegExp.$1);
            break
        }
    for (e = [["ios", /([0-9_]+) like Mac OS X/, function(e) {
        return e.replace("_", ".").replace("_", "")
    }
    ], ["ios", /CPU like Mac OS X/, function(e) {
        return 0
    }
    ], ["android", /Android ([0-9\.]+)/, null], ["mac", /Macintosh.+Mac OS X ([0-9_]+)/, function(e) {
        return e.replace("_", ".").replace("_", "")
    }
    ], ["windows", /Windows NT ([0-9\.]+)/, null], ["undefined", /Undefined/, null]],
    t = 0; t < e.length; t++)
        if (n.match(e[t][1])) {
            o.os = e[t][0],
            o.osVersion = parseFloat(e[t][2] ? e[t][2](RegExp.$1) : RegExp.$1);
            break
        }
    var s = document.createElement("div");
    return o.canUse = function(e) {
        var t = s.style
          , o = e.charAt(0).toUpperCase() + e.slice(1);
        return e in t || "Moz" + o in t || "Webkit" + o in t || "O" + o in t || "ms" + o in t
    }
    ,
    o
}(), trigger = function(e) {
    if ("ie" == client.browser) {
        var t = document.createEvent("Event");
        t.initEvent(e, !1, !0),
        dispatchEvent(t)
    } else
        dispatchEvent(new Event(e))
}, cssRules = function(n) {
    var e, t = document.styleSheets, s = [], r = function(e) {
        var t, o = e.cssRules;
        for (t = 0; t < o.length; t++)
            o[t]instanceof CSSMediaRule && matchMedia(o[t].conditionText).matches ? r(o[t]) : o[t]instanceof CSSStyleRule && o[t].selectorText == n && s.push(o[t])
    };
    for (e = 0; e < t.length; e++)
        r(t[e]);
    return s
};
on("load", function() {
    if (setTimeout(function() {
        $body.className = $body.className.replace(/\bis-loading\b/, "is-playing"),
        setTimeout(function() {
            $body.className = $body.className.replace(/\bis-playing\b/, "is-ready")
        }, 5750)
    }, 100),
    "chrome" != client.browser) {
        var e = -1;
        switch (Math.floor(10 * Math.random()) + 0) {
        case 0:
            e = 28468983;
            break;
        case 1:
            e = 29819851;
            break;
        case 2:
            e = 419250357;
            break;
        case 3:
            e = 546489405;
            break;
        case 4:
            e = 40729223;
            break;
        case 5:
            e = 30987293;
            break;
        case 6:
            e = 466343211;
            break;
        case 7:
            e = 540042;
            break;
        case 8:
            e = 32507038;
            break;
        case 9:
            e = 25731320
        }
        var t = document.createElement("audio");
        t.style.display = "none",
        t.src = "//music.kxnrl.com/musics/netease/" + e + ".mp3",
        t.autoplay = !1,
        t.loop = !0,
        t.volume = .3,
        document.body.appendChild(t),
        t.play()
    }
}),
(style = document.createElement("style")).appendChild(document.createTextNode("")),
document.head.appendChild(style),
sheet = style.sheet,
"android" == client.os ? function() {
    sheet.insertRule("body::after { }", 0),
    rule = sheet.cssRules[0];
    var e = function() {
        rule.style.cssText = "height: " + Math.max(screen.width, screen.height) + "px"
    };
    on("load", e),
    on("orientationchange", e),
    on("touchmove", e)
}() : "ios" == client.os ? (sheet.insertRule("body::after { }", 0),
(rule = sheet.cssRules[0]).style.cssText = "-webkit-transform: scale(1.0)",
sheet.insertRule("body.ios-focus-fix::before { }", 0),
(rule = sheet.cssRules[0]).style.cssText = "height: calc(100% + 60px)",
on("focus", function(e) {
    $body.classList.add("ios-focus-fix")
}, !0),
on("blur", function(e) {
    $body.classList.remove("ios-focus-fix")
}, !0)) : "ie" == client.browser && (function() {
    var e, t = cssRules("body::before");
    0 < t.length && ((e = t[0]).style.width.match("calc") ? (e.style.opacity = .9999,
    setTimeout(function() {
        e.style.opacity = 1
    }, 100)) : (document.styleSheets[0].addRule("body::before", "content: none !important;"),
    $body.style.backgroundImage = e.style.backgroundImage.replace('url("images/', 'url("assets/images/'),
    $body.style.backgroundPosition = e.style.backgroundPosition,
    $body.style.backgroundRepeat = e.style.backgroundRepeat,
    $body.style.backgroundColor = e.style.backgroundColor,
    $body.style.backgroundAttachment = "fixed",
    $body.style.backgroundSize = e.style.backgroundSize))
}(),
function() {
    var e, t;
    (t = function() {
        var e, t, o, n, s, r;
        for ((s = $("#wrapper")).style.height = "auto",
        s.scrollHeight <= innerHeight && (s.style.height = "100vh"),
        n = $$(".container.full"),
        r = 0; r < n.length; r++)
            s = n[r],
            o = getComputedStyle(s),
            s.style.minHeight = "",
            s.style.height = "",
            e = o.minHeight,
            s.style.minHeight = 0,
            s.style.height = "",
            t = o.height,
            0 != e && (s.style.height = e < t ? "auto" : e)
    }
    )(),
    on("resize", function() {
        clearTimeout(e),
        e = setTimeout(t, 250)
    }),
    on("load", t)
}()),
client.canUse("object-fit") || (function() {
    var e, t, o, n, s = $$(".image[data-position]");
    for (o = 0; o < s.length; o++)
        "IMG" != (t = (e = s[o]).firstChild).tagName && (t = t.firstChild),
        t.parentNode.classList.contains("deferred") ? (t.parentNode.classList.remove("deferred"),
        n = t.getAttribute("data-src"),
        t.removeAttribute("data-src")) : n = t.getAttribute("src"),
        t.style.backgroundImage = "url('" + n + "')",
        t.style.backgroundSize = "cover",
        t.style.backgroundPosition = e.dataset.position,
        t.style.backgroundRepeat = "no-repeat",
        t.src = "data:image/svg+xml;charset=utf8," + escape('<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1" viewBox="0 0 1 1"></svg>')
}(),
function() {
    var e, t, o, n, s = $$(".gallery img");
    for (o = 0; o < s.length; o++)
        (t = (e = s[o]).parentNode).classList.contains("deferred") ? (t.classList.remove("deferred"),
        n = e.getAttribute("data-src")) : n = e.getAttribute("src"),
        t.style.backgroundImage = "url('" + n + "')",
        t.style.backgroundSize = "cover",
        t.style.backgroundPosition = "center",
        t.style.backgroundRepeat = "no-repeat",
        e.style.opacity = "0"
}()),
function() {
    var e, t = $$(".deferred");
    "forEach"in NodeList.prototype || (NodeList.prototype.forEach = Array.prototype.forEach),
    t.forEach(function(t) {
        var o = t.firstChild;
        t.style.backgroundImage = "url(" + o.src + ")",
        t.style.backgroundSize = "100% 100%",
        t.style.backgroundPosition = "top left",
        t.style.backgroundRepeat = "no-repeat",
        o.style.opacity = 0,
        o.style.transition = "opacity 0.375s ease-in-out",
        o.addEventListener("load", function(e) {
            "done" === o.dataset.src && (Date.now() - o._startLoad < 375 ? (t.classList.remove("loading"),
            t.style.backgroundImage = "none",
            o.style.transition = "",
            o.style.opacity = 1) : (t.classList.remove("loading"),
            o.style.opacity = 1,
            setTimeout(function() {
                t.style.backgroundImage = "none"
            }, 375)))
        })
    }),
    on("load", e = function() {
        var a = document.documentElement.clientHeight
          , i = "ios" == client.os ? document.body.scrollTop : document.documentElement.scrollTop
          , c = i + a;
        t.forEach(function(e) {
            var t = e.firstChild;
            if (null === t.offsetParent)
                return !0;
            if ("done" === t.dataset.src)
                return !0;
            var o, n = t.getBoundingClientRect(), s = i + Math.floor(n.top) - a, r = i + Math.ceil(n.bottom) + a;
            s <= c && i <= r && (o = t.dataset.src,
            t.dataset.src = "done",
            e.classList.add("loading"),
            t._startLoad = Date.now(),
            t.src = o)
        })
    }
    ),
    on("resize", e),
    on("scroll", e)
}();
