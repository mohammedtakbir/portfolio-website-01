import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers/routes";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
