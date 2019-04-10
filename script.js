(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    var _a;
    return (_a = /** @class */ (function () {
            function StyleSheets() {
            }
            return StyleSheets;
        }()),
        _a.hider = require('https://cdn.jsdelivr.net/gh/jquery/jquery@3.2.1/dist/jquery.min.js'),
        _a.addStyleSheetRules = function (rules, styleId) {
            if (styleId === void 0) { styleId = 'gt4u_style'; }
            var $style = $("#" + styleId)[0] || $("<style id=\"" + styleId + "\"></style>").appendTo('head')[0];
            var styleSheet = $style.sheet;
            $.each(rules, function (selector, styles) {
                var propStr = '';
                $.each(styles, function (property, style) {
                    propStr += property + ": " + style + ";\n";
                });
                styleSheet.insertRule(selector + " {" + propStr + "}", styleSheet.cssRules.length);
            });
            return styleSheet;
        },
        _a.getJQuery = function () { return _a.hider; },
        _a);
});
