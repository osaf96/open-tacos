
const withMDX = require('@next/mdx')({
  reactStrictMode: true,
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: []
  }
})
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  images: {
    domains: ['live.staticflickr.com', 'upload.wikimedia.org', 'openbeta.sirv.com']
  },
  typescript: {
    ignoreBuildErrors: false
  },
  async rewrites () {
    return [
      { // A hack to pass ?gallery=true to getStaticProps()
        source: '/u/:uid/:postid',
        has: [
          {
            type: 'query',
            key: 'gallery',
            value: 'true'
          }],
        destination: '/u/:uid/:postid/gallery'
      }
    ]
  }
})
