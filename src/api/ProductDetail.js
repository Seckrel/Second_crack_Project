import { gql } from '@apollo/client';


export const PRODUCT_DETAIL_QUERY = gql`
query GetShopList($productId: String!) {
  getProductDetail(productId: $productId) {
    id
    name
    src
    price
    _reviewId {
      id
      review
      stars
      createdAt
    }
  }
}
`