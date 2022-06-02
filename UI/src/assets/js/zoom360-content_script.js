var doc, html, docW, docH, initScrollTop, initScrollLeft, clientH, clientW, wrapper, dragresize, contentSc, isContentScriptLoaded = !0,
	scrollBar = {},
	counter = 1,
	entireScrollNumber = 0,
	scrollBarWidth = 0,
	bodyCssText = "",
	entireCaptureStyleChange = [],
	entireStopped = !1,
	menu = {
		visible: {
			enable: "false",
			key: "V"
		},
		selected: {
			enable: "false",
			key: "S"
		},
		entire: {
			enable: "false",
			key: "E"
		}
	},
	fixedElements = [],
	cameraContainer = null,
	captureText = chrome.i18n.getMessage("capture_btn_capture"),
	cancelText = chrome.i18n.getMessage("capture_btn_cancel"),
	copyText = chrome.i18n.getMessage("capture_btn_copy"),
	wrapperHTML = '<div id="awesome_screenshot_wrapper"><div id="awesome_screenshot_top"></div><div id="awesome_screenshot_right"></div><div id="awesome_screenshot_bottom"></div><div id="awesome_screenshot_left"></div><div id="awesome_screenshot_center" class="drsElement drsMoveHandle"><div id="awesome_screenshot_size" style="min-width:70px;"><span>0 X 0</span></div><div id="awesome_screenshot_action"><a id="awesome_screenshot_cancel"><span id="awesome_screenshot_cancel_icon"></span>' + cancelText + '</a><a id="awesome_screenshot_copy"><span id="awesome_screenshot_copy_icon"></span>' + copyText + '</a><a id="awesome_screenshot_capture"><span id="awesome_screenshot_capture_icon"></span>' + captureText + "</a></div></div></div>",
	isSelected = !1,
	hostname = document.location.hostname,
	delayInterval = null,
	haveContentScroll = !1,
	countDownInterval = null;

function hasClass(e, t) {
	return e.className.match(new RegExp("(\\s|^)" + t + "(\\s|$)"))
}

function addClass(e, t) {
	hasClass(e, t) || (e.className += " " + t)
}

function removeClass(e, t) {
	if (hasClass(e, t)) {
		var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
		e.className = e.className.replace(n, " ")
	}
}

function fixPosition(e) {
	switch (e) {
		case "www.facebook.com":
			var t = $("#pagelet_bluebar").find("[role=banner]")[0];
			null != t && removeClass(t, "_50ti");
			break;
		case "pinterest.com":
			var n = document.getElementById("CategoriesBar"),
				o = document.getElementsByClassName("Nag");
			null != o && 0 != o.length && o[0].style.setProperty("position", "absolute", "important"), null != n && n.style.setProperty("position", "absolute", "important")
	}
}

function restorePosition(e) {
	switch (e) {
		case "www.facebook.com":
			var t = $("#pagelet_bluebar").find("[role=banner]")[0];
			null != t && addClass(t, "_50ti");
			break;
		case "pinterest.com":
			var n = document.getElementById("CategoriesBar"),
				o = document.getElementsByClassName("Nag");
			null != o && 0 != o.length && (o[0].style.position = ""), null != n && (n.style.position = "")
	}
}

function copyToClipBoard(e) {
	if (e) {
		var t = document.createElement("img"),
			n = document.createElement("canvas"),
			o = n.getContext("2d");
		t.onload = function () {
			n.width = t.width, n.height = t.height, o.drawImage(t, 0, 0), n.toBlob(function (e) {
				var t = new ClipboardItem({
					"image/png": e
				});
				navigator.clipboard.write([t]).then(function () {
					showMessage(chrome.i18n.getMessage("capture_btn_copy_tip"), "success", 1e3)
				}, function (e) {})
			})
		}, t.src = e
	}
}

function showMessage(e, t, n) {
	var o = "";
	switch (t) {
		case "success":
			o = '<div class="success-message" style="box-sizing:content-box;padding: 10px 30px;height: 36px;text-align: center;background-color:rgba(0,0,0,.9);;color: white;position: fixed;left: 50%;top: 20px;transform:translateX(-50%);line-height: 36px;font-size:16px;font-weight:bold;border-radius: 4px;z-index: 9999;box-shadow: 0 3px 6px -4px rgba(0,0,0,.12),0 6px 16px 0 rgba(0,0,0,.08),0 9px 28px 8px rgba(0,0,0,.05);">\n    <span class="mes-text">' + e + "</span></div>";
			break;
		case "error":
			o = '<div class="error-message" style="width: 300px;height: 40px;text-align: center;background-color: #f5f0e5;color: rgba(238,99,99,0.8);position: fixed;left: 43%;top: 10%;line-height: 40px;border-radius: 5px;;z-index: 9999">\n    <span class="mes-text">' + e + "</span></div>"
	}
	$("body").append(o), setTimeout(function () {
		$("." + t + "-message").remove()
	}, n)
}

function setupCountdown(e) {
	if (!document.querySelector("#aws-countdown")) {
		var t = document.createElement("div");
		t.id = "aws-countdown";
		var n = t.attachShadow({
				mode: "open"
			}),
			o = document.createElement("style");
		o.innerHTML = ".countdown-wrapper{font-family:Arial;position: fixed;left:0;right:0;top:0;bottom:0;background:rgba(0,0,0,0.7);z-index:2147483647;}.center{width: 300px; height: 220px;font-size:1px; position:absolute; left:0;right:0;top:232px;margin:auto; color:white;text-align:center;}.sec{line-height:120px;font-size: 100px;}.tip{font-size:30px;margin-bottom:10px;}.cancel-btn {font-size: 12px;padding: 4px 10px;border:1px solid white;border-radius:4px;cursor: pointer;margin-top:30px;display: inline-block;line-height:14px;opacity:0.6;}.cancel-btn:hover{opacity:1;}", n.appendChild(o);
		var i = $("<div class='countdown-wrapper'><div class='center'><div class='tip'>Recording will start in</div><div class='sec'></div></div></div>"),
			s = i.find(".sec"),
			a = e;
		s.text(a), a--, countDownInterval = setInterval(function () {
			if (0 === a) return clearInterval(countDownInterval), countDownInterval = null, void removeCountdown();
			s.text(a), a--
		}, 1e3), i.appendTo(n), document.documentElement.appendChild(t)
	}
}

