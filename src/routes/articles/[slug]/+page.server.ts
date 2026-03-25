import { getPostBySlug } from "$lib/sanity";
import type { PageServerLoad } from "../$types";

export const load: PageServerLoad = async ({params}:{params:any}) => {
    const res = await getPostBySlug(params.slug)
    
    return{
        post:res.data
    }
};