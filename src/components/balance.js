import React from 'react'

function Balance({transactlist}) {
    const amounts = transactlist.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
        <>
        <h4>Your Balance</h4>
        <h1 id="balance">{total}</h1>
        </>
    )
}

export default Balance
