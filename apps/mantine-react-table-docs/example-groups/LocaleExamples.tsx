import { Suspense, useState } from 'react';
import dynamic from 'next/dynamic';
import { Tabs, Skeleton, Box } from '@mantine/core';
import CS_Table from '../examples/localization-i18n-cs';
import DA_Table from '../examples/localization-i18n-da';
import DE_Table from '../examples/localization-i18n-de';
import EN_Table from '../examples/localization-i18n-en';
import ES_Table from '../examples/localization-i18n-es';
import FA_Table from '../examples/localization-i18n-fa';
import FI_Table from '../examples/localization-i18n-fi';
import FR_Table from '../examples/localization-i18n-fr';
import ID_Table from '../examples/localization-i18n-id';
import IT_Table from '../examples/localization-i18n-it';
import JA_Table from '../examples/localization-i18n-ja';
import NL_Table from '../examples/localization-i18n-nl';
import PL_Table from '../examples/localization-i18n-pl';
import PT_BR_Table from '../examples/localization-i18n-pt-BR';
import PT_Table from '../examples/localization-i18n-pt';
import RO_Table from '../examples/localization-i18n-ro';
import RU_Table from '../examples/localization-i18n-ru';
import SR_Cyrl_RS_Table from '../examples/localization-i18n-sr-Cyrl-RS';
import SR_Latn_RS_Table from '../examples/localization-i18n-sr-Latn-RS';
import SV_Table from '../examples/localization-i18n-sv';
import TR_Table from '../examples/localization-i18n-tr';
import UK_Table from '../examples/localization-i18n-uk';
import VI_Table from '../examples/localization-i18n-vi';
import ZH_HANS_Table from '../examples/localization-i18n-zh-hans';
import ZH_HANT_Table from '../examples/localization-i18n-zh-hant';

const supportedLocales = [
  'cs',
  'da',
  'de',
  'en',
  'es',
  'fa',
  'fi',
  'fr',
  'id',
  'it',
  'ja',
  'nl',
  'pl',
  'pt',
  'pt-BR',
  'ro',
  'ru',
  'sr-Cyrl-RS',
  'sr-Latn-RS',
  'sv',
  'tr',
  'uk',
  'vi',
  'zh-Hans',
  'zh-Hant',
];

const LocaleExamples = () => {
  const [currentLocale, setCurrentLocale] = useState<string | null>('es');

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Tabs onTabChange={setCurrentLocale} value={currentLocale}>
          <Tabs.List>
            {supportedLocales.map((locale) => (
              <Tabs.Tab key={locale} value={locale}>
                {locale}
              </Tabs.Tab>
            ))}
          </Tabs.List>
        </Tabs>
      </Box>
      <div style={{ minHeight: '1500px' }} lang={currentLocale ?? 'en'}>
        <Suspense fallback={<Skeleton height="600px" width="100%" />}>
          {currentLocale === 'cs' && <CS_Table />}
          {currentLocale === 'da' && <DA_Table />}
          {currentLocale === 'de' && <DE_Table />}
          {currentLocale === 'en' && <EN_Table />}
          {currentLocale === 'es' && <ES_Table />}
          {currentLocale === 'fa' && <FA_Table />}
          {currentLocale === 'fi' && <FI_Table />}
          {currentLocale === 'fr' && <FR_Table />}
          {currentLocale === 'id' && <ID_Table />}
          {currentLocale === 'it' && <IT_Table />}
          {currentLocale === 'ja' && <JA_Table />}
          {currentLocale === 'nl' && <NL_Table />}
          {currentLocale === 'pl' && <PL_Table />}
          {currentLocale === 'pt' && <PT_Table />}
          {currentLocale === 'pt-BR' && <PT_BR_Table />}
          {currentLocale === 'ro' && <RO_Table />}
          {currentLocale === 'ru' && <RU_Table />}
          {currentLocale === 'sr-Cyrl-RS' && <SR_Cyrl_RS_Table />}
          {currentLocale === 'sr-Latn-RS' && <SR_Latn_RS_Table />}
          {currentLocale === 'sv' && <SV_Table />}
          {currentLocale === 'tr' && <TR_Table />}
          {currentLocale === 'uk' && <UK_Table />}
          {currentLocale === 'vi' && <VI_Table />}
          {currentLocale === 'zh-Hans' && <ZH_HANS_Table />}
          {currentLocale === 'zh-Hant' && <ZH_HANT_Table />}
        </Suspense>
      </div>
    </>
  );
};

export default LocaleExamples;
