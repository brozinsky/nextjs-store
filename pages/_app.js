import "@/styles/main.scss";
import { Provider, createClient } from "urql";
import { CartContext } from "contexts/CartContext";
import { QueryContext } from "contexts/QueryContext";

const client = createClient({ url: "http://localhost:1338/graphql" });

function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <QueryContext>
        <CartContext>
          <Component {...pageProps} />
        </CartContext>
      </QueryContext>
    </Provider>
  );
}

export default MyApp;
