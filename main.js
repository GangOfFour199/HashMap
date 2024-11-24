import { hashMap } from "./hashmapExample.js"

const test = new hashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

test.set("moon", "silver");
console.log(test.buckets); /* [object Array] (16)
[
  // [object Array] (0)
  [], // [object Array] (2)
  [
    // [object Object]
    {
      key: "elephant",
      value: "gray",
    }, // [object Object]
    {
      key: "moon",
      value: "silver",
    },
  ], // [object Array] (0)
  [], // [object Array] (1)
  [
    // [object Object]
    {
      key: "carrot",
      value: "orange",
    },
  ], // [object Array] (1)
  [
    // [object Object]
    {
      key: "frog",
      value: "green",
    },
  ], // [object Array] (1)
  [
    // [object Object]
    {
      key: "banana",
      value: "yellow",
    },
  ], // [object Array] (0)
  [], // [object Array] (0)
  [], // [object Array] (0)
  [], // [object Array] (0)
  [], // [object Array] (1)
  [
    // [object Object]
    {
      key: "apple",
      value: "red",
    },
  ], // [object Array] (2)
  [
    // [object Object]
    {
      key: "grape",
      value: "purple",
    }, // [object Object]
    {
      key: "hat",
      value: "black",
    },
  ], // [object Array] (2)
  [
    // [object Object]
    {
      key: "dog",
      value: "brown",
    }, // [object Object]
    {
      key: "lion",
      value: "golden",
    },
  ], // [object Array] (1)
  [
    // [object Object]
    {
      key: "ice cream",
      value: "white",
    },
  ], // [object Array] (1)
  [
    // [object Object]
    {
      key: "jacket",
      value: "blue",
    },
  ], // [object Array] (1)
  [
    // [object Object]
    {
      key: "kite",
      value: "pink",
    },
  ],
]; */

console.log(test.get("carrot")); // orange
test.remove("grape");
test.set("hat", "red");
test.set("car", "yellow");
console.log(test.has("scarf")); // false

console.log(test.values()); // ["gray","silver","orange","green","yellow","yellow","red","red","brown","golden","white","blue","pink"]
console.log(test.keys()); // ["elephant","moon","carrot","frog","car","banana","apple","hat","dog","lion","ice cream","jacket","kite"]

console.log(test.entries()); /* [// [object Array] (2)
["elephant","gray"],// [object Array] (2)
["moon","silver"],// [object Array] (2)
["carrot","orange"],// [object Array] (2)
["frog","green"],// [object Array] (2)
["car","yellow"],// [object Array] (2)
["banana","yellow"],// [object Array] (2)
["apple","red"],// [object Array] (2)
["hat","red"],// [object Array] (2)
["dog","brown"],// [object Array] (2)
["lion","golden"],// [object Array] (2)
["ice cream","white"],// [object Array] (2)
["jacket","blue"],// [object Array] (2)
["kite","pink"]] */

console.log(test.length()); // 13
test.clear();
console.log(test.buckets); // // [object Array] (16) [[]. [], []] etc.
