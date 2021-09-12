import { BrowserRouter,Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Hlsfile from "./Hlsfile";
import Firstpage from "./Firstpage";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Firstpage} />
            <Route exact path="/next" component={Hlsfile} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
