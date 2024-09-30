/*
* @param {string} email
* @returns {boolean}
*/
function validateEmail(email){
    const re= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email)
}

module.exports = validateEmail