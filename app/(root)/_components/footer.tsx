'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { User2 } from 'lucide-react'
import { useState } from 'react'

function Footer() {
	const [active, setActive] = useState(false)
	return (
		<footer className='container flex-center py-24 flex-col max-w-2xl space-y-12'>
			<h1 className='text-5xl max-md:text-3xl text-center font-creteRound'>
				Get latest post delivered to your email
			</h1>
			<div className='grid grid-cols-3 max-md:grid-cols-1 md:gap-4 w-full'>
				<Input
					className='w-full col-span-2'
					placeholder='your email address'
					onFocus={() => setActive(true)}
					onBlur={() => setActive(false)}
				/>
				<Button
					size={'lg'}
					variant={active ? 'default' : 'outline'}
					className='max-md:mt-2'
				>
					<User2 className='h-4 w-4' />
					<span>Join today</span>
				</Button>
			</div>
		</footer>
	)
}
export default Footer
