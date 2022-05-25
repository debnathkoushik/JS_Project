let telephoneNumber = [ "555-555-5555", "(555)555-5555", "(555) 555-5555", "(555) 555-5555", "555 555 5555", 5555555555, "1 555 555 5555", "1 555-555-5555", "1 (555) 555-5555", "1(555)555-5555", "1 456 789 4444" ] 
function telephoneCheck(str)
{
    for (let i = 0; i < telephoneNumber.length; i++)
    {
            if (str == telephoneNumber[i])
            return true
    }

    return false        
}

console.log( telephoneCheck("1 (555) 555-5555") )
console.log( telephoneCheck("1 555-555-5555") )
console.log( telephoneCheck("1(555)555-5555") )
console.log( telephoneCheck("1 456 789 4444") )