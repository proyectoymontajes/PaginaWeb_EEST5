import { BrowserRouter } from 'react-router-dom';
import './App.css'
import AppRouter from './router/AppRouter';
import { Layout } from './pages/Layout/Layout';


function App() {
    return (
        <BrowserRouter>
            <Layout>
                <AppRouter />
            </Layout>
        </BrowserRouter>
    )
}

export default App
