import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";

/*
   Head
   Body
    - SideBar
    - MenuItems
   MenuContainer
    - ButtonsList
    - VideoContainer
       - VideoCard 
*/

function App() {
  return (
    <div className="App">
      <Head />
      <Body />
    </div>
  );
}

export default App;
