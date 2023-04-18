import { useState } from "react";
import { signOut } from "next-auth/react";

function MobileSidebar() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  return (
    <>
      <nav className="md:hidden">
        <div
          className={`fixed left-[20px] top-[15px] z-[100] transition-all duration-[0.7s]  ${
            sidebarIsOpen && "left-[85%]"
          } `}
          onClick={() => setSidebarIsOpen((pre) => !pre)}
        >
          <div
            className="cursor-pointer inline-block w-auto my-0 mx-auto transition-all duration-[0.7s] "
            id="btn"
          >
            <div
              className={`block h-[2px] w-[30px] bg-black my-[7px] mx-auto transition-all duration-[0.7s] ${
                sidebarIsOpen && "rotate-45 translate-y-3 bg-stone-300"
              }`}
            ></div>
            <div
              className={`block h-[2px] w-[30px] bg-black my-[7px] mx-auto ${
                sidebarIsOpen && "hidden"
              }`}
            ></div>
            <div
              className={`block h-[2px] w-[30px] bg-black my-[7px] mx-auto transition-all duration-[0.7s] ${
                sidebarIsOpen && "-rotate-45 translate-y-[3px] bg-stone-300"
              }`}
            ></div>
          </div>
        </div>
      </nav>
      <div
        className={`${
          sidebarIsOpen ? "w-screen" : "w-0 "
        }  transition-all duration-[0.7s]  fixed top-0 left-0 right-0 bottom-0 z-[60] flex justify-center bg-black  `}
      >
        <ul class=" w-[80%] h-full  text-3xl space-y-20 mt-16 text-center overflow-hidden text-stone-200">
          <li
            className={`-translate-x-[100%] transition-all duration-[0.7s] ${
              sidebarIsOpen && " translate-x-0 cursor-pointer  "
            } `}
          >
            <span
              className="after:content-[''] after:absolute 
             after:-bottom-2 after:inline-block after:h-[2px] after:w-[70%] 
             after:scale-x-0 after:bg-stone-200 after:left-[15%] hover:after:scale-x-100 after:transition-all after:duration-[0.7s]"
            >
              Profile
            </span>
          </li>
          <li
            className={`-translate-x-[100%] transition-all duration-[0.7s] ${
              sidebarIsOpen && "translate-x-0 cursor-pointer"
            } `}
          >
            <span
              className="after:content-[''] after:absolute 
             after:-bottom-2 after:inline-block after:h-[2px] after:w-[70%] 
             after:scale-x-0 after:bg-stone-200 after:left-[15%] hover:after:scale-x-100 after:transition-all after:duration-[0.7s]"
            >
              Orders
            </span>
          </li>
          <li
            className={`-translate-x-[100%] transition-all duration-[0.7s] ${
              sidebarIsOpen && "translate-x-0 cursor-pointer"
            } `}
          >
            <span
              className="after:content-[''] after:absolute 
             after:-bottom-2 after:inline-block after:h-[2px] after:w-[70%] 
             after:scale-x-0 after:bg-stone-200 after:left-[15%] hover:after:scale-x-100 after:transition-all after:duration-[0.7s]"
            >
              Dashboard
            </span>
          </li>
          <li
            className={`-translate-x-[100%] transition-all duration-[0.7s] ${
              sidebarIsOpen && "translate-x-0 cursor-pointer"
            } `}
            onClick={() => {
              signOut();
            }}
          >
            <span
              className="after:content-[''] after:absolute 
             after:-bottom-2 after:inline-block after:h-[2px] after:w-[70%] 
             after:scale-x-0 after:bg-slate-400 after:left-[15%] hover:after:scale-x-100 after:transition-all after:duration-[0.7s]"
            >
              Sign out
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MobileSidebar;
