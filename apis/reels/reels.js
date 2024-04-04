import {database} from "../../appwrite_config/appwrite_config";
import {Query} from "node-appwrite";

const getAllReels = async (req, res) => {
    try {
        return await database.listDocuments(`${process.env.NEXT_PUBLIC_DATABASE_ID}`, `${process.env.NEXT_PUBLIC_COLLECTION_ID_VIDEOS}`)
    } catch (e) {
        console.log(e)
        return e.message
    }
}

const getReelByID = async (req, res) => {
    try {
        const reelId = req.params.id
        console.log(reelId)
        return await database.getDocument(`${process.env.NEXT_PUBLIC_DATABASE_ID}`, `${process.env.NEXT_PUBLIC_COLLECTION_ID_VIDEOS}`, reelId)
    } catch (e) {
        console.log(e)
        return e.message
    }
}

const getReelByUserID = async (req, res) => {
    try {
        const userId = req.params.id
        console.log(userId)
        return await database.listDocuments(`${process.env.NEXT_PUBLIC_DATABASE_ID}`, `${process.env.NEXT_PUBLIC_COLLECTION_ID_VIDEOS}`, [
            Query.equal('userid', userId)
        ])
    } catch (e) {
        console.log(e)
        return e.message
    }

}


module.exports = {getAllReels, getReelByID, getReelByUserID};