import React from "react";
import { motion } from "framer-motion";

import { useStateContext } from "../../context/StateContext";
import { images } from "../../constants";

import "./ImageModal.css";
const ImageModal = (props) => {
	const length = images.smallImgs.length;
	const { index, setIndex } = useStateContext();

	const nextSlide = () => {
		setIndex(index === length - 1 ? 0 : index + 1);
	};
	const prevSlide = () => {
		setIndex(index === 0 ? length - 1 : index - 1);
	};
	if (!Array.isArray(images.smallImgs) || images.smallImgs.length <= 0) {
		return null;
	}

	const img = {
		visible: { opacity: 1 },
		hidden: { opacity: 0 },
	};
	const itemPrev = {
		visible: { opacity: 1, y: "-50%", x: 0, transition: { duration: 0.3, delay: 0.2 } },
		hidden: { opacity: 0, y: "-50", x: -30 },
	};
	const itemNext = {
		visible: { opacity: 1, y: "-50%", x: 0, transition: { duration: 0.3, delay: 0.2 } },
		hidden: { opacity: 0, y: "-50", x: 30 },
	};

	return (
		<div className='lightbox-modal'>
			{props.toggleSwitch ? (
				<motion.div
					initial='hidden'
					animate='visible'
					// transition={{ duration: 0.4 }}
					variants={img}
					className='lightbox-div'
				>
					<div className='lightbox-big-img-cont noselect'>
						<img src={images.bigImgs[setIndex]} alt='lightbox shoe' className='lightbox-img noselect' />
						<div className='close-icon' onClick={props.closeFunc}>
							<button type='button'>
								<svg width='17' height='19' xmlns='http://www.w3.org/2000/svg'>
									<path
										d='m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z'
										fill-rule='evenodd'
									/>
								</svg>
							</button>
						</div>
						<motion.div variants={itemPrev} className='prev-icon' onClick={prevSlide}>
							<motion.button whileTap={{ scale: 0.9 }} type='button'>
								<svg width='16' height='22' xmlns='http://www.w3.org/2000/svg'>
									<path d='M11 1 3 9l8 8' stroke-width='3' fill='#fff' fill-rule='evenodd' />
								</svg>
							</motion.button>
						</motion.div>
						<motion.div variants={itemNext} className='next-icon' onClick={nextSlide}>
							<motion.button whileTap={{ scale: 0.9 }} type='button'>
								<svg width='13' height='22' xmlns='http://www.w3.org/2000/svg'>
									<path d='m2 1 8 8-8 8' stroke-width='3' fill='#fff' fill-rule='evenodd' />
								</svg>
							</motion.button>
						</motion.div>
					</div>
					<div className='lightbox-thumb-img-cont'>
						{images.smallImgs?.map((item, i) => (
							<motion.div
								whileTap={{ scale: 0.6 }}
								key={i}
								className={i === index ? "small-div-image selected-div" : "small-div-image noselect"}
							>
								<img
									src={item}
									alt='small Shoe'
									key={i}
									className={i === index ? " selected-image" : "noselect"}
									onClick={() => setIndex(i)}
								/>
							</motion.div>
						))}
					</div>
				</motion.div>
			) : null}
		</div>
	);
};

export default ImageModal;
