public class Datatype_pg2{
    //Type Casting
    public static void main(String[] args) {
        int a = 100;
        double b = a;
        System.out.println("Widening (int to double): " + b);

        double x = 99.99;
        int y = (int) x; 
        System.out.println("Narrowing (double to int): " + y);
    }
}

