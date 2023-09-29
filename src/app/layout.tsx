
import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Providers from '@/context/Providers'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import Footer from '@/components/Footer'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'narendev',
	description: 'My projects',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<Head>
				<link rel="shortcut icon" href="" />
			</Head>
			<body className={inter.className}>
				<Providers>
					<Navbar />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	)
}
