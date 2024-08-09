import React, { useEffect, useState } from "react";
import TopNav from "../../components/TopNav";
import { IoAdd } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";

const url = "http://localhost:3000/rdvs";

const Mesrendezvous = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);

        console.log(response.data);

        setList(response.data);

        setError(null);
      } catch (error) {}
    };

    fetchData();
  }, []);

  return (
    <div className="p-12">
      <TopNav />
      <div className="flex items-center justify-between my-9">
        <h2 className="text-3xl">Mes rendez-vous</h2>
        <Link to="/addRendezVous">
          <IoAdd className="text-blue-800 text-2xl cursor-pointer" />
        </Link>
      </div>
      <table className=" border-slate-400 w-full ">
        <tbody>
          {list.map((item) => (
            <tr>
              <td class="border-b-2  border-slate-300">
                <div className="flex items-center gap-5 py-4">
                  <span>
                    <FaRegUserCircle className="text-4xl text-sky-600" />
                  </span>

                  <div className="flex flex-col">
                    <span>{format(item.date, "dd/MM/yyyy")}</span>
                    <span className="text-sky-600 font-semibold">
                      {item.patient.prenom}
                    </span>
                    <span>{item.titre}</span>
                  </div>
                </div>
              </td>

              <td class="border-b-2 border-slate-300">
                <div className="flex flex-col items-end">
                  <span>{item.heure}</span>
                  <span className="text-sky-600 font-semibold text-2xl">
                    <IoIosArrowForward />
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Mesrendezvous;
