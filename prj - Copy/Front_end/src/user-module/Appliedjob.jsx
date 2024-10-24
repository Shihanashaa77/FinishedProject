import React from "react";
import Navuser from "./Navuser";
import AppliedJobsTable from "./AppliedJobsTable";

const Appliedjob = () => {

  return (
    <>
      <header>
        <Navuser/>
      </header>
      <main>
        <h3 align="center">Applied Jobs</h3>
        <div id="applied-jobs-table">
          <AppliedJobsTable />
        </div>
      </main>
    </>
  );
};

export default Appliedjob;
