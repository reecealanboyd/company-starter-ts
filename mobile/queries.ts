import { useQuery, gql, QueryHookOptions } from "@apollo/client";

const ITEM_FEED_QUERY = gql`
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
  return useQuery(ITEM_FEED_QUERY, options);
};
