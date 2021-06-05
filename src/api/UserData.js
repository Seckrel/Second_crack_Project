import { gql } from '@apollo/client';


export const GET_USER_DATA_QUERY = gql`
query GetUser {
    getUsers {
    userName
    firstName
    lastName
    phnNumber
    error
  }
}
`