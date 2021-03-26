import './PagesHeader.scss';



const PagesHeader = ()=>{
	return(

		<div className="header-wrapper">
			<div className="header-wrapper-left">
				<h1 className="header-wrapper-left-title">Jaegar Resto</h1>
				<span className="header-wrapper-left-date">Tuesday, 2 Feb 2021</span>
			</div>
			<div className="header-wrapper-right">
				<input type="search" name="search-food" id="search-food" placeholder="Search for food, coffe, etc.." className="header-wrapper-right-input"/>
			</div>
		</div>
	)
}

export default PagesHeader


PagesHeader.defaultProps = {
	Discount: '$' + ' '+ 0,
	SubTotal: '$' + ' ' + '21,03',
}

