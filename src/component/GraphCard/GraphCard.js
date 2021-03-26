import './GraphCard.scss'

const GraphCard = ({curentImg,toFlorIcon, price, subTitle,toProtsent,floor})=>{
	return(
		<div className="graph-card">
			<div className="graph-card-top">
				<div className="graph-card-top-curent-icon">
					{curentImg}
				</div>
				<div className={`graph-card-top-pratcent ${floor}`}>
					{toProtsent}
				</div>
				<div className="graph-card-top-to-go">
					{toFlorIcon}
				</div>
			</div>

			<span className="graph-card-price">{price}</span>
			<span className="graph-card-subtitle">{subTitle}</span>

		</div>
	)
}

export default GraphCard