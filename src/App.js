import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar/SideBar';
import Home from './containers/Home/Home';
// import About from './containers/About/About';
import routes from './App/routes';
import { Suspense } from 'react';
//NotFoundPage

const components = {
  home: <Home />,
  // about: <About />,
};

function App() {
  return (
    <Suspense>
      <Router>
        <SideBar />
        <div>
          <Routes>
            {routes.map(({ path, exact, label }, i) => (
              <Route
                key={i}
                path={path}
                exact={exact}
                element={components[label]}
              />
            ))}
            {/* <Route element={NotFoundPage} /> */}
          </Routes>
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
