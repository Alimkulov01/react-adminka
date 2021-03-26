import './GraphLIst.scss'



const GraphList = ({customerImg, customerName, menu, totalPayment, status})=>{
	return(
		<div className="graph-list">
			<div className="graph-list-item">
				<img src={customerImg} alt="" className="graph-list-item__img"/>
				<span className="graph-list-item__name">{customerName}</span>
			</div>
			<div className="graph-list-item">
				<span className="graph-list-item__menu">{menu}</span>
			</div>
			<div className="graph-list-item">
				<span className="graph-list-item__payment">{totalPayment}</span>
			</div>
			<div className="graph-list-item">
				<span className={`graph-list-item-status ${status}`}>{status}</span>
			</div>
		</div>
	)
}


export default GraphList