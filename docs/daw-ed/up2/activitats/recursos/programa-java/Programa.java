public class Programa {

    public static void main(String[] args) throws InterruptedException {
        int[] temperatures = {18, 21, 24, 19, 27};
        int suma = 0;
        int maxima = temperatures[0];

        System.out.print("Temperatures: ");
        for (int i = 0; i < temperatures.length; i++) {
            System.out.print(temperatures[i]);
            System.out.print(i == temperatures.length - 1 ? "\n" : " ");
            suma += temperatures[i];
            if (temperatures[i] > maxima) {
                maxima = temperatures[i];
            }
        }

        double mitjana = (double) suma / temperatures.length;
        System.out.printf("\nMitjana: %.1f ºC%n", mitjana);
        System.out.printf("Màxima: %d ºC%n%n", maxima);
        System.out.println("Estat: " + (maxima >= 27 ? "temperatura elevada" : "temperatura normal"));
        System.out.println("\nEl programa continuarà actiu durant 30 segons...");
        Thread.sleep(30_000);
    }
}
