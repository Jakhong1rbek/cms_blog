import BlockCard from '@/components/cards/block-card'
import BgArrow from '@/components/shared/bg-arrow'
import { getBlogs } from '@/service/blog.service'

async function HomePage() {
	const blogs = await getBlogs()
	console.log(blogs)

	return (
		<div className='max-w-6xl mx-auto'>
			<div className='relative min-h-[60vh] flex items-center justify-center'>
				<h1 className='text-3xl md:text-4xl lg:text-5xl font-creteRound  text-center max-w-2xl'>
					Taking control of your daily life is easy when you know how!
				</h1>
				<BgArrow />
			</div>
			<h2 className='text-4xl text-center section-title font-creteRound'>
				<span>Recent Posts</span>
			</h2>
			{blogs.length === 0 ? (
				<div className='flex items-center w-full lg:h-[40vh] md:h-[30vh] h-[20vh] bg-secondary rounded-md mt-20 justify-center'>
					<h1 className='lg:text-4xl md:text-3xl sm:text-1 p-4 bg-destructive rounded-md '>
						Blogs have not been added yet!
					</h1>
				</div>
			) : (
				<div className='flex flex-col space-y-24 mt-24'>
					{blogs.map(blog => (
						<BlockCard key={blog.title} {...blog} />
					))}
				</div>
			)}
		</div>
	)
}

export default HomePage
