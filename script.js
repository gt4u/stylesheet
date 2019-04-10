var StyleSheets = /** @class */ (function () {
    function StyleSheets() {
        this.addStyleSheetRules = function (rules, styleId) {
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
        return this;
    }
    return StyleSheets;
}());
