document.getElementById('submitColor').addEventListener('click', function() {
    event.preventDefault();
    var ourColor = document.getElementById('color').value;
    document.body.style.backgroundColor = ourColor;
});

document.getElementById('submitHex').addEventListener('click', function() {
    event.preventDefault();
    var ourHex = document.getElementById('hex').value;
    console.log(ourHex);
    var comma1 = ourHex.indexOf(',');
    console.log(comma1);
    var comma2 = ourHex.indexOf(',', comma1 + 1);
    console.log(comma2);
    var setHex1 = "#" + (ourHex.substring(0, comma1));
    console.log(setHex1);
    var setHex2 = (ourHex.substring(comma1 + 2, comma2));
    console.log(setHex2);
    var setHex3 = (ourHex.substring(comma2 + 2));
    console.log(setHex3);
    var setHex = setHex1 + setHex2 + setHex3;
    console.log(setHex);
    document.body.style.backgroundColor = setHex;
    
    
    
});


//['a'].indexOf('a') // 0
//var str = "Hello world!";
//var res = str.substring(1, 4);
