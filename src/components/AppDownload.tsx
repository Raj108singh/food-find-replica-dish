import { Smartphone, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import appLogo from "@/assets/app-logo.png";

const AppDownload = () => {
  return (
    <section className="py-16 bg-gradient-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-8 animate-bounce-in">
            <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <img src={appLogo} alt="FoodFind App" className="w-12 h-12 rounded-xl" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get the FoodFind app
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Download the app for the fastest, most convenient way to order food. 
              Available on iOS and Android.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <Button 
              size="lg"
              className="bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-xl flex items-center space-x-3 transition-bounce hover:scale-105"
            >
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333L3.609 1.814l12.253 7.098-2.362 2.362a.25.25 0 0 0 0 .354z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </div>
            </Button>

            <Button 
              size="lg"
              className="bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-xl flex items-center space-x-3 transition-bounce hover:scale-105"
            >
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </div>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center space-y-2">
              <Smartphone className="w-8 h-8 text-white/80" />
              <div className="text-sm text-white/80">Available on</div>
              <div className="text-white font-semibold">iOS & Android</div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Download className="w-8 h-8 text-white/80" />
              <div className="text-sm text-white/80">Fast & Easy</div>
              <div className="text-white font-semibold">Quick Download</div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">★</span>
              </div>
              <div className="text-sm text-white/80">Rated</div>
              <div className="text-white font-semibold">4.5 Stars</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;