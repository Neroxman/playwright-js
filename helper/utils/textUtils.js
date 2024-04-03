/**
 * Remove white spaces from text.
 * @param {string} text Text to be cleaned.
 * @return {string} Cleaned text.
 */

function cleanText(text) {
    return text.replace(/\s+/g, ' ').trim();
}

module.exports = {
    cleanText,
};