import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import HookForm from './components/HookForm';
import FacebookLogin from 'react-facebook-login';

function App() {
  // Facebook login response handler
  const responseFacebook = (response) => {
    console.log('Facebook login response:', response);
  };

  return (
    <div className="App">
      <h1>Welcome to the Registration Page</h1>

    
      

      {/* Other components */}
      <RegistrationForm />
      <HookForm />
    </div>
  );
}

export default App;
