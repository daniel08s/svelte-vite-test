import { writable } from 'svelte/store';
import { postToShopify } from '../services/shopifyApi';

export const getProducts = async () => {
    try {
        // @ts-ignore
        const shopifyResponse = await postToShopify({
            query: `{
                products(sortKey: TITLE, first: 100) {
                edges {
                    node {
                    id
                    handle
                    description
                    title
                    totalInventory
                    productType
                    variants(first: 5) {
                        edges {
                        node {
                            id
                            title
                            quantityAvailable
                            price
                        }
                        }
                    }
                    priceRange {
                        maxVariantPrice {
                        amount
                        currencyCode
                        }
                        minVariantPrice {
                        amount
                        currencyCode
                        }
                    }
                    images(first: 1) {
                        edges {
                        node {
                            src
                            altText
                        }
                        }
                    }
                    }
                }
                }
            }
      `,
        });
        return shopifyResponse.products.edges;
    } catch (error) {
        console.log(error);
    }
};
