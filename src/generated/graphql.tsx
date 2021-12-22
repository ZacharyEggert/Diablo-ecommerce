import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};

export type BooleanWithError = {
    __typename?: 'BooleanWithError';
    data?: Maybe<Scalars['Boolean']>;
    errors?: Maybe<Array<GqlError>>;
};

export type GqlError = {
    __typename?: 'GQLError';
    code?: Maybe<Scalars['String']>;
    field?: Maybe<Scalars['String']>;
    message: Scalars['String'];
};

export type Listing = {
    __typename?: 'Listing';
    cost: Scalars['Float'];
    description: Scalars['String'];
    finish?: Maybe<Scalars['String']>;
    id: Scalars['Float'];
    imageUrls: Array<Scalars['String']>;
    make: Scalars['String'];
    model: Scalars['String'];
    price: Scalars['Float'];
    submodel?: Maybe<Scalars['String']>;
    title: Scalars['String'];
    year?: Maybe<Scalars['Float']>;
};

export type ListingResponse = {
    __typename?: 'ListingResponse';
    data?: Maybe<Listing>;
    errors?: Maybe<Array<GqlError>>;
};

export type ListingsResponse = {
    __typename?: 'ListingsResponse';
    data?: Maybe<Array<Listing>>;
    errors?: Maybe<Array<GqlError>>;
};

export type Mutation = {
    __typename?: 'Mutation';
    createListing: ListingResponse;
    createUser: UserResponse;
    deleteUser: BooleanWithError;
};

export type MutationCreateListingArgs = {
    cost: Scalars['Float'];
    description: Scalars['String'];
    finish?: InputMaybe<Scalars['String']>;
    imageUrls: Array<Scalars['String']>;
    make: Scalars['String'];
    model: Scalars['String'];
    price: Scalars['Float'];
    submodel?: InputMaybe<Scalars['String']>;
    title: Scalars['String'];
    year?: InputMaybe<Scalars['Float']>;
};

export type MutationCreateUserArgs = {
    email: Scalars['String'];
    password: Scalars['String'];
    username: Scalars['String'];
};

export type MutationDeleteUserArgs = {
    id: Scalars['Int'];
};

export type Query = {
    __typename?: 'Query';
    listing: ListingResponse;
    listings: ListingsResponse;
    user: UserResponse;
    users: UsersResponse;
};

export type QueryListingArgs = {
    id: Scalars['Int'];
};

export type QueryUserArgs = {
    id: Scalars['Int'];
};

export type User = {
    __typename?: 'User';
    accessRevoked: Scalars['Boolean'];
    email: Scalars['String'];
    id: Scalars['Float'];
    username: Scalars['String'];
};

export type UserResponse = {
    __typename?: 'UserResponse';
    data?: Maybe<User>;
    errors?: Maybe<Array<GqlError>>;
};

export type UsersResponse = {
    __typename?: 'UsersResponse';
    data?: Maybe<Array<User>>;
    errors?: Maybe<Array<GqlError>>;
};

export type ListingsQueryVariables = Exact<{ [key: string]: never }>;

export type ListingsQuery = {
    __typename?: 'Query';
    listings: {
        __typename?: 'ListingsResponse';
        data?:
            | Array<{
                  __typename?: 'Listing';
                  title: string;
                  description: string;
                  finish?: string | null | undefined;
                  model: string;
                  submodel?: string | null | undefined;
                  imageUrls: Array<string>;
                  price: number;
                  year?: number | null | undefined;
                  make: string;
                  id: number;
              }>
            | null
            | undefined;
        errors?:
            | Array<{
                  __typename?: 'GQLError';
                  message: string;
                  field?: string | null | undefined;
                  code?: string | null | undefined;
              }>
            | null
            | undefined;
    };
};

export const ListingsDocument = gql`
    query Listings {
        listings {
            data {
                title
                description
                finish
                model
                submodel
                imageUrls
                price
                year
                make
                id
            }
            errors {
                message
                field
                code
            }
        }
    }
`;

export function useListingsQuery(
    options: Omit<Urql.UseQueryArgs<ListingsQueryVariables>, 'query'> = {}
) {
    return Urql.useQuery<ListingsQuery>({
        query: ListingsDocument,
        ...options,
    });
}
