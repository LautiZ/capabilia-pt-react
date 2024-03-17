import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SeriesList } from './Components/SeriesList';
import EditSeries from './Components/EditSeries'; 
import DeleteSeries from './Components/DeleteSeries'; 
import { useParams } from 'react-router-dom';

function EditSeriesWithId() {
  const { id } = useParams();
  return <EditSeries id={id} />;
}

function DeleteSeriesWithId() {
  const { id } = useParams();
  return <DeleteSeries id={id} />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SeriesList />} />
        <Route path="/edit-series/:id" element={<EditSeriesWithId />} />
        <Route path="/delete-series/:id" element={<DeleteSeriesWithId />} />
      </Routes>
    </Router>
  );
}

export default App;
