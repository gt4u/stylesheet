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
    Object.defineProperty(exports, "__esModule", { value: true });
    var StyleSheets = /** @class */ (function () {
        function StyleSheets() {
        }
        StyleSheets.addStyleSheetRules = function (rules, styleId) {
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
        };
        return StyleSheets;
    }());
    exports.StyleSheets = StyleSheets;
});
