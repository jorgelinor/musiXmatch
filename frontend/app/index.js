import React from 'react'
import ReactDOM from 'react-dom'
import PopularSongs from './components/PopularSongs'

class App extends React.Component {
    render() {
        return (
            <div>
                Hello World!
                <PopularSongs />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)
