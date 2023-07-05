import style from './Meta.module.css';
const MetaLarge = ({ src, name }) => {
	return (
		<div className={style.metaButtonsLarge}>
			<div className={style.metaImgLargeOverlay}>
				<img
					className={style.metaImgLarge}
					src={src}
					alt=''
				/>
				<div className={style.overlayLarge}></div>
			</div>
			<p>{name} Selected</p>
		</div>
	);
};

export default MetaLarge;
