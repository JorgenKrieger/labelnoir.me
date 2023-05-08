import { ImageResponse } from "next/server";
import getProject from "./query"

export const alt = ''
export const size = {
	width: 1200,
	height: 630
}
export const contentType = 'image/png'
export const runtime = 'edge'

export default async function og({ params }) {
	const data = await getProject(params.slug)

	// Cancel if case doesn't exist
	if (!data.data?.case) return false

	const { title, seo: { image } } = data.data.case

	return new ImageResponse(
		(
			<div style={{
				width: '100%',
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: '#0A0A0A',
				color: 'white',
				fontSize: 60
			}}>
				<div style={{
					display: 'flex',
					position: 'absolute',
					height: '100%',
					width: '40%',
					left: 0,
					top: 0,
					overflow: 'hidden'
				}}>
					<img
						src={image.url}
						style={{
							position: 'absolute',
							top: 0,
							left: 0,
							height: '100%',
							width: '100%',
							objectFit: 'cover'
						}}
					/>

					<div style={{
						position: 'absolute',
						backgroundColor: '#0A0A0A',
						height: '100%',
						width: '100%',
						right: 0,
						top: 0,
						transform: 'skew(-15deg) translateX(82%)'
					}}></div>
				</div>

				<div style={{
					width: '100%',
					paddingLeft: 480,
					paddingRight: 150,
					marginBottom: 100,
					marginTop: 150
				}}>
					{title}
				</div>

				<div style={{
					width: '100%',
					paddingLeft: 480,
					paddingRight: 150,
					fontSize: 24,
					textAlign: 'left',
					color: '#aaa'
				}}>
					A case study by LabelNoir
				</div>
			</div>
		),
		{
			...size
		}
	)
}