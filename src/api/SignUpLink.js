import { gql } from '@apollo/client';

export const SIGNUP_MUTATION = gql`
    mutation ADDUSER(
        $userName: String!, 
        $password: String!,
        $firstName: String!,
        $lastName: String,
        $phnNumber: String,
        ) {
        addUser(
            userName: $userName, 
            password: $password,
            firstName: $firstName,
            lastName: $lastName,
            phnNumber: $phnNumber
            ) {
            flag
            error
            msg
        }
  }
`
