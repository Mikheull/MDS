from PySide6 import QtWidgets
from currency_converter import CurrencyConverter

class App(QtWidgets.QWidget) : 

    def __init__(self):
        super().__init__()
        self.c = CurrencyConverter()
        self.setWindowTitle("Convertisseur de devises")
        self.create_layout()
        
        self.handler()
       

    def create_layout(self):
        self.layout = QtWidgets.QHBoxLayout(self)
        self.devise_from = QtWidgets.QComboBox()
        self.int_from = QtWidgets.QDoubleSpinBox()
        self.devise_to = QtWidgets.QComboBox()
        self.int_to = QtWidgets.QDoubleSpinBox()
        self.reverse_button = QtWidgets.QPushButton("Inverser les devises")

        self.layout.addWidget(self.devise_from)
        self.layout.addWidget(self.int_from)
        self.layout.addWidget(self.devise_to)
        self.layout.addWidget(self.int_to)
        self.layout.addWidget(self.reverse_button)

        self.devise_from.addItems(sorted(self.c.currencies))
        self.devise_from.setCurrentText("LVL")
        self.int_from.setRange(0, 9999999999)
        self.int_from.setValue(100)
        self.devise_to.addItems(sorted(self.c.currencies))
        self.devise_to.setCurrentText("EUR")
        self.int_to.setRange(0,9999999999)

        self.calc()


    def handler(self):
        self.reverse_button.clicked.connect(self.reverse)
        self.devise_from.activated.connect(self.calc)
        self.devise_to.activated.connect(self.calc)
        self.int_from.valueChanged.connect(self.calc)
        self.int_to.valueChanged.connect(self.calc)


    def reverse(self):
        _from = self.devise_from.currentText()
        _to = self.devise_to.currentText()

        self.devise_from.setCurrentText(_to)
        self.devise_to.setCurrentText(_from)

        self.calc()


    def calc(self):
        montant = self.int_from.value()
        _from = self.devise_from.currentText()
        _to = self.devise_to.currentText()

        try : 
            resultat = self.c.convert(montant, _from, _to)
        except : 
            print(f"Le taux de change n'a pas été trouvé")
            self.reverse()
        else : 
            self.int_to.setValue(resultat)
