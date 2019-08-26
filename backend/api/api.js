const fetch = require("node-fetch"); // MUST DELETE IN REACT IMPLEMENTATION

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


/** 
 * @param {Object} { page_size, page, album_id }
 * @returns {Array} data.track_list -> array of tracks
 **/
const getAlbumTracks = getterFactory('album.tracks.get')


/** 
 * @param {Object} { f_has_lyrics, q_artist, q_track } 
 * @returns {Object} data.track -> track 
 **/
const matchTrack = getterFactory('matcher.track.get')


/** 
 * @param {Object} { track_id } 
 * @returns {Object} data.track -> track 
 **/
const getTrack = getterFactory('track.get')


/** 
 * @param {Object} { q_track, page_size, page, q_artist } 
 * @returns {Array} data.track_list -> array of tracks 
 **/
const searchTrack = getterFactory('track.search')


/** 
 * @param {Object} { country, page_size, page } 
 * @returns {Array} data.track_list -> array of tracks 
 **/
const getPopularTracks = getterFactory('chart.tracks.get')


/** 
 * @param {Object} { artist_id, page_size, page } 
 * @returns {Array} data.artist_list -> array of artists 
 **/
const getRelatedArtist = getterFactory('artist.related.get')


/** 
 * @param {Object} { q_artist, page_size, page } 
 * @returns {Array} data.artist_list -> array of artists 
 **/
const searchArtist = getterFactory('artist.search')


/** 
 * @param {Object} { artist_id } 
 * @returns {Object} data.artist -> artist 
 **/
const getArtist = getterFactory('artist.get')


/** 
 * @param {Object} { country, page_size, page } 
 * @returns {Array} data.artist_list -> array of artists 
 **/
const getPopularArtists = getterFactory('chart.artists.get')


/** 
 * @param {Object} { album_id } 
 * @returns {Object} data.album -> album 
 **/
const getAlbum = getterFactory('album.get')


/** 
 * @param {Object} { artist_id, page_size, page, s_release_date } 
 * @returns {Array} data.album_list -> array of albums 
 **/
const getAlbumsByArtist = getterFactory('artist.albums.get')


/** 
 * @param {Object} { q_track, q_artist } 
 * @returns {Object} data.lyrics -> lyrics 
 **/
const matchLyrics = getterFactory('matcher.lyrics.get')


/** 
 * @param {Object} { track_id } 
 * @returns {Object} data.lyrics -> lyrics 
 **/
const getLyrics = getterFactory('track.lyrics.get')

/* OBJECTS USED
track = {
    track_id,
    track_mbid,
    track_name,
    track_rating,
    track_length,
    commontrack_id,
    instrumental,
    has_lyrics,
    has_subtitles,
    lyrics_id,
    subtitle_id,
    album_id,
    album_name,
    artist_id,
    artist_mbid,
    artist_name,
    album_coverart_100x100,
    album_coverart_350x350,
    album_coverart_500x500,
    album_coverart_800x800,
    updated_time
}

artist = { 
    artist_id,
    artist_name,
    artist_name_translation_list: [],
    artist_comment,
    artist_country,
    artist_alias_list: [ [Object], [Object], [Object], [Object] ],
    artist_rating,
    artist_twitter_url,
    artist_credits: { artist_list: [] },
    restricted,
    updated_time 
} 

album = { 
    album_id,
    album_mbid,
    album_name,
    album_rating,
    album_release_date,
    artist_id,
    artist_name,
    primary_genres: { music_genre_list: [Array] },
    album_pline,
    album_copyright,
    album_label,
    restricted,
    updated_time,
} 

lyrics = {
    lyrics_id,
    explicit,
    lyrics_body,
    script_tracking_url,
    pixel_tracking_url,
    lyrics_copyright,
    updated_time
}
*/

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
