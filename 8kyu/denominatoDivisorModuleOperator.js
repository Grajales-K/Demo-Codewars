// 8 kyu
// Find numbers which are divisible by given number
// Description:
// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

// Example(Input1, Input2 --> Output)
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]


function divisibleBy(numbers, divisor) {
  let result = [];
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % divisor === 0) {
      result[result.length] = numbers[i];
    }
  }
  console.log(result);
  return result;
}


console.log("----------- Testing divisibleBy -----------\n");

const testCases = [
  { numbers: [1, 2, 3, 4, 5, 6], divisor: 2, expected: [2, 4, 6] },
  { numbers: [5, 10, 15, 20], divisor: 5, expected: [5, 10, 15, 20] },
  { numbers: [1, 3, 5, 7], divisor: 2, expected: [] },
  { numbers: [0, 1, 2, 3], divisor: 1, expected: [0, 1, 2, 3] },
];


//this will compare the two arrays, and return true if they are the same, 
// and false if they are not the same.
//a.every() method will check if all elements in the array pass the test 
//implemented by the provided function.
const sameArrays = (a, b) =>
  a.length === b.length && a.every((v, i) => v === b[i]);

testCases.forEach(({ numbers, divisor, expected }, index) => {
  const result = divisibleBy(numbers, divisor);

  //we will use the sameArrays function to compare the result and expected arrays,
  //this means e.g. if result is [2, 4, 6] and expected is [2, 4, 6], 
 //then sameArrays will return true,
  const passed = sameArrays(result, expected);

  console.log(`Test #${index + 1}: [${numbers}] (Divisor: ${divisor})`);
  console.log(
    `result: [${result}] | expected: [${expected}] | ${
      passed ? "✅ PASS" : "❌ FAIL"
    }\n`
  );
});



// --- INICIO DEL FLUJO ---

// 1. El forEach "desarma" el objeto del test:
//    numbers = [1, 2], divisor = 1, expected = [1, 2]

// 2. Entramos a tu función:
const result = divisibleBy([1, 2], 1); 
/* DENTRO DE LA FUNCIÓN:
   - result empieza como []
   - Ciclo i=0: (1 % 1 === 0) es TRUE -> result[0] = 1 (result es [1])
   - Ciclo i=1: (2 % 1 === 0) es TRUE -> result[1] = 2 (result es [1, 2])
   - Retorna [1, 2]
*/

// 3. Ahora result vale [1, 2]. Vamos a la línea del "juicio":
const passed = sameArrays([1, 2], [1, 2]);

/* DENTRO DE sameArrays(a, b):
   a = [1, 2]
   b = [1, 2]

   Paso A: ¿a.length === b.length? 
           ¿2 === 2? -> SÍ (True)

   Paso B: && (y además) ejecutamos el .every()
           - i=0: ¿a[0] === b[0]? (1 === 1) -> SÍ
           - i=1: ¿a[1] === b[1]? (2 === 2) -> SÍ

   Paso C: Como todo fue SÍ, sameArrays devuelve TRUE.
*/

// 4. La variable 'passed' ahora guarda el valor TRUE.

// 5. El console.log final:
//    Usa el "operador ternario" (el signo ?):
//    ¿Es passed true? 
//    SÍ -> Imprime "✅ PASS"