import type {
  MetadataRoute,
} from 'next';

export default function sitemap():
  MetadataRoute.Sitemap {
  return [
    {
      url:
        'https://goodcred.com',

      priority:
        1,
    },

    {
      url:
        'https://goodcred.com/contacto',
    },

    {
      url:
        'https://goodcred.com/cheques',
    },

    {
      url:
        'https://goodcred.com/comercios',
    },

    {
      url:
        'https://goodcred.com/privacy',
    },

    {
      url:
        'https://goodcred.com/terminos',
    },

    {
      url:
        'https://goodcred.com/legal',
    },
  ];
}