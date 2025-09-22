"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleApple from '@/components/navigation/NavbarStyleApple/NavbarStyleApple';
import VoidHero from '@/components/sections/layouts/hero/VoidHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';
import { DollarSign, ChartBar, Users } from 'lucide-react';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'futuristicAndOutOfBox', colorTemplate: 2, textAnimation: 'highlight' }}>
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          logoSrc="/images/logo.svg"
          logoAlt="Peak Logo"
          brandName="Peak"
          navItems={[{ name: "Hero", id: "hero" }, { name: "About", id: "about" }, { name: "How to Buy", id: "how-to-buy" }, { name: "Tokenomics", id: "tokenomics" }, { name: "Footer", id: "footer" }]}
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <VoidHero
          title="Welcome to Peak"
          description="Experience a new era of SaaS platforms."
          tagLabel="Futuristic"
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SocialsAbout
          title="Our Journey"
          descriptions={["Peak is built for innovation.", "Harnessing technology for a better future.", "Join our community."]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D variant="simple" />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <BigNumberTokenomics
          title="Our Metrics"
          description="Transparent pricing and value delivery"
          kpiItems={[
            { value: "100M", description: "Total Supply", longDescription: "Maximum tokens available for purchase.", icon: DollarSign },
            { value: "50M", description: "Market Cap", longDescription: "Total market valuation of the token.", icon: ChartBar },
            { value: "10K", description: "Active Users", longDescription: "Total users engaged in the platform.", icon: Users }
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasis
          logoSrc="/images/logo.svg"
          logoAlt="Peak Logo"
          columns={[
            { items: [{ label: "Privacy Policy", onClick: () => {} }, { label: "Terms of Service", onClick: () => {} }] },
            { items: [{ label: "Contact Us", onClick: () => {} }, { label: "Support", onClick: () => {} }] },
            { items: [{ label: "FAQ", onClick: () => {} }, { label: "Blog", onClick: () => {} }] }
          ]}
          logoText="Peak™"
          className="footer"
          containerClassName="container"
        />
      </div>
    </SiteThemeProvider>
  );
}
