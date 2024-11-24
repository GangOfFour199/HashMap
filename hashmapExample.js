export class hashMap {
  constructor(startingCapacity = 16, targetLoadFactor = 0.75) {
    this.capacity = startingCapacity;
    this.loadFactor = targetLoadFactor;
    this.buckets = Array(this.capacity)
      .fill(null)
      .map(() => []); // fill array with empty buckets, values set to null
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i += 1) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
      // adding % operator on each iteration ensures our output never becomes larger than buckets' length
    }

    return hashCode;
  }
  resize() {
    const oldArray = this.buckets; // assign as old arr to be set to a new arr
    this.capacity *= 2;
    this.buckets = new Array(this.capacity).fill(null); // create new arr double the size

    oldArray.forEach((bucket) => {
      let currentBucket = bucket;
      while (currentBucket != null) {
        // whilst buckets are not empty
        this.set(currentBucket.key, currentBucket.value); // rehashed, set the key value pair of this current bucket
        currentBucket = currentBucket.next; // move to next
      }
    });
  }
  set(key, value) {
    // set(key, value) takes two arguments: the first is a key, and the second is a value that is assigned to this key. If a key already exists, then the old value is overwritten
    const hash = this.hash(key); // hash the input
    const index = this.hash(key) % this.capacity; // hashcode % 16
    const bucket = this.buckets[index]; // located the bucket with correspoding index for entry
    for (let entry of bucket) {
      if (entry.key === key) {
        // if key is present already
        entry.value = value; // override its value
        return;
      }
    }
    bucket.push({ key, value }); // add key value pair to bucket array

    const currentLoadFactor = this.length / this.capacity; // get current load of hash map
    if (currentLoadFactor >= this.loadFactor) {
      // if exceeds our load factor of 0.75
      this.resize(); // double size of array
    }
  }
  get(key) {
    // get(key) takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return null.
    const hash = this.hash(key);
    const index = this.hash(key) % this.capacity;
    const bucket = this.buckets[index];
    for (let entry of bucket) {
      if (entry.key === key) {
        // if key is present already
        return entry.value;
      }
    }
    return null;
  }
  has(key) {
    // has(key) takes a key as an argument and returns true or false based on whether or not the key is in the hash map.
    const hash = this.hash(key);
    const index = this.hash(key) % this.capacity;
    const bucket = this.buckets[index];
    for (let entry of bucket) {
      if (entry.key === key) {
        // if key is present already
        return true;
      }
    }
    return false;
  }
  remove(key) {
    // remove(key) takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and return true. If the key isn’t in the hash map, it should return false.
    if (this.has(key)) {
      const hash = this.hash(key);
      const index = this.hash(key) % this.capacity;
      let bucket = this.buckets[index];
      bucket = bucket.filter((entry) => {
        // filter out all entries' keys which don't match the desired key and computes into new array
        return entry.key != key;
      });
      this.buckets[index] = bucket;
    } else {
      return false;
    }
  }
  length() {
    return this.buckets.flat().length;
    // The flat() method removes empty slots if the array being flattened is sparse.
  }
  clear() {
    this.buckets = Array(this.capacity)
      .fill(null)
      .map(() => []); // resets with empty buckets, values set to null
  }
  keys() {
    // keys() returns an array containing all the keys inside the hash map.
    return this.buckets.flat().map((entry) => entry.key);
  }
  values() {
    // values() returns an array containing all the values inside the hash map.
    return this.buckets.flat().map((entry) => entry.value);
  }
  entries() {
    // entries() returns an array that contains each key, value pair. Example: [[firstKey, firstValue], [secondKey, secondValue]]
    return this.buckets.flat().map((entry) => [entry.key, entry.value]);
  }
}
