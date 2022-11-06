export const PRODUCT_QUERY = `
    query {
        products {
            data {
                attributes {
                    title
                    description
                    price
                    slug
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
