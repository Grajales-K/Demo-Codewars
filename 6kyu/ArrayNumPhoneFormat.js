// 6 kyu
// Create Phone Number


// Write a function that accepts an array of 10 integers (between 0 and 9), 
// that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers) {
  let phoneNumber = '';

  numbers.forEach((number, index) => {
    console.log('number', number);
    console.log('index', index);

    switch (index) {
      case 0:
        phoneNumber = phoneNumber + '(';
        break;
      case 3:
        phoneNumber = phoneNumber + ')';
        phoneNumber = phoneNumber + ' ';
        break;
      case 6:
        phoneNumber = phoneNumber + '-';
        break;
      default:
      // code block
    }

    phoneNumber = phoneNumber + number;
  });

  return phoneNumber;
}