
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Rocket, Shield, TrendingUp, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* SEO Meta Section */}
      <div className="hidden">
        <h1>Buy Dexscreener Rocket Reactions | Boost Your Token Visibility</h1>
        <p>Purchase Dexscreener Rocket Reactions to increase your token's visibility and credibility. Get instant delivery and 24/7 support.</p>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-16">
        <div className="text-center fade-in">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-gray-100 rounded-full">
            Premium Dexscreener Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Enhance Your Token's Visibility with Rocket Reactions
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Boost your token's credibility and attract more investors with authentic Dexscreener Rocket Reactions.
          </p>
          <a 
            href="https://boostlegends.com/buy-dexscreener-reactions"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center"
          >
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white rounded-full px-8">
              Buy Rocket Reactions <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <TrendingUp className="h-6 w-6" />,
              title: "Increased Visibility",
              description: "Boost your token's visibility on Dexscreener with authentic rocket reactions"
            },
            {
              icon: <Users className="h-6 w-6" />,
              title: "Attract Investors",
              description: "Draw more attention to your project and attract potential investors"
            },
            {
              icon: <Shield className="h-6 w-6" />,
              title: "Build Credibility",
              description: "Enhance your token's credibility with genuine engagement metrics"
            }
          ].map((benefit, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow slide-up">
              <div className="h-12 w-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-2xl">
          <Rocket className="h-12 w-12 mx-auto mb-6 text-gray-700" />
          <h3 className="text-2xl font-bold mb-4">
            Ready to Boost Your Token's Performance?
          </h3>
          <p className="text-gray-600 mb-8">
            Get started with Dexscreener Rocket Reactions today and watch your token's visibility soar.
          </p>
          <a 
            href="https://boostlegends.com/buy-dexscreener-reactions"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center"
          >
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white rounded-full px-8">
              Purchase Now <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-600 text-sm">
        <p>
          For the best Dexscreener Rocket Reactions service, visit{" "}
          <a 
            href="https://boostlegends.com/buy-dexscreener-reactions"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:underline"
          >
            BoostLegends
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Index;
