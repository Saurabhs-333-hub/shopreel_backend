import { database } from "../../appwrite_config/appwrite_config.js"

const getUser = async (req, res) => {
    try{
        const userId = req.params.id
        console.log(userId)
 return await database.getDocument(`${process.env.NEXT_PUBLIC_DATABASE_ID}`,`${process.env.NEXT_PUBLIC_COLLECTION_ID_USERS}`,userId )

    }
    catch(e){
        console.log(e)
        return e.message
    }
}

export {getUser};