import "./intro.scss"
import { useEffect, useRef } from "react"
import { init } from "ityped"

export default function Intro () {
  const textRef = useRef()

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      strings: ["Web Developer", "Technical Support"],
    })
  }, [textRef])

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="./assets/portrait1.png" alt="portrait"></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi, I'm</h2>
          <h1>Yang (Patrick) Huang</h1>
          <h3>
            Passionate <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#projectsInfo">
          <img src="assets/down.png" alt="down arrow"></img>
        </a>
      </div>
    </div>
  )
}
