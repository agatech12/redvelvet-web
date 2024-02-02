import './App.css';
import NavigationBar from './components/NavigationBar';
import './style/background.css'
import Trending from './components/Trendings';

function App() {
    return (
        <div>
            <div className='bgini'>
                <NavigationBar />
                <Trending />
            </div>
            <div className='trending'>
                Test
            </div>
        </div>
    )
}

export default App