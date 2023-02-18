import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div>
      Hi I'm Root
      <Outlet />
    </div>
  );
}
