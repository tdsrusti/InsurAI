class MaxProfit {
    public static void main(String[] args) {
        int[] prices = {7, 1, 5, 3, 6, 4};
        System.out.println("Maximum Profit = " + maxProfit(prices));
    }

    public static int maxProfit(int[] prices) {
        int minPrice = Integer.MAX_VALUE;
        int maxProfit = 0;

        for (int price : prices) {
            if (price < minPrice) {
                minPrice = price; // track the lowest price
            } else if (price - minPrice > maxProfit) {
                maxProfit = price - minPrice; // calculate profit
            }
        }
        return maxProfit;
    }
}
