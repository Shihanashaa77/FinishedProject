import React from 'react'
import Navuser from './Navuser'
import AppliedJobsTable from './AppliedJobsTable'

const Userhome = () => {
  return (
    <div>
        <Navuser/>
    <div className='user'>
    <main>
        <h3 align="center">Applied Jobs</h3>
        <div id="applied-jobs-table">
          <AppliedJobsTable />
        </div>
      </main>
      
    </div>
    </div>
  )
}

export default Userhome