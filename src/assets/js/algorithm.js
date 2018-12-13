var telephoneRouter = (function(){

    // Open function; find cheapest
    function findCheapest(inputNumber, mockOperators) {
        list = mockOperators;
        var finalMatchingElementArray = getCheapestEntryFromOperators(list, inputNumber);
        var cheapestObj = null;
        if(finalMatchingElementArray.length){
            // find the cheapest
            cheapestObj = findMostCheapest(finalMatchingElementArray);
        }
        return cheapestObj;
    }

    function getCheapestEntryFromOperators(list, inputNumber){
        // find the first digit
        var firstDigit = +inputNumber.toString().substr(0, 1);
        var operatorObj, relativeCodesArray, relativePriceArray,  largestValue, length, inputSubstr, matchingElementIndex ;
        var finalMatchingElementArray = [];
        // Loop through operators
        for (var keyobj in list) {
            operatorObj = null;
            if (list.hasOwnProperty(keyobj)) {
                operatorObj = list[keyobj];
                // Create an array with codes starting with `firstDigit`
                relativeCodesArray = findRelativeCodes(operatorObj, firstDigit);
                // Keep an array with prices for further index mapping
                relativePriceArray = keepRelativePrices(operatorObj, firstDigit);
                // find largest in the array
                largestValue = Math.max(...relativeCodesArray);
                // find the length of largest value
                length = largestValue.toString().length;
                // find substring of `inputNumber`
                inputSubstr = +inputNumber.toString().substr(0, length);
                // find and store matching element with operator details
                matchingElementIndex = findMatchingElementIndexFromArray(relativeCodesArray, inputSubstr);
                if(matchingElementIndex != null)
                    finalMatchingElementArray.push({ 
                    "operator" : keyobj , "value" : relativePriceArray[matchingElementIndex] });
            }
        }
        return finalMatchingElementArray;

    }

    // Get related elements of firstDigit
    function findRelativeCodes(operatorObj, firstDigit){
        return operatorObj.filter(function(op){ return (op[0].toString()[0] == firstDigit.toString())  }).map(function(obj){return obj[0]; })
    }
    // Keep a track of index of related elements
    function keepRelativePrices(operatorObj, firstDigit){
        return operatorObj.filter(function(op){ return (op[0].toString()[0] == firstDigit.toString())  }).map(function(obj){return obj[1]; })
    }
    // finding matching element index from array
    function findMatchingElementIndexFromArray(arrayList, inputSubstr){
        var len = inputSubstr.toString().length;
        var str, index = null;
        for(var i = len; i > 0; i--){
            str = +(inputSubstr.toString().substr(0, len));
            if(arrayList.indexOf(str) > -1){
                index = arrayList.indexOf(str);
                break;
            }
        }
        return index;
    }
    // Sort and get the first, it will be the most cheapest
    function findMostCheapest(list){
        list.sort(function(a, b){
            return Number(a.value) - Number(b.value)
        });

        return list[0];
    }

    return {
        findCheapest : findCheapest
    }

})();