module.exports = function toReadable (n) {
  if (n in numsToWords) {
    return numsToWords[n];
  };

    const hundreds = Math.floor( n / 100);
    const tens = Math.floor( n % 100 / 10) * 10;
    const units = n % 10;


    if (n >= 100 && n % 100 === 0) {
        return `${numsToWords[hundreds]} hundred`;
    }
    else if (n >= 100 && n % 100 > 0) {
        return `${numsToWords[hundreds]} hundred ${numsToWords[tens]}`;
    }
    else if (n > 100) {
        return `${numsToWords[hundreds]} hundred ${numsToWords[tens]} ${numsToWords[units]}`; 
    };

    if (n < 100 && n >= 20) {
        return `${numsToWords[tens]} ${numsToWords[units]}`;
    };
        
};
