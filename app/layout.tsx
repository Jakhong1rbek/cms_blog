import { ThemeProvider } from '@/components/providers/theme-provider'
import type { Metadata } from 'next'
import { Crete_Round, Inter, Work_Sans } from 'next/font/google'
import './globals.css'
import { ChildProps } from './types'

const inter = Inter({ subsets: ['latin'] })
const creteRound = Crete_Round({
	weight: ['400'],
	subsets: ['latin'],
	variable: '--font-creteRound',
})
const workSans = Work_Sans({
	weight: ['500', '600'],
	subsets: ['latin'],
	variable: '--font-workSans',
})

export const metadata: Metadata = {
	metadataBase: new URL('https://test-blog.codecast.com'),
	title: 'Discover the Latest in Tech and Headlines',
	description:
		"Welcome to CodeCast, where we bring you the cutting-edge stories from the dynamic world of technology and the latest news that shapes our digital future. Whether you're a tech enthusiast, a professional coder, or simply someone who loves staying informed, CodeCast is your ultimate destination.",
	authors: [{ name: 'Jakhongirbek Yokubjonov' }],
	icons: { icon: '/favicon.png' },
	keywords:
		'Tech News, Latest Technology Updates, Gadget Reviews, Programming Tips, Coding Tutorials, Tech Industry Insights, Innovations in Technology, Tech Trends, Digital Future, Technology News Blog, Software Development, Tech Reviews, Technology and News, Tech Community, Emerging Technologies, Tech Innovations, Developer News, Tech Tips, Tech World Updates, Latest Gadgets.',
	openGraph: {
		title: 'Discover the Latest in Tech and Headlines',
		description:
			"Welcome to CodeCast, where we bring you the cutting-edge stories from the dynamic world of technology and the latest news that shapes our digital future. Whether you're a tech enthusiast, a professional coder, or simply someone who loves staying informed, CodeCast is your ultimate destination.",
		type: 'website',
		url: 'https://test-blog.codecast.com',
		locale: 'en_EN',
		images: 'https://media.graphassets.com/kXL006lyRnW46IKTHdHs',
		countryName: 'South Korea',
		siteName: 'Sammi',
		emails: 'info@sammi.ac',
	},
}

//
export default function RootLayout({ children }: ChildProps) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${creteRound.variable} ${workSans.variable} overflow-x-hidden`}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
