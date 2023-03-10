import SignupBox from "../signupBox/signupBox";

function Footer({ data }) {
  return (
    <div className="flex flex-col px-5 py-10 justify-between md:flex-row md:px-10">
      <div className="flex gap-2 md:gap-16">
        {Object.keys(data).map((key) => {
          return (
            <div>
              <h3 className="text-sm font-medium text-gray-900">{key}</h3>
              <ul
                role="list"
                className="mt-6 space-y-6"
              >
                {data[key].map((item) => (
                  <li
                    key={item.name}
                    className="text-sm"
                  >
                    <a
                      href={item.href}
                      className="text-gray-500 hover:text-gray-600"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <SignupBox />
    </div>
  );
}

export default Footer;
