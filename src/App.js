import {Route, Routes} from 'react-router-dom';

import {Navbar} from './layouts/Navbar';

import Trading from './pages/Trading/Trading';
import Archive from './pages/Archive/Archive';

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Trading />} />
                <Route path='/archive' element={<Archive />} />
            </Routes>
        </div>
    );
}

export default App;
