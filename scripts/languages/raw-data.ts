/**
 * rawLanguage: extracted from https://en.wikipedia.org/wiki/List_of_Wikipedias
 */
export const rawLanguageMap = {
  af: 'Afrikaans',
  als: 'Alemannic German',
  am: 'Amharic',
  an: 'Aragonese',
  ar: 'Arabic',
  arz: 'Egyptian Arabic',
  as: 'Assamese',
  ast: 'Asturian',
  av: 'Avar',
  az: 'Azerbaijani',
  azb: 'South Azerbaijani',
  ba: 'Bashkir',
  bar: 'Bavarian',
  bcl: 'Central Bikol',
  be: 'Belarusian',
  bg: 'Bulgarian',
  bh: 'Bihari',
  bn: 'Bengali',
  bo: 'Lhasa Tibetan',
  bpy: 'Bishnupriya Manipuri',
  br: 'Breton',
  bs: 'Bosnian',
  bxr: 'Buryat',
  ca: 'Catalan',
  cbk: null,
  ce: 'Chechen',
  ceb: 'Cebuano',
  ckb: 'Kurdish',
  co: 'Corsican',
  cs: 'Czech',
  cv: 'Chuvash',
  cy: 'Welsh',
  da: 'Danish',
  de: 'German',
  diq: 'Zaza',
  dsb: 'Lower Sorbian',
  dty: 'Doteli',
  dv: 'Maldivian',
  el: 'Greek',
  eml: 'Emilian-Romagnol',
  en: 'English',
  eo: 'Esperanto',
  es: 'Spanish',
  et: 'Estonian',
  eu: 'Basque',
  fa: 'Persian',
  fi: 'Finnish',
  fr: 'French',
  frr: 'North Frisian',
  fy: 'West Frisian',
  ga: 'Irish',
  gd: 'Scottish Gaelic',
  gl: 'Galician',
  gn: 'Guarani',
  gom: 'Konkani',
  gu: 'Gujarati',
  gv: 'Manx',
  he: 'Hebrew',
  hi: 'Hindi',
  hif: 'Fiji Hindi',
  hr: 'Croatian',
  hsb: 'Upper Sorbian',
  ht: 'Haitian Creole',
  hu: 'Hungarian',
  hy: 'Armenian',
  ia: 'Interlingua',
  id: 'Indonesian',
  ie: 'Interlingue',
  ilo: 'Ilocano',
  io: 'Ido',
  is: 'Icelandic',
  it: 'Italian',
  ja: 'Japanese',
  jbo: 'Lojban',
  jv: 'Javanese',
  ka: 'Georgian',
  kk: 'Kazakh',
  km: 'Khmer',
  kn: 'Kannada',
  ko: 'Korean',
  krc: 'Karachay-Balkar',
  ku: 'Kurdish',
  kv: 'Komi',
  kw: 'Cornish',
  ky: 'Kyrgyz',
  la: 'Latin',
  lb: 'Luxembourgish',
  lez: 'Lezgian',
  li: 'Limburgish',
  lmo: 'Lombard',
  lo: 'Lao',
  lrc: 'Northern Luri',
  lt: 'Lithuanian',
  lv: 'Latvian',
  mai: 'Maithili',
  mg: 'Malagasy',
  mhr: 'Meadow Mari',
  min: 'Minangkabau',
  mk: 'Macedonian',
  ml: 'Malayalam',
  mn: 'Mongolian',
  mr: 'Marathi',
  mrj: 'Hill Mari',
  ms: 'Malay',
  mt: 'Maltese',
  mwl: 'Mirandese',
  my: 'Burmese',
  myv: 'Erzya',
  mzn: 'Mazanderani',
  nah: 'Nahuatl',
  nap: 'Neapolitan',
  nds: 'Low German',
  ne: 'Nepali',
  new: 'Newar',
  nl: 'Dutch',
  nn: 'Norwegian',
  no: 'Norwegian',
  oc: 'Occitan',
  or: 'Odia',
  os: 'Ossetian',
  pa: 'Punjabi',
  pam: 'Kapampangan',
  pfl: 'Palatine German',
  pl: 'Polish',
  pms: 'Piedmontese',
  pnb: 'Western Punjabi',
  ps: 'Pashto',
  pt: 'Portuguese',
  qu: 'Quechua',
  rm: 'Romansh',
  ro: 'Romanian',
  ru: 'Russian',
  rue: 'Rusyn',
  sa: 'Sanskrit',
  sah: 'Yakut',
  sc: 'Sardinian',
  scn: 'Sicilian',
  sco: 'Scots',
  sd: 'Sindhi',
  sh: 'Serbo-Croatian',
  si: 'Sinhala',
  sk: 'Slovak',
  sl: 'Slovene',
  so: 'Somali',
  sq: 'Albanian',
  sr: 'Serbian',
  su: 'Sundanese',
  sv: 'Swedish',
  sw: 'Swahili',
  ta: 'Tamil',
  te: 'Telugu',
  tg: 'Tajik',
  th: 'Thai',
  tk: 'Turkmen',
  tl: 'Tagalog',
  tr: 'Turkish',
  tt: 'Tatar',
  tyv: 'Tuvan',
  ug: 'Uyghur',
  uk: 'Ukrainian',
  ur: 'Urdu',
  uz: 'Uzbek',
  vec: 'Venetian',
  vep: 'Veps',
  vi: 'Vietnamese',
  vls: 'West Flemish',
  vo: 'Volapük',
  wa: 'Walloon',
  war: 'Waray',
  wuu: 'Wu Chinese',
  xal: 'Kalmyk Oirat',
  xmf: 'Mingrelian',
  yi: 'Yiddish',
  yo: 'Yoruba',
  yue: null,
  zh: 'Chinese',
}

