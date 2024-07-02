import BlogCard from '@/components/cards/blog'
import { getBlogs } from '@/service/blog.service'
import { Dot, Home } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'All Blogs',
}
async function BlogsPage() {
	const blogs = await getBlogs()
	console.log(blogs)

	return (
		<div className='max-w-6xl mx-auto'>
			<div className='relative min-h-[40vh] flex flex-col items-center justify-center'>
				<h2 className='font-creteRound text-center text-4xl section-title'>
					<span>Blogs </span>
				</h2>

				<div className='flex gap-1 items-center mt-4'>
					<Home className='w-4 h-4' />
					<Link
						href={'/'}
						className='opacity-90 hover:underline hover:opacity-100'
					>
						Home
					</Link>
					<Dot />
					<p className='text-muted-foreground'>Blogs</p>
				</div>
			</div>

			<div className='grid grid-cols-2 max-md:grid-cols-1 gap-x-4 gap-y-24  mt-15'>
				{blogs.map(blog => (
					<BlogCard key={blog.title} {...blog} isVertical />
				))}
			</div>
		</div>
	)
}
export default BlogsPage
