import { Bounded } from "@/components/Bounded";
import { ButtonLink } from "@/components/ButtonLink";
import { Heading } from "@/components/Heading";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";
import { JSX } from "react";
import ParallaxImage from "./ParallaxImage";

declare module "react" {
  interface CSSProperties {
    "--index"?: number;
  }
}

/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */
const About = ({ slice, index }: AboutProps): JSX.Element => {
  const theme = slice.primary.theme;
  const buttonLink = isFilled.link(slice.primary.button) ? true : false;
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={clsx(
        "sticky top-[calc(var(--index)*2rem)]",
        theme === "Blue" && "bg-texture bg-brand-blue text-white",
        theme === "Navy" && "bg-texture bg-brand-navy text-white",
        theme === "Orange" && "bg-texture bg-brand-orange text-white",
        theme === "Lime" && "bg-texture bg-brand-lime"
      )}
      style={{ "--index": index }}
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center md:gap-24">
        <div className={clsx(
          "flex flex-col items-center gap-8 text-center md:items-start md:text-left",
          slice.variation === "imageOnLeft" && "md:order-2"
        )}>
          <Heading as="h2" size="lg">
            <PrismicText field={slice.primary.heading} />
          </Heading>
          <div className="max-w-md text-lg leading-relaxed">
            <PrismicRichText field={slice.primary.body} />
          </div>
          {buttonLink && (
            <ButtonLink field={slice.primary.button} color={theme === "Orange" ? "lime" : "orange"} className="block mt-4">
              {slice.primary.button.text}
            </ButtonLink>
          )}
        </div>
        <ParallaxImage forgroundImage={slice.primary.foreground_image} backgroundImage={slice.primary.background_imgae} />
      </div>
    </Bounded>
  );
};

export default About;
