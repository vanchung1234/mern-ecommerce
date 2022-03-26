import { BrowserRouter } from 'react-router-dom'
import Header from './components/headers/Header';
import { DataProvider } from './GlobalState';
import Pages from './components/mainpages/Pages';
function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <div className="App">
          <Header/>
          <Pages/>
        </div>
      </DataProvider>
    </BrowserRouter>

  );
}

export default App;
