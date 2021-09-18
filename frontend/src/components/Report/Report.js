import './Report.css';
import '@progress/kendo-theme-material/dist/all.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ExportExample from '../../components/Report/ExportExample';
import Navbar from "../../components/Profile/navbar/Navbar";
import LayoutSample from '../../components/Report/LayoutSample';
import GridExport from '../../components/Report/GridExport';
import TreeListExport from '../../components/Report/TreeListExport';
import NavigationContainer from '../../components/Report/NavigationContainer';

<Navbar />
function App() {
  return (
    <Router>
      <NavigationContainer>
        <div className="page-containter">
          <Switch>
            <Route exact path="/" component={ExportExample} />
            <Route path="/LayoutSample" component={LayoutSample} />
            <Route path="/GridExport" component={GridExport} />
            <Route path="/TreeListExport" component={TreeListExport} />
          </Switch>
        </div>
      </NavigationContainer>
    </Router>
  );
}

export default App;