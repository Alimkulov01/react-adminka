import './SetingButton.scss';



const SettingButton =({butotnIcon, buttonName, buttonSubTitle,activeClass})=>{

	return(
		<div className={`settings-button ${activeClass}`}>
			<span className="settings-button-icon">{butotnIcon}</span>
			<div className="settings-button-left">
				<span className="settings-button-left__name">{buttonName}</span>
				<span className="settings-button-left__subtitle">{buttonSubTitle}</span>
			</div>
		</div>
	)

}


export default SettingButton