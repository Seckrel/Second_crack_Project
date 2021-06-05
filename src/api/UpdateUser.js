import { gql } from '@apollo/client';

export const UPDATE_USER_MUTATION = gql`
    mutation UpdateUser(
        $firstName: String!, 
        $newPassword: String,
        $currentPassword: String,
        $lastName: String,
        $phnNumber: String
        ) {
        updateUser( 
            newPassword: $newPassword,
            currentPassword: $currentPassword,
            firstName: $firstName,
            lastName: $lastName,
            phnNumber: $phnNumber
            ) {
                userName
                firstName
                lastName
                phnNumber
                error
        }
  }
`