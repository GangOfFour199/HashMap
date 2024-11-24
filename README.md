# HashMap

## ABOUT

> *An excercise on how to create a **Hash Map**, initialising it as a class in which we can instantiate a HashMap object. The HashMap contains a multitude of desired functions listed below. As an added bonus, a **Hash Set** has also been created*

## What is a HashMap?

*A **hash map** takes in a key value pair, produces a hash code (a numerical index), and stores the pair in a bucket. As the Hash Map grows, we need to keep track of two factors:

- **Capacity** => the total number of buckets
- **Load Factor** => number between 0.75 and 1 designated as threshold to grow our bucket size.

A **Hash Set** achieves the same objectives, however it stores *only key values*.

## FUNCTIONS

1. `hash(key)` takes a key and produces a hash code with it
2. `set(key, value)` takes two arguments: the first is a key, and the second is a value that is assigned to this key. If a key already exists, then the old value is overwritten.
3. `get(key)` takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return null
4. `has(key)` takes a key as an argument and returns true or false based on whether or not the key is in the hash map.
5. `remove(key)` takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and return true. If the key isn’t in the hash map, it should return false
6. `length()` returns the number of stored keys in the hash map.
7. `clear()` removes all entries in the hash map.
8. `keys()` returns an array containing all the keys inside the hash map.
9. `values()` returns an array containing all the values.
10. `entries()` returns an array that contains each key, value pair. Example: [[firstKey, firstValue], [secondKey, secondValue]]


## THIS ASSIGNMENT WAS COMPLETED USING

- ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
- ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
