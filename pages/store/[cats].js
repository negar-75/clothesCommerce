import Navbar from "../../src/components/navbar/navbar";
import Link from "next/link";
import Context from "../../libs/context";
import StoreGrid from "../../src/components/storeGrid/storeGrid";
import firstLetterToUpperCase from "../../functions/firstLetterUpperCase";
function Cats({ data, category }) {
  return (
    <div className="h-screen">
      <header>
        <Navbar />
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
    </div>
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
