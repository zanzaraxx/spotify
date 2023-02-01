import api from "../api/axios";

const apiService = {
    async getAllPlaylists() {
        const {data} = await api.get('me/playlists')
        return data
    },
    async getPlaylistsById(id) {
        const {data} = await api.get(`playlists/${id}`)
        return data
    },
    async getPlayer() {
        const {data} = await api.get(`me/player`)
        return data
    },
    async getSearchData(inputData) {
        const {data} = await api.get(`search?q=${inputData}&type=track,album,artist,playlist,show,episode,audiobook`)
        return data
    },
}

export default apiService