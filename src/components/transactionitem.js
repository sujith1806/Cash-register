import React from 'react'

export const TransactionItem = ({transaction})=>{
    const sign = parseInt(transaction.amount)>0?"plus":"minus";
    const sign1 = transaction.amount<0?'-':'+';
    return (
        <li className={sign}>
         <div>
         <p>{transaction.currtime}</p>
            {transaction.text}
        </div>
        <span>{sign1}{Math.abs(transaction.amount)}</span>

        </li>
    )
}

