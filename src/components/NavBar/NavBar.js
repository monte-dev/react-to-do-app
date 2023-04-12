import 'font-awesome/css/font-awesome.min.css';
import Container from '../Container/Container';
import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
	return (
		<div>
			<nav className={styles.nav}>
				<Container>
					<div className={styles.nav__wrapper}>
						<i className="fa fa-tasks" aria-hidden="true"></i>
						<ul>
							<li>
								<NavLink
									className={({ isActive }) =>
										isActive ? styles.linkActive : undefined
									}
									to="/"
								>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink
									className={({ isActive }) =>
										isActive ? styles.linkActive : undefined
									}
									to="/favorite"
								>
									Favourite
								</NavLink>
							</li>
							<li>
								<NavLink
									className={({ isActive }) =>
										isActive ? styles.linkActive : undefined
									}
									to="/about"
								>
									About
								</NavLink>
							</li>
						</ul>
					</div>
				</Container>
			</nav>
		</div>
	);
};
export default NavBar;
