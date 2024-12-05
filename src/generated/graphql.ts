import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  numeric: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "categories" */
export type Categories = {
  __typename?: 'categories';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  image_url?: Maybe<Scalars['String']['output']>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  /** An array relationship */
  products: Array<Products>;
  /** An aggregate relationship */
  products_aggregate: Products_Aggregate;
};


/** columns and relationships of "categories" */
export type CategoriesProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


/** columns and relationships of "categories" */
export type CategoriesProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};

/** aggregated selection of "categories" */
export type Categories_Aggregate = {
  __typename?: 'categories_aggregate';
  aggregate?: Maybe<Categories_Aggregate_Fields>;
  nodes: Array<Categories>;
};

/** aggregate fields of "categories" */
export type Categories_Aggregate_Fields = {
  __typename?: 'categories_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Categories_Max_Fields>;
  min?: Maybe<Categories_Min_Fields>;
};


/** aggregate fields of "categories" */
export type Categories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
export type Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Categories_Bool_Exp>>;
  _not?: InputMaybe<Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Categories_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image_url?: InputMaybe<String_Comparison_Exp>;
  is_active?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  products?: InputMaybe<Products_Bool_Exp>;
  products_aggregate?: InputMaybe<Products_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "categories" */
export enum Categories_Constraint {
  /** unique or primary key constraint on columns "id" */
  CategoriesPkey = 'categories_pkey'
}

/** input type for inserting data into table "categories" */
export type Categories_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<Products_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Categories_Max_Fields = {
  __typename?: 'categories_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image_url?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Categories_Min_Fields = {
  __typename?: 'categories_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image_url?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "categories" */
export type Categories_Mutation_Response = {
  __typename?: 'categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Categories>;
};

/** input type for inserting object relation for remote table "categories" */
export type Categories_Obj_Rel_Insert_Input = {
  data: Categories_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};

/** on_conflict condition type for table "categories" */
export type Categories_On_Conflict = {
  constraint: Categories_Constraint;
  update_columns?: Array<Categories_Update_Column>;
  where?: InputMaybe<Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "categories". */
export type Categories_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
  is_active?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  products_aggregate?: InputMaybe<Products_Aggregate_Order_By>;
};

/** primary key columns input for table: categories */
export type Categories_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "categories" */
export enum Categories_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "categories" */
export type Categories_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "categories" */
export type Categories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Categories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Categories_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "categories" */
export enum Categories_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  Name = 'name'
}

export type Categories_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Categories_Set_Input>;
  /** filter the rows which have to be updated */
  where: Categories_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "customer_points" */
