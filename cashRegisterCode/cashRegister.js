function checkCashRegister(price, cash, cid)
{
    let object = 
    {
        "status" : "NOTHING" ,
        "change" : []
    }
    let temp = cid[8][1]
    console.log(temp)
    
    let totalCid = 0
    for (let i = 0; i < cid.length; i++)
    {
        totalCid = totalCid + cid[i][1]
    }

    let noteValue = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100]
    
    let change = cash - price

    if (totalCid === change)
    {
        object.status = "CLOSED"
        for (let i = 0; i < cid.length; i++)
        {
            object.change.push(cid[i])
        }

        return object
    }
    
    else
    {
        let j = 0
        for (let i = noteValue.length - 1; i >= 0 ; i--)
        {   
            let sum = 0
            console.log("Value of i ",i)
            while (change >= noteValue[i] && cid[i][1] >= noteValue[i])
            {
                console.log("At the starting ", change )
                change = change - noteValue[i]
                console.log("For " , noteValue[i], " change is ", change)
                cid[i][1] = cid[i][1] - noteValue[i]
                object.change[j] = cid[i]
                sum = sum + noteValue
                object.change[j][1] = sum
                console.log("Note value is ", noteValue[i])
                console.log("cid value is ", cid[i][1])
            }
            j++
        }

        if (change === 0)
        {
          object.status = "OPEN"
        
          return object
        }

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