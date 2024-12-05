"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const graphql_request_1 = require("graphql-request");
const graphql_1 = require("../generated/graphql");
class UserService {
    constructor() {
        this.client = new graphql_request_1.GraphQLClient("http://hasura:8080/v1/graphql", {
            headers: {
                "x-hasura-admin-secret": "myadminsecretkey",
            },
        });
        this.sdk = (0, graphql_1.getSdk)(this.client);
    }
    async getUsers() {
        try {
            const { users } = await this.sdk.GetUsers();
            return users;
        }
        catch (error) {
            console.error('GraphQL Error:', error);
            throw new Error("Failed to fetch users");
        }
    }
    async createUser(userData) {
        try {
            const { insert_users_one } = await this.sdk.CreateUser({ user: userData });
            return insert_users_one;
        }
        catch (error) {
            throw new Error("Failed to create user");
        }
    }
}
exports.UserService = UserService;
