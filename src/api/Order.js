import { gql } from "@apollo/client";


export const PRODUCT_DETAIL_QUERY = gql`
mutation Payment (
  $firstName: String!, 
  $lastName: String!,
  $phnNumber: String!, 
  $address: String!,
  $city: String!,
  $state: String,
  $orderList: [PaymentProps!]!
  ){
    payment(
      firstName: $firstName,
      lastName: $lastName,
      phnNumber: $phnNumber,
      address: $address,
      city: $city,
      state: $state,
      orderList: $orderList
    ) {
      id
      error
      forwardLink
    }
}
`;
