import { ImageField } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next';
import clsx from 'clsx';
import React from 'react'

type Props = {
	forgroundImage: ImageField;
	backgroundImage: ImageField;
	className?: string;
}

export default function ParallaxImage ({ forgroundImage, backgroundImage, className }: Props) {
	return (
		<div className={clsx("grid grid-cols-1 place-items-center", className)}>
			<div className="col-start-1 row-start-1 transition-transform">
				<PrismicNextImage field={backgroundImage} alt="" />
			</div>
			<div className="col-start-1 row-start-1 transition-transform h-full w-full place-items-center">
				<PrismicNextImage field={forgroundImage} alt="" />
			</div>
		</div>
	)
}