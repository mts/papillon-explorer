const { paginateResults } = require('./utils')

module.exports = {
  Query: {
    pages: async (_, { pageSize = 20, after }, { dataSources }) => {
      const allPages = await dataSources.pageAPI.getAllPages()

      const pages = paginateResults({
        after,
        pageSize,
        results: allPages,
      })

      return {
        pages,
        cursor: pages.length ? pages[pages.length - 1].cursor : null,
        hasMore: pages.length ? pages[pages.length - 1].cursor !== allPages[allPages.length - 1].cursor : false,
      }
    },
  },
}
