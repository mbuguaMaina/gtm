import { getAllPosts, getFeaturedPosts } from "$lib/sanity";
 
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    const res:any = await getAllPosts()
    const res2:any = await getFeaturedPosts()
     
    if(res){
        return {
            allPosts: res.data,
            featuredPosts:res2.data
        }
    }
     
     
  return {
    status: 500,
    error: new Error(`Could not load projects. ${res.error}`)
  };
  
};