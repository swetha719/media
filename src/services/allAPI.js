import commonAPI from "./commonAPI";
import SERVER_URL from "./server_url";


// save video
// save video api call by add.js

export const addVideo=async(video)=>{
    return await commonAPI("POST",`${SERVER_URL}/allvideos`,video)
    
}

// fetch video api call

export const getAllVideo=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/allvideos`,"")
}


// api call for DELETING video

export const deleteVideo=async(videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/allvideos/${videoId}`,{})
}


// api call for SAVE history

export const watchHistory=async(video)=>{
    return await commonAPI("POST",`${SERVER_URL}/history`,video)
}

// api call for get history

export const getAllHistory=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/history`,"")
}

// api call for delete history

export const deleteHistory=async(videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${videoId}`,{})
}


// api call for adding category

export const addCategory=async(categoryDetails)=>{
    return await commonAPI("POST",`${SERVER_URL}/allcategory`,categoryDetails)
}

// api call for get category

export const getAllCategory=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/allcategory`,"")
}









