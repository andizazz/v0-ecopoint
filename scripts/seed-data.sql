-- Seed data for Eco Point system

-- Insert waste categories
INSERT INTO waste_categories (name, points_per_kg, description) VALUES
('Plastik', 20, 'Botol plastik, kemasan makanan, kantong plastik'),
('Kertas', 15, 'Koran, majalah, kardus, kertas kantor'),
('Logam', 50, 'Kaleng aluminium, besi, tembaga'),
('Kaca', 25, 'Botol kaca, pecahan kaca'),
('Organik', 10, 'Sisa makanan, daun, ranting'),
('Elektronik', 100, 'HP bekas, komputer, peralatan elektronik');

-- Insert collection locations
INSERT INTO collection_locations (name, address, city) VALUES
('Jakarta Pusat - Sudirman', 'Jl. Jenderal Sudirman No. 123', 'Jakarta'),
('Jakarta Selatan - Senayan', 'Jl. Asia Afrika No. 456', 'Jakarta'),
('Jakarta Barat - Puri Indah', 'Jl. Puri Indah Raya No. 789', 'Jakarta'),
('Jakarta Utara - Kelapa Gading', 'Jl. Boulevard Raya No. 321', 'Jakarta'),
('Jakarta Timur - Cakung', 'Jl. Cakung Raya No. 654', 'Jakarta');

-- Insert sample rewards
INSERT INTO rewards (name, description, points_required, category, stock, image_url) VALUES
('Voucher Belanja Indomaret', 'Voucher belanja senilai Rp 50.000', 500, 'voucher', 25, '/placeholder.svg?height=200&width=300'),
('Tumbler Stainless Steel', 'Tumbler ramah lingkungan 500ml', 800, 'household', 15, '/placeholder.svg?height=200&width=300'),
('Voucher Grab Food', 'Voucher makanan senilai Rp 75.000', 750, 'food', 30, '/placeholder.svg?height=200&width=300'),
('Power Bank 10000mAh', 'Power bank portable dengan fast charging', 1500, 'electronics', 8, '/placeholder.svg?height=200&width=300'),
('Tas Belanja Kanvas', 'Tas belanja ramah lingkungan', 300, 'fashion', 50, '/placeholder.svg?height=200&width=300'),
('Voucher Shopee', 'Voucher belanja online Rp 100.000', 1000, 'voucher', 20, '/placeholder.svg?height=200&width=300'),
('Bluetooth Speaker', 'Speaker portable dengan kualitas suara jernih', 2000, 'electronics', 5, '/placeholder.svg?height=200&width=300'),
('Eco-friendly Water Bottle', 'Botol minum dari bahan daur ulang', 600, 'household', 35, '/placeholder.svg?height=200&width=300');

-- Insert sample admin user (password: admin123)
INSERT INTO admin_users (username, email, password_hash, role) VALUES
('admin', 'admin@ecopoint.id', '$2b$10$rQZ8kHWfQxwjKV.nVXJ0/.123456789abcdef', 'super_admin');

-- Insert sample user (password: user123)
INSERT INTO users (full_name, email, phone, address, password_hash, total_points, level) VALUES
('John Doe', 'john@example.com', '08123456789', 'Jl. Contoh No. 123, Jakarta', '$2b$10$rQZ8kHWfQxwjKV.nVXJ0/.123456789abcdef', 2450, 'Gold'),
('Jane Smith', 'jane@example.com', '08987654321', 'Jl. Sample No. 456, Jakarta', '$2b$10$rQZ8kHWfQxwjKV.nVXJ0/.123456789abcdef', 1200, 'Silver'),
('Bob Wilson', 'bob@example.com', '08555666777', 'Jl. Demo No. 789, Jakarta', '$2b$10$rQZ8kHWfQxwjKV.nVXJ0/.123456789abcdef', 800, 'Bronze');

-- Insert sample waste deposits
INSERT INTO waste_deposits (user_id, waste_category_id, location_id, weight, points_earned, status, created_at, verified_at) VALUES
(1, 1, 1, 2.5, 50, 'verified', '2024-01-15 10:30:00', '2024-01-15 11:00:00'),
(1, 2, 1, 1.8, 27, 'verified', '2024-01-14 14:20:00', '2024-01-14 15:00:00'),
(1, 3, 2, 0.5, 25, 'verified', '2024-01-13 09:15:00', '2024-01-13 10:00:00'),
(1, 4, 2, 3.2, 80, 'verified', '2024-01-12 16:45:00', '2024-01-12 17:30:00'),
(2, 1, 3, 1.2, 24, 'verified', '2024-01-11 11:30:00', '2024-01-11 12:00:00'),
(2, 2, 3, 2.0, 30, 'verified', '2024-01-10 13:20:00', '2024-01-10 14:00:00'),
(3, 5, 4, 5.0, 50, 'verified', '2024-01-09 08:15:00', '2024-01-09 09:00:00');

-- Insert corresponding point transactions
INSERT INTO point_transactions (user_id, transaction_type, points, reference_id, reference_type, description) VALUES
(1, 'earned', 50, 1, 'deposit', 'Poin dari setoran Plastik 2.5 kg'),
(1, 'earned', 27, 2, 'deposit', 'Poin dari setoran Kertas 1.8 kg'),
(1, 'earned', 25, 3, 'deposit', 'Poin dari setoran Logam 0.5 kg'),
(1, 'earned', 80, 4, 'deposit', 'Poin dari setoran Kaca 3.2 kg'),
(2, 'earned', 24, 5, 'deposit', 'Poin dari setoran Plastik 1.2 kg'),
(2, 'earned', 30, 6, 'deposit', 'Poin dari setoran Kertas 2.0 kg'),
(3, 'earned', 50, 7, 'deposit', 'Poin dari setoran Organik 5.0 kg');

-- Insert sample reward redemptions
INSERT INTO reward_redemptions (user_id, reward_id, points_used, status, redemption_code, created_at) VALUES
(1, 1, 500, 'fulfilled', 'ECO-VOUCHER-001', '2024-01-10 15:30:00'),
(2, 5, 300, 'fulfilled', 'ECO-BAG-002', '2024-01-08 10:20:00');

-- Insert corresponding point transactions for redemptions
INSERT INTO point_transactions (user_id, transaction_type, points, reference_id, reference_type, description) VALUES
(1, 'redeemed', -500, 1, 'redemption', 'Penukaran Voucher Belanja Indomaret'),
(2, 'redeemed', -300, 2, 'redemption', 'Penukaran Tas Belanja Kanvas');
