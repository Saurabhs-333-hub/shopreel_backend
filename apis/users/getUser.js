const { database } = require('../../appwrite_config/appwrite_config');
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

module.exports = {getUser};