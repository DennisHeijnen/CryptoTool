window.onload=function() {
    accountObj = document.getElementById('txtAccount');
    entryObj = document.getElementById('txtEntry');
    exitObj = document.getElementById('txtExit');
    sizeObj = document.getElementById('spanSize');
    document.getElementById('btnReset').onclick = resetInputs;
    document.getElementById('btnCalc').onclick = calcPositionSize;
}

function resetInputs() {
    accountObj.value = '';
    entryObj.value = '';
    exitObj.value = '';
    sizeObj.innerHTML = '';
}

function calcPositionSize() {
    var account = new Number(accountObj.value);
    var entry = new Number(entryObj.value);
    var exitPerc = new Number(exitObj.value);
    sizeObj.innerHTML = '';

    if(isNaN(account) || isNaN(entry) || isNaN(exitPerc)) {
        alert('Invalid input');
        return;
    };
   
    if (document.getElementById("typeTrade").value == "long") {
        var exit = entry * (1 - exitPerc/100);
        var tpOne = entry * (1 + exitPerc/100);
        var tpTwo = entry * (1 + 2 * (exitPerc / 100));
        var positionSizeBTC = (account/100)/(entry-exit);
        var positionSizeEUR = positionSizeBTC * entry;
        var message = "Stop loss: " + exit + "</br>" + "TP1: " + tpOne + "</br>" + "TP2: " + tpTwo + "</br>" + "Position Size in BTC: " + positionSizeBTC  + "</br>" + "Position Size in EUR: " + positionSizeEUR;
        sizeObj.innerHTML = message;
    };
    
    if (document.getElementById("typeTrade").value == "short") {
        var exit = entry * (1 + exitPerc/100);
        var tpOne = entry * (1 - exitPerc/100);
        var tpTwo = entry * (1 - 2 * (exitPerc / 100));
        var positionSizeBTC = Math.abs((account/100)/(entry-exit));
        var positionSizeEUR = positionSizeBTC * entry;
        var message = "Stop loss: " + exit + "</br>" + "TP1: " + tpOne + "</br>" + "TP2: " + tpTwo + "</br>" + "Position Size in BTC: " + positionSizeBTC  + "</br>" + "Position Size in EUR: " + positionSizeEUR;
        sizeObj.innerHTML = message;
    };
};