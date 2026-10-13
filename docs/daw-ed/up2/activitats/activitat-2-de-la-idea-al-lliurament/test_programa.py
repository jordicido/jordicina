import unittest

from programa import LLINDAR_ALERTA, calcular_resum, validar_temperatures


class MonitorTemperaturesTest(unittest.TestCase):
    def test_calcula_minima_mitjana_i_maxima(self):
        resum = calcular_resum([18, 21, 24, 19, 27])

        self.assertEqual(resum["minima"], 18)
        self.assertEqual(resum["maxima"], 27)
        self.assertAlmostEqual(resum["mitjana"], 21.8)

    def test_llindar_exactament_no_es_alerta(self):
        resum = calcular_resum([20, LLINDAR_ALERTA])

        self.assertEqual(resum["estat"], "temperatura normal")

    def test_superar_llindar_es_alerta(self):
        resum = calcular_resum([20, LLINDAR_ALERTA + 1])

        self.assertEqual(resum["estat"], "temperatura elevada")

    def test_rebutja_lectura_fora_de_rang(self):
        with self.assertRaises(ValueError):
            validar_temperatures([18, 75])

    def test_rebutja_una_llista_buida(self):
        with self.assertRaises(ValueError):
            validar_temperatures([])


if __name__ == "__main__":
    unittest.main()
