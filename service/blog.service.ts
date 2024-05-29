import { IBlog } from '@/app/types'
import request, { gql } from 'graphql-request'
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getBlogs = async () => {
	const query = gql`
		query MyQuery {
			blogs {
				title
				slug
				createdAt
				author {
					name
					bio
					image {
						url
					}
				}
				category {
					name
					slug
				}
				description
				tag {
					name
					slug
				}
				category {
					name
					slug
				}
				image {
					url
				}
				content {
					html
				}
			}
		}
	`
	const { blogs } = await request<{ blogs: IBlog[] }>(graphqlAPI, query)
	return blogs
}
export const getDetailedBlog = async (slug: string) => {
	const query = gql`
		query MyQuery($slug: String!) {
			blog(where: { slug: $slug }) {
				author {
					name
					image {
						url
					}
					bio
					id
				}
				content {
					html
				}
				createdAt
				image {
					url
				}
				slug
				tag {
					name
					slug
				}
				category {
					name
					slug
				}
				title
			}
		}
	`

	const { blog } = await request<{ blog: IBlog }>(graphqlAPI, query, { slug })
	return blog
}
