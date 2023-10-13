import style from './Nav.module.css'

export const Nav = () => {
  return (
    <nav className={style.nav}>
      <ul className={style.nav_list}>
        <li>Profile</li>
        <li>Messages</li>
        <li>News</li>
        <li>Music</li>
        <li>Settings</li>
      </ul>
    </nav>
  );
};
