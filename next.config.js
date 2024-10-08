/** @type {import('next').NextConfig} */

module.exports = {
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['photos.google.com', 'drive.google.com']
  }
};
