import axios from "axios";
import { useEffect } from "react";

// redux features import
import { useDispatch } from "react-redux";
import { setAllAppliedJobs } from "../redux/jobSlice.js";

const useGetAppliedJobs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async function FetchAllAppliedJobs() {
      try {
        const response = await axios.get(`http://localhost:8000/api/applications/get`, {
          withCredentials: true
        });
        if (response.data.success) {
          dispatch(setAllAppliedJobs(response.data.application));
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
};

export default useGetAppliedJobs;