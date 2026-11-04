public class CercaNumero {
    public static int posicioDe(int[] valors, int buscat) {
        for (int i = 0; i < valors.length - 1; i++) { // ERROR INTENCIONAT
            if (valors[i] == buscat) {
                return i;
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        int[] valors = {4, 8, 15};
        System.out.println(posicioDe(valors, 15));
    }
}
