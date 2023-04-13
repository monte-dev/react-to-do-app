import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleFavoriteCards } from '../../redux/store';
const Card = (props) => {
	const dispatch = useDispatch();
	const handleFavoriteClick = () => {
		dispatch(toggleFavoriteCards(props.id));
	};

	return (
		<>
			<li className={styles.card}>
				{props.title}
				<button
					className={clsx(
						props.favorite ? styles.cardFavorite : undefined
					)}
					onClick={handleFavoriteClick}
				>
					<i className="fa fa-star-o"></i>
				</button>
			</li>
		</>
	);
};

export default Card;
