exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  // console.log("node.internal.type: ", node.internal.type)
  if (node.internal.type === `ShopifyProductVariant`) {
    createNodeField({
      node,
      name: `Hello`,
      value: {
        example: "World!",
      },
    })
  }
}
