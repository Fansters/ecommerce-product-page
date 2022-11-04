import React, { useState } from "react";
import { images } from "../../constants";

import "./ImageModal.css";
const ImageModal = (props) => {
	const [index, setIndex] = useState(0);
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
		<div className='lightbox-modal'>
			{props.toggleSwitch ? (
				<div className='lightbox-div'>
					<div className='lightbox-big-img-cont'>
						<img src={images.bigImgs[index]} alt='lightbox shoe' className='lightbox-img' />
						<div className='close-icon' onClick={props.closeFunc}>
							<svg width='16' height='17' xmlns='http://www.w3.org/2000/svg'>
								<path
									d='m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z'
									fill-rule='evenodd'
								/>
							</svg>
						</div>
						<div className='prev-icon' onClick={prevSlide}>
							<svg width='12' height='18' xmlns='http://www.w3.org/2000/svg'>
								<path d='M11 1 3 9l8 8' stroke='#1D2026' stroke-width='3' fill-rule='evenodd' />
							</svg>
						</div>
						<div className='next-icon' onClick={nextSlide}>
							<svg width='13' height='18' xmlns='http://www.w3.org/2000/svg'>
								<path d='m2 1 8 8-8 8' stroke='#1D2026' stroke-width='3' fill-rule='evenodd' />
							</svg>
						</div>
					</div>
					<div className='lightbox-thumb-img-cont'>
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
			) : null}
		</div>
	);
};

export default ImageModal;
