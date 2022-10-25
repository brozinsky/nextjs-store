import '@/styles/globals.scss'
import {Provider, createClient} from "urql";
import { CartContext } from "contexts/CartContext";

const client = createClient({url: "http://localhost:1338/graphql"});

function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <CartContext>
        <Component {...pageProps} />
      </CartContext>
    </Provider>
  )
}

export default MyApp
