import { gql } from '@apollo/client';

export const UPDATE_USER_MUTATION = gql`
    mutation UpdateUser(
        $firstName: String!, 
        $newPassword: String,
        $currentPassword: String,
        $lastName: String,
        $phnNumber: String,
        $address: String,
        $city: String,
        $state: String
        ) {
        updateUser( 
            newPassword: $newPassword,
            currentPassword: $currentPassword,
            firstName: $firstName,
            lastName: $lastName,
            phnNumber: $phnNumber,
            address: $address,
            city: $city,
            state: $state
            ) {
                userName
                firstName
                lastName
                phnNumber
                address
                city
                state
                error
        }
  }
`