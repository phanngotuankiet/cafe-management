"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDocument = exports.GetUsersDocument = exports.Users_Update_Column = exports.Users_Select_Column = exports.Users_Constraint = exports.Tables_Update_Column = exports.Tables_Select_Column = exports.Tables_Constraint = exports.Suppliers_Update_Column = exports.Suppliers_Select_Column = exports.Suppliers_Constraint = exports.Purchase_Orders_Update_Column = exports.Purchase_Orders_Select_Column = exports.Purchase_Orders_Constraint = exports.Products_Update_Column = exports.Products_Select_Column_Products_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns = exports.Products_Select_Column_Products_Aggregate_Bool_Exp_Bool_And_Arguments_Columns = exports.Products_Select_Column = exports.Products_Constraint = exports.Product_Ingredients_Update_Column = exports.Product_Ingredients_Select_Column = exports.Product_Ingredients_Constraint = exports.Orders_Update_Column = exports.Orders_Select_Column = exports.Orders_Constraint = exports.Order_Items_Update_Column = exports.Order_Items_Select_Column = exports.Order_Items_Constraint = exports.Order_By = exports.Ingredients_Update_Column = exports.Ingredients_Select_Column = exports.Ingredients_Constraint = exports.Customer_Points_Update_Column = exports.Customer_Points_Select_Column = exports.Customer_Points_Constraint = exports.Cursor_Ordering = exports.Categories_Update_Column = exports.Categories_Select_Column = exports.Categories_Constraint = void 0;
exports.getSdk = getSdk;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
/** unique or primary key constraints on table "categories" */
var Categories_Constraint;
(function (Categories_Constraint) {
    /** unique or primary key constraint on columns "id" */
    Categories_Constraint["CategoriesPkey"] = "categories_pkey";
})(Categories_Constraint || (exports.Categories_Constraint = Categories_Constraint = {}));
/** select columns of table "categories" */
var Categories_Select_Column;
(function (Categories_Select_Column) {
    /** column name */
    Categories_Select_Column["Description"] = "description";
    /** column name */
    Categories_Select_Column["Id"] = "id";
    /** column name */
    Categories_Select_Column["ImageUrl"] = "image_url";
    /** column name */
    Categories_Select_Column["IsActive"] = "is_active";
    /** column name */
    Categories_Select_Column["Name"] = "name";
})(Categories_Select_Column || (exports.Categories_Select_Column = Categories_Select_Column = {}));
/** update columns of table "categories" */
var Categories_Update_Column;
(function (Categories_Update_Column) {
    /** column name */
    Categories_Update_Column["Description"] = "description";
    /** column name */
    Categories_Update_Column["Id"] = "id";
    /** column name */
    Categories_Update_Column["ImageUrl"] = "image_url";
    /** column name */
    Categories_Update_Column["IsActive"] = "is_active";
    /** column name */
    Categories_Update_Column["Name"] = "name";
})(Categories_Update_Column || (exports.Categories_Update_Column = Categories_Update_Column = {}));
/** ordering argument of a cursor */
var Cursor_Ordering;
(function (Cursor_Ordering) {
    /** ascending ordering of the cursor */
    Cursor_Ordering["Asc"] = "ASC";
    /** descending ordering of the cursor */
    Cursor_Ordering["Desc"] = "DESC";
})(Cursor_Ordering || (exports.Cursor_Ordering = Cursor_Ordering = {}));
/** unique or primary key constraints on table "customer_points" */
var Customer_Points_Constraint;
(function (Customer_Points_Constraint) {
    /** unique or primary key constraint on columns "user_id" */
    Customer_Points_Constraint["CustomerPointsPkey"] = "customer_points_pkey";
})(Customer_Points_Constraint || (exports.Customer_Points_Constraint = Customer_Points_Constraint = {}));
/** select columns of table "customer_points" */
var Customer_Points_Select_Column;
(function (Customer_Points_Select_Column) {
    /** column name */
    Customer_Points_Select_Column["LastVisit"] = "last_visit";
    /** column name */
    Customer_Points_Select_Column["Points"] = "points";
    /** column name */
    Customer_Points_Select_Column["TotalSpent"] = "total_spent";
    /** column name */
    Customer_Points_Select_Column["UserId"] = "user_id";
})(Customer_Points_Select_Column || (exports.Customer_Points_Select_Column = Customer_Points_Select_Column = {}));
/** update columns of table "customer_points" */
var Customer_Points_Update_Column;
(function (Customer_Points_Update_Column) {
    /** column name */
    Customer_Points_Update_Column["LastVisit"] = "last_visit";
    /** column name */
    Customer_Points_Update_Column["Points"] = "points";
    /** column name */
    Customer_Points_Update_Column["TotalSpent"] = "total_spent";
    /** column name */
    Customer_Points_Update_Column["UserId"] = "user_id";
})(Customer_Points_Update_Column || (exports.Customer_Points_Update_Column = Customer_Points_Update_Column = {}));
/** unique or primary key constraints on table "ingredients" */
var Ingredients_Constraint;
(function (Ingredients_Constraint) {
    /** unique or primary key constraint on columns "id" */
    Ingredients_Constraint["IngredientsPkey"] = "ingredients_pkey";
})(Ingredients_Constraint || (exports.Ingredients_Constraint = Ingredients_Constraint = {}));
/** select columns of table "ingredients" */
var Ingredients_Select_Column;
(function (Ingredients_Select_Column) {
    /** column name */
    Ingredients_Select_Column["CurrentStock"] = "current_stock";
    /** column name */
    Ingredients_Select_Column["Id"] = "id";
    /** column name */
    Ingredients_Select_Column["MinimumStock"] = "minimum_stock";
    /** column name */
    Ingredients_Select_Column["Name"] = "name";
    /** column name */
    Ingredients_Select_Column["Unit"] = "unit";
})(Ingredients_Select_Column || (exports.Ingredients_Select_Column = Ingredients_Select_Column = {}));
/** update columns of table "ingredients" */
var Ingredients_Update_Column;
(function (Ingredients_Update_Column) {
    /** column name */
    Ingredients_Update_Column["CurrentStock"] = "current_stock";
    /** column name */
    Ingredients_Update_Column["Id"] = "id";
    /** column name */
    Ingredients_Update_Column["MinimumStock"] = "minimum_stock";
    /** column name */
    Ingredients_Update_Column["Name"] = "name";
    /** column name */
    Ingredients_Update_Column["Unit"] = "unit";
})(Ingredients_Update_Column || (exports.Ingredients_Update_Column = Ingredients_Update_Column = {}));
/** column ordering options */
var Order_By;
(function (Order_By) {
    /** in ascending order, nulls last */
    Order_By["Asc"] = "asc";
    /** in ascending order, nulls first */
    Order_By["AscNullsFirst"] = "asc_nulls_first";
    /** in ascending order, nulls last */
    Order_By["AscNullsLast"] = "asc_nulls_last";
    /** in descending order, nulls first */
    Order_By["Desc"] = "desc";
    /** in descending order, nulls first */
    Order_By["DescNullsFirst"] = "desc_nulls_first";
    /** in descending order, nulls last */
    Order_By["DescNullsLast"] = "desc_nulls_last";
})(Order_By || (exports.Order_By = Order_By = {}));
/** unique or primary key constraints on table "order_items" */
var Order_Items_Constraint;
(function (Order_Items_Constraint) {
    /** unique or primary key constraint on columns "id" */
    Order_Items_Constraint["OrderItemsPkey"] = "order_items_pkey";
})(Order_Items_Constraint || (exports.Order_Items_Constraint = Order_Items_Constraint = {}));
/** select columns of table "order_items" */
var Order_Items_Select_Column;
(function (Order_Items_Select_Column) {
    /** column name */
    Order_Items_Select_Column["Id"] = "id";
    /** column name */
    Order_Items_Select_Column["Notes"] = "notes";
    /** column name */
    Order_Items_Select_Column["OrderId"] = "order_id";
    /** column name */
    Order_Items_Select_Column["ProductId"] = "product_id";
    /** column name */
    Order_Items_Select_Column["Quantity"] = "quantity";
    /** column name */
    Order_Items_Select_Column["Status"] = "status";
    /** column name */
    Order_Items_Select_Column["UnitPrice"] = "unit_price";
})(Order_Items_Select_Column || (exports.Order_Items_Select_Column = Order_Items_Select_Column = {}));
/** update columns of table "order_items" */
var Order_Items_Update_Column;
(function (Order_Items_Update_Column) {
    /** column name */
    Order_Items_Update_Column["Id"] = "id";
    /** column name */
    Order_Items_Update_Column["Notes"] = "notes";
    /** column name */
    Order_Items_Update_Column["OrderId"] = "order_id";
    /** column name */
    Order_Items_Update_Column["ProductId"] = "product_id";
    /** column name */
    Order_Items_Update_Column["Quantity"] = "quantity";
    /** column name */
    Order_Items_Update_Column["Status"] = "status";
    /** column name */
    Order_Items_Update_Column["UnitPrice"] = "unit_price";
})(Order_Items_Update_Column || (exports.Order_Items_Update_Column = Order_Items_Update_Column = {}));
/** unique or primary key constraints on table "orders" */
var Orders_Constraint;
(function (Orders_Constraint) {
    /** unique or primary key constraint on columns "id" */
    Orders_Constraint["OrdersPkey"] = "orders_pkey";
})(Orders_Constraint || (exports.Orders_Constraint = Orders_Constraint = {}));
/** select columns of table "orders" */
var Orders_Select_Column;
(function (Orders_Select_Column) {
    /** column name */
    Orders_Select_Column["CreatedAt"] = "created_at";
    /** column name */
    Orders_Select_Column["Id"] = "id";
    /** column name */
    Orders_Select_Column["PaymentMethod"] = "payment_method";
    /** column name */
    Orders_Select_Column["PaymentStatus"] = "payment_status";
    /** column name */
    Orders_Select_Column["Status"] = "status";
    /** column name */
    Orders_Select_Column["TableId"] = "table_id";
    /** column name */
    Orders_Select_Column["TotalAmount"] = "total_amount";
    /** column name */
    Orders_Select_Column["UpdatedAt"] = "updated_at";
    /** column name */
    Orders_Select_Column["UserId"] = "user_id";
})(Orders_Select_Column || (exports.Orders_Select_Column = Orders_Select_Column = {}));
/** update columns of table "orders" */
var Orders_Update_Column;
(function (Orders_Update_Column) {
    /** column name */
    Orders_Update_Column["CreatedAt"] = "created_at";
    /** column name */
    Orders_Update_Column["Id"] = "id";
    /** column name */
    Orders_Update_Column["PaymentMethod"] = "payment_method";
    /** column name */
    Orders_Update_Column["PaymentStatus"] = "payment_status";
    /** column name */
    Orders_Update_Column["Status"] = "status";
    /** column name */
    Orders_Update_Column["TableId"] = "table_id";
    /** column name */
    Orders_Update_Column["TotalAmount"] = "total_amount";
    /** column name */
    Orders_Update_Column["UpdatedAt"] = "updated_at";
    /** column name */
    Orders_Update_Column["UserId"] = "user_id";
})(Orders_Update_Column || (exports.Orders_Update_Column = Orders_Update_Column = {}));
/** unique or primary key constraints on table "product_ingredients" */
var Product_Ingredients_Constraint;
(function (Product_Ingredients_Constraint) {
    /** unique or primary key constraint on columns "ingredient_id", "product_id" */
    Product_Ingredients_Constraint["ProductIngredientsPkey"] = "product_ingredients_pkey";
})(Product_Ingredients_Constraint || (exports.Product_Ingredients_Constraint = Product_Ingredients_Constraint = {}));
/** select columns of table "product_ingredients" */
var Product_Ingredients_Select_Column;
(function (Product_Ingredients_Select_Column) {
    /** column name */
    Product_Ingredients_Select_Column["IngredientId"] = "ingredient_id";
    /** column name */
    Product_Ingredients_Select_Column["ProductId"] = "product_id";
    /** column name */
    Product_Ingredients_Select_Column["Quantity"] = "quantity";
})(Product_Ingredients_Select_Column || (exports.Product_Ingredients_Select_Column = Product_Ingredients_Select_Column = {}));
/** update columns of table "product_ingredients" */
var Product_Ingredients_Update_Column;
(function (Product_Ingredients_Update_Column) {
    /** column name */
    Product_Ingredients_Update_Column["IngredientId"] = "ingredient_id";
    /** column name */
    Product_Ingredients_Update_Column["ProductId"] = "product_id";
    /** column name */
    Product_Ingredients_Update_Column["Quantity"] = "quantity";
})(Product_Ingredients_Update_Column || (exports.Product_Ingredients_Update_Column = Product_Ingredients_Update_Column = {}));
/** unique or primary key constraints on table "products" */
var Products_Constraint;
(function (Products_Constraint) {
    /** unique or primary key constraint on columns "id" */
    Products_Constraint["ProductsPkey"] = "products_pkey";
})(Products_Constraint || (exports.Products_Constraint = Products_Constraint = {}));
/** select columns of table "products" */
var Products_Select_Column;
(function (Products_Select_Column) {
    /** column name */
    Products_Select_Column["CategoryId"] = "category_id";
    /** column name */
    Products_Select_Column["CreatedAt"] = "created_at";
    /** column name */
    Products_Select_Column["Description"] = "description";
    /** column name */
    Products_Select_Column["Id"] = "id";
    /** column name */
    Products_Select_Column["ImageUrl"] = "image_url";
    /** column name */
    Products_Select_Column["IsAvailable"] = "is_available";
    /** column name */
    Products_Select_Column["Name"] = "name";
    /** column name */
    Products_Select_Column["Price"] = "price";
    /** column name */
    Products_Select_Column["UpdatedAt"] = "updated_at";
})(Products_Select_Column || (exports.Products_Select_Column = Products_Select_Column = {}));
/** select "products_aggregate_bool_exp_bool_and_arguments_columns" columns of table "products" */
var Products_Select_Column_Products_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
(function (Products_Select_Column_Products_Aggregate_Bool_Exp_Bool_And_Arguments_Columns) {
    /** column name */
    Products_Select_Column_Products_Aggregate_Bool_Exp_Bool_And_Arguments_Columns["IsAvailable"] = "is_available";
})(Products_Select_Column_Products_Aggregate_Bool_Exp_Bool_And_Arguments_Columns || (exports.Products_Select_Column_Products_Aggregate_Bool_Exp_Bool_And_Arguments_Columns = Products_Select_Column_Products_Aggregate_Bool_Exp_Bool_And_Arguments_Columns = {}));
/** select "products_aggregate_bool_exp_bool_or_arguments_columns" columns of table "products" */
var Products_Select_Column_Products_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
(function (Products_Select_Column_Products_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns) {
    /** column name */
    Products_Select_Column_Products_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns["IsAvailable"] = "is_available";
})(Products_Select_Column_Products_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns || (exports.Products_Select_Column_Products_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns = Products_Select_Column_Products_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns = {}));
/** update columns of table "products" */
var Products_Update_Column;
(function (Products_Update_Column) {
    /** column name */
    Products_Update_Column["CategoryId"] = "category_id";
    /** column name */
    Products_Update_Column["CreatedAt"] = "created_at";
    /** column name */
    Products_Update_Column["Description"] = "description";
    /** column name */
    Products_Update_Column["Id"] = "id";
    /** column name */
    Products_Update_Column["ImageUrl"] = "image_url";
    /** column name */
    Products_Update_Column["IsAvailable"] = "is_available";
    /** column name */
    Products_Update_Column["Name"] = "name";
    /** column name */
    Products_Update_Column["Price"] = "price";
    /** column name */
    Products_Update_Column["UpdatedAt"] = "updated_at";
})(Products_Update_Column || (exports.Products_Update_Column = Products_Update_Column = {}));
/** unique or primary key constraints on table "purchase_orders" */
var Purchase_Orders_Constraint;
(function (Purchase_Orders_Constraint) {
    /** unique or primary key constraint on columns "id" */
    Purchase_Orders_Constraint["PurchaseOrdersPkey"] = "purchase_orders_pkey";
})(Purchase_Orders_Constraint || (exports.Purchase_Orders_Constraint = Purchase_Orders_Constraint = {}));
/** select columns of table "purchase_orders" */
var Purchase_Orders_Select_Column;
(function (Purchase_Orders_Select_Column) {
    /** column name */
    Purchase_Orders_Select_Column["CreatedAt"] = "created_at";
    /** column name */
    Purchase_Orders_Select_Column["Id"] = "id";
    /** column name */
    Purchase_Orders_Select_Column["Status"] = "status";
    /** column name */
    Purchase_Orders_Select_Column["SupplierId"] = "supplier_id";
    /** column name */
    Purchase_Orders_Select_Column["TotalAmount"] = "total_amount";
    /** column name */
    Purchase_Orders_Select_Column["UpdatedAt"] = "updated_at";
})(Purchase_Orders_Select_Column || (exports.Purchase_Orders_Select_Column = Purchase_Orders_Select_Column = {}));
/** update columns of table "purchase_orders" */
var Purchase_Orders_Update_Column;
(function (Purchase_Orders_Update_Column) {
    /** column name */
    Purchase_Orders_Update_Column["CreatedAt"] = "created_at";
    /** column name */
    Purchase_Orders_Update_Column["Id"] = "id";
    /** column name */
    Purchase_Orders_Update_Column["Status"] = "status";
    /** column name */
    Purchase_Orders_Update_Column["SupplierId"] = "supplier_id";
    /** column name */
    Purchase_Orders_Update_Column["TotalAmount"] = "total_amount";
    /** column name */
    Purchase_Orders_Update_Column["UpdatedAt"] = "updated_at";
})(Purchase_Orders_Update_Column || (exports.Purchase_Orders_Update_Column = Purchase_Orders_Update_Column = {}));
/** unique or primary key constraints on table "suppliers" */
var Suppliers_Constraint;
(function (Suppliers_Constraint) {
    /** unique or primary key constraint on columns "id" */
    Suppliers_Constraint["SuppliersPkey"] = "suppliers_pkey";
})(Suppliers_Constraint || (exports.Suppliers_Constraint = Suppliers_Constraint = {}));
/** select columns of table "suppliers" */
var Suppliers_Select_Column;
(function (Suppliers_Select_Column) {
    /** column name */
    Suppliers_Select_Column["Address"] = "address";
    /** column name */
    Suppliers_Select_Column["ContactPerson"] = "contact_person";
    /** column name */
    Suppliers_Select_Column["Email"] = "email";
    /** column name */
    Suppliers_Select_Column["Id"] = "id";
    /** column name */
    Suppliers_Select_Column["Name"] = "name";
    /** column name */
    Suppliers_Select_Column["Phone"] = "phone";
})(Suppliers_Select_Column || (exports.Suppliers_Select_Column = Suppliers_Select_Column = {}));
/** update columns of table "suppliers" */
var Suppliers_Update_Column;
(function (Suppliers_Update_Column) {
    /** column name */
    Suppliers_Update_Column["Address"] = "address";
    /** column name */
    Suppliers_Update_Column["ContactPerson"] = "contact_person";
    /** column name */
    Suppliers_Update_Column["Email"] = "email";
    /** column name */
    Suppliers_Update_Column["Id"] = "id";
    /** column name */
    Suppliers_Update_Column["Name"] = "name";
    /** column name */
    Suppliers_Update_Column["Phone"] = "phone";
})(Suppliers_Update_Column || (exports.Suppliers_Update_Column = Suppliers_Update_Column = {}));
/** unique or primary key constraints on table "tables" */
var Tables_Constraint;
(function (Tables_Constraint) {
    /** unique or primary key constraint on columns "id" */
    Tables_Constraint["TablesPkey"] = "tables_pkey";
    /** unique or primary key constraint on columns "table_number" */
    Tables_Constraint["TablesTableNumberKey"] = "tables_table_number_key";
})(Tables_Constraint || (exports.Tables_Constraint = Tables_Constraint = {}));
/** select columns of table "tables" */
var Tables_Select_Column;
(function (Tables_Select_Column) {
    /** column name */
    Tables_Select_Column["Capacity"] = "capacity";
    /** column name */
    Tables_Select_Column["Id"] = "id";
    /** column name */
    Tables_Select_Column["QrCode"] = "qr_code";
    /** column name */
    Tables_Select_Column["Status"] = "status";
    /** column name */
    Tables_Select_Column["TableNumber"] = "table_number";
})(Tables_Select_Column || (exports.Tables_Select_Column = Tables_Select_Column = {}));
/** update columns of table "tables" */
var Tables_Update_Column;
(function (Tables_Update_Column) {
    /** column name */
    Tables_Update_Column["Capacity"] = "capacity";
    /** column name */
    Tables_Update_Column["Id"] = "id";
    /** column name */
    Tables_Update_Column["QrCode"] = "qr_code";
    /** column name */
    Tables_Update_Column["Status"] = "status";
    /** column name */
    Tables_Update_Column["TableNumber"] = "table_number";
})(Tables_Update_Column || (exports.Tables_Update_Column = Tables_Update_Column = {}));
/** unique or primary key constraints on table "users" */
var Users_Constraint;
(function (Users_Constraint) {
    /** unique or primary key constraint on columns "email" */
    Users_Constraint["UsersEmailKey"] = "users_email_key";
    /** unique or primary key constraint on columns "phone" */
    Users_Constraint["UsersPhoneKey"] = "users_phone_key";
    /** unique or primary key constraint on columns "id" */
    Users_Constraint["UsersPkey"] = "users_pkey";
})(Users_Constraint || (exports.Users_Constraint = Users_Constraint = {}));
/** select columns of table "users" */
var Users_Select_Column;
(function (Users_Select_Column) {
    /** column name */
    Users_Select_Column["CreatedAt"] = "created_at";
    /** column name */
    Users_Select_Column["Email"] = "email";
    /** column name */
    Users_Select_Column["FullName"] = "full_name";
    /** column name */
    Users_Select_Column["Id"] = "id";
    /** column name */
    Users_Select_Column["PasswordHash"] = "password_hash";
    /** column name */
    Users_Select_Column["Phone"] = "phone";
    /** column name */
    Users_Select_Column["Role"] = "role";
    /** column name */
    Users_Select_Column["UpdatedAt"] = "updated_at";
})(Users_Select_Column || (exports.Users_Select_Column = Users_Select_Column = {}));
/** update columns of table "users" */
var Users_Update_Column;
(function (Users_Update_Column) {
    /** column name */
    Users_Update_Column["CreatedAt"] = "created_at";
    /** column name */
    Users_Update_Column["Email"] = "email";
    /** column name */
    Users_Update_Column["FullName"] = "full_name";
    /** column name */
    Users_Update_Column["Id"] = "id";
    /** column name */
    Users_Update_Column["PasswordHash"] = "password_hash";
    /** column name */
    Users_Update_Column["Phone"] = "phone";
    /** column name */
    Users_Update_Column["Role"] = "role";
    /** column name */
    Users_Update_Column["UpdatedAt"] = "updated_at";
})(Users_Update_Column || (exports.Users_Update_Column = Users_Update_Column = {}));
exports.GetUsersDocument = (0, graphql_tag_1.default) `
    query GetUsers {
  users {
    id
    email
    full_name
    role
  }
}
    `;
exports.CreateUserDocument = (0, graphql_tag_1.default) `
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
const defaultWrapper = (action, _operationName, _operationType, _variables) => action();
function getSdk(client, withWrapper = defaultWrapper) {
    return {
        GetUsers(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetUsersDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'GetUsers', 'query', variables);
        },
        CreateUser(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CreateUserDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CreateUser', 'mutation', variables);
        }
    };
}
