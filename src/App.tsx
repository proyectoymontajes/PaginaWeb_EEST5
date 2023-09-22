import {BrowserRouter} from 'react-router-dom';
import './App.css'
import AppRouter from './router/AppRouter';
import {Layout} from './pages/Layout/Layout';


function App() {
    return (
        <Layout>
            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>
        </Layout>
    )
}

export default App
