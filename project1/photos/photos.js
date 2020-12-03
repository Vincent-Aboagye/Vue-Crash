export const photos = {
    nameSpaced = true,
    state(){
        return{
            all: []

        }
    },

    mutations: {
        setPhotos(state, payload){
            state.all = payload
        }
    },

    actions: {
        async fetchPhotosForAlbum(ctx,{album}){
            const res = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${album.id}`)
            const data = await res.json()
            console.log(data)
            // ctx.commit("setPhotos",data)

        }

    }
}