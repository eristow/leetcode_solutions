// brute force (not accepted)
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(s, words) {
  let numValid = 0;
  
  for (let word of words) {
    let j = 0;
    
    for (let i = 0; i < s.length; i++) {
      if (s[i] === word[j]) {
        j++;
      }
    }
    
    console.log(j);
    if (j === word.length) {
      numValid++;
    }
  }
  
  console.log(numValid);
  return numValid;
};


// index + binary search (accepted) (not working)
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
const constructMap = function(map, s) {
  for (let i in s) {
    const currentVals = map.get(s[i]);
    
    if (!currentVals) {
      map.set(s[i], [i]);
    } else {
      currentVals.push(i);
      map.set(s[i], currentVals)
    }
  }
};

const binarySearch = function(arr, val, start, end) {
  if (start > end) {
    return undefined;
  }
  
  let mid = Math.floor((start + end) / 2);
  console.log(`start: ${start} | end: ${end} | mid: ${mid}`);
  
  if (arr[mid] === val) {
    if (mid == arr.length - 1) {
      return arr[mid];
    }
    return arr[mid + 1];
  }
  
  if (arr[mid] > val) {
    // return binarySearch(arr, val, start, mid - 1);
    return arr[mid];
  } else {
    return binarySearch(arr, val, mid + 1, end);
  }
};

const numMatchingSubseq = function(s, words) {
  let numValid = 0;
  const map = new Map(); // key: char, val: index
  
  constructMap(map, s);
  console.log(map);
  
  for (let word of words) {
    let prev = -1;
    
    console.log(`word: ${word} -------------`);
    for (let i in word) {
      console.log(`char: ${word[i]} | prev: ${prev} | i: ${i} | length-1: ${word.length-1}`);
      const indices = map.get(word[i]);
      
      // if char isn't in s
      if (!indices) {
        console.log('break 1!');
        break;
      }
      
      const sIndex = binarySearch(indices, prev, 0, indices.length - 1);
      console.log(`sIndex: ${sIndex}`);
      
      // if no more instances of char in s
      if (sIndex === undefined) {
        console.log('break 2!');
        break;
      }
      
      prev = sIndex;
      
      console.log(`check: ${i == word.length-1}`);
      if (i == (word.length-1)) {
        console.log('numValid up!')
        numValid++;
      }
    }
  }
    
  return numValid;
};

// index + binary search (accepted) (not working/finally gave up)
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
const constructMap = function(map, s) {
  for (let i in s) {
    const mapVals = map.get(s[i]);
    if (mapVals === undefined) {
      map.set(s[i], [i]);
    } else {
      mapVals.push(i);
      map.set(s[i], mapVals);
    }
  }
};

const bisectRight = function(arr, val, start, end) {
  console.log(`    start: ${start} | end: ${end}`);
  if (start > end) {
    if (arr[start] > val) {
      console.log('    !hit undef check!');
      return start;
    }
    console.log('    !hit undef!');
    return arr.length;
  }
  
  let mid = Math.floor(start + (end - start) / 2);
  console.log(`    mid: ${mid}`);
  
  if (arr[mid] === val) {
    console.log('    !hit 1!');
    return mid;
  }
  
  if (arr[mid] > val) {
    console.log('    !hit 2!');
    return mid;
    // return bisectRight(arr, val, start, mid - 1);
  } else {
    console.log('    !hit 3!');
    return bisectRight(arr, val, mid + 1, end);
  }
};

const isSubSeq = function(map, word) {
  let prev = -1;
  
  
  console.log(`WORD: ${word}`);
  for (let char of word) {
    console.log(`  CHAR: ${char}`);
    if (!map.has(char)) {
      return false;
    }
    
    const mapVals = map.get(char);
    
    console.log(`    prev: ${prev} | mapVals: ${mapVals} | mapVals.length: ${mapVals.length}`);
    let index = bisectRight(mapVals, prev, 0, mapVals.length);
    
    console.log(`    index: ${index}`);
    if (index == mapVals.length) {
      return false;
    }
    
    prev = mapVals[index];
  }
  
  return true;
};

const numMatchingSubseq = function(s, words) {
  const map = new Map(); // key: char, value: indices
  
  constructMap(map, s);
  
  let numMatches = 0;
  
  for (let word of words) {
    if (isSubSeq(map, word)) {
      console.log('subSeq found');
      numMatches++;
    } else console.log('no subseq found')
  }
  
  return numMatches;
};