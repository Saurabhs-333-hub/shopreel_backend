import { database, storage } from "../../appwrite_config/appwrite_config";


const uploadSong = async (req, res) => {
    try {
        const song = req.body
        console.log(song)
        return await database.createDocument(`${process.env.NEXT_PUBLIC_DATABASE_ID}`, `${process.env.NEXT_PUBLIC_COLLECTION_ID_SONGS}`, song)
    } catch (e) {
        console.log(e)
        return e.message
    }
}

const getSongs = async (req, res) => {
    try {
        return await database.listDocuments(`${process.env.NEXT_PUBLIC_DATABASE_ID}`, `${process.env.NEXT_PUBLIC_COLLECTION_ID_SONGS}`)
    } catch (e) {
        console.log(e)
        return e.message
    }
}

const getSongByID = async (req, res) => {
    try {
        const songId = req.params.id
        console.log(songId)
        return await database.getDocument(`${process.env.NEXT_PUBLIC_DATABASE_ID}`, `${process.env.NEXT_PUBLIC_COLLECTION_ID_SONGS}`, songId)
    } catch (e) {
        console.log(e)
        return e.message
    }
}

const getSongsByUserID = async (req, res) => {
    try {
        const userId = req.params.id
        console.log(userId)
        return await database.listDocuments(`${process.env.NEXT_PUBLIC_DATABASE_ID}`, `${process.env.NEXT_PUBLIC_COLLECTION_ID_SONGS}`,
            [Query.equal('userid', userId)]
        )
    } catch (e) {
        console.log(e)
        return e.message
    }

}

const getSongsByCategoryID = async (req, res) => {
    try {
        const categoryId = req.params.id
        console.log(categoryId)
        return await database.listDocuments(`${process.env.NEXT_PUBLIC_DATABASE_ID}`, `${process.env.NEXT_PUBLIC_COLLECTION_ID_SONGS}`,
            [Query.equal('category', categoryId)]
        )
    } catch (e) {
        console.log(e)
        return e.message
    }
}

const getSongsByCategoryName = async (req, res) => {
    try {
        const categoryName = req.params.name
        console.log(categoryName)
        return await database.listDocuments(`${process.env.NEXT_PUBLIC_DATABASE_ID}`, `${process.env.NEXT_PUBLIC_COLLECTION_ID_SONGS}`,
            [Query.equal('category', categoryName)]
        )
    } catch (e) {
        console.log(e)
        return e.message
    }
}

const uploadSongToStorage = async (req, res) => {
    try {
        console.log(req.data)
        const file = req.data
        const buffer = file.data
        const name = file.name
        const path = `songs/${name}`
        const id = Date.now()
        const response = await storage.createFile(`${process.env.NEXT_PUBLIC_COLLECTION_ID_SONGS}`, id, file)
        return response
    } catch (e) {
        console.log(e)
        return e.message
    }
}

module.exports = { uploadSong, getSongs, getSongByID, getSongsByUserID, getSongsByCategoryID, getSongsByCategoryName, uploadSongToStorage };