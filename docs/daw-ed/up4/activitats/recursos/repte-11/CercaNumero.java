public class CercaNumero {
    static int primeraPosicio(int[] valors, int buscat) {
        for (int i = 1; i < valors.length; i++) {
            if (valors[i] == buscat) {
                return i;
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        int[] valors = {7, 3, 9, 3};
        System.out.println(primeraPosicio(valors, 7));
    }
}
