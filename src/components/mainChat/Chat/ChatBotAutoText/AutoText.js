import React, { useState } from 'react';
import style from './AutoText.module.css';
import Container from '../../../UI/Containers/Container/Container';
import Download from '../../../UI/ChatButtons/ForDownload/Download';
import Medium from '../../../UI/ChatButtons/InfoButtons/Medium';
const AutoText = () => {
	const [clickedData, setClickedData] = useState(null);

	const clickHandler = (value) => {
		console.log(value);
		setClickedData(value);
	};
	return (
		<div className={style.autoTextCont}>
			<div className={style.textCont}>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
					facere sint fuga reiciendis quis maxime inventore fugit qui?
				</p>
			</div>
			{/* <Container>
				{ideas.map((opt) => (
					<Download
						key={opt.id}
						value={opt.options}
						names={opt.name}
					/>
				))}
				<Medium val={'DOWNLOAD'} />
			</Container> */}
			{/* <Container>
				<Large />
				<Large />
				<Large />
				<Large />
				<Large />
			</Container>
			<Container>
				<Medium />
				<Medium />
				<Medium />
			</Container>
			<Container>
				<Mini />
				<Mini />
				<Mini />
				<Mini />
				<Mini />
			</Container> */}
		</div>
	);
};
export default AutoText;
