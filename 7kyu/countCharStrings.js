// Given a string `str` and a single character `char` to search for,
// When the countChar function is called with these inputs,
// Then it should:

// Scenario: Multiple Occurrences
// should return 1 when the character appears only once
// Should return 0 for empty string
// should return no occurrences if no found character


function countChar(stringOFchar, findCharacter){
    let count = 0;
    
    for(i = 0; i < stringOFchar.length; i++){
        if (stringOFchar === findCharacter){
            count += 1;
        }
    }
    return count;
}

