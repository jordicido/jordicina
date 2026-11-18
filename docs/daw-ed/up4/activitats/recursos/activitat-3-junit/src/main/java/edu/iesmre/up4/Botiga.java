package edu.iesmre.up4;

public class Botiga {

    public static double calcularEnviament(double importCompra, boolean cupoValid) {
        if (importCompra < 0) {
            throw new IllegalArgumentException("L'import no pot ser negatiu");
        }
        if (!cupoValid) {
            return 5.0;
        }
        if (importCompra < 50.0) {
            return 2.0;
        }
        return 0.0;
    }

    public static void comprar(int[] estoc, int producte, int unitats) {
        if (estoc == null || producte < 0 || producte >= estoc.length || unitats <= 0) {
            throw new IllegalArgumentException("Dades de compra no vàlides");
        }
        if (unitats > estoc[producte]) {
            throw new IllegalStateException("Estoc insuficient");
        }
        estoc[producte] -= unitats;
    }
}
