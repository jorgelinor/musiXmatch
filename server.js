'use strict'

import { getPopularTracks } from './app/utils/api'
import express from 'express'

const app = express()

app.get('/', function (req, res) {
    getPopularTracks({
        country: 'us',
        page_size: '5',
        page: '1'
    }).then((data) => res.send(data))
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
