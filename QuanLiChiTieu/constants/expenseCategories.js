// Constants for expense categories

export const EXPENSE_CATEGORIES = [
  { id: '1', name: 'Ăn uống', color: '#FF6B6B' },
  { id: '2', name: 'Di chuyển', color: '#4ECDC4' },
  { id: '3', name: 'Mua sắm', color: '#FFD166' },
  { id: '4', name: 'Hóa đơn', color: '#6A0572' },
  { id: '5', name: 'Giải trí', color: '#1A535C' },
  { id: '6', name: 'Sức khỏe', color: '#F25F5C' },
  { id: '7', name: 'Giáo dục', color: '#70C1B3' },
  { id: '8', name: 'Quà tặng', color: '#FFE66D' },
  { id: '9', name: 'Khác', color: '#247BA0' },
];

// Map category names to icon names
export const getCategoryIcon = (categoryName) => {
  switch (categoryName.toLowerCase()) {
    case 'ăn uống': return 'restaurant';
    case 'di chuyển': return 'car';
    case 'mua sắm': return 'cart';
    case 'hóa đơn': return 'receipt';
    case 'giải trí': return 'film';
    case 'sức khỏe': return 'medkit';
    case 'giáo dục': return 'school';
    case 'quà tặng': return 'gift';
    default: return 'cash';
  }
}; 