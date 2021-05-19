import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
    mutation AddingUserMutation($userName: String!, $password: String!) {
        addUser(userName: $userName, password: $password) {
            userName
            password
        }
  }
`
