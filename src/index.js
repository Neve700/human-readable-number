module.exports = function toReadable (n) {
    const numsToWords = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
      };

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
