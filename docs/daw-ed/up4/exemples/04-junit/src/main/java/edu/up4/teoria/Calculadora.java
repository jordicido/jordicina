package edu.up4.teoria;

public class Calculadora {
    public int sumar(int a, int b) {
        return a + b;
    }

    public int restar(int a, int b) {
        return a - b;
    }

    public double dividir(double dividend, double divisor) {
        if (divisor == 0) {
            throw new IllegalArgumentException("El divisor no pot ser zero");
        }
        return dividend / divisor;
    }
}
