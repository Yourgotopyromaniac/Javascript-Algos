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

