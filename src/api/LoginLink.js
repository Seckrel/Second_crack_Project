import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
    mutation LoginUserMutation(
        $userName: String!, 
        $password: String!,
        ) {
        loginUser(
            userName: $userName, 
            password: $password,
            ) {
                userName
                firstName
                lastName
                phnNumber
                flag
                msg
                error
        }
  }
`