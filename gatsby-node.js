const fetch = require(`node-fetch`)
exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  // get data from GitHub API at build time
  const result = await fetch(`http://worldclockapi.com/api/json/est/now`)
  const resultData = await result.json()
  // create node for build time data example in the docs
  createNode({
    // nameWithOwner and url are arbitrary fields from the data
    id: "example_build_time_data",
    currentDateTime: resultData.currentDateTime,
    dayOfTheWeek: resultData.dayOfTheWeek,
    timeZoneName: resultData.timeZoneName,
    currentFileTime: resultData.currentFileTime,
    internal: {
        type: `Example`,
        contentDigest: createContentDigest(resultData),
      },
  })
}