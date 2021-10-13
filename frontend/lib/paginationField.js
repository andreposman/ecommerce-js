/* eslint-disable no-plusplus */
import { id } from 'date-fns/locale';
import { PAGINATION_QUERY } from '../components/Pagination';
import ItemStyles from '../components/styles/ItemStyles';

export default function paginationField() {
  return {
    keyArgs: false, // tells apollo we will manage everything
    read(existing = [], { args, cache }) {
      // first asks the read function for those items
      // we can return items, because they are in cache
      // or we can return false, and fetch from the server

      console.log({ existing, args, cache });
      const { skip, first } = args;

      // read num of items on page from cache
      const data = cache.readQuery({ query: PAGINATION_QUERY });
      const count = data?._allProductsMeta?.count || 1;
      const page = skip / first + 1;
      const pages = Math.ceil(count / first);

      // check if we have existing items
      const items = existing.slice(skip, skip + first).filter((x) => x);

      if (items.length && items.length !== first && page === pages) {
        return items;
      }

      if (items.length !== first) {
        // We don't have any items, we must go to the network to fetch them
        return false;
      }

      if (items.length) {
        console.log(
          `There are ${items.length} in the cache! Gonna send them boss`
        );
        return items;
      }

      return false; // fallback
    },
    merge(existing, incoming, { args }) {
      const { skip, first } = args;
      // this runs when apollo comes back from the server w/ the products
      console.log(`Merging items from network ${incoming.length}`);
      const merged = existing ? existing.slice(0) : [];
      for (let i = skip; i < skip + incoming.length; ++i) {
        merged[i] = incoming[i - skip];
      }
      console.log(merged);
      // Finally we return the merged items from the cache,
      return merged;
    },
  };
}
