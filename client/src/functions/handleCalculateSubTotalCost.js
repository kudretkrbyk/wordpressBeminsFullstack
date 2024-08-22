const handleCalculateSubTotalCost = (cartItems) => {
  if (cartItems && cartItems.length > 0) {
    const totalCost = cartItems.reduce((total, item) => {
      return total + item.fiyat * item.quantity; // Her ürünün fiyatı ve miktarını çarparak toplama ekler
    }, 0); // Başlangıç değeri 0

    return totalCost;
  }
};
export default handleCalculateSubTotalCost;
