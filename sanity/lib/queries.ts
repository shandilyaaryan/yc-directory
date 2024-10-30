import { defineQuery } from "next-sanity";

export const STARTUP_QUERY = defineQuery(`*[_type == 'startup' && defined(slug.current)] | order(_createdAt desc){
    _id,
    slug,
    _createdAt,
    author -> {
      _id, name, image, bio
    },
    views,
    description,
    category,
    image
    
}`)