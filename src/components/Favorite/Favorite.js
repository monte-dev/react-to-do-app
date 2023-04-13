import { getFavoriteCards } from '../../redux/store';
import styles from '../Column/Column.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';

const Favorite = () => {
	const favoriteCards = useSelector((state) => getFavoriteCards(state));
	return (
		<div>
			<PageTitle>Favorite</PageTitle>
			<article className={styles.column}>
				<ul className={styles.cards}>
					{favoriteCards.map((card) => (
						<Card
							key={card.id}
							id={card.id}
							title={card.title}
							favorite={card.isFavorite}
						/>
					))}
					{favoriteCards.length === 0 && (
						<li className={styles.cards__empty}>
							No favorite cards found.
						</li>
					)}
				</ul>
			</article>
		</div>
	);
};
export default Favorite;