function removeCountdown() {
	$("#aws-countdown").remove()
}

function setupCamera() {
	if (!document.querySelector("#aws-container")) {
		(cameraContainer = document.createElement("div")).id = "aws-container";
		var e = cameraContainer.attachShadow({
				mode: "open"
			}),
			t = document.createElement("style");
		t.innerHTML = "<style>:host{} .frame-container {position: fixed !important; bottom:0; right: 0;width: 320px; height:180px;z-index:9999999;} .frame-container:hover .action{display:block; background-image: linear-gradient(rgba(0,0,0,.5), transparent);} .action{ display:none;position:absolute; height: 40px; top: 0; left:0; right:0;} .action-item{height: 30px; width: 30px; float: right; color: white; font-size: 30px;  cursor: pointer;} .action-item.close{transform: rotate(45deg);position: relative; top: 5px; right: 7px;text-align: center; line-height: 30px;}  iframe{border:none;outline: none;width: 100%;height: 100%; pointer-events:none;}</style>", e.appendChild(t);
		var n = document.createElement("style");
		n.innerHTML = ".ui-resizable { position: relative; } .ui-resizable-handle { position: absolute; font-size: 0.1px; display: block; -ms-touch-action: none; touch-action: none; } .ui-resizable-disabled .ui-resizable-handle, .ui-resizable-autohide .ui-resizable-handle { display: none; } .ui-resizable-n { cursor: n-resize; height: 7px; width: 100%; top: -5px; left: 0; } .ui-resizable-s { cursor: s-resize; height: 7px; width: 100%; bottom: -5px; left: 0; } .ui-resizable-e { cursor: e-resize; width: 7px; right: -5px; top: 0; height: 100%; } .ui-resizable-w { cursor: w-resize; width: 7px; left: -5px; top: 0; height: 100%; } .ui-resizable-se { cursor: nwse-resize; width: 12px; height: 12px; right: 1px; bottom: 1px; } .ui-resizable-sw { cursor: nesw-resize; width: 9px; height: 9px; left: -5px; bottom: -5px; } .ui-resizable-nw { cursor: nwse-resize; width: 9px; height: 9px; left: -5px; top: -5px; } .ui-resizable-ne { cursor: nesw-resize; width: 9px; height: 9px; right: -5px; top: -5px; }", e.appendChild(n);
		var o = $("<div class='frame-container'></div>"),
			i = $("<div class='action'><div class='action-item close'>+</div></div>");
		i.find(".close").on("click", function () {
			document.documentElement.removeChild(cameraContainer), sendMessage({
				action: "close-camera",
				manually: !0
			})
		}), i.appendTo(o);
		var s = document.createElement("iframe");
		s.src = chrome.runtime.getURL("/camera.html"), $.Draggable(o[0], {
			container: document
		}), o.resizable({
			handles: "ne,se,sw,nw",
			aspectRatio: !0
		}), o.append(s), o.appendTo(e), document.documentElement.appendChild(cameraContainer)
	}
}

function removeCamera() {
	document.documentElement.removeChild(cameraContainer)
}

function addCss(e, t) {
	var n = document.head,
		o = document.createElement("style");
	o.setAttribute("type", "text/css"), o.setAttribute("id", e), o.appendChild(document.createTextNode(t)), n.appendChild(o)
}

function removeCss(e) {
	document.getElementById(e) && document.getElementById(e).remove()
}

function prepareBodyForEntireCapture(e) {
	e || entireCaptureStyleChange.push(new StyleChange("addStyle", {
		id: "aws-entire-capture",
		css: "html::-webkit-scroll-bar,body::-webkit-scrollbar{width: 0 !important; height: 0 !important}"
	}));
	var t = {
		position: "relative"
	};
	"scroll" === window.getComputedStyle(document.body).overflowY && (t.overflowY = "visible"), entireCaptureStyleChange.push(new StyleChange("changeCssText", {
		element: document.documentElement,
		cssObj: {
			scrollBehavior: "auto"
		}
	})), /coursera.org/.test(window.location.host) && 0 < $(".rc-QuizAttemptHeader").length && 0 < $(".rc-QuizAttemptHeader").parents(".c-open-single-page-attempt").length || /sohu.com/.test(window.location.host) || /36kr.com/.test(window.location.host) || /quirksmode.org/.test(window.location.host) || /www.frozenright.com/.test(window.location.host) || /ranking.rakuten.co.jp/.test(window.location.host) || (entireCaptureStyleChange.push(new StyleChange("changeCssText", {
		element: document.body,
		cssObj: t
	})), haveContentScroll && entireCaptureStyleChange.push(new StyleChange("changeCssText", {
		element: document.body,
		cssObj: {
			height: "auto"
		}
	})))
}

function restoreStyleForEntireCapture() {
	removeCss("aws-entire-capture"), entireCaptureStyleChange.forEach(function (e) {
		e.undo()
	}), entireCaptureStyleChange = [], $("#aws-record-div").remove()
}

function objTocssText(e) {
	var t = "";
	for (var n in e) {
		t += n.replace(/([a-zA-Z](?=[A-Z]))/g, "$1-").toLowerCase() + ":" + e[n] + " !important;"
	}
	return t
}

function StyleChange(e, t) {
	this.type = e, this.data = t, this.exec()
}

function findScrollElement() {
	var e = [];
	if (document.scrollingElement.scrollHeight > document.scrollingElement.offsetHeight + 5) return document.scrollingElement;
	for (var t, n = document.createNodeIterator(document.scrollingElement, NodeFilter.SHOW_ELEMENT, null, !1); t = n.nextNode();)
		if (t.scrollHeight > t.offsetHeight + 5 && 50 < t.offsetHeight && 0 < t.scrollHeight && 40 < t.offsetWidth) {
			var o = window.getComputedStyle(t).overflowY;
			"hidden" !== o && "visible" !== o && e.push(t)
		}
}

