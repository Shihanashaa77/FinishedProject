
// redux feature import
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setAllApplicants } from "../redux/applicationSlice.js";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ApplicantsTable from "./ApplicantsTable.jsx";
import Navadmin from "./Navadmin.jsx";

const Viewapplications = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  

  useEffect(() => {
    (async function FetchAllApplicants() {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/applications/${id}/applicants`,
          { withCredentials: true }
        );
        if (res.data.success) {
          dispatch(setAllApplicants(res.data.job));
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div>
      <Navadmin/>
      <main>
        <div>
      
          <h3 align="center">Applications</h3>
          <ApplicantsTable />
        </div>
      </main>
    </div>
  );
};

export default Viewapplications;