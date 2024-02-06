import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";

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
    <Provider store={store}>
      <div className="App">
        <Head />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
