import map from 'lodash/map';
import orderBy from 'lodash/orderBy';
import uniqBy from 'lodash/uniqBy';
import reverse from 'lodash/reverse';
import { IOffer, Value } from '../store/data/slice';

const getFilterByKey = (offers: IOffer[], key: keyof IOffer, title: string) => {
    const uniqueOffersByKey = uniqBy(offers, (offer) => offer[key]);

    console.log(uniqueOffersByKey);

    const filterItems = map(uniqueOffersByKey, (uniqueOfferByKey) => {
        return {
            value: uniqueOfferByKey[key] as Value,
            disabled: false,
        };
    });
    const reversedItems = reverse(filterItems);
    const filters = key === 'size' ? orderBy(reversedItems, ['value'], 'asc') : reversedItems;

    const filter = { title, filters };
    return filter;
};

export { getFilterByKey };
