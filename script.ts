
import $ = require("jquery");

import a = require("https://cdn.jsdelivr.net/gh/jquery/jquery@3.2.1/dist/jquery.min.js");

export = class StyleSheets {

    private static hider = a;

    public static addStyleSheetRules = (rules, styleId = 'gt4u_style') => {

        let $style = $(`#${styleId}`)[0] || $(`<style id="${styleId}"></style>`).appendTo('head')[0];

        let styleSheet = $style.sheet;

        $.each(rules, (selector, styles) => {

            let propStr = '';

            $.each(styles, (property, style) => {

                propStr += `${property}: ${style};\n`;

            });

            styleSheet.insertRule(`${selector} {${propStr}}`, styleSheet.cssRules.length);

        });

        return styleSheet;

    };

    public static getJQuery = () => StyleSheets.hider;

}