/**
 * ref: https://github.com/facebookresearch/fastText/issues/1305#issuecomment-1586349534
 */
export const fixRefNameMap = {
  als: 'Swiss German',
  ku: 'Northern Kurdish',
}

export const fixAlpha3CodeMap = {
  bh: 'bih',
}

/**
 * refName: manually normalize rawLanguage fit https://iso639-3.sil.org/code_tables/download_tables
 */
export const refNameMap = {
  av: 'Avaric',
  // ref: https://www.loc.gov/standards/iso639-2/php/English_list.php
  bh: 'Bihari languages',
  bo: 'Tibetan',
  bpy: 'Bishnupriya',
  bxr: 'Russia Buriat',
  // new WP code: cbk-zam
  cbk: 'Chavacano',
  dty: 'Dotyali',
  dv: 'Dhivehi',
  el: 'Modern Greek (1453-)',
  // ref: https://en.wikipedia.org/wiki/Emilian-Romagnol_linguistic_group
  // egl/Emilian + rgn/Romagnol
  eml: 'Emilian-Romagnol',
  frr: 'Northern Frisian',
  fy: 'Western Frisian',
  gom: 'Goan Konkani',
  ht: 'Haitian',
  ia: 'Interlingua (International Auxiliary Language Association)',
  ilo: 'Iloko',
  ky: 'Kirghiz',
  lez: 'Lezghian',
  li: 'Limburgan',
  mhr: 'Eastern Mari',
  mrj: 'Western Mari',
  ms: 'Malay (macrolanguage)',
  // ref: https://www.loc.gov/standards/iso639-2/php/English_list.php
  nah: 'Nahuatl languages',
  ne: 'Nepali (macrolanguage)',
  new: 'Newari',
  oc: 'Occitan (post 1500)',
  pa: 'Panjabi',
  pam: 'Pampanga',
  pfl: 'Pfaelzisch',
  pms: 'Piemontese',
  pnb: 'Western Panjabi',
  ps: 'Pushto',
  sl: 'Slovenian',
  sw: 'Swahili (macrolanguage)',
  tyv: 'Tuvinian',
  ug: 'Uighur',
  vls: 'Vlaams',
  war: 'Waray (Philippines)',
  xal: 'Kalmyk',
  // new WP code: zh-yue
  yue: 'Yue Chinese',
}