export type Customer_Points = {
  __typename?: 'customer_points';
  last_visit?: Maybe<Scalars['timestamptz']['output']>;
  points?: Maybe<Scalars['Int']['output']>;
  total_spent?: Maybe<Scalars['numeric']['output']>;
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "customer_points" */
export type Customer_Points_Aggregate = {
  __typename?: 'customer_points_aggregate';
  aggregate?: Maybe<Customer_Points_Aggregate_Fields>;
  nodes: Array<Customer_Points>;
};

/** aggregate fields of "customer_points" */
export type Customer_Points_Aggregate_Fields = {
  __typename?: 'customer_points_aggregate_fields';
  avg?: Maybe<Customer_Points_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Customer_Points_Max_Fields>;
  min?: Maybe<Customer_Points_Min_Fields>;
  stddev?: Maybe<Customer_Points_Stddev_Fields>;
  stddev_pop?: Maybe<Customer_Points_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Customer_Points_Stddev_Samp_Fields>;
  sum?: Maybe<Customer_Points_Sum_Fields>;
  var_pop?: Maybe<Customer_Points_Var_Pop_Fields>;
  var_samp?: Maybe<Customer_Points_Var_Samp_Fields>;
  variance?: Maybe<Customer_Points_Variance_Fields>;
};


/** aggregate fields of "customer_points" */
export type Customer_Points_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Customer_Points_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Customer_Points_Avg_Fields = {
  __typename?: 'customer_points_avg_fields';
  points?: Maybe<Scalars['Float']['output']>;
  total_spent?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "customer_points". All fields are combined with a logical 'AND'. */
export type Customer_Points_Bool_Exp = {
  _and?: InputMaybe<Array<Customer_Points_Bool_Exp>>;
  _not?: InputMaybe<Customer_Points_Bool_Exp>;
  _or?: InputMaybe<Array<Customer_Points_Bool_Exp>>;
  last_visit?: InputMaybe<Timestamptz_Comparison_Exp>;
  points?: InputMaybe<Int_Comparison_Exp>;
  total_spent?: InputMaybe<Numeric_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "customer_points" */
export enum Customer_Points_Constraint {
  /** unique or primary key constraint on columns "user_id" */
  CustomerPointsPkey = 'customer_points_pkey'
}

/** input type for incrementing numeric columns in table "customer_points" */
export type Customer_Points_Inc_Input = {
  points?: InputMaybe<Scalars['Int']['input']>;
  total_spent?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "customer_points" */
export type Customer_Points_Insert_Input = {
  last_visit?: InputMaybe<Scalars['timestamptz']['input']>;
  points?: InputMaybe<Scalars['Int']['input']>;
  total_spent?: InputMaybe<Scalars['numeric']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Customer_Points_Max_Fields = {
  __typename?: 'customer_points_max_fields';
  last_visit?: Maybe<Scalars['timestamptz']['output']>;
  points?: Maybe<Scalars['Int']['output']>;
  total_spent?: Maybe<Scalars['numeric']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Customer_Points_Min_Fields = {
  __typename?: 'customer_points_min_fields';
  last_visit?: Maybe<Scalars['timestamptz']['output']>;
  points?: Maybe<Scalars['Int']['output']>;
  total_spent?: Maybe<Scalars['numeric']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "customer_points" */
export type Customer_Points_Mutation_Response = {
  __typename?: 'customer_points_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Customer_Points>;
};

/** input type for inserting object relation for remote table "customer_points" */
export type Customer_Points_Obj_Rel_Insert_Input = {
  data: Customer_Points_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Customer_Points_On_Conflict>;
};

/** on_conflict condition type for table "customer_points" */
export type Customer_Points_On_Conflict = {
  constraint: Customer_Points_Constraint;
  update_columns?: Array<Customer_Points_Update_Column>;
  where?: InputMaybe<Customer_Points_Bool_Exp>;
};

/** Ordering options when selecting data from "customer_points". */
export type Customer_Points_Order_By = {
  last_visit?: InputMaybe<Order_By>;
  points?: InputMaybe<Order_By>;
  total_spent?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: customer_points */
export type Customer_Points_Pk_Columns_Input = {
  user_id: Scalars['uuid']['input'];
};

/** select columns of table "customer_points" */
export enum Customer_Points_Select_Column {
  /** column name */
  LastVisit = 'last_visit',
  /** column name */
  Points = 'points',
  /** column name */
  TotalSpent = 'total_spent',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "customer_points" */
export type Customer_Points_Set_Input = {
  last_visit?: InputMaybe<Scalars['timestamptz']['input']>;
  points?: InputMaybe<Scalars['Int']['input']>;
  total_spent?: InputMaybe<Scalars['numeric']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Customer_Points_Stddev_Fields = {
  __typename?: 'customer_points_stddev_fields';
  points?: Maybe<Scalars['Float']['output']>;
  total_spent?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Customer_Points_Stddev_Pop_Fields = {
  __typename?: 'customer_points_stddev_pop_fields';
  points?: Maybe<Scalars['Float']['output']>;
  total_spent?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Customer_Points_Stddev_Samp_Fields = {
  __typename?: 'customer_points_stddev_samp_fields';
  points?: Maybe<Scalars['Float']['output']>;
  total_spent?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "customer_points" */
export type Customer_Points_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Customer_Points_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Customer_Points_Stream_Cursor_Value_Input = {
  last_visit?: InputMaybe<Scalars['timestamptz']['input']>;
  points?: InputMaybe<Scalars['Int']['input']>;
  total_spent?: InputMaybe<Scalars['numeric']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Customer_Points_Sum_Fields = {
  __typename?: 'customer_points_sum_fields';
  points?: Maybe<Scalars['Int']['output']>;
  total_spent?: Maybe<Scalars['numeric']['output']>;
};

/** update columns of table "customer_points" */
export enum Customer_Points_Update_Column {
  /** column name */
  LastVisit = 'last_visit',
  /** column name */
  Points = 'points',
  /** column name */
  TotalSpent = 'total_spent',
  /** column name */
  UserId = 'user_id'
}

export type Customer_Points_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Customer_Points_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Customer_Points_Set_Input>;
  /** filter the rows which have to be updated */
  where: Customer_Points_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Customer_Points_Var_Pop_Fields = {
  __typename?: 'customer_points_var_pop_fields';
  points?: Maybe<Scalars['Float']['output']>;
  total_spent?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Customer_Points_Var_Samp_Fields = {
  __typename?: 'customer_points_var_samp_fields';
  points?: Maybe<Scalars['Float']['output']>;
  total_spent?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Customer_Points_Variance_Fields = {
  __typename?: 'customer_points_variance_fields';
  points?: Maybe<Scalars['Float']['output']>;
  total_spent?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "ingredients" */
export type Ingredients = {
  __typename?: 'ingredients';
  current_stock?: Maybe<Scalars['numeric']['output']>;
  id: Scalars['uuid']['output'];
  minimum_stock?: Maybe<Scalars['numeric']['output']>;
  name: Scalars['String']['output'];
  /** An array relationship */
  product_ingredients: Array<Product_Ingredients>;
  /** An aggregate relationship */
  product_ingredients_aggregate: Product_Ingredients_Aggregate;
  unit: Scalars['String']['output'];
};


/** columns and relationships of "ingredients" */
export type IngredientsProduct_IngredientsArgs = {
  distinct_on?: InputMaybe<Array<Product_Ingredients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Ingredients_Order_By>>;
  where?: InputMaybe<Product_Ingredients_Bool_Exp>;
};


/** columns and relationships of "ingredients" */
export type IngredientsProduct_Ingredients_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Ingredients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Ingredients_Order_By>>;
  where?: InputMaybe<Product_Ingredients_Bool_Exp>;
};

/** aggregated selection of "ingredients" */
export type Ingredients_Aggregate = {
  __typename?: 'ingredients_aggregate';
  aggregate?: Maybe<Ingredients_Aggregate_Fields>;
  nodes: Array<Ingredients>;
};

/** aggregate fields of "ingredients" */
export type Ingredients_Aggregate_Fields = {
  __typename?: 'ingredients_aggregate_fields';
  avg?: Maybe<Ingredients_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Ingredients_Max_Fields>;
  min?: Maybe<Ingredients_Min_Fields>;
  stddev?: Maybe<Ingredients_Stddev_Fields>;
  stddev_pop?: Maybe<Ingredients_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Ingredients_Stddev_Samp_Fields>;
  sum?: Maybe<Ingredients_Sum_Fields>;
  var_pop?: Maybe<Ingredients_Var_Pop_Fields>;
  var_samp?: Maybe<Ingredients_Var_Samp_Fields>;
  variance?: Maybe<Ingredients_Variance_Fields>;
};


/** aggregate fields of "ingredients" */
export type Ingredients_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ingredients_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Ingredients_Avg_Fields = {
  __typename?: 'ingredients_avg_fields';
  current_stock?: Maybe<Scalars['Float']['output']>;
  minimum_stock?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "ingredients". All fields are combined with a logical 'AND'. */
export type Ingredients_Bool_Exp = {
  _and?: InputMaybe<Array<Ingredients_Bool_Exp>>;
  _not?: InputMaybe<Ingredients_Bool_Exp>;
  _or?: InputMaybe<Array<Ingredients_Bool_Exp>>;
  current_stock?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  minimum_stock?: InputMaybe<Numeric_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  product_ingredients?: InputMaybe<Product_Ingredients_Bool_Exp>;
  product_ingredients_aggregate?: InputMaybe<Product_Ingredients_Aggregate_Bool_Exp>;
  unit?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ingredients" */
export enum Ingredients_Constraint {
  /** unique or primary key constraint on columns "id" */
  IngredientsPkey = 'ingredients_pkey'
}

/** input type for incrementing numeric columns in table "ingredients" */
export type Ingredients_Inc_Input = {
  current_stock?: InputMaybe<Scalars['numeric']['input']>;
  minimum_stock?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "ingredients" */
export type Ingredients_Insert_Input = {
  current_stock?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  minimum_stock?: InputMaybe<Scalars['numeric']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  product_ingredients?: InputMaybe<Product_Ingredients_Arr_Rel_Insert_Input>;
  unit?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Ingredients_Max_Fields = {
  __typename?: 'ingredients_max_fields';
  current_stock?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  minimum_stock?: Maybe<Scalars['numeric']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  unit?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Ingredients_Min_Fields = {
  __typename?: 'ingredients_min_fields';
  current_stock?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  minimum_stock?: Maybe<Scalars['numeric']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  unit?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "ingredients" */
export type Ingredients_Mutation_Response = {
  __typename?: 'ingredients_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Ingredients>;
};

/** input type for inserting object relation for remote table "ingredients" */
export type Ingredients_Obj_Rel_Insert_Input = {
  data: Ingredients_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Ingredients_On_Conflict>;
};

/** on_conflict condition type for table "ingredients" */
export type Ingredients_On_Conflict = {
  constraint: Ingredients_Constraint;
  update_columns?: Array<Ingredients_Update_Column>;
  where?: InputMaybe<Ingredients_Bool_Exp>;
};

/** Ordering options when selecting data from "ingredients". */
export type Ingredients_Order_By = {
  current_stock?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  minimum_stock?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  product_ingredients_aggregate?: InputMaybe<Product_Ingredients_Aggregate_Order_By>;
  unit?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ingredients */
export type Ingredients_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "ingredients" */
export enum Ingredients_Select_Column {
  /** column name */
  CurrentStock = 'current_stock',
  /** column name */
  Id = 'id',
  /** column name */
  MinimumStock = 'minimum_stock',
  /** column name */
  Name = 'name',
  /** column name */
  Unit = 'unit'
}

/** input type for updating data in table "ingredients" */
export type Ingredients_Set_Input = {
  current_stock?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  minimum_stock?: InputMaybe<Scalars['numeric']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  unit?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Ingredients_Stddev_Fields = {
  __typename?: 'ingredients_stddev_fields';
  current_stock?: Maybe<Scalars['Float']['output']>;
  minimum_stock?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Ingredients_Stddev_Pop_Fields = {
  __typename?: 'ingredients_stddev_pop_fields';
  current_stock?: Maybe<Scalars['Float']['output']>;
  minimum_stock?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Ingredients_Stddev_Samp_Fields = {
  __typename?: 'ingredients_stddev_samp_fields';
  current_stock?: Maybe<Scalars['Float']['output']>;
  minimum_stock?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "ingredients" */
export type Ingredients_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Ingredients_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ingredients_Stream_Cursor_Value_Input = {
  current_stock?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  minimum_stock?: InputMaybe<Scalars['numeric']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  unit?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Ingredients_Sum_Fields = {
  __typename?: 'ingredients_sum_fields';
  current_stock?: Maybe<Scalars['numeric']['output']>;
  minimum_stock?: Maybe<Scalars['numeric']['output']>;
};

/** update columns of table "ingredients" */
export enum Ingredients_Update_Column {
  /** column name */
  CurrentStock = 'current_stock',
  /** column name */
  Id = 'id',
  /** column name */
  MinimumStock = 'minimum_stock',
  /** column name */
  Name = 'name',
  /** column name */
  Unit = 'unit'
}

export type Ingredients_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Ingredients_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Ingredients_Set_Input>;
  /** filter the rows which have to be updated */
  where: Ingredients_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Ingredients_Var_Pop_Fields = {
  __typename?: 'ingredients_var_pop_fields';
  current_stock?: Maybe<Scalars['Float']['output']>;
  minimum_stock?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Ingredients_Var_Samp_Fields = {
  __typename?: 'ingredients_var_samp_fields';
  current_stock?: Maybe<Scalars['Float']['output']>;
  minimum_stock?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Ingredients_Variance_Fields = {
  __typename?: 'ingredients_variance_fields';
  current_stock?: Maybe<Scalars['Float']['output']>;
  minimum_stock?: Maybe<Scalars['Float']['output']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "categories" */
  delete_categories?: Maybe<Categories_Mutation_Response>;
  /** delete single row from the table: "categories" */
  delete_categories_by_pk?: Maybe<Categories>;
  /** delete data from the table: "customer_points" */
  delete_customer_points?: Maybe<Customer_Points_Mutation_Response>;
  /** delete single row from the table: "customer_points" */
  delete_customer_points_by_pk?: Maybe<Customer_Points>;
  /** delete data from the table: "ingredients" */
  delete_ingredients?: Maybe<Ingredients_Mutation_Response>;
  /** delete single row from the table: "ingredients" */
  delete_ingredients_by_pk?: Maybe<Ingredients>;
  /** delete data from the table: "order_items" */
  delete_order_items?: Maybe<Order_Items_Mutation_Response>;
  /** delete single row from the table: "order_items" */
  delete_order_items_by_pk?: Maybe<Order_Items>;
  /** delete data from the table: "orders" */
  delete_orders?: Maybe<Orders_Mutation_Response>;
  /** delete single row from the table: "orders" */
  delete_orders_by_pk?: Maybe<Orders>;
  /** delete data from the table: "product_ingredients" */
  delete_product_ingredients?: Maybe<Product_Ingredients_Mutation_Response>;
  /** delete single row from the table: "product_ingredients" */
  delete_product_ingredients_by_pk?: Maybe<Product_Ingredients>;
  /** delete data from the table: "products" */
  delete_products?: Maybe<Products_Mutation_Response>;
  /** delete single row from the table: "products" */
  delete_products_by_pk?: Maybe<Products>;
  /** delete data from the table: "purchase_orders" */
  delete_purchase_orders?: Maybe<Purchase_Orders_Mutation_Response>;
  /** delete single row from the table: "purchase_orders" */
  delete_purchase_orders_by_pk?: Maybe<Purchase_Orders>;
  /** delete data from the table: "suppliers" */
  delete_suppliers?: Maybe<Suppliers_Mutation_Response>;
  /** delete single row from the table: "suppliers" */
  delete_suppliers_by_pk?: Maybe<Suppliers>;
  /** delete data from the table: "tables" */
  delete_tables?: Maybe<Tables_Mutation_Response>;
  /** delete single row from the table: "tables" */
  delete_tables_by_pk?: Maybe<Tables>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "categories" */
  insert_categories?: Maybe<Categories_Mutation_Response>;
  /** insert a single row into the table: "categories" */
  insert_categories_one?: Maybe<Categories>;
  /** insert data into the table: "customer_points" */
  insert_customer_points?: Maybe<Customer_Points_Mutation_Response>;
  /** insert a single row into the table: "customer_points" */
  insert_customer_points_one?: Maybe<Customer_Points>;
  /** insert data into the table: "ingredients" */
  insert_ingredients?: Maybe<Ingredients_Mutation_Response>;
  /** insert a single row into the table: "ingredients" */
  insert_ingredients_one?: Maybe<Ingredients>;
  /** insert data into the table: "order_items" */
  insert_order_items?: Maybe<Order_Items_Mutation_Response>;
  /** insert a single row into the table: "order_items" */
  insert_order_items_one?: Maybe<Order_Items>;
  /** insert data into the table: "orders" */
  insert_orders?: Maybe<Orders_Mutation_Response>;
  /** insert a single row into the table: "orders" */
  insert_orders_one?: Maybe<Orders>;
  /** insert data into the table: "product_ingredients" */
  insert_product_ingredients?: Maybe<Product_Ingredients_Mutation_Response>;
  /** insert a single row into the table: "product_ingredients" */
  insert_product_ingredients_one?: Maybe<Product_Ingredients>;
  /** insert data into the table: "products" */
  insert_products?: Maybe<Products_Mutation_Response>;
  /** insert a single row into the table: "products" */
  insert_products_one?: Maybe<Products>;
  /** insert data into the table: "purchase_orders" */
  insert_purchase_orders?: Maybe<Purchase_Orders_Mutation_Response>;
  /** insert a single row into the table: "purchase_orders" */
  insert_purchase_orders_one?: Maybe<Purchase_Orders>;
  /** insert data into the table: "suppliers" */
  insert_suppliers?: Maybe<Suppliers_Mutation_Response>;
  /** insert a single row into the table: "suppliers" */
  insert_suppliers_one?: Maybe<Suppliers>;
  /** insert data into the table: "tables" */
  insert_tables?: Maybe<Tables_Mutation_Response>;
  /** insert a single row into the table: "tables" */
  insert_tables_one?: Maybe<Tables>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "categories" */
  update_categories?: Maybe<Categories_Mutation_Response>;
  /** update single row of the table: "categories" */
  update_categories_by_pk?: Maybe<Categories>;
  /** update multiples rows of table: "categories" */
  update_categories_many?: Maybe<Array<Maybe<Categories_Mutation_Response>>>;
  /** update data of the table: "customer_points" */
  update_customer_points?: Maybe<Customer_Points_Mutation_Response>;
  /** update single row of the table: "customer_points" */
  update_customer_points_by_pk?: Maybe<Customer_Points>;
  /** update multiples rows of table: "customer_points" */
  update_customer_points_many?: Maybe<Array<Maybe<Customer_Points_Mutation_Response>>>;
  /** update data of the table: "ingredients" */
  update_ingredients?: Maybe<Ingredients_Mutation_Response>;
  /** update single row of the table: "ingredients" */
  update_ingredients_by_pk?: Maybe<Ingredients>;
  /** update multiples rows of table: "ingredients" */
  update_ingredients_many?: Maybe<Array<Maybe<Ingredients_Mutation_Response>>>;
  /** update data of the table: "order_items" */
  update_order_items?: Maybe<Order_Items_Mutation_Response>;
  /** update single row of the table: "order_items" */
  update_order_items_by_pk?: Maybe<Order_Items>;
  /** update multiples rows of table: "order_items" */
  update_order_items_many?: Maybe<Array<Maybe<Order_Items_Mutation_Response>>>;
  /** update data of the table: "orders" */
  update_orders?: Maybe<Orders_Mutation_Response>;
  /** update single row of the table: "orders" */
  update_orders_by_pk?: Maybe<Orders>;
  /** update multiples rows of table: "orders" */
  update_orders_many?: Maybe<Array<Maybe<Orders_Mutation_Response>>>;
  /** update data of the table: "product_ingredients" */
  update_product_ingredients?: Maybe<Product_Ingredients_Mutation_Response>;
  /** update single row of the table: "product_ingredients" */
  update_product_ingredients_by_pk?: Maybe<Product_Ingredients>;
  /** update multiples rows of table: "product_ingredients" */
  update_product_ingredients_many?: Maybe<Array<Maybe<Product_Ingredients_Mutation_Response>>>;
  /** update data of the table: "products" */
  update_products?: Maybe<Products_Mutation_Response>;
  /** update single row of the table: "products" */
  update_products_by_pk?: Maybe<Products>;
  /** update multiples rows of table: "products" */
  update_products_many?: Maybe<Array<Maybe<Products_Mutation_Response>>>;
  /** update data of the table: "purchase_orders" */
  update_purchase_orders?: Maybe<Purchase_Orders_Mutation_Response>;
  /** update single row of the table: "purchase_orders" */
  update_purchase_orders_by_pk?: Maybe<Purchase_Orders>;
  /** update multiples rows of table: "purchase_orders" */
  update_purchase_orders_many?: Maybe<Array<Maybe<Purchase_Orders_Mutation_Response>>>;
  /** update data of the table: "suppliers" */
  update_suppliers?: Maybe<Suppliers_Mutation_Response>;
  /** update single row of the table: "suppliers" */
  update_suppliers_by_pk?: Maybe<Suppliers>;
  /** update multiples rows of table: "suppliers" */
  update_suppliers_many?: Maybe<Array<Maybe<Suppliers_Mutation_Response>>>;
  /** update data of the table: "tables" */
  update_tables?: Maybe<Tables_Mutation_Response>;
  /** update single row of the table: "tables" */
  update_tables_by_pk?: Maybe<Tables>;
  /** update multiples rows of table: "tables" */
  update_tables_many?: Maybe<Array<Maybe<Tables_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_CategoriesArgs = {
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Categories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Customer_PointsArgs = {
  where: Customer_Points_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Customer_Points_By_PkArgs = {
  user_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_IngredientsArgs = {
  where: Ingredients_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ingredients_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Order_ItemsArgs = {
  where: Order_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Order_Items_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_OrdersArgs = {
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Orders_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Product_IngredientsArgs = {
  where: Product_Ingredients_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_Ingredients_By_PkArgs = {
  ingredient_id: Scalars['uuid']['input'];
  product_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ProductsArgs = {
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Products_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Purchase_OrdersArgs = {
  where: Purchase_Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Purchase_Orders_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_SuppliersArgs = {
  where: Suppliers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Suppliers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_TablesArgs = {
  where: Tables_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tables_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsert_CategoriesArgs = {
  objects: Array<Categories_Insert_Input>;
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Categories_OneArgs = {
  object: Categories_Insert_Input;
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Customer_PointsArgs = {
  objects: Array<Customer_Points_Insert_Input>;
  on_conflict?: InputMaybe<Customer_Points_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Customer_Points_OneArgs = {
  object: Customer_Points_Insert_Input;
  on_conflict?: InputMaybe<Customer_Points_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_IngredientsArgs = {
  objects: Array<Ingredients_Insert_Input>;
  on_conflict?: InputMaybe<Ingredients_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ingredients_OneArgs = {
  object: Ingredients_Insert_Input;
  on_conflict?: InputMaybe<Ingredients_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_ItemsArgs = {
  objects: Array<Order_Items_Insert_Input>;
  on_conflict?: InputMaybe<Order_Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_Items_OneArgs = {
  object: Order_Items_Insert_Input;
  on_conflict?: InputMaybe<Order_Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrdersArgs = {
  objects: Array<Orders_Insert_Input>;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Orders_OneArgs = {
  object: Orders_Insert_Input;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_IngredientsArgs = {
  objects: Array<Product_Ingredients_Insert_Input>;
  on_conflict?: InputMaybe<Product_Ingredients_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Ingredients_OneArgs = {
  object: Product_Ingredients_Insert_Input;
  on_conflict?: InputMaybe<Product_Ingredients_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProductsArgs = {
  objects: Array<Products_Insert_Input>;
  on_conflict?: InputMaybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Products_OneArgs = {
  object: Products_Insert_Input;
  on_conflict?: InputMaybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Purchase_OrdersArgs = {
  objects: Array<Purchase_Orders_Insert_Input>;
  on_conflict?: InputMaybe<Purchase_Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Purchase_Orders_OneArgs = {
  object: Purchase_Orders_Insert_Input;
  on_conflict?: InputMaybe<Purchase_Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SuppliersArgs = {
  objects: Array<Suppliers_Insert_Input>;
  on_conflict?: InputMaybe<Suppliers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Suppliers_OneArgs = {
  object: Suppliers_Insert_Input;
  on_conflict?: InputMaybe<Suppliers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TablesArgs = {
  objects: Array<Tables_Insert_Input>;
  on_conflict?: InputMaybe<Tables_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tables_OneArgs = {
  object: Tables_Insert_Input;
  on_conflict?: InputMaybe<Tables_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_CategoriesArgs = {
  _set?: InputMaybe<Categories_Set_Input>;
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Categories_By_PkArgs = {
  _set?: InputMaybe<Categories_Set_Input>;
  pk_columns: Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Categories_ManyArgs = {
  updates: Array<Categories_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Customer_PointsArgs = {
  _inc?: InputMaybe<Customer_Points_Inc_Input>;
  _set?: InputMaybe<Customer_Points_Set_Input>;
  where: Customer_Points_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Customer_Points_By_PkArgs = {
  _inc?: InputMaybe<Customer_Points_Inc_Input>;
  _set?: InputMaybe<Customer_Points_Set_Input>;
  pk_columns: Customer_Points_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Customer_Points_ManyArgs = {
  updates: Array<Customer_Points_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_IngredientsArgs = {
  _inc?: InputMaybe<Ingredients_Inc_Input>;
  _set?: InputMaybe<Ingredients_Set_Input>;
  where: Ingredients_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Ingredients_By_PkArgs = {
  _inc?: InputMaybe<Ingredients_Inc_Input>;
  _set?: InputMaybe<Ingredients_Set_Input>;
  pk_columns: Ingredients_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Ingredients_ManyArgs = {
  updates: Array<Ingredients_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Order_ItemsArgs = {
  _inc?: InputMaybe<Order_Items_Inc_Input>;
  _set?: InputMaybe<Order_Items_Set_Input>;
  where: Order_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Order_Items_By_PkArgs = {
  _inc?: InputMaybe<Order_Items_Inc_Input>;
  _set?: InputMaybe<Order_Items_Set_Input>;
  pk_columns: Order_Items_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Order_Items_ManyArgs = {
  updates: Array<Order_Items_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_OrdersArgs = {
  _inc?: InputMaybe<Orders_Inc_Input>;
  _set?: InputMaybe<Orders_Set_Input>;
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_By_PkArgs = {
  _inc?: InputMaybe<Orders_Inc_Input>;
  _set?: InputMaybe<Orders_Set_Input>;
  pk_columns: Orders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_ManyArgs = {
  updates: Array<Orders_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Product_IngredientsArgs = {
  _inc?: InputMaybe<Product_Ingredients_Inc_Input>;
  _set?: InputMaybe<Product_Ingredients_Set_Input>;
  where: Product_Ingredients_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Ingredients_By_PkArgs = {
  _inc?: InputMaybe<Product_Ingredients_Inc_Input>;
  _set?: InputMaybe<Product_Ingredients_Set_Input>;
  pk_columns: Product_Ingredients_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Ingredients_ManyArgs = {
  updates: Array<Product_Ingredients_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ProductsArgs = {
  _inc?: InputMaybe<Products_Inc_Input>;
  _set?: InputMaybe<Products_Set_Input>;
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Products_By_PkArgs = {
  _inc?: InputMaybe<Products_Inc_Input>;
  _set?: InputMaybe<Products_Set_Input>;
  pk_columns: Products_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Products_ManyArgs = {
  updates: Array<Products_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Purchase_OrdersArgs = {
  _inc?: InputMaybe<Purchase_Orders_Inc_Input>;
  _set?: InputMaybe<Purchase_Orders_Set_Input>;
  where: Purchase_Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Purchase_Orders_By_PkArgs = {
  _inc?: InputMaybe<Purchase_Orders_Inc_Input>;
  _set?: InputMaybe<Purchase_Orders_Set_Input>;
  pk_columns: Purchase_Orders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Purchase_Orders_ManyArgs = {
  updates: Array<Purchase_Orders_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SuppliersArgs = {
  _set?: InputMaybe<Suppliers_Set_Input>;
  where: Suppliers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Suppliers_By_PkArgs = {
  _set?: InputMaybe<Suppliers_Set_Input>;
  pk_columns: Suppliers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Suppliers_ManyArgs = {
  updates: Array<Suppliers_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TablesArgs = {
  _inc?: InputMaybe<Tables_Inc_Input>;
  _set?: InputMaybe<Tables_Set_Input>;
  where: Tables_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tables_By_PkArgs = {
  _inc?: InputMaybe<Tables_Inc_Input>;
  _set?: InputMaybe<Tables_Set_Input>;
  pk_columns: Tables_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tables_ManyArgs = {
  updates: Array<Tables_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "order_items" */
export type Order_Items = {
  __typename?: 'order_items';
  id: Scalars['uuid']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  order?: Maybe<Orders>;
  order_id?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  product?: Maybe<Products>;
  product_id?: Maybe<Scalars['uuid']['output']>;
  quantity: Scalars['Int']['output'];
  status?: Maybe<Scalars['String']['output']>;
  unit_price: Scalars['numeric']['output'];
};

/** aggregated selection of "order_items" */
export type Order_Items_Aggregate = {
  __typename?: 'order_items_aggregate';
  aggregate?: Maybe<Order_Items_Aggregate_Fields>;
  nodes: Array<Order_Items>;
};

export type Order_Items_Aggregate_Bool_Exp = {
  count?: InputMaybe<Order_Items_Aggregate_Bool_Exp_Count>;
};

export type Order_Items_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Order_Items_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Order_Items_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "order_items" */
export type Order_Items_Aggregate_Fields = {
  __typename?: 'order_items_aggregate_fields';
  avg?: Maybe<Order_Items_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Order_Items_Max_Fields>;
  min?: Maybe<Order_Items_Min_Fields>;
  stddev?: Maybe<Order_Items_Stddev_Fields>;
  stddev_pop?: Maybe<Order_Items_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Order_Items_Stddev_Samp_Fields>;
  sum?: Maybe<Order_Items_Sum_Fields>;
  var_pop?: Maybe<Order_Items_Var_Pop_Fields>;
  var_samp?: Maybe<Order_Items_Var_Samp_Fields>;
  variance?: Maybe<Order_Items_Variance_Fields>;
};


/** aggregate fields of "order_items" */
export type Order_Items_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Order_Items_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "order_items" */
export type Order_Items_Aggregate_Order_By = {
  avg?: InputMaybe<Order_Items_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Order_Items_Max_Order_By>;
  min?: InputMaybe<Order_Items_Min_Order_By>;
  stddev?: InputMaybe<Order_Items_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Order_Items_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Order_Items_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Order_Items_Sum_Order_By>;
  var_pop?: InputMaybe<Order_Items_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Order_Items_Var_Samp_Order_By>;
  variance?: InputMaybe<Order_Items_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "order_items" */
export type Order_Items_Arr_Rel_Insert_Input = {
  data: Array<Order_Items_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Order_Items_On_Conflict>;
};

/** aggregate avg on columns */
export type Order_Items_Avg_Fields = {
  __typename?: 'order_items_avg_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
  unit_price?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "order_items" */
export type Order_Items_Avg_Order_By = {
  quantity?: InputMaybe<Order_By>;
  unit_price?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "order_items". All fields are combined with a logical 'AND'. */
export type Order_Items_Bool_Exp = {
  _and?: InputMaybe<Array<Order_Items_Bool_Exp>>;
  _not?: InputMaybe<Order_Items_Bool_Exp>;
  _or?: InputMaybe<Array<Order_Items_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  notes?: InputMaybe<String_Comparison_Exp>;
  order?: InputMaybe<Orders_Bool_Exp>;
  order_id?: InputMaybe<Uuid_Comparison_Exp>;
  product?: InputMaybe<Products_Bool_Exp>;
  product_id?: InputMaybe<Uuid_Comparison_Exp>;
  quantity?: InputMaybe<Int_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  unit_price?: InputMaybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "order_items" */
export enum Order_Items_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrderItemsPkey = 'order_items_pkey'
}

/** input type for incrementing numeric columns in table "order_items" */
export type Order_Items_Inc_Input = {
  quantity?: InputMaybe<Scalars['Int']['input']>;
  unit_price?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "order_items" */
export type Order_Items_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Orders_Obj_Rel_Insert_Input>;
  order_id?: InputMaybe<Scalars['uuid']['input']>;
  product?: InputMaybe<Products_Obj_Rel_Insert_Input>;
  product_id?: InputMaybe<Scalars['uuid']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  unit_price?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate max on columns */
export type Order_Items_Max_Fields = {
  __typename?: 'order_items_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  order_id?: Maybe<Scalars['uuid']['output']>;
  product_id?: Maybe<Scalars['uuid']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  unit_price?: Maybe<Scalars['numeric']['output']>;
};

/** order by max() on columns of table "order_items" */
export type Order_Items_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  notes?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  unit_price?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Order_Items_Min_Fields = {
  __typename?: 'order_items_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  order_id?: Maybe<Scalars['uuid']['output']>;
  product_id?: Maybe<Scalars['uuid']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  unit_price?: Maybe<Scalars['numeric']['output']>;
};

/** order by min() on columns of table "order_items" */
export type Order_Items_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  notes?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  unit_price?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "order_items" */
export type Order_Items_Mutation_Response = {
  __typename?: 'order_items_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Order_Items>;
};

/** on_conflict condition type for table "order_items" */
export type Order_Items_On_Conflict = {
  constraint: Order_Items_Constraint;
  update_columns?: Array<Order_Items_Update_Column>;
  where?: InputMaybe<Order_Items_Bool_Exp>;
};

/** Ordering options when selecting data from "order_items". */
export type Order_Items_Order_By = {
  id?: InputMaybe<Order_By>;
  notes?: InputMaybe<Order_By>;
  order?: InputMaybe<Orders_Order_By>;
  order_id?: InputMaybe<Order_By>;
  product?: InputMaybe<Products_Order_By>;
  product_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  unit_price?: InputMaybe<Order_By>;
};

/** primary key columns input for table: order_items */
export type Order_Items_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "order_items" */
export enum Order_Items_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Notes = 'notes',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  Status = 'status',
  /** column name */
  UnitPrice = 'unit_price'
}

/** input type for updating data in table "order_items" */
export type Order_Items_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  order_id?: InputMaybe<Scalars['uuid']['input']>;
  product_id?: InputMaybe<Scalars['uuid']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  unit_price?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate stddev on columns */
export type Order_Items_Stddev_Fields = {
  __typename?: 'order_items_stddev_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
  unit_price?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "order_items" */
export type Order_Items_Stddev_Order_By = {
  quantity?: InputMaybe<Order_By>;
  unit_price?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Order_Items_Stddev_Pop_Fields = {
  __typename?: 'order_items_stddev_pop_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
  unit_price?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "order_items" */
export type Order_Items_Stddev_Pop_Order_By = {
  quantity?: InputMaybe<Order_By>;
  unit_price?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Order_Items_Stddev_Samp_Fields = {
  __typename?: 'order_items_stddev_samp_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
  unit_price?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "order_items" */
export type Order_Items_Stddev_Samp_Order_By = {
  quantity?: InputMaybe<Order_By>;
  unit_price?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "order_items" */
export type Order_Items_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Order_Items_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Order_Items_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  order_id?: InputMaybe<Scalars['uuid']['input']>;
  product_id?: InputMaybe<Scalars['uuid']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  unit_price?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate sum on columns */
export type Order_Items_Sum_Fields = {
  __typename?: 'order_items_sum_fields';
  quantity?: Maybe<Scalars['Int']['output']>;
  unit_price?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "order_items" */
export type Order_Items_Sum_Order_By = {
  quantity?: InputMaybe<Order_By>;
  unit_price?: InputMaybe<Order_By>;
};

/** update columns of table "order_items" */
export enum Order_Items_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Notes = 'notes',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  Status = 'status',
  /** column name */
  UnitPrice = 'unit_price'
}

export type Order_Items_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Order_Items_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Order_Items_Set_Input>;
  /** filter the rows which have to be updated */
  where: Order_Items_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Order_Items_Var_Pop_Fields = {
  __typename?: 'order_items_var_pop_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
  unit_price?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "order_items" */
export type Order_Items_Var_Pop_Order_By = {
  quantity?: InputMaybe<Order_By>;
  unit_price?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Order_Items_Var_Samp_Fields = {
  __typename?: 'order_items_var_samp_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
  unit_price?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "order_items" */
export type Order_Items_Var_Samp_Order_By = {
  quantity?: InputMaybe<Order_By>;
  unit_price?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Order_Items_Variance_Fields = {
  __typename?: 'order_items_variance_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
  unit_price?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "order_items" */
export type Order_Items_Variance_Order_By = {
  quantity?: InputMaybe<Order_By>;
  unit_price?: InputMaybe<Order_By>;
};

/** columns and relationships of "orders" */
export type Orders = {
  __typename?: 'orders';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  /** An array relationship */
  order_items: Array<Order_Items>;
  /** An aggregate relationship */
  order_items_aggregate: Order_Items_Aggregate;
  payment_method?: Maybe<Scalars['String']['output']>;
  payment_status?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  table?: Maybe<Tables>;
  table_id?: Maybe<Scalars['uuid']['output']>;
  total_amount?: Maybe<Scalars['numeric']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};


/** columns and relationships of "orders" */
export type OrdersOrder_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Order_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Items_Order_By>>;
  where?: InputMaybe<Order_Items_Bool_Exp>;
};


/** columns and relationships of "orders" */
export type OrdersOrder_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Items_Order_By>>;
  where?: InputMaybe<Order_Items_Bool_Exp>;
};

/** aggregated selection of "orders" */
export type Orders_Aggregate = {
  __typename?: 'orders_aggregate';
  aggregate?: Maybe<Orders_Aggregate_Fields>;
  nodes: Array<Orders>;
};

export type Orders_Aggregate_Bool_Exp = {
  count?: InputMaybe<Orders_Aggregate_Bool_Exp_Count>;
};

export type Orders_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Orders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Orders_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "orders" */
export type Orders_Aggregate_Fields = {
  __typename?: 'orders_aggregate_fields';
  avg?: Maybe<Orders_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Orders_Max_Fields>;
  min?: Maybe<Orders_Min_Fields>;
  stddev?: Maybe<Orders_Stddev_Fields>;
  stddev_pop?: Maybe<Orders_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Orders_Stddev_Samp_Fields>;
  sum?: Maybe<Orders_Sum_Fields>;
  var_pop?: Maybe<Orders_Var_Pop_Fields>;
  var_samp?: Maybe<Orders_Var_Samp_Fields>;
  variance?: Maybe<Orders_Variance_Fields>;
};


/** aggregate fields of "orders" */
export type Orders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Orders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "orders" */
export type Orders_Aggregate_Order_By = {
  avg?: InputMaybe<Orders_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Orders_Max_Order_By>;
  min?: InputMaybe<Orders_Min_Order_By>;
  stddev?: InputMaybe<Orders_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Orders_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Orders_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Orders_Sum_Order_By>;
  var_pop?: InputMaybe<Orders_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Orders_Var_Samp_Order_By>;
  variance?: InputMaybe<Orders_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "orders" */
export type Orders_Arr_Rel_Insert_Input = {
  data: Array<Orders_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};

/** aggregate avg on columns */
export type Orders_Avg_Fields = {
  __typename?: 'orders_avg_fields';
  total_amount?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "orders" */
export type Orders_Avg_Order_By = {
  total_amount?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "orders". All fields are combined with a logical 'AND'. */
export type Orders_Bool_Exp = {
  _and?: InputMaybe<Array<Orders_Bool_Exp>>;
  _not?: InputMaybe<Orders_Bool_Exp>;
  _or?: InputMaybe<Array<Orders_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  order_items?: InputMaybe<Order_Items_Bool_Exp>;
  order_items_aggregate?: InputMaybe<Order_Items_Aggregate_Bool_Exp>;
  payment_method?: InputMaybe<String_Comparison_Exp>;
  payment_status?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  table?: InputMaybe<Tables_Bool_Exp>;
  table_id?: InputMaybe<Uuid_Comparison_Exp>;
  total_amount?: InputMaybe<Numeric_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "orders" */
export enum Orders_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrdersPkey = 'orders_pkey'
}

/** input type for incrementing numeric columns in table "orders" */
export type Orders_Inc_Input = {
  total_amount?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "orders" */
export type Orders_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  order_items?: InputMaybe<Order_Items_Arr_Rel_Insert_Input>;
  payment_method?: InputMaybe<Scalars['String']['input']>;
  payment_status?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  table?: InputMaybe<Tables_Obj_Rel_Insert_Input>;
  table_id?: InputMaybe<Scalars['uuid']['input']>;
  total_amount?: InputMaybe<Scalars['numeric']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Orders_Max_Fields = {
  __typename?: 'orders_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  payment_method?: Maybe<Scalars['String']['output']>;
  payment_status?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  table_id?: Maybe<Scalars['uuid']['output']>;
  total_amount?: Maybe<Scalars['numeric']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "orders" */
export type Orders_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  payment_method?: InputMaybe<Order_By>;
  payment_status?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  table_id?: InputMaybe<Order_By>;
  total_amount?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Orders_Min_Fields = {
  __typename?: 'orders_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  payment_method?: Maybe<Scalars['String']['output']>;
  payment_status?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  table_id?: Maybe<Scalars['uuid']['output']>;
  total_amount?: Maybe<Scalars['numeric']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "orders" */
export type Orders_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  payment_method?: InputMaybe<Order_By>;
  payment_status?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  table_id?: InputMaybe<Order_By>;
  total_amount?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "orders" */
export type Orders_Mutation_Response = {
  __typename?: 'orders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Orders>;
};

/** input type for inserting object relation for remote table "orders" */
export type Orders_Obj_Rel_Insert_Input = {
  data: Orders_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};

/** on_conflict condition type for table "orders" */
export type Orders_On_Conflict = {
  constraint: Orders_Constraint;
  update_columns?: Array<Orders_Update_Column>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** Ordering options when selecting data from "orders". */
export type Orders_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_items_aggregate?: InputMaybe<Order_Items_Aggregate_Order_By>;
  payment_method?: InputMaybe<Order_By>;
  payment_status?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  table?: InputMaybe<Tables_Order_By>;
  table_id?: InputMaybe<Order_By>;
  total_amount?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: orders */
export type Orders_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "orders" */
export enum Orders_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PaymentMethod = 'payment_method',
  /** column name */
  PaymentStatus = 'payment_status',
  /** column name */
  Status = 'status',
  /** column name */
  TableId = 'table_id',
  /** column name */
  TotalAmount = 'total_amount',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "orders" */
export type Orders_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  payment_method?: InputMaybe<Scalars['String']['input']>;
  payment_status?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  table_id?: InputMaybe<Scalars['uuid']['input']>;
  total_amount?: InputMaybe<Scalars['numeric']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Orders_Stddev_Fields = {
  __typename?: 'orders_stddev_fields';
  total_amount?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "orders" */
export type Orders_Stddev_Order_By = {
  total_amount?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Orders_Stddev_Pop_Fields = {
  __typename?: 'orders_stddev_pop_fields';
  total_amount?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "orders" */
export type Orders_Stddev_Pop_Order_By = {
  total_amount?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Orders_Stddev_Samp_Fields = {
  __typename?: 'orders_stddev_samp_fields';
  total_amount?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "orders" */
export type Orders_Stddev_Samp_Order_By = {
  total_amount?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "orders" */
export type Orders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Orders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Orders_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  payment_method?: InputMaybe<Scalars['String']['input']>;
  payment_status?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  table_id?: InputMaybe<Scalars['uuid']['input']>;
  total_amount?: InputMaybe<Scalars['numeric']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Orders_Sum_Fields = {
  __typename?: 'orders_sum_fields';
  total_amount?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "orders" */
export type Orders_Sum_Order_By = {
  total_amount?: InputMaybe<Order_By>;
};

/** update columns of table "orders" */
export enum Orders_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PaymentMethod = 'payment_method',
  /** column name */
  PaymentStatus = 'payment_status',
  /** column name */
  Status = 'status',
  /** column name */
  TableId = 'table_id',
  /** column name */
  TotalAmount = 'total_amount',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Orders_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Orders_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Orders_Set_Input>;
  /** filter the rows which have to be updated */
  where: Orders_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Orders_Var_Pop_Fields = {
  __typename?: 'orders_var_pop_fields';
  total_amount?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "orders" */
export type Orders_Var_Pop_Order_By = {
  total_amount?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Orders_Var_Samp_Fields = {
  __typename?: 'orders_var_samp_fields';
  total_amount?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "orders" */
export type Orders_Var_Samp_Order_By = {
  total_amount?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Orders_Variance_Fields = {
  __typename?: 'orders_variance_fields';
  total_amount?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "orders" */
export type Orders_Variance_Order_By = {
  total_amount?: InputMaybe<Order_By>;
};

/** columns and relationships of "product_ingredients" */
export type Product_Ingredients = {
  __typename?: 'product_ingredients';
  /** An object relationship */
  ingredient: Ingredients;
  ingredient_id: Scalars['uuid']['output'];
  /** An object relationship */
  product: Products;
  product_id: Scalars['uuid']['output'];
  quantity: Scalars['numeric']['output'];
};

/** aggregated selection of "product_ingredients" */
export type Product_Ingredients_Aggregate = {
  __typename?: 'product_ingredients_aggregate';
  aggregate?: Maybe<Product_Ingredients_Aggregate_Fields>;
  nodes: Array<Product_Ingredients>;
};

export type Product_Ingredients_Aggregate_Bool_Exp = {
  count?: InputMaybe<Product_Ingredients_Aggregate_Bool_Exp_Count>;
};

export type Product_Ingredients_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Product_Ingredients_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Product_Ingredients_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "product_ingredients" */
export type Product_Ingredients_Aggregate_Fields = {
  __typename?: 'product_ingredients_aggregate_fields';
  avg?: Maybe<Product_Ingredients_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Product_Ingredients_Max_Fields>;
  min?: Maybe<Product_Ingredients_Min_Fields>;
  stddev?: Maybe<Product_Ingredients_Stddev_Fields>;
  stddev_pop?: Maybe<Product_Ingredients_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Product_Ingredients_Stddev_Samp_Fields>;
  sum?: Maybe<Product_Ingredients_Sum_Fields>;
  var_pop?: Maybe<Product_Ingredients_Var_Pop_Fields>;
  var_samp?: Maybe<Product_Ingredients_Var_Samp_Fields>;
  variance?: Maybe<Product_Ingredients_Variance_Fields>;
};


/** aggregate fields of "product_ingredients" */
export type Product_Ingredients_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Product_Ingredients_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "product_ingredients" */
export type Product_Ingredients_Aggregate_Order_By = {
  avg?: InputMaybe<Product_Ingredients_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Product_Ingredients_Max_Order_By>;
  min?: InputMaybe<Product_Ingredients_Min_Order_By>;
  stddev?: InputMaybe<Product_Ingredients_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Product_Ingredients_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Product_Ingredients_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Product_Ingredients_Sum_Order_By>;
  var_pop?: InputMaybe<Product_Ingredients_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Product_Ingredients_Var_Samp_Order_By>;
  variance?: InputMaybe<Product_Ingredients_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "product_ingredients" */
export type Product_Ingredients_Arr_Rel_Insert_Input = {
  data: Array<Product_Ingredients_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Product_Ingredients_On_Conflict>;
};

/** aggregate avg on columns */
export type Product_Ingredients_Avg_Fields = {
  __typename?: 'product_ingredients_avg_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "product_ingredients" */
export type Product_Ingredients_Avg_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "product_ingredients". All fields are combined with a logical 'AND'. */
export type Product_Ingredients_Bool_Exp = {
  _and?: InputMaybe<Array<Product_Ingredients_Bool_Exp>>;
  _not?: InputMaybe<Product_Ingredients_Bool_Exp>;
  _or?: InputMaybe<Array<Product_Ingredients_Bool_Exp>>;
  ingredient?: InputMaybe<Ingredients_Bool_Exp>;
  ingredient_id?: InputMaybe<Uuid_Comparison_Exp>;
  product?: InputMaybe<Products_Bool_Exp>;
  product_id?: InputMaybe<Uuid_Comparison_Exp>;
  quantity?: InputMaybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "product_ingredients" */
export enum Product_Ingredients_Constraint {
  /** unique or primary key constraint on columns "ingredient_id", "product_id" */
  ProductIngredientsPkey = 'product_ingredients_pkey'
}

/** input type for incrementing numeric columns in table "product_ingredients" */
export type Product_Ingredients_Inc_Input = {
  quantity?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "product_ingredients" */
export type Product_Ingredients_Insert_Input = {
  ingredient?: InputMaybe<Ingredients_Obj_Rel_Insert_Input>;
  ingredient_id?: InputMaybe<Scalars['uuid']['input']>;
  product?: InputMaybe<Products_Obj_Rel_Insert_Input>;
  product_id?: InputMaybe<Scalars['uuid']['input']>;
  quantity?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate max on columns */
export type Product_Ingredients_Max_Fields = {
  __typename?: 'product_ingredients_max_fields';
  ingredient_id?: Maybe<Scalars['uuid']['output']>;
  product_id?: Maybe<Scalars['uuid']['output']>;
  quantity?: Maybe<Scalars['numeric']['output']>;
};

/** order by max() on columns of table "product_ingredients" */
export type Product_Ingredients_Max_Order_By = {
  ingredient_id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Product_Ingredients_Min_Fields = {
  __typename?: 'product_ingredients_min_fields';
  ingredient_id?: Maybe<Scalars['uuid']['output']>;
  product_id?: Maybe<Scalars['uuid']['output']>;
  quantity?: Maybe<Scalars['numeric']['output']>;
};

/** order by min() on columns of table "product_ingredients" */
export type Product_Ingredients_Min_Order_By = {
  ingredient_id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "product_ingredients" */
export type Product_Ingredients_Mutation_Response = {
  __typename?: 'product_ingredients_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Product_Ingredients>;
};

/** on_conflict condition type for table "product_ingredients" */
export type Product_Ingredients_On_Conflict = {
  constraint: Product_Ingredients_Constraint;
  update_columns?: Array<Product_Ingredients_Update_Column>;
  where?: InputMaybe<Product_Ingredients_Bool_Exp>;
};

/** Ordering options when selecting data from "product_ingredients". */
export type Product_Ingredients_Order_By = {
  ingredient?: InputMaybe<Ingredients_Order_By>;
  ingredient_id?: InputMaybe<Order_By>;
  product?: InputMaybe<Products_Order_By>;
  product_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** primary key columns input for table: product_ingredients */
export type Product_Ingredients_Pk_Columns_Input = {
  ingredient_id: Scalars['uuid']['input'];
  product_id: Scalars['uuid']['input'];
};

/** select columns of table "product_ingredients" */
export enum Product_Ingredients_Select_Column {
  /** column name */
  IngredientId = 'ingredient_id',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  Quantity = 'quantity'
}

/** input type for updating data in table "product_ingredients" */
export type Product_Ingredients_Set_Input = {
  ingredient_id?: InputMaybe<Scalars['uuid']['input']>;
  product_id?: InputMaybe<Scalars['uuid']['input']>;
  quantity?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate stddev on columns */
export type Product_Ingredients_Stddev_Fields = {
  __typename?: 'product_ingredients_stddev_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "product_ingredients" */
export type Product_Ingredients_Stddev_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Product_Ingredients_Stddev_Pop_Fields = {
  __typename?: 'product_ingredients_stddev_pop_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "product_ingredients" */
export type Product_Ingredients_Stddev_Pop_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Product_Ingredients_Stddev_Samp_Fields = {
  __typename?: 'product_ingredients_stddev_samp_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "product_ingredients" */
export type Product_Ingredients_Stddev_Samp_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "product_ingredients" */
export type Product_Ingredients_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Product_Ingredients_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Product_Ingredients_Stream_Cursor_Value_Input = {
  ingredient_id?: InputMaybe<Scalars['uuid']['input']>;
  product_id?: InputMaybe<Scalars['uuid']['input']>;
  quantity?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate sum on columns */
export type Product_Ingredients_Sum_Fields = {
  __typename?: 'product_ingredients_sum_fields';
  quantity?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "product_ingredients" */
export type Product_Ingredients_Sum_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** update columns of table "product_ingredients" */
export enum Product_Ingredients_Update_Column {
  /** column name */
  IngredientId = 'ingredient_id',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  Quantity = 'quantity'
}

export type Product_Ingredients_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Product_Ingredients_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Product_Ingredients_Set_Input>;
  /** filter the rows which have to be updated */
  where: Product_Ingredients_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Product_Ingredients_Var_Pop_Fields = {
  __typename?: 'product_ingredients_var_pop_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "product_ingredients" */
export type Product_Ingredients_Var_Pop_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Product_Ingredients_Var_Samp_Fields = {
  __typename?: 'product_ingredients_var_samp_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "product_ingredients" */
export type Product_Ingredients_Var_Samp_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Product_Ingredients_Variance_Fields = {
  __typename?: 'product_ingredients_variance_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "product_ingredients" */
export type Product_Ingredients_Variance_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** columns and relationships of "products" */
export type Products = {
  __typename?: 'products';
  /** An object relationship */
  category?: Maybe<Categories>;
  category_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  image_url?: Maybe<Scalars['String']['output']>;
  is_available?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  /** An array relationship */
  order_items: Array<Order_Items>;
  /** An aggregate relationship */
  order_items_aggregate: Order_Items_Aggregate;
  price: Scalars['numeric']['output'];
  /** An array relationship */
  product_ingredients: Array<Product_Ingredients>;
  /** An aggregate relationship */
  product_ingredients_aggregate: Product_Ingredients_Aggregate;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};


/** columns and relationships of "products" */
export type ProductsOrder_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Order_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Items_Order_By>>;
  where?: InputMaybe<Order_Items_Bool_Exp>;
};


/** columns and relationships of "products" */
export type ProductsOrder_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Items_Order_By>>;
  where?: InputMaybe<Order_Items_Bool_Exp>;
};


/** columns and relationships of "products" */
export type ProductsProduct_IngredientsArgs = {
  distinct_on?: InputMaybe<Array<Product_Ingredients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Ingredients_Order_By>>;
  where?: InputMaybe<Product_Ingredients_Bool_Exp>;
};


/** columns and relationships of "products" */
export type ProductsProduct_Ingredients_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Ingredients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Ingredients_Order_By>>;
  where?: InputMaybe<Product_Ingredients_Bool_Exp>;
};

/** aggregated selection of "products" */
export type Products_Aggregate = {
  __typename?: 'products_aggregate';
  aggregate?: Maybe<Products_Aggregate_Fields>;
  nodes: Array<Products>;
};

export type Products_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Products_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Products_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Products_Aggregate_Bool_Exp_Count>;
};

export type Products_Aggregate_Bool_Exp_Bool_And = {
  arguments: Products_Select_Column_Products_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Products_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Products_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Products_Select_Column_Products_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Products_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Products_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Products_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Products_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "products" */
export type Products_Aggregate_Fields = {
  __typename?: 'products_aggregate_fields';
  avg?: Maybe<Products_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Products_Max_Fields>;
  min?: Maybe<Products_Min_Fields>;
  stddev?: Maybe<Products_Stddev_Fields>;
  stddev_pop?: Maybe<Products_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Products_Stddev_Samp_Fields>;
  sum?: Maybe<Products_Sum_Fields>;
  var_pop?: Maybe<Products_Var_Pop_Fields>;
  var_samp?: Maybe<Products_Var_Samp_Fields>;
  variance?: Maybe<Products_Variance_Fields>;
};


/** aggregate fields of "products" */
export type Products_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Products_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "products" */
export type Products_Aggregate_Order_By = {
  avg?: InputMaybe<Products_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Products_Max_Order_By>;
  min?: InputMaybe<Products_Min_Order_By>;
  stddev?: InputMaybe<Products_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Products_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Products_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Products_Sum_Order_By>;
  var_pop?: InputMaybe<Products_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Products_Var_Samp_Order_By>;
  variance?: InputMaybe<Products_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "products" */
export type Products_Arr_Rel_Insert_Input = {
  data: Array<Products_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Products_On_Conflict>;
};

/** aggregate avg on columns */
export type Products_Avg_Fields = {
  __typename?: 'products_avg_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "products" */
export type Products_Avg_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "products". All fields are combined with a logical 'AND'. */
export type Products_Bool_Exp = {
  _and?: InputMaybe<Array<Products_Bool_Exp>>;
  _not?: InputMaybe<Products_Bool_Exp>;
  _or?: InputMaybe<Array<Products_Bool_Exp>>;
  category?: InputMaybe<Categories_Bool_Exp>;
  category_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image_url?: InputMaybe<String_Comparison_Exp>;
  is_available?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  order_items?: InputMaybe<Order_Items_Bool_Exp>;
  order_items_aggregate?: InputMaybe<Order_Items_Aggregate_Bool_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  product_ingredients?: InputMaybe<Product_Ingredients_Bool_Exp>;
  product_ingredients_aggregate?: InputMaybe<Product_Ingredients_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "products" */
export enum Products_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProductsPkey = 'products_pkey'
}

/** input type for incrementing numeric columns in table "products" */
export type Products_Inc_Input = {
  price?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "products" */
export type Products_Insert_Input = {
  category?: InputMaybe<Categories_Obj_Rel_Insert_Input>;
  category_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
  is_available?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  order_items?: InputMaybe<Order_Items_Arr_Rel_Insert_Input>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  product_ingredients?: InputMaybe<Product_Ingredients_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Products_Max_Fields = {
  __typename?: 'products_max_fields';
  category_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image_url?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "products" */
export type Products_Max_Order_By = {
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Products_Min_Fields = {
  __typename?: 'products_min_fields';
  category_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image_url?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "products" */
export type Products_Min_Order_By = {
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "products" */
export type Products_Mutation_Response = {
  __typename?: 'products_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Products>;
};

/** input type for inserting object relation for remote table "products" */
export type Products_Obj_Rel_Insert_Input = {
  data: Products_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Products_On_Conflict>;
};

/** on_conflict condition type for table "products" */
export type Products_On_Conflict = {
  constraint: Products_Constraint;
  update_columns?: Array<Products_Update_Column>;
  where?: InputMaybe<Products_Bool_Exp>;
};

/** Ordering options when selecting data from "products". */
export type Products_Order_By = {
  category?: InputMaybe<Categories_Order_By>;
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
  is_available?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  order_items_aggregate?: InputMaybe<Order_Items_Aggregate_Order_By>;
  price?: InputMaybe<Order_By>;
  product_ingredients_aggregate?: InputMaybe<Product_Ingredients_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: products */
export type Products_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "products" */
export enum Products_Select_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  IsAvailable = 'is_available',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** select "products_aggregate_bool_exp_bool_and_arguments_columns" columns of table "products" */
export enum Products_Select_Column_Products_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsAvailable = 'is_available'
}

/** select "products_aggregate_bool_exp_bool_or_arguments_columns" columns of table "products" */
export enum Products_Select_Column_Products_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsAvailable = 'is_available'
}

/** input type for updating data in table "products" */
export type Products_Set_Input = {
  category_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
  is_available?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Products_Stddev_Fields = {
  __typename?: 'products_stddev_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "products" */
export type Products_Stddev_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Products_Stddev_Pop_Fields = {
  __typename?: 'products_stddev_pop_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "products" */
export type Products_Stddev_Pop_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Products_Stddev_Samp_Fields = {
  __typename?: 'products_stddev_samp_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "products" */
export type Products_Stddev_Samp_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "products" */
export type Products_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Products_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Products_Stream_Cursor_Value_Input = {
  category_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
  is_available?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Products_Sum_Fields = {
  __typename?: 'products_sum_fields';
  price?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "products" */
export type Products_Sum_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** update columns of table "products" */
export enum Products_Update_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  IsAvailable = 'is_available',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Products_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Products_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Products_Set_Input>;
  /** filter the rows which have to be updated */
  where: Products_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Products_Var_Pop_Fields = {
  __typename?: 'products_var_pop_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "products" */
export type Products_Var_Pop_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Products_Var_Samp_Fields = {
  __typename?: 'products_var_samp_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "products" */
export type Products_Var_Samp_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Products_Variance_Fields = {
  __typename?: 'products_variance_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "products" */
export type Products_Variance_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** columns and relationships of "purchase_orders" */
export type Purchase_Orders = {
  __typename?: 'purchase_orders';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  status?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  supplier?: Maybe<Suppliers>;
  supplier_id?: Maybe<Scalars['uuid']['output']>;
  total_amount?: Maybe<Scalars['numeric']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregated selection of "purchase_orders" */
export type Purchase_Orders_Aggregate = {
  __typename?: 'purchase_orders_aggregate';
  aggregate?: Maybe<Purchase_Orders_Aggregate_Fields>;
  nodes: Array<Purchase_Orders>;
};

export type Purchase_Orders_Aggregate_Bool_Exp = {
  count?: InputMaybe<Purchase_Orders_Aggregate_Bool_Exp_Count>;
};

export type Purchase_Orders_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Purchase_Orders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Purchase_Orders_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "purchase_orders" */
export type Purchase_Orders_Aggregate_Fields = {
  __typename?: 'purchase_orders_aggregate_fields';
  avg?: Maybe<Purchase_Orders_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Purchase_Orders_Max_Fields>;
  min?: Maybe<Purchase_Orders_Min_Fields>;
  stddev?: Maybe<Purchase_Orders_Stddev_Fields>;
  stddev_pop?: Maybe<Purchase_Orders_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Purchase_Orders_Stddev_Samp_Fields>;
  sum?: Maybe<Purchase_Orders_Sum_Fields>;
  var_pop?: Maybe<Purchase_Orders_Var_Pop_Fields>;
  var_samp?: Maybe<Purchase_Orders_Var_Samp_Fields>;
  variance?: Maybe<Purchase_Orders_Variance_Fields>;
};


/** aggregate fields of "purchase_orders" */
export type Purchase_Orders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Purchase_Orders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "purchase_orders" */
export type Purchase_Orders_Aggregate_Order_By = {
  avg?: InputMaybe<Purchase_Orders_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Purchase_Orders_Max_Order_By>;
  min?: InputMaybe<Purchase_Orders_Min_Order_By>;
  stddev?: InputMaybe<Purchase_Orders_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Purchase_Orders_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Purchase_Orders_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Purchase_Orders_Sum_Order_By>;
  var_pop?: InputMaybe<Purchase_Orders_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Purchase_Orders_Var_Samp_Order_By>;
  variance?: InputMaybe<Purchase_Orders_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "purchase_orders" */
export type Purchase_Orders_Arr_Rel_Insert_Input = {
  data: Array<Purchase_Orders_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Purchase_Orders_On_Conflict>;
};

/** aggregate avg on columns */
export type Purchase_Orders_Avg_Fields = {
  __typename?: 'purchase_orders_avg_fields';
  total_amount?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "purchase_orders" */
export type Purchase_Orders_Avg_Order_By = {
  total_amount?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "purchase_orders". All fields are combined with a logical 'AND'. */
export type Purchase_Orders_Bool_Exp = {
  _and?: InputMaybe<Array<Purchase_Orders_Bool_Exp>>;
  _not?: InputMaybe<Purchase_Orders_Bool_Exp>;
  _or?: InputMaybe<Array<Purchase_Orders_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  supplier?: InputMaybe<Suppliers_Bool_Exp>;
  supplier_id?: InputMaybe<Uuid_Comparison_Exp>;
  total_amount?: InputMaybe<Numeric_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "purchase_orders" */
export enum Purchase_Orders_Constraint {
  /** unique or primary key constraint on columns "id" */
  PurchaseOrdersPkey = 'purchase_orders_pkey'
}

/** input type for incrementing numeric columns in table "purchase_orders" */
export type Purchase_Orders_Inc_Input = {
  total_amount?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "purchase_orders" */
export type Purchase_Orders_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  supplier?: InputMaybe<Suppliers_Obj_Rel_Insert_Input>;
  supplier_id?: InputMaybe<Scalars['uuid']['input']>;
  total_amount?: InputMaybe<Scalars['numeric']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Purchase_Orders_Max_Fields = {
  __typename?: 'purchase_orders_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  supplier_id?: Maybe<Scalars['uuid']['output']>;
  total_amount?: Maybe<Scalars['numeric']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "purchase_orders" */
export type Purchase_Orders_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  supplier_id?: InputMaybe<Order_By>;
  total_amount?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Purchase_Orders_Min_Fields = {
  __typename?: 'purchase_orders_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  supplier_id?: Maybe<Scalars['uuid']['output']>;
  total_amount?: Maybe<Scalars['numeric']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "purchase_orders" */
export type Purchase_Orders_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  supplier_id?: InputMaybe<Order_By>;
  total_amount?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "purchase_orders" */
export type Purchase_Orders_Mutation_Response = {
  __typename?: 'purchase_orders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Purchase_Orders>;
};

/** on_conflict condition type for table "purchase_orders" */
export type Purchase_Orders_On_Conflict = {
  constraint: Purchase_Orders_Constraint;
  update_columns?: Array<Purchase_Orders_Update_Column>;
  where?: InputMaybe<Purchase_Orders_Bool_Exp>;
};

/** Ordering options when selecting data from "purchase_orders". */
export type Purchase_Orders_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  supplier?: InputMaybe<Suppliers_Order_By>;
  supplier_id?: InputMaybe<Order_By>;
  total_amount?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: purchase_orders */
export type Purchase_Orders_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "purchase_orders" */
export enum Purchase_Orders_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  SupplierId = 'supplier_id',
  /** column name */
  TotalAmount = 'total_amount',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "purchase_orders" */
export type Purchase_Orders_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  supplier_id?: InputMaybe<Scalars['uuid']['input']>;
  total_amount?: InputMaybe<Scalars['numeric']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Purchase_Orders_Stddev_Fields = {
  __typename?: 'purchase_orders_stddev_fields';
  total_amount?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "purchase_orders" */
export type Purchase_Orders_Stddev_Order_By = {
  total_amount?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Purchase_Orders_Stddev_Pop_Fields = {
  __typename?: 'purchase_orders_stddev_pop_fields';
  total_amount?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "purchase_orders" */
export type Purchase_Orders_Stddev_Pop_Order_By = {
  total_amount?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Purchase_Orders_Stddev_Samp_Fields = {
  __typename?: 'purchase_orders_stddev_samp_fields';
  total_amount?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "purchase_orders" */
export type Purchase_Orders_Stddev_Samp_Order_By = {
  total_amount?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "purchase_orders" */
export type Purchase_Orders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Purchase_Orders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Purchase_Orders_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  supplier_id?: InputMaybe<Scalars['uuid']['input']>;
  total_amount?: InputMaybe<Scalars['numeric']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Purchase_Orders_Sum_Fields = {
  __typename?: 'purchase_orders_sum_fields';
  total_amount?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "purchase_orders" */
export type Purchase_Orders_Sum_Order_By = {
  total_amount?: InputMaybe<Order_By>;
};

/** update columns of table "purchase_orders" */
export enum Purchase_Orders_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  SupplierId = 'supplier_id',
  /** column name */
  TotalAmount = 'total_amount',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Purchase_Orders_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Purchase_Orders_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Purchase_Orders_Set_Input>;
  /** filter the rows which have to be updated */
  where: Purchase_Orders_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Purchase_Orders_Var_Pop_Fields = {
  __typename?: 'purchase_orders_var_pop_fields';
  total_amount?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "purchase_orders" */
export type Purchase_Orders_Var_Pop_Order_By = {
  total_amount?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Purchase_Orders_Var_Samp_Fields = {
  __typename?: 'purchase_orders_var_samp_fields';
  total_amount?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "purchase_orders" */
export type Purchase_Orders_Var_Samp_Order_By = {
  total_amount?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Purchase_Orders_Variance_Fields = {
  __typename?: 'purchase_orders_variance_fields';
  total_amount?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "purchase_orders" */
export type Purchase_Orders_Variance_Order_By = {
  total_amount?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table: "customer_points" */
  customer_points: Array<Customer_Points>;
  /** fetch aggregated fields from the table: "customer_points" */
  customer_points_aggregate: Customer_Points_Aggregate;
  /** fetch data from the table: "customer_points" using primary key columns */
  customer_points_by_pk?: Maybe<Customer_Points>;
  /** fetch data from the table: "ingredients" */
  ingredients: Array<Ingredients>;
  /** fetch aggregated fields from the table: "ingredients" */
  ingredients_aggregate: Ingredients_Aggregate;
  /** fetch data from the table: "ingredients" using primary key columns */
  ingredients_by_pk?: Maybe<Ingredients>;
  /** An array relationship */
  order_items: Array<Order_Items>;
  /** An aggregate relationship */
  order_items_aggregate: Order_Items_Aggregate;
  /** fetch data from the table: "order_items" using primary key columns */
  order_items_by_pk?: Maybe<Order_Items>;
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** An array relationship */
  product_ingredients: Array<Product_Ingredients>;
  /** An aggregate relationship */
  product_ingredients_aggregate: Product_Ingredients_Aggregate;
  /** fetch data from the table: "product_ingredients" using primary key columns */
  product_ingredients_by_pk?: Maybe<Product_Ingredients>;
  /** An array relationship */
  products: Array<Products>;
  /** An aggregate relationship */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** An array relationship */
  purchase_orders: Array<Purchase_Orders>;
  /** An aggregate relationship */
  purchase_orders_aggregate: Purchase_Orders_Aggregate;
  /** fetch data from the table: "purchase_orders" using primary key columns */
  purchase_orders_by_pk?: Maybe<Purchase_Orders>;
  /** fetch data from the table: "suppliers" */
  suppliers: Array<Suppliers>;
  /** fetch aggregated fields from the table: "suppliers" */
  suppliers_aggregate: Suppliers_Aggregate;
  /** fetch data from the table: "suppliers" using primary key columns */
  suppliers_by_pk?: Maybe<Suppliers>;
  /** fetch data from the table: "tables" */
  tables: Array<Tables>;
  /** fetch aggregated fields from the table: "tables" */
  tables_aggregate: Tables_Aggregate;
  /** fetch data from the table: "tables" using primary key columns */
  tables_by_pk?: Maybe<Tables>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootCustomer_PointsArgs = {
  distinct_on?: InputMaybe<Array<Customer_Points_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Customer_Points_Order_By>>;
  where?: InputMaybe<Customer_Points_Bool_Exp>;
};


export type Query_RootCustomer_Points_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customer_Points_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Customer_Points_Order_By>>;
  where?: InputMaybe<Customer_Points_Bool_Exp>;
};


export type Query_RootCustomer_Points_By_PkArgs = {
  user_id: Scalars['uuid']['input'];
};


export type Query_RootIngredientsArgs = {
  distinct_on?: InputMaybe<Array<Ingredients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ingredients_Order_By>>;
  where?: InputMaybe<Ingredients_Bool_Exp>;
};


export type Query_RootIngredients_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ingredients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ingredients_Order_By>>;
  where?: InputMaybe<Ingredients_Bool_Exp>;
};


export type Query_RootIngredients_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOrder_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Order_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Items_Order_By>>;
  where?: InputMaybe<Order_Items_Bool_Exp>;
};


export type Query_RootOrder_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Items_Order_By>>;
  where?: InputMaybe<Order_Items_Bool_Exp>;
};


export type Query_RootOrder_Items_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Query_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Query_RootOrders_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootProduct_IngredientsArgs = {
  distinct_on?: InputMaybe<Array<Product_Ingredients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Ingredients_Order_By>>;
  where?: InputMaybe<Product_Ingredients_Bool_Exp>;
};


export type Query_RootProduct_Ingredients_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Ingredients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Ingredients_Order_By>>;
  where?: InputMaybe<Product_Ingredients_Bool_Exp>;
};


export type Query_RootProduct_Ingredients_By_PkArgs = {
  ingredient_id: Scalars['uuid']['input'];
  product_id: Scalars['uuid']['input'];
};


export type Query_RootProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Query_RootProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Query_RootProducts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPurchase_OrdersArgs = {
  distinct_on?: InputMaybe<Array<Purchase_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Purchase_Orders_Order_By>>;
  where?: InputMaybe<Purchase_Orders_Bool_Exp>;
};


export type Query_RootPurchase_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Purchase_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Purchase_Orders_Order_By>>;
  where?: InputMaybe<Purchase_Orders_Bool_Exp>;
};


export type Query_RootPurchase_Orders_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootSuppliersArgs = {
  distinct_on?: InputMaybe<Array<Suppliers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Suppliers_Order_By>>;
  where?: InputMaybe<Suppliers_Bool_Exp>;
};


export type Query_RootSuppliers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Suppliers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Suppliers_Order_By>>;
  where?: InputMaybe<Suppliers_Bool_Exp>;
};


export type Query_RootSuppliers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootTablesArgs = {
  distinct_on?: InputMaybe<Array<Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tables_Order_By>>;
  where?: InputMaybe<Tables_Bool_Exp>;
};


export type Query_RootTables_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tables_Order_By>>;
  where?: InputMaybe<Tables_Bool_Exp>;
};


export type Query_RootTables_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table in a streaming manner: "categories" */
  categories_stream: Array<Categories>;
  /** fetch data from the table: "customer_points" */
  customer_points: Array<Customer_Points>;
  /** fetch aggregated fields from the table: "customer_points" */
  customer_points_aggregate: Customer_Points_Aggregate;
  /** fetch data from the table: "customer_points" using primary key columns */
  customer_points_by_pk?: Maybe<Customer_Points>;
  /** fetch data from the table in a streaming manner: "customer_points" */
  customer_points_stream: Array<Customer_Points>;
  /** fetch data from the table: "ingredients" */
  ingredients: Array<Ingredients>;
  /** fetch aggregated fields from the table: "ingredients" */
  ingredients_aggregate: Ingredients_Aggregate;
  /** fetch data from the table: "ingredients" using primary key columns */
  ingredients_by_pk?: Maybe<Ingredients>;
  /** fetch data from the table in a streaming manner: "ingredients" */
  ingredients_stream: Array<Ingredients>;
  /** An array relationship */
  order_items: Array<Order_Items>;
  /** An aggregate relationship */
  order_items_aggregate: Order_Items_Aggregate;
  /** fetch data from the table: "order_items" using primary key columns */
  order_items_by_pk?: Maybe<Order_Items>;
  /** fetch data from the table in a streaming manner: "order_items" */
  order_items_stream: Array<Order_Items>;
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table in a streaming manner: "orders" */
  orders_stream: Array<Orders>;
  /** An array relationship */
  product_ingredients: Array<Product_Ingredients>;
  /** An aggregate relationship */
  product_ingredients_aggregate: Product_Ingredients_Aggregate;
  /** fetch data from the table: "product_ingredients" using primary key columns */
  product_ingredients_by_pk?: Maybe<Product_Ingredients>;
  /** fetch data from the table in a streaming manner: "product_ingredients" */
  product_ingredients_stream: Array<Product_Ingredients>;
  /** An array relationship */
  products: Array<Products>;
  /** An aggregate relationship */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** fetch data from the table in a streaming manner: "products" */
  products_stream: Array<Products>;
  /** An array relationship */
  purchase_orders: Array<Purchase_Orders>;
  /** An aggregate relationship */
  purchase_orders_aggregate: Purchase_Orders_Aggregate;
  /** fetch data from the table: "purchase_orders" using primary key columns */
  purchase_orders_by_pk?: Maybe<Purchase_Orders>;
  /** fetch data from the table in a streaming manner: "purchase_orders" */
  purchase_orders_stream: Array<Purchase_Orders>;
  /** fetch data from the table: "suppliers" */
  suppliers: Array<Suppliers>;
  /** fetch aggregated fields from the table: "suppliers" */
  suppliers_aggregate: Suppliers_Aggregate;
  /** fetch data from the table: "suppliers" using primary key columns */
  suppliers_by_pk?: Maybe<Suppliers>;
  /** fetch data from the table in a streaming manner: "suppliers" */
  suppliers_stream: Array<Suppliers>;
  /** fetch data from the table: "tables" */
  tables: Array<Tables>;
  /** fetch aggregated fields from the table: "tables" */
  tables_aggregate: Tables_Aggregate;
  /** fetch data from the table: "tables" using primary key columns */
  tables_by_pk?: Maybe<Tables>;
  /** fetch data from the table in a streaming manner: "tables" */
  tables_stream: Array<Tables>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};


export type Subscription_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootCategories_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Categories_Stream_Cursor_Input>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootCustomer_PointsArgs = {
  distinct_on?: InputMaybe<Array<Customer_Points_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Customer_Points_Order_By>>;
  where?: InputMaybe<Customer_Points_Bool_Exp>;
};


export type Subscription_RootCustomer_Points_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customer_Points_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Customer_Points_Order_By>>;
  where?: InputMaybe<Customer_Points_Bool_Exp>;
};


export type Subscription_RootCustomer_Points_By_PkArgs = {
  user_id: Scalars['uuid']['input'];
};


export type Subscription_RootCustomer_Points_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Customer_Points_Stream_Cursor_Input>>;
  where?: InputMaybe<Customer_Points_Bool_Exp>;
};


export type Subscription_RootIngredientsArgs = {
  distinct_on?: InputMaybe<Array<Ingredients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ingredients_Order_By>>;
  where?: InputMaybe<Ingredients_Bool_Exp>;
};


export type Subscription_RootIngredients_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ingredients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ingredients_Order_By>>;
  where?: InputMaybe<Ingredients_Bool_Exp>;
};


export type Subscription_RootIngredients_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootIngredients_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Ingredients_Stream_Cursor_Input>>;
  where?: InputMaybe<Ingredients_Bool_Exp>;
};


export type Subscription_RootOrder_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Order_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Items_Order_By>>;
  where?: InputMaybe<Order_Items_Bool_Exp>;
};


export type Subscription_RootOrder_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Items_Order_By>>;
  where?: InputMaybe<Order_Items_Bool_Exp>;
};


export type Subscription_RootOrder_Items_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOrder_Items_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Order_Items_Stream_Cursor_Input>>;
  where?: InputMaybe<Order_Items_Bool_Exp>;
};


export type Subscription_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrders_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOrders_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Orders_Stream_Cursor_Input>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootProduct_IngredientsArgs = {
  distinct_on?: InputMaybe<Array<Product_Ingredients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Ingredients_Order_By>>;
  where?: InputMaybe<Product_Ingredients_Bool_Exp>;
};


export type Subscription_RootProduct_Ingredients_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Ingredients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Ingredients_Order_By>>;
  where?: InputMaybe<Product_Ingredients_Bool_Exp>;
};


export type Subscription_RootProduct_Ingredients_By_PkArgs = {
  ingredient_id: Scalars['uuid']['input'];
  product_id: Scalars['uuid']['input'];
};


export type Subscription_RootProduct_Ingredients_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Product_Ingredients_Stream_Cursor_Input>>;
  where?: InputMaybe<Product_Ingredients_Bool_Exp>;
};


export type Subscription_RootProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootProducts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootProducts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Products_Stream_Cursor_Input>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootPurchase_OrdersArgs = {
  distinct_on?: InputMaybe<Array<Purchase_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Purchase_Orders_Order_By>>;
  where?: InputMaybe<Purchase_Orders_Bool_Exp>;
};


export type Subscription_RootPurchase_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Purchase_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Purchase_Orders_Order_By>>;
  where?: InputMaybe<Purchase_Orders_Bool_Exp>;
};


export type Subscription_RootPurchase_Orders_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPurchase_Orders_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Purchase_Orders_Stream_Cursor_Input>>;
  where?: InputMaybe<Purchase_Orders_Bool_Exp>;
};


export type Subscription_RootSuppliersArgs = {
  distinct_on?: InputMaybe<Array<Suppliers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Suppliers_Order_By>>;
  where?: InputMaybe<Suppliers_Bool_Exp>;
};


export type Subscription_RootSuppliers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Suppliers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Suppliers_Order_By>>;
  where?: InputMaybe<Suppliers_Bool_Exp>;
};


export type Subscription_RootSuppliers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootSuppliers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Suppliers_Stream_Cursor_Input>>;
  where?: InputMaybe<Suppliers_Bool_Exp>;
};


export type Subscription_RootTablesArgs = {
  distinct_on?: InputMaybe<Array<Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tables_Order_By>>;
  where?: InputMaybe<Tables_Bool_Exp>;
};


export type Subscription_RootTables_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tables_Order_By>>;
  where?: InputMaybe<Tables_Bool_Exp>;
};


export type Subscription_RootTables_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootTables_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Tables_Stream_Cursor_Input>>;
  where?: InputMaybe<Tables_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** columns and relationships of "suppliers" */
export type Suppliers = {
  __typename?: 'suppliers';
  address?: Maybe<Scalars['String']['output']>;
  contact_person?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  purchase_orders: Array<Purchase_Orders>;
  /** An aggregate relationship */
  purchase_orders_aggregate: Purchase_Orders_Aggregate;
};


/** columns and relationships of "suppliers" */
export type SuppliersPurchase_OrdersArgs = {
  distinct_on?: InputMaybe<Array<Purchase_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Purchase_Orders_Order_By>>;
  where?: InputMaybe<Purchase_Orders_Bool_Exp>;
};


/** columns and relationships of "suppliers" */
export type SuppliersPurchase_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Purchase_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Purchase_Orders_Order_By>>;
  where?: InputMaybe<Purchase_Orders_Bool_Exp>;
};

/** aggregated selection of "suppliers" */
export type Suppliers_Aggregate = {
  __typename?: 'suppliers_aggregate';
  aggregate?: Maybe<Suppliers_Aggregate_Fields>;
  nodes: Array<Suppliers>;
};

/** aggregate fields of "suppliers" */
export type Suppliers_Aggregate_Fields = {
  __typename?: 'suppliers_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Suppliers_Max_Fields>;
  min?: Maybe<Suppliers_Min_Fields>;
};


/** aggregate fields of "suppliers" */
export type Suppliers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Suppliers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "suppliers". All fields are combined with a logical 'AND'. */
export type Suppliers_Bool_Exp = {
  _and?: InputMaybe<Array<Suppliers_Bool_Exp>>;
  _not?: InputMaybe<Suppliers_Bool_Exp>;
  _or?: InputMaybe<Array<Suppliers_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  contact_person?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  purchase_orders?: InputMaybe<Purchase_Orders_Bool_Exp>;
  purchase_orders_aggregate?: InputMaybe<Purchase_Orders_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "suppliers" */
export enum Suppliers_Constraint {
  /** unique or primary key constraint on columns "id" */
  SuppliersPkey = 'suppliers_pkey'
}

/** input type for inserting data into table "suppliers" */
export type Suppliers_Insert_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  contact_person?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  purchase_orders?: InputMaybe<Purchase_Orders_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Suppliers_Max_Fields = {
  __typename?: 'suppliers_max_fields';
  address?: Maybe<Scalars['String']['output']>;
  contact_person?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Suppliers_Min_Fields = {
  __typename?: 'suppliers_min_fields';
  address?: Maybe<Scalars['String']['output']>;
  contact_person?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "suppliers" */
export type Suppliers_Mutation_Response = {
  __typename?: 'suppliers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Suppliers>;
};

/** input type for inserting object relation for remote table "suppliers" */
export type Suppliers_Obj_Rel_Insert_Input = {
  data: Suppliers_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Suppliers_On_Conflict>;
};

/** on_conflict condition type for table "suppliers" */
export type Suppliers_On_Conflict = {
  constraint: Suppliers_Constraint;
  update_columns?: Array<Suppliers_Update_Column>;
  where?: InputMaybe<Suppliers_Bool_Exp>;
};

/** Ordering options when selecting data from "suppliers". */
export type Suppliers_Order_By = {
  address?: InputMaybe<Order_By>;
  contact_person?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  purchase_orders_aggregate?: InputMaybe<Purchase_Orders_Aggregate_Order_By>;
};

/** primary key columns input for table: suppliers */
export type Suppliers_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "suppliers" */
export enum Suppliers_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  ContactPerson = 'contact_person',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Phone = 'phone'
}

/** input type for updating data in table "suppliers" */
export type Suppliers_Set_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  contact_person?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "suppliers" */
export type Suppliers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Suppliers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Suppliers_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  contact_person?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "suppliers" */
export enum Suppliers_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  ContactPerson = 'contact_person',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Phone = 'phone'
}

export type Suppliers_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Suppliers_Set_Input>;
  /** filter the rows which have to be updated */
  where: Suppliers_Bool_Exp;
};

/** columns and relationships of "tables" */
export type Tables = {
  __typename?: 'tables';
  capacity: Scalars['Int']['output'];
  id: Scalars['uuid']['output'];
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  qr_code?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  table_number: Scalars['Int']['output'];
};


/** columns and relationships of "tables" */
export type TablesOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


/** columns and relationships of "tables" */
export type TablesOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** aggregated selection of "tables" */
export type Tables_Aggregate = {
  __typename?: 'tables_aggregate';
  aggregate?: Maybe<Tables_Aggregate_Fields>;
  nodes: Array<Tables>;
};

/** aggregate fields of "tables" */
export type Tables_Aggregate_Fields = {
  __typename?: 'tables_aggregate_fields';
  avg?: Maybe<Tables_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Tables_Max_Fields>;
  min?: Maybe<Tables_Min_Fields>;
  stddev?: Maybe<Tables_Stddev_Fields>;
  stddev_pop?: Maybe<Tables_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Tables_Stddev_Samp_Fields>;
  sum?: Maybe<Tables_Sum_Fields>;
  var_pop?: Maybe<Tables_Var_Pop_Fields>;
  var_samp?: Maybe<Tables_Var_Samp_Fields>;
  variance?: Maybe<Tables_Variance_Fields>;
};


/** aggregate fields of "tables" */
export type Tables_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tables_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Tables_Avg_Fields = {
  __typename?: 'tables_avg_fields';
  capacity?: Maybe<Scalars['Float']['output']>;
  table_number?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "tables". All fields are combined with a logical 'AND'. */
export type Tables_Bool_Exp = {
  _and?: InputMaybe<Array<Tables_Bool_Exp>>;
  _not?: InputMaybe<Tables_Bool_Exp>;
  _or?: InputMaybe<Array<Tables_Bool_Exp>>;
  capacity?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  orders?: InputMaybe<Orders_Bool_Exp>;
  orders_aggregate?: InputMaybe<Orders_Aggregate_Bool_Exp>;
  qr_code?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  table_number?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "tables" */
export enum Tables_Constraint {
  /** unique or primary key constraint on columns "id" */
  TablesPkey = 'tables_pkey',
  /** unique or primary key constraint on columns "table_number" */
  TablesTableNumberKey = 'tables_table_number_key'
}

/** input type for incrementing numeric columns in table "tables" */
export type Tables_Inc_Input = {
  capacity?: InputMaybe<Scalars['Int']['input']>;
  table_number?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "tables" */
export type Tables_Insert_Input = {
  capacity?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  orders?: InputMaybe<Orders_Arr_Rel_Insert_Input>;
  qr_code?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  table_number?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Tables_Max_Fields = {
  __typename?: 'tables_max_fields';
  capacity?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  qr_code?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  table_number?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Tables_Min_Fields = {
  __typename?: 'tables_min_fields';
  capacity?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  qr_code?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  table_number?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "tables" */
export type Tables_Mutation_Response = {
  __typename?: 'tables_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Tables>;
};

/** input type for inserting object relation for remote table "tables" */
export type Tables_Obj_Rel_Insert_Input = {
  data: Tables_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Tables_On_Conflict>;
};

/** on_conflict condition type for table "tables" */
export type Tables_On_Conflict = {
  constraint: Tables_Constraint;
  update_columns?: Array<Tables_Update_Column>;
  where?: InputMaybe<Tables_Bool_Exp>;
};

/** Ordering options when selecting data from "tables". */
export type Tables_Order_By = {
  capacity?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  orders_aggregate?: InputMaybe<Orders_Aggregate_Order_By>;
  qr_code?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  table_number?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tables */
export type Tables_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "tables" */
export enum Tables_Select_Column {
  /** column name */
  Capacity = 'capacity',
  /** column name */
  Id = 'id',
  /** column name */
  QrCode = 'qr_code',
  /** column name */
  Status = 'status',
  /** column name */
  TableNumber = 'table_number'
}

/** input type for updating data in table "tables" */
export type Tables_Set_Input = {
  capacity?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  qr_code?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  table_number?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Tables_Stddev_Fields = {
  __typename?: 'tables_stddev_fields';
  capacity?: Maybe<Scalars['Float']['output']>;
  table_number?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Tables_Stddev_Pop_Fields = {
  __typename?: 'tables_stddev_pop_fields';
  capacity?: Maybe<Scalars['Float']['output']>;
  table_number?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Tables_Stddev_Samp_Fields = {
  __typename?: 'tables_stddev_samp_fields';
  capacity?: Maybe<Scalars['Float']['output']>;
  table_number?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "tables" */
export type Tables_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tables_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tables_Stream_Cursor_Value_Input = {
  capacity?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  qr_code?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  table_number?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Tables_Sum_Fields = {
  __typename?: 'tables_sum_fields';
  capacity?: Maybe<Scalars['Int']['output']>;
  table_number?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "tables" */
export enum Tables_Update_Column {
  /** column name */
  Capacity = 'capacity',
  /** column name */
  Id = 'id',
  /** column name */
  QrCode = 'qr_code',
  /** column name */
  Status = 'status',
  /** column name */
  TableNumber = 'table_number'
}

export type Tables_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Tables_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tables_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tables_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Tables_Var_Pop_Fields = {
  __typename?: 'tables_var_pop_fields';
  capacity?: Maybe<Scalars['Float']['output']>;
  table_number?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Tables_Var_Samp_Fields = {
  __typename?: 'tables_var_samp_fields';
  capacity?: Maybe<Scalars['Float']['output']>;
  table_number?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Tables_Variance_Fields = {
  __typename?: 'tables_variance_fields';
  capacity?: Maybe<Scalars['Float']['output']>;
  table_number?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  customer_point?: Maybe<Customer_Points>;
  email?: Maybe<Scalars['String']['output']>;
  full_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  password_hash?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  role: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};


/** columns and relationships of "users" */
export type UsersOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  customer_point?: InputMaybe<Customer_Points_Bool_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  full_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  orders?: InputMaybe<Orders_Bool_Exp>;
  orders_aggregate?: InputMaybe<Orders_Aggregate_Bool_Exp>;
  password_hash?: InputMaybe<String_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "phone" */
  UsersPhoneKey = 'users_phone_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  customer_point?: InputMaybe<Customer_Points_Obj_Rel_Insert_Input>;
  email?: InputMaybe<Scalars['String']['input']>;
  full_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  orders?: InputMaybe<Orders_Arr_Rel_Insert_Input>;
  password_hash?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  full_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  password_hash?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  full_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  password_hash?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  created_at?: InputMaybe<Order_By>;
  customer_point?: InputMaybe<Customer_Points_Order_By>;
  email?: InputMaybe<Order_By>;
  full_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  orders_aggregate?: InputMaybe<Orders_Aggregate_Order_By>;
  password_hash?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FullName = 'full_name',
  /** column name */
  Id = 'id',
  /** column name */
  PasswordHash = 'password_hash',
  /** column name */
  Phone = 'phone',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  full_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  password_hash?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  full_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  password_hash?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FullName = 'full_name',
  /** column name */
  Id = 'id',
  /** column name */
  PasswordHash = 'password_hash',
  /** column name */
  Phone = 'phone',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: any, email?: string | null, full_name?: string | null, role: string }> };

export type CreateUserMutationVariables = Exact<{
  user: Users_Insert_Input;
}>;


export type CreateUserMutation = { __typename?: 'mutation_root', insert_users_one?: { __typename?: 'users', id: any, email?: string | null, full_name?: string | null, role: string, phone?: string | null, created_at?: any | null, updated_at?: any | null } | null };


export const GetUsersDocument = gql`
    query GetUsers {
  users {
    id
    email
    full_name
    role
  }
}
    `;
export const CreateUserDocument = gql`
    mutation CreateUser($user: users_insert_input!) {
  insert_users_one(object: $user) {
    id
    email
    full_name
    role
    phone
    created_at
    updated_at
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetUsers(variables?: GetUsersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetUsersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUsersQuery>(GetUsersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetUsers', 'query', variables);
    },
    CreateUser(variables: CreateUserMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateUserMutation>(CreateUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateUser', 'mutation', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;