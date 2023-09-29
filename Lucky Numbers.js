// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let a1='',a2='';
  for(let i=0;i<array1.length;i++){
    a1+=String(array1[i]);
  }
  for(let i=0;i<array2.length;i++){
    a2+=String(array2[i]);
  }

  return Number(a1)+Number(a2)
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let s=String(value)
  for (let i=0;i<=s.length/2;i++){
    if (s[i]!=s[s.length-i-1])
      return false
  }
  return true
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (!Boolean(input)){
    return 'Required field'
  }
  else if(!Number(input)){
    return 'Must be a number besides 0';
  }
  else
  return ""
}
