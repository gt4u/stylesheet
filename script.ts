import $ = require("jquery");

export = class StyleSheets {

    public static addStyleSheetRules(rules, styleId = null) {

        let styleSheet = StyleSheets.getStyleSheet(styleId);

        $.each(rules, (selector, styles) => {

            let propStr = '';

            $.each(styles, (property, style) => {

                propStr += `${String(property)}: ${style};\n`;

            });

            styleSheet.insertRule(`${String(selector)} {${propStr}}`, styleSheet.cssRules.length);

        });

        return styleSheet;

    };

    private static getStyleElement(styleId = 'gt4u_style') {

        let styleElement = document.createElement('style');

        styleElement.setAttribute('id', styleId);

        document.getElementsByTagName("head")[0].appendChild(styleElement);

        return styleElement;

    }

    private static getStyleSheet(styleId = null) {

        return $(StyleSheets.getStyleElement(styleId)).sheet;

    }

    public static enableStyleSheet(styleId = null) {

        StyleSheets.getStyleSheet(styleId).disabled = false;

    }

    public static disableStyleSheet(styleId = null) {

        StyleSheets.getStyleSheet(styleId).disabled = true;

    }

}