const fetch = require("node-fetch"); // DELETE IN REACT IMPLEMENTATION

function getterFactory (route) {
    return (params) => {
        var url = new URL(`https://api.musixmatch.com/ws/1.1/${route}`)
        url.searchParams.append("apikey", "d926c38c914a884de5863a6fb33e46f5")

        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

        return fetch(url)
            .then((res) => res.json())
            .then((data) => {
                if (!data) {
                    throw new Error(data.message)
                }
        
                return data.message.body
            })
    }
}


// album.tracks.get

// data.track_list -> array of tracks
const getAlbumTracks = getterFactory('album.tracks.get')
// getAlbumTracks({
//     page_size: "10",
//     page: "1",
//     album_id: "13881272"
// }).then((data) => console.log(data))


// matcher.track.get

// data.track -> track
const matchTrack = getterFactory('matcher.track.get')
// matchTrack({
//     f_has_lyrics: "1",
//     q_artist: 'coldplay',
//     q_track: 'paradise'
// }).then((data) => console.log(data))


// track.get

// data.track -> track
const getTrack = getterFactory('track.get')
// getTrack({
//     track_id: "15449912"
// }).then((data) => console.log(data))


// track.search

// data.track_list -> array of tracks
const searchTrack = getterFactory('track.search')
// searchTrack({
//     q_track: 'paradise',
//     page_size: "5",
//     page: "1",
//     // q_artist: 'coldplay', // Optional
//     // f_has_lyrics: "1",
//     // q_lyrics: "Every tear a waterfall",
//     // s_track_rating: "desc",
// }).then((data) => console.log(data))


// chart.tracks.get

// data.track_list -> array of tracks
const getPopularTracks = getterFactory('chart.tracks.get')
// getPopularTracks({
//     country: 'us',
//     page_size: "5",
//     page: "1"
// }).then((data) => console.log(data))


// // artist.related.get

// data.artist_list -> array of artists
const getRelatedArtist = getterFactory('artist.related.get')
// getRelatedArtist({
//     artist_id: '1039',
//     page_size: "5",
//     page: "1"
// }).then((data) => console.log(data))


// // artist.search

// data.artist_list -> array of artists
const searchArtist = getterFactory('artist.search')
// searchArtist({
//     q_artist: 'coldplay',
//     page_size: "5",
//     page: "1"
// }).then((data) => console.log(data))


// // artist.get

// data.artist -> artist
const getArtist = getterFactory('artist.get')
// getArtist({
//     artist_id: '1039'
// }).then((data) => console.log(data))


// // chart.artists.get

// data.artist_list -> array of artists
const getPopularArtists = getterFactory('chart.artists.get')
// getPopularArtists({
//     country: 'us',
//     page_size: '5',
//     page: '1'
// }).then((data) => console.log(data))


// // album.get

// data.album -> album
const getAlbum = getterFactory('album.get')
// getAlbum({
//     album_id: '13881272'
// }).then((data) => console.log(data))


// // artist.albums.get

// data.album_list -> array of albums
const getAlbumsByArtist = getterFactory('artist.albums.get')
// getAlbumsByArtist({
//     artist_id: '1039',
//     page_size: '5',
//     page: '1',
//     s_release_date: 'desc'
// }).then((data) => console.log(data))


// // matcher.lyrics.get

// data.lyrics -> lyrics
const matchLyrics = getterFactory('matcher.lyrics.get')
// matchLyrics({
//     q_track: 'paradise',
//     q_artist: 'coldplay'
// }).then((data) => console.log(data))


// // track.lyrics.get

// data.lyrics -> lyrics
const getLyrics = getterFactory('track.lyrics.get')
// getLyrics({
//     track_id: '15449912'
// }).then((data) => console.log(data))


// track = {
//     "track_id":15449912
//     "track_mbid":"574eafc0-6909-4278-94fa-083ea5aefc61"
//     "track_name":"Paradise"
//     "track_rating":100
//     "track_length":278
//     "commontrack_id":10016944
//     "instrumental":false
//     "has_lyrics":true
//     "has_subtitles":true
//     "lyrics_id":7650688
//     "subtitle_id":28336
//     "album_id":13881272
//     "album_name":"Paradise"
//     "artist_id":1039
//     "artist_mbid":"cc197bad-dc9c-440d-a5b5-d52ba2e14234"
//     "artist_name":"Coldplay"
//     "album_coverart_100x100":"http://api.musixmatch.com/images/albums/6/9/1/9/7/7/13779196.jpg"
//     "album_coverart_350x350":"http://api.musixmatch.com/images/albums/6/9/1/9/7/7/13779196_350_350.jpg"
//     "album_coverart_500x500":"http://api.musixmatch.com/images/albums/6/9/1/9/7/7/13779196_500_500.jpg"
//     "album_coverart_800x800":"http://api.musixmatch.com/images/albums/6/9/1/9/7/7/13779196_800_800.jpg"
//     "updated_time":"2012-11-27T12:03:57Z"
// }

