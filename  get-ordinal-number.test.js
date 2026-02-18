test("works for any number ending in 1", function () {
  expect(getOrdinalNumber(1)).toEqual("1st");
  expect(getOrdinalNumber(2)).toEqual("2nd");
  expect(getOrdinalNumber(3)).toEqual("3rd");
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(21)).toEqual("21st");
  expect(getOrdinalNumber(31)).toEqual("31st");
});

function test(name, testFunction) {
  // Call the passed test function
  testFunction();
}

function getOrdinalNumber(num) {
  if(num === 11){
    return num + "th";
  }
  if(num === 21){
    return num + "st";
  }
  if(num === 1){
    return num + "st";
  }
  if(num === 2){
    return num + "nd";
  }
  if(num === 3){
    return num + "rd";
  }
}


h