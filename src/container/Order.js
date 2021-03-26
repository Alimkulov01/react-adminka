import OrderLis from '../component/OrderLis/OrderLis';
import './container.scss';

const Order = ({ Discount, SubTotal }) => {

	const hendlerFn = () => {
		const pym = document.querySelector('.payment');
		pym.classList.add('active-pym')
	}

	const cancelBtn = () => {
		const pym = document.querySelector('.payment');
		pym.classList.remove('active-pym')
	}

	const cardItem = (e) => {
		const btn = document.querySelectorAll('.payment-center-card-item')
		btn.forEach(item => {
			item.classList.remove('active-item')
		})

		e.currentTarget.classList.add('active-item');
	}
	return (
		<div className="order-wrapper">
			<div className="order-top">
				<h3 className="order-top-title">
					Orders #34562
				</h3>

				<div className="order-top-radio">
					<label htmlFor="" id="radio-order" className="order-top-radio-button active-radio" >Dine In</label >
					<label htmlFor="" id="radio-order" className="order-top-radio-button" >To Go</label>
					<label htmlFor="" id="radio-order" className="order-top-radio-button" >Delivery</label>
					<input type="radio" name="order-radio-change" id="radio-order" className="input-radio" />
					<input type="radio" name="order-radio-change" id="radio-order" className="input-radio" />
					<input type="radio" name="order-radio-change" id="radio-order" className="input-radio" />

				</div>
			</div>
			<div className="order-center">
				<div className="order-center-top">
					<span className="order-center-top__title">Item</span>
					<span className="order-center-top__title">Qty</span>
					<span className="order-center-top__title">Price</span>
				</div>
				<div className="order-center-bottom">
					<OrderLis
					/>
					<OrderLis
					/>
					<OrderLis
					/>
					<OrderLis
					/>
					<OrderLis
					/>
					<OrderLis
					/>
					<OrderLis
					/>
					<OrderLis
					/>
					<OrderLis
					/>
				</div>
			</div>
			<div className="order-bottom">
				<div className="order-bottom-price">
					<span className="order-bottom-price__span">Discount</span>
					<span className="order-bottom-price__caunt">{Discount}</span>
				</div>
				<div className="order-bottom-price">
					<span className="order-bottom-price__span">Sub total</span>
					<span className="order-bottom-price__caunt">{SubTotal}</span>
				</div>
				<div className="order-bottom-bottom">
					<button className="order-bottom-bottom__button" onClick={hendlerFn}>
						Continue to Payment
					</button>
				</div>
			</div>

			<div className="payment">
				<div className="payment-top">
					<h1 className="payment-top__title">Payment</h1>
					<span className="payment-top__subtitle">3 payment method available</span>
				</div>

				<div className="payment-center">
					<h3 className="payment-center-title">Payment Method</h3>

					<div className="payment-center-card">
						<div className="payment-center-card-item" onClick={cardItem}>
							<span className="payment-center-card-item-chek">
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M10.8635 6.40362L7.81816 10.4036C7.69283 10.5683 7.49883 10.6656 7.29216 10.667H7.2875C7.08283 10.667 6.8895 10.5723 6.76283 10.411L5.1415 8.33962C4.91483 8.05028 4.9655 7.63095 5.2555 7.40428C5.54483 7.17695 5.96483 7.22762 6.1915 7.51828L7.28016 8.90895L9.80283 5.59628C10.0255 5.30362 10.4435 5.24628 10.7375 5.46962C11.0302 5.69295 11.0868 6.11095 10.8635 6.40362ZM8.00016 1.33362C4.31816 1.33362 1.3335 4.31828 1.3335 8.00028C1.3335 11.6816 4.31816 14.667 8.00016 14.667C11.6822 14.667 14.6668 11.6816 14.6668 8.00028C14.6668 4.31828 11.6822 1.33362 8.00016 1.33362Z" />
									<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="1" y="1" width="14" height="14">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M10.8635 6.40362L7.81816 10.4036C7.69283 10.5683 7.49883 10.6656 7.29216 10.667H7.2875C7.08283 10.667 6.8895 10.5723 6.76283 10.411L5.1415 8.33962C4.91483 8.05028 4.9655 7.63095 5.2555 7.40428C5.54483 7.17695 5.96483 7.22762 6.1915 7.51828L7.28016 8.90895L9.80283 5.59628C10.0255 5.30362 10.4435 5.24628 10.7375 5.46962C11.0302 5.69295 11.0868 6.11095 10.8635 6.40362ZM8.00016 1.33362C4.31816 1.33362 1.3335 4.31828 1.3335 8.00028C1.3335 11.6816 4.31816 14.667 8.00016 14.667C11.6822 14.667 14.6668 11.6816 14.6668 8.00028C14.6668 4.31828 11.6822 1.33362 8.00016 1.33362Z" fill="white" />
									</mask>
									<g mask="url(#mask0)">
										<rect width="16" height="16" fill="#EA7C69" />
									</g>
								</svg>
							</span>
							<div className="payment-center-card-item__img">
								<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M1.75 9C1.75 6.37665 3.87665 4.25 6.5 4.25H18.5C21.1234 4.25 23.25 6.37665 23.25 9V15C23.25 17.6234 21.1234 19.75 18.5 19.75H6.5C3.87665 19.75 1.75 17.6234 1.75 15V9ZM3.33697 8.25H21.663C21.3245 6.81665 20.0368 5.75 18.5 5.75H6.5C4.96321 5.75 3.67555 6.81665 3.33697 8.25ZM21.75 9.75H3.25V15C3.25 16.7949 4.70507 18.25 6.5 18.25H18.5C20.2949 18.25 21.75 16.7949 21.75 15V9.75ZM13.75 15C13.75 14.5858 14.0858 14.25 14.5 14.25H18.5C18.9142 14.25 19.25 14.5858 19.25 15C19.25 15.4142 18.9142 15.75 18.5 15.75H14.5C14.0858 15.75 13.75 15.4142 13.75 15Z" />
								</svg>
							</div>
							<span className="payment-center-card-item__name">Credit Card</span>
						</div>

						<div className="payment-center-card-item" onClick={cardItem}>
							<span className="payment-center-card-item-chek">
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M10.8635 6.40362L7.81816 10.4036C7.69283 10.5683 7.49883 10.6656 7.29216 10.667H7.2875C7.08283 10.667 6.8895 10.5723 6.76283 10.411L5.1415 8.33962C4.91483 8.05028 4.9655 7.63095 5.2555 7.40428C5.54483 7.17695 5.96483 7.22762 6.1915 7.51828L7.28016 8.90895L9.80283 5.59628C10.0255 5.30362 10.4435 5.24628 10.7375 5.46962C11.0302 5.69295 11.0868 6.11095 10.8635 6.40362ZM8.00016 1.33362C4.31816 1.33362 1.3335 4.31828 1.3335 8.00028C1.3335 11.6816 4.31816 14.667 8.00016 14.667C11.6822 14.667 14.6668 11.6816 14.6668 8.00028C14.6668 4.31828 11.6822 1.33362 8.00016 1.33362Z" fill="#EA7C69" />
									<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="1" y="1" width="14" height="14">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M10.8635 6.40362L7.81816 10.4036C7.69283 10.5683 7.49883 10.6656 7.29216 10.667H7.2875C7.08283 10.667 6.8895 10.5723 6.76283 10.411L5.1415 8.33962C4.91483 8.05028 4.9655 7.63095 5.2555 7.40428C5.54483 7.17695 5.96483 7.22762 6.1915 7.51828L7.28016 8.90895L9.80283 5.59628C10.0255 5.30362 10.4435 5.24628 10.7375 5.46962C11.0302 5.69295 11.0868 6.11095 10.8635 6.40362ZM8.00016 1.33362C4.31816 1.33362 1.3335 4.31828 1.3335 8.00028C1.3335 11.6816 4.31816 14.667 8.00016 14.667C11.6822 14.667 14.6668 11.6816 14.6668 8.00028C14.6668 4.31828 11.6822 1.33362 8.00016 1.33362Z" fill="white" />
									</mask>
									<g mask="url(#mask0)">

									</g>
								</svg>
							</span>
							<span className="payment-center-card-item__img paypal">
								<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M18 7.2C19.7 8.2 20.5 10 20.5 12C20.5 14.5 18 16.5 15.5 16.5H12.9L12.3 20.1C12.2532 20.3293 12.1276 20.5349 11.9449 20.6811C11.7621 20.8272 11.5339 20.9047 11.3 20.9H8.6C8.52501 20.9015 8.45064 20.8861 8.38239 20.855C8.31415 20.8239 8.25378 20.7778 8.20577 20.7202C8.15775 20.6626 8.12331 20.5949 8.105 20.5222C8.08669 20.4494 8.08498 20.3735 8.1 20.3L8.3 18.9M10.5 13H13C15.5 13 18 10.5 18 8C18 5 16.1 3 13 3H7.5C7 3 6.5 3.5 6.5 4L4.5 18C4.5 18.5 5 19 5.5 19H8.3L9.5 14C9.6 13.4 9.9 13 10.5 13Z" stroke="#ABBBC2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
								</svg>

							</span>
							<span className="payment-center-card-item__name">Paypal</span>
						</div>

						<div className="payment-center-card-item" onClick={cardItem}>
							<span className="payment-center-card-item-chek">
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M10.8635 6.40362L7.81816 10.4036C7.69283 10.5683 7.49883 10.6656 7.29216 10.667H7.2875C7.08283 10.667 6.8895 10.5723 6.76283 10.411L5.1415 8.33962C4.91483 8.05028 4.9655 7.63095 5.2555 7.40428C5.54483 7.17695 5.96483 7.22762 6.1915 7.51828L7.28016 8.90895L9.80283 5.59628C10.0255 5.30362 10.4435 5.24628 10.7375 5.46962C11.0302 5.69295 11.0868 6.11095 10.8635 6.40362ZM8.00016 1.33362C4.31816 1.33362 1.3335 4.31828 1.3335 8.00028C1.3335 11.6816 4.31816 14.667 8.00016 14.667C11.6822 14.667 14.6668 11.6816 14.6668 8.00028C14.6668 4.31828 11.6822 1.33362 8.00016 1.33362Z" fill="#EA7C69" />
									<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="1" y="1" width="14" height="14">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M10.8635 6.40362L7.81816 10.4036C7.69283 10.5683 7.49883 10.6656 7.29216 10.667H7.2875C7.08283 10.667 6.8895 10.5723 6.76283 10.411L5.1415 8.33962C4.91483 8.05028 4.9655 7.63095 5.2555 7.40428C5.54483 7.17695 5.96483 7.22762 6.1915 7.51828L7.28016 8.90895L9.80283 5.59628C10.0255 5.30362 10.4435 5.24628 10.7375 5.46962C11.0302 5.69295 11.0868 6.11095 10.8635 6.40362ZM8.00016 1.33362C4.31816 1.33362 1.3335 4.31828 1.3335 8.00028C1.3335 11.6816 4.31816 14.667 8.00016 14.667C11.6822 14.667 14.6668 11.6816 14.6668 8.00028C14.6668 4.31828 11.6822 1.33362 8.00016 1.33362Z" fill="white" />
									</mask>
									<g mask="url(#mask0)">

									</g>
								</svg>
							</span>
							<span className="payment-center-card-item__img">
								<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M16.688 2.5C19.8978 2.5 22.5 5.16116 22.5 8.44374V15.5563C22.5 18.8388 19.8978 21.5 16.688 21.5H8.31204C5.10219 21.5 2.5 18.8388 2.5 15.5563V8.44374C2.5 5.16116 5.10219 2.5 8.31204 2.5H16.688ZM16.688 3.98651H8.31204C5.90498 3.98651 3.95358 5.98213 3.95358 8.44374V15.5563C3.95358 18.0179 5.90498 20.0135 8.31204 20.0135H16.688C19.095 20.0135 21.0464 18.0179 21.0464 15.5563L21.046 15.279L17.8499 15.2798C16.0084 15.2787 14.5159 13.7531 14.5147 11.8695C14.5147 10.0491 15.9101 8.56244 17.6673 8.46431L17.8504 8.45916L21.046 8.459L21.0464 8.44374C21.0464 6.05454 19.2081 4.10431 16.8991 3.99165L16.688 3.98651ZM21.046 9.945L17.8508 9.94567C16.8109 9.94632 15.9683 10.8074 15.9683 11.869C15.9689 12.8811 16.7329 13.7102 17.7033 13.7874L17.8504 13.7933L21.046 13.793V9.945ZM18.2942 11.0652C18.6956 11.0652 19.021 11.3979 19.021 11.8084C19.021 12.1847 18.7475 12.4957 18.3928 12.5449L18.2942 12.5517H17.9921C17.5907 12.5517 17.2653 12.2189 17.2653 11.8084C17.2653 11.4322 17.5388 11.1212 17.8935 11.072L17.9921 11.0652H18.2942ZM12.8539 6.99736C13.2553 6.99736 13.5807 7.33013 13.5807 7.74062C13.5807 8.1169 13.3073 8.42788 12.9525 8.47709L12.8539 8.48388H7.62203C7.22063 8.48388 6.89524 8.15111 6.89524 7.74062C6.89524 7.36434 7.16866 7.05337 7.5234 7.00415L7.62203 6.99736H12.8539Z" />
								</svg>
							</span>
							<span className="payment-center-card-item__name">Cash</span>
						</div>

					</div>

					<form className="form">
						<div className="form-item">
							<label htmlFor="cardholder-name" className="form-item-label">Cardholder Name</label>
							<input type="text"  id="cardholder-name" className="form-item-input" placeholder="Levi Ackerman"/>
						</div>
						<div className="form-item">
							<label className="form-item-label" htmlFor="card-number">Card Number</label>
							<input type="text" id="card-number" className="form-item-input" placeholder="2564 1421 0897 1244"/>
						</div>

						<div className="form-item cvvs">
							<div className="form-item-inner">
								<label className="form-item-label" htmlFor="expiration-date">Expiration Date</label>
								<input type="text" id="expiration-date" className="form-item-input" placeholder="02/2022"/>
							</div> 
							<div className="form-item-inner">
								<label className="form-item-label" htmlFor="cvv">CVV</label>
								<input type="password" id="cvv" className="form-item-input" placeholder="***"/>
							</div>
						</div>

					</form>

					<div className="payment-center-bottom">
						<select  className="payment-center-bottom-select">
							<option value="">Dine In</option>
							<option value="">Expensive</option>
							<option value="">Average</option>
							<option value="">Cheep</option>
						</select>
						<input type="text" placeholder="140" className="payment-center-bottom-input"/>
					</div>

				</div>

				<div className="payment-bottom">
					<button className="payment-bottom-button cancl" onClick={cancelBtn}>Cancel</button>
					<button className="payment-bottom-button">Confirm Payment</button>
				</div>
			</div>
		</div>
	)
}

Order.defaultProps = {
	Discount: '$' + ' ' + 0,
	SubTotal: '$' + ' ' + '21,03',
}


export default Order;