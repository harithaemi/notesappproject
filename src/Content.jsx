import React from "react"
import SearchIcon from "./assets/search.png"

const Content = ({ setShowForm, search, setSearch, filter, setFilter }) => {
  return (
    <>
     
      <div className="flex justify-center gap-4 items-start z-10 relative">
        <div className="flex bg-white w-1/4 p-2 rounded-sm shadow-xl shadow-black/30 m-5">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="search here..."
            className="w-full p-1 outline-none"
          />
          <div className=" text-white flex items-center px-4  rounded-sm">
            <img src={SearchIcon} className="w-6 h-5" />
           
          </div>
        </div>

        <div
          onClick={() => setShowForm(true)}
          className="flex border-2 cursor-pointer border-white items-center gap-2 p-2 px-4 rounded-sm shadow-xl text-white m-5"
        >
          <h1 className="text-3xl">+</h1>
          <h2 className="text-2xl">New</h2>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-2 justify-center">
        {["active", "archived", "trash"].map(type => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`border-2 px-4 p-2 m-2 rounded-full shadow-xl
              ${filter === type
                ? "bg-cyan-600 text-white"
                : "bg-white text-cyan-800 hover:bg-cyan-200"
              }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>
    </>
  )
}

export default Content



