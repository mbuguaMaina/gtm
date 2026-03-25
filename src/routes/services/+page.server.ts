import { getAllProjects } from '$lib/sanity/queries/projects';
import type { Load } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').Load} */
export const load: Load = async ( ) => {
 
  const res:any = await getAllProjects();
 
  if (res) {
    return {
      status: 200,
       projects:res.data
    };
  }

  return {
    status: 500,
    error: new Error(`Could not load projects. ${res.error}`)
  };
}