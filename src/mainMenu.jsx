import Header from "./components/header";
import LeftSection from "./components/leftSection";
import RightSection from "./components/rightSection";
import './index.css'

const MainMenu = () => {
  return (
    <div className="App">
      <div className="rightSide">
      <Header />
      <LeftSection name={true} />
      </div>
      <RightSection />
    </div>
  );
}

export default MainMenu;
