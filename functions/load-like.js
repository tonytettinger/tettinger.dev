const { hasuraRequest } = require('./utils/hasura')

exports.handler = async(event) => {
  const { postId } = JSON.parse(event.body)
  const postIdNum = parseInt(postId)
  const hasuraPromise = hasuraRequest({
    query:`
    mutation MyMutation($likes: [likes_insert_input!]!) {
      likes: insert_likes(on_conflict: {constraint: likes_pkey, update_columns: id}, objects: $likes) {
        returning {
          count
          id
        }
      }
    }
    `,
    variables: {
        "likes": [
          {
          "id" : postIdNum,
          "count": 0
        }
        ]
    }
  })

  const likes = await hasuraPromise
  return {
    statusCode: 200,
    body: JSON.stringify(likes)
  }
}