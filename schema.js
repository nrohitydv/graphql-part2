export const typeDefs = `#graphql
type Game {
    id: ID!
    title: String!
    platform:[String!]!

}
type Review{
    id: ID!
    rating: Int!
    content:String!
}
type Author{
    id: ID!
    name: String!
    verified:Boolean!
}
type Query {
    reviews:[Review]
    review(id:ID!):Review
    author(id:ID!):Author
    game(id:ID!):Game
    games:[Game]
    authors:[Author]
}
`;
