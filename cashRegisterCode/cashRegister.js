//price - price of the commodity purchsed
//cash - amount paid by the customer
//cid - cash in drawer(it's an array)
function checkCashRegister(price, cash, cid)
{
    //"object" contains two property i.e. status and change
    //"status" will have the message as value i.e. "INSUFFICIENT_FUNDS"/"OPEN"/"CLOSED"
    //"change" will have necessary amount of change to be returned 
    let object = 
    {
        "status" : "NOTHING" ,
        "change" : []
    }
    // let temp = cid[8][1]
    // console.log(temp)
    
    let totalCid = 0 //total cash in drawer

    //calculating the total cash available in drawer
    for (let i = 0; i < cid.length; i++)
    {
        totalCid = totalCid + cid[i][1]
    }

    //"noteValue" contains the value of each type of cash(e.g. PENNY, NICKEL, DIME, etc)
    let noteValue = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100]
    //             PENNY, NICKEL, DIME,                                

    //change - difference between cash paid by the customer and price of the commodity 
    let change = cash - price

    //This below condition checks if total cash available in drawer is equal to the amount
    //of change to be returned to the customer
    //And if the condition satisfies the condition returns a object
    //containing  status message as "CLOSED" and change as the total cash in drawer available
    if (totalCid === change)
    {
        object.status = "CLOSED"
        for (let i = 0; i < cid.length; i++)
        {
            object.change.push(cid[i])
        }

        return object
    }
    
    //The below scope gets executed to check two situations
    //"INSUFFICIENT_FUNDS" and "OPEN"
    else
    {
        let j = 0// a counter variable to maintain the rows in the object to be returned

        //This loop iterates over the entire length of the array "noteValue" in reverse
        for (let i = noteValue.length - 1; i >= 0 ; i--)
        {   
            let sum = 0//This variable keeps a total count of amount of deduction from a particular type of cash e.g. PENNY

            //The below while contains two conditions seperated by an AND operator
            //The first condition checks whether the change to be returned is having a greater value than the note value of a particular cash  e.g. DIME
            //And the second condition checks whether the amount available for each particular note is always greater or equal to its note value and never less 
            while (change >= noteValue[i] && cid[i][1] >= noteValue[i])
            {
                console.log("At the starting ", change )
                change = change - noteValue[i]//change - contains the amount of change to be returned to the customer

                console.log("For " , noteValue[i], " change is ", change)
                cid[i][1] = cid[i][1] - noteValue[i]//reducing the amount available for a particular note once the change takes place
                
                object.change[j] = cid[i]//copying the entire node to the object that will be returned
                
                sum = sum + noteValue//This variable keeps a total count of amount of deduction from a particular type of cash e.g. PENNY
                
                 object.change[j][1]= sum//Now copying the amount of change according to the respective note
                //error occured

                console.log("Note value is ", noteValue[i])
                console.log("cid value is ", cid[i][1])
            }
            j++//increments to the next row to add new note
        }

        
        //This condition returns an object containing status message as "OPEN"
        //And an array containing the change returned 
        //OPEN - when exact amount of change is paid to the customer
        if (change === 0)
        {
          object.status = "OPEN"
        
          return object
        }

        //This condition returns an object containing status message as "INSUFFICIENT_FUNDS"
        //And a  null array
        //INSUFFICIENT_FUNDS - if cash available in drawer is less than the amount of change to be returned or unable to return the exact change
        else
        {
          object.status = "INSUFFICIENT_FUNDS"
          object.change = []

          return object
        }
    }
}

console.log( checkCashRegister(19.5, 20, [
	['PENNY', 1.01],
	['NICKEL', 2.05],
	['DIME', 3.1],
	['QUARTER', 4.25],
	['ONE', 90],
	['FIVE', 55],
	['TEN', 20],
	['TWENTY', 60],
	['ONE HUNDRED', 100]
]) )

// console.log(checkCashRegister(19.5, 20, [
// 	['PENNY', 0.01],
// 	['NICKEL', 0],
// 	['DIME', 0],
// 	['QUARTER', 0],
// 	['ONE', 0],
// 	['FIVE', 0],
// 	['TEN', 0],
// 	['TWENTY', 0],
// 	['ONE HUNDRED', 0]
// ]))

// // console.log(checkCashRegister(19.5, 20, [
// // 	['PENNY', 0.01],
// // 	['NICKEL', 0],
// // 	['DIME', 0],
// // 	['QUARTER', 0],
// // 	['ONE', 1],
// // 	['FIVE', 0],
// // 	['TEN', 0],
// // 	['TWENTY', 0],
// // 	['ONE HUNDRED', 0]
// // ]))

// console.log(checkCashRegister(19.5, 20, [
// 	['PENNY', 1.01],
// 	['NICKEL', 2.05],
// 	['DIME', 3.1],
// 	['QUARTER', 4.25],
// 	['ONE', 90],
// 	['FIVE', 55],
// 	['TEN', 20],
// 	['TWENTY', 60],
// 	['ONE HUNDRED', 100]
// ]))

// console.log(checkCashRegister(19.5, 20, [
// 	['PENNY', 0.01],
// 	['NICKEL', 0],
// 	['DIME', 0],
// 	['QUARTER', 0],
// 	['ONE', 0],
// 	['FIVE', 0],
// 	['TEN', 0],
// 	['TWENTY', 0],
// 	['ONE HUNDRED', 0]
// ]))

// // console.log(checkCashRegister(19.5, 20, [
// // 	['PENNY', 0.01],
// // 	['NICKEL', 0],
// // 	['DIME', 0],
// // 	['QUARTER', 0],
// // 	['ONE', 1],
// // 	['FIVE', 0],
// // 	['TEN', 0],
// // 	['TWENTY', 0],
// // 	['ONE HUNDRED', 0]
// // ]))

// console.log(checkCashRegister(19.5, 20, [
// 	['PENNY', 1.01],
// 	['NICKEL', 2.05],
// 	['DIME', 3.1],
// 	['QUARTER', 4.25],
// 	['ONE', 90],
// 	['FIVE', 55],
// 	['TEN', 20],
// 	['TWENTY', 60],
// 	['ONE HUNDRED', 100]
// ]))