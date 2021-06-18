
/**
 * Nome da primitiva : createVacationrequestupdate
 * Nome do dominio : hcm
 * Nome do serviço : vacationmanagement
 * Nome do tenant : trn60252133
 **/

exports.handler = async (event) => {
    return sendRes(200, JSON.parse(event.body));
};

const sendRes = (status, body) => {
  body.helloWorld = "Olá mundo!";

  // Obtendo as varáveis de ambiente
  // var env = process.env;
  // var password = env["<NOME_DA_VARIÁVEL>"]

  var response = {
    statusCode: status,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  };

  console.log(body);

  return response;
};
