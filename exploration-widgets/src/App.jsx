import { Routes, Route, Link } from "react-router-dom";
import { Entry } from "./pages/Entry";
import { Home } from "./pages/Home";
import { SignUp } from "./pages/Signup";

function App() {
  const destination = [
    {
      pathName: "",
      name: "type tools 🫠",
    },
    {
      pathName: "/Signup",
      name: "Sign up",
    },
    {
      pathName: "/",
      name: "Shop",
    },
    {
      pathName: "/Entry",
      name: "Contact",
    },
  ];

  const newDestination = destination.slice(1);

  return (
    <>
      <nav className=" p-8 absolute w-full top-0 left-0">
        <ul className="flex justify-between">
          <li>
            <Link className="hover:text-[#0000FF]" to="/">
              {destination[0].name}
            </Link>
          </li>
          <div className="flex gap-6 ">
            {newDestination.map((dest, index) => (
              <Link
                className="hover:text-[#0000FF]"
                to={dest.pathName}
                key={index}
              >
                {dest.name}
              </Link>
            ))}
          </div>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Entry" element={<Entry />} />
      </Routes>
    </>
  );
}

export default App;