function handleAbsoluteHangings() {
	if (!/www.rest-ar.com/.test(window.location.href) && !/mail.google.com/.test(window.location.href)) {
		for (var o, n = [], e = document.createNodeIterator(document.body, NodeFilter.SHOW_ELEMENT, null, !1); o = e.nextNode();) {
			var t = window.getComputedStyle(o);
			if (!t) return;
			if ("none" !== t.display && ("" !== o.innerHTML && 0 != parseInt(t.height) && "hidden" !== t.visibility)) {
				var i = t.getPropertyValue("position");
				if ("scroll" === t.overflowY && parseInt(t.width) > .5 * window.innerWidth && (o.scrollHeight > o.offsetHeight + 10 || o.offsetHeight >= window.innerHeight) && entireCaptureStyleChange.push(new StyleChange("changeCssText", {
						element: o,
						cssObj: {
							overflow: "visible"
						}
					})), !/mail.google.com/.test(window.location.host) && "absolute" === i) {
					var s = o.nodeName.toLowerCase();
					if (/superhuman.com/.test(window.location.host)) return;
					"iframe" !== s && "img" !== s && "figure" !== s && 200 < parseInt(t.height) && parseInt(t.width) > .5 * window.innerWidth && (o.scrollHeight > o.offsetHeight + 10 || o.offsetHeight >= window.innerHeight) && o.offsetHeight > $(o).parent().height() + 60 && (n.push({
						element: o,
						style: t
					}), $(o).parents().each(function (e, t) {
						"iframe" !== o.nodeName && "img" !== o.nodeName && "figure" !== s && "absolute" === window.getComputedStyle(t).position && n.push({
							element: t,
							style: window.getComputedStyle(t)
						})
					}))
				}
				var a = o.getBoundingClientRect();
				a.width > .75 * window.innerWidth && a.height > .75 * window.innerHeight && ["::before", "::after"].forEach(function (e) {
					if ("fixed" === window.getComputedStyle(o, e).postion) {
						var t = o.id ? o.id : "aws-entire-capture-" + Math.random().toString(36).substring(2, 15);
						entireCaptureStyleChange.push(new StyleChange("changeAttr", {
							element: o,
							attrName: "id",
							attrValue: t
						}));
						var n = "#" + window.CSS.escape(t) + e + " {position: absolute;}";
						entireCaptureStyleChange.push(new StyleChange("addStyle", {
							id: "fix-pseudos",
							css: n
						}))
					}
				})
			}
		}
		var r = document.body.getBoundingClientRect();
		r.left, window.scrollX, r.top, window.scrollY;
		if (0 < n.length) {
			var l = "html{" + objTocssText({
				overflow: "visible",
				overflowY: "visible"
			}) + "}body{" + objTocssText({
				overflow: "visible",
				overflowY: "visible"
			}) + "}";
			entireCaptureStyleChange.push(new StyleChange("addStyle", {
				id: "handing-abs-body",
				css: l
			}))
		}
		n.forEach(function (e) {
			var t = e.style.width,
				n = Math.max(e.element.scrollHeight, parseInt(e.style.height)) + "px",
				o = (parseFloat(e.style.left), parseFloat(e.style.top), {
					position: "relative",
					width: t,
					height: n,
					overflow: "visible"
				});
			entireCaptureStyleChange.push(new StyleChange("changeCssText", {
				element: e.element,
				cssObj: o
			}))
		})
	}
}

function disableTransitions() {
	entireCaptureStyleChange.push(new StyleChange("addStyle", {
		id: "disable-transition",
		css: "*{transition: none !important; transition-delay: 0s !important; animation-duration: 0s !important; animation-delay: 0s !important;}"
	}))
}

function specialSitesHacks() {
	if (/quora.com/.test(window.location.host)) entireCaptureStyleChange.push(new StyleChange("addStyle", {
		id: "quara-fix",
		css: ".Answer.ActionBar.sticky { position: static !important }"
	}));
	else if (/mail.google.com/.test(window.location.host)) entireCaptureStyleChange.push(new StyleChange("changeCssText", {
		element: document.documentElement,
		cssObj: {
			overflowY: "visible",
			height: "auto"
		}
	})), entireCaptureStyleChange.push(new StyleChange("changeCssText", {
		element: document.body,
		cssObj: {
			overflowY: "visible",
			height: "auto"
		}
	})), entireCaptureStyleChange.push(new StyleChange("changeCssText", {
		element: document.getElementById(":3"),
		cssObj: {
			overflowY: "visible",
			height: "auto"
		}
	}));
	else if (/arosalenzerheide.ltibooking.com/.test(window.location.host)) entireCaptureStyleChange.push(new StyleChange("changeCssText", {
		element: document.getElementsByClassName("cloudstore-top-bar")[0],
		cssObj: {
			top: "-" + window.getComputedStyle(document.getElementsByClassName("cloudstore-top-bar")[0]).height
		}
	}));
	else if (/www.rest-ar.com/.test(window.location.host)) entireCaptureStyleChange.push(new StyleChange("changeCssText", {
		element: document.getElementById("app"),
		cssObj: {
			height: document.getElementById("app").scrollHeight + "px"
		}
	}));
	else if (/designincubation.com/.test(window.location.href)) entireCaptureStyleChange.push(new StyleChange("addStyle", {
		id: "body-change",
		css: "body:before, body:after {display:none !important;}"
	}));
	else if (/www.americanas.com.br/.test(window.location.host)) entireCaptureStyleChange.push(new StyleChange("changeCssText", {
		element: document.getElementById("header-bottom"),
		cssObj: {
			position: "relative"
		}
	})), entireCaptureStyleChange.push(new StyleChange("changeCssText", {
		element: document.getElementById("header-middle"),
		cssObj: {
			position: "relative"
		}
	}));
	else if (/www.shoppingsquare.com.au/.test(window.location.host)) entireCaptureStyleChange.push(new StyleChange("changeCssText", {
		element: document.getElementsByClassName("top-menu")[0],
		cssObj: {
			position: "relative !important;"
		}
	}));
	else if (/linknovate.com/.test(window.location.host) && 0 < document.getElementsByTagName("section").length) {
		var e = document.getElementsByTagName("section")[0];
		entireCaptureStyleChange.push(new StyleChange("changeCssText", {
			element: e,
			cssObj: {
				height: "auto !important;"
			}
		}))
	}
	entireCaptureStyleChange.push(new StyleChange("addStyle", {
		id: "adwords-sticky",
		css: '[stickyclass="sticky"], ess-particle-table [role="row"], [acxscrollhost] .header-sticky-container  { transform: translate(0px, 0px) !important }'
	}))
}

