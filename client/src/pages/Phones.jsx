import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Phones() {
  const [phones, setPhones] = useState([]);

  const getAllPhones = () => {

    axios
      .get(`${process.env.REACT_APP_API_URL}/api/phones`)
      .then((response) => {
        console.log(response.data);
        setPhones(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllPhones();
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3">
      {phones.map((phone) => (
        <div key={phone.id} className="max-w-2xl mx-auto mb-10">
          <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
            <img
              className="rounded-t-lg w-full"
              src={require(`../images/${phone.imageFileName}`)}
              alt={"cardImage"}
            />

            <div className="p-5">
              <Link to={`/phones/${phone.id}`}>
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
                  {phone.name}
                </h5>
              </Link>
              <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
                {phone.description}
              </p>
              <Link
                to={`/phones/${phone.id}`}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="-mr-1 ml-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Phones;
