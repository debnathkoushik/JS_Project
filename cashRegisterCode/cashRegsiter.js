function checkCashRegister(price, cash, cid)
{
    let object = 
    {
        "status" : "NOTHING" ,
        "change" : []
    }
    
    let totalCid = 0
    for (let i = 0; i < cid.length; i++)
    {
        totalCid = totalCid + cid[i][1]
    }

    const noteValue = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01]
    let change = cash - price

    if (totalCid < change)
    {
        object.status = "INSUFFICIENT_FUNDS"
        return object
    }

    else if (totalCid == change)
    {
        object.status = "CLOSED"
        for (let i = 0; i < cid.length; i++)
        {
            object.change.push(cid[i])
        }

        return object
    }
    
    else if (change < totalCid)
    { 
        for (let i = 0; i > noteValue.length; i++)
        {    
            while (change >= noteValue[i])
            {
                change = change - noteValue[i]
                object.change
            }
        }

        object.status = "OPEN"
        
        return object
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

// // console.log(checkCashRegister(19.5, 20, [
// // 	['PENNY', 0.01],
// // 	['NICKEL', 0],
// // 	['DIME', 0],
// // 	['QUARTER', 0],
// // 	['ONE', 0],
// // 	['FIVE', 0],
// // 	['TEN', 0],
// // 	['TWENTY', 0],
// // 	['ONE HUNDRED', 0]
// // ]))

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