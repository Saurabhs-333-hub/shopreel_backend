import {database} from "../../appwrite_config/appwrite_config.js";

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

const getCategoryByID = async (req, res) => {
    try{
        const categoryId = req.params.id
        console.log(categoryId)
        return await database.getDocument(`${process.env.NEXT_PUBLIC_DATABASE_ID}`,`${process.env.NEXT_PUBLIC_COLLECTION_ID_CATEGORIES}`,categoryId )
    }
    catch(e){
        console.log(e)
        return e.message
    }
}

export {getCategories, getCategoryByID};