import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="container mx-auto px-4 py-16 flex-1">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Hero */}
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold">About Luxora Jewels</h1>
            <p className="text-xl text-muted-foreground">
              Where Gold Meets Royalty
            </p>
          </div>

          {/* Story */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed">
              Founded with a passion for exceptional craftsmanship and timeless beauty, Luxora Jewels has been
              creating exquisite jewelry that celebrates life's most precious moments. Our journey began with a
              simple belief: that every piece of jewelry should tell a story and evoke emotion.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, we continue this tradition by combining classic techniques with contemporary design,
              ensuring that each piece in our collection is not just an accessory, but a work of art that can be
              treasured for generations.
            </p>
          </div>

          {/* Values */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Excellence</h3>
                <p className="text-muted-foreground">
                  We source only the finest materials and work with master craftsmen to ensure every piece
                  meets our exacting standards of quality and beauty.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Integrity</h3>
                <p className="text-muted-foreground">
                  Transparency and ethical sourcing are at the heart of everything we do. We're committed to
                  responsible practices throughout our supply chain.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Innovation</h3>
                <p className="text-muted-foreground">
                  While honoring traditional techniques, we embrace innovation in design and technology to
                  create pieces that are both timeless and contemporary.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Service</h3>
                <p className="text-muted-foreground">
                  Your satisfaction is our priority. From selection to after-sales care, we provide
                  personalized attention to ensure your experience is exceptional.
                </p>
              </div>
            </div>
          </div>

          {/* Craftsmanship */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Craftsmanship</h2>
            <p className="text-muted-foreground leading-relaxed">
              Every piece at Luxora Jewels is meticulously handcrafted by our team of skilled artisans. From
              the initial sketch to the final polish, each step is performed with precision and care. We believe
              that true luxury lies in the details, and our commitment to perfection is evident in every curve,
              every setting, and every finish.
            </p>
          </div>

          {/* Contact CTA */}
          <div className="bg-secondary/30 rounded-lg p-8 text-center space-y-4">
            <h2 className="text-2xl font-bold">Experience Luxury</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visit our showroom or schedule a private consultation to discover the perfect piece for you or
              your loved ones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <div>
                <p className="text-sm font-semibold">Phone</p>
                <p className="text-muted-foreground">121 68603280</p>
              </div>
              <div>
                <p className="text-sm font-semibold">Email</p>
                <p className="text-muted-foreground">royalaurum@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
