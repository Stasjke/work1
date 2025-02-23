import styles from './app.module.css';
import { useState } from 'react';

export const App = () => {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');

	const onInputButtonClick = () => {
		const promptValue = prompt('Введите значение');
		if (promptValue !== null) {
			if (promptValue.trim().length < 3) {
				setError('Введенное значение должно содержать минимум 3 символа');
				setValue('');
			} else {
				setValue(promptValue);
				setError('');
			}
		}
	};

	const isValueVaild = value.length >= 3;

	const onAddButtonClick = () => {
		if (value.trim.length >= 3) {
			const updatedList = [
				...list,
				{ id: Date.now(), value: value, data: new Date() },
			];
			setList(updatedList);
			setValue('');
			setError('');
		}
	};

	const formatDate = (date) => {
		const formatTime = date.toLocaleTimeString();
		const formatDate = date.toLocaleDateString();
		return `${formatDate} ${formatTime}`;
	};

	const listItems = list.map((item) => {
		return (
			<li key={item.id} className={styles['list-item']}>
				{item.value} {formatDate(item.data)}
			</li>
		);
	});

	return (
		<>
			<div className={styles.app}>
				<h1 className={styles['page-heading']}>Ввод значения</h1>
				<p className={styles['no-margin-text']}>
					Текущее значение <code>value</code>: "
					<output className={styles['current-value']}>{value}</output>"
				</p>
				{error !== '' && <div className={styles.error}>{error}</div>}
				<div className={styles['buttons-container']}>
					<button onClick={onInputButtonClick} className={styles['button']}>
						Ввести новое
					</button>
					<button
						onClick={onAddButtonClick}
						className={styles['button']}
						disabled={!isValueVaild}
					>
						Добавить в список
					</button>
				</div>
				<div className={styles['list-container']}>
					<h2 className={styles['list-heading']}>Список:</h2>
					{list.length === 0 ? (
						<p className={styles['no-margin-text']}>
							Нет добавленных элементов
						</p>
					) : (
						list && <ul className={styles['list']}>{listItems}</ul>
					)}
				</div>
			</div>
		</>
	);
};
