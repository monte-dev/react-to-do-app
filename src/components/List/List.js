import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import SearchForm from '../SearchForm/SearchForm';
import { useSelector } from 'react-redux';
import { getListById } from '../../redux/listsReducer';
import { getColumnsByList } from '../../redux/columnsReducer';
import { useParams } from 'react-router';
import { Navigate } from 'react-router-dom';

const List = () => {
	const { listId } = useParams();
	const columns = useSelector((columns) => getColumnsByList(columns, listId));
	const listData = useSelector((lists) => getListById(lists, listId));
	if (!listData) return <Navigate to="/" />;
	return (
		<div className={styles.list}>
			<header className={styles.header}>
				<h2 className={styles.title}>{listData.title}</h2>
			</header>
			<SearchForm />
			<p className={styles.description}>{listData.description}</p>
			<section className={styles.columns}>
				{columns.map((column) => (
					<Column key={column.id} {...column} />
				))}
			</section>
			<ColumnForm listId={listId} />
		</div>
	);
};

export default List;
