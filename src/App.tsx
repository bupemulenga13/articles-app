import {Provider} from 'react-redux'
import { store, persistor } from './store/store';
import { PersistGate } from "redux-persist/integration/react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import MultiStepForm from './components/Forms/MultiStepForm';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Container>
          <Box mt={10} sx={{
              width: '100%',
              height: '100%',
            }}>
            <MultiStepForm />
          </Box>
        </Container>
      </PersistGate>
    </Provider>
  );
}

export default App;
