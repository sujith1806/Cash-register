import React from 'react'
import {useState} from 'react';
import moment from 'moment';

export const Addnewtransact = ({addTransaction}) => {

    const [amount,setAmount] = useState(0);
    const [text,setText] = useState('');
    const addtransact = (e) => {
        e.preventDefault();
        //moment library is used to get current time and date
        var currtime = moment().format('MMMM Do YYYY, h:mm a');
        const newTransaction = {
          id:Math.floor(Math.random() * 100000000),
          text,
          amount:+amount,
          currtime
        };

        addTransaction(newTransaction);
        setText('');
        setAmount(0);
    }

    return (
        <div>
        <h3>Add new transaction</h3>
        <form id="form" onSubmit={addtransact}>
            <div className="form-control">
            <label htmlFor="text">Text</label>
            <input type="text" id="text" placeholder="Enter text..." value={text} onChange={(e)=>setText(e.target.value)}/>
            </div>
            <div className="form-control">
            <label htmlFor="amount"
                >Amount <br />
                (negative - expense, positive - income)</label
            >
            <input type="number" id="amount" placeholder="Enter amount..." value={amount} onChange={(e)=>setAmount(e.target.value)}/>
            </div>
            <button className="btn" type="submit">Add transaction</button>
        </form>
    </div>
    )
}
