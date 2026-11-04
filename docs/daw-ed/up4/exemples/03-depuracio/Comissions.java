public class Comissions {
    public static double calcular(double venda) {
        if (venda >= 1000) { // ERROR INTENCIONAT: el límit és de la branca baixa
            return venda * 0.08;
        }
        return venda * 0.05;
    }

    public static void main(String[] args) {
        System.out.println(calcular(1000));
        System.out.println(calcular(1200));
    }
}
