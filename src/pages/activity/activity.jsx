import { Outlet } from "react-router-dom";

function Activity() {
  return (
    <div className="container-fluid pt-4 px-4">
      <Outlet />
    </div>
  );
}

export default Activity;