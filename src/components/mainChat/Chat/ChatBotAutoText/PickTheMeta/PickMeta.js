import React from 'react';
import my from './PickMeta.module.css';
import MetaMini from '../../../../UI/ChatButtons/Meta/MetaMini';
import MetaLarge from '../../../../UI/ChatButtons/Meta/MetaLarge';
import { useState } from 'react';
const PickMeta = ({ meta, onClick }) => {
	const [clickedData, setClickedData] = useState(null);

	const handleMetaClick = (value) => {
		onClick(value);
		setClickedData(value);
	};

	return (
		<div className={my.MetaCont}>
			{!clickedData &&
				meta.map((val) => (
					<MetaMini
						data={val}
						onClick={handleMetaClick}
						name={val.title.toUpperCase()}
						src={val.img}
						key={val.id}
					/>
				))}
			{clickedData && (
				<MetaLarge
					name={clickedData.title}
					src={clickedData.img}
				/>
			)}
		</div>
	);
};

export default PickMeta;
