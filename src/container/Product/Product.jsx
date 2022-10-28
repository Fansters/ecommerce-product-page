import React, { useState } from "react";
import { data, images } from "../../constants";

import "./Product.css";

const Product = () => {
	const [index, setIndex] = useState(0);
	const imgs = [images.product1, images.product2, images.product3, images.product4];
	const smallImgs = [images.product1T, images.product2T, images.product3T, images.product4T];

	return (
		<div className='app__product app__flex'>
			<div className='app__product-container app__flex'>
				<div className='app__product-images'>
					<div className='app__product-img'>
						<img src={imgs[index]} alt='Shoe' onClick='' />
					</div>
					<div className='app__product-thumbnail'>
						{smallImgs?.map((item, i) => (
							<img
								src={item}
								alt='small Shoe'
								// className={i === index ? "small-image selected-image" : "small-image"}
								onClick={() => setIndex(i)}
							/>
						))}
					</div>
				</div>
				<div className='app__product-desc'>
					<p className='app__company-title'>{data.shoes[0].company}</p>
					<h2 className='app__product-title'>{data.shoes[0].title}</h2>
					<p className='app__product-text'>{data.shoes[0].desc}</p>
					<div className='app__product-newPrice'>
						<span className='product-price-now'>${data.shoes[0].price} </span>
						<span className='product-sale'>{data.shoes[0].discount}%</span>
					</div>
					<div className='app__product-oldPrice'>
						<p className='product-price-old'>${data.shoes[0].oldPrice}</p>
					</div>
					<div className='app__product-ctas'>
						<div className='app__quantity'>
							<p className='app__quantity-desc'>
								<span className='minus' onClick=''>
									<img src={images.minusIcon} alt='minus' />
								</span>
								<span className='num'>2</span>
								<span className='plus' onClick=''>
									<img src={images.plusIcon} alt='plus' />
								</span>
							</p>
						</div>
						<div className='app__buttons'>
							<button type='button' className='add-to-cart' onClick=''>
								Add to cart
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
