import { gql } from '@apollo/client';


export const PRODUCT_DETAIL_QUERY = gql`
query GetShopList($productId: String!) {
  getProductDetail(productId: $productId) {
    _id
    name
    src
    price
    _reviewId {
      _id
      review
      stars
      createdAt
      editable
      _userId{
        userName
      }
    }
  }
}
`