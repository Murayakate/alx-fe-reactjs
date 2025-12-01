import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeDetail from './components/RecipeDetail';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;