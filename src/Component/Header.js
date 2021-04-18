	const Header = () => {
	return (
		<header>
			<nav>
				<div className="row-nav" >
					<div className="content-nav-left" > 
						<ul>
							<li> <div><i className="fas fa-user"></i><a href="#">My Account</a></div> </li>
							<li> <div><i className="fas fa-heart"></i><a href="#">Wishlist</a></div> </li>
							<li> <div><i className="fas fa-user"></i><a href="#">My Cart</a></div> </li>
							<li> <div><i className="fas fa-user"></i><a href="#">Checkout</a></div> </li>
							<li> <div><i className="fas fa-user"></i><a href="#">Login</a></div> </li>
						</ul>
					</div>
					
					<div className="content-nav-right">
						<ul>
							<li > <div><span className="fas fa-envelope"></span><i>khanhlatoi1998</i></div> </li>	
							<li > <div><span className="fas fa-phone"></span><i>037768781</i></div> </li>	
						</ul>
					</div>
				</div>	
			</nav>
		</header>

	) ; 
} ; 

export default Header ; 