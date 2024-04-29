import {database} from "../../appwrite_config/appwrite_config.js";
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
        return await database.listDocuments(`${process.env.NEXT_PUBLIC_DATABASE_ID}`, `${process.env.NEXT_PUBLIC_COLLECTION_ID_VIDEOS}`,
            [Query.equal('userid', userId)]
        )
    } catch (e) {
        console.log(e)
        return e.message
    }

}

const getReelByCategoryID = async (req, res) => {
    try {
        const categoryId = req.params.id
        console.log(categoryId)
        return await database.listDocuments(`${process.env.NEXT_PUBLIC_DATABASE_ID}`, `${process.env.NEXT_PUBLIC_COLLECTION_ID_VIDEOS}`,
            [Query.equal('category', categoryId)]
        )
    } catch (e) {
        console.log(e)
        return e.message
    }


}

const getReelByCategoryName = async (req, res) => {
    try {
        const categoryName = req.params.name
        console.log(categoryName)
        return await database.listDocuments(`${process.env.NEXT_PUBLIC_DATABASE_ID}`, `${process.env.NEXT_PUBLIC_COLLECTION_ID_VIDEOS}`,
            [Query.equal('category', categoryName)]
        )
    } catch (e) {
        console.log(e)
        return e.message
    }
}

const getReelsBySearch = async (req, res) => {
    try {
        const search = req.params.search
        console.log(search)
        return await database.listDocuments(`${process.env.NEXT_PUBLIC_DATABASE_ID}`, `${process.env.NEXT_PUBLIC_COLLECTION_ID_VIDEOS}`,
            [Query.search('title', search)]
        )
    } catch (e) {
        console.log(e)
        return e.message
    }
}

const getReelsByTag = async (req, res) => {
    try {
        const tag = req.params.tag
        console.log(tag)
        return await database.listDocuments(`${process.env.NEXT_PUBLIC_DATABASE_ID}`, `${process.env.NEXT_PUBLIC_COLLECTION_ID_VIDEOS}`,
            [Query.search('tags', tag)]
        )
    } catch (e) {
        console.log(e)
        return e.message
    }

}

const getReelsByFilters = async (req, res) => {
    try {
        const filters = req.query;
        const queryFilters = Object.keys(filters).map(key => {
            const value = filters[key];
            if (typeof value === 'string'&&value.includes(',')){
                console.log('String to be split:', value); // Log the string before splitting
                // Split the string by commas to create an array
                const arrayValue = value.split(',');
                if (Array.isArray(arrayValue) && arrayValue.length > 0) {
                    console.log('array', arrayValue);
                    arrayValue.forEach(arrayValueKey => {
                        console.log('arrayValueKey:', arrayValueKey);
                        console.log(Query.equal(key,`${arrayValueKey}`));
                        return Query.equal(key,`'${arrayValueKey}'`)
                    }
                    );
                    // return Query.search(key, `${arrayValue}`);
                }
            }else{
                return Query.equal(key,value);
            }
        });

        console.log('queryFilters:',queryFilters)
        return await database.listDocuments(`${process.env.NEXT_PUBLIC_DATABASE_ID}`, `${process.env.NEXT_PUBLIC_COLLECTION_ID_VIDEOS}`,
            queryFilters
        )
    } catch (e) {
        console.log(e)
        return e.message
    }
}


export  {getAllReels, getReelByID, getReelByUserID, getReelByCategoryID, getReelByCategoryName, getReelsBySearch, getReelsByTag, getReelsByFilters};