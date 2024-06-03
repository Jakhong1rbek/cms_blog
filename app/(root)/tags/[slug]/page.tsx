import BlockCard from '@/components/cards/block-card'
import { getBlogsByTag } from '@/service/tag.service'
import { Dot, Home } from 'lucide-react'
import Link from 'next/link'

// export const generateMetadata = async ({
// 	params,
// }: {
// 	params: { slug: string }
// }) => {
// 	const blog = await getBlogsByTag(params.slug)
// 	return {
// 		title: blog.name,
// 	}
// }

export async function generateMetadata({
	params,
}: {
	params: { slug: string }
}) {
	const tag = await getBlogsByTag(params.slug)

	return {
		title: tag.name,
	}
}

async function Page({ params }: { params: { slug: string } }) {
	const tag = await getBlogsByTag(params.slug)
	console.log(tag)

	return (
		<div className='max-w-6xl mx-auto'>
			<div className='relative min-h-[25vh] flex items-center justify-end flex-col'>
				<h2 className='text-center text-4xl section-title font-creteRound mt-2'>
					<span>{tag.name}</span>
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
					<p className='text-muted-foreground'>Tags</p>
				</div>
			</div>
			<div className='grid grid-cols-2 max-md:grid-cols-1 gap-x-4 gap-y-24  mt-24'>
				{tag.blogs.map(blog => (
					<BlockCard key={blog.title} {...blog} isVertical />
				))}
			</div>
		</div>
	)
}

export default Page
