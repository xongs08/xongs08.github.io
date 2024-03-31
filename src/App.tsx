import { useEffect } from "react"

export default function App() {
  useEffect(() => {
    fetch("https://npm-package-api.onrender.com/package/version", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify([ "nodemon" ])
    })
      .then(resp => resp.json())
      .then(data => console.log(`Just requested NPM Package API to avoid Render free application delay\n${data}`))
  }, [])

  return (
    <div className="content">
      <div className="container">
        <h1 className="txt blue"># README.md</h1>
        <h2 className="txt blue">Who am i?</h2>
        <ul>
          <li>
            <p>
              <span className="txt blue">Name:</span> <span className="txt">João Zacchello;</span>
            </p>
          </li>
          <li>
            <p>
              <span className="txt blue">Languages:</span> <span className="txt">Portuguese 🇧🇷</span>, <span className="txt">English 🇺🇸</span>;
            </p>
          </li>
          <li>
            <p className="txt blue">Technologies/frameworks:</p>
            <ul>
              <li>
                <a href="https://nodejs.org/en/about" target="_blank">NodeJS;</a>
              </li>
              <li>
                <a href="https://react.dev" target="_blank">React;</a>
              </li>
              <li>
                <a href="https://typescriptlang.org" target="_blank">Typrscript;</a>
              </li>
              <li>
                <a href="https://www.mongodb.com/atlas/database" target="_blank">MongoDB;</a>
              </li>
              <li>
                <a href="https://firebase.google.com" target="_blank">Firebase;</a>
              </li>
              <li>
                <a href="https://express js.com" target="_blank">Express;</a>
              </li>
              <li>
                <a href="https://www.python.org" target="_blank">Python;</a>
              </li>
              <li>
                <a href="https://www.java.com/en/download/help/whatis_java.html" target="_blank">Java;</a>
              </li>
            </ul>
          </li>
        </ul>
        <br />
        <div className="badge-container">
          <a href="https://github.com/xongs08">
            <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="Github Badge" width="100px" height="30px" />
          </a>
          <br />
          <a href="https://www.instagram.com/xongs.og">
            <img src="https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white" alt="Instagram Badge" width="100px" height="30px" />
          </a>
        </div>
        <br />
        <h3 className="blue txt">Projects</h3>
        <ul>
          <li>
            <a href="https://github.com/zacchellodev/vitemin">Vitemin</a>
          </li>
          <li>
            <a href="https://github.com/xongs08/xongs08.github.io/">Repo of this site</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
