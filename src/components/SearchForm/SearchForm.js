import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { searchCard } from '../../redux/store';

const SearchForm = () => {
	const dispatch = useDispatch();
	const searchString = useSelector((state) => state.searchStr);

	const searchByString = (e) => {
		e.preventDefault();
		dispatch(searchCard(searchString));
	};

	return (
		<form className={styles.searchForm} onClick={searchByString}>
			<TextInput
				placeholder="Search..."
				value={searchString}
				onChange={(e) => dispatch(searchCard(e.target.value))}
			/>
			<Button>
				<span className="fa fa-search" />
			</Button>
		</form>
	);
};

export default SearchForm;
