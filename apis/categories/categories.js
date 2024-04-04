import {database} from "../../appwrite_config/appwrite_config";

const getCategories = async (req, res) => {
    try{
        console.log('req'+req.query)
        return await database.listDocuments(`${process.env.NEXT_PUBLIC_DATABASE_ID}`,`${process.env.NEXT_PUBLIC_COLLECTION_ID_CATEGORIES}`)
    }
    catch(e){
        console.log(e)
        return e.message
    }
}

module.exports = {getCategories};