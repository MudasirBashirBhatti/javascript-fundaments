// reverse a string
const reverseStr = (str) => {
    let convertToArr = Array.from(str)
    let reverseArr = convertToArr.reverse()
    return reverseArr.join('')
}

//palindrome function
const isPalindrome = (num) => {
    return num === Number(Array.from(String(num)).reverse().join(''))
}

//..................first non repeating character..................
// method1
const firstNonRepeatingChar = (str) => {
    let count = 0;
    let strArr = Array.from(str)
    for (let i = 0; i < strArr.length; i++) {
        count = 0
        for (let j = 0; j < strArr.length; j++) {
            if (strArr[i] === strArr[j]) {
                count++;
            }
        }
        if (count == 1) {
            return strArr[i];
        }
    }
    return null
}

// method2 
const firstNonRepeatingChar1 = (str) => {
    let freqMap = {}
    for (char of str) {
        freqMap[char] = (freqMap[char] || 0) + 1
    }

    for (char of str) {
        if (freqMap[char] === 1) {
            return char;
        }
    }

    return null
}

// ............... Flatten an array ...............

const flattenArr = (arr, depth = 2) => {
    return arr.reduce((acc, val) => {
        if (Array.isArray(val) && depth > 0) {
            // Recursively flatten one level less depth
            acc.push(...flattenArr(val, depth - 1));
        } else {
            acc.push(val);
        }
        return acc;
    }, []);
};

// ......... problem .....
// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]

function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
}

// ......... fizz buzz problem ............

// Write a program that prints the numbers from 1 to n.
// For multiples of three print "Fizz" instead of the number,
// For multiples of five print "Buzz",
// For numbers which are multiples of both three and five print "FizzBuzz".

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz')
        } else if (i % 3 === 0) {
            console.log('fizz')
        } else if (i % 5 === 0) {
            console.log('buzz')
        } else {
            console.log(i)
        }
    }
}

// .................. problem ...............

function reverse(x) {
    const sign = x < 0 ? -1 : 1;
    const reversedNum = Number(String(Math.abs(x)).split('').reverse().join(''));
    const result = sign * reversedNum;
    // 32-bit signed int range check
    if (result < -(2 ** 31) || result > 2 ** 31 - 1) {
        return 0;
    }
    return result;
}

// ............... merge arrays ................
// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
// Assume that nums1 has enough space(size that is greater or equal to m + n) to hold additional elements from nums2.
// The number of elements initialized in nums1 and nums2 are m and n respectively.

// Input:
// nums1 = [1, 2, 3, 0, 0, 0], m = 3
// nums2 = [2, 5, 6], n = 3

// Output: [1, 2, 2, 3, 5, 6]

const merge = (nums1, m, nums2, n) => {

}

console.log([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)