function initEntireCapture() {
	!haveContentScroll && document.scrollingElement.scrollHeight <= window.innerHeight && checkScrollElement(), prepareBodyForEntireCapture(!1), handleAbsoluteHangings(), disableTransitions(), specialSitesHacks(), fixPosition(hostname), restoreFixedElements(), enableFixedPosition(!1, !0), counter = 1, getDocumentNode(), $("<div id='aws-record-div'></div>").appendTo(document.body), html = doc.documentElement, initScrollTop = document.scrollingElement.scrollTop, initScrollLeft = document.scrollingElement.scrollLeft, clientH = getClientH(), clientW = html.clientWidth, document.scrollingElement.scrollTop = 0, document.scrollingElement.scrollLeft = 0, checkScrollBar(), window.onresize = checkScrollBar, scrollBar.x || scrollBar.y ? setTimeout(sendMessage, 300, {
		action: "scroll_next_done"
	}) : sendMessage({
		action: "visible",
		menuType: "entire"
	})
}

function initSelectedCapture() {
	!haveContentScroll && document.scrollingElement.scrollHeight <= window.innerHeight && checkScrollElement();
	var e = document.getElementById("searchbar");
	null !== e && e.classList.contains("searchbar") && (e.style.display = "none", document.body.id = "");
	if (getDocumentNode(), getDocumentDimension(), !document.getElementById("awesome_screenshot_wrapper")) {
		var t = document.createElement("div");
		document.body.appendChild(t), t.style.setProperty("position", "static", "important"), t.innerHTML += wrapperHTML
	}
	wrapper = document.getElementById("awesome_screenshot_wrapper"), updateWrapper(), window.addEventListener("resize", windowResize, !1), document.body.addEventListener("keydown", selectedKeyDown, !1), wrapper.addEventListener("mousedown", wrapperMouseDown, !1), wrapper.addEventListener("touchstart", touchStartHandle, !1), /trello.com/.test(window.location.host) && window.addEventListener("click", hackTrelloIssue, !0)
}

function hackTrelloIssue(e) {
	/trello.com/.test(window.location.host) && (e.stopPropagation(), actionHandler(e))
}

function touchStartHandle(e) {
	if (e.preventDefault(), 0 < e.changedTouches.length) {
		var n, t, o = parseInt(e.changedTouches[0].pageX),
			i = parseInt(e.changedTouches[0].pageY),
			s = document.getElementById("awesome_screenshot_size"),
			a = document.getElementById("awesome_screenshot_action");

		function r(e) {
			e.preventDefault(), setStyle(wrapper, "background-color", "rgba(0,0,0,0)"), t = parseInt(e.changedTouches[0].pageX) - o, n = parseInt(e.changedTouches[0].pageY) - i, s.children[0].innerHTML = parseInt(Math.abs(t)) + " X " + parseInt(Math.abs(n)), updateCorners(o, i, t, n), updateCenter(o, i, t, n), autoScroll(e.changedTouches[0])
		}
		wrapper.addEventListener("touchmove", r, !1), wrapper.addEventListener("touchend", function e(t) {
			t.preventDefault();
			parseInt(t.changedTouches[0].pageX) - o != 0 && parseInt(t.changedTouches[0].pageY) - i != 0 || 0 != $("#awesome_screenshot_center").width() || (setStyle(wrapper, "background-color", "rgba(0,0,0,0)"), s.children[0].innerHTML = Math.abs(200) + " X " + Math.abs(200), updateCorners(o - 100, i - 100, 200, 200), updateCenter(o - 100, i - 100, 200, 200));
			wrapper.removeEventListener("touchstart", touchStartHandle, !1);
			wrapper.removeEventListener("touchmove", r, !1);
			wrapper.removeEventListener("touchend", e, !1);
			setStyle(document.getElementById("awesome_screenshot_action"), "display", "block");
			i + n > document.documentElement.scrollTop + document.documentElement.clientHeight - 46 ? setStyle(a, "bottom", "5px") : setStyle(a, "bottom", "-46px");
			setStyle(s, "display", "block");
			bindCenter()
		}, !1)
	}
}

function wrapperMouseDown(e) {
	if (0 == e.button) {
		var n, t, o = e.pageX,
			i = e.pageY,
			s = document.getElementById("awesome_screenshot_size"),
			a = document.getElementById("awesome_screenshot_action");

		function r(e) {
			setStyle(wrapper, "background-color", "rgba(0,0,0,0)"), t = e.pageX - o, n = e.pageY - i, s.children[0].innerHTML = Math.abs(t) + " X " + Math.abs(n), updateCorners(o, i, t, n), updateCenter(o, i, t, n), autoScroll(e)
		}
		wrapper.addEventListener("mousemove", r, !1), wrapper.addEventListener("mouseup", function e(t) {
			t.pageX - o != 0 && t.pageY - i != 0 || 0 != $("#awesome_screenshot_center").width() || (setStyle(wrapper, "background-color", "rgba(0,0,0,0)"), s.children[0].innerHTML = Math.abs(200) + " X " + Math.abs(200), updateCorners(o - 100, i - 100, 200, 200), updateCenter(o - 100, i - 100, 200, 200));
			wrapper.removeEventListener("mousedown", wrapperMouseDown, !1);
			wrapper.removeEventListener("mousemove", r, !1);
			wrapper.removeEventListener("mouseup", e, !1);
			setStyle(document.getElementById("awesome_screenshot_action"), "display", "block");
			i + n > document.documentElement.scrollTop + document.documentElement.clientHeight - 46 ? setStyle(a, "bottom", "5px") : setStyle(a, "bottom", "-46px");
			setStyle(s, "display", "block");
			bindCenter()
		}, !1)
	}
}

function selectedKeyDown(e) {
	27 == e.keyCode && removeSelected()
}

