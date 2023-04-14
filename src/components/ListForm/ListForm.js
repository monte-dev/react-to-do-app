import styles from './ListForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/listsReducer';
import Button from '../Button/Button';

const ListForm = (props) => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const dispatch = useDispatch();

	const handleListSubmit = (e) => {
		e.preventDefault();
		dispatch(addList({ title, description }));
		setTitle('');
		setDescription('');
	};

	return (
		<form onSubmit={handleListSubmit} className={styles.listForm}>
			<span>Title:</span>
			<input
				value={title}
				type="text"
				onChange={(e) => setTitle(e.target.value)}
				required
			></input>
			<span>Description:</span>
			<input
				value={description}
				type="text"
				onChange={(e) => setDescription(e.target.value)}
				required
			></input>
			<Button type="submit">Add List</Button>
		</form>
	);
};
export default ListForm;
