import './App.css'
import { signInWithGooglePopup } from './firebase-config';

function App() {

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  }


  return (
    <>
      <div>
        <button onClick={logGoogleUser}>Sign In With Google</button>
      </div>
    </>
  )
}

export default App
