/**
 * Remove white spaces from text.
 * @param {string} text Text to be cleaned.
 * @return {string} Cleaned text.
 */

const cleanText = (text) => text.replace(/\s+/g, ' ').trim();

export default cleanText;