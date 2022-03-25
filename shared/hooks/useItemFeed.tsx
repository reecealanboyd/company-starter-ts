import { gql } from "@apollo/client";

export const ITEM_FEED_QUERY = gql`
  query {
    itemFeed {
      id
      name
      description
      imageUrl
      url
    }
  }
`;