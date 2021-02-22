import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const products = [
    {name: 'photoshop' , price : '49.99$'} ,
    {name: 'Illstrator' , price : '99.99$'},
    {name: 'PDF reader' , price : '11.99$'},
    {name: 'Premiar Ele' , price : '211.99$'},
    {name: 'Premiar Ele' , price : '211.99$'},

  ]

  // const productNames = products.map(product => product.name);
  // console.log(productNames);

  const nayok = ['anwar' , 'jakie'  , 'maqbull' , 'bappi' , 'shuvo' , 'Hori', 'mashiur'];
  

  

  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>
        <Counter></Counter>
        <CounterAgain></CounterAgain>
        <Users></Users>


        <ul>

          {
            nayok.map(nayok => <li>{nayok}</li> )
          }

          {
            products.map(product => <li>{product.name}</li>)
          }

        </ul>

        {
          products.map(product => <Product costume = {product} ></Product> )
        }



        {/* <Product costume={products[0]}></Product>
        <Product costume={products[1]}></Product>
        <Product costume={products[2]}></Product> */}

        </header>
    </div>
  );
}


/////////////////////////////////////////////// Users decleration///////////////////////////////////

function Users() {
  const [users , setUsers] = useState([]);
  useEffect(()=> {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res=> res.json())
    .then(data=> {
      // console.log(data);
      setUsers(data);
    })
  })




  return (
    <div>
      <h3>Dynamic users : {users.length}</h3>
      <ul>
        {
          users.map(user => <li> {user.name} </li> )
        }
      </ul>

      <ul>
        {
          users.map(user => <li>{user.phone}</li> )
        }
      </ul>


      
    </div>
  )
}




function Product(props) {
  const productStyle = {
      border : '1px solid gray',
      borderRadius : '5px',
      backgroundColor: 'lightGray',
      height: '400px',
      width : '400px',
      float : 'left',
      color: 'tomato',
      margin: '20px'
     
  }

  // const {name , price} = props.products ;
  // console.log(name  , price);

  const {name , price} = props.costume;
  // console.log(name, price);

  
  return (
      <div style={productStyle}>
          <h3>Name: {name} </h3>
          <h2>Price: {price} </h2>
          <button> Buy Now: </button>

      </div>
  )
}











//////////////////////////////////////counter state

function Counter() {
  // eslint-disable-next-line no-empty-pattern
  const[count , setCount] = useState(0);
  const handleIncrease = () => {
    const newCount = count+1;
    setCount(newCount);
  };
  return (
    <div>
        <h1>count: {count} </h1>
        <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}



////////////////////////////////////////counter state again


function CounterAgain() {
  const[count1 , setCount1] = useState(0);
  

  return (
    <div>
      <h1>Count: {count1}</h1>
      <button onClick={() => setCount1(count1+1)}>Increase</button>
      <button onMouseMove={() => setCount1(count1-1)}>Decrease</button>
    </div>
  )
  
};


// again






export default App;
