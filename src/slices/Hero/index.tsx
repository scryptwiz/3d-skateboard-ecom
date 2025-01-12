import { Bounded } from "@/components/Bounded";
import { ButtonLink } from "@/components/ButtonLink";
import { Heading } from "@/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import { JSX } from "react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-brand-pink relative h-dvh overflow-hidden text-zinc-800 bg-texture"
    >
      <div className="absolute inset-0 grid mx-auto mt-24 max-w-6xl grid-rows-[1fr,auto] place-items-end px-6 ~py-10/16">
        <Heading className="relative place-self-start max-w-[11ch]">
          <PrismicText field={slice.primary.heading} />
        </Heading>
        <div className="flex relative w-full flex-col items-center justify-between lg:flex-row ~gap-2/4">
          <div className="max-w-[45ch] font-semibold ~text-lg/xl">
            <PrismicRichText field={slice.primary.body} />
          </div>
          <ButtonLink field={slice.primary.button} icon="skateboard" size="lg" className="z-20 mt-2 block">{slice.primary.button.text}</ButtonLink>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
