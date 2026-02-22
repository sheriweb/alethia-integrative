import { useEffect } from 'react';
import { useDocumentHead } from '../hooks/useDocumentHead';

export default function PaymentPlans() {
  useDocumentHead({
    title: 'Payment Plans | Aletheia Integrative',
    description: 'Flexible payment plans for your healthcare needs at Aletheia Integrative Medical in Lincoln, NE.',
  });

  useEffect(() => {
    // Check if script is already loaded
    const existingScript = document.getElementById('_hw');
    if (existingScript) {
      console.log('Cherry widget script already exists');
      return;
    }

    // Check if widget is already initialized
    if (window._hw) {
      console.log('Cherry widget already initialized');
      return;
    }

    // Load Google Fonts for Cherry widget
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@200..900&family=Slabo+27px:wght@200..900&family=Lato:wght@200..900&family=Raleway:wght@200..900&family=Montserrat:wght@200..900&family=Oswald:wght@200..900&family=Poppins:wght@200..900&family=Source+Sans+Pro:wght@200..900&family=PT+Sans:wght@200..900&family=Open+Sans:wght@200..900&display=swap';
    link.rel = 'stylesheet';
    link.id = 'cherry-fonts';
    if (!document.getElementById('cherry-fonts')) {
      document.head.appendChild(link);
    }

    // Initialize Cherry widget using their IIFE pattern
    (function (w: any, d: Document, s: string, o: string, f: string, js: HTMLScriptElement, fjs: HTMLScriptElement | null) {
      w[o] = w[o] || function () {
        (w[o].q = w[o].q || []).push(arguments);
      };
      js = d.createElement(s) as HTMLScriptElement;
      fjs = d.getElementsByTagName(s)[0] as HTMLScriptElement;
      js.id = o;
      js.src = f;
      js.async = true;
      fjs.parentNode!.insertBefore(js, fjs);
    })(window, document, "script", "_hw", "https://files.withcherry.com/widgets/widget.js", {} as HTMLScriptElement, null);
    
    // Initialize Cherry widget configuration
    window._hw("init", {
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

    // No cleanup - let the widget persist across navigation
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
