import AboutHero from "@/components/about/about_hero";
import AboutInfo from "@/components/about/about_info";

export const metadata = {
  title: "Tentang Kami",
};

export default function AboutPage() {
  return (
    <div>
      <AboutHero />
      <AboutInfo />
    </div>
  );
}
