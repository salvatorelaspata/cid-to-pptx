export async function getEmployeeData(employeeId) {
  // Chiamata alla BAPI per dati generali
  // BAPI_EMPLOYEE_GETDATA

  // Chiamata per dati personali dettagliati
  // BAPI_PERSDATA_GETDETAIL

  // Lettura infotype 0002 (Dati personali)
  // HR_READ_INFOTYPE --> 0002

  // Lettura infotype 0001 (Assegnazione organizzativa)
  // HR_READ_INFOTYPE --> 0001

  // Lettura infoobject 0024 (Qualifiche)
  // HR_READ_INFOOBJECT --> 0024

  // Lettura infoobject 0022 (Istruzione)
  // HR_READ_INFOOBJECT --> 0022

  return {
    PERNR: employeeId ?? "00000001",
    ORGEH: "1000",
    PLANS: "HR Specialist",
    WERKS: "001",
    VORNA: "Mario",
    NACHN: "Rossi",
    GBDAT: "1980-01-01",
    QUALIFICATIONS: [
      {
        QUALIF_TYPE: "Lingue",
        QUALIF_LEVEL: "Inglese - Livello B2",
      },
      {
        QUALIF_TYPE: "Certificazioni",
        QUALIF_LEVEL: "Certificazione HR Specialist",
      },
    ],
    ISTRUCTIONS: [
      {
        SCHOOL: "Università di Bologna",
        DEGREE: "Laurea in Economia",
        GRADUATION_DATE: "2005-07-15",
      },
    ],
    TIMELINE_CAREER: [
      {
        ACTION_TYPE: "Assunzione",
        ACTION_DATE: "2005-07-15",
        ACTION_DESCRIPTION: "Assunzione come HR Specialist",
      },
      {
        ACTION_TYPE: "Promozione",
        ACTION_DATE: "2010-01-01",
        ACTION_DESCRIPTION: "Promozione a Senior HR Specialist",
      },
    ],
  };
}
