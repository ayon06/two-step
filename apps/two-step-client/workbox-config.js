module.exports = {
  globDirectory: 'dist/apps/two-step-client',
  globPatterns: ['**/*.{txt,ico,html,js}'],
  swDest: 'dist/apps/two-step-client/service-worker.js',
  runtimeCaching: [
    {
      // runtime cache for images
      urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
      handler: 'CacheFirst',
      options: {
        expiration: { maxEntries: 10 },
        cacheName: 'images',
      },
    },
  ],
}
