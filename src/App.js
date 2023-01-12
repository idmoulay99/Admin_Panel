import './App.css';
import Users from './components/User.js'

function App() {
  const photo='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

  return (
    <div>
      <Users photo={photo} />

    </div>
  );
}

export default App;