function windowResize(e) {
	updateWrapper(), getDocumentDimension();
	var t = document.getElementById("awesome_screenshot_center"),
		n = getStyle(t, "width"),
		o = getStyle(t, "height");
	n * o && updateCorners(getStyle(t, "left"), getStyle(t, "top"), n, o);
	dragresize.maxLeft = docW, dragresize.maxTop = docH
}

function bindCenter() {
	var e = document.getElementById("awesome_screenshot_center");
	dragresize = new DragResize("dragresize", {
		maxLeft: docW,
		maxTop: docH
	});
	var a = document.getElementById("awesome_screenshot_size"),
		r = document.getElementById("awesome_screenshot_action");
	dragresize.isElement = function (e) {
		if (e.className && -1 < e.className.indexOf("drsElement")) return !0
	}, dragresize.isHandle = function (e) {
		if (e.className && -1 < e.className.indexOf("drsMoveHandle")) return !0
	}, dragresize.ondragmove = function (e, t) {
		var n = dragresize.elmX,
			o = dragresize.elmY,
			i = dragresize.elmW,
			s = dragresize.elmH;
		a.children[0].innerHTML = parseInt(Math.abs(i)) + " X " + parseInt(Math.abs(s)), setStyle(a, "top", o < 30 ? "5px" : "-30px"), setStyle(r, "right", i < 190 ? -(270 - i) / 2 + "px" : "0px"), o + s > document.documentElement.scrollTop + document.documentElement.clientHeight - 46 ? setStyle(r, "bottom", "5px") : setStyle(r, "bottom", "-46px"), updateCorners(n, o, i, s), updateCenter(n, o, i, s), autoScroll(t)
	}, dragresize.apply(wrapper), dragresize.select(e), bindSelectAction()
}

function bindSelectAction() {
	document.getElementById("awesome_screenshot_action").addEventListener("click", actionHandler, !1), document.getElementById("awesome_screenshot_action").addEventListener("touchend", function (e) {
		e.preventDefault(), actionHandler(e.changedTouches[0])
	}, !1)
}

function actionHandler(e) {
	switch (e.target.id) {
		case "awesome_screenshot_capture":
		case "awesome_screenshot_capture_icon":
			captureSelected();
			break;
		case "awesome_screenshot_cancel":
		case "awesome_screenshot_cancel_icon":
			removeSelected();
			break;
		case "awesome_screenshot_copy":
		case "awesome_screenshot_copy_icon":
			captureSelected(!0)
	}
}

function getScrollbarWidth() {
	var e = document.createElement("p");
	e.style.width = "100%", e.style.height = "200px";
	var t = document.createElement("div");
	t.style.position = "absolute", t.style.top = "0px", t.style.left = "0px", t.style.visibility = "hidden", t.style.width = "200px", t.style.height = "150px", t.style.overflow = "hidden", t.appendChild(e), document.body.appendChild(t);
	var n = e.offsetWidth;
	t.style.overflow = "scroll";
	var o = e.offsetWidth;
	return n == o && (o = t.clientWidth), document.body.removeChild(t), n - o
}

function captureSelected(e) {
	var t = document.getElementById("awesome_screenshot_size"),
		n = document.getElementById("awesome_screenshot_center");
	scrollBarWidth = getScrollbarWidth(), t && setStyle(t, "display", "none"), fixPosition(hostname), dragresize.deselect(n), dragresize.enabled = !1, setStyle(n, "outline", "none"), counter = 1, html = document.documentElement, initScrollTop = document.scrollingElement.scrollTop, initScrollLeft = document.scrollingElement.scrollLeft, clientH = getClientH(), clientW = html.clientWidth, isSelected = !0;
	var o = dragresize.elmX,
		i = dragresize.elmY,
		s = dragresize.elmW,
		a = dragresize.elmH;
	clientH < a && (prepareBodyForEntireCapture(!0), enableFixedPosition(!1, !1));
	var r = o - document.scrollingElement.scrollLeft,
		l = i - document.scrollingElement.scrollTop;
	if (i < initScrollTop && (r <= 0 && (document.scrollingElement.scrollLeft = o), l <= 0 ? (document.scrollingElement.scrollTop = i, l = 0) : (wrapper.style.paddingTop = l + "px", document.scrollingElement.scrollTop += l)), getDocumentDimension(), restorePosition(hostname), $("#awesome_screenshot_action").hide(), i < initScrollTop) {
		if (s <= clientW && a <= clientH) return void setTimeout(sendMessage, 300, {
			action: "visible",
			counter: counter,
			ratio: a % clientH / clientH,
			scrollBar: {
				x: !1,
				y: !1
			},
			centerW: s * window.devicePixelRatio,
			centerH: a * window.devicePixelRatio,
			data: {
				x: r * window.devicePixelRatio,
				y: l * window.devicePixelRatio,
				w: s * window.devicePixelRatio,
				h: a * window.devicePixelRatio
			},
			menuType: "selected",
			isCopyAction: e
		});
		setTimeout(sendMessage, 300, {
			action: "scroll_next_done",
			isCopyAction: e
		})
	} else removeSelected(), setTimeout(function () {
		sendMessage({
			action: "capture_selected_done",
			data: {
				x: r * window.devicePixelRatio,
				y: l * window.devicePixelRatio,
				w: s * window.devicePixelRatio,
				h: a * window.devicePixelRatio
			},
			isCopyAction: 1 == e
		})
	}, 100)
}

function removeSelected() {
	window.removeEventListener("resize", windowResize), window.removeEventListener("click", hackTrelloIssue, !0), document.body.removeEventListener("keydown", selectedKeyDown, !1), wrapper.parentNode && wrapper.parentNode.removeChild(wrapper), isSelected = !1
}

function autoScroll(e) {
	var t = e.clientY,
		n = e.clientX,
		o = window.innerHeight - t,
		i = window.innerWidth - n;
	t < 20 && (document.scrollingElement.scrollTop -= 25), n < 40 && (document.scrollingElement.scrollLeft -= 25), o < 40 && (document.scrollingElement.scrollTop += 60 - o), i < 40 && (document.scrollingElement.scrollLeft += 60 - i)
}

