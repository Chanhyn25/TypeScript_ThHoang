import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import'bootstrap/dist/css/bootstrap.min.css';
import "./dashboard.css";
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter} from "react-router-dom";
ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

