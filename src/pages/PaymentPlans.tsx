import { useEffect } from 'react';
import { useDocumentHead } from '../hooks/useDocumentHead';

export default function PaymentPlans() {
  useDocumentHead({
    title: 'Payment Plans | Aletheia Integrative',
    description: 'Flexible payment plans for your healthcare needs at Aletheia Integrative Medical in Lincoln, NE.',
  });

  useEffect(() => {
    // Load Cherry widget script
    const script = document.createElement('script');
    script.id = '_hw';
    script.src = 'https://files.withcherry.com/widgets/widget.js';
    script.async = true;
    
    script.onload = () => {
      // Initialize Cherry widget
      if (window._hw) {
        window._hw('init', {
          debug: false,
          variables: {
            slug: 'aletheia-integrative-medical-llc',
            name: 'Aletheia Integrative Medical',
            images: [6],
            customLogo: 'https://sa1s3optim.patientpop.com/filters:format(webp)/sc-assets/prd/practices/01e81043-25b6-46c2-bd88-dc1830708de7/Aletheia-Integrative-white-orange-LOGO-wide-1-1693232568127.png',
            defaultPurchaseAmount: 1000,
            customImage: '',
            imageCategory: 'other',
            language: 'en',
          },
          styles: {
            primaryColor: '#26457B',
            secondaryColor: '#26457b10',
            fontFamily: 'Open Sans',
            headerFontFamily: 'Open Sans',
          }
        }, ['hero', 'calculator', 'howitworks', 'faq']);
      }
    };

    document.body.appendChild(script);

    // Load Google Fonts for Cherry widget
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@200..900&family=Slabo+27px:wght@200..900&family=Lato:wght@200..900&family=Raleway:wght@200..900&family=Montserrat:wght@200..900&family=Oswald:wght@200..900&family=Poppins:wght@200..900&family=Source+Sans+Pro:wght@200..900&family=PT+Sans:wght@200..900&family=Open+Sans:wght@200..900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Cleanup on unmount
    return () => {
      const scriptElement = document.getElementById('_hw');
      if (scriptElement) {
        scriptElement.remove();
      }
      if (link.parentNode) {
        link.remove();
      }
    };
  }, []);

  return (
    <main>
      {/* Spacer below fixed header */}
      <div className="h-16 md:h-20" />

      {/* Banner */}
      <section className="bg-[rgb(38,69,123)] text-white py-16">
        <div className="container max-w-[1100px] px-6 text-center">
          <h1 className="text-[36px] leading-tight font-semibold tracking-wide">Payment Plans</h1>
          <p className="mt-3 text-[15px] opacity-95">Flexible financing options for your healthcare needs</p>
        </div>
      </section>

      {/* Cherry Widget Container */}
      <section className="py-14">
        <div className="container max-w-[1200px] px-6">
          {/* CHERRY WIDGET BEGIN */}
          <div id="all"></div>
          <div id="hero"></div>
          <div id="calculator"></div>
          <div id="howitworks"></div>
          <div id="testimony"></div>
          <div id="faq"></div>
          {/* CHERRY WIDGET END */}
        </div>
      </section>
    </main>
  );
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    _hw: any;
  }
}
