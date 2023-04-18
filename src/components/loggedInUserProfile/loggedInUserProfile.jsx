import { useState, useEffect } from "react";
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
            <FontAwesomeIcon
              icon={faTableColumns}
              style={{
                marginRight: "10px",
                marginLeft: "10px",
              }}
            />
            <span>Dashboard</span>
          </li>
          <li className="drop-down-item-2">
            <FontAwesomeIcon
              icon={faListDots}
              style={{
                marginRight: "10px",
                marginLeft: "10px",
              }}
            />
            <span> Orders</span>
          </li>
          <li className="drop-down-item-3">
            <FontAwesomeIcon
              icon={faUser}
              style={{
                marginRight: "10px",
                marginLeft: "10px",
              }}
            />

            <span> Profile</span>
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

            <span> Sign out</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LoggedInUserProfile;
