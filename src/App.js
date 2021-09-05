import './App.css';
import ScrollableContainer from './components/ScrollableContainer';
import LineChart from './components/LineChart';

function App() {
  const weight = [{
    weight: 130,
    createdAt: "2019-09-07T15:50+00Z"
  },
  {
    weight: 131,
    createdAt: "2019-09-07T15:50+00Z"
  },
  {
    weight: 125,
    createdAt: "2019-09-07T15:50+00Z"
  },
  {
    weight: 121,
    createdAt: "2019-09-07T15:50+00Z"
  },
  {
    weight: 122,
    createdAt: "2019-09-07T15:50+00Z"
  },
  {
    weight: 123,
    createdAt: "2019-09-07T15:50+00Z"
  },
  {
    weight: 118,
    createdAt: "2019-09-07T15:50+00Z"
  },
  {
    weight: 109,
    createdAt: "2019-09-07T15:50+00Z"
  },
  {
    weight: 110,
    createdAt: "2019-09-07T15:50+00Z"
  }];
  return (
    <div className="App">
      <button id="hamburger-menu" onclick="toggleHamburgerMenu()">
        <div class="menu-bar"></div>
        <div class="menu-bar"></div>
        <div class="menu-bar"></div>
      </button>
      <nav id="navigation">
        <div id="links">
          <a>
            Home
          </a>
          <a>
            Weight
          </a>
        </div>
      </nav>
      <main>
        <LineChart />
        <button class="primary-button">Add weight in</button>
        <ScrollableContainer dataEntries={weight} />
      </main>
    </div>
  );
}

export default App;
