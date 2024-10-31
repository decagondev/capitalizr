function capitalizr(str, option = 0) {
  /**
   * Capitalizes letters in a string based on the specified option.
   *
   * @param {string} str - The input string to capitalize.
   * @param {number} [option=0] - The capitalization option:
   *   - 0 (default): Capitalizes only the first letter of the entire string.
   *   - 1: Capitalizes the first letter of each word in the string.
   *   - 2: Capitalizes the first letter of each sentence in the string, where sentences are separated by ". ".
   * @returns {string} - The capitalized string.
   *
   * @example
   * capitalizr("hello world"); // "Hello world"
   * capitalizr("hello world", 1); // "Hello World"
   * capitalizr("hello world. i am a fish.", 2); // "Hello world. I am a fish."
  */
  if (str.length === 0) return str;

  if (option === 1) {
      return str
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
          .join(' ');
  } else if (option === 2) {
      return str
          .split('. ')
          .map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase())
          .join('. ');
  } else {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
}

module.exports = capitalizr;
