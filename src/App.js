import logo from './logo.svg';
import './App.css';

function App() {

  const products = [
    {name: 'photoshop' , price : '49.99$'} ,
    {name: 'Illstrator' , price : '99.99$'},
    {name: 'PDF reader' , price : '11.99$'},
  ]
  

  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>

        <Product costume={products[0]}></Product>
        <Product costume={products[1]}></Product>
        <Product costume={products[2]}></Product>

        </header>
    </div>
  );
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
  console.log(name, price);

  
  return (
      <div style={productStyle}>
          <h3>Name: {name} </h3>
          <h2>Price: {price} </h2>
          <button> Buy Now: </button>

      </div>
  )
}


export default App;
