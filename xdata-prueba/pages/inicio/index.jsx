import React from 'react'
import OverView from '../../src/components/OverView'
import SideBar from '../../src/components/SideBar'

const overView = () => {
  return (

    <div className="w-[100vw] flex flex-col md:flex-row">

        <SideBar />
        <OverView />
    </div>
  )
}

export default overView