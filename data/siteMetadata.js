const siteMetadata = {
  title: 'DNSWD',
  author: 'Dennis A. Walangadi',
  headerTitle: 'DNSWD',
  description: generateDescription(),
  language: 'en-us',
  siteUrl: 'https://www.dnswd.com',
  siteRepo: 'https://github.com/dnswd/dnswd-com',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'dennis.walangadi@gmail.com',
  github: 'https://github.com/dnswd',
  twitter: 'https://twitter.com/straussmn',
  linkedin: 'https://www.linkedin.com/in/dnswd/',
  locale: 'en-ID',
  comment: {
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
    },
  },
}

function generateDescription() {
  const descriptions = [
    'Nothing more permanent than a temporary code',
    'Demystifying "magics" in computer science',
    'I need to stop doing thing from scratch',
    'WHY IS EVERYTHING TURING COMPLETE? HAVE I EVER!?',
  ]

  const idx = Math.random() * descriptions.length
  return descriptions[Math.floor(idx)]
}

module.exports = siteMetadata