function updateCorners(e, t, n, o) {
	var i = 0 <= n ? e + n : e,
		s = 0 <= o ? t : t + o,
		a = 0 <= n ? docW - e - n : docW - e,
		r = 0 <= o ? t + o : t,
		l = 0 <= n ? docW - e : docW - e - n,
		c = docW - l,
		d = docH - s,
		p = document.getElementById("awesome_screenshot_top"),
		m = document.getElementById("awesome_screenshot_right"),
		u = document.getElementById("awesome_screenshot_bottom"),
		h = document.getElementById("awesome_screenshot_left");
	setStyle(p, "width", i + "px"), setStyle(p, "height", s + "px"), setStyle(m, "width", a + "px"), setStyle(m, "height", r + "px"), setStyle(u, "width", l + "px"), setStyle(u, "top", r + "px"), setStyle(h, "width", c + "px"), setStyle(h, "height", d + "px")
}

function updateCenter(e, t, n, o) {
	var i = 0 <= n ? e : e + n,
		s = 0 <= o ? t : t + o,
		a = document.getElementById("awesome_screenshot_center");
	setStyle(a, "width", Math.abs(n) + "px"), setStyle(a, "height", Math.abs(o) + "px"), setStyle(a, "top", s + "px"), setStyle(a, "left", i + "px")
}

function updateWrapper() {
	setStyle(wrapper, "display", "none"), setStyle(wrapper, "width", document.scrollingElement.scrollWidth + "px"), setStyle(wrapper, "height", document.scrollingElement.scrollHeight + "px"), setStyle(wrapper, "display", "block")
}

function setStyle(e, t, n) {
	e.style.setProperty(t, n)
}

function getStyle(e, t) {
	return parseInt(e.style.getPropertyValue(t))
}

function scrollNext() {
	var e = Math.ceil(document.scrollingElement.scrollTop),
		t = Math.ceil(document.scrollingElement.scrollLeft);
	if (isSelected) {
		var n = document.getElementById("awesome_screenshot_center"),
			o = getStyle(n, "left"),
			i = getStyle(n, "top"),
			s = getStyle(n, "width"),
			a = getStyle(n, "height");
		if (s <= clientW && clientH < a) {
			if (i + a == e + clientH || i + a - 1 == e + clientH || i + a < e + clientH) return void sendMessage({
				action: "entire_capture_done",
				counter: counter,
				ratio: {
					x: 0,
					y: a % clientH / clientH
				},
				scrollBar: {
					x: !1,
					y: !0,
					realX: window.innerHeight > html.clientHeight
				},
				data: {
					x: o * window.devicePixelRatio,
					y: i * window.devicePixelRatio
				},
				centerW: s * window.devicePixelRatio,
				centerH: a * window.devicePixelRatio
			});
			i + a < e + 2 * clientH ? document.scrollingElement.scrollTop = i + a - clientH : e + 2 * clientH < i + a && (document.scrollingElement.scrollTop = e + clientH)
		}
		if (clientW < s && a <= clientH) {
			if (o + s == t + clientW) return void sendMessage({
				action: "entire_capture_done",
				counter: counter,
				ratio: {
					x: s % clientW / clientW,
					y: 0
				},
				scrollBar: {
					x: !0,
					y: !1,
					realY: window.innerWidth > html.clientWidth
				},
				centerW: s,
				centerH: a
			});
			o + s < t + 2 * clientW ? document.scrollingElement.scrollLeft = o + s - clientW : t + 2 * clientW < o + s && (document.scrollingElement.scrollLeft = t + clientW)
		}
		if (clientW < s && clientH < a) {
			if (i + a == e + clientH) return o + s == t + clientW ? void sendMessage({
				action: "entire_capture_done",
				counter: counter,
				ratio: {
					x: s % clientW / clientW,
					y: a % clientH / clientH
				},
				scrollBar: {
					x: !0,
					y: !0
				},
				centerW: s,
				centerH: a
			}) : (o + s < t + 2 * clientW ? document.scrollingElement.scrollLeft = o + s - clientW : t + 2 * clientW < o + s && (document.scrollingElement.scrollLeft = t + clientW), counter++, document.scrollingElement.scrollTop = i, void setTimeout(sendMessage, 300, {
				action: "scroll_next_done"
			}));
			i + a < e + 2 * clientH ? document.scrollingElement.scrollTop = i + a - clientH : e + 2 * clientH < i + a && (document.scrollingElement.scrollTop = e + clientH)
		}
	} else {
		if (sendMessage({
				action: "entireCaptureProgress",
				percentage: Math.round(document.scrollingElement.scrollTop / (document.scrollingElement.scrollHeight - clientH) * 100) + "%",
				scrollNum: entireScrollNumber
			}), document.scrollingElement.scrollTop = e + clientH, entireScrollNumber++, Math.ceil(document.scrollingElement.scrollTop) == e || entireStopped) {
			t = document.scrollingElement.scrollLeft;
			if (document.scrollingElement.scrollLeft = t + clientW, scrollBar.x && document.scrollingElement.scrollLeft != t) return counter++, document.scrollingElement.scrollTop = 0, void setTimeout(sendMessage, 300, {
				action: "scroll_next_done"
			});
			var r = {};
			return r.y = e % clientH / clientH, r.x = t % clientW / clientW, document.scrollingElement.scrollTop = initScrollTop, document.scrollingElement.scrollLeft = initScrollLeft, restoreFixedElements(), sendMessage({
				action: "entire_capture_done",
				counter: entireStopped ? counter - 1 : counter,
				ratio: entireStopped ? {
					x: 1,
					y: 1
				} : r,
				scrollBar: scrollBar
			}), entireScrollNumber = 0, void(entireStopped = !1)
		}
	}
	setTimeout(function () {
		enableFixedPosition(!1, !1), setTimeout(function () {
			sendMessage({
				action: "scroll_next_done"
			})
		}, 150)
	}, 150)
}

function sendMessage(e, t) {
	chrome.runtime.sendMessage(e, t)
}

function bindShortcuts(e) {
	var t = document.body;
	if (t.removeEventListener("keydown", keydownHandler, !1), t.addEventListener("keydown", keydownHandler, !1), msObj = e.msObj)
		for (var n in msObj = JSON.parse(msObj), msObj) menu[n].enable = msObj[n].enable, menu[n].key = msObj[n].key
}

