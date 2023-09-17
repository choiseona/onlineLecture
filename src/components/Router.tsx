import { Route, Routes, Navigate } from "react-router-dom";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/posts" element={<h1>Post List Page</h1>} />
        <Route path="/posts/:id" element={<h1>Post Detail Page</h1>} />
        <Route path="/posts/new" element={<h1>Post New Page</h1>} />
        <Route path="/posts/edit" element={<h1>Post Edit Page</h1>} />
        <Route path="/profile" element={<h1>Profile Page</h1>} />
        <Route path="*" element={<Navigate replace to="/"></Navigate>} />
      </Routes>
    </>
  );
}

export default Router;