// artist = { 
//     artist_id: 1039,
//     artist_name: 'Coldplay',
//     artist_name_translation_list: [],
//     artist_comment: '',
//     artist_country: 'GB',
//     artist_alias_list: [ [Object], [Object], [Object], [Object] ],
//     artist_rating: 95,
//     artist_twitter_url: 'https://twitter.com/coldplay',
//     artist_credits: { artist_list: [] },
//     restricted: 0,
//     updated_time: '2013-11-05T11:24:57Z' 
// } 

// album = { 
//     album_id: 13881272,
//     album_mbid: 'd97825ff-ff11-4989-8c94-e5b14c6370ae',
//     album_name: 'Paradise',
//     album_rating: 79,
//     album_release_date: '2011-09-09',
//     artist_id: 1039,
//     artist_name: 'Coldplay',
//     primary_genres: { music_genre_list: [Array] },
//     album_pline: '2011 Parlophone Records Ltd, a Warner Music Group Company',
//     album_copyright: '2011 Parlophone Records Ltd, a Warner Music Group Company',
//     album_label: 'Parlophone UK',
//     restricted: 0,
//     updated_time: '2015-02-18T01:23:21Z' 
// } 

// lyrics = {
//     lyrics_id: 19414121,
//     explicit: 0,
//     lyrics_body:
//      'When she was just a girl\nShe expected the world\nBut it flew away from her reach\nSo she ran away in her sleep\n\nAnd dreamed of para-para-paradise\nPara-para-paradise\nPara-para-paradise\nEvery time she closed her eyes\n\nWhen she was just a girl\nShe expected the world\nBut it flew away from her reach\nAnd the bullets catch in her teeth\n\nLife goes on, it gets so heavy\nThe wheel breaks the butterfly\n...\n\n******* This Lyrics is NOT for Commercial use *******\n(1409618574780)',
//     script_tracking_url:
//      'https://tracking.musixmatch.com/t1.0/m_js/e_1/sn_0/l_19414121/su_0/rs_0/tr_3vUCAMjN5j5uXmU6mWQgzh1JaQx9efLJid4zHAxUNAGbCZKilOuR5ZBn3XQeCie754nJeHEZV75lE0qo9BFayzvbEGTnWiLj7gOD9cflG4o3Rlto4wVXPkcoD1oDQ5wEbbq5Rme07CH8GShwv70Jygt33ysAtPETU8nV9coAXmKFKN7-jXJwjoiMdhluc_ahIqP6T0LKBbBMlLtEcf9jYQb94dJ7VOrkrbGrJLK1aaBDf8nfi8UNpkSAmuH1a53ooJWnuDKg39JQcdsb5BJ3CjQ94WgMUVtrWsqJRHcOqNzENqdJJywudw24pULgy8VITZooQLjW9ovFhJjTMOH9pifELqP1gdB_xxnYU2Fe2fdAdpPZwfiN8Tt49t6pawmOHf1mkptNH84Ki7vIi8R_ondYXl7YCc5mk6_w9iXX5c6GW9YfNel83Z_j/',
//     pixel_tracking_url:
//      'https://tracking.musixmatch.com/t1.0/m_img/e_1/sn_0/l_19414121/su_0/rs_0/tr_3vUCAETfdokNv0EtQSiTHmFtDkZ8liWrmaFVadsu-Jiq5TLCfd0T9dKCGVMENpk-y6Wm82KhbTupE3KmQKhXtFuvFU2-AZSjQtcirSjHxfGClVSRMsIrWJ3NPNv4VPaXdqd0pVkuRrycxqYT4_rEPy7U_n3nxiyyuJW8K9T81h-AAXtdCEk2iPxP7jiUBdtuXFef19RlhNNjdP9TSpj1p-QoWlqOuPqrStJusd9-ZA49BIRV7mXvw-qaINUhm_w-IbDfSevqaDw0vx3mtkLXDZChX_gamu7WSAtbMVK7LGSsZgVmmscYNpZvNapz12E9hPl2DEQ2CaqKT9cWG1D5W6itJzOZvO1Q-IrqYX8n7yTCyKrlSPShTlEAHZtOpNW90bXYf310gXsarQrryUvRFv2b8N8IlD564fck7jrrSosnhquWRJ1KBzGj/',
//     lyrics_copyright:
//      'Lyrics powered by www.musixmatch.com. This Lyrics is NOT for Commercial use and only 30% of the lyrics are returned.',
//     updated_time: '2019-07-14T13:12:19Z'
// }

export {
    getAlbumTracks,
    matchTrack,
    getTrack,
    searchTrack,
    getPopularTracks,
    getRelatedArtist,
    searchArtist,
    getArtist,
    getPopularArtists,
    getAlbum,
    getAlbumsByArtist,
    matchLyrics,
    getLyrics,
}
