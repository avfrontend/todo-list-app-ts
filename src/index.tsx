import React from 'react'
import ReactDOM from 'react-dom'

interface Props {
    color?: string
}

class App extends React.Component<Props> {
    render() {
        return <div>{this.props.color}</div>
    }
}
ReactDOM.render(<App/>, document.querySelector('#root'))