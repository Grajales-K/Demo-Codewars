// 7 kyu
// Fridge Organizer: Priority Eating

// Task
// You have a messy fridge! To prevent food waste, you need to decide what to eat first based on two factors: expiry date and quantity.

// Write a function that takes a list of food items and returns their names sorted by urgency score.

// Data Format
// Each food item is an object that has the following attributes:

// name: The name of the food. (string)
// expiryDays: Days until it expires. (integer; can be negative)
// isAlmostEmpty: true if you only have a little bit left. (boolean)
// Sorting Rules
// Discard Spoiled: If the days to expiry are less than 0, the item is spoiled. Do not include it in the output.
// Empty First: Items that are almost empty come before items that are not.
// Expiry: Within those groups, items with the lowest days to expiry come first.
// Alphabetical: If both status and expiry are the same, sort by name alphabetically.
// Example
// When provided with the following list of food items:

// Name	Days to Expiry	Is Almost Empty?
// Milk	      3	false
// Jam	          3	true
// Yogurt	      1	false
// Old Meat	 -1	true
// Today's Tofu	0	false
// You should return:

// ["Jam", "Today's Tofu", "Yogurt", "Milk"]



function fridgeOrganizer(items) {
  let casiVacios = [];
  let llenos = [];

  // 1. Recorrido para filtrar y agrupar
  for (let i = 0; i < items.length; i++) {
    const producto = items[i];

    // Regla: Descartar si expiró (menos de 0 días)
    if (producto.expiryDays < 0) {
      continue; // Saltamos este producto
    }

    // Clasificar en cajas según si están casi vacíos o no
    if (producto.isAlmostEmpty) {
      casiVacios.push(producto);
    } else {
      llenos.push(producto);
    }
  }

  // 2. Definir cómo comparar dos productos (La "Lógica de Urgencia")
  function compararUrgencia(a, b) {
    // Si tienen distintos días, el que tiene MENOS días va primero
    if (a.expiryDays !== b.expiryDays) {
      return a.expiryDays - b.expiryDays;
    }
    // Si empatan en días, comparamos el nombre alfabéticamente
    return a.name.localeCompare(b.name);
  }

  // 3. Ordenar cada grupo por separado
  casiVacios.sort(compararUrgencia);
  llenos.sort(compararUrgencia);

  // 4. Unir los resultados y sacar solo los nombres
  const resultadoFinal = [...casiVacios, ...llenos];
  let nombres = [];

  for (let i = 0; i < resultadoFinal.length; i++) {
    nombres.push(resultadoFinal[i].name);
  }

  return nombres;
}