import { gql } from "@apollo/client"


// export const ADD_NEW_COMMUNITY = gql`
// query {
//     Community {
//         title
//         description
//         image
//         relatedPosts
//     }

// }
// `
export const GET_ALL_POST = gql`
 {
    posts {
      
      title
      text
      authorUsername
    }
}
`

