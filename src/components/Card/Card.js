import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleFavoriteCards, removeCard } from '../../redux/cardsReducer';
const Card = (props) => {
	const dispatch = useDispatch();
	const handleFavoriteClick = () => {
		dispatch(toggleFavoriteCards(props.id));
	};
	const handleRemoveCard = () => {
		dispatch(removeCard(props.id));
	};
	return (
		<>
			<li className={styles.card}>
				{props.title}
				<span>
					<button
						className={clsx(
							props.favorite ? styles.cardFavorite : undefined
						)}
						onClick={handleFavoriteClick}
					>
						<i className="fa fa-star-o"></i>
					</button>
					<button onClick={handleRemoveCard}>
						<i className="fa fa-trash"></i>
					</button>
				</span>
			</li>
		</>
	);
};

export default Card;
