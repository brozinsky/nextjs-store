export const PRODUCT_QUERY = `
    query {
        products {
            data {
                attributes {
                    title
                    description
                    price
                    slug
                    discount
                    new
                    Collection
                    image {
                        data {
                            attributes {
                                formats
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const PRODUCT_SORT_PRICE_ASC_QUERY = `
    query {
        products(sort: "price:asc") {
            data {
                attributes {
                    title
                    description
                    price
                    slug
                    discount
                    new
                    Collection
                    image {
                        data {
                            attributes {
                                formats
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const PRODUCT_SORT_PRICE_DESC_QUERY = `
    query {
        products(sort: "price:desc") {
            data {
                attributes {
                    title
                    description
                    price
                    slug
                    discount
                    new
                    Collection
                    image {
                        data {
                            attributes {
                                formats
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const PRODUCT_FILTER_COLLECTION_MEN_QUERY = `
    query {
        products(filters: {Collection: { eq: "men"}}) {
            data {
                attributes {
                    title
                    description
                    price
                    slug
                    discount
                    new
                    Collection
                    image {
                        data {
                            attributes {
                                formats
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const PRODUCT_FILTER_SALE_QUERY = `
    query {
        products(filters: {discount: { not: null}}) {
            data {
                attributes {
                    title
                    description
                    price
                    slug
                    discount
                    new
                    Collection
                    image {
                        data {
                            attributes {
                                formats
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const PRODUCT_FILTER_COLLECTION_WOMEN_QUERY = `
    query {
        products(filters: {Collection: { eq: "women"}}) {
            data {
                attributes {
                    title
                    description
                    price
                    slug
                    discount
                    new
                    Collection
                    image {
                        data {
                            attributes {
                                formats
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const PRODUCT_FILTER_NEW_QUERY = `
    query {
        products(filters: {new: { eq: true}}) {
            data {
                attributes {
                    title
                    description
                    price
                    slug
                    discount
                    new
                    Collection
                    image {
                        data {
                            attributes {
                                formats
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const GET_PRODUCT_QUERY = `
    query getProduct($slug: String!) {
        products(filters: {slug: {eq: $slug}}) {
            data {
                attributes {
                    title
                    description
                    price
                    slug
                    discount
                    new
                    Collection
                    image {
                        data {
                            attributes {
                                formats
                            }
                        }
                    }
                }
            }
        }
    }
`;
