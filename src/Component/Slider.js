import  {DataSlider} from './DataSlider' ; 
import {useState ,useEffect } from 'react' ;	


const Slider = (props) => {
	
	const [count , setcount] = useState(0) ;
	const length = DataSlider.length ; 

	const nextBtn = () => {
		setcount(count === length - 1 ? 0 : count + 1 ) ;
	}
	const prevBtn = () => {
		setcount(count === 0 ? length - 1 : count - 1 ) ; 
	}
	
	useEffect(() => {
		var timeslider = setTimeout(nextBtn , 9000000000) ;
	} , [count])
	
	var height_slider = window.innerWidth ; 
	
	console.log(height_slider) ; 
	return (
		<div className="Slider"  > 
			<div className="top-slider" style={height_slider > 540 ? {height : `${height_slider/4-2}px`} : {height : `${height_slider/4+11}px`}}>
				<button  onClick={prevBtn} className="controlSider" id="btnLeft" type="button" >
					<span className="fas fa-chevron-circle-left" id="chevron-left" > </span>
				</button>
				<div className="block-slide" >	
					<ul className="block-img" >
						{DataSlider.map((item , index) => {
							return (	 
									<li key={index} className={index === count ? "slide-active" : "slide"} >
										{ index === count &&
										( <>
										<img src={item.img} atl=""/>
										<div className="caption-img">
											<h2 className="caption title">
												{item.name} <span className="content-green"> <strong> {item.title}</strong></span>
											</h2>
											<h4 className="Caption Subtitle">{item.subtitle}</h4>
											<a className="Caption button-radius" href="#"><span className="fas fa-chevron-circle-right fa-lg" ></span><p>Shop now</p></a>
										</div> </>)}
									</li> 
							
							)
						})} 
					</ul >
				</div>
				<button onClick={nextBtn} className="controlSider"  id={"btnRight"} type="button" >
					<span className="fas fa-chevron-circle-right" id="chevron-right"> </span>
				</button>
			</div>
			<div className="bxslider" >
				 <span onClick={() => setcount(0)} className="fas fa-circle " id={count===0 ? "green" : "gray"}></span>
				 <span onClick={() => setcount(1)}className="fas fa-circle " id={count===1 ? "green" : "gray"}></span>
				 <span onClick={() => setcount(2)}className="fas fa-circle " id={count===2 ? "green" : "gray"}></span>
				 <span onClick={() => setcount(3)}className="fas fa-circle " id={count===3 ? "green" : "gray"}></span>
			</div>
		</div>	
	) ; 
} ; 

export default Slider ; 