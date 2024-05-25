export interface ChildProps {
	children: React.ReactNode
}
export interface IBlog {
	title: string
	description: string
	author: IAuthor
	category: ICategoryAndTags
	tag: ICategoryAndTags
	image: { url: string }
	content: { html: string }
	createdAt: string
}

export interface IAuthor {
	name: string
	image: { url: string }
}
export interface ICategoryAndTags {
	name: string
	slug: string
}
