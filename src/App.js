import './App.css';
import Users from './components/User.js'
import Albums from './components/Album/Albums';

function App() {
  const photo='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

  return (
    <div>
      <Users photo={photo} />
      <Albums />
    </div>
  );
}

export default App;
