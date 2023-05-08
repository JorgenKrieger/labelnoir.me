import { StructuredText } from "react-datocms/structured-text";
import { H } from "../Headings";

export default function TextRecord({ data: { title, content } }) {
	return (
		<section>
			<H>{title}</H>
			<StructuredText data={content} />
		</section>
	)
}