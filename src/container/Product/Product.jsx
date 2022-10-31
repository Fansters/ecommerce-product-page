import React, { useState, useRef } from "react";
import { data, images } from "../../constants";

import "./Product.css";

const Product = () => {
	const modalRef = useRef();
	let [index, setIndex] = useState(0);
	// const [slideIndex, setSlideIndex] = useState(1)

	function openModal() {
		modalRef.style.display = "block";
	}
	// Close the Modal
	async function closeModal() {
		document.getElementById("myModal").style.display = "none";
	}
	showSlides(index);

	// Next/previous controls
	function plusSlides(n) {
		showSlides((index += n));
	}
	function showSlides(n) {
		var i;
		var slides = document.getElementsByClassName("mySlides");
		var dots = document.getElementsByClassName("demo");
		if (n > slides.length) {
			index = 1;
		}
		if (n < 1) {
			index = slides.length;
		}
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
		}
		// slides[index - 1].style.display = "block";
		// dots[index - 1].className += " active";
		// captionText.innerHTML = dots[index - 1].alt;
	}
	return (
		<>
			<div className='app__product'>
				<div className='app__product-container'>
					<div className='app__product-images'>
						<div className='app__product-img' onClick={() => console.log(openModal())}>
							<img src={images.bigImgs[index]} alt='Shoe' className='big-image' onClick={openModal()} />
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
					{/* Lightbox pics */}
					<div ref={modalRef} id='myModal' className='app__modal'>
						<span className='close cursor' onclick={closeModal()}>
							&times;
						</span>
						<div className='modal-content'>
							<div className='mySlides'>
								<img src={images.bigImgs[index]} alt='shoes' onClick={openModal()} />
							</div>
							{/* <!-- Next/previous controls --> */}
							<a href='/' className='prev' onclick={plusSlides(1)}>
								&#10094;
							</a>
							<a href='/' className='next' onclick={plusSlides(1)}>
								&#10095;
							</a>
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
			<footer>
				<div className='attribution'>
					Coded by <br />
					<a href='https://www.frontendmentor.io/profile/Fansters'>Fansters</a>
				</div>
			</footer>
		</>
	);
};

export default Product;
