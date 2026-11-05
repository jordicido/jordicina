public class CalculadoraMitjana {
    static double mitjana(int[] valors) {
        int suma = 0;
        for (int valor : valors) {
            suma += valor;
        }
        return suma / valors.length;
    }

    public static void main(String[] args) {
        int[] valors = {5, 6, 8};
        System.out.println("Mitjana: " + mitjana(valors));
    }
}
