import type { Metadata } from 'next'
import '../styles/global.css'

export const metadata: Metadata = {
	title: 'Open Tour',
	description: '',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='ru'>
			<body>{children}</body>
		</html>
	)
}
