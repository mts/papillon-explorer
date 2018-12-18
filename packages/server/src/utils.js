/* eslint-disable */
module.exports.paginateResults = ({
  after: cursor,
  pageSize = 20,
  results,
  getCursor = () => null,
}) => {
  if (pageSize < 1) return []

  if (!cursor) return results.slice(0, pageSize)
  const cursorIndex = results.findIndex(item => {
    const itemCursor = item.cursor ? item.cursor : getCursor(item)

    return itemCursor ? cursor === itemCursor : false
  })

  return cursorIndex >= 0
    ? cursorIndex === results.length - 1
      ? []
      : results.slice(
          cursorIndex + 1,
          Math.min(results.length, cursorIndex + 1 + pageSize),
        )
    : results.slice(0, pageSize)

  results.slice(cursorIndex >= 0 ? cursorIndex + 1 : 0, cursorIndex >= 0)
}
/* eslint-enable */
