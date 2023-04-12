import 'font-awesome/css/font-awesome.min.css';
import Container from '../Container/Container';
import styles from './NavBar.module.scss';

const NavBar = () => {
	return (
		<div>
			<nav className={styles.nav}>
				<Container>
					<div className={styles.nav__wrapper}>
						<i className="fa fa-tasks" aria-hidden="true"></i>
						<ul>
							<li>
								<a href="/">Home</a>
							</li>
							<li>
								<a href="/favorite">Favourite</a>
							</li>
							<li>
								<a href="/about">About</a>
							</li>
						</ul>
					</div>
				</Container>
			</nav>
		</div>
	);
};
export default NavBar;
