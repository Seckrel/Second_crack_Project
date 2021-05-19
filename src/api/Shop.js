import { gql } from '@apollo/client';


export const SHOP_ITEM_QUERY = gql`
query GetShopList {
  getShopList {
    id
    name
    src
    price
  }
}
`

