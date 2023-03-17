import { useRouter } from "next/router";

function PopUp({ isModalOpen, setIsModalOpen, modalContent }) {
  const router = useRouter();

  return (
    <div
      id="popup-modal"
      tabIndex="-1"
      className={` fixed top-[40%] left-[8%] z-50 ${
        isModalOpen ? "block" : "hidden"
      }  overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100% - 1rem)] md:h-full `}
    >
      <div className="md:absolute top-[35%] left-[35%] w-full h-full max-w-md md:h-auto ">
        <div className=" bg-stone-200 rounded-lg shadow h-[25%]">
          <button
            type="button"
            className="absolute top-3 right-2.5  text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-0 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white "
            onClick={() => setIsModalOpen(false)}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="black"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-10 text-center">
            <h3 className="mb-7 text-lg font-normal text-black dark:text-gray-400">
              {modalContent}
            </h3>
            <button
              type="button"
              className="border-2  h-[40px] uppercase font-medium  text-sm inline-flex items-center px-5 py-2.5 text-center mr-2 border-black"
              onClick={() => setIsModalOpen(false)}
            >
              OK
            </button>
            <button
              data-modal-hide="popup-modal"
              type="button"
              className="text-gray-800 bg-white  focus:ring-4    border border-black text-sm font-medium px-5 py-2.5  focus:z-10"
              onClick={() => router.push("/auth/signin")}
            >
              Go to sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
