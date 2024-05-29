import { ICategoryAndTags } from '@/app/types'
import { Layers2, Tags } from 'lucide-react'
import Link from 'next/link'

interface Props extends ICategoryAndTags {
	type: 'categories' | 'tags'
}

function CategoriesTags(item: Props) {
	return (
		<Link
			className='bg-secondary p-8 md:-4 rounded-md shadow-xl flex items-center justify-center gap-4 hover:bg-secondary/80 transition-colors dark:shadow-white/5'
			href={`/${item.type}/${item.slug}`}
		>
			{item.type === 'tags' ? <Tags /> : <Layers2 />}
			<h1 className='text-2xl font-creteRound'>{item.name}</h1>
		</Link>
	)
}

export default CategoriesTags
