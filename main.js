function traduzir() {
  const localSaida = document.getElementById("saida");
  const entrada = document.getElementById("fhorario");

  let saida = descodificar(entrada.value);
  localSaida.innerHTML = saida;
}

function descodificar(entradaValor) {
  entradaValor = entradaValor.toLowerCase();

  var reDias = /\b\d{1,2}/;
  var reTurno = /[a-z]/;
  var reHorario = /\d{1,2}\b/;
  var dias = entradaValor.match(reDias);
  var turno = entradaValor.match(reTurno);
  var horario = entradaValor.match(reHorario);

  if (dias == null || turno == null || horario == null) {
    return `<p>Código invalido</p>`;
  }

  primeiroDia = dias[0][0];
  segundoDia = dias[0][1];

  primeiroHorario = horario[0][0];
  segundoHorario = horario[0][1];

  if (
    primeiroDia == undefined ||
    primeiroHorario == undefined ||
    turno == null ||
    turno == undefined
  ) {
    return `<p>Código invalido</p>`;
  }

  let saida = "<p>";
  saida = saida + queDia(primeiroDia);
  if (segundoDia != null) {
    saida = saida + "<p>" + queDia(segundoDia) + "</p>";
  }
  saida = saida + "</p>";

  saida =
    saida + "<p>" + queTurno(turno, primeiroHorario, segundoHorario) + "</p>";

  return `${saida}`;
}

function queDia(numDia) {
  switch (numDia) {
    case "1": {
      return "Primeiro dia inválido";
    }
    case "2": {
      return "Segunda";
    }
    case "3": {
      return "Terça";
    }
    case "4": {
      return "Quarta";
    }
    case "5": {
      return "Quinta";
    }
    case "6": {
      return "Sexta";
    }
    case "7": {
      return "Sábado";
    }
  }
}

function queTurno(turno, primeiroHorario, segundoHorario) {
  if (turno == "t") {
    hora =
      "<p>" +
      queHorarioTarde(primeiroHorario) +
      "</p><p>" +
      queHorarioTarde(segundoHorario) +
      "</p>";
    return hora + "<p>Tarde</p>";
  }
  if (turno == "m") {
    hora =
      "<p>" +
      queHorarioManha(primeiroHorario) +
      "</p><p>" +
      queHorarioManha(segundoHorario) +
      "</p>";
    return hora + "<p>Manhã</p>";
  }
  if (turno == "n") {
    hora =
      "<p>" +
      queHorarioNoite(primeiroHorario) +
      "</p><p>" +
      queHorarioNoite(segundoHorario) +
      "</p>";
    return hora + "<p>Noite</p>";
  }
}

function queHorarioManha(horario) {
  switch (horario) {
    case "1": {
      return "7:00 - 8:00";
    }
    case "2": {
      return "8:00 - 9:00";
    }
    case "3": {
      return "9:00 - 10:00";
    }
    case "4": {
      return "10:00 - 11:00";
    }
    case "5": {
      return "11:00 - 12:00";
    }
    case "6": {
      return "12:00 - 13:00";
    }
    default: {
      return "";
    }
  }
}

function queHorarioTarde(horario) {
  switch (horario) {
    case "1": {
      return "13:00 - 14:00";
    }
    case "2": {
      return "14:00 - 15:00";
    }
    case "3": {
      return "15:00 - 16:00";
    }
    case "4": {
      return "16:00 - 17:00";
    }
    case "5": {
      return "17:00 - 18:00";
    }
    default: {
      return "";
    }
  }
}

function queHorarioNoite(horario) {
  switch (horario) {
    case "1": {
      return "18:30 - 19:20";
    }
    case "2": {
      return "19:20 - 20:10";
    }
    case "3": {
      return "20:10 - 21:00";
    }
    case "4": {
      return "21:00 - 21:50";
    }
    default: {
      return "";
    }
  }
}
