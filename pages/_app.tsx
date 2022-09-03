import React from 'react';
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function MyApp({ Component, pageProps }) {

  React.useEffect(()=>{
    import("bootstrap/dist/js/bootstrap.bundle.js");
  },[])

  return <Component {...pageProps} />
}

export default MyApp
