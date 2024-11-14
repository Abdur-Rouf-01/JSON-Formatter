
let getInputJSON = document.getElementById('jsonInput');

// Getting Data From the Input Field and Updating to Formatted JSON
function formatJSON() {
    let parseJSON = JSON.parse(getInputJSON.value);
    let parseToStringifyJSON = JSON.stringify(parseJSON, null, 4);
    getInputJSON.value = parseToStringifyJSON;
    //console.log(parseToStringifyJSON);
}


// Function For Paste Button
async function pasteText() {
    
    let getClipBoard = await navigator.clipboard.readText();
    getInputJSON.value = getClipBoard;
    //console.log(getClipBoard)
}

// Function For Clear Button
function clearText() {
    getInputJSON.value = '';
}