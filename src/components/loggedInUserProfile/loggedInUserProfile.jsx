import { useState, useEffect } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTableColumns,
  faListDots,
  faUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

function LoggedInUserProfile() {
  const { data, status } = useSession();
  const [profile, setProfile] = useState();
  useEffect(() => {
    if (data?.user) {
      setProfile(
        (
          data.user.firstName.charAt(0) + data.user.lastName.charAt(0)
        ).toUpperCase()
      );
    }
  }, [data?.user]);

  return (
    <div className="flex items-center gap-4 lg:py-3 ml-auto mr-5 ">
      <div className="drop-down">
        <div className="flex items-center gap-2">
          {data?.image ? (
            <img
              src={data?.image}
              alt="user profile"
              referrerPolicy="no-referrer"
              className="w-[40px] h-[40px] rounded-full border-2 border-slate-300 p-[2px]"
            />
          ) : (
            <div className="relative inline-flex items-center justify-center w-10 h-10  bg-gray-100 rounded-full dark:bg-gray-600">
              <span className="font-medium text-gray-600 dark:text-gray-300">
                {profile}
              </span>
            </div>
          )}
          <span>
            {(data?.name && data?.name) ||
              (data?.user?.firstName &&
                data?.user?.firstName + " " + data?.user?.lastName)}
          </span>
        </div>

        <ul className="drop-down-menu hidden md:block">
          <li className="drop-down-item-1  ">
            <Link
              href={""}
              className=" w-full flex items-center"
            >
              <FontAwesomeIcon
                icon={faTableColumns}
                style={{
                  marginRight: "11px",
                  marginLeft: "10px",
                }}
              />
              <span
                className="hover:translate-x-1 transition-all
                block "
              >
                Dashboard
              </span>
            </Link>
          </li>
          <li className="drop-down-item-2">
            <Link
              href={"/orders"}
              className=" w-full flex items-center"
            >
              <FontAwesomeIcon
                icon={faListDots}
                style={{
                  marginRight: "8px",
                  marginLeft: "10px",
                }}
              />
              <span
                className="hover:translate-x-1 transition-all
                block "
              >
                {" "}
                Orders
              </span>
            </Link>
          </li>
          <li className="drop-down-item-3">
            <Link
              href={""}
              className=" w-full flex items-center"
            >
              <FontAwesomeIcon
                icon={faUser}
                style={{
                  marginRight: "10px",
                  marginLeft: "10px",
                }}
              />

              <span
                className="hover:translate-x-1 transition-all
                block "
              >
                {" "}
                Profile
              </span>
            </Link>
          </li>
          <li
            className="drop-down-item-4 pb-4"
            onClick={() => {
              signOut();
            }}
          >
            <FontAwesomeIcon
              icon={faRightFromBracket}
              style={{
                marginRight: "10px",
                marginLeft: "10px",
              }}
            />

            <span
              className="hover:translate-x-1 transition-all
                block "
            >
              {" "}
              Sign out
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LoggedInUserProfile;
