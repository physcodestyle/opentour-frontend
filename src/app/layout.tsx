import type { Metadata } from 'next'
import './styles/index.css'

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