function keydownHandler(e) {
	switch (String.fromCharCode(e.which)) {
		case menu.visible.key:
			1 == menu.visible.enable && e.shiftKey && e.ctrlKey && sendMessage({
				action: "visible"
			});
			break;
		case menu.selected.key:
			1 == menu.selected.enable && e.shiftKey && e.ctrlKey && sendMessage({
				action: "selected"
			});
			break;
		case menu.entire.key:
			1 == menu.entire.enable && e.shiftKey && e.ctrlKey && sendMessage({
				action: "entire"
			})
	}
}

function checkFixedChangeRealTop(e) {
	var t = document.defaultView.getComputedStyle(e, ""),
		n = parseInt(t.getPropertyValue("top"));
	return n ? n - getPositionParent(e) : 0
}

function getPositionParent(e) {
	var t = e.parentNode;
	if (t === document.body) return 0;
	var n = document.defaultView.getComputedStyle(t, ""),
		o = n.getPropertyValue("position");
	if (o && 0 < o.length) {
		parseInt(n.getPropertyValue("margin-top")), parseInt(n.getPropertyValue("top"));
		return $(t).offset().top
	}
	getPositionParent(t)
}

function dealMicformIssue(e) {
	entireCaptureStyleChange.push(new StyleChange("changeCssText", {
		element: e,
		cssObj: {
			position: "static"
		}
	})), updateParentsNodeHeight(e)
}

function updateParentsNodeHeight(e) {
	e !== document.body ? updateParentsNodeHeight(e.parentNode) : entireCaptureStyleChange.push(new StyleChange("changeCssText", {
		element: e,
		cssObj: {
			height: "auto"
		}
	}))
}
// Copyright (c) 2010 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// http://code.google.com/p/chrome-screen-capture/
function enableFixedPosition(e, t) {
	if (e)
		for (var n = 0, o = fixedElements.length; n < o; ++n) {
			var i = fixedElements[n];
			i.element.style.cssText = i.cssText
		} else
			for (var s, a = document.createNodeIterator(document.documentElement, NodeFilter.SHOW_ELEMENT, null, !1); s = a.nextNode();) {
				var r = document.defaultView.getComputedStyle(s, "");
				if (!r) return;
				if (!(/www.facebook.com/.test(window.location.host) && (/u_fetchstream_/.test(s.id) || /u_0_1/.test(s.id)) && 0 < $(s).parents("#pagelet_group_mall").length)) {
					var l = r.getPropertyValue("position"),
						c = r.getPropertyValue("visibility"),
						d = r.getPropertyValue("display");
					if ("fixed" !== l || !/forms.microsoft.com/.test(window.location.host) || "top-view-container" !== s.className && "design-body-container" !== s.className || "none" == d || "hidden" == c) {
						if ((!t || "fixed" != l || 0 != parseInt(r.getPropertyValue("top")) || /coursera.org/.test(window.location.host)) && !("fixed" == l && /cognixia.com/.test(window.location.host) && parseInt(r.getPropertyValue("bottom")) < 0 || ("fixed" == l || "sticky" === l) && parseInt(r.getPropertyValue("right")) < 0 && s.parentNode == document.body)) {
							if (/coursera.org/.test(window.location.host) && "fixed" === l) {
								if ("_8f0ciyt rc-ItemNavigation" === s.className && !$(".rc-TunnelVisionWrapper")[0] && haveContentScroll) {
									entireCaptureStyleChange.push(new StyleChange("changeCssText", {
										element: s,
										cssObj: {
											position: "static"
										}
									}));
									continue
								}
								if ("_oafuo3g" === s.className) {
									0 < $(".rc-TunnelVisionWrapper").length && (0 < $("#rendered-content").length && entireCaptureStyleChange.push(new StyleChange("changeCssText", {
										element: $("#rendered-content")[0],
										cssObj: {
											display: "none"
										}
									})), entireCaptureStyleChange.push(new StyleChange("changeCssText", {
										element: s,
										cssObj: {
											position: "relative"
										}
									})));
									continue
								}
							}
							if (("fixed" == l || "sticky" === l) && "none" != d && "hidden" != c && (s.clientWidth < .8 * window.innerWidth || s.clientHeight < .8 * window.innerHeight || s.scrollHeight > window.innerHeight)) {
								if (fixedElements.push({
										element: s,
										cssText: s.style.cssText
									}), /twitter.com/.test(window.location.host) && "css-1dbjc4n r-gtdqiz r-1hycxz" === s.className ? s.style.cssText = s.style.cssText + "position:static !important" : s.style.cssText = s.style.cssText + "position:" + ("fixed" === l ? "absolute" : "relative") + " !important", /twitter.com/.test(window.location.host) && "css-1dbjc4n r-aqfbo4 r-1pi2tsx r-1xcajam r-ipm5af" === s.className && (s.style.cssText = s.style.cssText + "height:auto"), /cazoo.co.uk/.test(window.location.host)) {
									var p = checkFixedChangeRealTop(s);
									isNaN(p) || (s.style.cssText = s.style.cssText + "top:" + p + "px")
								}
								/zulily.com/.test(window.location.host) && haveContentScroll && s.scrollHeight > window.innerHeight && (s.style.cssText = s.style.cssText + "height:auto"), /toyota.jp/.test(window.location.host) && "chatplusview" === s.id && (s.style.cssText = s.style.cssText + "bottom:0px"), "rc-QuizAttemptHeader" === s.className && 0 < $(s).parents(".c-open-single-page-attempt").length && /coursera.org/.test(window.location.host) && entireCaptureStyleChange.push(new StyleChange("changeCssText", {
									element: $(s).parents(".c-open-single-page-attempt")[0],
									cssObj: {
										position: "static"
									}
								}))
							}
						}
					} else dealMicformIssue(s)
				}
			}
}

function restoreFixedElements() {
	if (fixedElements) {
		for (var e = 0, t = fixedElements.length; e < t; e++) {
			var n = fixedElements[e];
			n.element.style.cssText = n.cssText
		}
		fixedElements = []
	}
}

