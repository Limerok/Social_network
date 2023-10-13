import style from './Header.module.css'
import logo from './../../images/logo.svg'


export const Header = () => {
  return (
    <header className={style.header}>
      <a className={style.logo_link} href='#'>
        <img className={style.logo_img} src={logo} />
        <span className={style.logo_title}>Speed</span>
      </a>
    </header>
  );
};
