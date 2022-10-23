import '@/styles/globals.scss'
import {Provider, createClient} from "urql";

const client = createClient({url: "http://localhost:1338/graphql"});

function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
