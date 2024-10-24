import { useEffect } from "react";
import axios from "axios";

// redux features import
import { useDispatch } from "react-redux";
import { setAllAdminJobs } from "../redux/jobSlice";

const useGetAllAdminJobs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async function FetchAllAdminJobs() {
      try {
        const response = await axios.get(`http://localhost:8000/api/jobs/getadminjobs`, {
          withCredentials: true
        });
        if (response.data.success) {
          dispatch(setAllAdminJobs(response.data.jobs));
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
};

export default useGetAllAdminJobs;