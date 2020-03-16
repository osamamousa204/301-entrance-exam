
var numOfGreaters = 0;

function greaterThan (arrayOfNum , compareNum){
    for (var x = 0 ; x < arrayOfNum.length; x++){
        if(arrayOfNum[x] > compareNum){
            numOfGreaters++;
        }
    }
    return numOfGreaters;
}
console.log(greaterThan([5,7,-8,4], 2));