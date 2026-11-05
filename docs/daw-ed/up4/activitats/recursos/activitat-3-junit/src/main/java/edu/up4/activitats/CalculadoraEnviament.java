package edu.up4.activitats;

public class CalculadoraEnviament {
    public double preuEnviament(double compra, boolean cupoValid) {
        if (compra < 0) {
            throw new IllegalArgumentException("La compra no pot ser negativa");
        }
        if (!cupoValid) {
            return 5.0;
        }
        if (compra > 50.0) {
            return 0.0;
        }
        return 2.0;
    }
}
