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

export const PRODUCT_FILTER_NEW_QUERY = `
    query {
        products(pagination: { limit: 6 }, filters: {new: { eq: true}}) {
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

export const PRODUCT_FILTER_QUERY = (sort, filters) => `
    query {
        products(${sort !== "" ? `sort: ${JSON.stringify(sort)},` : ""} 
        ${filters !== "" ? `filters: ${filters}` : ""}
        ) {
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
