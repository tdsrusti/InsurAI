public class ArraysProblem {
    // 1. Print array elements
    public static void printArray() {
        int[] arr = {10, 20, 30, 40, 50};
        System.out.println("Array Elements:");
        for (int i = 0; i < arr.length; i++)
            System.out.println("Element " + i + ": " + arr[i]);
    }

    // 2. Find maximum element
    public static void findMax() {
        int[] arr = {5, 12, 7, 9, 3};
        int max = arr[0];
        for (int num : arr)
            if (num > max)
                max = num;
        System.out.println("Maximum = " + max);
    }

    // 3. Sum of array elements
    public static void sumArray() {
        int[] arr = {1, 2, 3, 4, 5};
        int sum = 0;
        for (int num : arr)
            sum += num;
        System.out.println("Sum = " + sum);
    }

    public static void main(String[] args) {
        printArray();
        System.out.println("------");       
        findMax();
        System.out.println("------");
        sumArray();
    }
}

