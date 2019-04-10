import $ = require("jquery");

export = class StyleSheets {

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

    public static getJQuery = () => $;

}