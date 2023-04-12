import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { searchCard } from '../../redux/store';

const SearchForm = () => {
	const dispatch = useDispatch();
	const [searchString, setSearchString] = useState('');

	const searchByString = (e) => {
		e.preventDefault();
		dispatch(searchCard(searchString));
		setSearchString('');
	};

	return (
		<form className={styles.searchForm} onClick={searchByString}>
			<TextInput
				placeholder="Search..."
				value={searchString}
				onChange={(e) => setSearchString(e.target.value)}
			/>
			<Button>
				<span className="fa fa-search" />
			</Button>
		</form>
	);
};

export default SearchForm;
