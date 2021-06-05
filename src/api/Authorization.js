import { gql } from '@apollo/client';

export const ISAUTHENTICATED_QUERY = gql`
    query checkAuth{
            isAuthenticated
        }
`
