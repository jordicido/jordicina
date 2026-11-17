package edu.iesmre.up4;

public class CompteBancari {
    private double saldo;

    public CompteBancari(double saldoInicial) {
        if (saldoInicial < 0) {
            throw new IllegalArgumentException("Saldo inicial no vàlid");
        }
        saldo = saldoInicial;
    }

    public void ingressar(double importOperacio) {
        validarImport(importOperacio);
        saldo += importOperacio;
    }

    public void retirar(double importOperacio) {
        validarImport(importOperacio);
        if (importOperacio > saldo) {
            throw new IllegalStateException("Saldo insuficient");
        }
        saldo -= importOperacio;
    }

    public double saldo() { return saldo; }

    private void validarImport(double importOperacio) {
        if (importOperacio <= 0) {
            throw new IllegalArgumentException("L'import ha de ser positiu");
        }
    }
}
