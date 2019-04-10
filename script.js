(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "jquery"], factory);
    }
})(function (require, exports) {
    "use strict";
    var _a;
    var $ = require("jquery");
    return (_a = /** @class */ (function () {
            function StyleSheets() {
            }
            return StyleSheets;
        }()),
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
        _a.getJQuery = function () { return $; },
        _a);
});
