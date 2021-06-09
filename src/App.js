import './App.css';
import {Addnewtransact} from './components/addnewtransact';
import {Transactionlist} from './components/transactionlist'
import {useEffect, useState} from 'react';
import Balance from './components/balance';
import fire from './fire';
import 'firebase/database';
function App() {
  const [transactlist,setTransactlist] = useState([
      { id: 1, text: 'Tax', amount: 0,currtime:'June 8th 2021, 8:28 pm'},
      { id: 4, text: 'Camera', amount: 0,currtime:'June 8th 2021, 8:28 pm'},
  ]);
  const ref = fire.firestore().collection("transactions");

  function getTransactions(){
    ref.onSnapshot((querySnapShot)=>{
      let items = [];
      querySnapShot.forEach((doc)=>{
        items.push(doc.data());
      });
      setTransactlist(items);
    })
  }
  useEffect(()=>{
    getTransactions();
        // eslint-disable-next-line
  },[]);
  const addTransaction = (transaction) => {
    ref
       .doc()
       .set(transaction)
       .catch((err)=>{
         console.error(err);
       });
  }

  return (
    <div className="App">
      <h2>Cash Register</h2>
      <Balance transactlist={transactlist}/>
      <Transactionlist transactionlist={transactlist}/> 
      <Addnewtransact addTransaction={addTransaction}/> 
        
    </div>
  );
}

export default App;
