import DefaultLayout from '@/component/DefaultLayout'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import '@/styles/globals.css'
import { useEffect } from "react";



export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return <DefaultLayout>
    <Component {...pageProps} />
  </DefaultLayout>

}
