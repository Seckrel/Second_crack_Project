import { gql } from '@apollo/client';

export const ADD_REVIEW_MUTATION = gql`
    mutation addingReviews(
        $review: String!, 
        $productId: String!,
        $stars: Int,
        $reviewId: String
        ) {
        addReview(
            review: $review, 
            productId: $productId,
            stars: $stars,
            reviewId: $reviewId
            ) {
                review
                createdAt
        }
  }
`