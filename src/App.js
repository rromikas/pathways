import React, { Suspense } from "react";
import "simplebar/dist/simplebar.min.css";
const StudentDashboard = React.lazy(() => import("dashboards/student"));

const App = () => {
  return (
    <div className="fixed left-0 top-0 w-full h-full">
      <Suspense fallback="Loader">
        <>
          <StudentDashboard></StudentDashboard>
        </>
      </Suspense>
    </div>
  );
};

export default App;
