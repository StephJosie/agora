import { gql } from "@apollo/client"


export const ADD_NEW_POST = gql`
mutation Post{
    $postId: String!
    $title: String!
    $text: String!
    $authorUsername: String!
}{
    Post(
        postId: $postId
        title: $title
        text: $text
        authourUsername: $authorUsername
    )
}
`

export const ADD_NEW_COMMUNITY = gql`
mutation Community {
    $title: String!
    $description: String!
    $image: String!
    $relatedPosts: String!
}{
    Community (
        title: $title
        description: $description
        image: $image
        relatedPosts: $relatedPosts
    )
}

`

