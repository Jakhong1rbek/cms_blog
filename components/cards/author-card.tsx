import { IAuthor } from '@/app/types'
import Image from 'next/image'
import Link from 'next/link'

function AuthorCard(items: IAuthor) {
	return (
		<Link
			className='flex flex-col space-y-2 w-52 text-center'
			href={`/author/${items.id}`}
		>
			<div className='w-full h-52 relative'>
				<Image
					src={items.image.url}
					alt={items.name}
					fill
					className='object-cover rounded-md grayscale hover:grayscale-0 transition-all'
				/>
			</div>
			<h2 className='text-2xl font-creteRound'>{items.name}</h2>
			<p className='text-muted-foreground'>
				<span className='font-bold text-white'>{items.blogs.length}</span>{' '}
				Published posts
			</p>
		</Link>
	)
}

export default AuthorCard
