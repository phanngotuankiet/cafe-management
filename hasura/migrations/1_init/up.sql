-- Users & Authentication
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT UNIQUE,
    phone TEXT UNIQUE,
    full_name TEXT,
    role TEXT CHECK (role IN ('admin', 'staff', 'customer')),
    password_hash TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Products & Categories
CREATE TABLE categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    description TEXT,
    image_url TEXT,
    is_active BOOLEAN DEFAULT true
);

CREATE TABLE products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    category_id UUID REFERENCES categories(id),
    name TEXT NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    image_url TEXT,
    is_available BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tables Management
CREATE TABLE tables (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    table_number INTEGER UNIQUE NOT NULL,
    capacity INTEGER NOT NULL,
    status TEXT CHECK (status IN ('available', 'occupied', 'reserved')),
    qr_code TEXT
);

-- Orders & Order Items
CREATE TABLE orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    table_id UUID REFERENCES tables(id),
    user_id UUID REFERENCES users(id),
    status TEXT CHECK (status IN ('pending', 'preparing', 'completed', 'cancelled')),
    total_amount DECIMAL(10,2),
    payment_status TEXT CHECK (payment_status IN ('pending', 'paid', 'refunded')),
    payment_method TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE order_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id UUID REFERENCES orders(id),
    product_id UUID REFERENCES products(id),
    quantity INTEGER NOT NULL,
    unit_price DECIMAL(10,2) NOT NULL,
    notes TEXT,
    status TEXT CHECK (status IN ('pending', 'preparing', 'completed', 'cancelled'))
);

-- Inventory Management
CREATE TABLE ingredients (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    unit TEXT NOT NULL,
    current_stock DECIMAL(10,2) DEFAULT 0,
    minimum_stock DECIMAL(10,2) DEFAULT 0
);

CREATE TABLE product_ingredients (
    product_id UUID REFERENCES products(id),
    ingredient_id UUID REFERENCES ingredients(id),
    quantity DECIMAL(10,2) NOT NULL,
    PRIMARY KEY (product_id, ingredient_id)
);

-- Suppliers & Purchase Orders
CREATE TABLE suppliers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    contact_person TEXT,
    phone TEXT,
    email TEXT,
    address TEXT
);

CREATE TABLE purchase_orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    supplier_id UUID REFERENCES suppliers(id),
    status TEXT CHECK (status IN ('pending', 'received', 'cancelled')),
    total_amount DECIMAL(10,2),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Loyalty Program
CREATE TABLE customer_points (
    user_id UUID REFERENCES users(id),
    points INTEGER DEFAULT 0,
    total_spent DECIMAL(10,2) DEFAULT 0,
    last_visit TIMESTAMPTZ,
    PRIMARY KEY (user_id)
);