//Temperature Converter Function

function convertFahrToCelsius(fahrenheit)
{

    var fahrTemp =  fahrenheit ;                    
    var celFromF = ((fahrTemp - 32)*5)/9;

    if(Array.isArray(fahrenheit))
    {
        return '['+ fahrTemp +  '] is not a valid number but a/an array' ;
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
        return celFromF.toFixed(4) ;
       }
       
    }
    else if( typeof(fahrenheit) !== 'number')
    {
        let objString = JSON.stringify(fahrenheit);
        return objString + ' is not a valid number but a/an ' + typeof(fahrTemp) ;
    }
    else
    {
        return celFromF.toFixed(4) ;
    }
}



//CheckYuGiOh Function

function checkYuGiOh(n)
{

    let array = [];
    if(typeof(n) !== 'number' )
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


