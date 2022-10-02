import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Main } from './components/Layout/Main';

import CreatePage from './routes/create';
import Landing from './routes/landing';
import Event from './routes/event';

function App() {
  return (
    <BrowserRouter>
      <Main>
        <Routes>
          <Route element={<Landing />} path={'/'} />
          <Route element={<CreatePage />} path={'/create'} />
          <Route element={<Event />} path={'/event'} />
        </Routes>
      </Main>
    </BrowserRouter>
  );
}

/**
 *        <Route element={<Index />} path='/' />
          <Route element={<Create />} path='/create' />
          <Route element={<CreatedEvent />} path='/event/confirmed' />
          <Route element={<NotFound />} path='/*' />
 */

export default App;
