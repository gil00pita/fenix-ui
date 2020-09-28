import {
  amber,
  blue,
  brand,
  brown,
  common,
  cyan,
  deepOrange,
  deepPurple,
  gold,
  green,
  grey,
  indigo,
  lightBlue,
  lightGreen,
  lime,
  lynch,
  orange,
  pink,
  purple,
  red,
  social,
  teal,
  yellow
} from './Palette';



const color = {
  amber,
  blue,
  brand,
  brown,
  common,
  cyan,
  deepOrange,
  deepPurple,
  gold,
  green,
  grey,
  indigo,
  lightBlue,
  lightGreen,
  lime,
  lynch,
  orange,
  pink,
  purple,
  red,
  social,
  teal,
  yellow,
};

export default color;

/**
 * Converts the Name with dash to camel case
 * @param {number} value Why? The global isNaN coerces non-numbers to numbers,
 * returning true for anything that coerces to NaN. If this behavior is desired,
 * make it explicit.
 * @return {string} str HEX Colour
 */
export const isNumber = value => !Number.isNaN(parseFloat(value));

/**
 * Converts the Name with dash to camel case
 * @param {string} str Color with Dash like Deep-Orange
 * @param {string} variation Color Variation Ex.: 1, 2, 3, warning...
 * @return {string} str HEX Colour
 */
export const getColor = (str, variation) => {
  let finalVariation;
  let camelStr;
  if (str) {
    if (!variation || undefined === variation || '' === variation) {
      finalVariation = 6;
    } else if (isNumber(variation)) {
      finalVariation = variation;
    } else if ('A' === variation.substring(0, 1)) {
      finalVariation = variation;
    } else {
      finalVariation = variation;
    }
    camelStr = color[str];
  }
  return camelStr[finalVariation];
};

