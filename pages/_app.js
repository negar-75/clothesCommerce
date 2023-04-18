import "/styles/globals.css";
import { useEffect } from "react";
import { store, persistor } from "../store/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { PersistGate } from "redux-persist/integration/react";
import { SessionProvider } from "next-auth/react";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }) {
  // console.log(store.getState());
  useEffect(() => {
    AOS.init({
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1500, // values from 0 to 3000, with step 50ms
      easing: "ease",
      mirror: true,
    });
  }, []);

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
