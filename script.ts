import $ = require("jquery");

class StyleSheets {

    public addStyleSheetRules = (rules, styleId = 'gt4u_style') => {

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

    public constructor() {
        return this;
    }

}

export = StyleSheets;