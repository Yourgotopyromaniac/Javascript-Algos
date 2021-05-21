function convertFahrToCelsius(fahrenheit)
{

    var fahrTemp =  fahrenheit ;
    var celFromF = ((fahrTemp - 32)*5)/9;

    if(Array.isArray(fahrenheit))
    {
        console.log('['+ fahrTemp +  '] is not a valid number but an array');
    }

    else if( typeof(fahrenheit) == 'string')
    {
       let numString =  parseInt(fahrenheit, 10);

       if (isNaN(numString))
       {
           return "not a valid number but a string";
       }

       else
       {
        console.log(numString + ' degree(s) fahrenheit is ' + celFromF.toFixed(4) + ' degree(s) celsius')
       }
       
    }
    else if( typeof(fahrenheit) !== 'number')
    {
        let objString = JSON.stringify(fahrenheit);
        console.log(objString + ' is not a valid number but a/an ' + typeof(fahrTemp));
    }
    else
    {
        console.log(fahrenheit + ' degree(s) fahrenheit is ' + celFromF.toFixed(4) + ' degree(s) celsius');
    }
}


function checkYuGiOh(n)
{

    let array = [];
    if(isNaN(n))
    {
        return `invalid parameter: "${n}"`;
    }

    for(let i = 1; i<= n; i++)
    {   
        var charArray = [];
        if (i % 2 == 0)
        {
            charArray.push('Yu')
        }

        if (i % 3 == 0)
        {
            charArray.push('Gi')
        }

        if (i % 5 == 0)
        {
            charArray.push('Oh')
        }

        if(charArray.length > 0)
        {
            var combinedChar = charArray.join("-");
            array.push(combinedChar);
        }
        else
        {
            array.push(i);
        }
    }
         return array;
}



//sorry for the spaghetti code, i'm new at this :(


