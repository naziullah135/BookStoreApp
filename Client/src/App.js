import { Provider } from "react-redux";
import Navbar from "./components/Navbar";
import store from "./Redux/store";
import Main from "./components/Main";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Main />
    </Provider>
  );
}

export default App;
