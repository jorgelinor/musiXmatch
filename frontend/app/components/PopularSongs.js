import React from 'react'
import CountrySelector from './CountrySelector.js'

export default class PopularSongs extends React.Component {
    state = {
        popularTracks: null,
        queryParams: {
            country: 'us',
            page_size: 10,
            page: 1
        }
    }

    componentDidMount = () => this.updateQueryParams(this.state.queryParams)

    updateQueryParams = (queryParams) => {
        const { country, page_size, page } = queryParams

        fetch(`http://localhost:3000/getPopularTracks?country=${country}&page_size=${page_size}&page=${page}`)
        .then((result) => result.json())
        .then((result) => {
            this.setState({
                popularTracks: result.track_list,
                queryParams
            })
        })
    }

    render() {
        let { country, page_size, page } = this.state.queryParams

        return (
            <div>
                <h1>
                    Most popular tracks in {country.toLocaleUpperCase()}:
                </h1>

                <ol start={1 + (page-1) * page_size}>
                    {this.state.popularTracks && this.state.popularTracks.map(({ track }, index) => (
                        <li key={track.track_id}>
                            {track.artist_name} — {track.track_name}
                        </li>
                    ))}
                </ol>
                
                <div>
                    Page: 
                    <button 
                        onClick={() => {
                            page = parseInt(page)-1
                            this.updateQueryParams({ country, page_size, page })
                        }}
                        disabled={page < 2}
                    >
                        &lt;
                    </button>
                    {page}
                    <button 
                        onClick={() => {
                            page = parseInt(page)+1
                            this.updateQueryParams({ country, page_size, page })
                        }}
                        disabled={page_size * (page+1) > 200}
                    >
                        &gt;
                    </button>
                </div>

                <div>
                    Items showed:
                    <button 
                        onClick={() => {
                            page_size = parseInt(page_size)-5
                            this.updateQueryParams({ country, page_size, page })
                        }}
                        disabled={page_size === 5}
                    >
                        -
                    </button> 
                    {page_size}
                    <button 
                        onClick={() => {
                            page_size = parseInt(page_size)+5
                            this.updateQueryParams({ country, page_size, page })
                        }}
                        disabled={page_size === 50}
                    >
                        +
                    </button>
                </div>
                
                Country: 
                <CountrySelector 
                    onChange={(country) => {
                        this.updateQueryParams({ country, page_size, page })
                    }}
                    defaultCountry={country} 
                />
                
            </div>
        )
    }
}
