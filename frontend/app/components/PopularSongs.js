import React from 'react'
// import { getPopularTracks } from '../utils/api'

export default class PopularSongs extends React.Component {
    state = {
        popularTracks: null
    }

    componentDidMount = () => {
        fetch('http://localhost:3000/getPopularTracks')
            .then((result) => result.json())
            .then((result) => {
                this.setState({
                    popularTracks: result.track_list
                })
            })
    }

    render() {
        return (
            <ul>
                {this.state.popularTracks && this.state.popularTracks.map(({ track }) => (
                    <li key={track.track_id}>{track.track_name}</li>
                ))}                
            </ul>
        )
    }
}