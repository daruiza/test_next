import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  console.log('Component', Component);
  console.log('getLayout', Component.getLayout);
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      {getLayout(<Component {...pageProps} />)}
    </>
  )
}

export default MyApp
