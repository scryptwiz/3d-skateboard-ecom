import { createClient } from '@/prismicio';
import { PrismicNextImage } from '@prismicio/next';
import { Logo } from './Logo';

export async function Footer () {
	const client = createClient();
	const settings = await client.getSingle("settings");

	return (
		<footer className="bg-texture bg-zinc-900 text-white overflow-hidden">
			<div className="relative h-[75vh] ~p-10/16 md:aspect-auto">
				<PrismicNextImage
					field={settings.data.footer_image}
					alt=""
					fill
					className="object-cover"
					width={1200}
				/>
				<Logo className="pointer-events-none relative h-20 mix-blend-exclusion md:h-28" />
			</div>
		</footer>
	)
}