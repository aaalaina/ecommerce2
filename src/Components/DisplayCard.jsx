import {Component} from "react";

export default class ProductCard extends Component{
  constructor(props) {
    super(props);
    this.state = {
        idproducts: this.props.products.idproducts,
        plushimg: this.props.products.plushimg,
        plushname: this.props.products.plushname,
        plushdescr: this.props.products.plushdescr ,
        plushprice: this.props.products.plushprice,
        // settings: this.props.settings
    }
}



render() {
        
            return (
                <div className='flex-containter' id={this.state.idproducts}>
                <div className='flex-items'>
                <img className='pimage' src={this.state.plushimg} alt=''/>
                    <p className='pname'>{this.state.plushname}</p>
                    <p className='price'>${this.state.plushprice}</p>
                    <p className='description'>{this.state.plushdescr}</p>
                    <button>Add To Cart</button>
                </div>
            </div>
            )
       
            }

}
