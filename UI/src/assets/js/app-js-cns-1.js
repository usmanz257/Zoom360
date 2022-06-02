var exports = function(e) {
        function t(t) {
            for (var a, l, s = t[0], o = t[1], c = t[2], d = 0, m = []; d < s.length; d++) l = s[d], Object.prototype.hasOwnProperty.call(r, l) && r[l] && m.push(r[l][0]), r[l] = 0;
            for (a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
            for (u && u(t); m.length;) m.shift()();
            return i.push.apply(i, c || []), n()
        }

        function n() {
            for (var e, t = 0; t < i.length; t++) {
                for (var n = i[t], a = !0, s = 1; s < n.length; s++) {
                    var o = n[s];
                    0 !== r[o] && (a = !1)
                }
                a && (i.splice(t--, 1), e = l(l.s = n[0]))
            }
            return e
        }
        var a = {},
            r = {
                0: 0
            },
            i = [];

        function l(t) {
            if (a[t]) return a[t].exports;
            var n = a[t] = {
                i: t,
                l: !1,
                exports: {}
            };
            return e[t].call(n.exports, n, n.exports, l), n.l = !0, n.exports
        }
        l.m = e, l.c = a, l.d = function(e, t, n) {
            l.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }, l.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, l.t = function(e, t) {
            if (1 & t && (e = l(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (l.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var a in e) l.d(n, a, function(t) {
                    return e[t]
                }.bind(null, a));
            return n
        }, l.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return l.d(t, "a", t), t
        }, l.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, l.p = "/static/bundles/";
        var s = window.webpackJsonpexports = window.webpackJsonpexports || [],
            o = s.push.bind(s);
        s.push = t, s = s.slice();
        for (var c = 0; c < s.length; c++) t(s[c]);
        var u = o;
        return i.push([796, 3]), n()
    }({
            1026: function(e, t, n) {},
            1027: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    },
                    r = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = a(n(0)),
                    l = r(n(4)),
                    s = n(15),
                    o = n(12),
                    c = n(63),
                    u = n(56),
                    d = r(n(44)),
                    m = ({
                        column: e,
                        onChange: t
                    }) => i.createElement(o.Popover, {
                        trigger: i.createElement(o.Button.Secondary, {
                            size: "small"
                        }, e.confirmed_type && i.createElement(o.Icon, {
                            name: "lock"
                        }), " ", e.datatype, " ", i.createElement(o.Icon, {
                            name: "chevron-down"
                        }))
                    }, i.createElement(o.Listbox, null, i.createElement(o.Listbox.Item, {
                        selected: !e.confirmed_type,
                        onClick: () => t(e.datatype, !0)
                    }, "Auto"), i.createElement(o.Listbox.Item, {
                        disabled: !0
                    }, "Override Detected Type"), c.DATATYPE_CHOICES.map(n => i.createElement(o.Listbox.Item, {
                        key: n,
                        selected: e.confirmed_type && e.datatype === n,
                        onClick: () => t(n, !1)
                    }, n))));
                class p extends i.PureComponent {
                    constructor() {
                        super(...arguments), this.state = {
                            selected: this.props.selected,
                            columns: []
                        }, this.loadData = e => {
                            const t = `/api/extracts/${e.extractId}/columns/`;
                            d.default.get(t).then(({
                                data: e
                            }) => {
                                this.setState({
                                    columns: e.results
                                })
                            })
                        }
                    }
                    componentDidMount() {
                        this.loadData(this.props)
                    }
                    handleDatatypeChange(e, t, n) {
                        d.default.patch(`${c.API_URLS.column_mapping}${e.id}/`, {
                            unlock_type: n,
                            datatype: t
                        }).then(({
                            data: e
                        }) => this.setState(t => {
                            const n = t.columns.findIndex(t => t.id === e.id);
                            return {
                                columns: [...t.columns.slice(0, n), e, ...t.columns.slice(n + 1)]
                            }
                        }))
                    }
                    toggleSelected(e) {
                        this.setState(t => -1 !== t.selected.indexOf(e) ? {
                            selected: t.selected.filter(t => t !== e)
                        } : {
                            selected: t.selected.concat(e)
                        })
                    }
                    reloadSelected() {
                        const e = this.state.selected.map(e => "c=" + encodeURIComponent(e));
                        window.location.href = "?" + e.join("&")
                    }
                    render() {
                        const {
                            selected: e,
                            columns: t
                        } = this.state;
                        return t ? i.createElement("div", {
                            className: "col-md-4"
                        }, i.createElement("h4", null, "Columns", i.createElement("div", {
                            className: "pull-right"
                        }, i.createElement("a", {
                            className: l.default("btn", "btn-default", "btn-xs", "btn-more", {
                                disabled: 0 === e.length || s.isEqual(e.sort(), this.props.selected.sort())
                            }),
                            onClick: () => this.reloadSelected()
                        }, i.createElement(o.Icon, {
                            name: "refresh",
                            size: "small"
                        }), " Reload Selection"))), i.createElement(o.Box, {
                            marginBottom: "medium",
                            overflow: "scroll",
                            maxHeight: "75vh"
                        }, t.map(e => {
                            const t = -1 !== this.state.selected.indexOf(e.name);
                            return i.createElement(i.Fragment, null, i.createElement(o.Box, {
                                key: e.id,
                                paddingX: "small",
                                paddingY: "x-small",
                                backgroundColor: t ? "brand.5" : "white"
                            }, i.createElement(o.StartEnd, {
                                alignItems: "center"
                            }, i.createElement(o.Text, {
                                color: t ? "white" : "gray.9",
                                onClick: () => this.toggleSelected(e.name)
                            }, e.name), i.createElement(m, {
                                column: e,
                                onChange: (t, n) => this.handleDatatypeChange(e, t, n)
                            }))), i.createElement(o.Separator, {
                                color: "gray.3"
                            }))
                        }))) : null
                    }
                }
                t.ColumnDetails = p, t.renderColumnDetails = () => {
                    const e = document.getElementById("column-details-container");
                    e && window.columnDetailsProps && u.render({
                        component: i.createElement(p, Object.assign({}, window.columnDetailsProps)),
                        container: e
                    })
                }
            },
            110: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.defineCustomElement = (e, t) => {
                    customElements.get(e) || customElements.define(e, t)
                }
            },
            1112: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(256),
                    l = n(56),
                    s = n(1493),
                    o = (e = "[]") => JSON.parse(e),
                    c = e => o(e).filter(([e]) => null !== e && "#name" !== e);
                t.renderTransformationEditor = () => {
                    var e;
                    const t = document.getElementById("transformation-editor"),
                        n = window.transformationEditorProps;
                    if (t && n) {
                        let a = {};
                        const u = c(null === (e = n.ghostInput) || void 0 === e ? void 0 : e.value),
                            d = r.createElement(s.TransformationEditor, Object.assign({
                                onLoadSchema: e => {
                                    a = e
                                },
                                instructions: u
                            }, n)),
                            m = document.getElementById("transformerconfig_form");
                        m && (m.removeAttribute("novalidate"), m.addEventListener("submit", e => {
                            var s;
                            const u = o(null === (s = n.ghostInput) || void 0 === s ? void 0 : s.value),
                                m = u.map(([e, t], n) => [n, i.getFormErrors(t, a[e])]);
                            m.some(([, e]) => 0 !== Object.keys(e).length) ? (e.preventDefault(), l.render({
                                component: r.cloneElement(d, {
                                    instructionsErrors: m,
                                    instructions: u
                                }),
                                container: t
                            })) : n.ghostInput && (n.ghostInput.value = JSON.stringify(c(n.ghostInput.value)))
                        })), l.render({
                            component: d,
                            container: t
                        })
                    }
                }
            },
            144: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const a = n(63);
                t.updateRuleText = (e, t, n = !1) => {
                    if ("delimiter" === e.type) return e;
                    const {
                        value_list: a
                    } = e;
                    let r = "",
                        i = "";
                    if (t && (r = `Column ${t} `, i = r), a && a.length > 0) {
                        if (r += "can only contain", i += "does not contain", n) {
                            const e = "one of the following values: " + a.join(", ");
                            r = `${r} ${e}`, i = `${i} ${e}`
                        }
                    } else {
                        const e = "can contain any value that is not a delimiter" + (a ? " and is optional" : "");
                        r += e, i += e
                    }
                    return Object.assign(Object.assign({}, e), {
                        text: r,
                        text_alternative: i
                    })
                }, t.checkSampleCount = ({
                    samples: e,
                    warningThreshold: t,
                    errorThreshold: n
                }) => e.length < t ? e.length < n ? "error" : "warning" : "ok", t.getSmartNamingUrl = e => `${a.API_URLS.datastream}${e}/smart-naming-convention/`, t.getDataStreamUrl = (e, t, n) => `/${e}/${t}-${n}/`, t.splitMulti = (e, n) => {
                    if (0 === n.length) return [e];
                    const a = e.split(n[0]),
                        r = n.slice(1),
                        i = [];
                    for (const e of a) i.push(...t.splitMulti(e, r));
                    return i
                }
            },
            1493: function(e, t, n) {
                "use strict";
                var a = this && this.__awaiter || function(e, t, n, a) {
                        return new(n || (n = Promise))((function(r, i) {
                            function l(e) {
                                try {
                                    o(a.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function s(e) {
                                try {
                                    o(a.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function o(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(l, s)
                            }
                            o((a = a.apply(e, t || [])).next())
                        }))
                    },
                    r = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    },
                    i = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const l = r(n(0)),
                    s = i(n(4)),
                    o = i(n(1494)),
                    c = n(228),
                    u = n(12);
                n(1500), n(560);
                const d = i(n(44)),
                    m = n(63),
                    p = n(96),
                    g = n(1502),
                    h = n(1503),
                    f = n(1525),
                    v = n(568);
                class y extends l.Component {
                    constructor() {
                        super(...arguments), this.state = {
                            loading: !0,
                            schema: {},
                            instructions: []
                        }, this.onSortEnd = ({
                            oldIndex: e,
                            newIndex: t
                        }) => {
                            this.setState(n => ({
                                instructions: c.arrayMove(n.instructions, e, t)
                            }))
                        }, this.selectRefs = [], this.setSelectRef = e => t => {
                            this.selectRefs[e] = t
                        }, this.onAddInstruction = () => {
                            const e = o.default.v4();
                            this.setState(t => ({
                                instructions: v.add(t.instructions, {
                                    id: e,
                                    name: null,
                                    comment: null,
                                    enabled: !0,
                                    properties: {}
                                })
                            }), () => {
                                const t = this.selectRefs[e];
                                t && t.select.focus()
                            })
                        }, this.onRemoveInstruction = e => {
                            this.setState(t => ({
                                instructions: v.remove(t.instructions, t.instructions.findIndex(({
                                    id: t
                                }) => t === e))
                            }))
                        }, this.onChange = e => {
                            const t = this.state.instructions.findIndex(({
                                    id: t
                                }) => t === e.id),
                                n = this.state.instructions[t];
                            this.setState(a => {
                                if (e.name && n.name !== e.name) {
                                    const n = a.schema[e.name];
                                    return {
                                        instructions: v.replace(a.instructions, t, Object.assign(Object.assign({}, e), {
                                            properties: Object.keys(n.properties).reduce((e, t) => {
                                                const a = n.properties[t];
                                                return "default" in a ? Object.assign(Object.assign({}, e), {
                                                    [t]: a.default
                                                }) : e
                                            }, {})
                                        }))
                                    }
                                }
                                return {
                                    instructions: v.replace(a.instructions, t, Object.assign(Object.assign({}, e), {
                                        properties: Object.assign(Object.assign({}, n.properties), e.properties)
                                    }))
                                }
                            })
                        }, this.onSourceEditorChange = e => {
                            this.setState({
                                instructions: e.map(e => Object.assign({
                                    id: o.default.v4()
                                }, e))
                            })
                        }, this.getInitialValue = () => v.parseInstructions(this.props.instructions)
                    }
                    componentDidMount() {
                        return a(this, void 0, void 0, (function*() {
                            const {
                                data: e
                            } = yield d.default.get(m.API_URLS.transformation_schema);
                            this.props.onLoadSchema(e), this.setState({
                                loading: !1,
                                schema: e,
                                instructions: this.getInitialValue().map(e => Object.assign({
                                    id: o.default.v4()
                                }, e))
                            })
                        }))
                    }
                    componentDidUpdate() {
                        this.props.ghostInput.value = v.getFormattedCode(this.state.instructions)
                    }
                    render() {
                        return this.state.loading ? l.createElement(p.LoadingIndicator, null) : l.createElement("div", {
                            className: "transformation-editor-container"
                        }, l.createElement("div", {
                            className: "row"
                        }, l.createElement("div", {
                            className: "col-md-12"
                        }, l.createElement(f.SortableInstructionsList, {
                            setSelectRef: this.setSelectRef,
                            schema: this.state.schema,
                            instructions: this.state.instructions,
                            instructionsErrors: this.props.instructionsErrors,
                            lockAxis: "y",
                            useDragHandle: !0,
                            onChange: this.onChange,
                            onRemove: this.onRemoveInstruction,
                            onSortEnd: this.onSortEnd
                        }))), l.createElement("div", {
                            className: "row"
                        }, l.createElement("div", {
                            className: "col-md-12 toolbar"
                        }, l.createElement("a", {
                            className: s.default("btn", "btn-default"),
                            onClick: this.onAddInstruction
                        }, l.createElement(u.Icon, {
                            name: "plus",
                            size: "small"
                        }), "Â  Add Instruction"), "Â ", l.createElement("span", {
                            className: "pull-right"
                        }, l.createElement("a", {
                            className: s.default("btn", "btn-default"),
                            onClick: () => {
                                this.onSourceEditorChange(this.getInitialValue())
                            }
                        }, l.createElement(u.Icon, {
                            name: "refresh",
                            size: "small"
                        }), "Â  Restore"), "Â ", l.createElement(h.SourceCodeEditor, {
                            instructions: this.state.instructions,
                            onChange: this.onSourceEditorChange
                        })))), l.createElement(g.ErrorNotification, {
                            instructionsErrors: this.props.instructionsErrors
                        }))
                    }
                }
                t.TransformationEditor = y
            },
            1502: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    },
                    r = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = a(n(0)),
                    l = n(15),
                    s = r(n(4));
                t.ErrorNotification = ({
                    instructionsErrors: e
                }) => {
                    const t = l.sumBy(e, ([, e]) => Object.keys(e).length);
                    return t > 0 ? i.createElement("div", {
                        style: {
                            position: "absolute",
                            bottom: 0
                        }
                    }, i.createElement("div", {
                        style: {
                            padding: "5px 9px 6px 9px",
                            marginBottom: 0
                        },
                        className: s.default("alert", "alert-danger")
                    }, "You have ", t, " ", 1 === t ? "error" : "errors", ", please check again")) : null
                }
            },
            1503: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    },
                    r = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = a(n(0)),
                    l = r(n(372)),
                    s = r(n(282)),
                    o = r(n(4)),
                    c = r(n(1522)),
                    u = n(12),
                    d = n(568);
                t.SourceCodeEditor = ({
                    instructions: e,
                    onChange: t
                }) => {
                    const [n, a] = i.useState(!1), [r, m] = i.useState(d.getFormattedCode(e)), [p, g] = i.useState();
                    i.useEffect(() => {
                        m(d.getFormattedCode(e))
                    }, [e]);
                    const h = (n = !1) => i => {
                        i.stopPropagation(), a(!1), g(void 0), n ? t(d.parseInstructions(JSON.parse(r))) : m(d.getFormattedCode(e))
                    };
                    return i.createElement("a", {
                        id: "instructionSourceOpener",
                        className: o.default("btn", "btn-default"),
                        onClick: () => a(!0)
                    }, i.createElement("span", null, i.createElement(u.Icon, {
                        name: "qr-code",
                        size: "small"
                    }), "Â  Source"), i.createElement(l.default, {
                        show: n,
                        onHide: () => h(!1),
                        bsSize: "large"
                    }, i.createElement(l.default.Header, {
                        closeButton: !0
                    }, i.createElement(l.default.Title, {
                        id: "contained-modal-title"
                    }, "Edit Source Code")), i.createElement(l.default.Body, null, p && i.createElement("div", {
                        className: o.default("alert", "alert-warning")
                    }, p), i.createElement("div", null, i.createElement(c.default, {
                        mode: "json",
                        theme: "chrome",
                        value: r,
                        maxLines: 30,
                        showPrintMargin: !1,
                        width: "100%",
                        onChange: e => {
                            try {
                                JSON.parse(e), g(void 0)
                            } catch (e) {
                                g("Please enter valid JSON.")
                            }
                            m(e)
                        },
                        editorProps: {
                            $blockScrolling: !0
                        }
                    }))), i.createElement(l.default.Footer, null, i.createElement(s.default, {
                        bsStyle: "primary",
                        disabled: !!p,
                        onClick: h(!0)
                    }, "Save"), i.createElement(s.default, {
                        bsStyle: "default",
                        onClick: h(!1)
                    }, "Cancel"))))
                }
            },
            1525: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(228),
                    l = n(1526);
                t.SortableInstructionsList = i.SortableContainer(({
                    instructions: e,
                    schema: t,
                    instructionsErrors: n,
                    onRemove: a,
                    onChange: i,
                    setSelectRef: s
                }) => r.createElement("div", {
                    className: "transformation-editor"
                }, e.map((e, o) => {
                    var c;
                    return r.createElement(l.SortableInstructionItem, {
                        setSelectRef: s(e.id),
                        key: e.id,
                        index: o,
                        uniqueKey: e.id,
                        instruction: e,
                        schema: t,
                        formError: null === (c = n.find(([e]) => e === o)) || void 0 === c ? void 0 : c[1],
                        onChange: i,
                        onRemove: () => a(e.id)
                    })
                })))
            },
            1526: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    },
                    r = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = a(n(0)),
                    l = a(n(376)),
                    s = r(n(4)),
                    o = n(15),
                    c = n(12),
                    u = n(228),
                    d = n(256),
                    m = n(1530),
                    p = n(1531),
                    g = e => o.filter(e, e => "function" != typeof e);
                t.SortableInstructionItem = u.SortableElement(class extends i.Component {
                    shouldComponentUpdate(e) {
                        return !o.isEqual(g(e), g(this.props))
                    }
                    render() {
                        const {
                            instruction: e,
                            schema: t,
                            onChange: n,
                            onRemove: a,
                            uniqueKey: r,
                            formError: u = {},
                            setSelectRef: g
                        } = this.props, h = Object.keys(t).sort().map(e => Object.assign({
                            key: e
                        }, t[e]));
                        return i.createElement("div", {
                            className: s.default("instruction-item", {
                                disabled: !e.enabled,
                                subtable: e.properties && !o.isEmpty(e.properties.subtable)
                            })
                        }, i.createElement(p.DragHandle, null, e.name), i.createElement("div", {
                            className: "clearfix"
                        }, i.createElement("div", {
                            style: {
                                marginBottom: 5
                            }
                        }, i.createElement(l.default, {
                            ref: e => g(e),
                            value: h.find(({
                                key: t
                            }) => e.name === t),
                            components: {
                                Option: e => i.createElement(l.components.Option, Object.assign({}, e), i.createElement("div", {
                                    style: {
                                        display: "flex"
                                    }
                                }, i.createElement("div", {
                                    style: {
                                        flex: 1,
                                        marginRight: 10
                                    }
                                }, e.data.key), i.createElement("div", {
                                    style: {
                                        flex: 3
                                    }
                                }, t[e.data.key].description))),
                                SingleValue: e => i.createElement("span", null, e.data.key)
                            },
                            getOptionValue: e => e.key,
                            isSearchable: !0,
                            styles: {
                                menu: e => Object.assign(Object.assign({}, e), {
                                    zIndex: 3
                                }),
                                input: e => Object.assign(Object.assign({}, e), {
                                    "& input": {
                                        boxShadow: "none !important"
                                    }
                                })
                            },
                            isOptionSelected: t => e.name === t.key,
                            options: h,
                            placeholder: "Select instruction...",
                            onChange: (t, {
                                action: a
                            }) => {
                                "pop-value" !== a && t && n(Object.assign(Object.assign({}, e), {
                                    name: t.key
                                }))
                            }
                        })), i.createElement("div", {
                            className: s.default("btn-group", "btn-group-xs", "instruction-tools")
                        }, i.createElement("button", {
                            className: s.default("btn", "btn-default", {
                                active: e.enabled
                            }),
                            type: "button",
                            onClick: () => n(Object.assign(Object.assign({}, e), {
                                enabled: !e.enabled
                            }))
                        }, i.createElement(c.Icon, {
                            name: "power-settings",
                            size: "small"
                        }), "Â ", e.enabled ? "Enabled" : "Disabled"), i.createElement("button", {
                            className: s.default("btn", "btn-default"),
                            type: "button",
                            onClick: () => n(Object.assign(Object.assign({}, e), {
                                comment: o.isNil(e.comment) ? "" : null
                            }))
                        }, o.isNil(e.comment) ? "Add Comment" : "Remove Comment"), e.name && t[e.name] && t[e.name].doclink ? i.createElement("a", {
                            className: s.default("btn", "btn-default", "help"),
                            target: "_blank",
                            rel: "noopener noreferrer",
                            href: "" + t[e.name].doclink
                        }, i.createElement(c.Icon, {
                            name: "help",
                            size: "small"
                        }), "Â  Help") : null, i.createElement("button", {
                            className: s.default("btn", "btn-default", "remove"),
                            type: "button",
                            onClick: a
                        }, i.createElement(c.Icon, {
                            name: "close",
                            size: "small"
                        }), "Â  Remove")), !o.isNil(e.comment) && i.createElement("input", {
                            className: s.default("form-control", "commentBottomGap"),
                            placeholder: "Enter Comment",
                            value: e.comment,
                            onChange: t => n(Object.assign(Object.assign({}, e), {
                                comment: t.target.value
                            }))
                        }), e.name && (t[e.name] && t[e.name].propertyOrder.length > 0 ? i.createElement(m.ErrorBoundary, {
                            errorChildren: () => i.createElement(c.Alert, {
                                variant: "danger"
                            }, "Instruction has errors. Use the ", i.createElement("code", null, "Source"), " Button below to resolve them.")
                        }, i.createElement(d.FormGenerator, {
                            id: r,
                            formSchema: t[e.name],
                            formError: u,
                            value: e.properties,
                            onChange: t => n(Object.assign(Object.assign({}, e), {
                                properties: t
                            }))
                        })) : i.createElement("div", {
                            style: {
                                paddingTop: 3
                            }
                        }, "Instruction works without parameters."))))
                    }
                })
            },
            1530: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0));
                class i extends r.PureComponent {
                    constructor() {
                        super(...arguments), this.state = {
                            hasError: !1,
                            error: null,
                            info: null
                        }
                    }
                    componentDidCatch(e, t) {
                        this.setState({
                            hasError: !0,
                            error: e,
                            info: t
                        })
                    }
                    render() {
                        const {
                            children: e,
                            errorChildren: t = (() => null)
                        } = this.props;
                        return this.state.hasError ? t(this.state.error, this.state.info) : e
                    }
                }
                t.ErrorBoundary = i
            },
            1531: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(228);
                t.DragHandle = i.SortableHandle(({
                    children: e
                }) => r.createElement("div", {
                    className: "drag-handle"
                }, r.createElement("div", {
                    className: "instruction-label"
                }, e)))
            },
            1532: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    },
                    r = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = a(n(0)),
                    l = r(n(9)),
                    s = n(15),
                    o = r(n(44)),
                    c = n(56),
                    u = r(n(1534)),
                    d = r(n(1536)),
                    m = {
                        timeRanges: {},
                        datastreamNames: {}
                    };
                class p extends i.PureComponent {
                    constructor() {
                        super(...arguments), this.state = Object.assign(Object.assign({}, m), {
                            error: ""
                        }), this.eventListeners = [], this.refreshFetchListIfScheduled = (e, t) => () => {
                            const n = l.default(e.value, "YYYY-MM-DD", !0).set({
                                    hour: 0,
                                    minute: 0,
                                    second: 0
                                }),
                                a = l.default(t.value, "YYYY-MM-DD", !0).set({
                                    hour: 23,
                                    minute: 59,
                                    second: 59
                                });
                            n.isValid() && a.isValid() ? this.props.datastreamIds.forEach(e => {
                                o.default.get(`/api/datastreams/${e}/fetch/`, {
                                    params: {
                                        start: n.format("YYYY-MM-DDTHH:mm:ss") + "Z",
                                        end: a.format("YYYY-MM-DDTHH:mm:ss") + "Z"
                                    }
                                }).then(({
                                    data: t
                                }) => {
                                    "ok" === t.status ? this.setState(n => ({
                                        timeRanges: Object.assign(Object.assign({}, n.timeRanges), {
                                            [e]: t.timeranges
                                        }),
                                        datastreamNames: Object.assign(Object.assign({}, n.datastreamNames), {
                                            [e]: t.datastream_name
                                        }),
                                        error: ""
                                    })) : this.setState(Object.assign(Object.assign({}, m), {
                                        error: t.message
                                    }))
                                })
                            }) : this.setState(m)
                        }
                    }
                    componentDidMount() {
                        const e = document.getElementById("range_picker-start"),
                            t = document.getElementById("range_picker-end"),
                            n = document.querySelector('input[name="range_picker"]');
                        if (e && t) {
                            const l = this.refreshFetchListIfScheduled(e, t);
                            l(), this.eventListeners = [(a = n, r = "change", i = l, a.addEventListener(r, i), () => a.removeEventListener(r, i))]
                        }
                        var a, r, i
                    }
                    componentWillUnmount() {
                        this.eventListeners.forEach(e => e())
                    }
                    render() {
                        const {
                            timeRanges: e,
                            datastreamNames: t,
                            error: n
                        } = this.state, a = Object.keys(e), r = a.reduce((t, n) => t + e[n].length, 0);
                        return i.default.createElement("div", {
                            className: "clearfix"
                        }, i.default.createElement("div", null, "This fetch will startÂ ", i.default.createElement("strong", null, r), " fetch job", 1 === r ? "" : "s", "Â  to retrieve data for requested timeframe."), s.isEmpty(e) || n ? i.default.createElement(d.default, {
                            error: n
                        }) : i.default.createElement("div", {
                            className: "schedulePreviewList"
                        }, a.map((n, r) => i.default.createElement(u.default, {
                            datastreamId: n,
                            datastreamName: t[n],
                            index: r,
                            key: "datastream_" + n,
                            showName: a.length > 1,
                            timeRanges: e[n]
                        }))))
                    }
                }
                t.ScheduleTimestampPreview = p, t.renderScheduleTimestampPreview = () => {
                    const e = document.getElementById("schedulePreview"),
                        t = window.scheduleTimestampPreviewProps;
                    if (e && t) {
                        const n = () => {
                                const n = document.querySelector('#fetchDatastreamForm input[name="fetch_type"]'),
                                    a = n && "scheduled" === n.value;
                                c.render({
                                    component: a ? i.default.createElement(p, Object.assign({}, t)) : i.default.createElement("div"),
                                    container: e
                                })
                            },
                            a = document.getElementById("id_fetch_type");
                        a && a.addEventListener("change", n), n()
                    }
                }
            },
            1533: function(e, t, n) {
                var a = {
                    "./af": 570,
                    "./af.js": 570,
                    "./ar": 571,
                    "./ar-dz": 572,
                    "./ar-dz.js": 572,
                    "./ar-kw": 573,
                    "./ar-kw.js": 573,
                    "./ar-ly": 574,
                    "./ar-ly.js": 574,
                    "./ar-ma": 575,
                    "./ar-ma.js": 575,
                    "./ar-sa": 576,
                    "./ar-sa.js": 576,
                    "./ar-tn": 577,
                    "./ar-tn.js": 577,
                    "./ar.js": 571,
                    "./az": 578,
                    "./az.js": 578,
                    "./be": 579,
                    "./be.js": 579,
                    "./bg": 580,
                    "./bg.js": 580,
                    "./bm": 581,
                    "./bm.js": 581,
                    "./bn": 582,
                    "./bn.js": 582,
                    "./bo": 583,
                    "./bo.js": 583,
                    "./br": 584,
                    "./br.js": 584,
                    "./bs": 585,
                    "./bs.js": 585,
                    "./ca": 586,
                    "./ca.js": 586,
                    "./cs": 587,
                    "./cs.js": 587,
                    "./cv": 588,
                    "./cv.js": 588,
                    "./cy": 589,
                    "./cy.js": 589,
                    "./da": 590,
                    "./da.js": 590,
                    "./de": 591,
                    "./de-at": 592,
                    "./de-at.js": 592,
                    "./de-ch": 593,
                    "./de-ch.js": 593,
                    "./de.js": 591,
                    "./dv": 594,
                    "./dv.js": 594,
                    "./el": 595,
                    "./el.js": 595,
                    "./en-SG": 596,
                    "./en-SG.js": 596,
                    "./en-au": 597,
                    "./en-au.js": 597,
                    "./en-ca": 598,
                    "./en-ca.js": 598,
                    "./en-gb": 599,
                    "./en-gb.js": 599,
                    "./en-ie": 600,
                    "./en-ie.js": 600,
                    "./en-il": 601,
                    "./en-il.js": 601,
                    "./en-nz": 602,
                    "./en-nz.js": 602,
                    "./eo": 603,
                    "./eo.js": 603,
                    "./es": 604,
                    "./es-do": 605,
                    "./es-do.js": 605,
                    "./es-us": 606,
                    "./es-us.js": 606,
                    "./es.js": 604,
                    "./et": 607,
                    "./et.js": 607,
                    "./eu": 608,
                    "./eu.js": 608,
                    "./fa": 609,
                    "./fa.js": 609,
                    "./fi": 610,
                    "./fi.js": 610,
                    "./fo": 611,
                    "./fo.js": 611,
                    "./fr": 612,
                    "./fr-ca": 613,
                    "./fr-ca.js": 613,
                    "./fr-ch": 614,
                    "./fr-ch.js": 614,
                    "./fr.js": 612,
                    "./fy": 615,
                    "./fy.js": 615,
                    "./ga": 616,
                    "./ga.js": 616,
                    "./gd": 617,
                    "./gd.js": 617,
                    "./gl": 618,
                    "./gl.js": 618,
                    "./gom-latn": 619,
                    "./gom-latn.js": 619,
                    "./gu": 620,
                    "./gu.js": 620,
                    "./he": 621,
                    "./he.js": 621,
                    "./hi": 622,
                    "./hi.js": 622,
                    "./hr": 623,
                    "./hr.js": 623,
                    "./hu": 624,
                    "./hu.js": 624,
                    "./hy-am": 625,
                    "./hy-am.js": 625,
                    "./id": 626,
                    "./id.js": 626,
                    "./is": 627,
                    "./is.js": 627,
                    "./it": 628,
                    "./it-ch": 629,
                    "./it-ch.js": 629,
                    "./it.js": 628,
                    "./ja": 630,
                    "./ja.js": 630,
                    "./jv": 631,
                    "./jv.js": 631,
                    "./ka": 632,
                    "./ka.js": 632,
                    "./kk": 633,
                    "./kk.js": 633,
                    "./km": 634,
                    "./km.js": 634,
                    "./kn": 635,
                    "./kn.js": 635,
                    "./ko": 636,
                    "./ko.js": 636,
                    "./ku": 637,
                    "./ku.js": 637,
                    "./ky": 638,
                    "./ky.js": 638,
                    "./lb": 639,
                    "./lb.js": 639,
                    "./lo": 640,
                    "./lo.js": 640,
                    "./lt": 641,
                    "./lt.js": 641,
                    "./lv": 642,
                    "./lv.js": 642,
                    "./me": 643,
                    "./me.js": 643,
                    "./mi": 644,
                    "./mi.js": 644,
                    "./mk": 645,
                    "./mk.js": 645,
                    "./ml": 646,
                    "./ml.js": 646,
                    "./mn": 647,
                    "./mn.js": 647,
                    "./mr": 648,
                    "./mr.js": 648,
                    "./ms": 649,
                    "./ms-my": 650,
                    "./ms-my.js": 650,
                    "./ms.js": 649,
                    "./mt": 651,
                    "./mt.js": 651,
                    "./my": 652,
                    "./my.js": 652,
                    "./nb": 653,
                    "./nb.js": 653,
                    "./ne": 654,
                    "./ne.js": 654,
                    "./nl": 655,
                    "./nl-be": 656,
                    "./nl-be.js": 656,
                    "./nl.js": 655,
                    "./nn": 657,
                    "./nn.js": 657,
                    "./pa-in": 658,
                    "./pa-in.js": 658,
                    "./pl": 659,
                    "./pl.js": 659,
                    "./pt": 660,
                    "./pt-br": 661,
                    "./pt-br.js": 661,
                    "./pt.js": 660,
                    "./ro": 662,
                    "./ro.js": 662,
                    "./ru": 663,
                    "./ru.js": 663,
                    "./sd": 664,
                    "./sd.js": 664,
                    "./se": 665,
                    "./se.js": 665,
                    "./si": 666,
                    "./si.js": 666,
                    "./sk": 667,
                    "./sk.js": 667,
                    "./sl": 668,
                    "./sl.js": 668,
                    "./sq": 669,
                    "./sq.js": 669,
                    "./sr": 670,
                    "./sr-cyrl": 671,
                    "./sr-cyrl.js": 671,
                    "./sr.js": 670,
                    "./ss": 672,
                    "./ss.js": 672,
                    "./sv": 673,
                    "./sv.js": 673,
                    "./sw": 674,
                    "./sw.js": 674,
                    "./ta": 675,
                    "./ta.js": 675,
                    "./te": 676,
                    "./te.js": 676,
                    "./tet": 677,
                    "./tet.js": 677,
                    "./tg": 678,
                    "./tg.js": 678,
                    "./th": 679,
                    "./th.js": 679,
                    "./tl-ph": 680,
                    "./tl-ph.js": 680,
                    "./tlh": 681,
                    "./tlh.js": 681,
                    "./tr": 682,
                    "./tr.js": 682,
                    "./tzl": 683,
                    "./tzl.js": 683,
                    "./tzm": 684,
                    "./tzm-latn": 685,
                    "./tzm-latn.js": 685,
                    "./tzm.js": 684,
                    "./ug-cn": 686,
                    "./ug-cn.js": 686,
                    "./uk": 687,
                    "./uk.js": 687,
                    "./ur": 688,
                    "./ur.js": 688,
                    "./uz": 689,
                    "./uz-latn": 690,
                    "./uz-latn.js": 690,
                    "./uz.js": 689,
                    "./vi": 691,
                    "./vi.js": 691,
                    "./x-pseudo": 692,
                    "./x-pseudo.js": 692,
                    "./yo": 693,
                    "./yo.js": 693,
                    "./zh-cn": 694,
                    "./zh-cn.js": 694,
                    "./zh-hk": 695,
                    "./zh-hk.js": 695,
                    "./zh-tw": 696,
                    "./zh-tw.js": 696
                };

                function r(e) {
                    var t = i(e);
                    return n(t)
                }

                function i(e) {
                    if (!n.o(a, e)) {
                        var t = new Error("Cannot find module '" + e + "'");
                        throw t.code = "MODULE_NOT_FOUND", t
                    }
                    return a[e]
                }
                r.keys = function() {
                    return Object.keys(a)
                }, r.resolve = i, e.exports = r, r.id = 1533
            },
            1534: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    },
                    r = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = a(n(0)),
                    l = r(n(4)),
                    s = r(n(1535)),
                    o = n(12);
                t.default = ({
                    datastreamId: e,
                    showName: t,
                    datastreamName: n,
                    timeRanges: a,
                    index: r
                }) => i.createElement("div", {
                    className: l.default("row", "schedulePreview-row", {
                        "schedulePreview-row-border": r > 0
                    })
                }, t && i.createElement("div", {
                    className: "col-md-4"
                }, n), i.createElement("div", {
                    className: t ? "col-md-8" : "col-md-12"
                }, a.length > 0 ? a.map(t => i.createElement("div", {
                    key: `datastream_${e}_${t.scheduled}`
                }, i.createElement(o.Icon, {
                    name: "time",
                    size: "small"
                }), "Â Fetch Job for ", i.createElement("u", null, t.time_range_preset), " fromÂ ", i.createElement("strong", null, i.createElement(s.default, {
                    timestamp: t.start,
                    dateTimeFormat: "YYYY-MM-DD HH:mm"
                })), "Â â€”Â ", i.createElement("strong", null, i.createElement(s.default, {
                    timestamp: t.end,
                    dateTimeFormat: "YYYY-MM-DD HH:mm"
                })))) : "No time ranges to preview"))
            },
            1535: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = a(n(9));
                t.default = ({
                    dateTimeFormat: e,
                    timestamp: t
                }) => r.createElement("span", null, i.utc(t).format(e))
            },
            1536: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0));
                t.default = ({
                    error: e
                }) => e ? r.createElement("div", {
                    className: "alert alert-error"
                }, e) : null
            },
            1537: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    },
                    r = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = a(n(0)),
                    l = n(776),
                    s = n(56),
                    o = r(n(1543)),
                    c = r(n(1561)),
                    u = n(1581),
                    d = r(n(1587)),
                    m = r(n(1597)),
                    p = n(1603);
                t.renderRouter = () => {
                    const e = document.getElementById("app");
                    e && s.render({
                        component: i.createElement(l.BrowserRouter, null, i.createElement(l.Switch, null, i.createElement(l.Route, {
                            exact: !0,
                            path: "/stats/quota/",
                            component: d.default
                        }), i.createElement(l.Route, {
                            exact: !0,
                            path: "/target/targetcolumns/",
                            component: m.default
                        }), i.createElement(l.Route, {
                            exact: !0,
                            path: "/:stack_slug/",
                            component: o.default
                        }), i.createElement(l.Route, {
                            exact: !0,
                            path: "/:stack_slug/:datastream_slug-:datastream_id([0-9]+)/",
                            component: c.default
                        }), i.createElement(l.Route, {
                            exact: !0,
                            path: "/:stack_slug/:datastream_slug-:datastream_id([0-9]+)/mapping/",
                            component: u.SchemaMapping
                        }), i.createElement(l.Route, {
                            exact: !0,
                            path: "/datastream/:datastream_id/destinations/passive/",
                            component: p.PassiveDestination
                        }))),
                        container: e
                    })
                }
            },
            1543: function(e, t, n) {
                "use strict";
                var a = this && this.__awaiter || function(e, t, n, a) {
                        return new(n || (n = Promise))((function(r, i) {
                            function l(e) {
                                try {
                                    o(a.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function s(e) {
                                try {
                                    o(a.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function o(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(l, s)
                            }
                            o((a = a.apply(e, t || [])).next())
                        }))
                    },
                    r = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    },
                    i = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const l = r(n(0)),
                    s = n(12),
                    o = n(697),
                    c = n(698),
                    u = n(96),
                    d = n(699),
                    m = i(n(44)),
                    p = n(286),
                    g = n(63),
                    h = e => {
                        const [t, n] = l.useState(), [r, i] = l.useState(), {
                            setElement: h,
                            height: f
                        } = p.useContentHeight(), v = s.useMedia("medium"), y = s.useMedia("(min-width: 1080px)"), E = e.match.params.stack_slug, M = (e, t) => v ? e : y && t ? t : 12;
                        if (l.useEffect(() => {
                                a(void 0, void 0, void 0, (function*() {
                                    const e = `${g.API_URLS.workspaces}${E}/`,
                                        {
                                            data: t
                                        } = yield m.default.get(e);
                                    n(t)
                                }))
                            }, [E]), l.useEffect(() => {
                                a(void 0, void 0, void 0, (function*() {
                                    const e = g.API_URLS.account,
                                        {
                                            data: t
                                        } = yield m.default.get(e);
                                    i(t)
                                }))
                            }, []), t && r) {
                            const e = `${g.API_URLS.jobs}?stack_id=${t.id}`,
                                n = `${g.API_URLS.errors}?ack=false&stack_id=${t.id}`,
                                a = `${g.API_URLS.extracts}?stack_id=${t.id}`,
                                i = `${g.API_URLS.workspaces}${t.slug}/stats/`,
                                {
                                    extracts_url: u,
                                    issues_url: m
                                } = t;
                            return l.createElement(l.Fragment, null, t.permissions.isDatastreamManager && l.createElement(s.Row, {
                                gutter: "medium",
                                marginBottom: "medium"
                            }, l.createElement(s.Column, {
                                span: M(9)
                            }, l.createElement(c.KpiBoxes, {
                                url: i
                            })), l.createElement(s.Column, {
                                span: M(3),
                                order: v ? 1 : -1
                            }, l.createElement(s.Flex, {
                                justifyContent: "flex-end"
                            }, l.createElement(s.Button, {
                                as: "a",
                                href: t.add_datastream_url
                            }, l.createElement(s.Icon, {
                                name: "plus"
                            }), l.createElement(s.Text, {
                                size: "medium"
                            }, "Add new datastream"))))), l.createElement(d.OverviewLanes, {
                                rowRef: h,
                                laneComponents: {
                                    activityMonitor: l.createElement(o.ActivityMonitorLane, {
                                        maxHeight: {
                                            large: f
                                        },
                                        sourceUrl: e
                                    }),
                                    recentActivity: l.createElement(o.RecentActivityLane, {
                                        maxHeight: {
                                            large: f
                                        },
                                        extractsUrl: u,
                                        sourceUrl: a
                                    }),
                                    issues: l.createElement(o.IssueLane, {
                                        maxHeight: {
                                            large: f
                                        },
                                        sourceUrl: n,
                                        issuesUrl: m
                                    })
                                },
                                order: r.ui_overview_lane_config_order,
                                spotlight: r.ui_overview_lane_config_spotlight
                            }))
                        }
                        return l.createElement(u.LoadingIndicator, null)
                    };
                t.default = e => l.createElement(h, Object.assign({
                    key: e.match.params.stack_slug
                }, e))
            },
            1544: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.isBrowserTabVisible = () => "visible" === document.visibilityState
            },
            1545: function(e, t, n) {
                "use strict";
                var a = this && this.__awaiter || function(e, t, n, a) {
                        return new(n || (n = Promise))((function(r, i) {
                            function l(e) {
                                try {
                                    o(a.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function s(e) {
                                try {
                                    o(a.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function o(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(l, s)
                            }
                            o((a = a.apply(e, t || [])).next())
                        }))
                    },
                    r = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    },
                    i = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const l = r(n(0)),
                    s = i(n(9)),
                    o = n(12),
                    c = n(63),
                    u = i(n(44)),
                    d = {
                        blue: {
                            backgroundColor: "blue.1",
                            color: "blue.7"
                        },
                        orange: {
                            backgroundColor: "warning.1",
                            color: "warning.7"
                        },
                        green: {
                            backgroundColor: "success.1",
                            color: "success.7"
                        },
                        grey: {
                            backgroundColor: "gray.1",
                            color: "gray.7"
                        },
                        red: {
                            backgroundColor: "danger.1",
                            color: "danger.7"
                        }
                    };
                t.ActivityMonitorItem = ({
                    id: e,
                    url: t,
                    onRemoveItem: n,
                    state: r,
                    progress: i,
                    datastream: m,
                    job_start: p,
                    state_label: g,
                    state_color: h,
                    range_start: f,
                    range_end: v,
                    itemHeaderComponent: y
                }) => {
                    const E = r === c.JOB_STATE_RUNNING,
                        M = E ? (100 * i).toFixed(0) : 0,
                        b = [c.JOB_STATE_RUNNING, c.JOB_STATE_SCHEDULED].includes(r),
                        _ = !(!m || !y);
                    return l.createElement(o.Join, {
                        css: {
                            ":hover .stopJobButton": {
                                visibility: "visible"
                            }
                        },
                        orientation: "vertical",
                        spacing: "x-small",
                        padding: "small",
                        block: !0
                    }, l.createElement(o.StartEnd, {
                        height: b && _ ? "small" : "medium"
                    }, l.createElement(o.Join, {
                        spacing: "x-small"
                    }, l.createElement(o.Tag, Object.assign({
                        size: "x-small"
                    }, d[h]), E ? "Fetching" : g), l.createElement(o.Text.Secondary, null, s.default(p).fromNow())), b && l.createElement(o.IconButton.Secondary, {
                        css: {
                            visibility: "hidden"
                        },
                        className: "stopJobButton",
                        name: "stop",
                        size: "small",
                        onClick: () => a(void 0, void 0, void 0, (function*() {
                            yield u.default.post(t + "stop/"), null == n || n(e)
                        }))
                    })), m && y && l.createElement(y, {
                        datastream: m
                    }), l.createElement(o.LinearProgress, {
                        value: M,
                        size: "x-small"
                    }), l.createElement(o.StartEnd, null, l.createElement(o.Text, null, s.default.utc(f).format("YYYY-MM-DD"), " - ", s.default.utc(v).format("YYYY-MM-DD")), l.createElement(o.Text, {
                        color: "brand.6",
                        fontWeight: "semiBold"
                    }, E ? M + "%" : g)))
                }
            },
            1546: function(e, t, n) {
                "use strict";
                var a = this && this.__awaiter || function(e, t, n, a) {
                        return new(n || (n = Promise))((function(r, i) {
                            function l(e) {
                                try {
                                    o(a.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function s(e) {
                                try {
                                    o(a.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function o(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(l, s)
                            }
                            o((a = a.apply(e, t || [])).next())
                        }))
                    },
                    r = this && this.__rest || function(e, t) {
                        var n = {};
                        for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var r = 0;
                            for (a = Object.getOwnPropertySymbols(e); r < a.length; r++) t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]])
                        }
                        return n
                    },
                    i = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    },
                    l = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const s = i(n(0)),
                    o = l(n(9)),
                    c = n(15),
                    u = n(12),
                    d = n(377),
                    m = n(188),
                    p = l(n(44)),
                    g = n(1549),
                    h = {
                        Error: {
                            variant: "danger"
                        },
                        Warning: {
                            variant: "warning"
                        }
                    },
                    f = ({
                        extract: e
                    }) => {
                        var t, n;
                        return (null === (n = null === (t = null == e ? void 0 : e.metadata) || void 0 === t ? void 0 : t.custom_meta_information) || void 0 === n ? void 0 : n.source_filename) ? s.createElement(u.Text, null, "Source Filename: ", s.createElement(u.Text, {
                            fontWeight: "bold"
                        }, e.metadata.custom_meta_information.source_filename)) : null
                    },
                    v = ({
                        children: e
                    }) => {
                        const t = u.useTheme();
                        return s.createElement(u.Box, {
                            as: "pre",
                            backgroundColor: "blue.0",
                            color: "gray.9",
                            fontSize: "xx-small",
                            marginBottom: 0,
                            padding: "xx-small",
                            css: {
                                fontFamily: "IBM Plex Mono, monospace",
                                lineHeight: t.lineHeights["xx-small"],
                                whiteSpace: "pre-wrap"
                            }
                        }, e)
                    },
                    y = ({
                        children: e
                    }) => s.createElement(u.Join, {
                        orientation: "vertical",
                        spacing: "x-small"
                    }, e),
                    E = ({
                        message: e,
                        mapping_table_change_url: t,
                        mapping_entries_change_url: n,
                        target_column_change_url: a,
                        transformation_config_url: r,
                        datastream_insights_url: i
                    }) => {
                        if (t) {
                            const a = /^(.+missing in )(.+)(\..*)$/.exec(e);
                            if (a) return s.createElement(y, null, s.createElement(u.Text, null, a[1]), s.createElement(u.Text, {
                                fontWeight: "bold"
                            }, s.createElement(u.Link, {
                                href: t
                            }, a[2])), " ", s.createElement(u.Link, {
                                href: n
                            }, "Missing Entries"), s.createElement(u.Text, null, a[3]))
                        }
                        if (r) {
                            const t = /(.+in step )`(.*?)`(.*)$/.exec(e);
                            if (t) return s.createElement(y, null, s.createElement(u.Text, null, t[1]), s.createElement(v, null, s.createElement(u.Link, {
                                href: r
                            }, t[2])), s.createElement(u.Text, null, t[3]))
                        }
                        if (i) {
                            const t = /(.+Check )`(.*?)`(.*?)(support@zoom360.com)\.$/.exec(e);
                            if (t) return s.createElement(y, null, s.createElement(u.Text, null, t[1]), s.createElement(u.Link, {
                                href: i
                            }, t[2]), s.createElement(u.Text, null, t[3]), s.createElement(u.Text, null, s.createElement(u.Link, {
                                href: "mailto:" + t[4]
                            }, t[4]), "."))
                        }
                        if (a) {
                            const t = /(.+length for )`(.+?)`(.*)$/.exec(e);
                            if (t) return s.createElement(y, null, s.createElement(u.Text, null, t[1]), s.createElement(u.Link, {
                                href: a
                            }, t[2]), s.createElement(u.Text, null, t[3]))
                        }
                        const l = g.sanitizeMessage(e);
                        return s.createElement(y, null, s.createElement(u.Text, null, l.map(e => e.isBold ? s.createElement("b", null, e.text) : e.text)))
                    },
                    M = ({
                        occurrences: e,
                        ack_url: t,
                        ack_group_url: n,
                        retry_group_url: r,
                        retry_url: i,
                        id: l,
                        onRemoveItem: o,
                        menu: c,
                        isIssueGroup: d,
                        onHelpClick: m,
                        isVisible: g
                    }) => {
                        const h = e => () => a(void 0, void 0, void 0, (function*() {
                            yield p.default.post(e), null == o || o(l)
                        }));
                        return s.createElement(u.Flex, null, s.createElement(u.Menu.Disclosure.Secondary, Object.assign({}, c, {
                            size: "small",
                            paddingX: "xx-small",
                            opacity: g ? 1 : 0
                        }), s.createElement(u.Icon, {
                            size: "small",
                            name: "more-y"
                        })), s.createElement(u.Menu, Object.assign({}, c), s.createElement(u.Menu.Item, Object.assign({}, c, {
                            onClick: m
                        }), s.createElement(u.Icon, {
                            name: "help"
                        }), "Help"), e > 1 && s.createElement(u.Menu.Item, Object.assign({}, c, {
                            onClick: h(n)
                        }), s.createElement(u.Icon, {
                            name: "check"
                        }), "Acknowledge all (", e, " issues)"), s.createElement(u.Menu.Item, Object.assign({}, c, {
                            onClick: h(t)
                        }), s.createElement(u.Icon, {
                            name: "check"
                        }), e > 1 ? "Acknowledge most recent" : "Acknowledge"), e > 1 && s.createElement(u.Menu.Item, Object.assign({}, c, {
                            onClick: h(r)
                        }), s.createElement(u.Icon, {
                            name: "refresh"
                        }), "Retry all (", e, " issues)"), s.createElement(u.Menu.Item, Object.assign({}, c, {
                            onClick: h(i)
                        }), s.createElement(u.Icon, {
                            name: "refresh"
                        }), "Retry" + (d ? " most recent" : ""))))
                    },
                    b = ({
                        end: e,
                        type_label: t,
                        extraction_stage_label: n,
                        error_cause_label: a,
                        error_resolution_label: r
                    }) => {
                        const i = {
                                size: "x-small",
                                marginBottom: "xx-small",
                                marginRight: "xx-small"
                            },
                            l = Object.assign(Object.assign({}, i), {
                                backgroundColor: "brand.1",
                                color: "brand.6"
                            }),
                            c = "Naming Convention" === a;
                        return s.createElement(u.Flex, {
                            flexWrap: "wrap"
                        }, c ? s.createElement(s.Fragment, null, s.createElement(u.Provider, {
                            theme: u.presenseTheme
                        }, s.createElement(u.Tag, Object.assign({}, l), "Naming Convention")), "Unknown" !== t && s.createElement(u.Tag, Object.assign({}, i), t)) : s.createElement(s.Fragment, null, "Unknown" !== t && s.createElement(u.Tag, Object.assign({}, i, h[t]), t), n && s.createElement(u.Tag, Object.assign({}, i), n), a && s.createElement(u.Tag, Object.assign({}, i), a), r && s.createElement(u.Tag, Object.assign({}, i), r)), s.createElement(u.Text.Secondary, {
                            marginBottom: "xx-small",
                            marginLeft: "xx-small"
                        }, o.default(e).fromNow()))
                    };
                t.IssueItem = e => {
                    var t, {
                            datastream: n,
                            extract: a,
                            job: i,
                            occurrences: l,
                            itemHeaderComponent: p,
                            message: g,
                            url: h
                        } = e,
                        v = r(e, ["datastream", "extract", "job", "occurrences", "itemHeaderComponent", "message", "url"]);
                    const y = u.Menu.useMenuState({
                            placement: "bottom-end"
                        }),
                        _ = u.useTheme(),
                        [j, I] = s.useState(!1),
                        O = l > 1;
                    return s.createElement(s.Fragment, null, s.createElement(m.HoverSensor, null, ({
                        isHover: e
                    }) => s.createElement(u.Box, {
                        padding: "small"
                    }, s.createElement(u.StartEnd, {
                        marginBottom: "xx-small",
                        css: {
                            minHeight: _.space.medium + "px"
                        }
                    }, s.createElement(b, Object.assign({}, v)), s.createElement(u.Flex, {
                        justifyContent: "flex-end",
                        minWidth: _.space.medium
                    }, s.createElement(M, Object.assign({}, v, {
                        isIssueGroup: O,
                        menu: y,
                        onHelpClick: () => I(!0),
                        occurrences: l,
                        isVisible: e || y.visible
                    })), !e && !y.visible && O && s.createElement(u.Badge, {
                        size: "x-small"
                    }, l))), s.createElement(u.Join, {
                        orientation: "vertical",
                        spacing: "x-small"
                    }, s.createElement(u.Join, {
                        orientation: "vertical",
                        spacing: "xx-small",
                        maxWidth: "100%",
                        block: !0
                    }, n && p && s.createElement(p, {
                        datastream: n
                    }), a && s.createElement(u.Truncate, null, s.createElement(u.Link, {
                        href: a.preview_url
                    }, a.name)), i && s.createElement(u.Text, null, "An error occurred while fetching time range", " ", o.default.utc(i.range_start).format("YYYY-MM-DD"), " -", " ", o.default.utc(i.range_end).format("YYYY-MM-DD"))), s.createElement(f, {
                        extract: a
                    }), s.createElement(u.Alert, {
                        variant: "danger"
                    }, s.createElement(u.Text, {
                        css: {
                            wordBreak: "break-word"
                        }
                    }, s.createElement(E, Object.assign({
                        message: g
                    }, v))))))), s.createElement(d.ContactModal, {
                        isOpen: j,
                        onSubmit: c.identity,
                        onCancel: () => I(!1),
                        email: null === (t = window.user) || void 0 === t ? void 0 : t.email,
                        issueUrl: h,
                        subject: "Issue: " + g
                    }))
                }
            },
            1547: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(12);
                t.SubmitFooter = ({
                    onSubmit: e,
                    onCancel: t,
                    isLoading: n,
                    submitLabel: a = "Submit",
                    cancelLabel: l = "Cancel"
                }) => r.createElement(i.Join, {
                    spacing: "x-small",
                    justifyContent: "flex-end"
                }, r.createElement(i.Button.Secondary, {
                    onClick: t
                }, l), r.createElement(i.Button, {
                    disabled: n,
                    onClick: e
                }, n && r.createElement(i.CircularProgress, null), a))
            },
            1548: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(284),
                    l = n(12),
                    s = ({
                        label: e,
                        value: t,
                        maxLength: n,
                        placeholder: a,
                        error: i,
                        as: s,
                        onChange: o
                    }) => r.createElement(l.Join, {
                        orientation: "vertical",
                        spacing: "xx-small",
                        width: "100%"
                    }, r.createElement(l.Text, {
                        fontSize: "x-small"
                    }, e), r.createElement(l.Input, {
                        as: s,
                        value: t,
                        placeholder: a,
                        variant: i && "danger",
                        maxLength: n,
                        onChange: e => o(e.target.value)
                    }), i && r.createElement(l.Alert, {
                        variant: "danger",
                        marginTop: "xx-small"
                    }, i));
                t.useForm = (e, t, n = {}) => {
                    const a = e.reduce((e, {
                            name: n
                        }) => Object.assign(Object.assign({}, e), {
                            [n]: t[n]
                        }), {}),
                        [l, o] = r.useState(a),
                        [c, u] = r.useState(!1),
                        d = ((e, t) => e.reduce((e, {
                            name: n,
                            validators: a = []
                        }) => {
                            const r = i.validate(a, t[n]);
                            return r ? Object.assign(Object.assign({}, e), {
                                [n]: r
                            }) : e
                        }, {}))(e, l);
                    return {
                        component: e.map(({
                            name: e,
                            label: t,
                            as: a,
                            maxLength: i
                        }) => {
                            var u, m;
                            return r.createElement(s, {
                                key: String(e),
                                label: t,
                                value: null !== (u = l[e]) && void 0 !== u ? u : "",
                                onChange: t => o(Object.assign(Object.assign({}, l), {
                                    [e]: t
                                })),
                                error: c ? null !== (m = d[e]) && void 0 !== m ? m : n[e] : void 0,
                                as: a,
                                maxLength: i
                            })
                        }),
                        submit: () => (u(!0), {
                            isValid: 0 === Object.keys(d).length,
                            values: Object.assign({}, l)
                        }),
                        reset: () => {
                            o(a), u(!1)
                        }
                    }
                }
            },
            1549: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.sanitizeMessage = e => {
                    const t = /<b>(.*?)<\/b>/;
                    return e.split(/(<b>.*?<\/b>)/).map(e => {
                        const n = e.match(t);
                        return {
                            text: n ? n[1] : e,
                            isBold: !!n
                        }
                    }).filter(e => "" !== e.text)
                }
            },
            1550: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(12),
                    l = n(1551);
                t.default = ({
                    totalItemCount: e,
                    emptyMessage: t,
                    rowComponent: n,
                    itemHeaderComponent: a = l.ItemHeader,
                    header: s,
                    headerActionComponent: o,
                    showItemBadge: c,
                    items: u,
                    maxHeight: d
                }) => {
                    const [m, p] = r.useState([]), g = e => {
                        p(t => [...t, e])
                    }, h = u.filter(({
                        id: e
                    }) => !m.includes(e)), f = Math.max(0, e - m.length);
                    return r.createElement(i.Card, {
                        marginBottom: {
                            _: "medium",
                            large: 0
                        },
                        css: {
                            overflowY: "auto"
                        },
                        maxHeight: d
                    }, r.createElement(i.Box, {
                        position: "sticky",
                        zIndex: 1,
                        top: 0,
                        width: "100%"
                    }, r.createElement(i.StartEnd, {
                        backgroundColor: "white",
                        paddingX: "small",
                        paddingY: "x-small",
                        alignItems: "center"
                    }, r.createElement(i.Text, {
                        size: "medium",
                        fontWeight: "normal"
                    }, s), r.createElement(i.Join, {
                        spacing: "x-small"
                    }, o, c && f > 0 && r.createElement(i.Badge, {
                        overflowCount: 100
                    }, f))), r.createElement(i.Separator, {
                        color: "gray.2"
                    })), h.length > 0 && u.length > 0 ? h.map((e, t) => r.createElement(r.Fragment, {
                        key: String(e.id)
                    }, r.createElement(i.Block, null, r.createElement(n, Object.assign({}, e, {
                        itemHeaderComponent: a,
                        onRemoveItem: g
                    }))), t + 1 !== h.length && r.createElement(i.Separator, {
                        color: "gray.1"
                    }))) : r.createElement(i.Flex, {
                        backgroundColor: "gray.0",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 120
                    }, r.createElement(i.Text.Secondary, {
                        size: "medium",
                        align: "center"
                    }, t)))
                }
            },
            1551: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(12);
                t.ItemHeader = ({
                    datastream: e
                }) => r.createElement(i.Heading, {
                    color: "brand.8",
                    fontSize: "x-small"
                }, r.createElement(i.Link, {
                    css: {
                        wordBreak: "break-word"
                    },
                    href: e.overview_url
                }, e.name))
            },
            1552: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    },
                    r = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = a(n(0)),
                    l = r(n(9)),
                    s = n(12),
                    o = n(380),
                    c = n(188),
                    u = {
                        blue: {
                            backgroundColor: "blue.1",
                            color: "blue.7"
                        },
                        green: {
                            backgroundColor: "success.1",
                            color: "success.7"
                        },
                        grey: {
                            backgroundColor: "gray.1",
                            color: "gray.7"
                        },
                        orange: {
                            backgroundColor: "warning.1",
                            color: "warning.7"
                        },
                        pink: {
                            backgroundColor: "purple.1",
                            color: "purple.7"
                        },
                        raw: {
                            backgroundColor: "brand.1",
                            color: "brand.7"
                        },
                        red: {
                            backgroundColor: "danger.1",
                            color: "danger.7"
                        }
                    },
                    d = ({
                        menu: e,
                        datastream: t,
                        requeueUrl: n,
                        refetchUrl: a,
                        downloadUrl: r,
                        exploreUrl: l,
                        isVisible: o
                    }) => i.createElement(s.Flex, {
                        opacity: o ? 1 : 0
                    }, i.createElement(s.Menu.Disclosure.Secondary, Object.assign({}, e, {
                        color: "brand.6",
                        size: "small",
                        paddingX: "xx-small"
                    }), i.createElement(s.Icon, {
                        size: "small",
                        name: "more-y"
                    })), i.createElement(s.Menu, Object.assign({}, e), t.stack.permissions.isDatastreamManager && i.createElement(i.Fragment, null, i.createElement(s.Menu.Item, Object.assign({}, e, {
                        as: "a",
                        href: n
                    }), "Requeue for Import"), i.createElement(s.Menu.Item, Object.assign({}, e, {
                        as: "a",
                        href: a
                    }), "Fetch again with same Time Range")), i.createElement(s.Menu.Item, Object.assign({}, e, {
                        as: "a",
                        href: r
                    }), "Download"), l && i.createElement(s.Menu.Item, Object.assign({}, e, {
                        as: "a",
                        href: l
                    }), "Open in Explore")));
                t.RecentActivityItem = ({
                    created: e,
                    datastream: t,
                    download_url: n,
                    filesize: a,
                    metadata: r,
                    tags: m = [],
                    name: p,
                    ncols: g,
                    nrows: h,
                    preview_url: f,
                    refetch_url: v,
                    explore_url: y,
                    dashboard_url: E,
                    requeue_url: M,
                    state_color: b,
                    state_label: _,
                    itemHeaderComponent: j
                }) => {
                    const I = s.Menu.useMenuState({
                            placement: "bottom-end"
                        }),
                        O = null === h ? [] : [h + " rows"],
                        x = null === g ? [] : [g + " columns"],
                        C = a ? ` (${o.formatBytes(a,1)})` : "",
                        S = O.concat(x).join(", ") + C,
                        w = m.length > 0;
                    return i.createElement(c.HoverSensor, null, ({
                        isHover: a
                    }) => i.createElement(s.Box, {
                        paddingBottom: w ? "x-small" : "small",
                        paddingTop: "small",
                        paddingX: "small"
                    }, i.createElement(s.StartEnd, {
                        height: "small",
                        marginBottom: "x-small"
                    }, i.createElement(s.Join, {
                        spacing: "x-small"
                    }, i.createElement(s.Tag, Object.assign({
                        size: "x-small"
                    }, u[b]), _), i.createElement(s.Text.Secondary, null, l.default(e).fromNow())), t && i.createElement(d, {
                        datastream: t,
                        refetchUrl: v,
                        requeueUrl: M,
                        downloadUrl: n,
                        exploreUrl: y,
                        menu: I,
                        isVisible: a || I.visible
                    })), i.createElement(s.Join, {
                        orientation: "vertical",
                        spacing: "xx-small",
                        block: !0
                    }, t && j && i.createElement(j, {
                        datastream: t
                    }), i.createElement(s.Truncate, null, i.createElement(s.Link, {
                        href: f
                    }, p)), i.createElement(s.Block, null, i.createElement(s.Text, {
                        color: "gray.9"
                    }, S)), E && r.adverity_client_name && i.createElement(s.Flex, {
                        justifyContent: "space-between"
                    }, i.createElement(s.Truncate, {
                        marginRight: "xx-small"
                    }, i.createElement(s.Link, {
                        href: E,
                        target: "_blank"
                    }, r.adverity_client_name))), w && i.createElement(s.Flex, {
                        flexWrap: "wrap"
                    }, m.concat(!E && r.adverity_client_name ? ["Client: " + r.adverity_client_name] : []).map(e => i.createElement(s.Tag, {
                        size: "small",
                        marginBottom: "x-small",
                        marginRight: "x-small",
                        key: e
                    }, i.createElement(s.Icon, {
                        name: "link"
                    }), e))))))
                }
            },
            1553: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(12);
                t.default = ({
                    url: e,
                    label: t
                }) => r.createElement(i.Text, {
                    size: "x-small"
                }, r.createElement(i.Link, {
                    href: e
                }, t))
            },
            1554: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(12),
                    l = n(1555),
                    s = n(1560);
                t.MetricValueBox = ({
                    name: e,
                    value: t,
                    series: n,
                    format: a
                }) => r.createElement(i.Box, {
                    height: "100%",
                    minWidth: 0
                }, r.createElement(i.Flex, {
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "small"
                }, r.createElement(i.Box, null, r.createElement(i.Truncate, null, r.createElement(i.Text, {
                    fontSize: "xx-small",
                    color: "gray.7"
                }, e)), r.createElement(i.Box, {
                    paddingTop: "x-small"
                }, r.createElement(i.Truncate, null, r.createElement(i.Text, {
                    color: "brand.5",
                    fontWeight: "semiBold",
                    fontSize: "large"
                }, s.formatValue(t, a))))), n && r.createElement(i.Box, {
                    height: "small"
                }, r.createElement(l.Chart, {
                    series: n,
                    formatter: s.getFormatter(a)
                }))))
            },
            1555: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    },
                    r = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = a(n(0)),
                    l = r(n(9)),
                    s = r(n(285)),
                    o = r(n(1559));
                t.Chart = ({
                    series: e,
                    formatter: t
                }) => i.createElement(s.default, {
                    config: {
                        chart: {
                            type: e.type,
                            backgroundColor: "none",
                            borderWidth: 0,
                            margin: 0
                        },
                        title: {
                            text: ""
                        },
                        credits: {
                            enabled: !1
                        },
                        xAxis: {
                            categories: e.data.map(({
                                date: e
                            }) => e),
                            labels: {
                                enabled: !1
                            },
                            title: {
                                text: null
                            },
                            startOnTick: !1,
                            endOnTick: !1,
                            tickPositions: [],
                            lineWidth: 0
                        },
                        yAxis: {
                            endOnTick: !1,
                            startOnTick: !1,
                            labels: {
                                enabled: !1
                            },
                            title: {
                                text: null
                            },
                            tickPositions: []
                        },
                        tooltip: {
                            shared: !0,
                            formatter() {
                                const {
                                    x: e,
                                    y: n
                                } = this;
                                return `${l.default.utc(e).format("YYYY-MM-DD")}: <b>${t(n)}</b>`
                            }
                        },
                        legend: {
                            enabled: !1
                        },
                        plotOptions: {
                            series: {
                                animation: !1,
                                color: "#DDE0E4",
                                marker: {
                                    enabled: !1
                                },
                                shadow: !1
                            }
                        },
                        series: [{
                            data: e.data.map(({
                                value: e
                            }) => e),
                            type: e.type,
                            lineColor: "#219B9C",
                            fillColor: {
                                linearGradient: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                                },
                                stops: [
                                    [0, "#C7E6E6"],
                                    [1, "rgba(199, 230, 230, 0)"]
                                ]
                            },
                            fillOpacity: .25
                        }]
                    },
                    height: 18,
                    className: o.default.highcharts
                })
            },
            1559: function(e, t, n) {
                e.exports = {
                    highcharts: "highcharts-1vXJh"
                }
            },
            1560: function(e, t, n) {
                "use strict";
                var a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(9)),
                    i = n(15);
                t.formatDuration = e => {
                    const t = r.default.duration(e, "seconds"),
                        n = Math.floor(t.asHours()),
                        a = t.minutes(),
                        i = t.seconds();
                    return n ? a ? `${n} h ${a} min` : n + " h" : a ? i ? `${a} min ${i} sec` : a + " min" : i + " sec"
                }, t.formatMetricValue = e => {
                    const t = Number.isInteger(e) ? 0 : 2;
                    return new Intl.NumberFormat("en-US", {
                        minimumFractionDigits: t,
                        maximumFractionDigits: t,
                        currency: "EUR",
                        style: "decimal"
                    }).format(e)
                };
                const l = {
                    duration: t.formatDuration
                };
                t.getFormatter = e => e ? l[e] : t.formatMetricValue, t.formatValue = (e, n) => {
                    const a = t.getFormatter(n);
                    return i.isNil(e) ? "â€”" : a(e)
                }
            },
            1561: function(e, t, n) {
                "use strict";
                var a = this && this.__awaiter || function(e, t, n, a) {
                        return new(n || (n = Promise))((function(r, i) {
                            function l(e) {
                                try {
                                    o(a.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function s(e) {
                                try {
                                    o(a.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function o(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(l, s)
                            }
                            o((a = a.apply(e, t || [])).next())
                        }))
                    },
                    r = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    },
                    i = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const l = n(12),
                    s = r(n(44)),
                    o = n(96),
                    c = n(697),
                    u = n(698),
                    d = n(286),
                    m = n(699),
                    p = i(n(0)),
                    g = n(63),
                    h = n(1562),
                    f = n(1565),
                    v = n(1572),
                    y = n(1578),
                    E = n(287);
                t.default = e => {
                    var t;
                    const [n, r] = p.useState(), [i, M] = p.useState(), {
                        setElement: b,
                        height: _
                    } = d.useContentHeight(), j = l.useMedia("medium"), I = l.useMedia("(min-width: 845px)"), O = (e, t) => j ? e : I && t ? t : 12, {
                        data: x
                    } = E.useDatastreamFetch(parseInt(e.match.params.datastream_id));
                    if (p.useEffect(() => {
                            a(void 0, void 0, void 0, (function*() {
                                const e = g.API_URLS.account,
                                    {
                                        data: t
                                    } = yield s.default.get(e);
                                r(t)
                            }))
                        }, []), !x || !n) return p.createElement(o.LoadingIndicator, null);
                    const C = `${g.API_URLS.extracts}?datastream_id=${x.id}`,
                        S = `${g.API_URLS.errors}?ack=false&datastream_id=${x.id}`,
                        w = `${g.API_URLS.jobs}?datastream_id=${x.id}`,
                        {
                            issues_url: D,
                            extracts_url: T
                        } = x,
                        N = `${g.API_URLS.datastream}${x.id}/stats/`,
                        k = null !== (t = null == i ? void 0 : i.getBoundingClientRect().height) && void 0 !== t ? t : 0,
                        P = Math.max(k, _);
                    return p.createElement(p.Fragment, null, p.createElement(l.Row, {
                        gutter: "medium",
                        marginBottom: "medium"
                    }, p.createElement(l.Column, {
                        span: O(9)
                    }, p.createElement(u.KpiBoxes, {
                        url: N
                    })), p.createElement(l.Column, {
                        span: O(3),
                        order: j ? 1 : -1
                    }, p.createElement(l.Flex, {
                        justifyContent: "flex-end"
                    }, x.actions.map(({
                        action: e,
                        url: t,
                        glyph: n
                    }) => p.createElement(l.Button, {
                        key: e,
                        as: "a",
                        href: t
                    }, n && p.createElement(l.Icon, {
                        name: n
                    }), p.createElement(l.Text, {
                        size: "medium"
                    }, e)))))), p.createElement(l.Row, {
                        ref: b,
                        gutter: "medium"
                    }, p.createElement(l.Column, {
                        span: O(3, 5),
                        marginBottom: "medium"
                    }, p.createElement(l.Join, {
                        ref: M,
                        block: !0,
                        spacing: "medium",
                        orientation: "vertical"
                    }, p.createElement(h.Destinations, {
                        datastream: x
                    }), p.createElement(f.Scheduling, {
                        datastream: x
                    }), p.createElement(v.TransformationScripts, {
                        datastream: x
                    }), p.createElement(y.SmartNamingConvention, {
                        datastream: x,
                        user: n
                    }))), p.createElement(l.Column, {
                        span: O(9, 7)
                    }, p.createElement(m.OverviewLanes, {
                        laneComponents: {
                            activityMonitor: p.createElement(c.ActivityMonitorLane, {
                                maxHeight: {
                                    large: P
                                },
                                sourceUrl: w,
                                itemHeaderComponent: null
                            }),
                            recentActivity: p.createElement(c.RecentActivityLane, {
                                maxHeight: {
                                    large: P
                                },
                                extractsUrl: T,
                                sourceUrl: C,
                                itemHeaderComponent: null
                            }),
                            issues: p.createElement(c.IssueLane, {
                                maxHeight: {
                                    large: P
                                },
                                issuesUrl: D,
                                sourceUrl: S,
                                itemHeaderComponent: null
                            })
                        },
                        order: n.ui_overview_lane_config_order
                    }))))
                }
            },
            1562: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(1563),
                    l = n(287);
                t.Destinations = ({
                    datastream: e
                }) => {
                    var t;
                    const [n] = l.useDatastreamPatch(e);
                    return r.createElement(i.DestinationStatus, {
                        hasSchemaMapping: e.has_schema_mapping,
                        wasFetched: !!e.last_fetch,
                        isInsightsMediaplan: e.is_insights_mediaplan,
                        schemaMappingUrl: e.schema_mapping_url,
                        isDestinationActive: "Live" === e.datatype,
                        onDestinationStatusToggle: () => n({
                            datatype: "Live" === e.datatype ? "Staging" : "Live"
                        }),
                        url: e.url,
                        activeDestination: e.active_destination,
                        workspaceSettingsUrl: e.stack.change_url,
                        isEditor: null === (t = e.stack.permissions) || void 0 === t ? void 0 : t.isDatastreamManager
                    })
                }
            },
            1563: function(e, t, n) {
                "use strict";
                var a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(12),
                    l = ({
                        schemaMappingUrl: e
                    }) => e ? r.default.createElement(i.Link, {
                        href: e
                    }, "Schema Mapping") : r.default.createElement(r.default.Fragment, null, "Schema Mapping"),
                    s = ({
                        workspaceSettingsUrl: e
                    }) => e ? r.default.createElement(i.Link, {
                        href: e
                    }, "Workspace settings") : r.default.createElement(r.default.Fragment, null, "Workspace settings"),
                    o = ({
                        wasFetched: e,
                        schemaMappingUrl: t
                    }) => r.default.createElement(i.Provider, {
                        theme: i.insightsTheme
                    }, r.default.createElement(i.Alert, null, r.default.createElement(i.Text, null, e ? r.default.createElement(r.default.Fragment, null, "This destination can only be enabled once a", " ", r.default.createElement(l, {
                        schemaMappingUrl: t
                    }), " has been configured.") : r.default.createElement(r.default.Fragment, null, "This destination can not be enabled yet. Please fetch your first data extract and configure", " ", r.default.createElement(l, {
                        schemaMappingUrl: t
                    }), ".")))),
                    c = ({
                        activeDestination: e,
                        isDestinationActive: t
                    }) => {
                        var n;
                        const a = r.default.createElement(i.Image, {
                            height: "48px",
                            alt: e.name,
                            src: e.logo_url,
                            css: t ? void 0 : {
                                filter: "grayscale(100%)"
                            },
                            title: e.link && t ? e.link.title : e.name
                        });
                        return e.link ? r.default.createElement(i.BlockLink, {
                            href: null === (n = e.link) || void 0 === n ? void 0 : n.url,
                            alignSelf: "center"
                        }, a) : r.default.createElement(i.Box, {
                            alignSelf: "center"
                        }, a)
                    };
                t.DestinationStatus = ({
                    hasSchemaMapping: e,
                    isInsightsMediaplan: t,
                    schemaMappingUrl: n,
                    isDestinationActive: a,
                    activeDestination: l,
                    onDestinationStatusToggle: u,
                    wasFetched: d,
                    workspaceSettingsUrl: m,
                    isEditor: p
                }) => {
                    const g = l && (e && l.is_schema_mapping_required || !l.is_schema_mapping_required || l.is_mediaplan_supported && t);
                    return r.default.createElement(i.BorderBox, {
                        borderRadius: 1,
                        borderColor: "gray.2",
                        backgroundColor: "white"
                    }, r.default.createElement(i.Flex, {
                        marginX: "small",
                        marginY: "x-small",
                        justifyContent: "space-between"
                    }, r.default.createElement(i.Text, {
                        size: "medium"
                    }, "Destination"), l && r.default.createElement(i.Flex, {
                        alignItems: "center"
                    }, r.default.createElement(i.Switch, {
                        disabled: !g || !p,
                        checked: a,
                        onChange: u,
                        size: "x-small"
                    }))), r.default.createElement(i.Separator, {
                        color: "gray.2"
                    }), r.default.createElement(i.Join, {
                        spacing: "small",
                        padding: "small",
                        orientation: "vertical"
                    }, l && r.default.createElement(c, {
                        activeDestination: l,
                        isDestinationActive: a
                    }), !l && r.default.createElement(i.Provider, {
                        theme: i.insightsTheme
                    }, r.default.createElement(i.Alert, null, "There is no destination assigned to this workspace yet. You can assign one by navigating to", " ", r.default.createElement(s, {
                        workspaceSettingsUrl: m
                    }), " in the administration area.")), !g && l && r.default.createElement(o, {
                        wasFetched: d,
                        schemaMappingUrl: n
                    })))
                }
            },
            1565: function(e, t, n) {
                "use strict";
                var a = this && this.__awaiter || function(e, t, n, a) {
                        return new(n || (n = Promise))((function(r, i) {
                            function l(e) {
                                try {
                                    o(a.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function s(e) {
                                try {
                                    o(a.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function o(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(l, s)
                            }
                            o((a = a.apply(e, t || [])).next())
                        }))
                    },
                    r = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    },
                    i = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const l = r(n(0)),
                    s = n(12),
                    o = i(n(9)),
                    c = i(n(44)),
                    u = n(188),
                    d = n(700),
                    m = n(287),
                    p = n(1566),
                    g = {
                        id: null,
                        cron_preset: "CRON_EVERY_DAY",
                        cron_interval_start: 1,
                        cron_start_of_day: "00:00:00",
                        time_range_preset: 13,
                        delta_type: 1,
                        delta_interval: 1,
                        delta_start_of_day: "00:00:00",
                        delta_interval_start: 1,
                        fixed_start: null,
                        fixed_end: null,
                        offset_days: 0
                    },
                    h = ({
                        entry: e,
                        onEdit: t,
                        onDelete: n
                    }) => l.createElement(u.HoverSensor, null, ({
                        isHover: a
                    }) => l.createElement(s.StartEnd, {
                        backgroundColor: "gray.0",
                        alignItems: "center",
                        height: "medium"
                    }, l.createElement(s.Truncate, {
                        marginX: "xx-small"
                    }, l.createElement(s.Text, null, d.getLabelForOption(e))), a && l.createElement(s.Flex, {
                        flexWrap: "nowrap"
                    }, l.createElement(s.Button.Minimal, {
                        size: "small",
                        onClick: () => t(e)
                    }, l.createElement(s.Icon, {
                        name: "edit"
                    })), l.createElement(s.Button.Minimal, {
                        size: "small",
                        onClick: () => n(e)
                    }, l.createElement(s.Icon, {
                        name: "delete"
                    }))))),
                    f = ({
                        info: e,
                        children: t
                    }) => l.createElement(s.Join, {
                        spacing: "xx-small"
                    }, l.createElement(s.Text, null, t), l.createElement(s.Text, {
                        color: "gray.7"
                    }, e));
                t.Scheduling = ({
                    datastream: e
                }) => {
                    const [t, n] = l.useState({
                        isScheduleModalOpen: !1,
                        selectedEntry: null,
                        schedulingOptions: [],
                        timeRangeOptions: []
                    }), [r] = m.useDatastreamPatch(e), i = e => n(t => Object.assign(Object.assign({}, t), e)), u = () => {
                        t.schedulingOptions.length ? i({
                            isScheduleModalOpen: !0
                        }) : c.default.request({
                            url: e.url + "schedules/",
                            method: "OPTIONS"
                        }).then(({
                            data: {
                                actions: {
                                    POST: {
                                        time_range_preset: e,
                                        cron_preset: t
                                    }
                                }
                            }
                        }) => {
                            i({
                                isScheduleModalOpen: !0,
                                schedulingOptions: t.choices,
                                timeRangeOptions: e.choices
                            })
                        })
                    }, v = () => {
                        i({
                            selectedEntry: null,
                            isScheduleModalOpen: !1
                        })
                    }, y = e => a(void 0, void 0, void 0, (function*() {
                        yield r({
                            schedules: e
                        }), v()
                    })), E = e => {
                        i({
                            selectedEntry: e
                        }), u()
                    }, M = t => {
                        const n = e.schedules.filter(e => e.id !== t.id);
                        y(n)
                    };
                    return l.createElement(s.BorderBox, {
                        borderRadius: 1,
                        borderColor: "gray.2",
                        backgroundColor: "white"
                    }, l.createElement(s.Flex, {
                        marginX: "small",
                        marginY: "x-small",
                        justifyContent: "space-between"
                    }, l.createElement(s.Text, {
                        size: "medium"
                    }, "Scheduling"), l.createElement(s.Flex, {
                        alignItems: "center"
                    }, l.createElement(s.Switch, {
                        disabled: !(null == e ? void 0 : e.stack.permissions.isDatastreamManager),
                        checked: e.enabled,
                        onChange: () => r({
                            enabled: !e.enabled
                        }),
                        size: "x-small"
                    }))), l.createElement(s.Separator, {
                        color: "gray.2"
                    }), l.createElement(s.Join, {
                        padding: "small",
                        orientation: "vertical",
                        spacing: "small"
                    }, l.createElement(s.Join, {
                        spacing: "xx-small",
                        orientation: "vertical"
                    }, l.createElement(f, {
                        info: e.last_fetch ? o.default(e.last_fetch).fromNow() : "n/a"
                    }, "Last Fetch"), l.createElement(f, {
                        info: e.enabled && e.next_run ? o.default(e.next_run).fromNow() : "Manual"
                    }, "Next Fetch")), e.enabled && l.createElement(l.Fragment, null, l.createElement(s.Button.Secondary, {
                        size: "small",
                        onClick: () => {
                            i({
                                selectedEntry: g
                            }), u()
                        },
                        disabled: !(null == e ? void 0 : e.stack.permissions.isDatastreamManager)
                    }, l.createElement(s.Icon, {
                        name: "time"
                    }), "Add Schedule"), t.isScheduleModalOpen && t.selectedEntry && l.createElement(p.SchedulingEditorModal, {
                        schedulingOptions: t.schedulingOptions,
                        timeRangeOptions: t.timeRangeOptions,
                        scheduleEntry: t.selectedEntry,
                        datastream: e,
                        onSave: t => {
                            const n = null === t.id ? [...e.schedules, t] : e.schedules.map(e => e.id === t.id ? t : e);
                            y(n)
                        },
                        onClose: v
                    }))), e.enabled && e.schedules.length > 0 && l.createElement(l.Fragment, null, l.createElement(s.Separator, {
                        color: "gray.1"
                    }), l.createElement(s.Box, {
                        padding: "small"
                    }, l.createElement(s.Text, {
                        size: "small",
                        color: "gray.6",
                        marginBottom: "x-small"
                    }, "Current schedules"), l.createElement(s.Join, {
                        block: !0,
                        spacing: "xx-small",
                        orientation: "vertical"
                    }, e.schedules.map(e => l.createElement(h, {
                        key: d.getSchedulingKey(e),
                        entry: e,
                        onEdit: E,
                        onDelete: M
                    }))))))
                }
            },
            1566: function(e, t, n) {
                "use strict";
                var a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = a(n(9)),
                    l = a(n(372)),
                    s = a(n(282)),
                    o = n(12),
                    c = n(256),
                    u = a(n(1567)),
                    d = n(700),
                    m = e => {
                        const {
                            entry: t,
                            timeRangeOptions: n,
                            schedulingOptions: a
                        } = e, l = a.map(({
                            display_name: e,
                            value: t
                        }) => ({
                            label: e,
                            value: t
                        })), s = n.map(({
                            display_name: e,
                            value: t
                        }) => ({
                            label: e,
                            value: t
                        })), m = t.cron_preset && t.cron_preset.includes("WEEK"), p = t.cron_preset && t.cron_preset.includes("MONTH"), g = t.cron_preset && -1 !== t.cron_preset.search(/DAY|WEEK|MONTH/);
                        return r.default.createElement("div", {
                            className: "schedulingEntry"
                        }, r.default.createElement("div", null, r.default.createElement("div", {
                            className: "flex justify-between cronSettings"
                        }, r.default.createElement("div", {
                            className: "cronType"
                        }, r.default.createElement("div", {
                            className: "inputLabel"
                        }, "Frequency"), r.default.createElement(o.Select, {
                            value: l.find(({
                                value: e
                            }) => e === t.cron_preset),
                            onChange: n => {
                                e.onChangeEntry(Object.assign(Object.assign({}, t), {
                                    cron_preset: n.value
                                }))
                            },
                            options: l,
                            size: "small"
                        })), m && r.default.createElement("div", {
                            className: "cronIntervalStart"
                        }, r.default.createElement("div", {
                            className: "inputLabel"
                        }, "Weekday"), r.default.createElement(o.Select, {
                            value: d.findInStartOfWeek(t.cron_interval_start),
                            onChange: n => {
                                e.onChangeEntry(Object.assign(Object.assign({}, t), {
                                    cron_interval_start: n ? n.value : 1
                                }))
                            },
                            options: d.startOfWeekOptions,
                            size: "small"
                        })), p && r.default.createElement("div", {
                            className: "cronIntervalStart"
                        }, r.default.createElement("div", {
                            className: "inputLabel"
                        }, "Day of Month"), r.default.createElement(o.Select, {
                            value: d.dayOfMonthOptions.find(({
                                value: e
                            }) => e === t.cron_interval_start),
                            onChange: n => {
                                e.onChangeEntry(Object.assign(Object.assign({}, t), {
                                    cron_interval_start: n ? n.value : 1
                                }))
                            },
                            options: d.dayOfMonthOptions,
                            size: "small"
                        })), g && r.default.createElement("div", {
                            className: "cronStartOfDay"
                        }, r.default.createElement("div", {
                            className: "inputLabel"
                        }, "Time of day ", r.default.createElement("span", {
                            className: "utc"
                        }, "UTC")), r.default.createElement(c.TimePicker, {
                            className: "timePicker",
                            value: t.cron_start_of_day,
                            onChange: n => e.onChangeEntry(Object.assign(Object.assign({}, t), {
                                cron_start_of_day: "" + n
                            }))
                        }))), r.default.createElement("div", {
                            className: "flex justify-between timeRangeSettings"
                        }, r.default.createElement("div", {
                            className: "timeRangeType"
                        }, r.default.createElement("div", {
                            className: "inputLabel"
                        }, "Time range"), r.default.createElement(o.Select, {
                            value: s.find(({
                                value: e
                            }) => e === t.time_range_preset),
                            onChange: n => {
                                e.onChangeEntry(Object.assign(Object.assign({}, t), {
                                    time_range_preset: n ? n.value : 1
                                }))
                            },
                            options: s,
                            size: "small"
                        })), 0 === t.time_range_preset ? r.default.createElement(r.default.Fragment, null, r.default.createElement("div", {
                            className: "fixedStartDate"
                        }, r.default.createElement("div", {
                            className: "inputLabel"
                        }, "Start date ", r.default.createElement("span", {
                            className: "utc"
                        }, "UTC")), r.default.createElement(u.default, {
                            value: t.fixed_start || "",
                            onChange: n => {
                                e.onChangeEntry(Object.assign(Object.assign({}, t), {
                                    fixed_start: n ? i.default(n).format("YYYY-MM-DD") : null
                                }))
                            }
                        })), r.default.createElement("div", {
                            className: "fixedEndDate"
                        }, r.default.createElement("div", {
                            className: "inputLabel"
                        }, "End date ", r.default.createElement("span", {
                            className: "utc"
                        }, "UTC")), r.default.createElement(u.default, {
                            value: t.fixed_end || "",
                            onChange: n => {
                                e.onChangeEntry(Object.assign(Object.assign({}, t), {
                                    fixed_end: n ? i.default(n).format("YYYY-MM-DD") : null
                                }))
                            }
                        }))) : r.default.createElement("div", {
                            className: "offsetDays"
                        }, r.default.createElement("div", {
                            className: "inputLabel"
                        }, "Offset to Execution Time"), r.default.createElement(c.Number, {
                            value: t.offset_days,
                            min: -30,
                            max: 365,
                            inputAppend: "Days:",
                            onChange: n => {
                                e.onChangeEntry(Object.assign(Object.assign({}, t), {
                                    offset_days: n
                                }))
                            }
                        })))))
                    };
                class p extends r.default.PureComponent {
                    constructor() {
                        super(...arguments), this.state = {
                            scheduleEntry: this.props.scheduleEntry
                        }, this.onChangeEntry = e => {
                            this.setState(() => ({
                                scheduleEntry: e
                            }))
                        }
                    }
                    isDuplicateEntry() {
                        const {
                            datastream: e
                        } = this.props, {
                            scheduleEntry: t
                        } = this.state, n = d.getSchedulingKey(t);
                        return -1 !== e.schedules.findIndex(e => d.getSchedulingKey(e) === n && e.id !== t.id)
                    }
                    render() {
                        const {
                            schedulingOptions: e,
                            timeRangeOptions: t
                        } = this.props, n = this.isDuplicateEntry(), a = !n;
                        return r.default.createElement(l.default, {
                            onHide: this.props.onClose,
                            show: !0
                        }, r.default.createElement(l.default.Header, {
                            closeButton: !0
                        }, r.default.createElement(l.default.Title, {
                            id: "contained-modal-title"
                        }, "Schedule")), r.default.createElement(l.default.Body, null, r.default.createElement("div", null, r.default.createElement(m, {
                            schedulingOptions: e,
                            timeRangeOptions: t,
                            onChangeEntry: e => this.onChangeEntry(e),
                            entry: this.state.scheduleEntry
                        }))), r.default.createElement(l.default.Footer, null, n ? r.default.createElement("span", {
                            className: "duplicateWarning pull-left"
                        }, r.default.createElement("span", {
                            className: "label label-warning"
                        }, "Duplicate Entry"), " Please adjust settings to save this entry") : null, r.default.createElement(s.default, {
                            bsStyle: "default",
                            onClick: this.props.onClose
                        }, "Cancel"), r.default.createElement(s.default, {
                            bsStyle: "primary",
                            disabled: !a,
                            onClick: () => this.props.onSave(this.state.scheduleEntry)
                        }, "Apply")))
                    }
                }
                t.SchedulingEditorModal = p
            },
            1567: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    },
                    r = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = a(n(0)),
                    l = r(n(9)),
                    s = r(n(4)),
                    o = n(12),
                    c = r(n(1568));
                n(1570);
                const u = r(n(1571));
                class d extends i.PureComponent {
                    constructor() {
                        super(...arguments), this.handleChange = (e, t) => this.props.onChange(t.startDate), this.handleRemoveDate = () => this.props.onChange(null)
                    }
                    render() {
                        const {
                            value: e,
                            min: t,
                            max: n,
                            format: a = "YYYY-MM-DD",
                            isClearable: r
                        } = this.props;
                        return i.createElement(o.Relative, null, i.createElement(c.default, {
                            startDate: e || void 0,
                            minDate: t || void 0,
                            maxDate: n || void 0,
                            onApply: this.handleChange,
                            linkedCalendars: !1,
                            locale: {
                                format: a,
                                firstDay: 1
                            },
                            containerStyles: {
                                width: "100%",
                                position: "relative"
                            },
                            showDropdowns: !0,
                            autoUpdateInput: !0,
                            singleDatePicker: !0,
                            autoApply: !0,
                            showWeekNumbers: !0
                        }, i.createElement("div", {
                            className: s.default("form-control", u.default.fakeInput)
                        }, i.createElement("div", null, e ? l.default(e).format(a) : null))), i.createElement("div", {
                            className: u.default.calendarIconPositioning
                        }, e && r ? i.createElement(o.Icon, {
                            name: "close",
                            size: "small",
                            onClick: this.handleRemoveDate
                        }) : i.createElement(o.Icon, {
                            name: "calendar",
                            size: "small"
                        })))
                    }
                }
                t.default = d
            },
            1571: function(e, t, n) {
                e.exports = {
                    fakeInput: "fakeInput-2FPfk",
                    calendarIconPositioning: "calendarIconPositioning-2Hvd8"
                }
            },
            1572: function(e, t, n) {
                "use strict";
                var a = this && this.__awaiter || function(e, t, n, a) {
                        return new(n || (n = Promise))((function(r, i) {
                            function l(e) {
                                try {
                                    o(a.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function s(e) {
                                try {
                                    o(a.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function o(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(l, s)
                            }
                            o((a = a.apply(e, t || [])).next())
                        }))
                    },
                    r = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    },
                    i = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const l = r(n(0)),
                    s = n(228),
                    o = n(15),
                    c = n(12),
                    u = i(n(44)),
                    d = i(n(1573)),
                    m = n(288),
                    p = n(1574),
                    g = n(1577),
                    h = n(287),
                    f = s.SortableHandle(() => l.createElement(c.Icon, {
                        size: "small",
                        padding: "xx-small",
                        name: "drag",
                        flexShrink: 0,
                        css: {
                            cursor: "grab"
                        }
                    })),
                    v = {
                        background: `url(${d.default})`
                    },
                    y = s.SortableElement(({
                        change_url: e,
                        name: t,
                        numbering: n,
                        isEditing: a,
                        isEditable: r,
                        onDelete: i,
                        onSummaryClick: s,
                        id: o,
                        is_smart_naming_convention: u
                    }) => {
                        const d = u ? n + ". Smart Naming Convention" : `${n}. ${t}`,
                            m = u ? "brand.0" : "gray.0",
                            p = u ? "brand.5" : void 0,
                            g = u ? {
                                onClick: s
                            } : {
                                href: e
                            };
                        return l.createElement(c.Join, {
                            block: !0,
                            orientation: "horizontal",
                            paddingX: "xx-small",
                            alignItems: "center",
                            backgroundColor: m
                        }, a && l.createElement(f, null), l.createElement(c.Box, {
                            css: {
                                overflow: "hidden"
                            },
                            flexGrow: 1
                        }, l.createElement(c.Truncate, null, r ? l.createElement(c.Link, Object.assign({
                            color: p
                        }, g), d) : l.createElement(c.Text, {
                            color: p
                        }, d))), a && l.createElement(c.Button.Minimal, {
                            size: "small",
                            onClick: () => i(o)
                        }, l.createElement(c.Icon, {
                            name: "delete"
                        })), !a && u && l.createElement(c.Box, {
                            width: 16,
                            height: 16,
                            css: v
                        }))
                    }),
                    E = s.SortableContainer(({
                        createTransformationScriptUrl: e,
                        isDatastreamManager: t,
                        isLoading: n,
                        onChange: r,
                        selectedTransformers: i,
                        transformers: s,
                        datastream: d
                    }) => {
                        const [h, f] = l.useState(!1), [v, E] = l.useState(), [M, b] = l.useState(), _ = o.differenceBy(s, i, "id"), j = _.length > 0 ? "Add transformation scripts" : "No scripts available", I = n || 0 === _.length, O = () => a(void 0, void 0, void 0, (function*() {
                            if (d.smart_naming_convention) {
                                const {
                                    data: e
                                } = yield u.default.get(d.smart_naming_convention);
                                b(Object.assign({}, e))
                            }
                        }));
                        return l.createElement(c.BorderBox, {
                            borderRadius: 1,
                            borderColor: "gray.2",
                            backgroundColor: "white"
                        }, l.createElement(m.DialogWindow, {
                            title: "Warning",
                            visible: !!v,
                            onClose: () => E(void 0),
                            actionButtons: l.createElement(l.Fragment, null, l.createElement(c.Button.Secondary, {
                                onClick: () => E(void 0)
                            }, "Cancel"), l.createElement(c.Button, {
                                onClick: () => {
                                    r(i, null == v ? void 0 : v.id), E(void 0)
                                }
                            }, "Yes"))
                        }, "Are you sure you want to delete Smart Naming Convention?"), M && l.createElement(p.SmartNamingConventionModal, {
                            column: M.column_name,
                            splitLogic: M.delimiters,
                            columnNames: M.mapping_names,
                            emailForError: M.email_for_error,
                            raiseForWarning: M.raise_for_warning,
                            emailForWarning: M.email_for_warning,
                            warnings: M.warn_for_rules,
                            onClose: () => b(void 0)
                        }), l.createElement(c.Text, {
                            marginX: "small",
                            marginY: "x-small",
                            size: "medium"
                        }, "Transformations"), l.createElement(c.Separator, {
                            color: "gray.2"
                        }), t && (h ? l.createElement(c.Box, {
                            backgroundColor: "gray.0"
                        }, l.createElement(c.StartEnd, {
                            priority: "start",
                            spacing: "x-small",
                            padding: "small"
                        }, l.createElement(g.ScriptsCombobox, {
                            unselectedTransformers: _,
                            selectedTransformers: i,
                            onChange: r,
                            isDisabled: I,
                            placeholder: j
                        }), l.createElement(c.Box, {
                            marginLeft: "x-small"
                        }, l.createElement(c.Button, {
                            size: "small",
                            onClick: () => f(!1)
                        }, l.createElement(c.Icon, {
                            name: "check"
                        }))))) : l.createElement(c.Join, {
                            spacing: "x-small",
                            padding: "small"
                        }, l.createElement(c.Button.Secondary, {
                            as: "a",
                            href: e,
                            size: "small"
                        }, l.createElement(c.Icon, {
                            name: "plus"
                        }), "Create script"), l.createElement(c.Button.Secondary, {
                            size: "small",
                            onClick: () => f(!0)
                        }, l.createElement(c.Icon, {
                            name: "edit"
                        }), "Edit scripts"))), i.length > 0 && l.createElement(c.Provider, {
                            theme: c.presenseTheme
                        }, l.createElement(c.Separator, {
                            color: "gray.2"
                        }), l.createElement(c.Join, {
                            block: !0,
                            spacing: "xx-small",
                            orientation: "vertical",
                            padding: "small"
                        }, i.map((e, n) => l.createElement(y, Object.assign({}, e, {
                            index: n,
                            isEditing: h,
                            isEditable: t,
                            key: e.id,
                            numbering: n + 1,
                            onDelete: () => {
                                var t;
                                (t = e).is_smart_naming_convention ? E(t) : r(i, t.id)
                            },
                            onSummaryClick: O
                        }))))))
                    }),
                    M = e => {
                        const {
                            selectedTransformers: t,
                            onChange: n,
                            stackId: r,
                            datastream: i
                        } = e, [o, c] = l.useState([]);
                        l.useEffect(() => {
                            a(void 0, void 0, void 0, (function*() {
                                const {
                                    data: e
                                } = yield u.default.get("/api/transformer/", {
                                    params: {
                                        page_size: 2e3,
                                        stack_id: r
                                    }
                                });
                                c(e.results)
                            }))
                        }, [r]);
                        return l.createElement(E, Object.assign({}, e, {
                            isLoading: !o,
                            lockAxis: "y",
                            onSortEnd: ({
                                oldIndex: e,
                                newIndex: a
                            }) => n(s.arrayMove(t, e, a)),
                            transformers: o,
                            datastream: i,
                            useDragHandle: !0
                        }))
                    };
                t.TransformationScripts = ({
                    datastream: e
                }) => {
                    const t = "/transformer/transformerconfig/add/?datastream_id=" + e.id,
                        [n] = h.useDatastreamTransformersPatch(e);
                    return l.createElement(M, {
                        onChange: (e, t) => {
                            n(t ? e.filter(({
                                id: e
                            }) => e !== t) : e)
                        },
                        selectedTransformers: e.transformers,
                        isDatastreamManager: e.stack.permissions.isDatastreamManager,
                        stackId: e.stack.id,
                        createTransformationScriptUrl: t,
                        datastream: e
                    })
                }
            },
            1573: function(e, t, n) {
                "use strict";
                n.r(t), n.d(t, "ReactComponent", (function() {
                    return l
                }));
                var a = n(0);

                function r() {
                    return (r = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }).apply(this, arguments)
                }
                var i = a.createElement("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, a.createElement("path", {
                    fill: "#CBADF6",
                    d: "M5.293 3.394C6.52 2.684 7.756 2 7.861 2c.02 0 .085.027.185.075.407.197 1.397.75 2.382 1.32L7.86 4.878 5.293 3.394z"
                }), a.createElement("path", {
                    fill: "#E2D1FA",
                    d: "M5.264 9.387l-2.489 1.44c-.052-.09-.079-1.506-.079-2.925l2.568 1.485z"
                }), a.createElement("path", {
                    fill: "#8C49EB",
                    d: "M10.428 3.394c1.23.712 2.446 1.445 2.518 1.548l-2.489 1.44L7.861 4.88l1.298-.75 1.269-.735z"
                }), a.createElement("path", {
                    fill: "#4C2881",
                    d: "M12.946 4.942c.052.115.078 1.517.079 2.925l-2.568-1.485 2.489-1.44z"
                }), a.createElement("path", {
                    fill: "#773EC7",
                    d: "M12.946 10.827c-.053.092-1.28.832-2.518 1.548L7.86 10.89l2.596-1.503 2.489 1.44z"
                }), a.createElement("path", {
                    fill: "#4C2881",
                    d: "M13.024 7.902c0 1.41-.026 2.812-.078 2.925l-2.489-1.44 2.567-1.485z"
                }), a.createElement("path", {
                    fill: "#CBADF6",
                    d: "M7.861 7.884L5.264 9.387 2.667 7.884l2.597-1.502z"
                }), a.createElement("path", {
                    fill: "#AE7FF1",
                    d: "M10.457 9.387L7.861 10.89 5.264 9.387l2.597-1.503z"
                }), a.createElement("path", {
                    fill: "#A977F0",
                    d: "M10.428 12.375c-1.227.71-2.463 1.394-2.567 1.394-.105 0-1.34-.684-2.568-1.394l2.568-1.485 2.567 1.485z"
                }), a.createElement("path", {
                    fill: "#773EC7",
                    d: "M13.025 7.867v.035l-2.568 1.485-2.596-1.503 2.596-1.502 2.568 1.485z"
                }), a.createElement("path", {
                    fill: "#CBADF6",
                    d: "M2.775 10.827l2.489-1.44L7.86 10.89l-2.568 1.485c-1.227-.71-2.446-1.445-2.518-1.548z"
                }), a.createElement("path", {
                    fill: "#AE7FF1",
                    d: "M7.86 4.869l2.593 1.51L7.86 7.89l-.004-.003.005-.002-2.597-1.502L7.86 4.87z"
                }), a.createElement("path", {
                    fill: "#E2D1FA",
                    d: "M2.696 7.867l.005-.996.064-1.877.01-.052 2.489 1.44.208-.12-2.776 1.605z"
                }), a.createElement("path", {
                    fill: "#DAC5F8",
                    d: "M5.293 3.394L7.861 4.88 5.264 6.382l-2.489-1.44c.052-.091 1.281-.832 2.518-1.548z"
                }));

                function l(e) {
                    return a.createElement("svg", r({
                        width: 16,
                        height: 16
                    }, e), i)
                }
                t.default = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjQ0JBREY2IiBkPSJNNS4yOTMgMy4zOTRDNi41MiAyLjY4NCA3Ljc1NiAyIDcuODYxIDJjLjAyIDAgLjA4NS4wMjcuMTg1LjA3NS40MDcuMTk3IDEuMzk3Ljc1IDIuMzgyIDEuMzJMNy44NiA0Ljg3OCA1LjI5MyAzLjM5NHoiLz48cGF0aCBmaWxsPSIjRTJEMUZBIiBkPSJNNS4yNjQgOS4zODdsLTIuNDg5IDEuNDRjLS4wNTItLjA5LS4wNzktMS41MDYtLjA3OS0yLjkyNWwyLjU2OCAxLjQ4NXoiLz48cGF0aCBmaWxsPSIjOEM0OUVCIiBkPSJNMTAuNDI4IDMuMzk0YzEuMjMuNzEyIDIuNDQ2IDEuNDQ1IDIuNTE4IDEuNTQ4bC0yLjQ4OSAxLjQ0TDcuODYxIDQuODhsMS4yOTgtLjc1IDEuMjY5LS43MzV6Ii8+PHBhdGggZmlsbD0iIzRDMjg4MSIgZD0iTTEyLjk0NiA0Ljk0MmMuMDUyLjExNS4wNzggMS41MTcuMDc5IDIuOTI1bC0yLjU2OC0xLjQ4NSAyLjQ4OS0xLjQ0eiIvPjxwYXRoIGZpbGw9IiM3NzNFQzciIGQ9Ik0xMi45NDYgMTAuODI3Yy0uMDUzLjA5Mi0xLjI4LjgzMi0yLjUxOCAxLjU0OEw3Ljg2IDEwLjg5bDIuNTk2LTEuNTAzIDIuNDg5IDEuNDR6Ii8+PHBhdGggZmlsbD0iIzRDMjg4MSIgZD0iTTEzLjAyNCA3LjkwMmMwIDEuNDEtLjAyNiAyLjgxMi0uMDc4IDIuOTI1bC0yLjQ4OS0xLjQ0IDIuNTY3LTEuNDg1eiIvPjxwYXRoIGZpbGw9IiNDQkFERjYiIGQ9Ik03Ljg2MSA3Ljg4NEw1LjI2NCA5LjM4NyAyLjY2NyA3Ljg4NGwyLjU5Ny0xLjUwMnoiLz48cGF0aCBmaWxsPSIjQUU3RkYxIiBkPSJNMTAuNDU3IDkuMzg3TDcuODYxIDEwLjg5IDUuMjY0IDkuMzg3bDIuNTk3LTEuNTAzeiIvPjxwYXRoIGZpbGw9IiNBOTc3RjAiIGQ9Ik0xMC40MjggMTIuMzc1Yy0xLjIyNy43MS0yLjQ2MyAxLjM5NC0yLjU2NyAxLjM5NC0uMTA1IDAtMS4zNC0uNjg0LTIuNTY4LTEuMzk0bDIuNTY4LTEuNDg1IDIuNTY3IDEuNDg1eiIvPjxwYXRoIGZpbGw9IiM3NzNFQzciIGQ9Ik0xMy4wMjUgNy44Njd2LjAzNWwtMi41NjggMS40ODUtMi41OTYtMS41MDMgMi41OTYtMS41MDIgMi41NjggMS40ODV6Ii8+PHBhdGggZmlsbD0iI0NCQURGNiIgZD0iTTIuNzc1IDEwLjgyN2wyLjQ4OS0xLjQ0TDcuODYgMTAuODlsLTIuNTY4IDEuNDg1Yy0xLjIyNy0uNzEtMi40NDYtMS40NDUtMi41MTgtMS41NDh6Ii8+PHBhdGggZmlsbD0iI0FFN0ZGMSIgZD0iTTcuODYgNC44NjlsMi41OTMgMS41MUw3Ljg2IDcuODlsLS4wMDQtLjAwMy4wMDUtLjAwMi0yLjU5Ny0xLjUwMkw3Ljg2IDQuODd6Ii8+PHBhdGggZmlsbD0iI0UyRDFGQSIgZD0iTTIuNjk2IDcuODY3bC4wMDUtLjk5Ni4wNjQtMS44NzcuMDEtLjA1MiAyLjQ4OSAxLjQ0LjIwOC0uMTItMi43NzYgMS42MDV6Ii8+PHBhdGggZmlsbD0iI0RBQzVGOCIgZD0iTTUuMjkzIDMuMzk0TDcuODYxIDQuODggNS4yNjQgNi4zODJsLTIuNDg5LTEuNDRjLjA1Mi0uMDkxIDEuMjgxLS44MzIgMi41MTgtMS41NDh6Ii8+PC9nPjwvc3ZnPgo="
            },
            1574: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    },
                    r = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = a(n(0)),
                    l = n(12),
                    s = r(n(379)),
                    o = n(701);
                t.SmartNamingConventionModal = ({
                    column: e,
                    splitLogic: t,
                    columnNames: n,
                    emailForError: a,
                    raiseForWarning: r,
                    emailForWarning: c,
                    warnings: u,
                    onClose: d
                }) => i.createElement(s.default, {
                    show: !0,
                    title: "Smart Naming Conventions",
                    onCloseModal: d
                }, i.createElement(l.Join, {
                    block: !0,
                    orientation: "vertical",
                    spacing: "medium"
                }, i.createElement(l.Heading, {
                    fontSize: "small"
                }, "Summary"), i.createElement(l.Text, null, "You can review your setup below."), i.createElement(l.Join, {
                    display: "block",
                    orientation: "vertical",
                    spacing: "medium",
                    maxHeight: "50vh",
                    overflow: "scroll"
                }, i.createElement(o.SmartNamingConventionSummary, {
                    column: e,
                    splitLogic: t.map(e => `"${e}"`),
                    columnNames: n,
                    emailForError: a,
                    raiseForWarning: r,
                    emailForWarning: c,
                    warnings: u
                }))))
            },
            1575: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(12);
                t.Section = ({
                    title: e,
                    subtitle: t,
                    children: n
                }) => r.createElement(i.Join, {
                    block: !0,
                    orientation: "vertical",
                    spacing: "small"
                }, e && r.createElement(i.Join, {
                    orientation: "horizontal",
                    alignItems: "center",
                    spacing: "xx-small"
                }, r.createElement(i.Icon, {
                    name: "check",
                    size: "medium",
                    color: "brand.5"
                }), r.createElement(i.Heading, {
                    fontSize: "x-small"
                }, e)), t && r.createElement(i.Text, null, t), r.createElement(i.Join, {
                    block: !0,
                    orientation: "vertical",
                    spacing: "xx-small"
                }, n))
            },
            1576: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(12);
                t.SectionItem = ({
                    text: e
                }) => r.createElement(i.Box, {
                    backgroundColor: "gray.0",
                    paddingY: "xx-small",
                    paddingX: "x-small"
                }, r.createElement(i.Text, {
                    color: "gray.9"
                }, e))
            },
            1577: function(e, t, n) {
                "use strict";
                var a = this && this.__rest || function(e, t) {
                        var n = {};
                        for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var r = 0;
                            for (a = Object.getOwnPropertySymbols(e); r < a.length; r++) t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]])
                        }
                        return n
                    },
                    r = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = r(n(0)),
                    l = n(12),
                    s = n(286);
                t.ScriptsCombobox = ({
                    unselectedTransformers: e,
                    selectedTransformers: t,
                    onChange: n,
                    isDisabled: r,
                    placeholder: o
                }) => {
                    const [c, u] = l.useMeasure(), d = s.useWindowSize(), m = Math.max(...e.map(({
                        name: e
                    }) => e.length)), p = ((e, t) => {
                        const n = 8.5 * m,
                            a = .95 * e;
                        return n > a ? a : n < t ? t : n
                    })(d.width, u.width) + "px", g = ({
                        name: e
                    }, t) => !t || e.toLowerCase().includes(t.toLowerCase());
                    return i.createElement(l.Combobox, {
                        ref: c,
                        itemToString: () => "",
                        selectedItem: null,
                        onChange: e => n(t.concat(e)),
                        style: {
                            position: "static"
                        }
                    }, i.createElement(l.Combobox.Context.Consumer, null, ({
                        toggleMenu: t,
                        isOpen: n
                    }) => i.createElement(i.Fragment, null, i.createElement(l.Input.Sink, {
                        size: "small"
                    }, i.createElement(l.Combobox.Input, {
                        size: "small",
                        backgroundColor: "white",
                        placeholder: o,
                        onClick: t,
                        disabled: r
                    }), i.createElement(l.Combobox.Button, {
                        size: "small",
                        as: l.Input.Affix,
                        name: "chevron-down",
                        rotate: n ? 180 : 0
                    })), i.createElement(l.Combobox.Popover, {
                        width: "auto",
                        minWidth: p
                    }, i.createElement(l.Combobox.VirtualList, {
                        items: e,
                        match: g
                    }, e => {
                        var {
                            item: t
                        } = e, n = a(e, ["item"]);
                        return i.createElement(l.Combobox.Item, Object.assign({
                            item: t
                        }, n, {
                            size: "small",
                            display: "block",
                            width: "100%",
                            overflow: "hidden",
                            css: {
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap"
                            }
                        }), t.name)
                    })))))
                }
            },
            1578: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(12),
                    l = n(1579),
                    s = ({
                        displayMode: e
                    }) => {
                        switch (e) {
                            case "created":
                                return r.createElement(i.Badge, {
                                    variant: "success"
                                }, "Active");
                            case "creatable":
                            case "commingSoon":
                                return r.createElement(i.Badge, null, "Beta");
                            default:
                                return null
                        }
                    };
                t.SmartNamingConvention = ({
                    datastream: e,
                    user: t
                }) => {
                    const n = e.feature_smart_naming_convention ? e.smart_naming_convention ? "created" : e.has_schema_mapping_dimension ? "creatable" : "impossibleToCreate" : "commingSoon";
                    return r.createElement(i.Provider, {
                        theme: i.presenseTheme
                    }, r.createElement(i.BorderBox, {
                        borderRadius: 1,
                        borderColor: "gray.2",
                        backgroundColor: "white"
                    }, r.createElement(i.StartEnd, {
                        marginX: "small",
                        marginY: "x-small",
                        alignItems: "center"
                    }, r.createElement(i.Text, {
                        size: "medium"
                    }, "Smart Naming Conventions"), r.createElement(s, {
                        displayMode: n
                    })), r.createElement(i.Separator, {
                        color: "gray.2"
                    }), r.createElement(l.SmartNamingConventionContent, {
                        displayMode: n,
                        schemaMappingUrl: e.schema_mapping_url,
                        user: t
                    })))
                }
            },
            1579: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    },
                    r = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = a(n(0)),
                    l = n(12),
                    s = r(n(1580)),
                    o = n(377),
                    c = {
                        background: `url(${s.default}) -128px -16px no-repeat`
                    };
                t.SmartNamingConventionContent = ({
                    displayMode: e,
                    schemaMappingUrl: t,
                    user: n
                }) => {
                    const [a, r] = i.useState(!1);
                    return i.createElement(l.Box, {
                        spacing: "x-small",
                        padding: "small",
                        css: c
                    }, (() => {
                        switch (e) {
                            case "created":
                                return i.createElement(l.Text, {
                                    as: "ul",
                                    margin: 0,
                                    padding: 0,
                                    color: "gray.9"
                                }, i.createElement(l.Join, {
                                    orientation: "vertical",
                                    spacing: "x-small"
                                }, i.createElement(l.Text, {
                                    as: "li",
                                    display: "list-item",
                                    marginLeft: "small"
                                }, "Avoid changing transformations scripts that are placed before the Smart Naming Convention."), i.createElement(l.Text, {
                                    as: "li",
                                    display: "list-item",
                                    marginLeft: "small"
                                }, "You can delete the Smart Naming Convention by deleting it from the Transformation script panel above.")));
                            case "creatable":
                                return i.createElement(l.Button, {
                                    as: "a",
                                    href: "smart-naming-convention",
                                    size: "small"
                                }, i.createElement(l.Icon, {
                                    name: "plus"
                                }), "Add naming convention");
                            case "impossibleToCreate":
                                return i.createElement(l.Join, {
                                    orientation: "vertical",
                                    spacing: "small"
                                }, i.createElement(l.Text, {
                                    padding: "xx-small",
                                    backgroundColor: "blue.1",
                                    color: "blue.7"
                                }, "This feature can only be enabled once aÂ ", i.createElement(l.Link, {
                                    href: t
                                }, "Schema Mapping"), "Â has been configured."), i.createElement(l.Button, {
                                    disabled: !0,
                                    size: "small"
                                }, i.createElement(l.Icon, {
                                    name: "plus"
                                }), "Add naming convention"));
                            case "commingSoon":
                                return i.createElement(i.Fragment, null, i.createElement(l.Join, {
                                    spacing: "small",
                                    orientation: "vertical"
                                }, i.createElement(l.Text, null, "Proactively and intelligently monitor your naming conventions. Request access now and learn how you can increase data quality and trust."), i.createElement(l.Button, {
                                    size: "small",
                                    onClick: () => r(!0)
                                }, "Request Access")), i.createElement(o.ContactModal, {
                                    title: "Request Access to Smart Naming Conventions",
                                    additionalPayload: {
                                        action_type: "SNC_REQUEST"
                                    },
                                    email: n.email,
                                    subject: "Activate Smart Naming Convention",
                                    message: "Hello,\r\nI would like to talk about Smart Naming Conventions!",
                                    isOpen: a,
                                    onCancel: () => r(!1),
                                    onSubmit: () => r(!1)
                                }))
                        }
                    })())
                }
            },
            1580: function(e, t, n) {
                "use strict";
                n.r(t), n.d(t, "ReactComponent", (function() {
                    return s
                }));
                var a = n(0);

                function r() {
                    return (r = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }).apply(this, arguments)
                }
                var i = a.createElement("defs", null, a.createElement("linearGradient", {
                        x1: "16.399%",
                        y1: "55.931%",
                        x2: "138.708%",
                        y2: "54.372%",
                        id: "waves_svg__a"
                    }, a.createElement("stop", {
                        stopColor: "#F0E7FD",
                        offset: "0%"
                    }), a.createElement("stop", {
                        stopColor: "#8C49EB",
                        offset: "100%"
                    }))),
                    l = a.createElement("g", {
                        transform: "translate(39 19)",
                        stroke: "url(#waves_svg__a)",
                        strokeWidth: .5,
                        fill: "none",
                        fillRule: "evenodd",
                        opacity: .7
                    }, a.createElement("path", {
                        d: "M0 20.104c205.836-96.411 268.653 190.324 599 96.91M9 28.104c205.836-96.411 268.653 190.324 599 96.91M18 36.104c205.836-96.411 268.653 190.324 599 96.91M27 44.104c205.836-96.411 268.653 190.324 599 96.91M36 52.104c205.836-96.411 268.653 190.324 599 96.91M45 60.104c205.836-96.411 268.653 190.324 599 96.91M54 68.104c205.836-96.411 268.653 190.324 599 96.91M63 76.104c205.836-96.411 268.653 190.324 599 96.91M72 84.104c205.836-96.411 268.653 190.324 599 96.91M81 92.104c205.836-96.411 268.653 190.324 599 96.91M90 100.104c205.836-96.411 268.653 190.324 599 96.91M99 108.104c205.836-96.411 268.653 190.324 599 96.91M0 20.104c205.836-96.411 268.653 190.324 599 96.91M9 28.104c205.836-96.411 268.653 190.324 599 96.91M18 36.104c205.836-96.411 268.653 190.324 599 96.91M27 44.104c205.836-96.411 268.653 190.324 599 96.91M36 52.104c205.836-96.411 268.653 190.324 599 96.91M45 60.104c205.836-96.411 268.653 190.324 599 96.91M54 68.104c205.836-96.411 268.653 190.324 599 96.91M63 76.104c205.836-96.411 268.653 190.324 599 96.91M72 84.104c205.836-96.411 268.653 190.324 599 96.91M81 92.104c205.836-96.411 268.653 190.324 599 96.91M90 100.104c205.836-96.411 268.653 190.324 599 96.91M99 108.104c205.836-96.411 268.653 190.324 599 96.91M108 116.104c205.836-96.411 268.653 190.324 599 96.91M117 124.104c205.836-96.411 268.653 190.324 599 96.91M126 132.104c205.836-96.411 268.653 190.324 599 96.91M135 140.104c205.836-96.411 268.653 190.324 599 96.91M144 148.104c205.836-96.411 268.653 190.324 599 96.91M153 156.104c205.836-96.411 268.653 190.324 599 96.91M162 164.104c205.836-96.411 268.653 190.324 599 96.91M171 172.104c205.836-96.411 268.653 190.324 599 96.91M180 180.104c205.836-96.411 268.653 190.324 599 96.91M189 188.104c205.836-96.411 268.653 190.324 599 96.91M198 196.104c205.836-96.411 268.653 190.324 599 96.91M207 204.104c205.836-96.411 268.653 190.324 599 96.91M108 116.104c205.836-96.411 268.653 190.324 599 96.91M117 124.104c205.836-96.411 268.653 190.324 599 96.91M126 132.104c205.836-96.411 268.653 190.324 599 96.91M135 140.104c205.836-96.411 268.653 190.324 599 96.91M144 148.104c205.836-96.411 268.653 190.324 599 96.91M153 156.104c205.836-96.411 268.653 190.324 599 96.91M162 164.104c205.836-96.411 268.653 190.324 599 96.91M171 172.104c205.836-96.411 268.653 190.324 599 96.91M180 180.104c205.836-96.411 268.653 190.324 599 96.91M189 188.104c205.836-96.411 268.653 190.324 599 96.91M198 196.104c205.836-96.411 268.653 190.324 599 96.91M207 204.104c205.836-96.411 268.653 190.324 599 96.91"
                    }));

                function s(e) {
                    return a.createElement("svg", r({
                        width: 866,
                        height: 384
                    }, e), i, l)
                }
                t.default = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODY2cHgiIGhlaWdodD0iMzg0cHgiIHZpZXdCb3g9IjAgMCA4NjYgMzg0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA2My4xICg5MjQ1MikgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+QXJ0Ym9hcmRAMXg8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjE2LjM5OTAyODQlIiB5MT0iNTUuOTMwODA4NyUiIHgyPSIxMzguNzA4MTk3JSIgeTI9IjU0LjM3MjQ2MDklIiBpZD0ibGluZWFyR3JhZGllbnQtMSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGMEU3RkQiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzhDNDlFQiIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJBcnRib2FyZCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgb3BhY2l0eT0iMC43Ij4KICAgICAgICA8ZyBpZD0iR3JvdXAtMTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM5LjAwMDAwMCwgMTkuMDAwMDAwKSIgc3Ryb2tlPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIiBzdHJva2Utd2lkdGg9IjAuNSI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0wLDIwLjEwMzgxNDMgQzIwNS44MzYxNDIsLTc2LjMwNzA3MjEgMjY4LjY1MjYyMiwyMTAuNDI3ODk2IDU5OSwxMTcuMDE0MjM5IiBpZD0iUGF0aC03Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik05LDI4LjEwMzgxNDMgQzIxNC44MzYxNDIsLTY4LjMwNzA3MjEgMjc3LjY1MjYyMiwyMTguNDI3ODk2IDYwOCwxMjUuMDE0MjM5IiBpZD0iUGF0aC03Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOCwzNi4xMDM4MTQzIEMyMjMuODM2MTQyLC02MC4zMDcwNzIxIDI4Ni42NTI2MjIsMjI2LjQyNzg5NiA2MTcsMTMzLjAxNDIzOSIgaWQ9IlBhdGgtNyI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMjcsNDQuMTAzODE0MyBDMjMyLjgzNjE0MiwtNTIuMzA3MDcyMSAyOTUuNjUyNjIyLDIzNC40Mjc4OTYgNjI2LDE0MS4wMTQyMzkiIGlkPSJQYXRoLTciPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTM2LDUyLjEwMzgxNDMgQzI0MS44MzYxNDIsLTQ0LjMwNzA3MjEgMzA0LjY1MjYyMiwyNDIuNDI3ODk2IDYzNSwxNDkuMDE0MjM5IiBpZD0iUGF0aC03Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik00NSw2MC4xMDM4MTQzIEMyNTAuODM2MTQyLC0zNi4zMDcwNzIxIDMxMy42NTI2MjIsMjUwLjQyNzg5NiA2NDQsMTU3LjAxNDIzOSIgaWQ9IlBhdGgtNyI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNNTQsNjguMTAzODE0MyBDMjU5LjgzNjE0MiwtMjguMzA3MDcyMSAzMjIuNjUyNjIyLDI1OC40Mjc4OTYgNjUzLDE2NS4wMTQyMzkiIGlkPSJQYXRoLTciPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTYzLDc2LjEwMzgxNDMgQzI2OC44MzYxNDIsLTIwLjMwNzA3MjEgMzMxLjY1MjYyMiwyNjYuNDI3ODk2IDY2MiwxNzMuMDE0MjM5IiBpZD0iUGF0aC03Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik03Miw4NC4xMDM4MTQzIEMyNzcuODM2MTQyLC0xMi4zMDcwNzIxIDM0MC42NTI2MjIsMjc0LjQyNzg5NiA2NzEsMTgxLjAxNDIzOSIgaWQ9IlBhdGgtNyI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNODEsOTIuMTAzODE0MyBDMjg2LjgzNjE0MiwtNC4zMDcwNzIwOSAzNDkuNjUyNjIyLDI4Mi40Mjc4OTYgNjgwLDE4OS4wMTQyMzkiIGlkPSJQYXRoLTciPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTkwLDEwMC4xMDM4MTQgQzI5NS44MzYxNDIsMy42OTI5Mjc5MSAzNTguNjUyNjIyLDI5MC40Mjc4OTYgNjg5LDE5Ny4wMTQyMzkiIGlkPSJQYXRoLTciPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTk5LDEwOC4xMDM4MTQgQzMwNC44MzYxNDIsMTEuNjkyOTI3OSAzNjcuNjUyNjIyLDI5OC40Mjc4OTYgNjk4LDIwNS4wMTQyMzkiIGlkPSJQYXRoLTciPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTAsMjAuMTAzODE0MyBDMjA1LjgzNjE0MiwtNzYuMzA3MDcyMSAyNjguNjUyNjIyLDIxMC40Mjc4OTYgNTk5LDExNy4wMTQyMzkiIGlkPSJQYXRoLTciPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTksMjguMTAzODE0MyBDMjE0LjgzNjE0MiwtNjguMzA3MDcyMSAyNzcuNjUyNjIyLDIxOC40Mjc4OTYgNjA4LDEyNS4wMTQyMzkiIGlkPSJQYXRoLTciPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTE4LDM2LjEwMzgxNDMgQzIyMy44MzYxNDIsLTYwLjMwNzA3MjEgMjg2LjY1MjYyMiwyMjYuNDI3ODk2IDYxNywxMzMuMDE0MjM5IiBpZD0iUGF0aC03Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNyw0NC4xMDM4MTQzIEMyMzIuODM2MTQyLC01Mi4zMDcwNzIxIDI5NS42NTI2MjIsMjM0LjQyNzg5NiA2MjYsMTQxLjAxNDIzOSIgaWQ9IlBhdGgtNyI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMzYsNTIuMTAzODE0MyBDMjQxLjgzNjE0MiwtNDQuMzA3MDcyMSAzMDQuNjUyNjIyLDI0Mi40Mjc4OTYgNjM1LDE0OS4wMTQyMzkiIGlkPSJQYXRoLTciPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTQ1LDYwLjEwMzgxNDMgQzI1MC44MzYxNDIsLTM2LjMwNzA3MjEgMzEzLjY1MjYyMiwyNTAuNDI3ODk2IDY0NCwxNTcuMDE0MjM5IiBpZD0iUGF0aC03Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik01NCw2OC4xMDM4MTQzIEMyNTkuODM2MTQyLC0yOC4zMDcwNzIxIDMyMi42NTI2MjIsMjU4LjQyNzg5NiA2NTMsMTY1LjAxNDIzOSIgaWQ9IlBhdGgtNyI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNNjMsNzYuMTAzODE0MyBDMjY4LjgzNjE0MiwtMjAuMzA3MDcyMSAzMzEuNjUyNjIyLDI2Ni40Mjc4OTYgNjYyLDE3My4wMTQyMzkiIGlkPSJQYXRoLTciPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTcyLDg0LjEwMzgxNDMgQzI3Ny44MzYxNDIsLTEyLjMwNzA3MjEgMzQwLjY1MjYyMiwyNzQuNDI3ODk2IDY3MSwxODEuMDE0MjM5IiBpZD0iUGF0aC03Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik04MSw5Mi4xMDM4MTQzIEMyODYuODM2MTQyLC00LjMwNzA3MjA5IDM0OS42NTI2MjIsMjgyLjQyNzg5NiA2ODAsMTg5LjAxNDIzOSIgaWQ9IlBhdGgtNyI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNOTAsMTAwLjEwMzgxNCBDMjk1LjgzNjE0MiwzLjY5MjkyNzkxIDM1OC42NTI2MjIsMjkwLjQyNzg5NiA2ODksMTk3LjAxNDIzOSIgaWQ9IlBhdGgtNyI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNOTksMTA4LjEwMzgxNCBDMzA0LjgzNjE0MiwxMS42OTI5Mjc5IDM2Ny42NTI2MjIsMjk4LjQyNzg5NiA2OTgsMjA1LjAxNDIzOSIgaWQ9IlBhdGgtNyI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTA4LDExNi4xMDM4MTQgQzMxMy44MzYxNDIsMTkuNjkyOTI3OSAzNzYuNjUyNjIyLDMwNi40Mjc4OTYgNzA3LDIxMy4wMTQyMzkiIGlkPSJQYXRoLTciPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTExNywxMjQuMTAzODE0IEMzMjIuODM2MTQyLDI3LjY5MjkyNzkgMzg1LjY1MjYyMiwzMTQuNDI3ODk2IDcxNiwyMjEuMDE0MjM5IiBpZD0iUGF0aC03Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMjYsMTMyLjEwMzgxNCBDMzMxLjgzNjE0MiwzNS42OTI5Mjc5IDM5NC42NTI2MjIsMzIyLjQyNzg5NiA3MjUsMjI5LjAxNDIzOSIgaWQ9IlBhdGgtNyI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTM1LDE0MC4xMDM4MTQgQzM0MC44MzYxNDIsNDMuNjkyOTI3OSA0MDMuNjUyNjIyLDMzMC40Mjc4OTYgNzM0LDIzNy4wMTQyMzkiIGlkPSJQYXRoLTciPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTE0NCwxNDguMTAzODE0IEMzNDkuODM2MTQyLDUxLjY5MjkyNzkgNDEyLjY1MjYyMiwzMzguNDI3ODk2IDc0MywyNDUuMDE0MjM5IiBpZD0iUGF0aC03Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNTMsMTU2LjEwMzgxNCBDMzU4LjgzNjE0Miw1OS42OTI5Mjc5IDQyMS42NTI2MjIsMzQ2LjQyNzg5NiA3NTIsMjUzLjAxNDIzOSIgaWQ9IlBhdGgtNyI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTYyLDE2NC4xMDM4MTQgQzM2Ny44MzYxNDIsNjcuNjkyOTI3OSA0MzAuNjUyNjIyLDM1NC40Mjc4OTYgNzYxLDI2MS4wMTQyMzkiIGlkPSJQYXRoLTciPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTE3MSwxNzIuMTAzODE0IEMzNzYuODM2MTQyLDc1LjY5MjkyNzkgNDM5LjY1MjYyMiwzNjIuNDI3ODk2IDc3MCwyNjkuMDE0MjM5IiBpZD0iUGF0aC03Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xODAsMTgwLjEwMzgxNCBDMzg1LjgzNjE0Miw4My42OTI5Mjc5IDQ0OC42NTI2MjIsMzcwLjQyNzg5NiA3NzksMjc3LjAxNDIzOSIgaWQ9IlBhdGgtNyI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTg5LDE4OC4xMDM4MTQgQzM5NC44MzYxNDIsOTEuNjkyOTI3OSA0NTcuNjUyNjIyLDM3OC40Mjc4OTYgNzg4LDI4NS4wMTQyMzkiIGlkPSJQYXRoLTciPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTE5OCwxOTYuMTAzODE0IEM0MDMuODM2MTQyLDk5LjY5MjkyNzkgNDY2LjY1MjYyMiwzODYuNDI3ODk2IDc5NywyOTMuMDE0MjM5IiBpZD0iUGF0aC03Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMDcsMjA0LjEwMzgxNCBDNDEyLjgzNjE0MiwxMDcuNjkyOTI4IDQ3NS42NTI2MjIsMzk0LjQyNzg5NiA4MDYsMzAxLjAxNDIzOSIgaWQ9IlBhdGgtNyI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTA4LDExNi4xMDM4MTQgQzMxMy44MzYxNDIsMTkuNjkyOTI3OSAzNzYuNjUyNjIyLDMwNi40Mjc4OTYgNzA3LDIxMy4wMTQyMzkiIGlkPSJQYXRoLTciPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTExNywxMjQuMTAzODE0IEMzMjIuODM2MTQyLDI3LjY5MjkyNzkgMzg1LjY1MjYyMiwzMTQuNDI3ODk2IDcxNiwyMjEuMDE0MjM5IiBpZD0iUGF0aC03Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMjYsMTMyLjEwMzgxNCBDMzMxLjgzNjE0MiwzNS42OTI5Mjc5IDM5NC42NTI2MjIsMzIyLjQyNzg5NiA3MjUsMjI5LjAxNDIzOSIgaWQ9IlBhdGgtNyI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTM1LDE0MC4xMDM4MTQgQzM0MC44MzYxNDIsNDMuNjkyOTI3OSA0MDMuNjUyNjIyLDMzMC40Mjc4OTYgNzM0LDIzNy4wMTQyMzkiIGlkPSJQYXRoLTciPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTE0NCwxNDguMTAzODE0IEMzNDkuODM2MTQyLDUxLjY5MjkyNzkgNDEyLjY1MjYyMiwzMzguNDI3ODk2IDc0MywyNDUuMDE0MjM5IiBpZD0iUGF0aC03Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNTMsMTU2LjEwMzgxNCBDMzU4LjgzNjE0Miw1OS42OTI5Mjc5IDQyMS42NTI2MjIsMzQ2LjQyNzg5NiA3NTIsMjUzLjAxNDIzOSIgaWQ9IlBhdGgtNyI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTYyLDE2NC4xMDM4MTQgQzM2Ny44MzYxNDIsNjcuNjkyOTI3OSA0MzAuNjUyNjIyLDM1NC40Mjc4OTYgNzYxLDI2MS4wMTQyMzkiIGlkPSJQYXRoLTciPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTE3MSwxNzIuMTAzODE0IEMzNzYuODM2MTQyLDc1LjY5MjkyNzkgNDM5LjY1MjYyMiwzNjIuNDI3ODk2IDc3MCwyNjkuMDE0MjM5IiBpZD0iUGF0aC03Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xODAsMTgwLjEwMzgxNCBDMzg1LjgzNjE0Miw4My42OTI5Mjc5IDQ0OC42NTI2MjIsMzcwLjQyNzg5NiA3NzksMjc3LjAxNDIzOSIgaWQ9IlBhdGgtNyI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTg5LDE4OC4xMDM4MTQgQzM5NC44MzYxNDIsOTEuNjkyOTI3OSA0NTcuNjUyNjIyLDM3OC40Mjc4OTYgNzg4LDI4NS4wMTQyMzkiIGlkPSJQYXRoLTciPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTE5OCwxOTYuMTAzODE0IEM0MDMuODM2MTQyLDk5LjY5MjkyNzkgNDY2LjY1MjYyMiwzODYuNDI3ODk2IDc5NywyOTMuMDE0MjM5IiBpZD0iUGF0aC03Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMDcsMjA0LjEwMzgxNCBDNDEyLjgzNjE0MiwxMDcuNjkyOTI4IDQ3NS42NTI2MjIsMzk0LjQyNzg5NiA4MDYsMzAxLjAxNDIzOSIgaWQ9IlBhdGgtNyI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
            },
            1581: function(e, t, n) {
                "use strict";
                var a = this && this.__awaiter || function(e, t, n, a) {
                        return new(n || (n = Promise))((function(r, i) {
                            function l(e) {
                                try {
                                    o(a.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function s(e) {
                                try {
                                    o(a.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function o(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(l, s)
                            }
                            o((a = a.apply(e, t || [])).next())
                        }))
                    },
                    r = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    },
                    i = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const l = r(n(1582)),
                    s = i(n(0)),
                    o = r(n(4)),
                    c = r(n(282)),
                    u = n(12),
                    d = r(n(44)),
                    m = i(n(381)),
                    p = r(n(1584)),
                    g = r(n(379)),
                    h = n(63),
                    f = n(1585),
                    v = n(1586);
                t.SchemaMapping = e => {
                    const [t, n] = s.useState(!1), [r, i] = s.useState(""), [y, E] = s.useState(), [M, b] = s.useState([]), [_, j] = s.useState([]), [I, O] = s.useState("all"), x = e.match.params.datastream_id;
                    s.useEffect(() => {
                        a(void 0, void 0, void 0, (function*() {
                            const e = `${h.API_URLS.datastream}${x}`,
                                t = yield d.default.get(e);
                            E(t.data)
                        }))
                    }, [x]), s.useEffect(() => {
                        a(void 0, void 0, void 0, (function*() {
                            const e = `${h.API_URLS.column_mapping}?page_size=1000&removed=false&page=1&datastream_id=${x}`,
                                t = (e, n = []) => a(void 0, void 0, void 0, (function*() {
                                    const {
                                        data: a
                                    } = yield d.default.get(e);
                                    return n.push(...a.results), a.next ? t(a.next, n) : n
                                })),
                                n = yield t(e);
                            b(n)
                        }))
                    }, [x]), s.useEffect(() => {
                        a(void 0, void 0, void 0, (function*() {
                            const e = `${h.API_URLS.datastream}${x}/default-mapping/`,
                                t = yield d.default.get(e);
                            j(t.data)
                        }))
                    }, [x]);
                    const C = e => {
                            b(t => {
                                const n = t.findIndex(t => t.id === e.id);
                                return [...t.slice(0, n), e, ...t.slice(n + 1)]
                            })
                        },
                        S = e => {
                            if (e) {
                                const t = M.filter(({
                                    target_column: t
                                }) => (null == t ? void 0 : t.id) === e.id).length > 0;
                                return {
                                    value: e,
                                    label: e.name,
                                    datatype: e.type,
                                    isDisabled: t
                                }
                            }
                            return null
                        },
                        w = e => () => {
                            const t = Object.assign(Object.assign({
                                tainted: !0
                            }, e), {
                                is_key_column: !e.is_key_column
                            });
                            e.target_column && e.target_column.usage === h.USAGE_METRIC && (t.is_key_column = !1), C(t)
                        },
                        D = e => {
                            const {
                                data: t
                            } = e;
                            return s.createElement(m.components.SingleValue, Object.assign({}, e), s.createElement(v.Tag, {
                                size: "x-small",
                                type: t.value.usage
                            }, t.label))
                        },
                        T = e => {
                            const {
                                data: t
                            } = e, n = t.isDisabled ? "Already used" : t.value.usage;
                            return s.createElement(m.components.Option, Object.assign({}, e), s.createElement(v.Tag, {
                                size: "x-small",
                                type: t.value.usage,
                                disabled: t.isDisabled
                            }, s.createElement(l.default, {
                                searchWords: [r],
                                textToHighlight: t.label,
                                autoEscape: !0
                            })), s.createElement("span", {
                                className: "pull-right"
                            }, n))
                        },
                        N = e => a(void 0, void 0, void 0, (function*() {
                            if (null == y ? void 0 : y.stack) {
                                const t = `${h.API_URLS.target_columns}?page_size=200&stack_id=${y.stack.id}${e?"&name="+e:""}`,
                                    {
                                        data: n
                                    } = yield d.default.get(t);
                                return n.results.map(S)
                            }
                            return Promise.resolve([])
                        })),
                        k = (e, t = !1) => a(void 0, void 0, void 0, (function*() {
                            const n = ((e, t) => M.filter(({
                                tainted: t
                            }) => t || e).map(n => ({
                                id: n.id,
                                target_column: n.target_column ? {
                                    id: n.target_column.id,
                                    name: n.target_column.name
                                } : null,
                                is_key_column: n.is_key_column,
                                set_default: e,
                                reset_default: t
                            })))(e, t);
                            n.length && (yield d.default.patch(h.API_URLS.column_mapping, n)), y && (window.location.href = y.overview_url)
                        }));
                    return y && y.id ? s.createElement(u.Join, {
                        spacing: "medium",
                        orientation: "vertical",
                        alignItems: "initial"
                    }, s.createElement(u.Flex, {
                        alignItems: "flex-end",
                        justifyContent: "space-between"
                    }, s.createElement(u.Text, {
                        fontSize: "small"
                    }, "Edit Schema Mapping"), s.createElement(f.FilterButtons, {
                        currentFilter: I,
                        onChange: O
                    })), s.createElement(p.default, {
                        className: "column-mapping-table table-hover",
                        columns: [{
                            key: "name",
                            label: "Name",
                            className: "col-md-3",
                            onFormat: ({
                                removed: e,
                                name: t
                            }) => s.createElement(v.Tag, Object.assign({
                                size: "small"
                            }, e ? {
                                css: {
                                    textDecoration: "line-through"
                                }
                            } : {}), t)
                        }, {
                            key: "is_default",
                            label: "",
                            className: "col-md-1",
                            onFormat: e => {
                                const t = _ && _.findIndex(t => e.target_column && e.name === t.source_column_name && e.target_column.id === t.target_column.id && e.is_key_column === t.is_key_column) > -1;
                                return s.createElement("span", {
                                    className: o.default("label", {
                                        "label-default": t
                                    })
                                }, t ? "default" : "")
                            }
                        }, {
                            key: "is_key_column",
                            label: "Key Column",
                            className: "col-md-1",
                            onFormat: e => s.createElement(u.Switch, {
                                size: "x-small",
                                checked: e.is_key_column,
                                disabled: e.target_column && e.target_column.usage !== h.USAGE_DIMENSION || !(null == y ? void 0 : y.stack.permissions.isDatastreamManager),
                                onChange: w(e)
                            })
                        }, {
                            key: "target_column",
                            label: "Target",
                            className: "col-md-7",
                            onFormat: e => s.createElement(m.default, {
                                type: "Async",
                                cacheOptions: !0,
                                value: S(e.target_column),
                                backspaceRemovesValue: !0,
                                noOptionsMessage: () => {
                                    if (y) {
                                        const t = `${h.URL_MAPPING.create_target_column}?name=${encodeURIComponent(e.name)}&stack=${y.stack.id}&ds=${y.id}`;
                                        return s.createElement(s.Fragment, null, "Type to Search or create a newÂ ", s.createElement("a", {
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            href: t
                                        }, e.name), " ", "column")
                                    }
                                    return null
                                },
                                components: {
                                    SingleValue: D,
                                    Option: T
                                },
                                loadOptions: N,
                                onInputChange: e => i(e),
                                onChange: t => ((e, t) => {
                                    const n = Object.assign(Object.assign({
                                        tainted: !0
                                    }, e), {
                                        target_column: t
                                    });
                                    e.is_key_column && (t && t.usage === h.USAGE_METRIC || !t) && (n.is_key_column = !1), C(n)
                                })(e, t ? t.value : null),
                                isSearchable: !0,
                                isClearable: !0,
                                isDisabled: !(null == y ? void 0 : y.stack.permissions.isDatastreamManager)
                            })
                        }],
                        rows: "all" === I ? M.filter(e => !1 === e.removed) : "mapped" === I ? M.filter(e => !1 === e.removed && null !== e.target_column) : "unmapped" === I ? M.filter(e => !1 === e.removed && null === e.target_column) : "removed" === I ? M.filter(e => !0 === e.removed) : M,
                        keyAttribute: "id"
                    }), y.stack.permissions.isDatastreamManager && s.createElement("div", {
                        className: "row submit-row"
                    }, s.createElement("div", {
                        className: "col-md-12"
                    }, s.createElement(c.default, {
                        bsStyle: "default",
                        onClick: () => {
                            b(e => e.map(e => {
                                var t, n;
                                return Object.assign(Object.assign({
                                    tainted: !0
                                }, e), {
                                    target_column: null !== (n = null === (t = _.find(t => t.source_column_name === e.name)) || void 0 === t ? void 0 : t.target_column) && void 0 !== n ? n : null
                                })
                            }))
                        }
                    }, s.createElement(u.Icon, {
                        name: "retry",
                        size: "small"
                    }), " Restore Defaults"), "Â ", s.createElement(c.default, {
                        bsStyle: "default",
                        onClick: () => {
                            b(e => e.map(e => Object.assign(Object.assign({
                                tainted: !0
                            }, e), {
                                target_column: null,
                                is_key_column: !1
                            })))
                        }
                    }, s.createElement(u.Icon, {
                        name: "close-circle",
                        size: "small"
                    }), " Clear"), "Â ", s.createElement(c.default, {
                        bsStyle: "default",
                        title: "Automatically map all fields. Missing data schema columns will be created.",
                        onClick: () => {
                            b(e => e.map(e => {
                                const t = Object.assign({
                                    tainted: !0
                                }, e);
                                var n;
                                return null === t.target_column && (t.target_column = {
                                    id: -1,
                                    name: (n = t.name, n.toLowerCase().replace(/\s+/g, "_").replace(/[^A-Za-z0-9_]/g, ""))
                                }, t.is_key_column = !1), t
                            }))
                        }
                    }, s.createElement(u.Icon, {
                        name: "balance",
                        size: "small"
                    }), " Auto (non-mapped)"), s.createElement("div", {
                        className: "pull-right"
                    }, s.createElement(c.default, {
                        bsStyle: "warning",
                        title: "Please confirm to continue",
                        onClick: () => n(!0)
                    }, "Save and set default"), s.createElement(g.default, {
                        show: t,
                        title: "Please confirm to continue",
                        onCloseModal: () => n(!1)
                    }, s.createElement("p", null, "Do you really want to save this mapping as the new default for this type of datastream?"), s.createElement("ul", {
                        className: "nav nav-stacked nav-pills"
                    }, s.createElement("li", null, s.createElement(c.default, {
                        onClick: () => k(!0)
                    }, "Save and overwrite all mappings using a default")), s.createElement("li", null, s.createElement(c.default, {
                        onClick: () => k(!0, !0)
                    }, "Save and overwrite all existing mappings")))), "Â ", s.createElement("button", {
                        type: "button",
                        className: "btn btn-primary",
                        onClick: () => k(!1)
                    }, "Save Mapping"))))) : null
                }
            },
            1583: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const a = n(12);
                t.useReactSelectTheme = () => {
                    const e = a.useTheme();
                    return t => Object.assign(Object.assign({}, t), {
                        colors: Object.assign(Object.assign({}, t.colors), {
                            neutral10: e.colors.brand[1],
                            neutral80: e.colors.brand[7],
                            primary: e.colors.brand[4],
                            primary25: e.colors.brand[1],
                            danger: e.colors.danger[7],
                            dangerLight: e.colors.danger[2]
                        })
                    })
                }
            },
            1584: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    },
                    r = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = a(n(0)),
                    l = r(n(4));
                class s extends i.PureComponent {
                    constructor() {
                        super(...arguments), this.handleHeaderClick = e => t => {
                            t.preventDefault(), e.onSort && e.onSort()
                        }
                    }
                    render() {
                        const {
                            className: e,
                            columns: t,
                            keyAttribute: n,
                            rows: a,
                            sorting: r
                        } = this.props;
                        return i.createElement("table", {
                            className: l.default(e, "table")
                        }, i.createElement("thead", null, i.createElement("tr", null, t.map(e => i.createElement("th", {
                            key: String(e.key),
                            className: e.className
                        }, e.onSort ? i.createElement("a", {
                            href: "#",
                            onClick: this.handleHeaderClick(e)
                        }, (({
                            key: e,
                            label: t
                        }, n) => n === e ? "+" + t : n === "-" + e ? "-" + t : t)(e, r)) : e.label)))), i.createElement("tbody", null, a.map(e => i.createElement("tr", {
                            key: String(e[n])
                        }, t.map(t => i.createElement("td", {
                            key: String(t.key)
                        }, t.onFormat(e)))))))
                    }
                }
                t.default = s
            },
            1585: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(12),
                    l = n(15),
                    s = ["all", "mapped", "unmapped"];
                t.FilterButtons = ({
                    currentFilter: e,
                    onChange: t
                }) => {
                    const n = i.ButtonGroup.useState({
                        selected: e
                    });
                    return r.createElement(i.ButtonGroup, Object.assign({}, n, {
                        size: "small"
                    }), s.map(e => r.createElement(i.ButtonGroup.Button, {
                        value: e,
                        key: e,
                        onClick: () => t(e)
                    }, l.upperFirst(e))))
                }
            },
            1586: function(e, t, n) {
                "use strict";
                var a = this && this.__rest || function(e, t) {
                        var n = {};
                        for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var r = 0;
                            for (a = Object.getOwnPropertySymbols(e); r < a.length; r++) t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]])
                        }
                        return n
                    },
                    r = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = r(n(0)),
                    l = n(15),
                    s = n(12);
                t.Tag = e => {
                    var {
                        type: t,
                        disabled: n,
                        children: r
                    } = e, o = a(e, ["type", "disabled", "children"]);
                    const c = (({
                        type: e,
                        disabled: t
                    }) => {
                        const n = s.useTheme();
                        return t ? {
                            backgroundColor: l.get(n, "colors.gray.1"),
                            color: l.get(n, "colors.gray.3")
                        } : "metric" === e ? {
                            backgroundColor: l.get(n, "colors.green.1"),
                            color: l.get(n, "colors.green.7")
                        } : "dimension" === e ? {
                            backgroundColor: l.get(n, "colors.blue.1"),
                            color: l.get(n, "colors.blue.7")
                        } : {}
                    })({
                        type: t,
                        disabled: n
                    });
                    return i.createElement(s.Tag, Object.assign({}, c, o), r)
                }
            },
            1587: function(e, t, n) {
                "use strict";
                var a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(12),
                    l = n(63),
                    s = a(n(1588)),
                    o = a(n(1591)),
                    c = a(n(1593)),
                    u = n(383),
                    d = Date.now();
                t.default = () => r.default.createElement(i.Join, {
                    spacing: "small",
                    orientation: "vertical",
                    className: "stats"
                }, r.default.createElement(i.Box, {
                    width: "100%"
                }, r.default.createElement("h4", null, "Current total usage"), r.default.createElement(s.default, {
                    sourceUrl: l.API_URLS.stats.quota.current
                })), r.default.createElement(i.Box, {
                    width: "100%"
                }, r.default.createElement("h4", null, "Per datastream"), r.default.createElement(o.default, {
                    sourceUrl: l.API_URLS.stats.quota.datastreams,
                    params: {
                        start: u.getStart(d, 1).format("YYYY-MM-DD"),
                        end: u.getEnd(d).format("YYYY-MM-DD")
                    }
                })), r.default.createElement(c.default, null))
            },
            1588: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(12),
                    l = n(283),
                    s = n(1589);
                t.CurrentQuotaStatsComponent = ({
                    data: e
                }) => {
                    const {
                        used_space: t,
                        used_rows: n,
                        used_space_quota: a,
                        used_rows_quota: l,
                        estimated_used_space: o,
                        estimated_used_rows: c
                    } = e;
                    return r.createElement(i.Join, null, a > 0 && r.createElement(s.CircularProgressChart, {
                        type: "filesize",
                        value: t,
                        maxValue: a,
                        estimatedValue: o
                    }), l > 0 && r.createElement(s.CircularProgressChart, {
                        type: "rows",
                        value: n,
                        maxValue: l,
                        estimatedValue: c
                    }), !a && !l && r.createElement("div", null, "No data available"))
                }, t.default = l.withBackendData(t.CurrentQuotaStatsComponent)
            },
            1589: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    },
                    r = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = a(n(0)),
                    l = n(12),
                    s = r(n(285)),
                    o = r(n(1590)),
                    c = e => e > 85 ? "red" : e > 60 ? "orange" : "green";
                t.CircularProgressChart = ({
                    type: e,
                    value: t,
                    maxValue: n,
                    estimatedValue: a
                }) => {
                    const r = Math.round(t / n * 100);
                    return i.createElement(l.Flex, {
                        flexDirection: "column",
                        alignItems: "center",
                        flexGrow: 1
                    }, i.createElement(s.default, {
                        height: 200,
                        config: {
                            chart: {
                                type: "pie"
                            },
                            credits: {
                                enabled: !1
                            },
                            title: {
                                text: r + "%",
                                align: "center",
                                verticalAlign: "middle",
                                y: 5,
                                style: {
                                    fontWeight: "bold"
                                }
                            },
                            tooltip: {
                                enabled: !1
                            },
                            plotOptions: {
                                pie: {
                                    dataLabels: {
                                        enabled: !1
                                    },
                                    innerSize: 120,
                                    states: {
                                        hover: {
                                            enabled: !1
                                        }
                                    }
                                }
                            },
                            series: [{
                                name: e,
                                colorByPoint: !0,
                                data: [{
                                    name: "Used " + e,
                                    y: r,
                                    color: c(r)
                                }, {
                                    name: "Free " + e,
                                    y: r < 100 ? 100 - r : 0,
                                    color: "transparent"
                                }]
                            }]
                        }
                    }), i.createElement("h5", null, "rows" === e ? "Used rows" : "Used space", " this month"), i.createElement(o.default, {
                        label: "Current usage:",
                        value: t,
                        type: e
                    }), i.createElement(o.default, {
                        label: "Monthly quota:",
                        value: n,
                        type: e
                    }), i.createElement(o.default, {
                        label: "Estimated usage at the end of the month:",
                        value: a,
                        type: e
                    }))
                }
            },
            1590: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(380);
                t.default = ({
                    label: e,
                    value: t,
                    type: n
                }) => {
                    const a = Math.round(100 * t) / 100;
                    return r.createElement("div", {
                        className: "quota-info"
                    }, r.createElement("span", {
                        className: "description"
                    }, e, " "), r.createElement("span", null, "filesize" === n ? i.formatBytes(t) : a.toLocaleString() + " rows"))
                }
            },
            1591: function(e, t, n) {
                "use strict";
                var a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(15),
                    l = n(12),
                    s = n(283),
                    o = n(382),
                    c = n(1592);
                t.getData = (e, t) => {
                    const n = e.filter(e => e.quota_type === t).map(e => Object.assign(Object.assign({}, i.omit(e, ["used_rows", "used_space", "quota_type"])), {
                        usedQuota: t === o.QUOTA_TYPE_FILESIZE ? e.used_space : e.used_rows
                    }));
                    return i.groupBy(n, "datasource")
                }, t.DatastreamQuotaStatsComponent = ({
                    data: e
                }) => {
                    const n = e && e.some(({
                            quota_type: e
                        }) => e === o.QUOTA_TYPE_ROWS),
                        a = e && e.some(({
                            quota_type: e
                        }) => e === o.QUOTA_TYPE_FILESIZE);
                    return r.default.createElement(l.Join, null, n && r.default.createElement(c.SunburstChart, {
                        data: t.getData(e, o.QUOTA_TYPE_ROWS),
                        type: "rows"
                    }), a && r.default.createElement(c.SunburstChart, {
                        data: t.getData(e, o.QUOTA_TYPE_FILESIZE),
                        type: "filesize"
                    }), !n && !a && r.default.createElement("div", null, "No data available"))
                }, t.default = s.withBackendData(t.DatastreamQuotaStatsComponent)
            },
            1592: function(e, t, n) {
                "use strict";
                var a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(15),
                    l = n(12),
                    s = a(n(285));
                t.SunburstChart = ({
                    data: e,
                    type: t
                }) => {
                    const n = Object.keys(e),
                        a = i.sum(i.flatMap(n, t => e[t].map(e => e.usedQuota))),
                        o = i.flatMap(n, (t, n) => [{
                            id: "" + n,
                            name: t,
                            parent: ""
                        }].concat(e[t].map((e, t) => ({
                            id: `${n}.${t}`,
                            parent: "" + n,
                            value: e.usedQuota / a * 100,
                            name: e.name
                        }))));
                    return r.default.createElement(l.Flex, {
                        flexDirection: "column",
                        alignItems: "center",
                        flex: 1
                    }, r.default.createElement(s.default, {
                        height: 150,
                        config: {
                            chart: {
                                marginTop: 0,
                                marginBottom: 0
                            },
                            title: null,
                            credits: {
                                enabled: !1
                            },
                            plotOptions: {
                                series: {
                                    animation: !1
                                },
                                sunburst: {
                                    dataLabels: {
                                        enabled: !1
                                    },
                                    innerSize: 70,
                                    states: {
                                        hover: {
                                            enabled: !1
                                        }
                                    }
                                }
                            },
                            series: [{
                                type: "sunburst",
                                data: o,
                                levels: [{
                                    level: 1,
                                    colorByPoint: !0
                                }]
                            }],
                            tooltip: {
                                headerFormat: "",
                                pointFormat: '<span style="color:{point.color}">â—</span> {point.name}: <b>{point.value:.2f}%</b>',
                                followPointer: !0,
                                hideDelay: 0
                            }
                        }
                    }), r.default.createElement("h5", null, "Used ", "rows" === t ? "rows" : "space", " this month"))
                }
            },
            1593: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    },
                    r = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = a(n(0)),
                    l = n(12),
                    s = r(n(44)),
                    o = n(63),
                    c = n(96),
                    u = n(383),
                    d = n(382),
                    m = n(1594),
                    p = n(1595);
                class g extends i.PureComponent {
                    constructor() {
                        super(...arguments), this.state = {
                            monthInterval: d.INITIAL_MONTH_INTERVAL,
                            data: null
                        }, this.componentDidMount = () => {
                            this.loadData()
                        }, this.loadData = () => {
                            const e = Date.now(),
                                t = {
                                    start: u.getStart(e, this.state.monthInterval).format("YYYY-MM-DD"),
                                    end: u.getEnd(e).format("YYYY-MM-DD")
                                };
                            s.default.get(o.API_URLS.stats.quota.history, {
                                params: t
                            }).then(({
                                data: e
                            }) => this.setState({
                                data: e
                            }))
                        }, this.handleChangeMonthInterval = e => {
                            this.setState({
                                monthInterval: e
                            }, this.loadData)
                        }
                    }
                    render() {
                        const {
                            data: e,
                            monthInterval: t
                        } = this.state;
                        return e ? i.createElement(l.Box, {
                            width: "100%"
                        }, i.createElement("h4", null, "History for", " ", i.createElement(m.TimeRangeDropdown, {
                            onChangeMonthInterval: this.handleChangeMonthInterval,
                            monthInterval: t
                        })), i.createElement(p.QuotaHistoryStats, {
                            monthInterval: t,
                            data: e
                        })) : i.createElement("div", null, i.createElement("h4", null, "History"), i.createElement(c.LoadingIndicator, null))
                    }
                }
                t.QuotaHistoryStatsContainer = g, t.default = g
            },
            1594: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(15),
                    l = n(12),
                    s = {
                        3: "last three months",
                        6: "last six months",
                        12: "last year",
                        24: "last two years"
                    };
                t.TimeRangeDropdown = ({
                    monthInterval: e,
                    onChangeMonthInterval: t
                }) => {
                    const n = l.Menu.useMenuState(),
                        a = i.map(s, (e, a) => r.createElement(l.Menu.Item, Object.assign({}, n, {
                            onClick: () => {
                                t(Number(a)), n.hide()
                            }
                        }), e));
                    return r.createElement(r.Fragment, null, r.createElement(l.Menu.Disclosure, Object.assign({}, n, {
                        size: "small"
                    }), s[e]), r.createElement(l.Menu, Object.assign({}, n), a))
                }
            },
            1595: function(e, t, n) {
                "use strict";
                var a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(12),
                    l = n(1596),
                    s = n(383),
                    o = n(382);
                t.QuotaHistoryStats = ({
                    data: e,
                    monthInterval: t
                }) => {
                    const n = (e || []).filter(e => e.quota_type === o.QUOTA_TYPE_FILESIZE),
                        a = n.length > 0,
                        c = (e || []).filter(e => e.quota_type === o.QUOTA_TYPE_ROWS),
                        u = c.length > 0;
                    return r.default.createElement(i.Join, null, a && r.default.createElement(l.LineChart, {
                        data: s.formatQuotaHistoryChartData(n, "Storage Space", t),
                        type: "filesize"
                    }), u && r.default.createElement(l.LineChart, {
                        data: s.formatQuotaHistoryChartData(c, "Result rows", t),
                        type: "rows"
                    }), !a && !u && r.default.createElement("div", null, "No data available"))
                }
            },
            1596: function(e, t, n) {
                "use strict";
                var a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(12),
                    l = n(380),
                    s = a(n(285)),
                    o = (e, t) => "rows" === e ? (e => Number(e).toLocaleString())(t) : (e => l.formatBytes(e))(t);
                t.LineChart = ({
                    data: e,
                    type: t
                }) => {
                    const n = {
                        month: "%Y-%m"
                    };
                    return r.default.createElement(i.Flex, {
                        flexDirection: "column",
                        alignItems: "center",
                        flexBasis: "100%"
                    }, r.default.createElement(s.default, {
                        height: 250,
                        config: {
                            title: null,
                            credits: {
                                enabled: !1
                            },
                            legend: {
                                enabled: !1
                            },
                            yAxis: {
                                title: null,
                                tickInterval: 5,
                                labels: {
                                    formatter() {
                                        return o(t, this.value)
                                    }
                                }
                            },
                            xAxis: {
                                type: "datetime",
                                dateTimeLabelFormats: n
                            },
                            tooltip: {
                                shared: !0,
                                crosshairs: !0,
                                hideDelay: 0,
                                dateTimeLabelFormats: n
                            },
                            plotOptions: {
                                series: {
                                    animation: !1,
                                    label: {
                                        connectorAllowed: !1
                                    },
                                    dataLabels: {
                                        enabled: !0,
                                        formatter() {
                                            return o(t, this.y)
                                        }
                                    },
                                    marker: {
                                        symbol: "circle"
                                    }
                                }
                            },
                            series: e.map(e => ({
                                name: e.id,
                                data: e.data.map(e => ({
                                    x: new Date(e.x).getTime(),
                                    y: e.y
                                }))
                            }))
                        }
                    }), r.default.createElement("h5", null, "Used ", "rows" === t ? "rows" : "space"))
                }
            },
            1597: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    },
                    r = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = a(n(0)),
                    l = r(n(44)),
                    s = r(n(1598));
                class o extends i.PureComponent {
                    constructor() {
                        super(...arguments), this.handleChangeRow = (e, t, n) => {
                            e ? l.default.post("/api/web-app/dataschema", {
                                target_column_id: n,
                                source_column_name: e,
                                source_content_type_id: t
                            }) : l.default.delete("/api/web-app/dataschema", {
                                data: {
                                    target_column_id: n,
                                    source_content_type_id: t
                                }
                            })
                        }
                    }
                    render() {
                        const e = document.body.offsetHeight;
                        return i.createElement(s.default, {
                            tableHeight: e - 210,
                            sourceUrl: "/api/web-app/dataschema",
                            onChangeRow: this.handleChangeRow
                        })
                    }
                }
                t.default = o
            },
            1598: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    },
                    r = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = n(12),
                    l = a(n(0)),
                    s = n(15),
                    o = n(283),
                    c = n(1599),
                    u = r(n(1601)),
                    d = ({
                        data: e
                    }) => {
                        var t, n;
                        const a = i.Menu.useMenuState(),
                            r = null !== (n = null === (t = e.stack.permissions) || void 0 === t ? void 0 : t.hasChangePermissions) && void 0 !== n && n;
                        return l.createElement(l.Fragment, null, l.createElement(i.Menu.Disclosure, Object.assign({
                            size: "small"
                        }, a), "Schema Actions", l.createElement(i.Icon, {
                            size: "small",
                            name: a.visible ? "chevron-up" : "chevron-down"
                        })), l.createElement(i.Menu, Object.assign({}, a), r && l.createElement(i.Menu.Item, Object.assign({}, a, {
                            as: "a",
                            href: `/core/stack/${e.stack.id}/schema/import/default/`
                        }), "Import Adverity Default"), e.stack.parent && r && l.createElement(i.Menu.Item, Object.assign({}, a, {
                            as: "a",
                            href: `/core/stack/${e.stack.id}/schema/import/parent-org/`
                        }), "Import from Parent Workspace"), r && l.createElement(l.Fragment, null, l.createElement(i.Menu.Item, Object.assign({}, a, {
                            as: "a",
                            href: `/core/stack/${e.stack.id}/schema/import/file/`
                        }), "Import from File"), l.createElement(i.Menu.Separator, null)), l.createElement(i.Menu.Item, Object.assign({}, a, {
                            as: "a",
                            href: `/core/stack/${e.stack.id}/schema/export/excel/`
                        }), "Export to Excel"), l.createElement(i.Menu.Item, Object.assign({}, a, {
                            as: "a",
                            href: `/core/stack/${e.stack.id}/schema/export/json/`
                        }), "Export to JSON"), r && l.createElement(l.Fragment, null, l.createElement(i.Menu.Separator, null), l.createElement(i.Menu.Item, Object.assign({}, a, {
                            as: "a",
                            href: `/core/stack/${e.stack.id}/schema/clear/`
                        }), "Clear Data Schema")), l.createElement(i.Menu.Separator, null), l.createElement(i.Menu.Item, Object.assign({}, a, {
                            as: "a",
                            href: "/target/targetcolumn/"
                        }), "Classic View")))
                    };
                t.DataSchemaComponent = ({
                    onChangeRow: e,
                    tableHeight: t,
                    data: n
                }) => {
                    var a;
                    const [r, o] = l.useState(n), [m, p] = l.useState({
                        filterValue: "all"
                    });
                    return l.createElement(i.Join, {
                        orientation: "vertical",
                        spacing: "small",
                        block: !0
                    }, l.createElement("h3", null, "Data Schema"), l.createElement(i.StartEnd, null, l.createElement(c.Filter, {
                        value: m,
                        onChange: p
                    }), l.createElement(i.Join, {
                        spacing: "x-small"
                    }, l.createElement(d, {
                        data: r
                    }), r.stack.permissions.hasChangePermissions && l.createElement(i.Button.Secondary, {
                        size: "small",
                        as: "a",
                        href: "/target/targetcolumn/add/"
                    }, "Add Target Column"))), l.createElement(u.default, {
                        height: t,
                        rows: ((e, {
                            filterValue: t,
                            targetColumn: n
                        }) => {
                            const a = e => Object.keys(e).length > 1;
                            return "all" !== t || n ? e.filter(e => (!n || e.targetColumn.name.includes(n)) && ("all" === t || "used" === t && a(e) || "unused" === t && !a(e))) : e
                        })(r.rows, m),
                        completeRows: r.rows,
                        datasourceTypes: r.datasourceTypes,
                        onChangeMapping: (t, n, a) => {
                            o(e => Object.assign(Object.assign({}, e), {
                                rows: e.rows.map(e => e.targetColumn.id === a ? t ? Object.assign(Object.assign({}, e), {
                                    [n]: t
                                }) : s.omit(e, n) : e)
                            })), e && e(t, n, a)
                        },
                        isDisabled: !(null === (a = r.stack.permissions) || void 0 === a ? void 0 : a.hasChangePermissions)
                    }))
                };
                const m = o.withBackendData(t.DataSchemaComponent);
                t.default = m
            },
            1599: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(12),
                    l = n(1600),
                    s = {
                        all: "All",
                        used: "Used",
                        unused: "Unused"
                    };
                t.Filter = ({
                    onChange: e,
                    value: t
                }) => r.createElement(i.Join, {
                    spacing: "x-small"
                }, r.createElement(l.ToggleButton, {
                    items: s,
                    value: t.filterValue,
                    onChange: n => {
                        e(Object.assign(Object.assign({}, t), {
                            filterValue: n
                        }))
                    }
                }), r.createElement(i.Input, {
                    value: t.targetColumn,
                    placeholder: "Search for ...",
                    onChange: n => {
                        e(Object.assign(Object.assign({}, t), {
                            targetColumn: n.currentTarget.value
                        }))
                    },
                    size: "small"
                }))
            },
            1600: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(12),
                    l = n(15);
                t.ToggleButton = ({
                    onChange: e,
                    value: t,
                    items: n
                }) => {
                    const a = t => () => {
                            e(t)
                        },
                        s = l.map(n, (e, t) => ({
                            text: e,
                            id: t
                        })),
                        o = i.ButtonGroup.useState({
                            selected: t
                        });
                    return r.createElement(i.ButtonGroup, Object.assign({
                        size: "small"
                    }, o), s.map(({
                        id: e,
                        text: t
                    }) => r.createElement(i.ButtonGroup.Button, {
                        key: e,
                        value: e,
                        onClick: a(e)
                    }, t)))
                }
            },
            1601: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    },
                    r = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = n(256),
                    l = n(12),
                    s = a(n(0)),
                    o = n(15);
                n(1602);
                const c = n(63),
                    u = r(n(381)),
                    d = n(188),
                    m = {
                        dimension: {
                            backgroundColor: "blue.1",
                            color: "blue.7"
                        },
                        metric: {
                            backgroundColor: "green.1",
                            color: "green.7"
                        }
                    },
                    p = ({
                        targetColumn: e
                    }) => s.createElement(d.HoverSensor, null, ({
                        isHover: t
                    }) => s.createElement(l.Box, null, s.createElement(l.Popover, {
                        placement: "right",
                        trigger: s.createElement(l.Tag, Object.assign({
                            size: "small"
                        }, m[e.type]), e.name),
                        visible: t
                    }, s.createElement(l.Flex, {
                        flexDirection: "column"
                    }, e.name.length > 28 && s.createElement(l.Text, null, "Name: ", e.name), s.createElement(l.Text, null, "Type: ", c.DATA_TYPES[e.dataType]), e.length && s.createElement(l.Text, null, "Length: ", e.length), e.measure && s.createElement(l.Text, null, "Measure: ", c.MEASURES[e.measure]))))),
                    g = [{
                        field: "targetColumn",
                        id: "targetColumn",
                        header: "USAGE",
                        component: e => s.createElement(d.HoverSensor, null, ({
                            isHover: t
                        }) => s.createElement(l.Flex, {
                            alignItems: "center",
                            height: "100%"
                        }, s.createElement(p, {
                            targetColumn: e
                        }), t && s.createElement(l.IconButton.Minimal, {
                            css: {
                                position: "absolute",
                                right: "4px"
                            },
                            backgroundColor: "white",
                            size: "small",
                            as: "a",
                            href: `/target/targetcolumn/${e.id}/change`,
                            name: "edit",
                            rounded: !0
                        })))
                    }],
                    h = ({
                        value: e,
                        row: t,
                        onChangeMapping: n,
                        baseOptions: a,
                        items: r,
                        field: i,
                        isDisabled: l
                    }) => {
                        const [o, c] = s.useState(!1), m = r.find(({
                            id: t
                        }) => t === e) || null, p = {
                            id: e,
                            isDisabled: !1
                        }, g = !m && e ? a.concat(p) : a;
                        return s.createElement(d.HoverSensor, {
                            isBound: !0
                        }, ({
                            onMouseEnter: a,
                            onMouseLeave: r,
                            isHover: d
                        }) => s.createElement("div", {
                            onMouseEnter: a,
                            onMouseLeave: o ? void 0 : r
                        }, d && s.createElement(u.default, {
                            isClearable: !0,
                            virtualized: !0,
                            isDisabled: l,
                            options: g,
                            menuPortalTarget: document.body,
                            getOptionValue: e => e.id,
                            getOptionLabel: e => e.id,
                            value: e ? m || p : null,
                            onChange: e => {
                                Array.isArray(e) || n(e ? e.id : null, i, t.targetColumn.id)
                            },
                            onMenuOpen: () => {
                                c(!0)
                            },
                            onMenuClose: () => {
                                c(!1), r()
                            }
                        }), s.createElement("div", {
                            style: {
                                padding: "9px 11px",
                                display: d ? "none" : "block",
                                color: e ? "inherit" : "hsl(0, 0%, 50%)"
                            }
                        }, e || "Select...")))
                    },
                    f = e => [e.map(({
                        header: e
                    }) => ({
                        rowSpan: 1,
                        colSpan: 1,
                        value: e
                    }))],
                    v = {
                        headerCell: "dataSchemaHeaderCell",
                        cell: "cell"
                    },
                    y = ({
                        field: e
                    }) => "targetColumn" === e ? 150 : 250;
                t.default = ({
                    rows: e,
                    completeRows: t,
                    datasourceTypes: n,
                    onChangeMapping: a,
                    height: r,
                    isDisabled: c
                }) => {
                    const u = ((e, t, n) => g.concat(o.map(e, ({
                            header: e,
                            items: a
                        }, r) => {
                            const i = Number(r),
                                l = a.map(e => Object.assign(Object.assign({}, e), {
                                    isDisabled: t.some(t => t[i] === e.id)
                                }));
                            return {
                                field: i,
                                id: String(r),
                                header: e,
                                component: (e, t, r) => s.createElement(h, {
                                    baseOptions: l,
                                    field: i,
                                    items: a,
                                    onChangeMapping: r,
                                    row: t,
                                    value: e,
                                    isDisabled: n
                                })
                            }
                        })))(n, t, c),
                        [d, m] = l.useMeasure();
                    return s.createElement(l.Box, {
                        ref: d
                    }, s.createElement(i.Table, {
                        headers: f(u),
                        columns: u,
                        rows: e,
                        rowHeight: 35,
                        headerRowHeight: 32,
                        maxHeight: r || 350,
                        fixedColumns: g.length,
                        width: m.width,
                        measureColumn: y,
                        cellRenderer: (t, n, r) => t.component(n, e[r], a),
                        themeStyles: v
                    }))
                }
            },
            1602: function(e, t, n) {},
            1603: function(e, t, n) {
                "use strict";
                var a = this && this.__awaiter || function(e, t, n, a) {
                        return new(n || (n = Promise))((function(r, i) {
                            function l(e) {
                                try {
                                    o(a.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function s(e) {
                                try {
                                    o(a.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function o(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(l, s)
                            }
                            o((a = a.apply(e, t || [])).next())
                        }))
                    },
                    r = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    },
                    i = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const l = r(n(0)),
                    s = n(12),
                    o = n(15),
                    c = i(n(44)),
                    u = n(96),
                    d = n(1604),
                    m = n(63);
                t.PassiveDestination = e => {
                    const t = e.match.params,
                        [n, r] = l.useState(),
                        [i, p] = l.useState(),
                        [g, h] = l.useState(),
                        [f, v] = l.useState();
                    l.useEffect(() => {
                        a(void 0, void 0, void 0, (function*() {
                            const e = `${m.API_URLS.datastream}${t.datastream_id}/?page_size=300`,
                                {
                                    data: n
                                } = yield c.default.get(e);
                            r(n)
                        }))
                    }, [t.datastream_id]), l.useEffect(() => {
                        if (!n || !n.has_schema_mapping) return p(void 0), void h(void 0);
                        if ("string" == typeof n.passive_destinations) {
                            (() => a(void 0, void 0, void 0, (function*() {
                                const {
                                    data: e
                                } = yield c.default.get(n.passive_destinations);
                                p(e)
                            })))()
                        } else p(n.passive_destinations);
                        a(void 0, void 0, void 0, (function*() {
                            const {
                                data: {
                                    actions: {
                                        POST: {
                                            time_range_preset: e
                                        }
                                    }
                                }
                            } = yield c.default.request({
                                url: n.url + "passive-destinations/",
                                method: "OPTIONS"
                            });
                            h(o.sortBy(e.choices, ({
                                value: e
                            }) => e))
                        }))
                    }, [n]);
                    return i && g && Array.isArray(i.destinations) ? l.createElement(d.PassiveDestinationsList, {
                        destinations: i.destinations,
                        timeRange: i.timerange,
                        timeRangePresets: g,
                        savingTimeRangeStatus: f,
                        onSavePassiveDestination: e => a(void 0, void 0, void 0, (function*() {
                            if (n) {
                                v("saving");
                                try {
                                    const {
                                        data: t
                                    } = yield c.default.post(n.url + "passive-destinations/", e);
                                    p(t), v(void 0)
                                } catch (e) {
                                    v("error"), setTimeout(() => v(void 0), 4e3)
                                }
                            }
                        })),
                        disabled: !n || !n.stack.permissions.isDatastreamManager
                    }) : l.createElement(l.Fragment, null, l.createElement(u.LoadingIndicator, null), l.createElement(s.Text, {
                        textAlign: "center"
                    }, "Loading Passive Destinations..."))
                }
            },
            1604: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(12),
                    l = n(1605),
                    s = n(1607);
                t.PassiveDestinationsList = ({
                    destinations: e,
                    timeRange: t,
                    onSavePassiveDestination: n,
                    timeRangePresets: a,
                    savingTimeRangeStatus: o,
                    disabled: c
                }) => r.createElement(i.Join, {
                    orientation: "vertical",
                    maxWidth: 480
                }, e.map(e => r.createElement(l.PassiveDestinationItem, Object.assign({
                    key: e.name
                }, e))), r.createElement(s.PresetPicker, {
                    timeRange: t,
                    onSavePassiveDestination: n,
                    timeRangePresets: a,
                    savingTimeRangeStatus: o,
                    disabled: c
                }))
            },
            1605: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(12),
                    l = n(1606);
                t.PassiveDestinationItem = ({
                    description: e,
                    logo_url: t,
                    name: n,
                    url: a,
                    type: s
                }) => r.createElement(i.Join, {
                    spacing: "large"
                }, r.createElement(i.Box, {
                    flexBasis: "30px",
                    flexGrow: 0,
                    flexShrink: 0
                }, r.createElement(i.Image, {
                    src: t,
                    alt: n,
                    maxHeight: 30,
                    maxWidth: "100%"
                })), r.createElement(i.Join, {
                    spacing: "x-small",
                    orientation: "vertical"
                }, r.createElement(i.Text, {
                    fontWeight: "bold"
                }, n), r.createElement(i.Text, {
                    dangerouslySetInnerHTML: {
                        __html: e
                    }
                }), "url" === s ? r.createElement(l.CopyText, {
                    value: a
                }) : r.createElement(i.Button.Secondary, {
                    as: "a",
                    href: a,
                    target: "_blank",
                    size: "small"
                }, "Open in ", n)))
            },
            1606: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(12);
                t.CopyText = ({
                    value: e
                }) => {
                    const t = r.useRef(null);
                    return r.createElement("div", {
                        className: "input-group"
                    }, r.createElement("input", {
                        ref: t,
                        className: "form-control",
                        readOnly: !0,
                        type: "text",
                        value: e
                    }), r.createElement("div", {
                        className: "input-group-btn"
                    }, r.createElement("button", {
                        className: "btn btn-default",
                        onClick: () => {
                            t.current && (t.current.select(), document.execCommand("copy"))
                        },
                        type: "button"
                    }, r.createElement(i.Icon, {
                        name: "clone",
                        size: "small"
                    }))))
                }
            },
            1607: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(12),
                    l = n(1608),
                    s = 0;
                t.PresetPicker = ({
                    timeRange: e,
                    onSavePassiveDestination: t,
                    timeRangePresets: n,
                    savingTimeRangeStatus: a,
                    disabled: o
                }) => {
                    const c = n.map(({
                        display_name: e,
                        value: t
                    }) => ({
                        label: e,
                        value: String(t)
                    }));
                    return r.createElement(i.Join, {
                        spacing: "large",
                        width: "100%"
                    }, r.createElement(i.Box, {
                        flexBasis: "30px",
                        flexGrow: 0,
                        flexShrink: 0
                    }, "saving" === a && r.createElement(i.CircularProgress, {
                        marginTop: "medium"
                    })), r.createElement(i.Join, {
                        spacing: "small",
                        orientation: "vertical",
                        flexGrow: 1
                    }, r.createElement(i.Join, {
                        spacing: "x-small",
                        orientation: "vertical",
                        width: "100%",
                        block: !0
                    }, r.createElement(i.Text, null, "Time Range Preset"), r.createElement(i.Select, {
                        value: c.find(({
                            value: t
                        }) => t === String(e.time_range_preset)),
                        options: c,
                        onChange: ({
                            value: n
                        }) => t(Object.assign(Object.assign({}, e), {
                            time_range_preset: Number(n)
                        })),
                        size: "small",
                        disabled: o
                    })), e.time_range_preset === s && r.createElement(l.DateRangePicker, {
                        name: "date-range",
                        start: e.time_range_start,
                        end: e.time_range_end,
                        onChange: (n, a) => t(Object.assign(Object.assign({}, e), {
                            time_range_start: n,
                            time_range_end: a
                        })),
                        disabled: o
                    }), "error" === a && r.createElement(i.Alert, {
                        variant: "danger"
                    }, "Error saving time range")))
                }
            },
            1608: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    },
                    r = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = a(n(0)),
                    l = r(n(9)),
                    s = n(702),
                    o = n(12);
                n(748);
                t.DateRangePicker = ({
                    name: e,
                    start: t,
                    end: n,
                    onChange: a,
                    disabled: r
                }) => {
                    const [c, u] = i.useState(), d = l.default(null != t ? t : void 0), m = l.default(null != n ? n : void 0);
                    return i.createElement(o.Join, null, i.createElement(o.Join, {
                        orientation: "vertical",
                        spacing: "x-small"
                    }, i.createElement(o.Text, null, "Start date"), i.createElement(s.SingleDatePicker, {
                        id: e + "-start",
                        date: d,
                        onDateChange: e => e && a(e.format(), null != n ? n : m.format()),
                        focused: "start" === c,
                        onFocusChange: ({
                            focused: e
                        }) => u(e ? "start" : void 0),
                        isOutsideRange: e => l.default(e).isAfter(m, "day"),
                        displayFormat: "YYYY-MM-DD",
                        firstDayOfWeek: 1,
                        numberOfMonths: 1,
                        verticalSpacing: -12,
                        disabled: r
                    })), i.createElement(o.Join, {
                        orientation: "vertical",
                        spacing: "x-small"
                    }, i.createElement(o.Text, null, "End date"), i.createElement(s.SingleDatePicker, {
                        id: e + "-end",
                        date: m,
                        onDateChange: e => e && a(null != t ? t : d.format(), e.format()),
                        focused: "end" === c,
                        onFocusChange: ({
                            focused: e
                        }) => u(e ? "end" : void 0),
                        isOutsideRange: e => l.default(e).isBefore(d, "day"),
                        displayFormat: "YYYY-MM-DD",
                        firstDayOfWeek: 1,
                        numberOfMonths: 1,
                        verticalSpacing: -12,
                        disabled: r
                    })))
                }
            },
            167: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(12),
                    l = n(84);
                t.Section = ({
                    title: e,
                    subTitle: t,
                    children: n
                }) => r.createElement(i.Join, {
                    orientation: "vertical",
                    spacing: "small",
                    block: !0
                }, r.createElement(i.Heading, {
                    fontSize: "medium"
                }, e), r.createElement(i.Join, {
                    orientation: "vertical",
                    spacing: "medium",
                    block: !0
                }, r.createElement(i.Join, {
                    orientation: "vertical",
                    spacing: "x-small",
                    block: !0
                }, t && r.createElement(i.Text, {
                    maxWidth: l.textWidth
                }, t), n)))
            },
            1675: function(e, t) {},
            1698: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(12),
                    i = a(n(0)),
                    l = n(15),
                    s = n(56),
                    o = n(110),
                    c = n(377),
                    u = ({
                        headerBarProps: e,
                        workspaceSelectorProps: t
                    }) => {
                        var n, a;
                        const [s, o] = i.useState(!1), u = i.useMemo(() => Object.assign(Object.assign({}, e), {
                            workspace: Object.assign(Object.assign({}, e.workspace), {
                                selector: i.createElement(r.WorkspaceSelector, Object.assign({}, t))
                            }),
                            help: [...e.help, {
                                type: "button",
                                id: "contactSupport",
                                onClick: () => o(!0),
                                label: "Contact Support"
                            }],
                            user: e.user ? Object.assign(Object.assign({}, e.user), {
                                items: [...e.user.items, {
                                    id: "logout",
                                    type: "button",
                                    label: "Log out",
                                    onClick: () => {
                                        document.getElementById("logout-form").submit()
                                    }
                                }]
                            }) : void 0
                        }), [e, t]);
                        return i.createElement(i.Fragment, null, i.createElement(r.HeaderBarFixed, null, i.createElement(r.HeaderBar, Object.assign({}, u))), i.createElement(c.ContactModal, {
                            isOpen: s,
                            onSubmit: l.identity,
                            onCancel: () => o(!1),
                            email: (null === (n = e.user) || void 0 === n ? void 0 : n.email) || (null === (a = e.user) || void 0 === a ? void 0 : a.fullName)
                        }))
                    };
                class d extends HTMLElement {
                    get headerBar() {
                        const e = this.getAttribute("headerBar");
                        return e ? JSON.parse(e) : null
                    }
                    get workspaceSelector() {
                        const e = this.getAttribute("workspaceSelector");
                        return e ? JSON.parse(e) : null
                    }
                    connectedCallback() {
                        const e = document.createElement("div");
                        this.appendChild(e);
                        const t = this.headerBar,
                            n = this.workspaceSelector;
                        t && n && s.render({
                            component: i.createElement(u, {
                                headerBarProps: t,
                                workspaceSelectorProps: n
                            }),
                            container: e
                        })
                    }
                }
                o.defineCustomElement("zoom360-header-bar", d)
            },
            1699: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(768),
                    l = n(56),
                    s = n(110);
                class o extends HTMLElement {
                    get sideBar() {
                        const e = this.getAttribute("sideBar");
                        return e ? JSON.parse(e) : null
                    }
                    connectedCallback() {
                        const e = document.createElement("div");
                        this.appendChild(e);
                        const t = this.sideBar;
                        t && l.render({
                            component: r.createElement(i.SideBar, Object.assign({}, t)),
                            container: e
                        })
                    }
                }
                s.defineCustomElement("zoom360-side-bar", o)
            },
            1700: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(96),
                    i = a(n(0)),
                    l = n(1701),
                    s = n(769),
                    o = n(1703);
                t.Header = e => {
                    switch (e.type) {
                        case "resource":
                            return e.readOnly ? i.createElement(s.ResourceLogo, Object.assign({}, e)) : i.createElement(l.ResourceInfo, {
                                header: e
                            });
                        case "connection":
                            return i.createElement(o.ConnectionInfo, {
                                header: e
                            });
                        case "loading":
                            return i.createElement(r.LoadingIndicator, null)
                    }
                }
            },
            1701: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    },
                    r = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = a(n(0)),
                    l = n(12),
                    s = r(n(44)),
                    o = n(1702),
                    c = n(769);
                t.ResourceInfo = ({
                    header: e
                }) => {
                    const [t, n] = i.useState((({
                        name: e,
                        description: t
                    }) => ({
                        name: e,
                        description: t
                    }))(e)), [a, r] = i.useState(), [u, d] = i.useState(!1), [m, p] = i.useState(!1), g = e => {
                        d(e), r(void 0)
                    };
                    return i.createElement(l.Join, {
                        orientation: "vertical",
                        spacing: "small"
                    }, i.createElement(c.ResourceLogo, {
                        imageUrl: e.imageUrl,
                        imageAlt: e.imageAlt,
                        description: t.description,
                        connectionUrl: e.connectionUrl,
                        name: t.name
                    }), e.hasChangePermission && i.createElement(l.Button.Secondary, {
                        size: "small",
                        onClick: () => g(!0)
                    }, i.createElement(l.Icon, {
                        name: "edit"
                    }), "Edit"), i.createElement(o.InfoModal, {
                        isOpen: u,
                        isLoading: m,
                        handleCancel: () => g(!1),
                        initialInfo: t,
                        imageUrl: e.imageUrl,
                        handleSubmit: t => {
                            r(void 0), p(!0), s.default.patch(e.url, {
                                description: t.description,
                                name: t.name
                            }).then(() => {
                                g(!1), n(t)
                            }).catch(e => {
                                e.response && r(e.response.data.name[0])
                            }).finally(() => {
                                p(!1)
                            })
                        },
                        error: a
                    }))
                }
            },
            1702: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(12),
                    i = n(378),
                    l = a(n(0)),
                    s = [{
                        name: "name",
                        label: "Name",
                        placeholder: "Enter your datastream title here",
                        validators: [
                            [n(284).isRequired, "This field is required"]
                        ],
                        maxLength: 100
                    }, {
                        name: "description",
                        label: "Description",
                        placeholder: "Enter your description here",
                        as: "textarea",
                        maxLength: 1e3
                    }];
                t.InfoModal = ({
                    handleCancel: e,
                    handleSubmit: t,
                    imageUrl: n,
                    initialInfo: a,
                    isOpen: o,
                    isLoading: c,
                    error: u
                }) => l.createElement(i.FormModal, {
                    handleCancel: e,
                    handleSubmit: t,
                    title: "Edit Datastream",
                    isOpen: o,
                    config: s,
                    values: a,
                    errors: u ? {
                        name: u
                    } : void 0,
                    submitLabel: "Save",
                    isLoading: c
                }, e => l.createElement(r.Join, {
                    orientation: "vertical",
                    spacing: u ? "small" : "medium"
                }, n && l.createElement(r.Flex, {
                    justifyContent: "center",
                    width: "100%"
                }, l.createElement(r.Image, {
                    height: "64px",
                    alt: "logo",
                    src: n
                })), e))
            },
            1703: function(e, t, n) {
                "use strict";
                var a = this && this.__awaiter || function(e, t, n, a) {
                        return new(n || (n = Promise))((function(r, i) {
                            function l(e) {
                                try {
                                    o(a.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function s(e) {
                                try {
                                    o(a.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function o(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(l, s)
                            }
                            o((a = a.apply(e, t || [])).next())
                        }))
                    },
                    r = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    },
                    i = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const l = r(n(0)),
                    s = n(12),
                    o = i(n(44)),
                    c = n(378),
                    u = n(284),
                    d = [{
                        name: "name",
                        label: "Name",
                        placeholder: "Enter your datastream title here",
                        validators: [
                            [u.isRequired, "This field is required"]
                        ],
                        maxLength: 60
                    }];
                t.ConnectionInfo = ({
                    header: e
                }) => {
                    const [t, n] = l.useState((({
                        name: e
                    }) => ({
                        name: e
                    }))(e)), [r, i] = l.useState(!1);
                    return l.createElement(s.Join, {
                        orientation: "vertical",
                        spacing: "small"
                    }, l.createElement(s.Flex, {
                        width: "100%"
                    }, l.createElement(s.Image, {
                        height: "40px",
                        alt: "datastream",
                        src: e.imageUrl
                    })), l.createElement(s.Text, {
                        fontSize: "x-small",
                        css: {
                            wordBreak: "break-word"
                        }
                    }, t.name), e.hasChangePermission && l.createElement(s.Button.Secondary, {
                        size: "small",
                        onClick: () => i(!0)
                    }, l.createElement(s.Icon, {
                        name: "edit"
                    }), "Edit"), l.createElement(c.FormModal, {
                        handleCancel: () => i(!1),
                        handleSubmit: t => a(void 0, void 0, void 0, (function*() {
                            yield o.default.patch(e.url, {
                                name: t.name
                            }), i(!1), n(t)
                        })),
                        title: "Edit Connection",
                        isOpen: r,
                        config: d,
                        values: t,
                        submitLabel: "Save"
                    }, t => l.createElement(s.Join, {
                        orientation: "vertical",
                        spacing: "medium"
                    }, l.createElement(s.Flex, {
                        justifyContent: "center",
                        width: "100%"
                    }, l.createElement(s.Image, {
                        height: "64px",
                        alt: "logo",
                        src: e.imageUrl
                    })), t)))
                }
            },
            1704: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(12),
                    l = n(1705),
                    s = n(1707);
                t.Footer = e => {
                    switch (e.type) {
                        case "exploreNavigation":
                            return r.createElement(r.Fragment, null, r.createElement(i.Navigation.Item, null, r.createElement(i.Navigation.Link, {
                                href: e.url
                            }, r.createElement(i.Flex, {
                                justifyContent: "space-between",
                                marginRight: "x-small"
                            }, r.createElement(i.Text, null, "Open in Explore"), r.createElement(l.DatatapIcon, {
                                name: "insights-logo",
                                size: "small"
                            })))), r.createElement(s.NavigationWrapper, {
                                items: e.items
                            }));
                        case "navigation":
                            return r.createElement(s.NavigationWrapper, {
                                items: e.items
                            })
                    }
                }
            },
            1705: function(e, t, n) {
                "use strict";
                var a = this && this.__rest || function(e, t) {
                        var n = {};
                        for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var r = 0;
                            for (a = Object.getOwnPropertySymbols(e); r < a.length; r++) t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]])
                        }
                        return n
                    },
                    r = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = r(n(0)),
                    l = n(12),
                    s = {
                        "insights-logo": n(1706).ReactComponent
                    };
                t.DatatapIcon = e => {
                    var {
                        name: t
                    } = e, n = a(e, ["name"]);
                    const r = s[t] || null;
                    return r && i.createElement(l.Icon, Object.assign({}, n), i.createElement(r, null))
                }
            },
            1706: function(e, t, n) {
                "use strict";
                n.r(t), n.d(t, "ReactComponent", (function() {
                    return l
                }));
                var a = n(0);

                function r() {
                    return (r = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }).apply(this, arguments)
                }
                var i = a.createElement("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, a.createElement("path", {
                    d: "M7.94 5.091C9.78 4.027 11.634 3 11.79 3c.032 0 .13.04.28.113.61.295 2.095 1.124 3.572 1.978L11.79 7.32 7.94 5.091z",
                    fill: "#ACCBF6"
                }), a.createElement("path", {
                    d: "M7.895 14.08l-3.732 2.16c-.08-.135-.118-2.258-.118-4.387l3.85 2.228z",
                    fill: "#D1E2FA"
                }), a.createElement("path", {
                    d: "M15.642 5.091c1.846 1.069 3.669 2.168 3.777 2.322l-3.733 2.16-3.895-2.254 1.947-1.127 1.904-1.1z",
                    fill: "#488BEB"
                }), a.createElement("path", {
                    d: "M19.42 7.413c.077.172.116 2.276.117 4.388l-3.85-2.228 3.732-2.16z",
                    fill: "#214982"
                }), a.createElement("path", {
                    d: "M19.42 16.24c-.08.138-1.922 1.25-3.778 2.323l-3.851-2.228 3.895-2.254 3.733 2.16z",
                    fill: "#3873C7"
                }), a.createElement("path", {
                    d: "M19.536 11.853c0 2.115-.038 4.218-.117 4.387l-3.733-2.16 3.85-2.227z",
                    fill: "#214982"
                }), a.createElement("path", {
                    fill: "#ACCBF6",
                    d: "M11.79 11.827L7.896 14.08 4 11.827l3.895-2.254z"
                }), a.createElement("path", {
                    fill: "#7EADF1",
                    d: "M15.686 14.08l-3.895 2.255-3.896-2.254 3.896-2.254z"
                }), a.createElement("path", {
                    d: "M15.642 18.563c-1.841 1.064-3.695 2.09-3.851 2.09-.157 0-2.01-1.026-3.851-2.09l3.85-2.228 3.852 2.228z",
                    fill: "#76A8F0"
                }), a.createElement("path", {
                    fill: "#3873C7",
                    d: "M19.537 11.801v.052l-3.85 2.228-3.896-2.254 3.895-2.254 3.851 2.228z"
                }), a.createElement("path", {
                    d: "M4.163 16.24l3.732-2.16 3.896 2.255-3.851 2.228c-1.842-1.065-3.67-2.168-3.777-2.322z",
                    fill: "#ACCBF6"
                }), a.createElement("path", {
                    d: "M11.79 7.303l3.89 2.266-3.89 2.264-.007-.003.008-.003-3.896-2.254 3.896-2.27z",
                    fill: "#7EADF1"
                }), a.createElement("path", {
                    d: "M4.045 11.801l.007-1.495.095-2.814.016-.079 3.732 2.16.312-.18L4.045 11.8z",
                    fill: "#D1E2FA"
                }), a.createElement("path", {
                    d: "M7.94 5.091l3.85 2.228-3.895 2.254-3.732-2.16c.078-.137 1.921-1.248 3.777-2.322z",
                    fill: "#C4DAF8"
                }));

                function l(e) {
                    return a.createElement("svg", r({
                        viewBox: "2 2 20 20"
                    }, e), i)
                }
                t.default = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjIgMiAyMCAyMCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNNy45NCA1LjA5MUM5Ljc4IDQuMDI3IDExLjYzNCAzIDExLjc5IDNjLjAzMiAwIC4xMy4wNC4yOC4xMTMuNjEuMjk1IDIuMDk1IDEuMTI0IDMuNTcyIDEuOTc4TDExLjc5IDcuMzIgNy45NCA1LjA5MXoiIGZpbGw9IiNBQ0NCRjYiLz48cGF0aCBkPSJNNy44OTUgMTQuMDhsLTMuNzMyIDIuMTZjLS4wOC0uMTM1LS4xMTgtMi4yNTgtLjExOC00LjM4N2wzLjg1IDIuMjI4eiIgZmlsbD0iI0QxRTJGQSIvPjxwYXRoIGQ9Ik0xNS42NDIgNS4wOTFjMS44NDYgMS4wNjkgMy42NjkgMi4xNjggMy43NzcgMi4zMjJsLTMuNzMzIDIuMTYtMy44OTUtMi4yNTQgMS45NDctMS4xMjcgMS45MDQtMS4xeiIgZmlsbD0iIzQ4OEJFQiIvPjxwYXRoIGQ9Ik0xOS40MiA3LjQxM2MuMDc3LjE3Mi4xMTYgMi4yNzYuMTE3IDQuMzg4bC0zLjg1LTIuMjI4IDMuNzMyLTIuMTZ6IiBmaWxsPSIjMjE0OTgyIi8+PHBhdGggZD0iTTE5LjQyIDE2LjI0Yy0uMDguMTM4LTEuOTIyIDEuMjUtMy43NzggMi4zMjNsLTMuODUxLTIuMjI4IDMuODk1LTIuMjU0IDMuNzMzIDIuMTZ6IiBmaWxsPSIjMzg3M0M3Ii8+PHBhdGggZD0iTTE5LjUzNiAxMS44NTNjMCAyLjExNS0uMDM4IDQuMjE4LS4xMTcgNC4zODdsLTMuNzMzLTIuMTYgMy44NS0yLjIyN3oiIGZpbGw9IiMyMTQ5ODIiLz48cGF0aCBmaWxsPSIjQUNDQkY2IiBkPSJNMTEuNzkgMTEuODI3TDcuODk2IDE0LjA4IDQgMTEuODI3bDMuODk1LTIuMjU0eiIvPjxwYXRoIGZpbGw9IiM3RUFERjEiIGQ9Ik0xNS42ODYgMTQuMDhsLTMuODk1IDIuMjU1LTMuODk2LTIuMjU0IDMuODk2LTIuMjU0eiIvPjxwYXRoIGQ9Ik0xNS42NDIgMTguNTYzYy0xLjg0MSAxLjA2NC0zLjY5NSAyLjA5LTMuODUxIDIuMDktLjE1NyAwLTIuMDEtMS4wMjYtMy44NTEtMi4wOWwzLjg1LTIuMjI4IDMuODUyIDIuMjI4eiIgZmlsbD0iIzc2QThGMCIvPjxwYXRoIGZpbGw9IiMzODczQzciIGQ9Ik0xOS41MzcgMTEuODAxdi4wNTJsLTMuODUgMi4yMjgtMy44OTYtMi4yNTQgMy44OTUtMi4yNTQgMy44NTEgMi4yMjh6Ii8+PHBhdGggZD0iTTQuMTYzIDE2LjI0bDMuNzMyLTIuMTYgMy44OTYgMi4yNTUtMy44NTEgMi4yMjhjLTEuODQyLTEuMDY1LTMuNjctMi4xNjgtMy43NzctMi4zMjJ6IiBmaWxsPSIjQUNDQkY2Ii8+PHBhdGggZD0iTTExLjc5IDcuMzAzbDMuODkgMi4yNjYtMy44OSAyLjI2NC0uMDA3LS4wMDMuMDA4LS4wMDMtMy44OTYtMi4yNTQgMy44OTYtMi4yN3oiIGZpbGw9IiM3RUFERjEiLz48cGF0aCBkPSJNNC4wNDUgMTEuODAxbC4wMDctMS40OTUuMDk1LTIuODE0LjAxNi0uMDc5IDMuNzMyIDIuMTYuMzEyLS4xOEw0LjA0NSAxMS44eiIgZmlsbD0iI0QxRTJGQSIvPjxwYXRoIGQ9Ik03Ljk0IDUuMDkxbDMuODUgMi4yMjgtMy44OTUgMi4yNTQtMy43MzItMi4xNmMuMDc4LS4xMzcgMS45MjEtMS4yNDggMy43NzctMi4zMjJ6IiBmaWxsPSIjQzREQUY4Ii8+PC9nPjwvc3ZnPg=="
            },
            1707: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(12),
                    l = e => null == e ? void 0 : e.scrollIntoView({
                        block: "center"
                    }),
                    s = e => e.selected ? Object.assign(Object.assign({}, e), {
                        ref: l
                    }) : e;
                t.NavigationWrapper = ({
                    items: e
                }) => {
                    const t = e.map(e => Array.isArray(e) ? e.map(s) : s(e));
                    return r.createElement(i.Navigation.Simple, {
                        items: t
                    })
                }
            },
            1708: function(e, t, n) {
                "use strict";
                var a = this && this.__rest || function(e, t) {
                        var n = {};
                        for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var r = 0;
                            for (a = Object.getOwnPropertySymbols(e); r < a.length; r++) t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]])
                        }
                        return n
                    },
                    r = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = r(n(0)),
                    l = n(12),
                    s = n(1709),
                    o = ({
                        items: e = []
                    }) => i.createElement(l.Navigation.List, {
                        marginBottom: "small"
                    }, e.map(e => {
                        const t = JSON.stringify(e);
                        if (Array.isArray(e)) return i.createElement(o, {
                            key: t,
                            items: e
                        });
                        const {
                            text: n,
                            href: r,
                            selected: s
                        } = e, c = a(e, ["text", "href", "selected"]);
                        return r ? i.createElement(l.Navigation.Item, Object.assign({
                            key: t
                        }, c), i.createElement(l.Navigation.Link, {
                            href: r,
                            selected: s
                        }, n)) : i.createElement(l.Navigation.Heading, Object.assign({
                            key: t
                        }, c), n)
                    })),
                    c = ({
                        items: e
                    }) => i.createElement(l.Navigation, null, i.createElement(o, {
                        items: e
                    })),
                    u = e => null == e ? void 0 : e.scrollIntoView({
                        block: "center"
                    }),
                    d = e => e.selected ? Object.assign(Object.assign({}, e), {
                        ref: u
                    }) : e,
                    m = ({
                        items: e
                    }) => {
                        const t = e.map(e => Array.isArray(e) ? e.map(d) : d(e));
                        return i.createElement(c, {
                            items: t
                        })
                    };
                t.Content = e => {
                    switch (e.type) {
                        case "navigation":
                            return i.createElement(m, {
                                items: e.items
                            });
                        case "wizard":
                            return i.createElement(s.Wizard, {
                                steps: e.steps,
                                onStepChange: e.onStepChange
                            })
                    }
                }
            },
            1709: function(e, t, n) {
                "use strict";
                var a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(12);
                t.Wizard = ({
                    steps: e,
                    onStepChange: t
                }) => {
                    const n = e.findIndex(({
                        current: e
                    }) => e);
                    return r.default.createElement(i.Stepper, null, e.map(({
                        name: a,
                        url: l
                    }, s) => {
                        const o = s > n,
                            c = l && !o ? {
                                href: l,
                                as: "a"
                            } : {};
                        return r.default.createElement(i.Stepper.Step, {
                            completed: s < n,
                            disabled: o,
                            key: a
                        }, r.default.createElement(i.Stepper.Item, Object.assign({
                            onClick: !o && s !== n && t ? () => t(s) : void 0
                        }, c), a), s + 1 < e.length && r.default.createElement(i.Stepper.Connector, null))
                    }))
                }
            },
            1710: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(776),
                    l = n(1711),
                    s = n(56),
                    o = e => r.createElement(i.BrowserRouter, null, r.createElement(i.Switch, null, r.createElement(i.Route, {
                        exact: !0,
                        path: "/:stack_slug/:datastream_slug-:datastream_id([0-9]+)/smart-naming-convention/",
                        render: t => r.createElement(l.SmartNamingConventionWizard, Object.assign({}, t, e))
                    })));
                class c extends HTMLElement {
                    get data() {
                        if (this.hasAttribute("data")) {
                            const e = this.getAttribute("data");
                            return e ? JSON.parse(e) : void 0
                        }
                    }
                    connectedCallback() {
                        s.render({
                            component: r.createElement(o, {
                                data: this.data
                            }),
                            container: this
                        })
                    }
                }
                const u = "zoom360-single-page-app";
                customElements.get(u) || customElements.define(u, c)
            },
            1711: function(e, t, n) {
                "use strict";
                var a = this && this.__awaiter || function(e, t, n, a) {
                        return new(n || (n = Promise))((function(r, i) {
                            function l(e) {
                                try {
                                    o(a.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function s(e) {
                                try {
                                    o(a.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function o(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(l, s)
                            }
                            o((a = a.apply(e, t || [])).next())
                        }))
                    },
                    r = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    },
                    i = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const l = r(n(0)),
                    s = n(768),
                    o = n(12),
                    c = i(n(44)),
                    u = n(288),
                    d = n(63),
                    m = n(770),
                    p = n(1713),
                    g = n(1729),
                    h = n(1730),
                    f = n(144);
                t.SmartNamingConventionWizard = e => {
                    const [t, n] = l.useReducer(m.reducer, m.initialState), [r, i] = l.useState(), [v, y] = l.useState(!1), E = e.match.params, M = f.getDataStreamUrl(E.stack_slug, E.datastream_slug, E.datastream_id);
                    l.useEffect(() => {
                        a(void 0, void 0, void 0, (function*() {
                            const e = `${d.API_URLS.datastream}${E.datastream_id}/?page_size=300`,
                                {
                                    data: t
                                } = yield c.default.get(e);
                            i(t)
                        }))
                    }, [E.datastream_id]);
                    const b = Object.values(t.steps).map(({
                        name: e
                    }, n) => ({
                        name: e,
                        current: n === t.activeStep
                    }));
                    return l.createElement(l.Fragment, null, l.createElement("div", null, l.createElement(s.SideBar, {
                        content: {
                            type: "wizard",
                            steps: b,
                            onStepChange: e => {
                                n({
                                    type: "activeStep/set",
                                    payload: e
                                })
                            }
                        },
                        header: r ? {
                            type: "resource",
                            name: r.name,
                            url: r.url,
                            imageUrl: r.logo_url,
                            imageAlt: "datastream",
                            description: r.description,
                            readOnly: !0,
                            connectionUrl: r.auth_change_url,
                            hasChangePermission: r.stack.permissions.isDatastreamManager
                        } : {
                            type: "loading"
                        },
                        contentTitle: "Smart Naming Conventions"
                    })), l.createElement(o.Box, {
                        flexGrow: 1
                    }, l.createElement(o.Join, {
                        block: !0,
                        orientation: "vertical",
                        padding: "medium",
                        height: "100%"
                    }, l.createElement(u.DialogWindow, {
                        visible: v,
                        onClose: () => y(!1),
                        title: "Warning",
                        actionButtons: l.createElement(l.Fragment, null, l.createElement(o.Button.Secondary, {
                            onClick: () => y(!1)
                        }, "Return"), l.createElement(o.Button, {
                            onClick: () => {
                                y(!1), window.location.href = M
                            }
                        }, "Exit"))
                    }, "If you exit the wizard, all progress will be lost. Are you sure you want to exit?"), -1 === t.activeStep ? l.createElement(h.WelcomeScreen, {
                        onCancel: () => y(!0),
                        dispatch: n
                    }) : l.createElement(l.Fragment, null, l.createElement(p.Content, {
                        state: t,
                        dispatch: n,
                        datastreamId: E.datastream_id
                    }), l.createElement(g.NavigationBar, {
                        state: t,
                        dispatch: n,
                        stepsCount: b.length,
                        onCreate: () => a(void 0, void 0, void 0, (function*() {
                            t.steps.step0.column && (yield c.default.post(f.getSmartNamingUrl(E.datastream_id), {
                                column: t.steps.step0.column.id,
                                samples: t.shared.selectedSamples,
                                mapping: t.shared.mapping,
                                constraints: t.shared.constraints,
                                email_for_warning: t.steps.step5.emailForWarning,
                                raise_for_warning: t.steps.step5.raiseForWarning,
                                email_for_error: t.steps.step4.emailForError,
                                continue_for_error: t.steps.step4.continueOnError
                            }), window.location.href = M)
                        })),
                        onCancel: () => y(!0)
                    })))))
                }
            },
            1713: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(1714),
                    l = n(1715),
                    s = n(1716),
                    o = n(1723),
                    c = n(1725),
                    u = n(1726),
                    d = n(1728);
                t.Content = ({
                    state: e,
                    dispatch: t,
                    datastreamId: n
                }) => {
                    var a;
                    switch (e.activeStep) {
                        case 0:
                            return r.createElement(i.SelectColumn, {
                                allColumns: e.shared.allColumns,
                                columnId: null === (a = e.steps.step0.column) || void 0 === a ? void 0 : a.id,
                                dispatch: t,
                                datastreamId: n
                            });
                        case 1:
                            return r.createElement(l.DeselectSamples, {
                                allSamples: e.steps.step1.allSamples,
                                errorThreshold: e.steps.step1.errorThreshold,
                                warningThreshold: e.steps.step1.warningThreshold,
                                samplesMaxLength: e.steps.step1.samplesMaxLength,
                                selectedSamples: e.shared.selectedSamples,
                                column: e.shared.column,
                                dispatch: t,
                                datastreamId: n
                            });
                        case 2:
                            return r.createElement(s.RulesAndDelimiters, {
                                loading: e.steps.step2.loading,
                                isDirty: e.steps.step2.isDirty,
                                constraints: e.steps.step2.constraints,
                                selectedSamples: e.shared.selectedSamples,
                                delimiters: e.shared.delimiters,
                                rules: e.shared.rules,
                                splitData: e.steps.step2.splitData,
                                dispatch: t,
                                datastreamId: n
                            });
                        case 3:
                            return r.createElement(o.SetColumnNames, {
                                allColumns: e.shared.allColumns,
                                splitColumns: e.shared.splitColumns,
                                validationErrors: e.steps.step3.validationErrors,
                                dispatch: t
                            });
                        case 4:
                            return r.createElement(c.ReceiveErrors, {
                                columnName: e.shared.column.name,
                                emailForError: e.steps.step4.emailForError,
                                continueOnError: e.steps.step4.continueOnError,
                                dispatch: t,
                                delimiters: e.shared.delimiters
                            });
                        case 5:
                            return r.createElement(u.ReceiveWarnings, {
                                mapping: e.shared.mapping,
                                rules: e.shared.rules,
                                emailForWarning: e.steps.step5.emailForWarning,
                                raiseForWarning: e.steps.step5.raiseForWarning,
                                dispatch: t
                            });
                        case 6:
                            return r.createElement(d.Summary, {
                                columnName: e.shared.column.name,
                                delimiters: e.shared.delimiters,
                                rules: e.shared.rules,
                                emailForError: e.steps.step4.emailForError,
                                emailForWarning: e.steps.step5.emailForWarning,
                                raiseForWarning: e.steps.step5.raiseForWarning,
                                mapping: e.shared.mapping
                            });
                        default:
                            return r.createElement("div", null, "other steps")
                    }
                }
            },
            1714: function(e, t, n) {
                "use strict";
                var a = this && this.__awaiter || function(e, t, n, a) {
                        return new(n || (n = Promise))((function(r, i) {
                            function l(e) {
                                try {
                                    o(a.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function s(e) {
                                try {
                                    o(a.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function o(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(l, s)
                            }
                            o((a = a.apply(e, t || [])).next())
                        }))
                    },
                    r = this && this.__rest || function(e, t) {
                        var n = {};
                        for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var r = 0;
                            for (a = Object.getOwnPropertySymbols(e); r < a.length; r++) t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]])
                        }
                        return n
                    },
                    i = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    },
                    l = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const s = i(n(0)),
                    o = n(12),
                    c = n(771),
                    u = n(63),
                    d = l(n(44)),
                    m = n(96),
                    p = n(167),
                    g = n(84);
                t.SelectColumn = ({
                    allColumns: e,
                    columnId: t,
                    dispatch: n,
                    datastreamId: i
                }) => {
                    const [l, h] = s.useState(""), f = c.useDebounce(l, 300);
                    if (s.useEffect(() => {
                            a(void 0, void 0, void 0, (function*() {
                                const e = `${u.API_URLS.column_mapping}?datastream_id=${i}`,
                                    t = (e, n = []) => a(void 0, void 0, void 0, (function*() {
                                        const {
                                            data: a
                                        } = yield d.default.get(e);
                                        return n.push(...a.results), a.next ? t(a.next, n) : n
                                    })),
                                    r = yield t(e);
                                n({
                                    type: "shared/columnsReceived",
                                    payload: r
                                })
                            }))
                        }, [n, i]), !e.length) return s.createElement(m.LoadingIndicator, null);
                    const v = e.filter(e => e.name.toLowerCase().includes(f.toLowerCase()) && e.target_column && "dimension" === e.target_column.usage);
                    return s.createElement(p.Section, {
                        title: "Select Column",
                        subTitle: "Please choose a dimension-mapped column from this Datastream that contains the naming convention."
                    }, s.createElement(o.Join, {
                        orientation: "vertical",
                        spacing: "x-small",
                        paddingTop: "small",
                        maxWidth: g.contentWidth,
                        block: !0
                    }, s.createElement(o.Join, {
                        orientation: "vertical",
                        spacing: "x-small",
                        block: !0
                    }, s.createElement(o.Text, null, "Select a column to proceed:"), s.createElement(o.Input.Sink, {
                        size: "small"
                    }, s.createElement(o.Input, {
                        value: l,
                        onChange: e => {
                            h(e.target.value)
                        },
                        placeholder: "Filter Column Names"
                    }), s.createElement(o.Input.Affix, {
                        name: "search"
                    }))), s.createElement(o.BorderBox, {
                        borderColor: "gray.3"
                    }, s.createElement(o.Listbox.Virtual, {
                        itemSize: "medium",
                        maxVisibleItems: 8,
                        items: v
                    }, e => {
                        var {
                            index: a
                        } = e, i = r(e, ["index"]);
                        const l = v[a];
                        return s.createElement(o.Listbox.Item, Object.assign({}, i, {
                            onClick: () => n({
                                type: "step0/selectColumn",
                                payload: l
                            }),
                            selected: t === l.id,
                            key: l.id,
                            paddingLeft: "x-small"
                        }), l.name)
                    }))))
                }
            },
            1715: function(e, t, n) {
                "use strict";
                var a = this && this.__awaiter || function(e, t, n, a) {
                        return new(n || (n = Promise))((function(r, i) {
                            function l(e) {
                                try {
                                    o(a.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function s(e) {
                                try {
                                    o(a.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function o(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(l, s)
                            }
                            o((a = a.apply(e, t || [])).next())
                        }))
                    },
                    r = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    },
                    i = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const l = r(n(0)),
                    s = n(12),
                    o = n(771),
                    c = n(96),
                    u = i(n(44)),
                    d = n(63),
                    m = n(144),
                    p = n(167),
                    g = n(84);
                t.DeselectSamples = ({
                    allSamples: e,
                    errorThreshold: t,
                    warningThreshold: n,
                    samplesMaxLength: r,
                    selectedSamples: i,
                    column: h,
                    dispatch: f,
                    datastreamId: v
                }) => {
                    const y = s.useTheme(),
                        [E, M] = l.useState(""),
                        b = o.useDebounce(E, 300),
                        _ = i.length,
                        j = _ >= t,
                        I = e.length >= r;
                    l.useEffect(() => {
                        a(void 0, void 0, void 0, (function*() {
                            const e = `${d.API_URLS.datastream}${v}/smart-naming-convention/samples/`,
                                t = (yield u.default.post(e, {
                                    column_id: h.id
                                })).data;
                            f({
                                type: "step1/samplesReceived",
                                payload: t
                            })
                        }))
                    }, [h.id, v, f]);
                    const O = l.useMemo(() => e.filter(e => e.toLowerCase().includes(b.toLowerCase())), [e, b]);
                    if (e.length < 1) return l.createElement(c.LoadingIndicator, null);
                    const x = m.checkSampleCount({
                        samples: e,
                        errorThreshold: t,
                        warningThreshold: n
                    });
                    return l.createElement(p.Section, {
                        title: "Exclude values"
                    }, l.createElement(s.Join, {
                        orientation: "vertical",
                        spacing: "medium",
                        block: !0
                    }, l.createElement(s.Join, {
                        orientation: "vertical",
                        spacing: "medium",
                        maxWidth: g.textWidth
                    }, l.createElement(s.Text, null, "We know that mistakes happen. Some of your values might not be compliant with your naming convention. Please review the below list carefully and deselect any entries that don't fit your convention."), I && l.createElement(s.Alert, {
                        variant: "warning",
                        withIcon: !0
                    }, "A high amount of values has been detected in the column ", h.name, ". We have limited them to ", r, " values."), !j && "error" !== x && l.createElement(s.Alert, {
                        variant: "danger",
                        withIcon: !0
                    }, "You have deselected too many ", h.name, "s. You need at least ", t, " to proceed."), "error" === x && l.createElement(s.Alert, {
                        variant: "danger",
                        withIcon: !0
                    }, "Unfortunately, there's not enough values in column ", h.name, ". We need at least", " ", t, " distinct values to proceed. Please try with a different column."), "warning" === x && l.createElement(s.Alert, {
                        variant: "warning",
                        withIcon: !0
                    }, "We have found only ", e.length, " ", h.name, "s.")), l.createElement(s.Join, {
                        orientation: "vertical",
                        spacing: "x-small",
                        block: !0
                    }, l.createElement(s.Join, {
                        orientation: "vertical",
                        spacing: "x-small",
                        block: !0,
                        maxWidth: g.contentWidth
                    }, l.createElement(s.Flex, {
                        justifyContent: "space-between"
                    }, l.createElement(s.Box, null, "You need at least ", t, " ", h.name, "s to proceed"), l.createElement(s.Box, null, _, " selected")), l.createElement(s.Input.Sink, {
                        size: "small",
                        maxWidth: g.contentWidth
                    }, l.createElement(s.Input, {
                        value: E,
                        onChange: e => M(e.target.value),
                        placeholder: `Filter ${h.name}s`,
                        size: "small"
                    }), l.createElement(s.Input.Affix, {
                        name: "search"
                    }))), l.createElement(s.Box, null, l.createElement(s.BorderBox, {
                        borderColor: "gray.3",
                        minWidth: g.contentWidth,
                        display: "table"
                    }, l.createElement(s.Listbox, {
                        maxHeight: 8 * y.space.medium + "px",
                        css: {
                            overflowY: "scroll"
                        }
                    }, O.map(e => l.createElement(s.Listbox.Item, {
                        onClick: () => (e => {
                            f({
                                type: "step1/toggleSample",
                                payload: e
                            })
                        })(e),
                        selected: i.includes(e),
                        key: e,
                        paddingX: "small",
                        paddingY: "none",
                        minHeight: y.space.medium + "px",
                        height: "auto"
                    }, l.createElement(s.Text, {
                        paddingY: "xx-small",
                        paddingRight: "small"
                    }, e)))))))))
                }
            },
            1716: function(e, t, n) {
                "use strict";
                var a = this && this.__awaiter || function(e, t, n, a) {
                        return new(n || (n = Promise))((function(r, i) {
                            function l(e) {
                                try {
                                    o(a.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function s(e) {
                                try {
                                    o(a.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function o(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(l, s)
                            }
                            o((a = a.apply(e, t || [])).next())
                        }))
                    },
                    r = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    },
                    i = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const l = r(n(0)),
                    s = i(n(44)),
                    o = n(12),
                    c = n(96),
                    u = n(288),
                    d = n(1717),
                    m = n(1718),
                    p = n(144),
                    g = n(167),
                    h = n(1721),
                    f = n(84);
                t.RulesAndDelimiters = ({
                    loading: e,
                    delimiters: t,
                    constraints: n,
                    rules: r,
                    splitData: i,
                    selectedSamples: v,
                    dispatch: y,
                    datastreamId: E,
                    isDirty: M
                }) => {
                    l.useEffect(() => {
                        a(void 0, void 0, void 0, (function*() {
                            y({
                                type: "step2/fetchingConstraintsStarted"
                            });
                            const e = p.getSmartNamingUrl(E) + "constraints/",
                                t = yield s.default.post(e, {
                                    samples: v,
                                    constraints: n
                                });
                            y({
                                type: "step2/constraintsReceived",
                                payload: {
                                    constraints: t.data.explained_model,
                                    splitData: t.data.validated_samples
                                }
                            })
                        }))
                    }, [E, y, n, v]);
                    const [b, _] = l.useState(!1), [j, I] = l.useState();
                    return e ? l.createElement(c.LoadingIndicator, null) : e || 0 !== t.length ? l.createElement(g.Section, {
                        title: "Rules and Delimiters",
                        subTitle: "Rules and delimiters have been detected for your naming convention."
                    }, l.createElement(u.DialogWindow, {
                        visible: b,
                        onClose: () => _(!1),
                        title: "Warning",
                        actionButtons: l.createElement(l.Fragment, null, l.createElement(o.Button.Secondary, {
                            onClick: () => _(!1)
                        }, "Cancel"), l.createElement(o.Button, {
                            onClick: () => {
                                j && y({
                                    type: "step2/toggleConstraint",
                                    payload: j
                                }), _(!1)
                            }
                        }, "Yes"))
                    }, "Deactivating and reactivating delimiters will reset all of your edits in the Rules Detected section. Are you sure you want to continue?"), l.createElement(o.Join, {
                        block: !0,
                        orientation: "vertical",
                        spacing: "x-large",
                        marginTop: "small"
                    }, l.createElement(d.ConstraintSection, {
                        title: "Delimiters Detected"
                    }, l.createElement(o.Join, {
                        orientation: "vertical",
                        spacing: "xx-small",
                        maxWidth: f.textWidth
                    }, l.createElement(o.Text, null, "Delimiters are used to split values into new columns."), l.createElement(o.Text, null, "The system has auto-detected ", t.length, " delimiter", 1 !== t.length && "s", "Â for your naming convention.")), l.createElement(m.SwitchList, {
                        minimumSelected: 1,
                        constraints: t,
                        disabled: e,
                        onToggle: e => {
                            M ? (I(e), _(!0)) : y({
                                type: "step2/toggleConstraint",
                                payload: e
                            })
                        }
                    })), l.createElement(d.ConstraintSection, {
                        title: "Rules Detected"
                    }, l.createElement(o.Text, {
                        maxWidth: f.textWidth
                    }, "These rules control the model that continuously monitors your naming conventions to automatically identify anomalies and correct erroneous values. Please carefully check the rules below and deactivate any that you donâ€™t want to be applied."), l.createElement(m.SwitchList, {
                        includeColumnIndexes: !0,
                        constraints: r,
                        disabled: e,
                        delimiters: t.flatMap(e => !e.excluded && e.delimiter ? [e.delimiter] : []),
                        onToggle: e => y({
                            type: "step2/toggleConstraint",
                            payload: e
                        }),
                        onValuesChange: (e, t) => y({
                            type: "step2/ruleValuesChanged",
                            payload: {
                                constraintId: e.id,
                                values: t
                            }
                        })
                    })), l.createElement(d.ConstraintSection, {
                        fullWidth: !0,
                        title: "Split Preview"
                    }, l.createElement(o.Text, {
                        maxWidth: f.textWidth
                    }, "Based upon the delimiters and rules established above, this preview shows how your columns will be split. Make sure they appear as you expect, and if necessary adjust the rules and delimiters above to correct any errors if necessary."), l.createElement(h.SplitPreview, {
                        isLoading: e,
                        splitData: i
                    })))) : l.createElement(o.Alert, {
                        variant: "warning",
                        display: "flex",
                        maxWidth: f.contentWidth,
                        withIcon: !0
                    }, l.createElement(o.Text, null, "Sorry, we were not able to detect a consistent model within the selected column. Please make sure you're using a consistent convention. This means you're usingÂ ", l.createElement(o.Text, {
                        fontWeight: "bold"
                    }, "delimiters"), " (special characters) to separate information. Additionally, please also make sure that similar values are placed at the same position."))
                }
            },
            1717: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(12),
                    l = n(84);
                t.ConstraintSection = ({
                    title: e,
                    fullWidth: t,
                    children: n
                }) => r.createElement(i.Join, {
                    block: !0,
                    orientation: "vertical",
                    spacing: "x-small"
                }, r.createElement(i.Text, {
                    size: "medium"
                }, e), r.createElement(i.Separator, {
                    orientation: "horizontal"
                }), r.createElement(i.Join, {
                    block: !0,
                    marginTop: "x-small",
                    orientation: "vertical",
                    maxWidth: t ? void 0 : l.contentWidth
                }, n))
            },
            1718: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(12),
                    l = n(84),
                    s = n(1719);
                t.SwitchList = ({
                    constraints: e,
                    disabled: t,
                    minimumSelected: n,
                    onToggle: a,
                    onValuesChange: o,
                    delimiters: c,
                    includeColumnIndexes: u
                }) => {
                    const d = a => n && !a.excluded ? e.filter(({
                        excluded: e
                    }) => !e).length <= n : t;
                    return r.createElement(i.Join, {
                        block: !0,
                        minWidth: 400,
                        maxWidth: l.contentWidth,
                        paddingX: "x-small",
                        spacing: "xx-small",
                        orientation: "vertical"
                    }, e.map(e => r.createElement(r.Fragment, {
                        key: e.id
                    }, r.createElement(i.StartEnd, {
                        alignItems: "center",
                        paddingX: "xx-small",
                        css: {
                            border: "unset",
                            color: "inherit"
                        }
                    }, r.createElement(s.ConstraintContent, {
                        constraint: e,
                        onValuesChange: t => o && o(e, t),
                        includeColumnIndex: u,
                        delimiters: c
                    }), r.createElement(i.Switch, {
                        minWidth: 32,
                        flexShrink: 0,
                        disabled: d(e),
                        size: "x-small",
                        checked: !e.excluded,
                        onClick: () => a(e)
                    })), r.createElement(i.Separator, null))))
                }
            },
            1719: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(12),
                    l = n(144),
                    s = n(1720);
                t.ConstraintContent = ({
                    constraint: e,
                    includeColumnIndex: t,
                    delimiters: n,
                    onValuesChange: a
                }) => {
                    const o = i.useTheme(),
                        [c, u] = r.useState(!1),
                        {
                            value_list: d,
                            index: m
                        } = e;
                    return r.createElement(r.Fragment, null, r.createElement(i.Flex, {
                        alignItems: "center",
                        flexGrow: "1"
                    }, r.createElement(i.Text, {
                        flexShrink: d ? "0" : "1",
                        paddingRight: "x-small"
                    }, t && r.createElement(i.Text, {
                        fontWeight: "bold",
                        paddingRight: "x-small"
                    }, "Column " + (m + 1)), l.updateRuleText(e).text), d && r.createElement(i.StartEnd, {
                        alignItems: "center",
                        flexGrow: "1"
                    }, r.createElement(i.Flex, {
                        flexWrap: "wrap",
                        height: "small",
                        overflow: "hidden"
                    }, d.map((e, t) => {
                        const n = (d || []).length - t - 1;
                        return r.createElement(i.Flex, {
                            key: e
                        }, r.createElement(i.Badge, {
                            minWidth: "large",
                            maxWidth: 100,
                            marginRight: "x-small",
                            paddingX: "x-small",
                            marginLeft: 0 === t ? "0" : -1 * o.space.large + "px",
                            css: {
                                justifyContent: "center"
                            },
                            backgroundColor: "brand.1",
                            color: "brand.7"
                        }, r.createElement(i.Truncate, null, r.createElement(i.Text, {
                            truncate: !0
                        }, e))), n > 0 && r.createElement(i.Badge, {
                            css: {
                                justifyContent: "center"
                            },
                            width: "large",
                            variant: "warning"
                        }, "+", n))
                    })), r.createElement(i.IconButton.Minimal, {
                        onClick: () => u(!0),
                        minWidth: "medium",
                        name: "edit",
                        size: "small"
                    }))), c && d && n && r.createElement(s.EditColumnModal, {
                        columnName: "Column " + (m + 1),
                        delimiters: n,
                        initialValues: d,
                        onCancel: () => u(!1),
                        onSave: e => {
                            u(!1), a && a(e)
                        }
                    }))
                }
            },
            1720: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    },
                    r = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = a(n(0)),
                    l = n(12),
                    s = n(288),
                    o = n(376),
                    c = r(n(381)),
                    u = n(15),
                    d = n(144),
                    m = n(84),
                    p = e => i.createElement(o.components.MultiValueLabel, Object.assign({}, e), i.createElement(l.Tooltip, {
                        title: e.data
                    }, i.createElement(l.Truncate, null, i.createElement(l.Text, null, e.data)))),
                    g = ["\t"],
                    h = (e, t) => {
                        switch (t.type) {
                            case "data/changeColumnValues":
                                return Object.assign(Object.assign({}, e), {
                                    columnValues: t.payload
                                });
                            case "data/changeInputValue":
                                return Object.assign(Object.assign({}, e), {
                                    inputValue: t.payload
                                });
                            case "data/pasteValue":
                                {
                                    const n = document.getElementById("edit-column-creatable-input").selectionStart || 0,
                                        a = e.inputValue.substr(0, n) + t.payload.replace(/\n/g, "\t") + e.inputValue.substr(n);
                                    return Object.assign(Object.assign({}, e), {
                                        inputValue: a,
                                        isMenuOpen: !0
                                    })
                                }
                            case "data/createOption":
                                {
                                    const n = g.concat(t.payload.delimiters),
                                        a = u.uniq(d.splitMulti(t.payload.inputValue, n).filter(t => !e.columnValues.includes(t)));
                                    return Object.assign(Object.assign({}, e), {
                                        columnValues: [...e.columnValues, ...a]
                                    })
                                }
                            case "control/toggleMenu":
                                return Object.assign(Object.assign({}, e), {
                                    isMenuOpen: t.payload
                                })
                        }
                    };
                t.EditColumnModal = ({
                    initialValues: e,
                    delimiters: t,
                    onCancel: n,
                    onSave: a
                }) => {
                    const [r, o] = i.useReducer(h, {
                        columnValues: e,
                        inputValue: "",
                        isMenuOpen: !1
                    }), {
                        columnValues: u,
                        inputValue: d,
                        isMenuOpen: g
                    } = r;
                    return i.createElement(s.DialogWindow, {
                        visible: !0,
                        onClose: n,
                        title: "Edit Allowed Values",
                        actionButtons: i.createElement(i.Fragment, null, i.createElement(l.Button.Secondary, {
                            onClick: n
                        }, "Cancel"), i.createElement(l.Button, {
                            onClick: () => a(u)
                        }, "Apply"))
                    }, i.createElement(l.Join, {
                        orientation: "vertical",
                        paddingBottom: "small",
                        spacing: "small",
                        block: !0
                    }, i.createElement(l.Text, {
                        size: "medium",
                        maxWidth: m.contentWidth
                    }, "Please adjust the values below. You can add new ones and delete existing ones. You can copy and paste multiple values at once, but make sure that they are delimited either by a tab, a line break, or an automatically recognized delimiter."), i.createElement(l.Join, {
                        orientation: "vertical",
                        spacing: "x-small",
                        block: !0
                    }, i.createElement(l.Text, {
                        size: "medium"
                    }, "Enter Values"), i.createElement(l.Box, {
                        onPaste: e => {
                            e.preventDefault();
                            const t = e.clipboardData.getData("text");
                            o({
                                type: "data/pasteValue",
                                payload: t
                            })
                        }
                    }, i.createElement(c.default, {
                        inputId: "edit-column-creatable-input",
                        type: "CreatableSync",
                        isClearable: !0,
                        isMulti: !0,
                        options: e,
                        noOptionsMessage: e => "" === e.inputValue ? "Feel free to create a new value" : "Values cannot repeat",
                        getOptionLabel: e => e,
                        getOptionValue: e => e,
                        getNewOptionData: e => e,
                        onChange: e => o({
                            type: "data/changeColumnValues",
                            payload: e
                        }),
                        menuIsOpen: g,
                        onInputChange: e => o({
                            type: "data/changeInputValue",
                            payload: e
                        }),
                        onMenuOpen: () => o({
                            type: "control/toggleMenu",
                            payload: !0
                        }),
                        onMenuClose: () => o({
                            type: "control/toggleMenu",
                            payload: !1
                        }),
                        inputValue: d,
                        onCreateOption: e => o({
                            type: "data/createOption",
                            payload: {
                                inputValue: e,
                                delimiters: t
                            }
                        }),
                        value: u,
                        components: {
                            MultiValueLabel: p
                        }
                    })))))
                }
            },
            1721: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(12),
                    l = n(96),
                    s = n(1722);
                t.SplitPreview = ({
                    splitData: e,
                    isLoading: t
                }) => {
                    const n = i.useTheme();
                    return r.createElement(i.Join, {
                        orientation: "vertical",
                        block: !0
                    }, r.createElement(s.Overlay.Wrapper, null, t && r.createElement(s.Overlay, null, r.createElement(l.LoadingIndicator, null)), r.createElement(i.Box, {
                        maxHeight: 15 * n.space.large + "px",
                        css: {
                            overflowY: "scroll"
                        }
                    }, r.createElement(i.Table, {
                        block: !0,
                        size: "medium",
                        striped: !0
                    }, r.createElement(i.Table.Head, null, r.createElement(i.Table.Row, null, Object.keys(e[0]).map(e => r.createElement(i.Table.HeadCell, {
                        key: e
                    }, Number(e) + 1)))), r.createElement(i.Table.Body, null, e.map(t => r.createElement(i.Table.Row, {
                        key: "row-" + e.indexOf(t)
                    }, t.map(e => r.createElement(i.Table.Cell, {
                        key: "cell-" + t.indexOf(e)
                    }, r.createElement(i.Text, null, e))))))))))
                }
            },
            1722: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(12);
                t.Overlay = ({
                    children: e
                }) => r.createElement(i.Absolute, {
                    padding: "x-small",
                    backgroundColor: "gray.2",
                    opacity: "0.6",
                    top: "0",
                    right: "0",
                    height: "100%",
                    width: "100%"
                }, r.createElement(i.Flex, {
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%"
                }, e)), t.Overlay.Wrapper = i.Relative
            },
            1723: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(12),
                    l = n(167),
                    s = n(1724),
                    o = n(84);
                t.SetColumnNames = ({
                    allColumns: e,
                    splitColumns: t,
                    validationErrors: n,
                    dispatch: a
                }) => {
                    const c = e.map(({
                            name: e
                        }) => e),
                        u = (e, t) => n.filter(({
                            column: t
                        }) => t.index === e).slice(0, t),
                        d = e => u(e).length > 0,
                        m = e => n => {
                            const r = t.find(t => t.index === e);
                            if (!r) return;
                            const i = Object.assign(Object.assign({}, r), {
                                    header: n.target.value
                                }),
                                l = [...t.filter(t => t.index !== e), i].sort(({
                                    index: e
                                }, {
                                    index: t
                                }) => e - t),
                                s = ((e, t) => {
                                    const n = [];
                                    return e.forEach(a => {
                                        n.push(((e, t) => "" === e.header ? null : t.find(t => t !== e && t.header.trim() === e.header.trim()) ? {
                                            column: e,
                                            error: "This field must be unique.",
                                            priority: 0
                                        } : null)(a, e), ((e, t) => {
                                            const n = e.header.trim();
                                            return t.find(e => e === n) ? {
                                                column: e,
                                                error: `Column "${n}" already exist in a data stream.`,
                                                priority: 1
                                            } : null
                                        })(a, t))
                                    }), n.filter(Boolean)
                                })(l, c);
                            a({
                                type: "step3/columnNameChanged",
                                payload: {
                                    splitColumns: l,
                                    validationErrors: s
                                }
                            })
                        };
                    return r.createElement(l.Section, {
                        title: "Set Headers",
                        subTitle: "Define a name for each of your new columns. Each name must be unique."
                    }, r.createElement(i.Table, {
                        block: !0,
                        maxWidth: o.contentWidth
                    }, r.createElement(i.Table.Head, null, r.createElement(i.Table.Row, null, r.createElement(i.Table.HeadCell, {
                        paddingY: "x-small"
                    }, "Column"), r.createElement(i.Table.HeadCell, {
                        paddingY: "x-small"
                    }, "Header"), r.createElement(i.Table.HeadCell, {
                        paddingY: "x-small"
                    }, "Example value"))), r.createElement(i.Table.Body, null, t.map(e => r.createElement(i.Table.Row, {
                        key: `${e.exampleValue}-${e.index}`
                    }, r.createElement(i.Table.Cell, {
                        paddingY: "x-small"
                    }, r.createElement(i.Text, null, e.index + 1)), r.createElement(i.Table.Cell, {
                        paddingY: "x-small"
                    }, r.createElement(s.ElementWithTooltip, {
                        variant: "danger",
                        tooltipContent: d(e.index) && r.createElement(i.Join, {
                            orientation: "vertical",
                            spacing: "xx-small"
                        }, u(e.index).map(({
                            error: e
                        }) => r.createElement(i.Text, {
                            key: e
                        }, e)))
                    }, r.createElement(i.Input, {
                        variant: d(e.index) ? "danger" : void 0,
                        value: e.header,
                        onChange: m(e.index),
                        size: "small"
                    }))), r.createElement(i.Table.Cell, {
                        paddingY: "x-small"
                    }, r.createElement(i.Text, null, e.exampleValue)))))))
                }
            },
            1724: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(12);
                t.ElementWithTooltip = ({
                    children: e,
                    tooltipContent: t,
                    variant: n = "success"
                }) => {
                    const a = i.DeprecatedTooltip.useTooltipState({
                        placement: "top-start"
                    });
                    return r.createElement(r.Fragment, null, r.createElement(i.DeprecatedTooltip.Reference, Object.assign({
                        display: "block"
                    }, a), e), r.createElement(i.DeprecatedTooltip, Object.assign({
                        variant: n
                    }, a, {
                        visible: a.visible && !!t
                    }), t))
                }
            },
            1725: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(12),
                    l = n(167),
                    s = n(84);
                t.ReceiveErrors = ({
                    columnName: e,
                    emailForError: t,
                    continueOnError: n,
                    delimiters: a,
                    dispatch: o
                }) => r.createElement(l.Section, {
                    title: "Receive Errors"
                }, r.createElement(i.Join, {
                    orientation: "vertical",
                    spacing: "medium"
                }, r.createElement(i.Text, {
                    maxWidth: s.textWidth
                }, 'If the "', e, '" column contains a value that we cannot split in any way, the fetch will stop and generate an error notification in your Datastream Overview Issues lane. This happens, for example, if there is a value in the "', e, '" column that does not contain any of the established delimiters:'), r.createElement(i.Join, {
                    block: !0,
                    backgroundColor: "gray.0",
                    padding: "x-small",
                    spacing: "xx-small",
                    maxWidth: s.contentWidth,
                    orientation: "vertical"
                }, a.filter(({
                    excluded: e
                }) => !e).map(e => r.createElement(i.Text, {
                    paddingY: "xx-small"
                }, e.text))), r.createElement(i.Box, null, r.createElement(i.Join, {
                    orientation: "vertical",
                    spacing: "x-small"
                }, r.createElement(i.Join, {
                    as: "label",
                    spacing: "x-small"
                }, r.createElement(i.Checkbox, {
                    checked: t,
                    onChange: e => {
                        o({
                            type: "step4/emailChecked",
                            payload: e.target.checked
                        })
                    }
                }), r.createElement(i.Text, null, "Send Email")), r.createElement(i.Text.Secondary, {
                    maxWidth: s.textWidth
                }, "An email will be sent to the addresses specified in your Notifications settings. The email will specify the field that caused the error."))), r.createElement(i.Box, null, r.createElement(i.Join, {
                    orientation: "vertical",
                    spacing: "x-small"
                }, r.createElement(i.Join, {
                    as: "label",
                    spacing: "x-small"
                }, r.createElement(i.Checkbox, {
                    checked: n,
                    onChange: e => {
                        o({
                            type: "step4/continueOnErrorChecked",
                            payload: e.target.checked
                        })
                    }
                }), r.createElement(i.Text, null, "Continue Processing")), r.createElement(i.Text.Secondary, null, "Fetches will not be stopped if erorrs occur.")))))
            },
            1726: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(12),
                    l = n(1727),
                    s = n(167),
                    o = n(144),
                    c = n(84);
                t.ReceiveWarnings = ({
                    rules: e,
                    mapping: t,
                    emailForWarning: n,
                    raiseForWarning: a,
                    dispatch: u
                }) => {
                    const d = e.filter(({
                            excluded: e,
                            value_list: t
                        }) => !e && t && t.length > 0).map(e => o.updateRuleText(e, `â€œ${t[e.index].name}â€œ`, !0)),
                        m = e => {
                            u({
                                type: "step5/toggleWarning",
                                payload: e.target.name
                            })
                        };
                    return r.createElement(s.Section, {
                        title: "Receive Warnings",
                        subTitle: "If only one or two elements (columns) from your naming convention are missing,\n            the system will try to automatically adjust the split transformation to move every value\n            to its corresponding column and will not stop processing the data. Columns with \n            missing values will be empty. Please define below when and how you want to be\n            notified about such events."
                    }, r.createElement(i.Join, {
                        orientation: "vertical",
                        spacing: "medium",
                        maxWidth: c.contentWidth,
                        block: !0
                    }, r.createElement(i.Join, {
                        block: !0,
                        spacing: "xx-small",
                        orientation: "vertical"
                    }, r.createElement(i.Text, {
                        fontWeight: "bold"
                    }, "I want to be informed in the following cases:"), d.map(({
                        id: e,
                        index: n,
                        text_alternative: a
                    }) => r.createElement(i.Card, {
                        backgroundColor: "gray.0",
                        padding: "xx-small",
                        key: e,
                        css: {
                            border: "unset",
                            color: "inherit"
                        },
                        onClick: () => {
                            u({
                                type: "step5/toggleRule",
                                payload: n
                            })
                        }
                    }, r.createElement(i.StartEnd, {
                        backgroundColor: "gray.0",
                        alignItems: "center"
                    }, r.createElement(i.Text, {
                        paddingRight: "medium"
                    }, a), r.createElement(i.Switch, {
                        flexShrink: 0,
                        size: "x-small",
                        checked: t[n].notify
                    }))))), r.createElement(i.Join, {
                        orientation: "vertical",
                        spacing: "medium"
                    }, r.createElement(l.CheckboxSection, {
                        title: "Send Email",
                        subtitle: "An email will be sent to the addresses specified in your Notifications settings."
                    }, r.createElement(i.Checkbox, {
                        checked: n,
                        name: "emailForWarning",
                        onChange: m
                    })), r.createElement(l.CheckboxSection, {
                        title: "Raise warning",
                        subtitle: "A Warning Notification will be generated in the Datastream Overview Issues lane."
                    }, r.createElement(i.Checkbox, {
                        checked: a,
                        name: "raiseForWarning",
                        onChange: m
                    })))))
                }
            },
            1727: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(12);
                t.CheckboxSection = ({
                    title: e,
                    subtitle: t,
                    children: n
                }) => r.createElement(i.Join, {
                    orientation: "vertical",
                    spacing: "x-small"
                }, r.createElement(i.Join, {
                    as: "label",
                    spacing: "x-small"
                }, n, r.createElement(i.Text, null, e)), r.createElement(i.Text.Secondary, null, t))
            },
            1728: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(12),
                    l = n(701),
                    s = n(167),
                    o = n(144),
                    c = n(84);
                t.Summary = ({
                    columnName: e,
                    delimiters: t,
                    rules: n,
                    emailForError: a,
                    emailForWarning: u,
                    raiseForWarning: d,
                    mapping: m
                }) => {
                    const p = n.filter(e => "column_rule" === e.type && !e.excluded && m[e.index].notify).map(e => o.updateRuleText(e, `"${m[e.index].name}"`, !0).text);
                    return r.createElement(s.Section, {
                        title: "Summary",
                        subTitle: "Congratulations, setup is now complete! Please review your selections and make sure everything is OK, then hit â€œ+ Createâ€ to finalize and apply your naming convention to this Datastream."
                    }, r.createElement(i.Join, {
                        block: !0,
                        orientation: "vertical",
                        spacing: "medium",
                        marginTop: "small",
                        maxWidth: c.contentWidth
                    }, r.createElement(l.SmartNamingConventionSummary, {
                        column: e,
                        splitLogic: t.filter(({
                            type: e,
                            excluded: t
                        }) => "delimiter" === e && !t).map(({
                            text: e
                        }) => e),
                        columnNames: Object.values(m).map(({
                            name: e
                        }) => e),
                        emailForError: a,
                        raiseForWarning: d,
                        emailForWarning: u,
                        warnings: p
                    })))
                }
            },
            1729: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(12),
                    l = n(770),
                    s = n(84);
                t.NavigationBar = ({
                    state: e,
                    dispatch: t,
                    stepsCount: n,
                    onCreate: a,
                    onCancel: o
                }) => {
                    const c = 0 === e.activeStep,
                        u = e.activeStep === n - 1;
                    return r.createElement(r.Fragment, null, r.createElement(i.Separator, null), r.createElement(i.StartEnd, {
                        maxWidth: s.contentWidth
                    }, r.createElement(i.Button.Secondary, {
                        size: "small",
                        onClick: o
                    }, "Cancel"), r.createElement(i.Join, {
                        spacing: "x-small"
                    }, !c && r.createElement(i.Button, {
                        size: "small",
                        onClick: () => {
                            t({
                                type: "activeStep/previous"
                            })
                        }
                    }, r.createElement(i.Icon, {
                        name: "arrow-left"
                    }), "Previous"), u ? r.createElement(i.Button, {
                        size: "small",
                        onClick: a
                    }, "Create", r.createElement(i.Icon, {
                        name: "plus"
                    })) : r.createElement(i.Button, {
                        size: "small",
                        disabled: !l.canProceed(e),
                        onClick: () => {
                            t({
                                type: "activeStep/next"
                            })
                        }
                    }, "Next", r.createElement(i.Icon, {
                        name: "arrow-right"
                    })))))
                }
            },
            1730: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(12),
                    l = n(84);
                t.WelcomeScreen = ({
                    dispatch: e,
                    onCancel: t
                }) => r.createElement(i.Join, {
                    block: !0,
                    orientation: "vertical",
                    spacing: "medium"
                }, r.createElement(i.Join, {
                    orientation: "vertical",
                    maxWidth: l.textWidth
                }, r.createElement(i.Flex, {
                    flexDirection: "column"
                }, r.createElement(i.Text, {
                    fontSize: "small"
                }, "Welcome to"), r.createElement(i.Text, {
                    color: "brand.5",
                    fontSize: "large"
                }, "Smart Naming Conventions")), r.createElement(i.Text, null, "Smart Naming Conventions help you to automatically detect, split and monitor naming conventions. After the model has been set up we will raise warnings to let you know of values that are not compliant with your conventions.")), r.createElement(i.Separator, null), r.createElement(i.Join, {
                    block: !0,
                    justifyContent: "space-between",
                    maxWidth: l.contentWidth
                }, r.createElement(i.Button.Secondary, {
                    size: "small",
                    onClick: t
                }, "Cancel"), r.createElement(i.Button, {
                    size: "small",
                    onClick: () => e({
                        type: "activeStep/next"
                    })
                }, "Get started")))
            },
            1731: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    },
                    r = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = a(n(0)),
                    l = r(n(9)),
                    s = n(702),
                    o = n(12),
                    c = n(56),
                    u = n(110);
                n(748);
                const d = n(1732),
                    m = {
                        custom: "Custom",
                        today: "Today",
                        yesterday: "Yesterday",
                        week: "This week",
                        month: "This month",
                        quarter: "This quarter"
                    },
                    p = (e, t) => e && e.format(t),
                    g = (e, t) => t ? l.default(t, e) : l.default(),
                    h = ({
                        inputElement: e,
                        dateFormat: t,
                        initialValue: n,
                        isOutsideRange: a,
                        preselecatableRanges: r
                    }) => {
                        const [l, c] = i.useState({
                            startDate: g(t, n[0]),
                            endDate: g(t, n[1])
                        }), [u, h] = i.useState(), [f, v] = i.useState(null);
                        i.useEffect(() => {
                            e.value = (({
                                startDate: e,
                                endDate: t
                            }, n) => JSON.stringify([p(e, n), p(t, n)]))(l, t);
                            const n = new Event("change");
                            e.dispatchEvent(n)
                        }, [l, t, e]);
                        return i.createElement(o.Join, {
                            spacing: "x-small",
                            orientation: "vertical"
                        }, i.createElement(s.DateRangePicker, {
                            startDate: l.startDate,
                            startDateId: e.name + "-start",
                            endDate: l.endDate,
                            endDateId: e.name + "-end",
                            onDatesChange: e => {
                                c(e), h(void 0)
                            },
                            focusedInput: f,
                            onFocusChange: v,
                            isOutsideRange: a(f, l),
                            firstDayOfWeek: 1,
                            displayFormat: t,
                            minimumNights: 0,
                            verticalSpacing: -12
                        }), i.createElement(o.ButtonGroup, {
                            size: "small",
                            selected: d.getSelectedRange(l, r, u),
                            setSelected: e => {
                                var t, n;
                                if ("custom" === e || !r[e]) return void v("startDate");
                                const a = r[e];
                                c({
                                    startDate: null !== (t = null == a ? void 0 : a[0]) && void 0 !== t ? t : null,
                                    endDate: null !== (n = null == a ? void 0 : a[1]) && void 0 !== n ? n : null
                                }), h(e)
                            },
                            controlled: !0
                        }, Object.entries(r).map(([e, t]) => t && i.createElement(o.ButtonGroup.Button, {
                            key: e,
                            value: e,
                            autoFocus: !1
                        }, m[e]))))
                    };
                class f extends HTMLElement {
                    constructor() {
                        super(...arguments), this.dateFormat = "YYYY-MM-DD"
                    }
                    get value() {
                        const e = this.getAttribute("value");
                        return e ? JSON.parse(e) : []
                    }
                    get name() {
                        var e;
                        return null !== (e = this.getAttribute("name")) && void 0 !== e ? e : ""
                    }
                    get isPastFetchable() {
                        return this.hasAttribute("is-past-fetchable")
                    }
                    get isFutureFetchable() {
                        return this.hasAttribute("is-future-fetchable")
                    }
                    get timeRangeMax() {
                        const e = this.getAttribute("time-range-max");
                        return e ? Number(e) : void 0
                    }
                    get timeRangeAvailable() {
                        const e = this.getAttribute("time-range-available");
                        return e ? JSON.parse(e).map(e => l.default(e, this.dateFormat)) : void 0
                    }
                    get rangeValidationAttributes() {
                        return {
                            isPastFetchable: this.isPastFetchable,
                            isFutureFetchable: this.isFutureFetchable,
                            timeRangeMax: this.timeRangeMax,
                            timeRangeAvailable: this.timeRangeAvailable
                        }
                    }
                    get isOutsideRange() {
                        return d.getIsOutsideRangeValidator(this.rangeValidationAttributes)
                    }
                    get preselecatableRanges() {
                        return d.getPreselectedRanges(this.rangeValidationAttributes)
                    }
                    connectedCallback() {
                        const e = document.createElement("input");
                        e.type = "hidden", e.name = this.name;
                        const t = document.createElement("div");
                        this.appendChild(t), this.appendChild(e), c.render({
                            component: i.createElement(h, {
                                inputElement: e,
                                initialValue: this.value,
                                dateFormat: this.dateFormat,
                                isOutsideRange: this.isOutsideRange,
                                preselecatableRanges: this.preselecatableRanges
                            }),
                            container: t
                        })
                    }
                }
                u.defineCustomElement("zoom360-date-range-picker", f)
            },
            1732: function(e, t, n) {
                "use strict";
                var a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(9)),
                    i = n(1733),
                    l = (e, t) => !e || e.isAfter(t, "day"),
                    s = ({
                        isPastFetchable: e,
                        isFutureFetchable: t,
                        timeRangeAvailable: n
                    }) => {
                        const a = {
                            minDate: null,
                            maxDate: null
                        };
                        var i, s;
                        return e && !t && (a.maxDate = r.default()), t && !e && (a.minDate = r.default()), n && (i = a.minDate, s = n[0], (!i || i.isBefore(s, "day")) && (a.minDate = n[0].clone()), l(a.maxDate, n[1]) && (a.maxDate = n[1].clone())), a
                    },
                    o = (e, {
                        minDate: t,
                        maxDate: n
                    }) => t && n ? !e.isBetween(t, n, "day", "[]") : t ? e.isBefore(t, "day") : !!n && e.isAfter(n, "day");
                t.getIsOutsideRangeValidator = e => {
                    const t = s(e),
                        {
                            timeRangeMax: n
                        } = e;
                    return (e, {
                        startDate: a
                    }) => r => {
                        var i, s, c, u;
                        if (n && "endDate" === e && a) {
                            const e = null !== (s = null === (i = t.maxDate) || void 0 === i ? void 0 : i.clone()) && void 0 !== s ? s : null,
                                d = a.clone().add("day", n),
                                m = {
                                    minDate: null !== (u = null === (c = t.minDate) || void 0 === c ? void 0 : c.clone()) && void 0 !== u ? u : null,
                                    maxDate: l(e, d) ? d : e
                                };
                            return o(r, m)
                        }
                        return o(r, t)
                    }
                };
                const c = e => {
                        if ("today" === e || "custom" === e) return [r.default(), r.default()];
                        if ("yesterday" === e) return [r.default().subtract(1, "day"), r.default().subtract(1, "day")];
                        const t = [r.default().startOf(e), r.default().endOf("day")];
                        return "week" === e && (t[0].isSame(t[1], "day") ? t[0].subtract(6, "day") : t[0].add(1, "day")), t
                    },
                    u = ([e, t], n) => {
                        const {
                            minDate: a,
                            maxDate: r
                        } = n, i = !o(e, n), l = !o(e, n);
                        if (i && l) return [e, t];
                        if (r && e.isAfter(r, "day") || a && t.isBefore(a, "day")) return null;
                        return [a && e.isBefore(a, "day") ? a.clone() : e, r && t.isAfter(r, "day") ? r.clone() : t]
                    };
                t.getPreselectedRanges = e => {
                    const t = s(e);
                    return ((e, t) => i.preselecatbleRanges.reduce((n, a) => Object.assign(Object.assign({}, n), {
                        [a]: u(e[a], t)
                    }), e))({
                        custom: c("custom"),
                        today: c("today"),
                        yesterday: c("yesterday"),
                        week: c("week"),
                        month: c("month"),
                        quarter: c("quarter")
                    }, t)
                }, t.getSelectedRange = ({
                    startDate: e,
                    endDate: t
                }, n, a) => {
                    if (a) return a;
                    return Object.keys(n).find(a => {
                        var r;
                        if ("custom" === a || null === n[a]) return !1;
                        const [i, l] = null !== (r = n[a]) && void 0 !== r ? r : [];
                        return (null == e ? void 0 : e.isSame(i, "day")) && (null == t ? void 0 : t.isSame(l, "day"))
                    }) || "custom"
                }
            },
            1733: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.preselecatbleRanges = ["custom", "today", "yesterday", "week", "month", "quarter"]
            },
            1734: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(56),
                    l = n(110),
                    s = n(1735);
                class o extends HTMLElement {
                    get header() {
                        const e = this.getAttribute("header");
                        return e ? JSON.parse(e) : []
                    }
                    get data() {
                        const e = this.getAttribute("data");
                        return e ? JSON.parse(e) : []
                    }
                    get groups() {
                        const e = this.getAttribute("groups");
                        return e ? JSON.parse(e) : void 0
                    }
                    connectedCallback() {
                        const e = document.createElement("div");
                        this.appendChild(e), i.render({
                            component: r.createElement(s.ExtractPreviewTable, {
                                header: this.header,
                                data: this.data,
                                groups: this.groups
                            }),
                            container: e
                        })
                    }
                }
                l.defineCustomElement("zoom360-preview-table", o)
            },
            1735: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(1736),
                    l = n(1738),
                    s = n(1741);
                t.ExtractPreviewTable = ({
                    header: e,
                    data: t,
                    groups: n
                }) => {
                    const a = r.useMemo(() => e.map(([e, t, n], a) => ({
                            Header: e,
                            id: String(a),
                            targetColumn: t,
                            targetTitle: n,
                            accessor: e => e[a]
                        })), [e]),
                        o = i.useTable({
                            columns: a,
                            data: t
                        }, i.useGlobalFilter, i.useSortBy),
                        {
                            setGlobalFilter: c
                        } = o;
                    r.useEffect(() => {
                        const e = document.querySelector(".preview-controls input#searchBox");
                        if (!e) return;
                        const t = e => {
                            var t;
                            return c((null === (t = e.target) || void 0 === t ? void 0 : t.value) || void 0)
                        };
                        return e.addEventListener("input", t), () => e.removeEventListener("input", t)
                    }, [c]);
                    const u = {
                        table: o,
                        groups: n
                    };
                    return a.length > 150 ? r.createElement(s.VirtualizedTable, Object.assign({}, u, {
                        data: t
                    })) : r.createElement(l.Table, Object.assign({}, u))
                }
            },
            1738: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(12),
                    l = n(772),
                    s = n(1739),
                    o = n(773),
                    c = n(1740);
                t.Table = ({
                    table: e,
                    groups: t
                }) => {
                    const n = r.useRef(null),
                        a = r.useRef(null),
                        u = r.useRef(null),
                        d = r.useRef(null),
                        [m, p] = r.useState(!0),
                        {
                            getTableProps: g,
                            getTableBodyProps: h,
                            headerGroups: f,
                            rows: v,
                            prepareRow: y,
                            state: E
                        } = e,
                        M = v.length > 0;
                    return r.useLayoutEffect(() => {
                        var e, r, i, l;
                        p(!1);
                        const s = null === (r = null === (e = n.current) || void 0 === e ? void 0 : e.childNodes.item(t ? 1 : 0)) || void 0 === r ? void 0 : r.childNodes,
                            c = null === (l = null === (i = a.current) || void 0 === i ? void 0 : i.firstChild) || void 0 === l ? void 0 : l.childNodes;
                        let m;
                        setTimeout(() => {
                            s && c && s.forEach((e, t) => {
                                const n = c[t];
                                c && (m = o.geCellWidth(e, n), s[t].style.minWidth = m, c[t].style.minWidth = m)
                            }), p(!0)
                        }, 500);
                        const g = () => {
                                var e, t;
                                u.current && (u.current.scrollLeft = null !== (t = null === (e = d.current) || void 0 === e ? void 0 : e.scrollLeft) && void 0 !== t ? t : 0)
                            },
                            h = d.current;
                        return null == h || h.addEventListener("scroll", g), () => null == h ? void 0 : h.removeEventListener("scroll", g)
                    }, [n, a, v, t]), r.createElement(r.Fragment, null, r.createElement(i.Box, {
                        width: "100%",
                        css: {
                            overflow: M ? "hidden" : "auto",
                            "table th": {
                                textTransform: "none"
                            }
                        },
                        ref: u
                    }, r.createElement("table", Object.assign({}, g()), r.createElement("thead", {
                        ref: n
                    }, t && r.createElement("tr", {
                        role: "row"
                    }, o.getGroupsWithColspans(t).map((e, t) => r.createElement(c.HeadGroup, Object.assign({
                        key: e.label
                    }, e, {
                        index: t
                    })))), f.map(e => r.createElement("tr", Object.assign({}, e.getHeaderGroupProps()), e.headers.map((e, n) => {
                        var a;
                        return r.createElement(l.HeadCell, {
                            key: String(null !== (a = e.Header) && void 0 !== a ? a : n),
                            column: e,
                            orderIndicator: E.sortBy.length > 1 ? E.sortBy.findIndex(({
                                id: t
                            }) => t === e.id) + 1 : void 0,
                            index: n,
                            showLink: !t
                        })
                    })))))), r.createElement(i.Box, {
                        width: "100%",
                        maxHeight: "65vh",
                        css: {
                            overflow: "auto"
                        },
                        ref: d,
                        opacity: m ? 1 : 0
                    }, r.createElement("table", Object.assign({}, g()), r.createElement("tbody", Object.assign({}, h(), {
                        ref: a
                    }), v.map(e => (y(e), r.createElement("tr", Object.assign({}, e.getRowProps()), e.cells.map((e, t) => {
                        const n = "string" == typeof e.value ? o.containsImage(e.value) : null;
                        return r.createElement(i.BorderBox, Object.assign({}, e.getCellProps(), {
                            as: "td",
                            padding: "x-small",
                            borderColor: "gray.2",
                            borderWidth: 0,
                            borderBottomWidth: 1,
                            borderLeftWidth: 0 === t ? 0 : 1
                        }), n ? r.createElement(s.ImagePreview, {
                            alt: n.full,
                            src: n.url
                        }) : r.createElement(i.Text, null, e.render("Cell")))
                    }))))))))
                }
            },
            1739: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(12),
                    l = n(188);
                t.ImagePreview = ({
                    alt: e,
                    src: t
                }) => r.createElement(l.HoverSensor, null, ({
                    isHover: n
                }) => r.createElement(i.Box, null, r.createElement(i.Popover, {
                    trigger: r.createElement(i.Link, null, e),
                    visible: n
                }, r.createElement(i.Image, {
                    maxHeight: "300px",
                    maxWidth: "300px",
                    alt: e,
                    src: t
                }))))
            },
            1740: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(12);
                t.HeadGroup = ({
                    colSpan: e,
                    label: t,
                    index: n
                }) => r.createElement(i.BorderBox, {
                    as: "th",
                    backgroundColor: "gray.0",
                    borderColor: "gray.2",
                    borderWidth: 0,
                    borderLeftWidth: 0 === n ? 0 : 1,
                    borderBottomWidth: 1,
                    colSpan: e,
                    role: "columnheader",
                    padding: "x-small"
                }, r.createElement(i.Text, {
                    fontWeight: "normal",
                    size: "x-small",
                    textAlign: "center",
                    width: "100%"
                }, t))
            },
            1741: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(12),
                    l = n(1742),
                    s = n(772),
                    o = n(1743),
                    c = {
                        wordBreak: "break-word"
                    },
                    u = () => 250;
                t.VirtualizedTable = ({
                    table: e,
                    groups: t,
                    data: n
                }) => {
                    const a = r.useRef(null),
                        d = r.useRef(null),
                        {
                            getTableProps: m,
                            getTableBodyProps: p,
                            headerGroups: g,
                            rows: h,
                            prepareRow: f,
                            state: v
                        } = e,
                        y = h.length > 0,
                        E = g[0].headers.length,
                        M = o.useHeaderHeight(g[0]),
                        b = o.useBodyHeight(n),
                        _ = l.useVirtual({
                            horizontal: !0,
                            size: E,
                            parentRef: a,
                            estimateSize: u,
                            overscan: 2
                        }),
                        j = l.useVirtual({
                            size: h.length,
                            parentRef: d,
                            estimateSize: r.useCallback(e => b[e], [b]),
                            overscan: 2
                        }),
                        I = l.useVirtual({
                            horizontal: !0,
                            size: E,
                            parentRef: d,
                            estimateSize: u,
                            overscan: 2
                        });
                    return r.createElement(r.Fragment, null, r.createElement(i.Box, {
                        width: "100%",
                        height: M,
                        ref: a,
                        css: {
                            overflow: y ? "hidden" : "auto",
                            "table th": {
                                textTransform: "none"
                            }
                        }
                    }, r.createElement(i.Relative, Object.assign({}, m(), {
                        width: _.totalSize + "px"
                    }), g.map(e => r.createElement("div", Object.assign({}, e.getHeaderGroupProps()), _.virtualItems.map(n => {
                        const a = e.headers[n.index];
                        return r.createElement(i.Absolute, {
                            key: n.index,
                            top: 0,
                            left: 0,
                            width: 250,
                            height: M,
                            style: {
                                transform: `translateX(${n.start}px)`
                            }
                        }, r.createElement(s.HeadCell, {
                            key: n.index,
                            column: a,
                            orderIndicator: v.sortBy.length > 1 ? v.sortBy.findIndex(({
                                id: e
                            }) => e === a.id) + 1 : void 0,
                            index: n.index,
                            showLink: !t,
                            width: 250
                        }))
                    }))))), r.createElement(i.Box, {
                        width: "100%",
                        maxHeight: "65vh",
                        css: {
                            overflow: "auto"
                        },
                        ref: d,
                        onScroll: () => {
                            var e, t;
                            return _.scrollToOffset(null !== (t = null === (e = d.current) || void 0 === e ? void 0 : e.scrollLeft) && void 0 !== t ? t : 0)
                        }
                    }, r.createElement(i.Relative, Object.assign({}, m(), {
                        height: j.totalSize + "px",
                        width: I.totalSize + "px"
                    }), r.createElement("div", Object.assign({}, p()), j.virtualItems.map(e => {
                        const t = h[e.index];
                        return f(t), r.createElement("div", {
                            key: e.index
                        }, I.virtualItems.map(n => {
                            const a = t.cells[n.index],
                                l = b[e.index];
                            return r.createElement(i.Absolute, {
                                key: n.index,
                                top: 0,
                                left: 0,
                                width: 250,
                                height: l,
                                style: {
                                    transform: `translateX(${n.start}px) translateY(${e.start}px)`
                                }
                            }, r.createElement(i.BorderBox, Object.assign({}, a.getCellProps(), {
                                padding: "x-small",
                                borderColor: "gray.2",
                                borderWidth: 0,
                                borderBottomWidth: 1,
                                borderLeftWidth: 0 === n.index ? 0 : 1,
                                width: 250,
                                height: l
                            }), r.createElement(i.Text, {
                                css: c
                            }, a.render("Cell"))))
                        }))
                    })))))
                }
            },
            1743: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(773);
                t.useHeaderHeight = e => r.useMemo(() => {
                    const t = e.headers,
                        n = t.some(({
                            targetColumn: e
                        }) => e) ? 32 : 16,
                        a = t.map(({
                            Header: e
                        }) => null != e ? e : "");
                    return i.getRowHeight(a, 180, {
                        verticalPadding: n
                    })
                }, [e]), t.useBodyHeight = e => r.useMemo(() => e.map(e => i.getRowHeight(e, 230)), [e])
            },
            1744: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(12),
                    i = a(n(0)),
                    l = n(56),
                    s = n(110),
                    o = ["explore", "present", "reveal"];
                class c extends HTMLElement {
                    get variant() {
                        const e = this.getAttribute("variant");
                        return o.includes(e) ? e : null
                    }
                    get url() {
                        return this.getAttribute("url") || void 0
                    }
                    connectedCallback() {
                        const e = document.createElement("div");
                        this.appendChild(e);
                        const t = this.variant;
                        t && l.render({
                            component: i.createElement(r.UpsellingPage, {
                                variant: t,
                                url: this.url
                            }),
                            container: e
                        })
                    }
                }
                s.defineCustomElement("zoom360-upsell-page", c)
            },
            1745: function(e, t, n) {
                "use strict";
                var a = this && this.__rest || function(e, t) {
                        var n = {};
                        for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var r = 0;
                            for (a = Object.getOwnPropertySymbols(e); r < a.length; r++) t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]])
                        }
                        return n
                    },
                    r = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = r(n(0)),
                    l = n(12),
                    s = n(56),
                    o = n(1746),
                    c = n(110),
                    u = e => e ? i.createElement(l.Join, {
                        spacing: "x-small"
                    }, e.map(e => {
                        var {
                            label: t,
                            isPrimary: n,
                            href: r
                        } = e, s = a(e, ["label", "isPrimary", "href"]);
                        const o = n ? l.Button : l.Button.Secondary,
                            c = r ? {
                                as: "a",
                                href: r
                            } : {
                                type: "submit"
                            };
                        return i.createElement(o, Object.assign({}, s, c, {
                            size: "small"
                        }), t)
                    })) : null;
                class d extends HTMLElement {
                    get left() {
                        const e = this.getAttribute("left");
                        return e ? JSON.parse(e) : void 0
                    }
                    get right() {
                        const e = this.getAttribute("right");
                        return e ? JSON.parse(e) : void 0
                    }
                    connectedCallback() {
                        const e = document.createElement("div");
                        this.appendChild(e), s.render({
                            component: i.createElement(o.SubmitRow, null, i.createElement(o.SubmitRow.Left, null, u(this.left)), i.createElement(o.SubmitRow.Right, null, u(this.right))),
                            container: e
                        })
                    }
                }
                c.defineCustomElement("zoom360-submit-row", d)
            },
            1746: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(12);
                t.SubmitRow = ({
                    children: e
                }) => r.createElement(i.Join, {
                    orientation: "vertical",
                    block: !0
                }, r.createElement(i.Separator, {
                    color: "grey.2"
                }), r.createElement(i.Flex, {
                    maxWidth: 480
                }, e)), t.SubmitRow.Left = e => r.createElement(i.Box, Object.assign({}, e, {
                    order: 0
                })), t.SubmitRow.Right = e => r.createElement(i.Box, Object.assign({}, e, {
                    marginLeft: "auto",
                    order: 1
                }))
            },
            1747: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(56),
                    l = n(110),
                    s = n(12);
                class o extends HTMLElement {
                    getMountPoint() {
                        const e = document.createElement("div");
                        return this.appendChild(e), e
                    }
                    get theme() {
                        return "insights" === this.getAttribute("theme") ? "insights" : "datatap"
                    }
                    get message() {
                        var e;
                        return null !== (e = this.getAttribute("message")) && void 0 !== e ? e : ""
                    }
                    get explanation() {
                        var e;
                        return null !== (e = this.getAttribute("explanation")) && void 0 !== e ? e : void 0
                    }
                    get loginUrl() {
                        var e;
                        return null !== (e = this.getAttribute("loginUrl")) && void 0 !== e ? e : void 0
                    }
                    get backUrl() {
                        var e;
                        return null !== (e = this.getAttribute("backUrl")) && void 0 !== e ? e : void 0
                    }
                    get subject() {
                        var e;
                        return null !== (e = this.getAttribute("subject")) && void 0 !== e ? e : void 0
                    }
                    connectedCallback() {
                        i.render({
                            component: r.createElement(s.AuthErrorPage, {
                                theme: this.theme,
                                message: this.message,
                                explanation: this.explanation,
                                loginUrl: this.loginUrl,
                                backUrl: this.backUrl,
                                subject: this.subject
                            }),
                            container: this.getMountPoint()
                        })
                    }
                }
                l.defineCustomElement("zoom360-auth-error", o)
            },
            1748: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(12),
                    l = n(56),
                    s = n(110),
                    o = ({
                        name: e,
                        disabled: t,
                        options: n,
                        id: a,
                        initialValue: l
                    }) => {
                        const [s, o] = r.useState(l), c = r.useRef(null), u = null == s ? void 0 : s.value;
                        return r.useEffect(() => {
                            var e;
                            const t = new Event("change", {
                                bubbles: !0,
                                cancelable: !0
                            });
                            null === (e = c.current) || void 0 === e || e.dispatchEvent(t)
                        }, [u, c]), r.createElement(i.Box, {
                            maxWidth: 480
                        }, r.createElement("input", {
                            name: e,
                            id: a,
                            value: u,
                            ref: c,
                            hidden: !0
                        }), r.createElement(i.Select, {
                            value: s,
                            onChange: o,
                            options: n,
                            size: "small",
                            disabled: t
                        }))
                    };
                class c extends HTMLElement {
                    get name() {
                        var e;
                        return null !== (e = this.getAttribute("name")) && void 0 !== e ? e : void 0
                    }
                    set name(e) {
                        this.setAttribute("name", null != e ? e : "")
                    }
                    get selectOptions() {
                        const e = this.getAttribute("data-options");
                        if (!e) return {
                            options: []
                        };
                        const t = JSON.parse(e).flat(2).filter(e => e && "object" == typeof e).map(({
                            value: e,
                            label: t,
                            selected: n
                        }) => ({
                            value: e,
                            label: t,
                            selected: n
                        }));
                        return {
                            options: t,
                            initialValue: t.find(({
                                selected: e
                            }) => e)
                        }
                    }
                    get dataId() {
                        var e;
                        return null !== (e = this.getAttribute("data-id")) && void 0 !== e ? e : void 0
                    }
                    get mountPoint() {
                        if (this.firstChild) return this.firstChild;
                        const e = document.createElement("div");
                        return this.appendChild(e), e
                    }
                    swapIdToDataId() {
                        this.setAttribute("data-id", this.id), this.removeAttribute("id")
                    }
                    connectedCallback() {
                        this.swapIdToDataId(), this.removeAttribute("class");
                        const e = this.hasAttribute("disabled");
                        l.render({
                            component: r.createElement(o, Object.assign({
                                name: this.name,
                                id: this.dataId,
                                disabled: e
                            }, this.selectOptions)),
                            container: this.mountPoint
                        })
                    }
                }
                s.defineCustomElement("zoom360-select", c)
            },
            1749: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(12),
                    l = n(774),
                    s = n(56),
                    o = n(110);
                class c extends l.AdverityFormElement {
                    constructor() {
                        super(...arguments), this.events = ["change", "click"]
                    }
                    get checked() {
                        return this.hasAttribute("checked")
                    }
                    get disabled() {
                        return this.hasAttribute("disabled")
                    }
                    set checked(e) {
                        this.toggleAttribute("checked", e);
                        const t = this.hiddenInput;
                        this.toggleDisabled(e, t), t.value = e ? this.value : "", t.checked = e, s.render({
                            component: this.component,
                            container: this.mountPoint
                        })
                    }
                    get component() {
                        return r.createElement(i.Checkbox, {
                            onChange: () => this.handleValueChange(),
                            checked: this.checked,
                            disabled: this.disabled
                        })
                    }
                    get value() {
                        var e;
                        return null !== (e = this.getAttribute("value")) && void 0 !== e ? e : "on"
                    }
                    createHiddenInput() {
                        const e = super.createHiddenInput(),
                            t = this.checked;
                        return e.dataset.type = "checkbox", e.checked = t, e.value = t ? this.value : "", this.toggleDisabled(t, e), e
                    }
                    toggleDisabled(e, t = this.hiddenInput) {
                        t.disabled = "on" !== this.value && !e
                    }
                    toggleElements(e) {
                        const t = this.getAttribute("toggle");
                        t && document.querySelectorAll(t).forEach(t => {
                            t.checked = e
                        })
                    }
                    handleValueChange(e) {
                        const t = this.hiddenInput,
                            n = null != e ? e : !this.checked;
                        this.checked = n, t.disabled = !1, this.callChangeEvents(), this.toggleDisabled(n, t), this.toggleElements(n)
                    }
                    connectedCallback() {
                        super.connectedCallback();
                        const e = this.getAttribute("toggle");
                        if (e) {
                            let t;
                            document.addEventListener("DOMContentLoaded", () => {
                                const n = Array.from(document.querySelectorAll(e)),
                                    a = e => {
                                        e.stopPropagation(), this.checked = n.every(e => e.hiddenInput.value)
                                    },
                                    r = e => {
                                        const a = e.currentTarget;
                                        if (t && e.shiftKey && Boolean(a.hiddenInput.value) !== Boolean(t.hiddenInput.value)) {
                                            const e = Boolean(t.hiddenInput.value);
                                            let r = !1;
                                            n.forEach(n => {
                                                n !== a && n !== t || (r = !r), r && n.handleValueChange(e)
                                            })
                                        }
                                        t = a
                                    };
                                n.forEach(e => {
                                    e.hiddenInput.addEventListener("click", a), e.addEventListener("click", r)
                                })
                            })
                        }
                    }
                }
                o.defineCustomElement("zoom360-checkbox", c)
            },
            1750: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(12),
                    l = n(774),
                    s = n(56),
                    o = n(110),
                    c = ({
                        checked: e,
                        options: t,
                        onChange: n,
                        disabled: a
                    }) => r.createElement(i.Join, {
                        orientation: "vertical",
                        spacing: "x-small"
                    }, t.map(({
                        label: t,
                        value: l
                    }) => r.createElement(i.Label, {
                        key: l,
                        onClick: () => !a && n(l)
                    }, r.createElement(i.Radio, {
                        value: l,
                        checked: l === e,
                        disabled: a
                    }), r.createElement(i.Text, {
                        marginLeft: "x-small",
                        color: a ? "gray.3" : void 0
                    }, t))));
                class u extends l.AdverityFormElement {
                    constructor() {
                        super(...arguments), this.options = []
                    }
                    get component() {
                        return r.createElement(c, {
                            options: this.options,
                            onChange: this.handleValueChange,
                            checked: this.hiddenInput.value,
                            disabled: this.disabled
                        })
                    }
                    get dataOptions() {
                        var e;
                        const t = this.getAttribute("data-options");
                        if (!t) return {
                            options: []
                        };
                        const n = JSON.parse(t).flat(2).filter(e => e && "object" == typeof e).map(({
                            value: e,
                            label: t,
                            selected: n
                        }) => ({
                            value: String(e),
                            label: t,
                            selected: n
                        }));
                        return {
                            options: n,
                            initialValue: null !== (e = n.find(({
                                selected: e
                            }) => e)) && void 0 !== e ? e : n[0]
                        }
                    }
                    get disabled() {
                        return this.hasAttribute("disabled")
                    }
                    createHiddenInput() {
                        const e = super.createHiddenInput();
                        return e.value = String(this.initialValue), e
                    }
                    handleValueChange(e) {
                        super.handleValueChange(e), s.render({
                            component: this.component,
                            container: this.mountPoint
                        })
                    }
                    connectedCallback() {
                        const {
                            options: e,
                            initialValue: t
                        } = this.dataOptions;
                        this.options = e, this.initialValue = null == t ? void 0 : t.value, super.connectedCallback()
                    }
                }
                o.defineCustomElement("zoom360-radio-buttons", u)
            },
            188: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0));
                t.HoverSensor = e => {
                    const [t, n] = r.useState(!1), a = e => t => {
                        t && e && e(t), n(!0)
                    }, i = e => t => {
                        t && e && e(t), n(!1)
                    };
                    if (e.isBound) return e.children({
                        isHover: t,
                        onMouseEnter: a(),
                        onMouseLeave: i()
                    });
                    const l = e.children({
                        isHover: t
                    });
                    return r.cloneElement(l, {
                        onMouseEnter: a(l.props.onMouseEnter),
                        onMouseLeave: i(l.props.onMouseLeave)
                    })
                }
            },
            283: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    },
                    r = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = a(n(0)),
                    l = n(96),
                    s = r(n(44)),
                    o = n(1544);
                t.withBackendData = (e, t) => class extends i.PureComponent {
                    constructor() {
                        super(...arguments), this.state = {
                            data: null
                        }, this.timeout = null, this.waitForUpdate = () => {
                            this.timeout = setTimeout(this.checkForUpdates, this.props.refreshInterval)
                        }, this.checkForUpdates = () => {
                            const {
                                refreshInterval: e
                            } = this.props;
                            e && (o.isBrowserTabVisible() ? this.update() : this.waitForUpdate())
                        }, this.update = () => {
                            const {
                                sourceUrl: e,
                                params: t
                            } = this.props;
                            s.default.get(e, t && {
                                params: t
                            }).then(({
                                data: e
                            }) => this.setState({
                                data: e
                            })).finally(() => {
                                this.waitForUpdate()
                            })
                        }
                    }
                    componentDidMount() {
                        this.update()
                    }
                    componentWillUnmount() {
                        null !== this.timeout && clearTimeout(this.timeout)
                    }
                    render() {
                        const n = t || l.LoadingIndicator;
                        return this.state.data ? i.createElement(e, Object.assign({
                            data: this.state.data
                        }, this.props)) : i.createElement(n, null)
                    }
                }
            },
            284: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const a = n(15);
                t.validate = (e, t) => e.map(([e, n]) => e(t) ? void 0 : n).find(a.identity), t.isRequired = e => !a.isNil(e) && String(e).length > 0, t.isValidEmail = e => a.isString(e) && /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(e)
            },
            285: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    },
                    r = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = a(n(0)),
                    l = r(n(1556)),
                    s = r(n(1558)),
                    o = n(15),
                    c = r(n(4));
                s.default(l.default.Highcharts);
                t.default = ({
                    config: e,
                    width: t,
                    height: n,
                    className: a,
                    style: r
                }) => i.createElement(l.default, {
                    config: Object.assign(Object.assign({}, e), {
                        chart: Object.assign(Object.assign({}, e.chart), {
                            width: t || o.get(e.chart, ["width"], null),
                            height: n || o.get(e.chart, ["height"], null)
                        })
                    }),
                    domProps: {
                        className: c.default(a, {
                            fluid: !t
                        }),
                        style: r
                    }
                })
            },
            286: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0));
                t.useWindowSize = () => {
                    const e = () => ({
                            width: window.innerWidth,
                            height: window.innerHeight
                        }),
                        [t, n] = r.useState(e);
                    return r.useEffect(() => {
                        const t = () => {
                            n(e())
                        };
                        return window.addEventListener("resize", t), () => window.removeEventListener("resize", t)
                    }, []), t
                }, t.useContentHeight = () => {
                    var e;
                    const [n, a] = r.useState(), {
                        height: i
                    } = t.useWindowSize();
                    return {
                        element: n,
                        setElement: a,
                        height: i - (null !== (e = null == n ? void 0 : n.getBoundingClientRect().top) && void 0 !== e ? e : 0) - 60
                    }
                }
            },
            287: function(e, t, n) {
                "use strict";
                var a = this && this.__awaiter || function(e, t, n, a) {
                        return new(n || (n = Promise))((function(r, i) {
                            function l(e) {
                                try {
                                    o(a.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function s(e) {
                                try {
                                    o(a.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function o(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(l, s)
                            }
                            o((a = a.apply(e, t || [])).next())
                        }))
                    },
                    r = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    },
                    i = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const l = r(n(0)),
                    s = n(1564),
                    o = i(n(44)),
                    c = n(63),
                    u = e => ["datastreams", e],
                    d = (e, t) => a(void 0, void 0, void 0, (function*() {
                        const e = `${c.API_URLS.datastream}${t}`,
                            {
                                data: n
                            } = yield o.default.get(e);
                        return n
                    }));
                t.useDatastreamPatch = e => {
                    const t = u(e.id);
                    return s.useMutation((e => t => a(void 0, void 0, void 0, (function*() {
                        const {
                            data: n
                        } = yield o.default.patch(e.url, t);
                        return n
                    })))(e), {
                        onSuccess: e => {
                            s.queryCache.setQueryData(t, e)
                        }
                    })
                }, t.useDatastreamTransformersPatch = e => {
                    const t = u(e.id),
                        n = l.useRef(0);
                    return s.useMutation((e => t => a(void 0, void 0, void 0, (function*() {
                        const {
                            data: n
                        } = yield o.default.patch(e.url, {
                            transformer_ids: t.map(({
                                id: e
                            }) => e)
                        });
                        return n
                    })))(e), {
                        onMutate: e => {
                            n.current += 1, s.queryCache.cancelQueries(t);
                            const a = s.queryCache.getQueryData(t);
                            a && s.queryCache.setQueryData(t, Object.assign(Object.assign({}, a), {
                                transformers: e
                            }))
                        },
                        onSettled: (e, a) => {
                            n.current -= 1, 0 === n.current && a ? s.queryCache.refetchQueries(t) : 0 === n.current && s.queryCache.setQueryData(t, e)
                        }
                    })
                }, t.useDatastreamFetch = e => {
                    const t = u(e);
                    return s.useQuery(t, d)
                }
            },
            288: function(e, t, n) {
                "use strict";
                var a = this && this.__rest || function(e, t) {
                        var n = {};
                        for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var r = 0;
                            for (a = Object.getOwnPropertySymbols(e); r < a.length; r++) t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]])
                        }
                        return n
                    },
                    r = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = r(n(0)),
                    l = n(12);
                t.DialogWindow = e => {
                    var {
                        title: t,
                        children: n,
                        showOverlay: r = !0,
                        showClose: s = !0,
                        actionButtons: o
                    } = e, c = a(e, ["title", "children", "showOverlay", "showClose", "actionButtons"]);
                    return i.createElement(i.Fragment, null, r && i.createElement(l.Portal, null, i.createElement(l.Dialog.Backdrop, {
                        visible: c.visible
                    })), i.createElement(l.Dialog, Object.assign({}, c, {
                        hide: c.onClose,
                        css: {
                            transform: "translate(-50%, -50%)",
                            maxHeight: "85%",
                            width: "920px",
                            overflowY: "auto",
                            overflowX: "hidden"
                        }
                    }), i.createElement(l.Join, {
                        orientation: "vertical",
                        spacing: "small",
                        paddingY: "small",
                        block: !0
                    }, i.createElement(l.StartEnd, {
                        alignItems: "center",
                        paddingX: "medium"
                    }, i.createElement(l.Text, {
                        size: "medium"
                    }, t), s && i.createElement(l.IconButton.Minimal, {
                        name: "close",
                        onClick: c.onClose
                    })), i.createElement(l.Separator, null), i.createElement(l.Box, {
                        paddingX: "medium"
                    }, "string" == typeof n ? i.createElement(l.Text, {
                        size: "medium"
                    }, n) : n), o && i.createElement(i.Fragment, null, i.createElement(l.Separator, null), i.createElement(l.Join, {
                        paddingX: "medium",
                        justifyContent: "flex-end",
                        spacing: "small"
                    }, o)))))
                }
            },
            377: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    },
                    r = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = a(n(0)),
                    l = n(12),
                    s = n(284),
                    o = n(378),
                    c = r(n(44)),
                    u = [{
                        name: "email",
                        label: "Email",
                        placeholder: "Enter email address here",
                        validators: [
                            [s.isValidEmail, "Enter a valid email address"]
                        ]
                    }, {
                        name: "subject",
                        label: "Subject",
                        placeholder: "Enter one or two keywords here",
                        validators: [
                            [s.isRequired, "This field is required"]
                        ]
                    }, {
                        name: "message",
                        label: "Message",
                        placeholder: "Enter your message here",
                        validators: [
                            [s.isRequired, "This field is required"]
                        ],
                        as: "textarea"
                    }];
                t.ContactModal = ({
                    onSubmit: e,
                    onCancel: t,
                    isOpen: n,
                    issueUrl: a,
                    email: r,
                    subject: s,
                    message: d,
                    additionalPayload: m,
                    title: p = "Contact Support"
                }) => {
                    const g = {
                            email: r,
                            subject: s,
                            message: d
                        },
                        [h, f] = i.useState("notSubmitted"),
                        v = "notSubmitted" === h ? void 0 : i.createElement(l.Button.Secondary, {
                            onClick: t
                        }, "Close");
                    return i.createElement(o.FormModal, {
                        handleCancel: t,
                        handleSubmit: t => {
                            c.default.post("/api/web-app/ticket", Object.assign(Object.assign(Object.assign({}, m), t), {
                                issue_url: a
                            })).then(() => f("success")).catch(() => f("error")).finally(e)
                        },
                        title: p,
                        isOpen: n,
                        config: u,
                        values: g,
                        footer: v
                    }, e => i.createElement(l.Join, {
                        orientation: "vertical",
                        spacing: "medium",
                        marginBottom: "x-small"
                    }, "success" === h && i.createElement(l.Alert, {
                        variant: "success",
                        width: "100%"
                    }, "Ticket submitted, we will be in touch!"), "error" === h && i.createElement(l.Alert, {
                        variant: "danger",
                        width: "100%"
                    }, "Ticket submission failed, please try again later."), "notSubmitted" === h && e, i.createElement(l.Text, {
                        fontSize: "x-small"
                    }, "You can also log into our help centerÂ ", i.createElement(l.Link, {
                        href: "https://help.zoom360.com/hc/en-us/requests",
                        target: "_blank"
                    }, "here."))))
                }
            },
            378: function(e, t, n) {
                "use strict";
                var a = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    },
                    r = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = a(n(379)),
                    l = n(1548),
                    s = r(n(0));
                t.FormModal = ({
                    handleCancel: e,
                    handleSubmit: t,
                    title: n,
                    isOpen: a,
                    children: r,
                    config: o,
                    values: c,
                    errors: u,
                    submitLabel: d,
                    cancelLabel: m,
                    isLoading: p,
                    footer: g
                }) => {
                    const h = l.useForm(o, c, u);
                    return s.createElement(i.default, {
                        show: a,
                        title: n,
                        onCloseModal: e,
                        footer: null != g ? g : s.createElement(i.default.SubmitFooter, {
                            onSubmit: () => {
                                const e = h.submit();
                                e.isValid && t(e.values)
                            },
                            onCancel: () => {
                                h.reset(), e()
                            },
                            submitLabel: d,
                            cancelLabel: m,
                            isLoading: p
                        })
                    }, r ? r(h.component) : h.component)
                }
            },
            379: function(e, t, n) {
                "use strict";
                var a = this && this.__rest || function(e, t) {
                        var n = {};
                        for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var r = 0;
                            for (a = Object.getOwnPropertySymbols(e); r < a.length; r++) t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]])
                        }
                        return n
                    },
                    r = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    },
                    i = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const l = r(n(0)),
                    s = i(n(372)),
                    o = i(n(282)),
                    c = n(1547),
                    u = ({
                        onClick: e
                    }) => l.createElement(o.default, {
                        bsStyle: "default",
                        onClick: e
                    }, "Close"),
                    d = e => {
                        var {
                            onCloseModal: t,
                            title: n,
                            children: r,
                            footer: i
                        } = e, o = a(e, ["onCloseModal", "title", "children", "footer"]);
                        const c = e => {
                            e && e.stopPropagation(), t && t(e)
                        };
                        return l.createElement(s.default, Object.assign({
                            onHide: c
                        }, o), l.createElement(s.default.Header, {
                            closeButton: !0
                        }, l.createElement(s.default.Title, {
                            id: "contained-modal-title"
                        }, n)), l.createElement(s.default.Body, null, r), l.createElement(s.default.Footer, null, null != i ? i : l.createElement(u, {
                            onClick: c
                        })))
                    };
                d.SubmitFooter = c.SubmitFooter, t.default = d
            },
            380: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.formatBytes = function(e, t = 2) {
                    if (0 === e) return "0 Bytes";
                    if (1 === e) return "1 Byte";
                    const n = Math.floor(Math.log(e) / Math.log(1e3));
                    return `${parseFloat((e/Math.pow(1e3,n)).toFixed(t))} ${["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][n]}`
                }, t.createReducer = function(e, t) {
                    return (n = e, a) => {
                        const r = t[a.type];
                        return r ? r(n, a) : n
                    }
                }
            },
            381: function(e, t, n) {
                "use strict";
                var a = this && this.__rest || function(e, t) {
                        var n = {};
                        for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var r = 0;
                            for (a = Object.getOwnPropertySymbols(e); r < a.length; r++) t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]])
                        }
                        return n
                    },
                    r = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = r(n(0)),
                    l = r(n(376)),
                    s = n(404),
                    o = n(1583),
                    c = {
                        control: e => Object.assign(Object.assign({}, e), {
                            minHeight: "34px"
                        }),
                        clearIndicator: e => Object.assign(Object.assign({}, e), {
                            padding: "2px 8px"
                        }),
                        dropdownIndicator: e => Object.assign(Object.assign({}, e), {
                            padding: "2px 8px"
                        }),
                        loadingIndicator: e => Object.assign(Object.assign({}, e), {
                            padding: "2px 8px"
                        }),
                        menu: e => Object.assign(Object.assign({}, e), {
                            zIndex: 20
                        }),
                        input: e => Object.assign(Object.assign({}, e), {
                            "& input": {
                                boxShadow: "none !important"
                            }
                        })
                    },
                    u = ({
                        children: e
                    }) => {
                        const t = Array.isArray(e) ? e : [],
                            n = Math.min(340, 34 * t.length);
                        return i.createElement(s.FixedSizeList, {
                            width: "100%",
                            height: n,
                            itemSize: 34,
                            itemCount: t.length
                        }, ({
                            index: e,
                            style: n
                        }) => i.createElement("div", {
                            style: n
                        }, t[e]))
                    };
                t.components = l.components, t.default = function(e) {
                    var {
                        type: t = "Sync",
                        virtualized: n,
                        components: r,
                        loadOptions: s,
                        noOptionsMessage: d
                    } = e, m = a(e, ["type", "virtualized", "components", "loadOptions", "noOptionsMessage"]);
                    const p = n ? Object.assign(Object.assign({}, r), {
                            MenuList: u
                        }) : r,
                        g = o.useReactSelectTheme();
                    switch (t) {
                        case "Sync":
                            return i.createElement(l.default, Object.assign({}, m, {
                                components: r,
                                loadOptions: s,
                                noOptionsMessage: d,
                                styles: c
                            }));
                        case "Async":
                            return i.createElement(l.Async, Object.assign({}, m, {
                                components: p,
                                loadOptions: s,
                                noOptionsMessage: d,
                                styles: c
                            }));
                        case "CreatableSync":
                            return i.createElement(l.Creatable, Object.assign({}, m, {
                                components: p,
                                styles: c,
                                noOptionsMessage: d,
                                theme: g
                            }))
                    }
                }
            },
            382: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.INITIAL_MONTH_INTERVAL = 3, t.QUOTA_TYPE_FILESIZE = 1, t.QUOTA_TYPE_ROWS = 2
            },
            383: function(e, t, n) {
                "use strict";
                var a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(9)),
                    i = n(15),
                    l = (e, t) => r.default.utc(e).add(t, "month").startOf("month");
                t.getStart = (e, t) => l(e, 1 - t), t.getEnd = e => l(e, 1);
                const s = e => `${e.year}-${i.padStart(String(e.month),2,"0")}`,
                    o = (e, n) => {
                        const a = n.clone();
                        return a.add(1, "month"), a < t.getEnd(e) ? [n.format("YYYY-MM")].concat(o(e, a.clone())) : [n.format("YYYY-MM")]
                    },
                    c = (e, t, n) => t.map(t => ({
                        x: t,
                        y: n[t] ? n[t][e] : null
                    }));
                t.formatQuotaHistoryChartData = (e, n, a, r = Date.now()) => {
                    const l = o(r, t.getStart(r, a)),
                        u = i.zipObject(e.map(s), e);
                    return [{
                        id: n + " Used",
                        data: c("used_quota", l, u)
                    }, {
                        id: n + " Quota",
                        data: c("quota", l, u)
                    }]
                }
            },
            44: function(e, t, n) {
                "use strict";
                var a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(1094)),
                    i = a(n(1111));
                t.default = r.default.create({
                    withCredentials: !0,
                    headers: {
                        "X-CSRFToken": i.default.get("csrftoken")
                    }
                })
            },
            56: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    },
                    r = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = a(n(0)),
                    l = r(n(14)),
                    s = n(12);
                t.render = ({
                    component: e,
                    container: t
                }) => {
                    l.default.render(i.createElement(s.Provider, {
                        theme: s.datatapTheme
                    }, e), t)
                }
            },
            568: function(e, t, n) {
                "use strict";
                var a = this && this.__rest || function(e, t) {
                    var n = {};
                    for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                        var r = 0;
                        for (a = Object.getOwnPropertySymbols(e); r < a.length; r++) t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]])
                    }
                    return n
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(15);
                t.remove = (e, t) => t < 0 || t > e.length - 1 ? e : [...e.slice(0, t), ...e.slice(t + 1)], t.add = (e, t, n = e.length) => n < 0 || n > e.length ? e : [...e.slice(0, n), t, ...e.slice(n)], t.replace = (e, t, n) => t < 0 || t > e.length - 1 ? e : [...e.slice(0, t), r.isFunction(n) ? n(e[t]) : n, ...e.slice(t + 1)], t.getFormattedCode = e => JSON.stringify(e.map(({
                    enabled: e,
                    name: t,
                    properties: n,
                    comment: a
                }) => [e ? t : "#" + t, Object.assign(Object.assign({}, n), {
                    _comment: a
                })]), null, 4), t.parseInstructions = e => e.map(e => {
                    var [t, n] = e, {
                        _comment: r
                    } = n, i = a(n, ["_comment"]);
                    return {
                        name: t.replace(/^#/, ""),
                        comment: r || null,
                        properties: i,
                        enabled: "#" !== t[0]
                    }
                })
            },
            63: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.API_URLS = {
                    site_status: "/api/status/",
                    column_mapping: "/api/columns/",
                    target_columns: "/api/target-columns/",
                    workspaces: "/api/stacks/",
                    datastream: "/api/datastreams/",
                    account: "/api/web-app/account",
                    extracts: "/api/extracts/",
                    errors: "/api/errors/",
                    jobs: "/api/jobs/",
                    transformation_schema: "/api/transformation/schema/",
                    stats: {
                        quota: {
                            current: "/api/stats/quota/current/",
                            history: "/api/stats/quota/history/",
                            datastreams: "/api/stats/quota/datastreams/"
                        }
                    }
                }, t.URL_MAPPING = {
                    create_target_column: "/target/targetcolumn/add/"
                }, t.MEASURES = {
                    SUM: "Sum",
                    NONAGG: "Don't Aggregate",
                    AVG: "Average",
                    COUNT: "Count",
                    MIN: "Min",
                    MAX: "Max"
                }, t.DATA_TYPES = {
                    1: "String",
                    2: "Long",
                    3: "Float",
                    4: "Date",
                    5: "DateTime",
                    6: "Boolean",
                    7: "Percentage",
                    8: "JSON",
                    9: "Currency",
                    10: "Formula"
                }, t.DATATYPE_CHOICES = Object.values(t.DATA_TYPES), t.USAGE_DIMENSION = "dimension", t.USAGE_METRIC = "metric", t.JOB_STATE_RUNNING = 1, t.JOB_STATE_SCHEDULED = 0, t.JOB_STATE_FAILED = 4
            },
            697: function(e, t, n) {
                "use strict";
                var a = this && this.__rest || function(e, t) {
                        var n = {};
                        for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var r = 0;
                            for (a = Object.getOwnPropertySymbols(e); r < a.length; r++) t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]])
                        }
                        return n
                    },
                    r = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    },
                    i = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const l = r(n(0)),
                    s = n(283),
                    o = n(1545),
                    c = n(1546),
                    u = i(n(1550)),
                    d = n(1552),
                    m = i(n(1553)),
                    p = e => s.withBackendData(t => {
                        var {
                            data: n
                        } = t, r = a(t, ["data"]);
                        return l.createElement(u.default, Object.assign({}, r, {
                            items: n.results,
                            totalItemCount: n.count,
                            rowComponent: e
                        }))
                    }),
                    g = p(c.IssueItem);
                t.IssueLane = e => {
                    var {
                        issuesUrl: t
                    } = e, n = a(e, ["issuesUrl"]);
                    return l.createElement(g, Object.assign({
                        emptyMessage: "No issues",
                        header: "Issues",
                        headerActionComponent: l.createElement(m.default, {
                            url: t,
                            label: "All Issues"
                        }),
                        refreshInterval: 5e3,
                        showItemBadge: !0
                    }, n))
                };
                const h = p(d.RecentActivityItem);
                t.RecentActivityLane = e => {
                    var {
                        extractsUrl: t
                    } = e, n = a(e, ["extractsUrl"]);
                    return l.createElement(h, Object.assign({
                        emptyMessage: "No activity",
                        header: "Recent Activity",
                        headerActionComponent: l.createElement(m.default, {
                            url: t,
                            label: "All Extracts"
                        }),
                        refreshInterval: 5e3
                    }, n))
                };
                const f = p(o.ActivityMonitorItem);
                t.ActivityMonitorLane = e => {
                    var t = a(e, []);
                    return l.createElement(f, Object.assign({
                        emptyMessage: "No activity",
                        header: "Activity Monitor",
                        refreshInterval: 5e3
                    }, t))
                }
            },
            698: function(e, t, n) {
                "use strict";
                var a = this && this.__awaiter || function(e, t, n, a) {
                        return new(n || (n = Promise))((function(r, i) {
                            function l(e) {
                                try {
                                    o(a.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function s(e) {
                                try {
                                    o(a.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function o(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(l, s)
                            }
                            o((a = a.apply(e, t || [])).next())
                        }))
                    },
                    r = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    },
                    i = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const l = r(n(0)),
                    s = n(12),
                    o = i(n(44)),
                    c = n(1554);
                t.KpiBoxes = ({
                    url: e
                }) => {
                    const [t, n] = l.useState([]);
                    l.useEffect(() => {
                        a(void 0, void 0, void 0, (function*() {
                            const t = yield o.default.get(e);
                            n(t.data)
                        }))
                    }, [e]);
                    const r = Math.floor(12 / t.length);
                    return l.createElement(s.Row, {
                        gutter: "medium",
                        height: {
                            large: "120px"
                        }
                    }, t.map(({
                        name: e,
                        total: t,
                        values: n,
                        format: a
                    }) => l.createElement(s.Column, {
                        span: [12, r, r],
                        key: e
                    }, l.createElement(c.MetricValueBox, {
                        name: e,
                        value: t,
                        series: {
                            data: n,
                            type: "areaspline"
                        },
                        format: a
                    }))))
                }
            },
            699: function(e, t, n) {
                "use strict";
                var a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = a(n(0)),
                    i = n(12),
                    l = {
                        1: ["activityMonitor", "issues", "recentActivity"],
                        2: ["activityMonitor", "recentActivity", "issues"],
                        3: ["issues", "recentActivity", "activityMonitor"],
                        4: ["recentActivity", "issues", "activityMonitor"],
                        5: ["recentActivity", "activityMonitor", "issues"],
                        6: ["issues", "activityMonitor", "recentActivity"]
                    },
                    s = {
                        1: "recentActivity",
                        2: "issues"
                    };
                t.OverviewLanes = ({
                    laneComponents: e,
                    spotlight: t,
                    order: n,
                    rowRef: a
                }) => {
                    const o = i.useMedia("medium"),
                        c = i.useMedia("(min-width: 845px)"),
                        u = (e, t) => o ? e : c && t ? t : 12;
                    return r.createElement(i.Row, {
                        gutter: "medium",
                        ref: a
                    }, l[n].map(n => {
                        const a = t ? u(s[t] === n ? 6 : 3, 4) : u(4);
                        return r.createElement(i.Column, {
                            span: a
                        }, e[n])
                    }))
                }
            },
            700: function(e, t, n) {
                    "use strict";
                    var a = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    const r = a(n(9)),
                        i = n(15),
                        l = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
                    t.getLabelForOption = e => {
                            let t = "";
                            return "day" === e.cron_type && e.cron_start_of_day ? t = " at " + r.default(e.cron_start_of_day, "HH:mm:ss").format("HH:mm") : "week" === e.cron_type && e.cron_interval_start && (t = " on " + l[e.cron_interval_start - 1]), `Every ${e.cron_interval&&e.cron_interval>1?e.cron_interval:""} ${e.cron_type}${e.cron_interval&&e.cron_interval>1?"s":""}${t} | ${e.time_range_preset_label} ${0===e.offset_days?"":`| Offset: ${e.offset_days} day`}${Math.abs(e.offset_days)>1?"s":""}`
		}, t.startOfWeekOptions = l.map((e, t) => ({
			value: t + 1,
			label: e
		})), t.dayOfMonthOptions = i.range(1, 32).map(e => ({
			value: e,
			label: "" + e
		})), t.findInStartOfWeek = e => t.startOfWeekOptions.find(t => t.value === e) || t.startOfWeekOptions[0], t.getSchedulingKey = e => `${e.cron_preset}|${e.cron_interval_start}|${e.cron_start_of_day}|${e.time_range_preset}|${e.offset_days}`
	},
	701: function (e, t, n) {
		"use strict";
		var a = this && this.__importStar || function (e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e)
				for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.default = e, t
		};
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		const r = a(n(0)),
			i = n(1575),
			l = n(1576);
		t.SmartNamingConventionSummary = ({
			column: e,
			splitLogic: t,
			columnNames: n,
			emailForError: a,
			raiseForWarning: s,
			emailForWarning: o,
			warnings: c
		}) => r.createElement(r.Fragment, null, r.createElement(i.Section, {
			title: "Column"
		}, r.createElement(l.SectionItem, {
			text: e
		})), r.createElement(i.Section, {
			title: "Split Logic"
		}, t.map(e => r.createElement(l.SectionItem, {
			key: e,
			text: e
		}))), r.createElement(i.Section, {
			title: "Column Names"
		}, n.map(e => r.createElement(l.SectionItem, {
			key: e,
			text: e
		}))), r.createElement(i.Section, {
			title: "Errors"
		}, r.createElement(l.SectionItem, {
			key: "email-for-error",
			text: `You will ${a?"":"not"} receive Errors via e-mail`
		})), r.createElement(i.Section, {
			title: "Warnings"
		}, r.createElement(l.SectionItem, {
			key: "email-for-warning",
			text: `You will ${o?"":"not"} receive Warnings via e-mail`
		}), r.createElement(l.SectionItem, {
			key: "raise-for-warning",
			text: `Issues will ${s?"":"not"} be raised within Issues section`
		})), (o || s) && r.createElement(i.Section, {
			subtitle: "If the following conditions are not met:"
		}, c.map(e => r.createElement(l.SectionItem, {
			key: e,
			text: e
		}))))
	},
	768: function (e, t, n) {
		"use strict";
		var a = this && this.__importStar || function (e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e)
				for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.default = e, t
		};
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		const r = a(n(0)),
			i = n(12),
			l = n(286),
			s = n(1700),
			o = n(1704),
			c = n(1708);
		t.SideBar = ({
			header: e,
			content: t,
			footer: n,
			contentTitle: a
		}) => {
			const [u, d] = r.useState(null), {
				width: m
			} = l.useWindowSize();
			r.useEffect(() => {
				const e = () => {
					const e = document.getElementById("footer");
					d(e)
				};
				return document.addEventListener("DOMContentLoaded", e), () => document.removeEventListener("DOMContentLoaded", e)
			}, []);
			const p = r.useMemo(() => m && u ? u.offsetHeight : 0, [u, m]);
			return r.createElement(i.SideBar, {
				width: 224,
				header: e && r.createElement(s.Header, Object.assign({}, e)),
				footer: n && r.createElement(o.Footer, Object.assign({}, n)),
				paddingBottom: p,
				contentTitle: a
			}, t && r.createElement(c.Content, Object.assign({}, t)))
		}
	},
	769: function (e, t, n) {
		"use strict";
		var a = this && this.__importStar || function (e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e)
				for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.default = e, t
		};
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		const r = a(n(0)),
			i = n(12);
		t.ResourceLogo = ({
			imageUrl: e,
			imageAlt: t,
			description: n,
			name: a,
			connectionUrl: l
		}) => {
			const s = l ? {
				href: l,
				as: "a"
			} : {};
			return r.createElement(i.Join, {
				orientation: "vertical",
				spacing: "small"
			}, e && r.createElement(i.Box, Object.assign({
				width: "100%"
			}, s), r.createElement(i.Image, {
				height: "40px",
				alt: t,
				src: e
			})), r.createElement(i.Join, {
				orientation: "vertical",
				spacing: "x-small"
			}, r.createElement(i.Text, {
				css: {
					wordBreak: "break-word"
				},
				fontSize: "x-small"
			}, a), r.createElement(i.LimitTextLength, {
				maxLength: 300,
				text: n
			}, e => r.createElement(i.Text, {
				css: {
					wordBreak: "break-word"
				},
				fontSize: "xxx-small",
				color: "gray.6"
			}, e))))
		}
	},
	770: function (e, t, n) {
		"use strict";
		var a = this && this.__rest || function (e, t) {
				var n = {};
				for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (a = Object.getOwnPropertySymbols(e); r < a.length; r++) t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]])
				}
				return n
			},
			r = this && this.__importDefault || function (e) {
				return e && e.__esModule ? e : {
					default: e
				}
			};
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		const i = r(n(1712)),
			l = n(15),
			s = n(144);
		t.initialState = {
			activeStep: -1,
			steps: {
				step0: {
					name: "Select Column",
					column: void 0,
					canProceed: e => !!e.steps.step0.column
				},
				step1: {
					name: "Exclude",
					allSamples: [],
					warningThreshold: 0,
					errorThreshold: 0,
					samplesMaxLength: 0,
					canProceed: e => {
						const {
							allSamples: t,
							errorThreshold: n,
							warningThreshold: a
						} = e.steps.step1, {
							selectedSamples: r
						} = e.shared, i = s.checkSampleCount({
							samples: t,
							errorThreshold: n,
							warningThreshold: a
						});
						return r.length >= n && "error" !== i
					}
				},
				step2: {
					name: "Rules and Delimiters",
					splitData: [],
					constraints: {},
					loading: !0,
					isDirty: !1,
					canProceed: e => !!e.shared.rules.length
				},
				step3: {
					name: "Set Column Names",
					validationErrors: [],
					canProceed: e => {
						const {
							validationErrors: t
						} = e.steps.step3, {
							splitColumns: n
						} = e.shared;
						return !t.length && n.every(e => e.header.trim().length)
					}
				},
				step4: {
					name: "Receive errors",
					emailForError: !0,
					continueOnError: !0,
					canProceed: () => !0
				},
				step5: {
					name: "Receive warnings",
					emailForWarning: !0,
					raiseForWarning: !0,
					canProceed: () => !0
				},
				step6: {
					name: "Summary",
					canProceed: () => !1
				}
			},
			shared: {
				column: {},
				allColumns: [],
				selectedSamples: [],
				rules: [],
				delimiters: [],
				constraints: {},
				splitColumns: [],
				mapping: {}
			}
		};
		const o = (e, n) => ({
			step0: n <= 0 ? t.initialState.steps.step0 : e.step0,
			step1: n <= 1 ? t.initialState.steps.step1 : e.step1,
			step2: n <= 2 ? t.initialState.steps.step2 : e.step2,
			step3: n <= 3 ? t.initialState.steps.step3 : e.step3,
			step4: n <= 4 ? t.initialState.steps.step4 : e.step4,
			step5: n <= 5 ? t.initialState.steps.step5 : e.step5,
			step6: n <= 6 ? t.initialState.steps.step6 : e.step6
		});
		t.convertConstraintsToObject = e => e.reduce((e, t) => Object.assign(Object.assign({}, e), {
			[t.id]: {
				excluded: t.excluded,
				extra_context: t.value_list || null
			}
		}), {}), t.canProceed = e => {
			switch (e.activeStep) {
				case 0:
					return e.steps.step0.canProceed(e);
				case 1:
					return e.steps.step1.canProceed(e);
				case 2:
					return e.steps.step2.canProceed(e);
				case 3:
					return e.steps.step3.canProceed(e);
				case 4:
					return e.steps.step4.canProceed(e);
				case 5:
					return e.steps.step5.canProceed(e);
				case 6:
					return e.steps.step6.canProceed(e);
				default:
					return !1
			}
		}, t.reducer = (e, n) => i.default(e, e => {
			var r;
			switch (n.type) {
				case "activeStep/next":
					e.activeStep += 1;
					break;
				case "activeStep/previous":
					e.activeStep -= 1, e.steps = o(e.steps, e.activeStep - 1);
					break;
				case "activeStep/set":
					e.activeStep = n.payload, e.steps = o(e.steps, n.payload);
					break;
				case "shared/columnsReceived":
					e.shared.allColumns = n.payload;
					break;
				case "step0/selectColumn":
					e.steps.step0.column = n.payload, e.shared.column = n.payload;
					break;
				case "step1/samplesReceived":
					e.steps.step1.allSamples = n.payload.samples, e.steps.step1.warningThreshold = n.payload.warning_threshold, e.steps.step1.errorThreshold = n.payload.error_threshold, e.steps.step1.samplesMaxLength = n.payload.samples_max_length, e.shared.selectedSamples = n.payload.samples;
					break;
				case "step1/toggleSample":
					e.shared.selectedSamples = e.shared.selectedSamples.includes(n.payload) ? e.shared.selectedSamples.filter(e => e !== n.payload) : [...e.shared.selectedSamples, n.payload];
					break;
				case "step2/fetchingConstraintsStarted":
					e.steps.step2.loading = !0;
					break;
				case "step2/constraintsReceived":
					{
						const r = l.groupBy(n.payload.constraints, ({
								type: e
							}) => e),
							{
								delimiter: i
							} = r,
							s = a(r, ["delimiter"]);e.steps.step2.loading = !1,
						e.steps.step2.isDirty = !1,
						e.steps.step2.splitData = n.payload.splitData,
						e.shared.splitColumns = n.payload.splitData[0].map((e, t) => ({
							index: t,
							header: "snc_column_" + (t + 1),
							exampleValue: e
						})),
						e.shared.delimiters = null != i ? i : [],
						e.shared.rules = l.flatten(Object.values(s)),
						e.shared.mapping = Object.assign({}, e.shared.splitColumns.map(({
							header: t,
							index: n
						}) => ({
							name: t,
							notify: e.shared.rules.some(e => !e.excluded && n === e.index)
						}))),
						e.shared.constraints = t.convertConstraintsToObject(e.shared.delimiters);
						break
					}
				case "step2/toggleConstraint":
					{
						const a = n.payload;
						("delimiter" === a.type ? e.shared.delimiters : e.shared.rules).forEach(e => {
							e.id === n.payload.id && (e.excluded = !e.excluded)
						}),
						"delimiter" === a.type ? e.steps.step2.constraints = t.convertConstraintsToObject(e.shared.delimiters) : e.steps.step2.isDirty = !0,
						e.shared.constraints = Object.assign(Object.assign({}, e.shared.constraints), {
							[n.payload.id]: Object.assign(Object.assign({}, e.shared.constraints[n.payload.id]), {
								excluded: !n.payload.excluded
							})
						});
						break
					}
				case "step2/ruleValuesChanged":
					{
						const t = e.shared.rules.findIndex(e => e.id === n.payload.constraintId);e.shared.rules[t] = Object.assign(Object.assign({}, e.shared.rules[t]), {
							value_list: n.payload.values
						});
						const a = e.shared.constraints[n.payload.constraintId];e.shared.constraints = Object.assign(Object.assign({}, e.shared.constraints), {
							[n.payload.constraintId]: Object.assign(Object.assign({}, a), {
								excluded: null !== (r = null == a ? void 0 : a.excluded) && void 0 !== r && r,
								extra_context: n.payload.values
							})
						}),
						e.steps.step2.isDirty = !0;
						break
					}
				case "step3/columnNameChanged":
					e.steps.step3.validationErrors = n.payload.validationErrors.sort((e, t) => e.priority - t.priority), e.shared.splitColumns = n.payload.splitColumns, e.shared.mapping = Object.assign({}, n.payload.splitColumns.map(({
						header: t,
						index: n
					}) => ({
						name: t,
						notify: e.shared.rules.some(e => !e.excluded && n === e.index)
					})));
					break;
				case "step4/emailChecked":
					e.steps.step4.emailForError = n.payload;
					break;
				case "step4/continueOnErrorChecked":
					e.steps.step4.continueOnError = n.payload;
					break;
				case "step5/toggleRule":
					e.shared.mapping[n.payload].notify = !e.shared.mapping[n.payload].notify;
					break;
				case "step5/toggleWarning":
					e.steps.step5[n.payload] = !e.steps.step5[n.payload]
			}
		})
	},
	771: function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		const a = n(0);
		t.useDebounce = (e, t) => {
			const [n, r] = a.useState(e);
			return a.useEffect(() => {
				const n = setTimeout(() => {
					r(e)
				}, t);
				return () => {
					clearTimeout(n)
				}
			}, [e, t]), n
		}
	},
	772: function (e, t, n) {
		"use strict";
		var a = this && this.__importStar || function (e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e)
				for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.default = e, t
		};
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		const r = a(n(0)),
			i = n(12),
			l = n(15),
			s = n(188),
			o = {
				metric: "brand",
				dimension: "blue"
			},
			c = ({
				name: e,
				usage: t,
				targetTitle: n
			}) => {
				var a;
				const l = null !== (a = o[t]) && void 0 !== a ? a : "gray",
					s = r.createElement(i.Badge, {
						backgroundColor: l + ".1",
						color: l + ".7"
					}, e);
				return n ? r.createElement(i.Tooltip, {
					title: n
				}, s) : s
			};
		t.HeadCell = ({
			column: e,
			orderIndicator: t = 0,
			index: n,
			showLink: a,
			width: o
		}) => {
			var u;
			const d = i.useTheme(),
				m = {
					"&:hover": {
						color: l.get(d, "colors.brand.5")
					}
				},
				p = String(null !== (u = e.Header) && void 0 !== u ? u : ""),
				g = o ? {
					wordBreak: "break-word"
				} : void 0;
			return r.createElement(i.BorderBox, Object.assign({}, e.getHeaderProps(e.getSortByToggleProps()), {
				title: "",
				as: o ? "div" : "th",
				onClick: () => e.toggleSortBy(void 0, !0),
				backgroundColor: "gray.0",
				borderColor: "brand.5",
				borderWidth: 0,
				borderBottomWidth: 1,
				height: o ? "100%" : "1px",
				css: {
					"&:hover": {
						backgroundColor: l.get(d, "colors.gray.2")
					}
				},
				minWidth: o,
				maxWidth: o
			}), r.createElement(s.HoverSensor, null, ({
				isHover: l
			}) => r.createElement(i.BorderBox, {
				borderColor: "gray.2",
				borderWidth: 0,
				borderLeftWidth: 0 === n ? 0 : 1,
				minHeight: 40,
				height: "100%",
				padding: "x-small"
			}, r.createElement(i.StartEnd, {
				direction: "column",
				height: "100%"
			}, r.createElement(i.StartEnd, {
				width: "100%",
				alignItems: "center",
				marginBottom: e.targetColumn ? "xx-small" : 0
			}, r.createElement(i.Tooltip, {
				title: "Toggle sorting"
			}, r.createElement(i.Join, {
				spacing: "xx-small"
			}, r.createElement(i.Text, {
				fontWeight: "normal",
				css: g
			}, p), r.createElement(i.Flex, null, r.createElement(i.Icon, {
				name: e.isSortedDesc ? "arrow-down" : "arrow-up",
				color: l ? "brand.5" : "gray.9",
				opacity: l || e.isSorted ? 1 : 0,
				size: "small"
			}), r.createElement(i.Text, {
				fontWeight: "normal",
				opacity: t > 0 ? 1 : 0
			}, t)))), a && r.createElement(i.Link, {
				href: "column/?c=" + encodeURI(p),
				opacity: l ? 1 : 0,
				alignSelf: "flex-start"
			}, r.createElement(i.Icon, {
				name: "search",
				color: "gray.9",
				size: "medium",
				css: m
			}))), e.targetColumn && r.createElement(c, Object.assign({}, e.targetColumn, {
				targetTitle: e.targetTitle
			}))))))
		}
	},
	773: function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		const a = n(15);
		t.getGroupsWithColspans = e => e.reduce((e, t) => {
			const n = a.last(e);
			return t.length > 0 || !n ? [...e, {
				label: t,
				colSpan: 1
			}] : (n.colSpan += 1, e)
		}, []), t.geCellWidth = (e, t) => {
			var n, a;
			return Math.max(null !== (n = null == e ? void 0 : e.offsetWidth) && void 0 !== n ? n : 0, null !== (a = null == t ? void 0 : t.offsetWidth) && void 0 !== a ? a : 0) + "px"
		}, t.getRowHeight = (e, t, n = {}) => {
			const {
				verticalPadding: a = 16,
				lineHeight: r = 16,
				minHeight: i = 40,
				averageCharWidth: l = 6
			} = n, s = e.reduce((e, n) => {
				const i = n.length * l,
					s = Math.ceil(i / t) * r + a;
				return Math.max(e, s)
			}, i);
			return s > i ? s + r : i
		};
		const r = /^\[(.+)\]\((https?:\/\/.+(png|jpe?g|gif))\)$/,
			i = /^https?:\/\/.+(png|jpe?g|gif)$/;
		t.containsImage = e => {
			const t = e.match(r);
			return t ? {
				full: e,
				text: t[1],
				url: t[2]
			} : e.match(i) ? {
				full: e,
				text: e,
				url: e
			} : null
		}
	},
	774: function (e, t, n) {
		"use strict";
		var a = this && this.__importStar || function (e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e)
				for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.default = e, t
		};
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		const r = a(n(0)),
			i = n(56);
		class l extends HTMLElement {
			constructor() {
				super(), this.hiddenInputCache = null, this.events = ["change"], this.handleValueChange = this.handleValueChange.bind(this)
			}
			get name() {
				var e;
				return null !== (e = this.getAttribute("name")) && void 0 !== e ? e : void 0
			}
			set name(e) {
				this.setAttribute("name", null != e ? e : "")
			}
			get dataId() {
				var e;
				return null !== (e = this.getAttribute("data-id")) && void 0 !== e ? e : void 0
			}
			get component() {
				return r.createElement("div", {
					id: this.dataId
				})
			}
			get mountPoint() {
				if (this.firstChild) return this.firstChild;
				const e = document.createElement("div");
				return this.appendChild(e), e
			}
			get hiddenInput() {
				if (!this.hiddenInputCache) {
					const e = this.childNodes.item(1);
					this.hiddenInputCache = null != e ? e : this.createHiddenInput()
				}
				return this.hiddenInputCache
			}
			createHiddenInput() {
				const e = document.createElement("input");
				return e.hidden = !0, this.name && (e.name = this.name), this.dataId && (e.id = this.dataId), e.className = this.className, this.appendChild(e), e
			}
			callChangeEvents() {
				const e = this.hiddenInput;
				this.events.forEach(t => {
					if ("click" === t) return void e.click();
					const n = new Event(t, {
						bubbles: !0,
						cancelable: !0
					});
					e.dispatchEvent(n)
				})
			}
			handleValueChange(e) {
				this.hiddenInput.value = String(e), this.callChangeEvents()
			}
			swapIdToDataId() {
				this.id && (this.setAttribute("data-id", this.id), this.removeAttribute("id"))
			}
			connectedCallback() {
				this.swapIdToDataId();
				const e = this.mountPoint;
				this.createHiddenInput(), this.removeAttribute("class"), i.render({
					component: this.component,
					container: e
				})
			}
		}
		t.AdverityFormElement = l
	},
	796: function (e, t, n) {
		n(200), e.exports = n(797)
	},
	797: function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), n(798), n(1020), n(1023), n(1024), n(1025), n(1026);
		const a = n(1027),
			r = n(1112),
			i = n(1532),
			l = n(1537);
		n(1698), n(1699), n(1710), n(1731), n(1734), n(1744), n(1745), n(1747), n(1748), n(1749), n(1750), document.addEventListener("DOMContentLoaded", () => {
			r.renderTransformationEditor(), l.renderRouter(), i.renderScheduleTimestampPreview(), a.renderColumnDetails()
		})
	},
	84: function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.contentWidth = 600, t.textWidth = 480
	},
	96: function (e, t, n) {
		"use strict";
		var a = this && this.__importStar || function (e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e)
				for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.default = e, t
		};
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		const r = a(n(0)),
			i = n(12);
		t.LoadingIndicator = ({
			size: e = "x-large",
			paddingTop: t = "x-large"
		}) => r.createElement(i.Flex, {
			alignItems: "center",
			flexDirection: "column",
			paddingTop: t
		}, r.createElement(i.CircularProgress, {
			size: e,
			color: "brand.5"
		}))
	}
});
//# sourceMappingURL=app-cf48bd338c709e9b41bf.js.map