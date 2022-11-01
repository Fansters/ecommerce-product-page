import React, { useState } from "react";
import { data, images } from "../../constants";

import "./Product.css";

const Product = () => {
	let [index, setIndex] = useState(0);
	let [indexThumb, setIndexThumb] = useState(0);
	const [isOpen, setIsOpen] = useState(false);

	const toggleIsOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<div className='app__product'>
				<div className='app__product-container'>
					<div className='app__product-images'>
						<div className='app__product-img' onClick={toggleIsOpen}>
							<img src={images.bigImgs[index]} alt='Shoe' className='big-image' onClick='' />
						</div>
						<div className='lightbox-modal'>
							{isOpen ? (
								<div className='lightbox-div'>
									<div className='lightbox-big-img-cont'>
										<img src={images.bigImgs[indexThumb]} alt='lightbox shoe' className='lightbox-img' />
										<div className='close-icon' onClick={toggleIsOpen}>
											<svg width='16' height='17' xmlns='http://www.w3.org/2000/svg'>
												<path
													d='m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z'
													fill-rule='evenodd'
												/>
											</svg>
										</div>
										<div className='prev-icon'>
											<svg width='12' height='18' xmlns='http://www.w3.org/2000/svg'>
												<path d='M11 1 3 9l8 8' stroke='#1D2026' stroke-width='3' fill-rule='evenodd' />
											</svg>
										</div>
										<div className='next-icon'>
											<svg width='13' height='18' xmlns='http://www.w3.org/2000/svg'>
												<path d='m2 1 8 8-8 8' stroke='#1D2026' stroke-width='3' fill-rule='evenodd' />
											</svg>
										</div>
									</div>
									<div className='lightbox-thumb-img-cont'>
										{images.smallImgs?.map((item, i) => (
											<div key={i} className={i === indexThumb ? "small-div-image selected-div" : "small-div-image"}>
												<img
													src={item}
													alt='small Shoe'
													key={i}
													className={i === indexThumb ? " selected-image" : ""}
													onClick={() => setIndexThumb(i)}
												/>
											</div>
										))}
									</div>
								</div>
							) : null}
						</div>
						<div className='app__product-thumbnail'>
							{images.smallImgs?.map((item, i) => (
								<div key={i} className={i === index ? "small-div-image selected-div" : "small-div-image"}>
									<img
										src={item}
										alt='small Shoe'
										key={i}
										className={i === index ? " selected-image" : ""}
										onClick={() => setIndex(i)}
									/>
								</div>
							))}
						</div>
					</div>

					<div className='app__product-desc'>
						<p className='app__company-title'>{data.shoes[0].company}</p>
						<h2 className='app__product-title'>{data.shoes[0].title}</h2>
						<p className='app__product-text'>{data.shoes[0].desc}</p>
						<div className='app__prices'>
							<div className='app__product-newPrice'>
								<span className='product-price-now'>${data.shoes[0].price.toFixed(2)} </span>
								<span className='product-sale'>{data.shoes[0].discount}%</span>
							</div>
							<div className='app__product-oldPrice'>
								<p className='product-price-old'>${data.shoes[0].oldPrice.toFixed(2)}</p>
							</div>
						</div>
						<div className='app__product-ctas'>
							<div className='app__quantity'>
								<p className='app__quantity-desc app__flex'>
									<span className='minus app__flex' onClick=''>
										<img src={images.minusIcon} alt='minus' />
									</span>
									<span className='num app__flex'>0</span>
									<span className='plus app__flex' onClick=''>
										<img src={images.plusIcon} alt='plus' />
									</span>
								</p>
							</div>
							<div className='app__buttons'>
								<button type='button' className='add-to-cart app__flex' onClick=''>
									<img src={images.cartIconWhite} alt='cart icon' />
									<p className='btn-text'>Add to cart</p>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Product;
