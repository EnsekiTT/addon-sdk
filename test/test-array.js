/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
'use strict'

const array = require("sdk/util/array");

exports.testHas = function(test) {
  var testAry = [1, 2, 3];
  test.assertEqual(array.has([1, 2, 3], 1), true);
  test.assertEqual(testAry.length, 3);
  test.assertEqual(testAry[0], 1);
  test.assertEqual(testAry[1], 2);
  test.assertEqual(testAry[2], 3);
  test.assertEqual(array.has(testAry, 2), true);
  test.assertEqual(array.has(testAry, 3), true);
  test.assertEqual(array.has(testAry, 4), false);
  test.assertEqual(array.has(testAry, "1"), false);
};

exports.testAdd = function(test) {
  var testAry = [1];
  test.assertEqual(array.add(testAry, 1), false);
  test.assertEqual(testAry.length, 1);
  test.assertEqual(testAry[0], 1);
  test.assertEqual(array.add(testAry, 2), true);
  test.assertEqual(testAry.length, 2);
  test.assertEqual(testAry[0], 1);
  test.assertEqual(testAry[1], 2);
};

exports.testRemove = function(test) {
  var testAry = [1, 2];
  test.assertEqual(array.remove(testAry, 3), false);
  test.assertEqual(testAry.length, 2);
  test.assertEqual(testAry[0], 1);
  test.assertEqual(testAry[1], 2);
  test.assertEqual(array.remove(testAry, 2), true);
  test.assertEqual(testAry.length, 1);
  test.assertEqual(testAry[0], 1);
};

exports.testFlatten = function(test) {
  test.assertEqual(array.flatten([1, 2, 3]).length, 3);
  test.assertEqual(array.flatten([1, [2, 3]]).length, 3);
  test.assertEqual(array.flatten([1, [2, [3]]]).length, 3);
  test.assertEqual(array.flatten([[1], [[2, [3]]]]).length, 3);
};
