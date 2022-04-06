import '../css/stylesheet.css';
import Productos from './product';
import React from 'react';

class Shop extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
render(){
    return(
    <main>
        <Productos/>
    </main>
    );
}
}




export default Shop;