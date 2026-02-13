import Head from 'next/head';
import { generateNextSeo } from 'next-seo/pages';

import { AppConfig } from '@/utils/AppConfig';

type SeoProps = {
  title?: string;
  description?: string;
  canonical?: string;
  url?: string;
  creator?: string;
};

const Seo = ({ ...props }: SeoProps) => {
  return (
    <Head>
      {generateNextSeo({
        title: props.title || AppConfig.siteName,
        description: props.description || AppConfig.siteDescription,
        canonical: props.canonical,
        openGraph: {
          url: props.url || AppConfig.siteUrl,
          title: props.title || AppConfig.title,
          description: props.description || AppConfig.siteDescription,
          locale: AppConfig.locale,
          siteName: AppConfig.siteName,
        },
        twitter: {
          handle: props.creator || AppConfig.twitterHandle,
          site: AppConfig.twitterSite,
          cardType: AppConfig.twitterCardType,
        },
      })}
    </Head>
  );
};

export default Seo;
