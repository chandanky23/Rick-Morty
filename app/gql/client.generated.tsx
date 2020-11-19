import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Query = {
  __typename?: 'Query';
  /** Get a specific character by ID */
  character?: Maybe<Character>;
  /** Get the list of all characters */
  characters?: Maybe<Characters>;
  /** Get a list of characters selected by ids */
  charactersByIds?: Maybe<Array<Maybe<Character>>>;
  /** Get a specific locations by ID */
  location?: Maybe<Location>;
  /** Get the list of all locations */
  locations?: Maybe<Locations>;
  /** Get a list of locations selected by ids */
  locationsByIds?: Maybe<Array<Maybe<Location>>>;
  /** Get a specific episode by ID */
  episode?: Maybe<Episode>;
  /** Get the list of all episodes */
  episodes?: Maybe<Episodes>;
  /** Get a list of episodes selected by ids */
  episodesByIds?: Maybe<Array<Maybe<Episode>>>;
};


export type QueryCharacterArgs = {
  id: Scalars['ID'];
};


export type QueryCharactersArgs = {
  page?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterCharacter>;
};


export type QueryCharactersByIdsArgs = {
  ids: Array<Scalars['ID']>;
};


export type QueryLocationArgs = {
  id: Scalars['ID'];
};


export type QueryLocationsArgs = {
  page?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterLocation>;
};


export type QueryLocationsByIdsArgs = {
  ids: Array<Scalars['ID']>;
};


export type QueryEpisodeArgs = {
  id: Scalars['ID'];
};


export type QueryEpisodesArgs = {
  page?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterEpisode>;
};


export type QueryEpisodesByIdsArgs = {
  ids: Array<Scalars['ID']>;
};

export type Character = {
  __typename?: 'Character';
  /** The id of the character. */
  id?: Maybe<Scalars['ID']>;
  /** The name of the character. */
  name?: Maybe<Scalars['String']>;
  /** The status of the character ('Alive', 'Dead' or 'unknown'). */
  status?: Maybe<Scalars['String']>;
  /** The species of the character. */
  species?: Maybe<Scalars['String']>;
  /** The type or subspecies of the character. */
  type?: Maybe<Scalars['String']>;
  /** The gender of the character ('Female', 'Male', 'Genderless' or 'unknown'). */
  gender?: Maybe<Scalars['String']>;
  /** The character's origin location */
  origin?: Maybe<Location>;
  /** The character's last known location */
  location?: Maybe<Location>;
  /**
   * Link to the character's image.
   * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
   */
  image?: Maybe<Scalars['String']>;
  /** Episodes in which this character appeared. */
  episode?: Maybe<Array<Maybe<Episode>>>;
  /** Time at which the character was created in the database. */
  created?: Maybe<Scalars['String']>;
};

export type Location = {
  __typename?: 'Location';
  /** The id of the location. */
  id?: Maybe<Scalars['ID']>;
  /** The name of the location. */
  name?: Maybe<Scalars['String']>;
  /** The type of the location. */
  type?: Maybe<Scalars['String']>;
  /** The dimension in which the location is located. */
  dimension?: Maybe<Scalars['String']>;
  /** List of characters who have been last seen in the location. */
  residents?: Maybe<Array<Maybe<Character>>>;
  /** Time at which the location was created in the database. */
  created?: Maybe<Scalars['String']>;
};

export type Episode = {
  __typename?: 'Episode';
  /** The id of the episode. */
  id?: Maybe<Scalars['ID']>;
  /** The name of the episode. */
  name?: Maybe<Scalars['String']>;
  /** The air date of the episode. */
  air_date?: Maybe<Scalars['String']>;
  /** The code of the episode. */
  episode?: Maybe<Scalars['String']>;
  /** List of characters who have been seen in the episode. */
  characters?: Maybe<Array<Maybe<Character>>>;
  /** Time at which the episode was created in the database. */
  created?: Maybe<Scalars['String']>;
};

export type FilterCharacter = {
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  species?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
};

export type Characters = {
  __typename?: 'Characters';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Character>>>;
};

export type Info = {
  __typename?: 'Info';
  /** The length of the response. */
  count?: Maybe<Scalars['Int']>;
  /** The amount of pages. */
  pages?: Maybe<Scalars['Int']>;
  /** Number of the next page (if it exists) */
  next?: Maybe<Scalars['Int']>;
  /** Number of the previous page (if it exists) */
  prev?: Maybe<Scalars['Int']>;
};

export type FilterLocation = {
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  dimension?: Maybe<Scalars['String']>;
};

export type Locations = {
  __typename?: 'Locations';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Location>>>;
};

export type FilterEpisode = {
  name?: Maybe<Scalars['String']>;
  episode?: Maybe<Scalars['String']>;
};

export type Episodes = {
  __typename?: 'Episodes';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Episode>>>;
};

export type CacheControlScope = 
  | 'PUBLIC'
  | 'PRIVATE';


