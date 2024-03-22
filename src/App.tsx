export default function App() {
  return (
    <div className="content" style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      lineHeight: 2,
      backgroundColor: "#0d1117",
      paddingTop: "230px",
      paddingBottom: "250px",
    }}>
      <div className="container" style={{
        color: "#f2f2f2",
        fontFamily: "JetBrains Mono, monospace",
        fontSize: 20
      }}>
        <h1># README.md</h1>
        <h2>Who am i?</h2>
        <ul>
          <li><p>Name: João Zacchello;</p></li>
          <li><p>Languages: Portuguese 🇧🇷, English 🇺🇸;</p></li>
          <li>
            <p>Technologies/frameworks:</p>
              <ol><a href="https://nodejs.org/en/about" target="_blank">NodeJS;</a></ol>
              <ol><a href="https://react.dev" target="_blank">React;</a></ol>
              <ol><a href="https://typescriptlang.org" target="_blank">Typescript;</a></ol>
              <ol><a href="https://www.mongodb.com/atlas/database" target="_blank">MongoDB;</a></ol>
              <ol><a href="https://firebase.google.com/?hl=en" target="_blank">Firebase;</a></ol>
              <ol><a href="https://expressjs.com" target="_blank">Express;</a></ol>
              <ol><a href="https://www.python.org" target="_blank">Python;</a></ol>
              <ol><a href="https://www.java.com/en/download/help/whatis_java.html" target="_blank">Java;</a></ol>
          </li>
        </ul>
        <br />
        <a href="https://github.com/xongs08">
          <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="Github Badge" width="100px" height="30px" />
        </a>
        <br />
        <a href="https://www.instagram.com/xongs.og">
          <img src="https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white" alt="Instagram Badge" width="100px" height="30px" />
        </a>
        <br />
        <h3>Projects</h3>
        <ul>
          <li><a href="https://github.com/zacchellodev/vitemin">Vitemin</a></li>
          <li><a href="https://github.com/xongs08/xongs.github.io">Repo of this site (made with vitemin)</a></li>
        </ul>
      </div>
    </div>
  )
}
