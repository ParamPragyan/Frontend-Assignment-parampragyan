import React from 'react'
import data from "../data.json"

const Projects = () => {
  return (
    <div className="projects flex flex-col gap-8">
          <div className="flex justify-between">
            <h1 className="text-[2rem] font-semibold">Recent Videos</h1>
            <button className=" text-[1.5rem] font-medium underline-offset-2 underline">
              All Videos {">"}
            </button>
          </div>
          <div className=" flex flex-wrap gap-8">
            {data.projects.map((project, idx) => (
               <div className="max-sm:w-full" key={idx}>
               <div className="w-[35rem] h-[20rem] max-sm:w-full bg-[black] rounded-lg"></div>
               <div key={idx} className="text-[1.2rem] cursor-pointer font-medium pt-2">
                 {project.name}
               </div>
             </div>
            ))}
            
          </div>
        </div>
  )
}

export default Projects