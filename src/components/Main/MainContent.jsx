import { Profile } from '../Profile/Profile';
import style from './MainContent.module.css'

export const MainContent = () => {
  return (
    <main className={style.main}>
      <Profile/>
    </main>
  );
};
