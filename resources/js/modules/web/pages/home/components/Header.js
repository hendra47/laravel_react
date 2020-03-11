import React from "react"

const displayName = "HomePageHeader"

function Header() {
  return <header className="bg-danger text-white">
    <div className="container text-center">
      <img width="125" height="125" src="https://randomuser.me/api/portraits/men/60.jpg" alt="..." className="rounded-circle" />
      <h1>Hendra Wijaya</h1>
      <p className="lead">Master in Information Technology</p>
      <p className="lead">Fullstack Developer 
      </p>
      <p className="lead"><i className="fa fa-heart text-danger" />{`{ PHP, JavaScript, Python, MySQL, MongoDB }`}</p>
    </div>
  </header>
}
Header.displayName = displayName

export default Header
