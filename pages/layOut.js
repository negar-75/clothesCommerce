import Footer from "../src/components/footer/footer";
import Navbar from "../src/components/navbar/navbar";

const Layout = ({ children }) => {
  return (
    <div className="relative h-full">
      <header>
        <Navbar />
      </header>

      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
