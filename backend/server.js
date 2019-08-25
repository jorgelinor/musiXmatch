'use strict'

import { getPopularTracks } from './api/api'
import express from 'express'

const cors = require('cors');
const app = express();

app.use(cors())

app.get('/getPopularTracks', function (req, res) {
    /** This is just an example */
    getPopularTracks({
        country: 'us',
        page_size: '5',
        page: '1'
    }).then((data) => {
        res.send(data)
    })
    
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
