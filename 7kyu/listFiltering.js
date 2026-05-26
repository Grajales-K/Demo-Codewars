// 7 kyu List Filtering

// In this kata you will create a function that takes a list of non-negative 
// integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]


function filter_list(l) {
    return l.filter(item => typeof item === 'number');
}

console.log('----------- Testing filter_list -----------\n');

const testCasesFilterList = [
    {
        input: [1, 2, 'a', 'b'],
        expected: [1, 2]
    },
    {
        input: [1, 'a', 'b', 0, 15],
        expected: [1, 0, 15]
    },
    {
        input: [1, 2, 'aasf', '1', '123', 123],
        expected: [1, 2, 123]
    }
    ];  


testCasesFilterList.forEach(({ input, expected }, index) => {
    const result = filter_list(input);
    const passed = JSON.stringify(result) === JSON.stringify(expected);
    console.log(`Test Case ${index + 1}:`, passed ? 'Passed' : 'Failed');
    if (!passed) {
        console.log('  Input:', input);
        console.log('  Expected:', expected);
        console.log('  Got:', result);
    }
});

