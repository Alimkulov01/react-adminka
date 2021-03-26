import FoodCard from "../component/foodCard/FoodCard";
import Order from "../container/Order";
import './pages.scss';
import { Link } from "react"
import PagesHeader from "../container/pagesHeader/PagesHeader";

// import ImgBox2 from '../../assets/images/Image-2.svg'
// import ImgBox3 from '../../assets/images/Image-3.svg'
// import ImgBox4 from '../../assets/images/Image-4.png'
// import ImgBox5 from '../../assets/images/Image-5.svg'
// import ImgBox6 from '../../assets/images/Image-6.svg'

const Home = () => {

	const hendlerFn = (e)=>{
		const btn = document.querySelectorAll('.home-bar__button')
		btn.forEach(item => {
			item.classList.remove('active')
		})

		e.currentTarget.classList.add('active')
	}
	return (

		<div className="home">


			<div className="home-left">
				<div className="home-title">
					<PagesHeader/>
				</div>
				<nav className="home-bar">
					<button onClick={hendlerFn} className="home-bar__button active">Hot Dishes
					<div className="befor-line"></div></button>
					<button onClick={hendlerFn} className="home-bar__button">Cold Dishes
					<div className="befor-line"></div></button>
					<button onClick={hendlerFn} className="home-bar__button">Soup
					<div className="befor-line"></div></button>
					<button onClick={hendlerFn} className="home-bar__button">Grill
					<div className="befor-line"></div></button>
					<button onClick={hendlerFn} className="home-bar__button">Appetizer
					<div className="befor-line"></div></button>
					<button onClick={hendlerFn} className="home-bar__button">Dessert
					<div className="befor-line"></div></button>
					
				</nav>
				<div className="home-left-top">
					<h2 className="home-left-top-title">Choose Dishes</h2>


					<select name="dine-in" id="dine" className="home-left-top-right">
						<option value="DineIn">Dine In</option>
						<option value="" className="option">Expensive</option>
						<option value="">Average</option>
						<option value="">Cheap</option>
					</select>

				</div>

				<div className="chose-dishes-wrapper">
					<FoodCard
						foodName={'Spicy seasoned seafood noodles'}
						foodPrice={'$ 2.29'}
						foodValue={'20 Bowls available'}
					/>
					<FoodCard
						foodName={'Salted Pasta with mushroom sauce'}
						foodPrice={'$ 2.69'}
						foodValue={'11 Bowls available'}
					/>
					<FoodCard
						foodName={'Beef dumpling in hot and sour soup'}
						foodPrice={'$ 2.99'}
						foodValue={'16 Bowls available'}
					/>
					<FoodCard
						foodName={'Healthy noodle with spinach leaf'}
						foodPrice={'$ 3.29'}
						foodValue={'22 Bowls available'}
					/>
					<FoodCard
						foodName={'Hot spicy fried rice with omelet'}
						foodPrice={'$ 3.49'}
						foodValue={'20 Bowls available'}
					/>
					<FoodCard
						foodName={'Spicy instant noodle with special omelette'}
						foodPrice={'$ 3.59'}
						foodValue={'17 Bowls available'}
					/>
					<FoodCard

					/>
					<FoodCard

					/>
					<FoodCard

					/>
					<FoodCard

					/>
					<FoodCard

					/>
					<FoodCard

					/>
					<FoodCard

					/>
					<FoodCard

					/>
					<FoodCard

					/>
					<FoodCard

					/>
				</div>
			</div>
			<div className="order-right">
				<Order />
			</div>
		</div>

	)
}


export default Home;