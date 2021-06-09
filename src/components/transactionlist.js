import React from 'react'
import {TransactionItem} from './transactionitem';
export const Transactionlist=({transactionlist}) =>{
    return (
        <div>
            <h3>History</h3>
            <ul id="list" className="list">
                {
                    transactionlist.map(transaction => (
                        <TransactionItem transaction={transaction} key={transaction.id}/>
                    ))
                }
            </ul>  
        </div>
    )
}