function checkScrollBar() {
	scrollBar.x = window.innerHeight > getClientH(), scrollBar.y = document.scrollingElement.scrollHeight > window.innerHeight
}

function checkScrollElement() {
	for (var e, t = document.createNodeIterator(document.body, NodeFilter.SHOW_ELEMENT, null, !1), n = .6 * document.body.clientWidth; e = t.nextNode();)
		if (e.scrollHeight > window.innerHeight && e.clientWidth > n) {
			haveContentScroll = !0;
			break
		}
}

function myReplace(e, t) {
	var n = e.replace(/[\.\$\^\{\[\(\|\)\*\+\?\\]/gi, "\\$1"),
		o = new RegExp("(" + n + ")", "ig");
	return t.replace(o, '<span style="font-weight:bold">$1</span>')
}

function getDocumentNode() {
	doc = window.document, window.location.href.match(/https?:\/\/mail.google.com/i)
}

function getDocumentDimension() {
	docH = document.scrollingElement.scrollHeight, docW = document.scrollingElement.scrollWidth
}

function getClientH() {
	return "CSS1Compat" === document.compatMode ? html.clientHeight : document.body.clientHeight
}
chrome.runtime.onMessage.addListener(function (e, t, n) {
	switch (e.action) {
		case "update_shortcuts":
			bindShortcuts(e);
			break;
		case "init_entire_capture":
			initEntireCapture();
			break;
		case "init_selected_capture":
			initSelectedCapture();
			break;
		case "scroll_next":
			scrollNext();
			break;
		case "destroy_selected":
			restoreFixedElements(), restoreStyleForEntireCapture(), removeSelected();
			break;
		case "restorebar":
			restorePosition(hostname), restoreFixedElements(), restoreStyleForEntireCapture();
			var o = document.getElementById("searchbar");
			null != o && (o.style.display = "block", document.body.id = "searchbarshow");
			break;
		case "finishAutoSave":
			var i = "The screenshot has been saved in " + e.path + ".";
			notification.show("success", i);
			break;
		case "tabupdate":
			break;
		case "stop-entire-capture":
			entireStopped = !0;
			break;
		case "delay-capture":
			null !== delayInterval && (clearInterval(delayInterval), delayInterval = null, $("#awe_delay_div").remove());
			var s = $('<div id="awe_delay_div"><span></span><div id="awe_delay_cancel">Cancel</div></div>').appendTo("body").find("span").text(e.sec).end();
			s.find("#awe_delay_cancel").on("click", function () {
				clearInterval(delayInterval), delayInterval = null, s.remove()
			}), $.Draggable(s[0], {});
			var a = e.sec ? e.sec - 1 : 2;
			delayInterval = setInterval(function () {
				if (a <= 0) return clearInterval(delayInterval), delayInterval = null, s.remove(), void setTimeout(function () {
					sendMessage({
						action: "visible"
					})
				}, 100);
				$("#awe_delay_div").find("span").text(a), a--
			}, 1e3);
			break;
		case "setup-camera":
			setupCamera();
			break;
		case "stop-camera":
			removeCamera();
			break;
		case "copytoclipboard":
			copyToClipBoard(e.obj);
			break;
		case "insertRecordDiv":
			$("<div id='aws-record-div'></div>").appendTo(document.body);
			break;
		case "removeRecordDiv":
			$("#aws-record-div").remove();
			break;
		case "startCountDown":
			setupCountdown(e.countdown);
			break;
		case "stop-countdown":
			clearInterval(countDownInterval), countDownInterval = null, removeCountdown()
	}
}), StyleChange.prototype = {
	constructor: StyleChange,
	exec: function () {
		try {
			"changeCssText" === this.type ? (this.cssTextBefore = this.data.element.style.cssText, this.data.element.style.cssText = this.cssTextBefore + ";" + objTocssText(this.data.cssObj)) : "addStyle" === this.type ? addCss(this.data.id, this.data.css) : "changeAttr" === this.type && (this.attrValueBefore = this.data.element[this.data.attrName], this.data.element[this.data.attrName] = this.data.attrValue)
		} catch (e) {}
	},
	undo: function () {
		try {
			"changeCssText" === this.type ? this.data.element.style.cssText = this.cssTextBefore : "addStyle" === this.type ? removeCss(this.data.id) : "changeAttr" === this.type && (this.data.element[this.data.attrName] = this.attrValueBefore)
		} catch (e) {}
	}
}, sendMessage({
	action: "check_shortcuts"
}), window.addEventListener("load", function () {
	sendMessage({
		action: "enable_selected"
	})
}, !1);
var notification = {
	notifyBox: null,
	init: function () {
		this.create()
	},
	create: function () {
		var e = this;
		this.notifyBox = document.createElement("div"), this.notifyBox.id = "asNotifyBox", this.notifyBox.innerHTML = '<img id="as-nitofyIcon"><span id="as-notifyMessage"></span><div id="as-notifyClose"></div>', document.body.appendChild(this.notifyBox), document.getElementById("as-notifyClose").addEventListener("click", function () {
			e.hide()
		})
	},
	show: function (e, t) {
		var n = this;
		(document.getElementById("asNotifyBox") || this.init(), "success" == e) && (document.getElementById("as-nitofyIcon").src = chrome.runtime.getURL("") + "images/success.gif");
		document.getElementById("as-notifyMessage").innerText = t, this.notifyBox.style.display = "block", setTimeout(function () {
			n.notifyBox.style.display = "none"
		}, 3e3)
	},
	hide: function () {
		this.notifyBox.style.display = "none"
	}
};

function addSitepoint() {
	var e = !1,
		t = document.createElement("script");
	t.type = "text/javascript", t.src = "//qp.rhlp.co/pads/js/" + encodeURIComponent("awesomescreenshot"), t.async = !0, t.onload = t.onreadystatechange = function () {
		e || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (e = !0, t.parentNode.removeChild(t))
	}, document.body.appendChild(t)
}
if (/(.*).awesomescreenshot.com/.test(document.location.hostname)) {
	var version = chrome.runtime.getManifest().version;
	$("<div id='aws-chrome-installed' style='display:none !important' data-version='" + version + "'></div>").appendTo(document.body)
}