export type CharacterFragment = (
  { __typename?: 'Character' }
  & Pick<Character, 'id' | 'name' | 'status' | 'species' | 'type' | 'gender' | 'image' | 'created'>
  & { origin?: Maybe<(
    { __typename?: 'Location' }
    & Pick<Location, 'id' | 'name' | 'type' | 'dimension'>
  )>, location?: Maybe<(
    { __typename?: 'Location' }
    & Pick<Location, 'id' | 'name' | 'type' | 'dimension'>
  )>, episode?: Maybe<Array<Maybe<(
    { __typename?: 'Episode' }
    & Pick<Episode, 'id' | 'name' | 'episode'>
  )>>> }
);

export type EpisodeFragment = (
  { __typename?: 'Episode' }
  & Pick<Episode, 'id' | 'name' | 'air_date' | 'episode' | 'created'>
  & { characters?: Maybe<Array<Maybe<(
    { __typename?: 'Character' }
    & CharacterFragment
  )>>> }
);

export type InfoFragment = (
  { __typename?: 'Info' }
  & Pick<Info, 'count' | 'pages' | 'next' | 'prev'>
);

export type CharacterQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type CharacterQuery = (
  { __typename?: 'Query' }
  & { character?: Maybe<(
    { __typename?: 'Character' }
    & CharacterFragment
  )> }
);

export type CharactersQueryVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterCharacter>;
}>;


export type CharactersQuery = (
  { __typename?: 'Query' }
  & { characters?: Maybe<(
    { __typename?: 'Characters' }
    & { info?: Maybe<(
      { __typename?: 'Info' }
      & InfoFragment
    )>, results?: Maybe<Array<Maybe<(
      { __typename?: 'Character' }
      & CharacterFragment
    )>>> }
  )> }
);

export type EpisodeQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type EpisodeQuery = (
  { __typename?: 'Query' }
  & { episode?: Maybe<(
    { __typename?: 'Episode' }
    & EpisodeFragment
  )> }
);

export type EpisodesQueryVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterEpisode>;
}>;


export type EpisodesQuery = (
  { __typename?: 'Query' }
  & { episodes?: Maybe<(
    { __typename?: 'Episodes' }
    & { info?: Maybe<(
      { __typename?: 'Info' }
      & InfoFragment
    )>, results?: Maybe<Array<Maybe<(
      { __typename?: 'Episode' }
      & Pick<Episode, 'id' | 'name' | 'air_date' | 'episode' | 'created'>
    )>>> }
  )> }
);

export type EpisodesByIdsQueryVariables = Exact<{
  ids: Array<Scalars['ID']>;
}>;


export type EpisodesByIdsQuery = (
  { __typename?: 'Query' }
  & { episodesByIds?: Maybe<Array<Maybe<(
    { __typename?: 'Episode' }
    & EpisodeFragment
  )>>> }
);


      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    
export const CharacterFragmentDoc = gql`
    fragment Character on Character {
  id
  name
  status
  species
  type
  gender
  origin {
    id
    name
    type
    dimension
  }
  location {
    id
    name
    type
    dimension
  }
  image
  episode {
    id
    name
    episode
  }
  created
}
    `;
export const EpisodeFragmentDoc = gql`
    fragment Episode on Episode {
  id
  name
  air_date
  episode
  characters {
    ...Character
  }
  created
}
    ${CharacterFragmentDoc}`;
export const InfoFragmentDoc = gql`
    fragment Info on Info {
  count
  pages
  next
  prev
}
    `;
export const CharacterDocument = gql`
    query character($id: ID!) {
  character(id: $id) {
    ...Character
  }
}
    ${CharacterFragmentDoc}`;

