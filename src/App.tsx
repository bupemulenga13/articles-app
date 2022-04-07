import {Provider} from 'react-redux'
import { store, persistor } from './store';
import { PersistGate } from "redux-persist/integration/react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Container>
          <Box>
            <div>
              <h1>Articles App</h1>
            </div>
          </Box>
        </Container>
      </PersistGate>
    </Provider>
  );
}

export default App;
