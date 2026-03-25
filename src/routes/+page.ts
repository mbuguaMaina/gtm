import { getAllCaseStudies } from '$lib/sanity';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
    const  caseStudy = await getAllCaseStudies()
    
	return {
		caseStudy: caseStudy.data[0]
	};
};