/**
 * __useCharacterQuery__
 *
 * To run a query within a React component, call `useCharacterQuery` and pass it any options that fit your needs.
 * When your component renders, `useCharacterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCharacterQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCharacterQuery(baseOptions: Apollo.QueryHookOptions<CharacterQuery, CharacterQueryVariables>) {
        return Apollo.useQuery<CharacterQuery, CharacterQueryVariables>(CharacterDocument, baseOptions);
      }
export function useCharacterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CharacterQuery, CharacterQueryVariables>) {
          return Apollo.useLazyQuery<CharacterQuery, CharacterQueryVariables>(CharacterDocument, baseOptions);
        }
export type CharacterQueryHookResult = ReturnType<typeof useCharacterQuery>;
export type CharacterLazyQueryHookResult = ReturnType<typeof useCharacterLazyQuery>;
export type CharacterQueryResult = Apollo.QueryResult<CharacterQuery, CharacterQueryVariables>;
export const CharactersDocument = gql`
    query characters($page: Int, $filter: FilterCharacter) {
  characters(page: $page, filter: $filter) {
    info {
      ...Info
    }
    results {
      ...Character
    }
  }
}
    ${InfoFragmentDoc}
${CharacterFragmentDoc}`;

/**
 * __useCharactersQuery__
 *
 * To run a query within a React component, call `useCharactersQuery` and pass it any options that fit your needs.
 * When your component renders, `useCharactersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCharactersQuery({
 *   variables: {
 *      page: // value for 'page'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useCharactersQuery(baseOptions?: Apollo.QueryHookOptions<CharactersQuery, CharactersQueryVariables>) {
        return Apollo.useQuery<CharactersQuery, CharactersQueryVariables>(CharactersDocument, baseOptions);
      }
export function useCharactersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CharactersQuery, CharactersQueryVariables>) {
          return Apollo.useLazyQuery<CharactersQuery, CharactersQueryVariables>(CharactersDocument, baseOptions);
        }
export type CharactersQueryHookResult = ReturnType<typeof useCharactersQuery>;
export type CharactersLazyQueryHookResult = ReturnType<typeof useCharactersLazyQuery>;
export type CharactersQueryResult = Apollo.QueryResult<CharactersQuery, CharactersQueryVariables>;
export const EpisodeDocument = gql`
    query episode($id: ID!) {
  episode(id: $id) {
    ...Episode
  }
}
    ${EpisodeFragmentDoc}`;

/**
 * __useEpisodeQuery__
 *
 * To run a query within a React component, call `useEpisodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useEpisodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEpisodeQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useEpisodeQuery(baseOptions: Apollo.QueryHookOptions<EpisodeQuery, EpisodeQueryVariables>) {
        return Apollo.useQuery<EpisodeQuery, EpisodeQueryVariables>(EpisodeDocument, baseOptions);
      }
export function useEpisodeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EpisodeQuery, EpisodeQueryVariables>) {
          return Apollo.useLazyQuery<EpisodeQuery, EpisodeQueryVariables>(EpisodeDocument, baseOptions);
        }
export type EpisodeQueryHookResult = ReturnType<typeof useEpisodeQuery>;
export type EpisodeLazyQueryHookResult = ReturnType<typeof useEpisodeLazyQuery>;
export type EpisodeQueryResult = Apollo.QueryResult<EpisodeQuery, EpisodeQueryVariables>;
export const EpisodesDocument = gql`
    query episodes($page: Int, $filter: FilterEpisode) {
  episodes(page: $page, filter: $filter) {
    info {
      ...Info
    }
    results {
      id
      name
      air_date
      episode
      created
    }
  }
}
    ${InfoFragmentDoc}`;

/**
 * __useEpisodesQuery__
 *
 * To run a query within a React component, call `useEpisodesQuery` and pass it any options that fit your needs.
 * When your component renders, `useEpisodesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEpisodesQuery({
 *   variables: {
 *      page: // value for 'page'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useEpisodesQuery(baseOptions?: Apollo.QueryHookOptions<EpisodesQuery, EpisodesQueryVariables>) {
        return Apollo.useQuery<EpisodesQuery, EpisodesQueryVariables>(EpisodesDocument, baseOptions);
      }
export function useEpisodesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EpisodesQuery, EpisodesQueryVariables>) {
          return Apollo.useLazyQuery<EpisodesQuery, EpisodesQueryVariables>(EpisodesDocument, baseOptions);
        }
export type EpisodesQueryHookResult = ReturnType<typeof useEpisodesQuery>;
export type EpisodesLazyQueryHookResult = ReturnType<typeof useEpisodesLazyQuery>;
export type EpisodesQueryResult = Apollo.QueryResult<EpisodesQuery, EpisodesQueryVariables>;
export const EpisodesByIdsDocument = gql`
    query episodesByIds($ids: [ID!]!) {
  episodesByIds(ids: $ids) {
    ...Episode
  }
}
    ${EpisodeFragmentDoc}`;

/**
 * __useEpisodesByIdsQuery__
 *
 * To run a query within a React component, call `useEpisodesByIdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useEpisodesByIdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEpisodesByIdsQuery({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useEpisodesByIdsQuery(baseOptions: Apollo.QueryHookOptions<EpisodesByIdsQuery, EpisodesByIdsQueryVariables>) {
        return Apollo.useQuery<EpisodesByIdsQuery, EpisodesByIdsQueryVariables>(EpisodesByIdsDocument, baseOptions);
      }
export function useEpisodesByIdsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EpisodesByIdsQuery, EpisodesByIdsQueryVariables>) {
          return Apollo.useLazyQuery<EpisodesByIdsQuery, EpisodesByIdsQueryVariables>(EpisodesByIdsDocument, baseOptions);
        }
export type EpisodesByIdsQueryHookResult = ReturnType<typeof useEpisodesByIdsQuery>;
export type EpisodesByIdsLazyQueryHookResult = ReturnType<typeof useEpisodesByIdsLazyQuery>;
export type EpisodesByIdsQueryResult = Apollo.QueryResult<EpisodesByIdsQuery, EpisodesByIdsQueryVariables>;