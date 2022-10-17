import { gql } from "@apollo/client";


export const PRODUCT_DETAIL_QUERY = gql`
mutation Payment ($orderList: [PaymentProps!]!){
payment(
  orderList: $orderList
) {
  orderCompleted
  error
}
}
`;
