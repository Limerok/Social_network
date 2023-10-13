import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { MainContent } from "../Main/MainContent";
import { Nav } from "../Nav/Nav";
import style from  "./App.module.css";

const App = () => {
  return (
    <div className={style.page}>
      <Header/>
      <main className={style.main}>
        <Nav/>
        <MainContent/>
      </main>
      <Footer/>
    </div>
  )
};

export default App;
