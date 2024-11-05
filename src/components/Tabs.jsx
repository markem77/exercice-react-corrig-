import {useState} from "react"
import {tabsData} from "../data/Tabs.js"
import React from 'react'


export default function Tabs({tabsData}) {
  const [selectedTab, setSelectedTab] = useState(0)
  // console.log(tabsData1)
  console.log(selectedTab)

  return <div className="max-w-2xl min-h-[250px] mx-auto rounded border 
  border-slate-400 mb-6">
    <div className="flex divide-x divide-slate-700">
      {tabsData.map((obj, index) => (
        <button
        key={index}
        onClick={() => setSelectedTab(index)}
        className="w-full p-4 uppercase font-medium bg-slate-200
        hover:bg-slate-300">
        {tabsData[index].tabTitle}
        </button>
      ))}
    </div>
    <div className="text-slate-100 px-6 pt-6 pb-10">
      <p className="text-2xl font-semibold mb-2">
        {tabsData[selectedTab].tabHeading}
      </p>
      <p>
        {tabsData[selectedTab].txt}
      </p>
    </div>
  </div>
  
}
