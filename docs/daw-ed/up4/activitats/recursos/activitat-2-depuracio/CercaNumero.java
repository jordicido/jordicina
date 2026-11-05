import java.util.Arrays;

public class CercaNumero {
    static int posicioDe(int[] valors, int buscat) {
        for (int i = 1; i < valors.length; i++) {
            if (valors[i] == buscat) {
                return i;
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        int[] valors = {2, 4, 9};
        System.out.println("Valors: " + Arrays.toString(valors));
        System.out.println("Posició de 4: " + posicioDe(valors, 4));
    }
}
