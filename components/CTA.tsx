'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from 'react-i18next';

const CTA = () => {
  const { t } = useTranslation(['pages', 'common']);
  const pathname = usePathname();
  const slug = pathname.split("/")[2];

  // Default CTA
  let cta = {
    title: t('pages:cta.default.title'),
    subtitle: t('pages:cta.default.subtitle'),
    button: t('common:buttons.getFreeConsultation'),
  };

  // Check if it's an industry page
  if (pathname.startsWith("/industries/") && slug) {
    try {
      const industryCTA = t(`pages:industriesCTA.${slug}`, { returnObjects: true });
      // Check if the translation returned an object with the expected structure
      if (industryCTA && typeof industryCTA === 'object' && industryCTA !== null) {
        const industryCTATyped = industryCTA as { title?: string; subtitle?: string; button?: string };
        if (industryCTATyped.title && industryCTATyped.subtitle && industryCTATyped.button) {
          cta = {
            title: industryCTATyped.title,
            subtitle: industryCTATyped.subtitle,
            button: industryCTATyped.button,
          };
        }
      }
    } catch (error) {
      console.log(`No custom CTA found for industry: ${slug}, using default`);
    }
  }

  // Check if it's a service page
  if (pathname.startsWith("/services/") && slug) {
    try {
      const serviceCTA = t(`pages:servicesCTA.${slug}`, { returnObjects: true });
      // Check if the translation returned an object with the expected structure
      if (serviceCTA && typeof serviceCTA === 'object' && serviceCTA !== null) {
        const serviceCTATyped = serviceCTA as { title?: string; subtitle?: string; button?: string };
        if (serviceCTATyped.title && serviceCTATyped.subtitle && serviceCTATyped.button) {
          cta = {
            title: serviceCTATyped.title,
            subtitle: serviceCTATyped.subtitle,
            button: serviceCTATyped.button,
          };
        }
      }
    } catch (error) {
      console.log(`No custom CTA found for service: ${slug}, using default`);
    }
  }

  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container-max text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{cta.title}</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">{cta.subtitle}</p>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all"
        >
          {cta.button}
          <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </section>
  );
};

export default CTA;