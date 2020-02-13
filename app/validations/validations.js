
const alphanumericRegex  = /^[a-z0-9]+$/i
const floatRegex  = /^\s*(?=.*[1-9])\d*(?:\.\d{1,2})?\s*$/
const alphabetRegex = /^[A-Za-z]+$/
const dateRegex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/



const requireField = (value) =>
{
    if(value == null )
    {
        return false
    }
    else
    {
        return true
    }

}

const alphanumericValidator = (value) =>
{
    if(alphanumericRegex.test(value))
    {
        return true
    }
    else
    {
        return false
    }
}

const numericValidator = (value) =>
{
    if(floatRegex.test(value))
    {
        return true
    }
    else
    {
        return false
    }

}

const alphabetValidator = (value) =>
{
    if(alphabetRegex.test(value))
    {
        return true
    }
    else
    {
        return false
    }

}

const dateValidator = (value) =>
{
    if(dateRegex.test(value))
    {
        return true
    }
    else
    {
        return  false
    }

}





 module.exports = async (schema) =>
{
    validBody = []
    countOfNull = 0

    for( let i = 0 ; i < schema.length ; i++ )
    {
        const { fieldValue, fieldType, fieldName } = schema[i]

        if(fieldType == 'alphabet')
        {
            if(requireField(fieldValue) )
            {
                if(alphabetValidator(fieldValue))
                {
                    validBody.push(null)
                }
                else
                {
                    validBody.push(`${fieldName} alphabet only`)
                }                
            }
            else
            {
                validBody.push(`${fieldName} is required`)
            }

           
        }
        else if(fieldType == 'float')
        {
            if(numericValidator(fieldValue))
            {
                if(numericValidator(fieldValue))
                {
                    validBody.push(null)
                }
                else
                {
                    validBody.push(`${fieldName} float only`)
                }                
            }
            else
            {
                validBody.push(`${fieldName} is required`)
            }
        }
        else if(fieldType == 'date')
        {
            if(requireField(fieldValue))
            {
                if(dateValidator(fieldValue))
                {
                    validBody.push(null)
                }
                else
                {
                    validBody.push(`${fieldName} format is either dd/mm/yyyy or dd-mm-yyyy`)
                }                
            }
            else
            {
                validBody.push(`${fieldName} is required`)
            }        
        }

        if(fieldType == 'required')
        {
            if(requireField(fieldValue) )
            {
                validBody.push(null)              
            }
            else
            {
                validBody.push(`${fieldName} is required`)
            }

           
        }
    }

    for( let j = 0 ; j < schema.length ; j++ )
    {
        if(validBody[j] ==  null)
        {
            countOfNull++
        }
        else
        {

        }
    }

    if(countOfNull == schema.length)
    {
        return true
    }
    else
    {

        return await validBody.filter(x=>x!=null)
    }

}

