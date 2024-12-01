import { GraphQLClient } from "graphql-request";
import { getSdk, Users_Insert_Input } from "../generated/graphql";

export class UserService {
  private client: GraphQLClient;
  private sdk: ReturnType<typeof getSdk>;

  constructor() {
    this.client = new GraphQLClient("http://hasura:8080/v1/graphql", {
      headers: {
        "x-hasura-admin-secret": "myadminsecretkey",
      },
    });
    this.sdk = getSdk(this.client);
  }

  async getUsers() {
    try {
      const { users } = await this.sdk.GetUsers();
      return users;
    } catch (error) {
      console.error('GraphQL Error:', error);
      throw new Error("Failed to fetch users");
    }
  }

  async createUser(userData: Users_Insert_Input) {
    try {
      const { insert_users_one } = await this.sdk.CreateUser({ user: userData });
      return insert_users_one;
    } catch (error) {
      throw new Error("Failed to create user");
    }
  }
}
