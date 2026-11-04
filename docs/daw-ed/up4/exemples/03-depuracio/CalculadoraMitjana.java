public class CalculadoraMitjana {
    public static double mitjana(int[] notes) {
        int suma = 0;
        for (int nota : notes) {
            suma += nota;
        }
        return suma / notes.length; // ERROR INTENCIONAT: divisió entera
    }

    public static void main(String[] args) {
        int[] notes = {5, 6, 8};
        System.out.println(mitjana(notes));
    }
}
