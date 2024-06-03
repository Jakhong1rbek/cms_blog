'use client'
import { navLinks } from '@/app/constants'
import ModeToggle from '@/components/shared/mode-toggle'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Mobile from './ mobile'
import GlobalSearch from './global-search'

function Navbar() {
	const pathName = usePathname()
	const { setTheme, systemTheme } = useTheme()

	return (
		<div className='h-[10vh] backdrop-blur-sm border-b fixed z-50 inset-0 bg-background'>
			<div className='container max-w-6xl mx-auto h-[10vh] w-full flex items-center justify-between '>
				{/* Logo */}
				<Link href={'/'}>
					<h1 className='text-4xl font-creteRound'>CodeCast</h1>
				</Link>
				{/* NavLInks */}
				<div className='gap-2 hidden md:flex'>
					{navLinks.map(nav => (
						<Link
							key={nav.route}
							href={nav.route}
							className={cn(
								'hover:bg-blue-400/20 py-1 px-3 cursor-pointer rounded-sm transition-colors',
								pathName === nav.route && 'text-blue-400'
							)}
						>
							{nav.name}
						</Link>
					))}
				</div>
				{/* search */}
				<div className='flex items-center gap-1'>
					<GlobalSearch />
					<ModeToggle />
					<Mobile />
				</div>
			</div>
		</div>
	)
}

export default Navbar
