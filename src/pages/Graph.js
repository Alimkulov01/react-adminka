// import Helmet from 'react-helmet'

import ImgBox from '../assets/images/Image-2.svg'
import GraphCard from '../component/GraphCard/GraphCard'
import GraphList from '../component/GraphLIst/GraphLIst'

import customeIcon1  from '../assets/images/icon/Avatar-1.svg'
import customeIcon2  from '../assets/images/icon/Avatar-2.svg'
import customeIcon3  from '../assets/images/icon/Avatar-3.svg'
import customeIcon4  from '../assets/images/icon/Avatar-4.svg'
import customeIcon5  from '../assets/images/icon/Avatar-5.svg'

const Graph = ({ foodImg }) => {
	return (

		<div className="graph">
			<div className="graph-left">
				<div className="graph-header">
					<h1 className="graph-header-title">Dashboard</h1>
					<span className="graph-header-subtitle">Tuesday 2 Feb, 2021</span>
				</div>

				<div className="graph-left-card-wrapper">
					<GraphCard
						curentImg={
							<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect width="38" height="38" rx="8" fill="#252836" />
								<circle cx="19" cy="19" r="9" stroke="#9288E0" stroke-width="1.8" />
								<path d="M17.459 16.9411C17.459 16.347 17.916 15.9749 18.5362 15.9031V17.9988C18.471 17.9857 18.4122 17.9661 18.3534 17.9465C17.7593 17.7507 17.459 17.4112 17.459 16.9411ZM20.7233 21.015C20.7233 21.6548 20.2337 22.0792 19.5417 22.1379V19.8855C19.5874 19.8986 19.6331 19.9116 19.6722 19.9182C20.4034 20.1206 20.7233 20.4796 20.7233 21.015ZM19.5547 24.3772L19.5482 23.5481C21.337 23.3783 22.473 22.3925 22.473 20.8387C22.473 19.2588 21.4088 18.5929 20.0966 18.3121L19.5417 18.1946V15.9161C20.2337 16.0271 20.6189 16.5494 20.6385 17.0717H22.3098C22.2837 15.7137 21.2195 14.6822 19.5678 14.5059V13.6572H18.5101V14.4994C16.9302 14.643 15.6898 15.5114 15.6898 17.0782C15.6898 18.5602 16.7605 19.3175 17.9748 19.5852L18.5362 19.7093V22.1379C17.7006 22.0269 17.2632 21.5242 17.2305 20.9236H15.52C15.5331 22.1314 16.3426 23.4045 18.5036 23.5611L18.4971 24.3772H19.5547Z" fill="#9288E0" />
							</svg>
						}
						toProtsent={'+32.40%'}
						toFlorIcon={
							<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect width="18" height="18" rx="9" fill="#88E091" fill-opacity="0.24" />
								<path d="M8.99994 14.25C8.75473 14.25 8.55208 14.0704 8.52 13.8375L8.51558 13.7727L8.51583 5.38275L5.45258 8.4139C5.26384 8.60069 4.95716 8.60134 4.7676 8.41535C4.59528 8.24628 4.57906 7.98116 4.71935 7.79402L4.76613 7.74039L8.65645 3.89039L8.66665 3.88095C8.67711 3.87118 8.68801 3.86186 8.69932 3.85302L8.65645 3.89039C8.67519 3.87184 8.6951 3.85513 8.71594 3.84025C8.72903 3.83126 8.74262 3.82253 8.75666 3.81448C8.7879 3.79629 8.82059 3.7822 8.85421 3.7718C8.86606 3.7683 8.87816 3.76504 8.89044 3.76225C8.89982 3.75997 8.90934 3.7581 8.91891 3.75652C8.92928 3.75493 8.93965 3.75355 8.95012 3.75249C8.96063 3.7513 8.97138 3.75057 8.98213 3.75018C8.98809 3.7501 8.994 3.75 8.99994 3.75L9.01602 3.75014C9.02795 3.75054 9.03986 3.75136 9.05174 3.75262L8.99994 3.75C9.02759 3.75 9.05471 3.75229 9.0811 3.75667C9.09313 3.75863 9.1052 3.76112 9.11719 3.76406C9.12671 3.76641 9.13606 3.76901 9.14529 3.77187C9.15626 3.77524 9.16731 3.77909 9.17823 3.78336C9.18951 3.78778 9.20053 3.79257 9.21133 3.79774C9.2196 3.80165 9.22812 3.80604 9.23653 3.81069C9.25231 3.81946 9.26712 3.82875 9.28135 3.83878C9.28358 3.84036 9.28604 3.84212 9.28848 3.84392C9.3101 3.85984 9.32917 3.87633 9.34683 3.89419L13.2338 7.74036C13.4226 7.92713 13.422 8.22933 13.2324 8.41533C13.0601 8.58442 12.791 8.59927 12.6017 8.46025L12.5474 8.41393L9.48475 5.38333L9.48429 13.7727C9.48429 14.0363 9.26744 14.25 8.99994 14.25Z" fill="#50D1AA" />
							</svg>
						}
						price={'$10,243.00'}
						subTitle={'Total Revenue'}
					/>
					<GraphCard
						curentImg={
							<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect width="38" height="38" rx="8" fill="#252836" />
								<path d="M21.9857 9C25.0482 9 27 10.435 27 13.2577V27.3309C27 27.7736 26.8285 28.1982 26.5232 28.5112C26.2179 28.8242 25.8038 29 25.3608 29C25.0965 28.9957 24.8368 28.9291 24.5863 28.7971L18.974 25.6635L13.3844 28.8037C12.7112 29.1624 11.8954 28.9969 11.3843 28.3975L11.2863 28.2719L11.1926 28.1174C11.0704 27.8782 11.0045 27.613 11 27.3309V13.4343C11 10.4993 12.9091 9 16.0143 9H21.9857ZM21.9857 10.4477H16.0143C13.6193 10.4477 12.412 11.3958 12.412 13.4343L12.412 27.3189C12.4127 27.3631 12.4235 27.4065 12.4117 27.3897L12.4492 27.4519C12.5137 27.5421 12.6349 27.5715 12.7196 27.5265L18.3068 24.3883C18.7233 24.1576 19.225 24.1576 19.6435 24.3894L25.2463 27.5173C25.2887 27.5397 25.3355 27.5517 25.372 27.5523C25.4293 27.5523 25.4842 27.529 25.5247 27.4875C25.5652 27.446 25.5879 27.3897 25.5879 27.3309V13.2577C25.5879 11.3579 24.35 10.4477 21.9857 10.4477ZM22.4079 15.3166C22.7978 15.3166 23.1139 15.6407 23.1139 16.0405C23.1139 16.407 22.8483 16.7098 22.5037 16.7578L22.4079 16.7644H15.5404C15.1505 16.7644 14.8344 16.4403 14.8344 16.0405C14.8344 15.674 15.1 15.3712 15.4446 15.3232L15.5404 15.3166H22.4079Z" fill="#FFB572" />
							</svg>

						}
						toProtsent={'-12.40%'}
						toFlorIcon={
							<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect width="18" height="18" rx="9" fill="#FF6471" fill-opacity="0.24" />
								<path d="M9.00006 3.75C9.24527 3.75 9.44792 3.92955 9.48 4.16251L9.48442 4.22727L9.48417 12.6172L12.5474 9.5861C12.7362 9.39931 13.0428 9.39866 13.2324 9.58465C13.4047 9.75372 13.4209 10.0188 13.2807 10.206L13.2339 10.2596L9.34355 14.1096L9.33335 14.119C9.32289 14.1288 9.31199 14.1381 9.30068 14.147L9.34355 14.1096C9.32481 14.1282 9.3049 14.1449 9.28406 14.1597C9.27097 14.1687 9.25738 14.1775 9.24334 14.1855C9.2121 14.2037 9.17941 14.2178 9.14579 14.2282C9.13394 14.2317 9.12184 14.235 9.10956 14.2378C9.10018 14.24 9.09066 14.2419 9.08109 14.2435C9.07072 14.2451 9.06035 14.2465 9.04988 14.2475C9.03937 14.2487 9.02862 14.2494 9.01787 14.2498C9.01191 14.2499 9.006 14.25 9.00006 14.25L8.98398 14.2499C8.97205 14.2495 8.96014 14.2486 8.94826 14.2474L9.00006 14.25C8.97241 14.25 8.94529 14.2477 8.9189 14.2433C8.90687 14.2414 8.8948 14.2389 8.88281 14.2359C8.87329 14.2336 8.86394 14.231 8.85471 14.2281C8.84374 14.2248 8.83269 14.2209 8.82177 14.2166C8.81049 14.2122 8.79947 14.2074 8.78867 14.2023C8.7804 14.1983 8.77188 14.194 8.76347 14.1893C8.74769 14.1805 8.73288 14.1712 8.71865 14.1612C8.71642 14.1596 8.71396 14.1579 8.71152 14.1561C8.6899 14.1402 8.67083 14.1237 8.65317 14.1058L4.76616 10.2596C4.5774 10.0729 4.57803 9.77067 4.76757 9.58467C4.93989 9.41558 5.209 9.40073 5.39832 9.53975L5.45255 9.58607L8.51525 12.6167L8.51571 4.22727C8.51571 3.96368 8.73256 3.75 9.00006 3.75Z" fill="#FF7CA3" />
							</svg>

						}
						price={'23,456'}
						subTitle={'Total Dish Ordered'}
						floor={'floor'}
					/>

					<GraphCard
						curentImg={
							<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect width="38" height="38" rx="8" fill="#252836" />
								<path d="M16.5915 21.4563L16.9113 21.4576C21.5557 21.4981 24.1835 22.4361 24.1835 24.9983C24.1835 27.5061 21.665 28.4736 17.2236 28.5546L16.5915 28.5603C11.7472 28.5603 9.00049 27.6394 9.00049 25.0183C9.00049 22.3937 11.7581 21.4563 16.5915 21.4563ZM16.5915 22.9563C12.5741 22.9563 10.5005 23.6612 10.5005 25.0183C10.5005 26.3667 12.5692 27.0603 16.5915 27.0603C20.6091 27.0603 22.6835 26.3552 22.6835 24.9983C22.6835 23.6505 20.6129 22.9563 16.5915 22.9563ZM24.5872 20.7481C25.1677 20.7876 25.7449 20.8708 26.2996 20.9938C27.4877 21.2301 28.371 21.6713 28.7757 22.5204C29.0745 23.1491 29.0745 23.8806 28.7757 24.5092C28.3733 25.3563 27.4992 25.7942 26.3044 26.04C25.8987 26.1234 25.5021 25.8622 25.4187 25.4565C25.3352 25.0507 25.5965 24.6542 26.0022 24.5707C26.771 24.4126 27.2827 24.1562 27.4209 23.8654C27.5261 23.6441 27.5261 23.3856 27.4213 23.165C27.2822 22.8732 26.7678 22.6163 25.9912 22.4616C25.4938 22.3515 24.991 22.279 24.4854 22.2446C24.0721 22.2165 23.7599 21.8587 23.788 21.4455C23.8161 21.0322 24.1739 20.72 24.5872 20.7481ZM16.5915 9.49976C19.4395 9.49976 21.7265 11.7864 21.7265 14.6338C21.7265 17.482 19.4397 19.7688 16.5915 19.7688C13.7434 19.7688 11.4575 17.4821 11.4575 14.6338C11.4575 11.7862 13.7436 9.49976 16.5915 9.49976ZM23.0202 10.5694C25.2551 10.5694 27.0672 12.3818 27.0672 14.6164C27.0672 16.8516 25.2554 18.6634 23.0202 18.6634C22.606 18.6634 22.2702 18.3276 22.2702 17.9134C22.2702 17.4991 22.606 17.1634 23.0202 17.1634C24.427 17.1634 25.5672 16.0231 25.5672 14.6164C25.5672 13.2102 24.4266 12.0694 23.0202 12.0694C22.606 12.0694 22.2702 11.7336 22.2702 11.3194C22.2702 10.9051 22.606 10.5694 23.0202 10.5694ZM16.5915 10.9998C14.5721 10.9998 12.9575 12.6146 12.9575 14.6338C12.9575 16.6538 14.5719 18.2688 16.5915 18.2688C18.6113 18.2688 20.2265 16.6535 20.2265 14.6338C20.2265 12.6148 18.6111 10.9998 16.5915 10.9998Z" fill="#65B0F6" />
							</svg>

						}
						toProtsent={'+2.40%'}
						toFlorIcon={
							<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect width="18" height="18" rx="9" fill="#88E091" fill-opacity="0.24" />
								<path d="M8.99994 14.25C8.75473 14.25 8.55208 14.0704 8.52 13.8375L8.51558 13.7727L8.51583 5.38275L5.45258 8.4139C5.26384 8.60069 4.95716 8.60134 4.7676 8.41535C4.59528 8.24628 4.57906 7.98116 4.71935 7.79402L4.76613 7.74039L8.65645 3.89039L8.66665 3.88095C8.67711 3.87118 8.68801 3.86186 8.69932 3.85302L8.65645 3.89039C8.67519 3.87184 8.6951 3.85513 8.71594 3.84025C8.72903 3.83126 8.74262 3.82253 8.75666 3.81448C8.7879 3.79629 8.82059 3.7822 8.85421 3.7718C8.86606 3.7683 8.87816 3.76504 8.89044 3.76225C8.89982 3.75997 8.90934 3.7581 8.91891 3.75652C8.92928 3.75493 8.93965 3.75355 8.95012 3.75249C8.96063 3.7513 8.97138 3.75057 8.98213 3.75018C8.98809 3.7501 8.994 3.75 8.99994 3.75L9.01602 3.75014C9.02795 3.75054 9.03986 3.75136 9.05174 3.75262L8.99994 3.75C9.02759 3.75 9.05471 3.75229 9.0811 3.75667C9.09313 3.75863 9.1052 3.76112 9.11719 3.76406C9.12671 3.76641 9.13606 3.76901 9.14529 3.77187C9.15626 3.77524 9.16731 3.77909 9.17823 3.78336C9.18951 3.78778 9.20053 3.79257 9.21133 3.79774C9.2196 3.80165 9.22812 3.80604 9.23653 3.81069C9.25231 3.81946 9.26712 3.82875 9.28135 3.83878C9.28358 3.84036 9.28604 3.84212 9.28848 3.84392C9.3101 3.85984 9.32917 3.87633 9.34683 3.89419L13.2338 7.74036C13.4226 7.92713 13.422 8.22933 13.2324 8.41533C13.0601 8.58442 12.791 8.59927 12.6017 8.46025L12.5474 8.41393L9.48475 5.38333L9.48429 13.7727C9.48429 14.0363 9.26744 14.25 8.99994 14.25Z" fill="#50D1AA" />
							</svg>
						}
						price={'1,234'}
						subTitle={'Total Customer'}
					/>
				</div>

				<div className="graph-left-center">
					<div className="graph-left-center-top">
						<h1 className="graph-left-center-top-title">Order Report</h1>

						<button className="graph-left-center-top-filter">
							<span>
								<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M15.1976 12.2271C16.927 12.2271 18.3329 13.6148 18.3329 15.3219C18.3329 17.028 16.927 18.4167 15.1976 18.4167C13.4683 18.4167 12.0624 17.028 12.0624 15.3219C12.0624 13.6148 13.4683 12.2271 15.1976 12.2271ZM15.1976 13.6787C14.279 13.6787 13.533 14.4151 13.533 15.3219C13.533 16.2277 14.279 16.9651 15.1976 16.9651C16.1162 16.9651 16.8623 16.2277 16.8623 15.3219C16.8623 14.4151 16.1162 13.6787 15.1976 13.6787ZM8.4308 14.5958C8.83667 14.5958 9.16608 14.921 9.16608 15.3216C9.16608 15.7223 8.83667 16.0474 8.4308 16.0474H2.40247C1.9966 16.0474 1.66719 15.7223 1.66719 15.3216C1.66719 14.921 1.9966 14.5958 2.40247 14.5958H8.4308ZM4.80174 2.58337C6.53112 2.58337 7.93698 3.97207 7.93698 5.67818C7.93698 7.38429 6.53112 8.77298 4.80174 8.77298C3.07334 8.77298 1.6665 7.38429 1.6665 5.67818C1.6665 3.97207 3.07334 2.58337 4.80174 2.58337ZM4.80174 4.03497C3.88411 4.03497 3.13707 4.77238 3.13707 5.67818C3.13707 6.58397 3.88411 7.32138 4.80174 7.32138C5.72035 7.32138 6.46642 6.58397 6.46642 5.67818C6.46642 4.77238 5.72035 4.03497 4.80174 4.03497ZM17.5979 4.95257C18.0038 4.95257 18.3332 5.27773 18.3332 5.67837C18.3332 6.07901 18.0038 6.40417 17.5979 6.40417H11.5686C11.1627 6.40417 10.8333 6.07901 10.8333 5.67837C10.8333 5.27773 11.1627 4.95257 11.5686 4.95257H17.5979Z" fill="white" />
								</svg>
							</span>
							<span>Filter Order</span>
						</button>
					</div>
					<div className="graph-left-center-title">
						<span className="graph-left-center-title-item">Customer</span>
						<span className="graph-left-center-title-item">Menu</span>
						<span className="graph-left-center-title-item">Total Payment</span>
						<span className="graph-left-center-title-item">Status</span>
					</div>
					<div className="graph-left-center-list">
						<GraphList
						customerImg={customeIcon1}
						customerName={'Eren Jaegar'}
						menu={'Spicy seasoned seafood noodles '}
						totalPayment={'$125'}
						status={'Completed'}
						/>
						<GraphList
						customerImg={customeIcon2}
						customerName={'Reiner Braunn'}
						menu={'Salted Pasta with mushroom sauce'}
						totalPayment={'$145'}
						status={'Preparing'}
						/>
						<GraphList
						customerImg={customeIcon3}
						customerName={'Levi Ackerman'}
						menu={'Beef dumpling in hot and sour soup'}
						totalPayment={'$105'}
						status={'Pending'}
						/>
						<GraphList
						customerImg={customeIcon4}
						customerName={'Historia Reiss'}
						menu={'Hot spicy fried rice with omelet'}
						totalPayment={'$45'}
						status={'Completed'}
						/>
						<GraphList
						customerImg={customeIcon5}
						customerName={'Hanji Zoe'}
						menu={'Hot spicy fried rice with omelet'}
						totalPayment={'$245'}
						status={'Completed'}
						/>
						<GraphList
						customerImg={customeIcon1}
						customerName={'Eren Jaegar'}
						menu={'Spicy seasoned seafood noodles '}
						totalPayment={'$125'}
						status={'Completed'}
						/>
						<GraphList
						customerImg={customeIcon2}
						customerName={'Reiner Braunn'}
						menu={'Salted Pasta with mushroom sauce'}
						totalPayment={'$145'}
						status={'Preparing'}
						/>
						<GraphList
						customerImg={customeIcon3}
						customerName={'Levi Ackerman'}
						menu={'Beef dumpling in hot and sour soup'}
						totalPayment={'$105'}
						status={'Pending'}
						/>
						<GraphList
						customerImg={customeIcon4}
						customerName={'Historia Reiss'}
						menu={'Hot spicy fried rice with omelet'}
						totalPayment={'$45'}
						status={'Completed'}
						/>
						<GraphList
						customerImg={customeIcon5}
						customerName={'Hanji Zoe'}
						menu={'Hot spicy fried rice with omelet'}
						totalPayment={'$245'}
						status={'Completed'}
						/>
					</div>
				</div>
			</div>
			<div className="graph-right">
				<div className="card-top">
					<div className="card-top-top">
						<h2 className="card-top-top-title">Most Ordered</h2>

						<select name="" className="card-select">
							<option value="">Today</option>
							<option value=""></option>
							<option value=""></option>
							<option value=""></option>
						</select>
					</div>

					<div className="card-top-bottom">
						<div className="card-top-bottom-img">
							<img src={ImgBox} alt="" className="card-top-bottom-img-item" />
						</div>
						<div className="card-top-bottom-name">
							<span className="card-top-bottom-name-tite">Spicy seasoned seafood noodles</span>
							<span className="card-top-bottom-name-subtitle">200 dishes ordered</span>
						</div>
					</div>

					<div className="card-top-bottom">
						<div className="card-top-bottom-img">
							<img src={ImgBox} alt="" className="card-top-bottom-img-item" />
						</div>
						<div className="card-top-bottom-name">
							<span className="card-top-bottom-name-tite">Salted pasta with mushroom sauce</span>
							<span className="card-top-bottom-name-subtitle">120 dishes ordered</span>
						</div>
					</div>

					<div className="card-top-bottom">
						<div className="card-top-bottom-img">
							<img src={ImgBox} alt="" className="card-top-bottom-img-item" />
						</div>
						<div className="card-top-bottom-name">
							<span className="card-top-bottom-name-tite">Beef dumpling in hot and sour soup</span>
							<span className="card-top-bottom-name-subtitle">80 dishes ordered</span>
						</div>
					</div>

					<button className="card-button">View All</button>

				</div>
				<div className="card-bottom">
					<div className="card-bottom-top">
						<h2 className="card-bottom-top-title">Most Ordered</h2>

						<select name="" className="card-select">
							<option value="">Today</option>
							<option value=""></option>
							<option value=""></option>
							<option value=""></option>
						</select>
					</div>

					<div className="card-bottom-bottom">
						<div className="card-bottom-bottom-left">
							<svg width="176" height="176" viewBox="0 0 188 188" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle opacity="0.1" cx="94" cy="94" r="88" fill="#1F1D2B" stroke="white" stroke-width="11.4783" />
								<circle opacity="0.05" cx="94.0003" cy="94.0003" r="76.5217" fill="#1F1D2B" stroke="white" stroke-width="11.4783" />
								<circle opacity="0.1" cx="93.9995" cy="93.9998" r="65.0435" fill="#1F1D2B" stroke="white" stroke-width="11.4783" />
								<circle opacity="0.05" cx="93.9998" cy="94" r="53.5652" fill="#1F1D2B" stroke="white" stroke-width="11.4783" />
								<path d="M6 94C6 142.601 45.3989 182 94 182C142.601 182 182 142.601 182 94C182 45.3989 142.601 6 94 6" stroke="#65B0F6" stroke-width="11.4783" stroke-linecap="round" />
								<path d="M94 170.522C136.262 170.522 170.522 136.262 170.522 94.0003C170.522 51.7385 136.262 17.4785 94 17.4785" stroke="#FFB572" stroke-width="11.4783" stroke-linecap="round" />
								<path d="M94.439 28.4045C105.781 28.4045 116.927 31.3705 126.769 37.0082C136.611 42.6459 144.807 50.7593 150.545 60.5432C156.283 70.3271 159.363 81.4414 159.479 92.7832C159.595 104.125 156.743 115.3 151.206 125.199C145.669 135.098 137.64 143.377 127.916 149.215C118.191 155.053 107.109 158.246 95.7686 158.478C84.4286 158.71 73.2251 155.972 63.2698 150.537C53.3146 145.102 44.9538 137.157 39.017 127.493" stroke="#FF7CA3" stroke-width="11.4783" stroke-linecap="round" />
							</svg>
						</div>
						<div className="card-bottom-bottom-right">
							<div className="card-bottom-bottom-right-item">
								<span className="card-bottom-bottom-right-item-title">Dine In</span>
								<span className="card-bottom-bottom-right-item-subtitle">200 customers</span>
							</div>
							<div className="card-bottom-bottom-right-item">
								<span className="card-bottom-bottom-right-item-title">To Go</span>
								<span className="card-bottom-bottom-right-item-subtitle">122 customers</span>
							</div>
							<div className="card-bottom-bottom-right-item">
								<span className="card-bottom-bottom-right-item-title">Delivery</span>
								<span className="card-bottom-bottom-right-item-subtitle">264 customers</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Graph