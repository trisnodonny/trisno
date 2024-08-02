import NavigationBar from "../NavigationBar";
import { Outlet } from "react-router-dom";
export default function BaseLayout() {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  )
}