import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import MainLayout from './components/layouts/MainLayout';
import HomePage from './components/pages/HomePage';
import JobsPage from './components/pages/JobsPage';
import JobPage, { jobLoader } from './components/pages/JobPage';
import NotFoundPage from './components/pages/NotFoundPage';
import AddJobPage from './components/pages/AddJobPage';
import EditJobPage from './components/pages/EditJobPage';

const App = () => {
  // ----- Add Job -----
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob), // FIXED
    });

    return res.json();
  };

  // ----- Delete Job -----
  const deleteJob = async (id) => {
    console.log('delete', id);
  };

  // ----- Update Job -----
  const updateJob = async (updatedJob) => {
    console.log('update job:', updatedJob);
  };

  // ----- ROUTER -----
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route
          path="/add-job"
          element={<AddJobPage addJobSubmit={addJob} />}
        />
        <Route
          path="/edit-job/:id"
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;