import ContactSection from "@/components/homepage/contact"
import Features from "@/components/homepage/features"
import Hero from "@/components/homepage/hero"
import ProductCategories from "@/components/homepage/productCategories"

export const metadata = {
  title: "Beranda"
}

export default function Homepage(){
  return(
    <div className="z-0">
      <Hero />
      <Features />
      <ProductCategories />
      <ContactSection />
    </div>
  )
}