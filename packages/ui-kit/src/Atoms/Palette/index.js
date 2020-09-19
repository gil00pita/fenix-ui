import amber from './amber';
import blue from './blue';
import brand from './brand';
import brown from './brown';
import common from './common';
import cyan from './cyan';
import deepOrange from './deepOrange';
import deepPurple from './deepPurple';
import gold from './gold';
import green from './green';
import grey from './grey';
import indigo from './indigo';
import lightBlue from './lightBlue';
import lightGreen from './lightGreen';
import lime from './lime';
import lynch from './lynch';
import orange from './orange';
import pink from './pink';
import purple from './purple';
import red from './red';
import social from './social';
import teal from './teal';
import yellow from './yellow';

export { default as amber } from './amber';
export { default as blue } from './blue';
export { default as brand } from './brand';
export { default as brown } from './brown';
export { default as common } from './common';
export { default as cyan } from './cyan';
export { default as deepOrange } from './deepOrange';
export { default as deepPurple } from './deepPurple';
export { default as gold } from './gold';
export { default as green } from './green';
export { default as grey } from './grey';
export { default as indigo } from './indigo';
export { default as lightBlue } from './lightBlue';
export { default as lightGreen } from './lightGreen';
export { default as lime } from './lime';
export { default as lynch } from './lynch';
export { default as orange } from './orange';
export { default as pink } from './pink';
export { default as purple } from './purple';
export { default as red } from './red';
export { default as social } from './social';
export { default as teal } from './teal';
export { default as yellow } from './yellow';

const colors = {
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

export default colors;

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
    camelStr = colors[str];
  }
  return camelStr[finalVariation];
};

