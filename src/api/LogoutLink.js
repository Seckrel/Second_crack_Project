import { gql } from '@apollo/client';

export const LOGOUT_MUTATION = gql`
mutation InvalidateToken {
  invalidateToken{
    flag
    error
  }
}
`