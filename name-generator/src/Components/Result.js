import React from 'react'

export default function Result(props) {
  return (
    <div>
      <div className="container">
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true"
        className="scrollspy-example bg-body-tertiary p-5 rounded-2"
        tabIndex="0"
      >
        <h4 id="scrollspyHeading1">Here, </h4>
      </div>
    </div>
    </div>
  )
}
//{props.res.map((e)=>{return e})}