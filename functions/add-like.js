const { hasuraRequest } = require('./utils/hasura');

exports.handler = async (event) => {
  const { postIdNum } = JSON.parse(event.body)
  const data = await hasuraRequest({
    query: `
    mutation AddLike($id: Int!) {
      update_likes_by_pk(pk_columns: {id: $id}, _inc: {count: 1}) {
        id
        count
      }
    }
    `,
    variables: {  
      "id": postIdNum
    },
  });

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
