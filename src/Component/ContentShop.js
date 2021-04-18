import Cart from './Cart.js' ;
import {DataShop} from './DataShop.js' ;
import {DataShopCart} from './DataShopCart.js' ;
import {useState ,useEffect } from 'react' ;
const ContentShop = () => {
	
	const addtocart = (item , index) => {
		DataShopCart.push(item) ; 
		console.log(index) ; 
	}
	
	
	return ( 
		<div className="content_shop" >
			<div className="shop" > Shop </div>
			<div className="mainproduct_shop" > 
				{ DataShop.map((item , index) => {
						return (
							<div className="single_product_shop" key={index} >
								<div className="product_img" >
									<img src={item.img} alt=""/>
									<div className="effect_hover" > </div>
								</div>
								<h2 > <a href="#" >{item.name}</a> </h2>
								<div className="product_price" > <ins >{item.price}</ins> <del >{item.price_sale}</del> </div>
								<div className="addtocart" > 
									<span onClick={() =>addtocart(item , index)} >Add to cart</span>
								</div>
							</div>
						) 
				})}
			</div>
			<div className="product_paginat" > 
				<ul > 
					<li style={{marginLeft : "-40px"}}> <a href="#" >&lt;&lt;</a> </li>
					<li > <a href="#" >1</a> </li>
					<li > <a href="#" >2</a> </li>
					<li > <a href="#" >3</a> </li>
					<li > <a href="#" >4</a> </li>
					<li > <a href="#" >5</a> </li>
					<li > <a href="#" >&gt;&gt;</a> </li>
				</ul>
			</div>
		</div>
		

	) ; 
} ; 

export default ContentShop	 ; 