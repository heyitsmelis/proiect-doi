import 'react-native-gesture-handler';
import Router from './src/router/index';
import { AuthContextProvider } from './src/hooks/authContext';

export default function App() {
  return (
    <AuthContextProvider>
      <Router/> 
    </AuthContextProvider> 

  );
}

