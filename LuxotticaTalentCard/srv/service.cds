service PresentationService {

  // Azione per generare il PPTX di un singolo dipendente
function singlePPTX(employeeId: String) returns Binary;

//Azione per generare il PPTX massivo
function massivePPTX() returns Binary;

}
