import React, { useEffect, useState } from 'react';
import { Box, Typography, TextField, Grid, Stack } from "@mui/material";
import Navuser from './Navuser';
import Jobcard from '../components/Jobcard';
import useGetjobs from '../hooks/useGetjobs';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchedQuery } from '../redux/jobSlice.js';
import SearchIcon from '@mui/icons-material/Search';

const Browsejobs = () => {
  const [filter, setFilter] = useState('');
  const [location, setLocation] = useState('');
  const [minSalary, setMinSalary] = useState('');
  const [maxSalary, setMaxSalary] = useState('');
  useGetjobs();

  const dispatch = useDispatch();
  const { allJobs } = useSelector((store) => store.job);

  useEffect(() => {
    return () => {
      dispatch(setSearchedQuery(""));
    };
  }, [dispatch]);

  // Filter the job listings based on the filter input
  const filteredJobs = allJobs.filter((job) => {
    const isTitleMatch = job.title.toLowerCase().includes(filter.toLowerCase());
    const isLocationMatch = location ? job.location.toLowerCase().includes(location.toLowerCase()) : true;
    const isSalaryMatch = 
      (!minSalary || job.salary >= parseInt(minSalary)) && 
      (!maxSalary || job.salary <= parseInt(maxSalary));

    return isTitleMatch && isLocationMatch && isSalaryMatch;
  });

  return (
    <>
      <header>
        <Navuser />
        <br /><br /><br />
      </header>

      <main style={{ display: "flex", flexDirection: "row", padding: "1rem" }}>
        <Box
          component="div"
          sx={{
            flexGrow: 0.2,
            padding: "1rem",
            margin: "1.25rem",
            border: "1px solid black",
            borderRadius: "0.5rem",
            width:250
          }}
        >
          <Stack spacing={1}>
            <Box display="flex" alignItems="center">
              <SearchIcon sx={{ fontSize: 42, color: '#000000' }} />
              <TextField
                variant="outlined"
                label="Filter by job title"
                fullWidth
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                sx={{ ml: 2}}
              />
            </Box>

            <TextField
              variant="outlined"
              label="Filter by location"
              fullWidth
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />

            <Grid container spacing={1}>
              <Grid item xs={6}>
                <TextField
                  variant="outlined"
                  label="Min Salary"
                  fullWidth
                  type="number"
                  value={minSalary}
                  onChange={(e) => setMinSalary(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  variant="outlined"
                  label="Max Salary"
                  fullWidth
                  type="number"
                  value={maxSalary}
                  onChange={(e) => setMaxSalary(e.target.value)}
                />
              </Grid>
            </Grid>
          </Stack>
        </Box>

        <Box
          component="div"
          sx={{
            display: "flex",
            flexGrow: 1,
            padding: "1rem",
            mt: "0.25rem",
          }}
        >
          <Grid container spacing={2}>
            {
              filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <Grid item key={job._id} xs={12} sm={6} md={4} lg={3}>
                    <Jobcard job={job} />
                  </Grid>
                ))
              ) : (
                <Typography>No jobs found</Typography>
              )
            }
          </Grid>
        </Box>
      </main>
    </>
  );
};

export default Browsejobs;
