import { useState } from "react";
import DocumentHelper from "./helpers/DocumentHelper";
import { ClientImages } from './data/Images';
import { Router, Switch } from 'react-router-dom';
import MainContextProvider from "./contexts/MainContextProvider";
import { history } from './router/BrowserHistory';
import WebsitePage from "./pages/Website";

function App() {
  const [firstRender, setFirstRender] = useState(true);

  if (firstRender) {
    DocumentHelper.setDocumentFavIcon(ClientImages.FavIcon);
    DocumentHelper.setDocumentTitle();

    setFirstRender(false);
  }

  return (
    <Router history={history}>
        <Switch>
          <MainContextProvider>
            <WebsitePage />
          </MainContextProvider>
        </Switch>
      </Router>
  );
}

export default App;
