public class Comissions {
    static double calcular(double venda, char tipusClient) {
        if (tipusClient == 'A') {
            return venda * 0.10;
        }
        if (tipusClient == 'B') {
            return venda * 0.05;
        }
        return 0;
    }

    public static void main(String[] args) {
        double venda = 1000;
        char tipusClient = 'B';
        System.out.println("Comissió: " + calcular(venda, tipusClient));
    }
}
