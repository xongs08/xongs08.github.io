import { Component } from "react"
import Markdown from "react-markdown"

interface State {
  markdown: string
}

export default class App extends Component<NonNullable<unknown>, State> {
  constructor(props: NonNullable<unknown>) {//lint
    super(props)
    this.state = { markdown: '' }
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/xongs08/xongs08.github.io/main/Markdown.md')
      .then(resp => resp.text())
      .then(data => this.setState({ markdown: data }))
      .catch(err => console.log(`Não foi possível fazer o request para o Markdown (raw): ${err}`))
  }

  render() {
    return <div className="markdown"><Markdown>{this.state.markdown}</Markdown></div>
  }
}
 