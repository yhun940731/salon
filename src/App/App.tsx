import Welcome from "pages/Welcome";
import StoreProvider from "redux/store";
import SignIn from "pages/SignIn";
import SignUp from "pages/SignUp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StyledWritePage from "pages/WritePage";
import StyledReadPost from "pages/ReadPost";
import AlertDeletePost from "pages/AlertDeletePost";
import AlertWritePost from "pages/AlertWritePost";
import AlertCancelWriter from "pages/AlertCancelWriter";

function App() {
  return (
    <StoreProvider>
      <Router>
        <Switch>
          <Route path="/write">
            <StyledWritePage />
          </Route>
          <Route path="/:postId">
            <StyledReadPost />
          </Route>
          <Route path="/" exact>
            <Welcome />
          </Route>
        </Switch>

        <SignIn />
        <SignUp />
        <AlertDeletePost />
        <AlertWritePost />
        <AlertCancelWriter />
      </Router>
    </StoreProvider>
  );
}

export default App;
