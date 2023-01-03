import React from "react"
import OverView from "../../src/components/OverView"
import SideBar from "../../src/components/SideBar"

const overView = () => {
  return (
    <>
      <SideBar />
      <div className="w-[100vw] flex flex-col sm:flex-row sm:justify-end">

        
        <OverView />
      </div>
    </>
  )
}

export default overView