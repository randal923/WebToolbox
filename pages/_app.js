import React from 'react'
import Layout from '../containers/Layout/index'
import { ToastContainer, toast } from 'react-toastify'
import { Html } from 'next/document'
/* ADD PERSISNTENT LAYOUT TO SSR */

export default function MyApp({ Component, pageProps }) {
  //const Layout = Component.Layout ? Component.Layout : React.Fragment;

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}
