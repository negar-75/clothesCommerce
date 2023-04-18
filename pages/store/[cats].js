import Link from "next/link";
import Layout from "../layOut";
import Context from "../../libs/context";
import StoreGrid from "../../src/components/storeGrid/storeGrid";
import firstLetterToUpperCase from "../../functions/firstLetterUpperCase";
import SVG from "../../src/components/svg/svg";
function Cats({ data, category }) {
  return (
    <Layout>
      <SVG
        desktopPath="M1140.72 0.871826C1109.94 3.4368 1070.5 36.6907 1053.69 61.4131C1025.66 102.625 1039.04 158.415 1064.59 196.741C1089.91 234.71 1110.68 272.256 1101.76 319.604C1088.76 388.63 1031.49 432.374 967.994 453.374C846.456 493.567 655.383 489.323 627.895 649.91C618.923 702.326 628.353 757.437 574.031 786.128C505.594 822.274 432.873 845.901 369.704 892.076C303.313 940.605 242.789 1003.89 189.638 1066.35C163.603 1096.95 136.997 1127.3 111.958 1158.72C100.038 1173.68 89.2325 1191.53 73.0068 1202.35C50.2128 1217.55 36.7994 1216.45 20.7009 1194.56C11.1558 1181.58 -7.67692 1151.54 5.56557 1134.69C37.7266 1093.75 109.979 1156.89 144.009 1165.85C196.211 1179.58 271.122 1171.05 303.375 1122.67"
        desktopViewBox="0 0 1142 1214"
        mobileViewBox="0 0 306 3353"
        mobilePath="M1 0.848145C59.7999 0.848145 117.394 32.2112 170.834 53.2055C230.05 76.4688 250.165 90.9205 248.389 153.993C247.439 187.698 232.19 208.863 211.738 234.493C178.135 276.603 146.408 319.51 119.131 366.041C69.1759 451.259 65.5273 558.572 104.406 648.77C136.324 722.82 206.709 793.369 222.21 872.598C242.513 976.372 210.247 1062.44 160.035 1150.75C132.381 1199.38 108.267 1249.58 80.1905 1298C59.8773 1333.03 45.3275 1378.7 50.085 1419.73C66.15 1558.29 177.239 1632.76 241.844 1744.02C288.633 1824.6 305.781 1878 305 1974C304.268 2063.98 245.006 2166.2 199.303 2238.47C101.591 2392.99 119.983 2594.12 164.617 2763.35C177.329 2811.55 171.816 2864.02 171.816 2913.55C171.816 2963.58 113.89 2993.61 107.024 3045.1C96.9348 3120.77 99.9001 3324.24 1 3352.5"
      />
      <header>
        <div className="w-full bg-stone-200 mt-10 px-5 py-1 md:px-16 mb-16">
          <p className="text-xs">
            <Link href="/">
              <span className="text-gray-500 ">Home/ </span>
            </Link>
            {firstLetterToUpperCase(category)}
          </p>
        </div>
      </header>
      <Context.Provider value={data}>
        <main>
          <StoreGrid />
        </main>
      </Context.Provider>
    </Layout>
  );
}

export default Cats;

export async function getStaticPaths() {
  const { store } = await import("/data/data.json");

  const allPaths = store.map((item) => ({
    params: {
      cats: item.href.toString(),
    },
  }));

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const category = context?.params.cats;

  const data = await import("/data/data.json");
  const collection = data[`${category}`];

  return {
    props: {
      data: collection,
      category: category,
    },
  };
}

<svg
  width="306"
  height="3353"
  viewBox="0 0 306 3353"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d=""
    stroke="black"
    stroke-linecap="round"
  />
</svg>;
