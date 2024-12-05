-- Bảng lưu lịch sử order để training
CREATE TABLE order_history_features (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    product_id UUID REFERENCES products(id),
    order_count INTEGER DEFAULT 1,
    total_spent DECIMAL(10,2),
    last_ordered_at TIMESTAMPTZ DEFAULT NOW(),
    time_of_day INTEGER, -- 0-23 giờ
    day_of_week INTEGER, -- 0-6 (CN-T7)
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Bảng lưu kết quả recommendation
CREATE TABLE product_recommendations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    product_id UUID REFERENCES products(id),
    score DECIMAL(10,4), -- điểm dự đoán
    reason TEXT, -- lý do recommend
    created_at TIMESTAMPTZ DEFAULT NOW()
); 