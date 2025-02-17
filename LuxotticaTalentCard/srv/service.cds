service PresentationService {

  // Azione per generare il PPTX di un singolo dipendente
function singlePPTX(employeeId: String) returns Binary;
function massivePPTX() returns Binary;
function sum (x:Integer, y:Integer) returns Integer;

}
