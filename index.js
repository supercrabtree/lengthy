'use strict';

module.exports = function Lengthy(length) {
  return Array.apply(null, Array(length)).map(function (value, key) {
    return key;
  });
};
