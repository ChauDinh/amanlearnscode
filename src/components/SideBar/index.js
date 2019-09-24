import React from "react"
import Search from "./Search"
import "./sidebar.css"
import Pages from "./Pages"
import Archive from "./Archive"

const SideBar = () => {
  return (
    <aside>
      <Search />
      <Pages />
      <Archive />
    </aside>
  )
}

export default SideBar
