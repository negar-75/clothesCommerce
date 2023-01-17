import Head from "next/head";
import { Inter } from "@next/font/google";
import Navbar from "../src/components/navbar/navbar";
import HeaderContainer from "../src/components/headerContainer/headerContainer";
import ClothesGrid from "../src/components/clothesGrid/clothesGrid";
import Context from "../libs/context.js";
import { CloseFullscreen } from "@mui/icons-material";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data, store }) {
  console.log(store);
  return (
    <div className=" h-screen">
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <header>
        <Navbar />
        <HeaderContainer data={data} />
      </header>
      <Context.Provider value={store}>
        <main>
          <div className="text-center my-12">
            <h2 className="mb-2 text-4xl font-semibold tracking-wide uppercase">
              FALL READY NOW!
            </h2>
            <p>Everything you need to greet the season in style.</p>
          </div>
          <ClothesGrid />
        </main>
      </Context.Provider>
    </div>
  );
}

export async function getStaticProps() {
  const { header, store } = await import("/data/data.json");

  return {
    props: {
      data: header,
      store: store,
    },
  };
}
