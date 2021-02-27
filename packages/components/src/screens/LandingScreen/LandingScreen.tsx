import type { FC } from "react";

import { Faq } from "@sentrei/components/organisms/Faq";
import { Feature } from "@sentrei/components/organisms/Feature";
import { Globe } from "@sentrei/components/organisms/Globe";
import { Hero } from "@sentrei/components/organisms/Hero";
import { Journey } from "@sentrei/components/organisms/Journey";
import { Mission } from "@sentrei/components/organisms/Mission";
import { Newsletter } from "@sentrei/components/organisms/Newsletter";
import { Stats } from "@sentrei/components/organisms/Stats";
import { Testimonial } from "@sentrei/components/organisms/Testimonial";
import { PageRoot } from "@sentrei/components/roots/PageRoot";

export const LandingScreen: FC = () => (
  <PageRoot>
    <Hero />
    <Journey />
    <Feature />
    <Testimonial />
    <Mission />
    <Globe />
    <Stats />
    <Faq />
    <Newsletter />
  </PageRoot>
);
