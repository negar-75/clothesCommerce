import Head from "next/head";
import HeaderContainer from "../src/components/headerContainer/headerContainer";
import CategoriesGrid from "../src/components/categoriesGrid/categoriesGrid";
import Context from "../libs/context.js";
import RedBanner from "../src/components/redBanner/redBanner";
import CategoriesSlideShow from "../src/components/categoriesSlideShow/categoriesSlideShow";
import SVG from "../src/components/svg/svg";
import Layout from "./layOut";

export default function Home({ data, store, categories, footerNavigation }) {
  return (
    <Layout>
      <Head>
        <title>clothe-E-commerce</title>
        <meta
          name="description"
          content="shopping website"
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

      <SVG
        mobilePath="M131.048 0C69.7495 6.89776 63.2429 110.075 52.6064 154.702C28.5541 255.617 49.7799 373.773 80.4739 469.854C118.064 587.523 193.554 696.822 243.034 809.571C307.653 956.815 316.831 1134.1 316.831 1293.01C316.831 1426.17 322.268 1548.95 271.418 1674.02C218.412 1804.39 165.66 1938.04 117.631 2070.7C83.083 2166.12 84.6024 2262.16 84.6024 2361.81C84.6024 2493.25 162.013 2611.29 191.428 2737.07C212.425 2826.86 251.807 2908.71 251.807 3001C251.807 3125.33 229.968 3224.38 165.108 3331.31C123.172 3400.45 84.6024 3458.46 84.6024 3539.32C84.6024 3622.09 75.3132 3703.98 75.3132 3787.06C75.3132 3872.7 96.1192 3952.95 114.534 4035.83C141.855 4158.81 187.683 4276.93 214.651 4400.64C239.727 4515.66 223.94 4644.92 223.94 4761.26C223.94 4830.72 224.567 4898.28 213.618 4967.18C182.094 5165.57 100.445 5322.2 1 5494"
        mobileViewBox="0 0 318 5495"
        desktopViewBox="0 0 1191 2410"
        desktopPath="M55.8986 1.14862C28.5208 1.14862 1 28.6146 1 56.2819C1 80.5167 2.29292 88.8833 15.7804 108.365C27.1049 124.723 42.6015 138.128 53.5526 155.053C63.4129 170.291 64.3446 176.868 64.3446 195.405C64.3446 216.646 51.6757 229.713 51.6757 250.304C51.6757 277.658 52.5965 292.032 65.7523 315.995C82.8552 347.147 116.287 367.805 148.804 380.278C164.432 386.272 199.576 391.714 203.468 413.123C207.179 433.531 203.758 457.534 197.368 476.702C175.433 542.507 224.866 604.236 280.185 636.706C352.595 679.208 448.635 718.096 448.635 814.54C448.635 850.809 436.528 885.052 440.658 922.226C445.127 962.439 490.508 1001.5 523.006 1021C607.432 1071.65 727.677 1123.2 747.528 1232.38C754.429 1270.34 744.243 1311.44 744.243 1349.68C744.243 1373.37 740.925 1398.2 750.812 1420.3C761.348 1443.85 775.18 1459.08 790.696 1479.19C815.739 1511.65 850.994 1539.54 870.229 1576.08C891.948 1617.35 896.27 1673.69 896.27 1719.43C896.27 1759.32 868.489 1772.43 845.829 1798.49C812.059 1837.33 801.214 1884.61 792.573 1934.1C785.118 1976.79 782.966 2025.4 763.012 2064.31C745.994 2097.49 718.713 2120.2 687.937 2140.32C653.986 2162.52 638.964 2181.86 617.554 2215.86C600.049 2243.67 597.877 2268.37 591.278 2299.38C588.12 2314.22 582.861 2356.87 570.163 2366.01C559.141 2373.95 538.251 2390.64 524.649 2391.35C489.954 2393.18 503.353 2446.25 469.75 2446.25"
      />

      <HeaderContainer data={data} />
      <Context.Provider value={store}>
        <main>
          <div
            className="text-center my-12"
            data-aos="fade-down"
          >
            <h2 className="mb-2 text-4xl font-semibold tracking-wide uppercase">
              FALL READY NOW!
            </h2>
            <p>Everything you need to greet the season in style.</p>
          </div>
          <CategoriesGrid />
          <RedBanner />
          <CategoriesSlideShow data={categories} />
        </main>
      </Context.Provider>
    </Layout>
  );
}

export async function getStaticProps() {
  const { header, store, categories } = await import("/data/data.json");

  return {
    props: {
      data: header,
      store: store,
      categories: categories,
    },
  };
}
