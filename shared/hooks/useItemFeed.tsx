import { gql, QueryHookOptions, useQuery } from "@apollo/client";

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

export const useItemFeed = (options?: QueryHookOptions) => {
  return useQuery(ITEM_FEED_QUERY, options)
}