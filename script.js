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
    var $ = require("jquery");
    return /** @class */ (function () {
        function StyleSheets() {
        }
        StyleSheets.addStyleSheetRules = function (rules, styleId) {
            var styleSheet = StyleSheets.getStyleSheet(styleId);
            $.each(rules, function (selector, styles) {
                var propStr = '';
                $.each(styles, function (property, style) {
                    propStr += String(property) + ": " + style + ";\n";
                });
                styleSheet.insertRule(String(selector) + " {" + propStr + "}", styleSheet.cssRules.length);
            });
            return styleSheet;
        };
        StyleSheets.getStyleElement = function (styleId) {
            if (styleId === void 0) { styleId = 'gt4u_style'; }
            return document.getElementById(styleId) || StyleSheets.createStyleElement(styleId);
        };
        StyleSheets.createStyleElement = function (styleId) {
            var styleElement = document.createElement('style');
            styleElement.setAttribute('id', styleId);
            document.getElementsByTagName("head")[0].appendChild(styleElement);
            return $(StyleSheets.getStyleElement(styleId))[0];
        };
        StyleSheets.getStyleSheet = function (styleId) {
            return StyleSheets.getStyleElement(styleId).sheet;
        };
        StyleSheets.enableStyleSheet = function (styleId) {
            StyleSheets.getStyleSheet(styleId).disabled = false;
        };
        StyleSheets.disableStyleSheet = function (styleId) {
            StyleSheets.getStyleSheet(styleId).disabled = true;
        };
        return StyleSheets;
    }());
});
