import $ = require("jquery");

export = class StyleSheets {

    public static addStyleSheetRules(rules, styleId) {

        let styleSheet = StyleSheets.getStyleSheet(styleId);

        $.each(rules, (selector, styles) => {

            let propStr = '';

            $.each(styles, (property, style) => {

                propStr += `${String(property)}: ${style};\n`;

            });

            styleSheet.insertRule(`${String(selector)} {${propStr}}`, styleSheet.cssRules.length);

        });

        return styleSheet;

    }

    public static getStyleElement(styleId = 'gt4u_style') {

        return document.getElementById(styleId) || StyleSheets.createStyleElement(styleId);

    }

    public static createStyleElement(styleId) {

        let styleElement = document.createElement('style');

        styleElement.setAttribute('id', styleId);

        document.getElementsByTagName("head")[0].appendChild(styleElement);

        return $(StyleSheets.getStyleElement(styleId))[0];

    }

    public static getStyleSheet(styleId) {

        return StyleSheets.getStyleElement(styleId).sheet;

    }

    public static enableStyleSheet(styleId) {

        StyleSheets.getStyleSheet(styleId).disabled = false;

    }

    public static disableStyleSheet(styleId) {

        StyleSheets.getStyleSheet(styleId).disabled = true;

    }

}