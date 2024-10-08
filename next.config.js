/** @type {import('next').NextConfig} */

module.exports = {
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['drive.google.com']
  }
};
