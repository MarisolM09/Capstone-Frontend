import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Router />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
