import style from './Container.module.css';

const Container = ({ children }) => {
	return <div className={style.Container}>{children}</div>;
};

export default Container;
