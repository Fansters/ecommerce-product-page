import React, { useState } from "react";
import ImageModal from "../../components/ImageModal/ImageModal";
import { data, images } from "../../constants";

import "./Product.css";

const Product = () => {
	let [index, setIndex] = useState(0);
	const [isOpen, setIsOpen] = useState(false);

	const toggleIsOpen = () => {
		setIsOpen(!isOpen);
	};

	const length = images.smallImgs.length;

	const nextSlide = () => {
		setIndex(index === length - 1 ? 0 : index + 1);
	};
	const prevSlide = () => {
		setIndex(index === 0 ? length - 1 : index - 1);
	};

	if (!Array.isArray(images.smallImgs) || images.smallImgs.length <= 0) {
		return null;
	}
	return (
		<>
			<div className='app__product'>
				<div className='app__product-container'>
					<div className='app__product-images'>
						{/* mobile imgs */}
						<div className='app__product-img mobile'>
							<img src={images.bigImgs[index]} alt='Shoe' className='big-image' />
							<div className='prev-icon' onClick={prevSlide}>
								<svg width='12' height='18' xmlns='http://www.w3.org/2000/svg'>
									<path d='M11 1 3 9l8 8' stroke='#1D2026' stroke-width='3' fill='none' fill-rule='evenodd' />
								</svg>
							</div>
							<div className='next-icon' onClick={nextSlide}>
								<svg width='13' height='18' xmlns='http://www.w3.org/2000/svg'>
									<path d='m2 1 8 8-8 8' stroke='#1D2026' stroke-width='3' fill='none' fill-rule='evenodd' />
								</svg>
							</div>
						</div>
						{/* end of mobile img */}

						{/* desktop imgs */}
						<div className='app__product-img desktop' onClick={toggleIsOpen}>
							<img src={images.bigImgs[index]} alt='Shoe' className='big-image' />
						</div>
						{/* lightbox modal */}
						<ImageModal closeFunc={toggleIsOpen} toggleSwitch={isOpen} modalImg={index} indexSetting={setIndex} />
						{/* thumnbnail imgs */}
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
						{/* end of thumbnail imgs */}
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
