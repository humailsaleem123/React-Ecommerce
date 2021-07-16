import React, { useState , useEffect } from 'react'; 
import './App.css';
import All from "./components/all";
import Header from "./components/header"
import Slider from "./components/Add-to-Cart/slider";
import Footer from "./components/footer";
import Card from "./components/card";
import Search from "./components/search";
import Data from "./data";
import { BrowserRouter, Route, Switch , Redirect} from "react-router-dom";
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import 'bootstrap/dist/css/bootstrap.min.css';
import DRoute from './components/routing/route'




function Home(){


  const ncard = ( val ) => {

    return (
  

      <Card  onAdd={onAdd}

      pname = {val.pname}
      imgsrc = {val.imgsrc}
      title = {val.title}
      price = {val.price}
      discount = {val.discount}
      pricedis = {val.pricedis}
      id={val.id}

      />

  
    );
  
  }

  const [cartItems , setCartItems]  = useState([]);


  const onAdd = (product) => {
  
    const exist = cartItems.find(x => x.id === product.id);

    
  
    if(exist){
      setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty : exist.qty + 1} : x));
    }
    else{
      setCartItems([...cartItems , { ...product, qty:1 }]);

    }
 
  
  }


const onRemove = (product) =>{

  const exist = cartItems.find((x) => x.id === product.id);

  if (exist.qty === 1){
    setCartItems(cartItems.filter((x) => x.id !== product.id));
  }

  else{
    setCartItems(cartItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty - 1 } : x ));
  }

}





  const [search, setSearch] = useState("");
    
  const [users, setUsers] = useState(Data.slice(0,150));

  const [pageNumber, setPageNumber] = useState(0);
  
  const usersPerPages = 20;

  const pagesVisited = pageNumber * usersPerPages;

  
  
  
 

  const displayUsers = users.slice(pagesVisited, pagesVisited + usersPerPages)

  .filter((val) => {

    if (search === "") {
      return val;
  }
  else if (val.pname.toLowerCase().includes(search.toLowerCase())){
      return val;
  }

  }).map(ncard);





const filterItem = (catItem) => {

  const updatedItems = Data.filter((curElem) => { 

    return curElem.category === catItem; 

  });

  setUsers(updatedItems);

}




  const pageCount = Math.ceil(users.length / usersPerPages);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };


  const inputEvent = (event) => {
    const cart_data = event.target.value;

    setSearch(cart_data);
}






const [showNav , setShowNav] = useState(false);






 const [sortType, setSortType] = useState('price');


 useEffect(() => {

  const sortArray = type => {

    const types = {

      'hprice' : 'price',
      'lowprice' : 'price'

    };

    const sortProperty = types[type];
    const sorted = [...users].sort((a,b) => {



      if (sortType === 'hprice'){

        return b[sortProperty] - a[sortProperty];

      }
     if (sortType === 'lowprice'){

        return a[sortProperty] - b[sortProperty];

      }

 
    });

    setUsers(sorted);

  };

  sortArray(sortType);

 }, [sortType]) ;








 
  return (

<div  className={{style : '100%'}}  className="app" >

<Header  click={() => setShowNav (!showNav)} countCartItems = {cartItems.length} />


<All click={() => setShowNav (!showNav)}/>



<Slider  show={showNav}  cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>





  <DRoute count={Data.length} changeCat = {filterItem} setAll={() => setUsers(Data)}  />
  
<Search

data={inputEvent}

/>


<div className="sort-data mb-3">


<span>Sort By : </span>

  <select onChange={e => setSortType(e.target.value)} >

        <option  > Price </option>

        <option value='hprice' > Highest-Lowest </option>

        <option value='lowprice' > Lowest-Highest </option>

  </select>


</div>




<div className="row">



{displayUsers}



<ReactPaginate

previousLabel={"Previous"}
nextLabel={"Next"}
pageCount={pageCount}
onPageChange={changePage}
containerClassName={"paginationBttns"}
previousLinkClassName={"previousBttn"}
nextLinkClassName={"nextBttn"}
disabledClassName={"paginationDisabled"}
activeClassName={"paginationActive"}

/>

</div>


<Footer></Footer>

</div>

  )


}

export default Home;




