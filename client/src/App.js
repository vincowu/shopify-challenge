import './partials/main.scss'
import Home from "./pages/Home";
import Post from './pages/Post';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:date" component={Post} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
