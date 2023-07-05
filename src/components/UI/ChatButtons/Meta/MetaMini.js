import style from './Meta.module.css';
const MetaMini = ({ src, name, onClick, data }) => {
	const handleClick = () => {
		onClick(data);
	};
	return (
		<div className={style.metaButtons}>
			<p>{name}</p>
			<div className={style.metaImgOverlay}>
				<img
					onClick={handleClick}
					className={style.metaImg}
					src={src}
					alt=''
				/>
				<div className={style.overlay}></div>
			</div>
		</div>
	);
};

export default MetaMini;
