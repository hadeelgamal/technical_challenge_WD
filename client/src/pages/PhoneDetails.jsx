import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


function PhonesDetails() {
  const [phone, setPhone] = useState([]);
  const id = useParams().id;
  const getPhone = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/phones/${id}`)
      .then((response) => {
        const onePhone = response.data;
        setPhone(onePhone);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getPhone();
  }, [id]);

  return (
    <div className="Phones">
      <div className="max-w-2xl mx-auto mb-10">
          <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
            {/* <img
              className="rounded-t-lg w-full"
              src={require(`../images/${phone.imageFileName}`)}
              alt={"cardImage"}
            /> */}

            <div className="p-5">
             
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
                  {phone.name}
                </h5>
              <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
                {phone.description}
              </p>
              <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
                {phone.manufacturer}
              </p>
              <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
                {phone.color}
              </p>
              <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
                {phone.price}
              </p>
              <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
                {phone.screen}
              </p>
              <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
                {phone.processor}
              </p>
              <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
                {phone.ram}
              </p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default PhonesDetails;
