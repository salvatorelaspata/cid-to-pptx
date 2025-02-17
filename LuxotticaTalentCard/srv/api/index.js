export async function getEmployeeData(employeeId) {
  // Simula il recupero dei dati da SAP (qui dati statici)
  const data = {
    "EmployeeTC": [
      {
        "employeeId": 0,
        "name": "Jonathan Biasella",
        "currentJobTitle": "currentJobTitle",
        "macroFunction": "macrof",
        "function": "function",
        "tenureInPos": "tenureInPos",
        "internalWorkExperience": [
          {
            "intExperienceRow": "Ha guidato un progetto interno di trasformazione digitale, coordinando team multifunzionali per migliorare l’efficienza operativa e ridurre i costi."
          }
        ],
        "currentHRBP": "currentHRBP",
        "business": "business",
        "region": "region",
        "country": "country",
        "location": "location",
        "performance": "performance",
        "CBPackage": "CBPackage",
        "lastSalaryIncrease": "lastSalaryIncrease",
        "lastLevelIncrease": "lastLevelIncrease",
        "experienceYears": "expYears",
        "experience": [
          {
            "experienceRow": "Ha definito strategie di espansione internazionale che hanno aumentato la presenza sul mercato globale, con una crescita sostanziale del fatturato in aree strategiche."
          }
        ],
        "companyTenure": "companyTenure",
        "age": "age",
        "mobility": "mobility",
        "currentLineManager": "currentLineManager",
        "educations": [
          {
            "education": "Laurea Magistrale in Economia con specializzazione in Finanza e Strategia Internazionale, con approfondimenti in gestione aziendale e analisi dei mercati globali."
          },
          {
            "education": "Laurea Triennale in Economia e Commercio, focalizzata su marketing strategico, sviluppo organizzativo e analisi economica applicata."
          }
        ],
        "languages": [
          {
            "language": "language1",
            "grade": "grade1"
          },
          {
            "language": "language2",
            "grade": "grade2"
          }
        ],
        "jobLevel": "jobLevel",
        "grade": "grade",
        "_pic": "picturebase64",
        "_picName": "pictureName"
      },
      {
        "employeeId": 1,  // Ho sostituito "currentId" con "employeeId"
        "name": "Salvatore La Spata",
        "currentJobTitle": "currentJobTitle",
        "macroFunction": "macrof",
        "function": "function",
        "tenureInPos": "tenureInPos",
        "internalWorkExperience": [
          {
            "intExperienceRow": "Ha guidato un progetto interno di trasformazione digitale, coordinando team multifunzionali per migliorare l’efficienza operativa e ridurre i costi."
          }
        ],
        "currentHRBP": "currentHRBP",
        "business": "business",
        "region": "region",
        "country": "country",
        "location": "location",
        "performance": "performance",
        "CBPackage": "CBPackage",
        "lastSalaryIncrease": "lastSalaryIncrease",
        "lastLevelIncrease": "lastLevelIncrease",
        "experienceYears": "expYears",
        "experience": [
          {
            "experienceRow": "Ha definito strategie di espansione internazionale che hanno aumentato la presenza sul mercato globale, con una crescita sostanziale del fatturato in aree strategiche."
          }
        ],
        "companyTenure": "companyTenure",
        "age": "age",
        "mobility": "mobility",
        "currentLineManager": "currentLineManager",
        "educations": [
          {
            "education": "Laurea Magistrale in Economia con specializzazione in Finanza e Strategia Internazionale, con approfondimenti in gestione aziendale e analisi dei mercati globali."
          },
          {
            "education": "Laurea Triennale in Economia e Commercio, focalizzata su marketing strategico, sviluppo organizzativo e analisi economica applicata."
          }
        ],
        "languages": [
          {
            "language": "language1",
            "grade": "grade1"
          },
          {
            "language": "language2",
            "grade": "grade2"
          }
        ],
        "jobLevel": "jobLevel",
        "grade": "grade",
        "_pic": "picturebase64",
        "_picName": "pictureName"
      }
    ]
  };

  // Se viene passato un employeeId, restituisci solo il dipendente corrispondente
  if (employeeId !== undefined) {
    const idNum = Number(employeeId);
    const employee = data.EmployeeTC.find(emp => emp.employeeId === idNum);
    return employee ? { EmployeeTC: [employee] } : { EmployeeTC: [] };
  }

  // Se non viene passato un employeeId, restituisci tutti i dati
  return data;
}
