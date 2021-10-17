import { AuthProvider } from './context';
import MainRouter from "./router";
import './App.css';

function App() {

  return (
    <div className="spacingTop">
      <AuthProvider>
        <MainRouter />
      </AuthProvider>
    </div>
  );
}

export default App;