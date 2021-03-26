
import './SidebarButton.scss'

const SidebarButton = ({ButtonIcon, dataSet}) =>{

	const hendlerFn = (e)=>{
		const btn = document.querySelectorAll('.sidebar-button')
		btn.forEach(item => {
			item.classList.remove('active')
		})

		e.currentTarget.classList.add('active')
	}

	
	return(
		<button className={`sidebar-button`} onClick={hendlerFn} data-path={dataSet}>
			<span className="sidebar-button-icon">{ButtonIcon}</span>
		</button>
	)
}


export default SidebarButton