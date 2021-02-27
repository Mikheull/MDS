from PySide6 import QtWidgets
import module


app = QtWidgets.QApplication([])
windows = module.App()
windows.show()
app.exec_()