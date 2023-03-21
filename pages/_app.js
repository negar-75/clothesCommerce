import "/styles/globals.css";
import { store, persistor } from "../store/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { PersistGate } from "redux-persist/integration/react";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  // store.subscribe(() => console.log(store.getState()));
  console.log(pageProps);
  return (
    <>
      <Toaster position="bottom-center" />
      <SessionProvider session={pageProps.session}>
        <Provider store={store}>
          <PersistGate
            loading={null}
            persistor={persistor}
          >
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </SessionProvider>
    </>
  );
}
