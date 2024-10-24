import { useEffect } from "react";
import axios from "axios";
// redux features import
import { useDispatch, useSelector } from "react-redux";
import { setAllJobs } from "../redux/jobSlice.js";

const useGetjobs = () => {

    const dispatch = useDispatch();
    const { searchQuery } = useSelector((store) => store.job);
    useEffect(() => {
        (async function FetchAllJobs() {
            try {
                const response = await axios.get(
                    `http://localhost:8000/api/jobs/get?keyword=${searchQuery}`,
                    { withCredentials: true }
                );
                if (response.data.success) {
                    dispatch(setAllJobs(response.data.jobs));
                }
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);
};
export default useGetjobs
