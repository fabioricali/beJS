/**
 * @module be
 * @description DOM checks.
 */

const Interface = require('../interface');
const Types = require('./types');
let DOM = {};

/**
 * Check if is a valid DOM element
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param element {object} element object
 * @returns {boolean}
 * @example
 * be.domElement(document.getElementById('test')) // true
 */
DOM.domElement = (element) => {
    return (
        typeof HTMLElement === 'object' ? element instanceof HTMLElement : //DOM2
            element &&  typeof element === 'object' && element.nodeType === 1 && typeof element.nodeName === 'string'
    );
};

/**
 * Check if element is a specific tag
 *
 * **Interfaces**: `not`
 *
 * @param element element {object} element object
 * @param tag {string} tag name
 * @returns {boolean}
 * @example
 * be.domElementTag(document.getElementsByTagName('body')[0], 'body') // true
 */
DOM.domElementTag = (element, tag) => {
    return DOM.domElement(element) &&
        Types.string(tag) && element.tagName.toLowerCase() === tag.toLowerCase();
};

DOM.domElementTag.multiple = false;

DOM = Interface.create(DOM);

module.exports = DOM;
