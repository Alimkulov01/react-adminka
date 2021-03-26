
import ImgBox from '../../assets/images/Image-2.svg'

import './FoodCard.scss';

const FoodCard = ({ cardImg, foodName, foodPrice, foodValue, editeCard }) => {

	const hendlerFn = (e)=>{

		e.currentTarget.classList.toggle('active')
	}
	return (

		<div className="food-wrapper">

			<div className={`food-wrapper-img ${editeCard}`}>
				<img src={cardImg} alt="" className={`food-wrapper-img__content`} />
			</div>

			<span className="food-wrapper-name">{foodName}</span>

			<span className="food-wrapper-price">{foodPrice}</span>
			<span className="food-wrapper-value">{foodValue}</span>

			<button className="food-wrapper-add" onClick={hendlerFn}>+</button>
		</div>


	)
}

export default FoodCard



FoodCard.defaultProps = {

	cardImg: ImgBox,
	editeCard: 'edite-card',
	foodName: 'Spicy seasoned seafood noodles',
	foodPrice: '$ 2.29',
	foodValue: '20 Bowls available',
}