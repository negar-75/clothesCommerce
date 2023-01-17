function Navbar() {
  return (
    <div className="flex px-6 py-4 justify-between items-center ">
      <span className="cursor-pointer">My closet</span>

      <nav className="flex gap-5 ">
        <a href="#">Sign in</a>
        <a href="#">Resgister</a>
        <a href="#">Find in store</a>
      </nav>
    </div>
  );
}

export default Navbar;
