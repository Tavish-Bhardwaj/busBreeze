import React from 'react'
import  './Search.css'
const Search = () => {
  return (
    
      <div className='outer-div flex gap-4 my-10 justify-center px-10'>
            <select className='w-64 py-3 pl-4 bg-zinc200 font-semibold rounded-md'>
                <option value="" disabled hidden selected>Job Role</option>
                <option value="ios Developer">iOS Developer</option>
                <option value="Android Developer">Android Developer</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="Developer Advocate">Developer Advocate</option>
            </select>
            <select className='w-64 py-3 pl-4 bg-zinc200 font-semibold rounded-md'>
                <option value="" disabled hidden selected>Job Type</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Contract">Contract</option>
            </select>
            <select className='w-64 py-3 pl-4 bg-zinc200 font-semibold rounded-md'>
                <option value="" disabled hidden selected>Location</option>
                <option value="Remote">Remote</option>
                <option value="In-Office">In-Office</option>
                <option value="Hybrid">Hybrid</option>   
            </select>
            <select className='w-64 py-3 pl-4 bg-zinc200 font-semibold rounded-md'>
                <option value="" disabled hidden selected>Experience</option>
                <option value="Fresher">Fresher</option>
                <option value="Junior Level">Junior Level</option>
                <option value="Mid Level">Mid Level</option>  
                <option value="Senior Level">Senior Level</option> 
            </select>
            <button className='w-64 py-3 pl-4 bg-blue-500 font-semibold rounded-md'>Search</button>
        </div>
    
  )
}

export default Search
