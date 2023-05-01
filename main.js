function traduzir() {
  const localSaida = document.getElementById("saida");
  const entrada = document.getElementById("fhorario");

  let saida = descodificar(entrada.value);
  localSaida.innerHTML = saida;
}

function descodificar(entradaValor) {
  entradaValor = entradaValor.toLowerCase();
  entradaValor = entradaValor.trim();

  if (entradaValor.indexOf(" ") === -1) {
    entradaValor = entradaValor.replace(/(.{4})/, "$1 ");
  }

  var reDias = /\b\d{1,2}/;
  var reTurno = /[a-z]/;
  var reHorario = /\d{1,2}\b/;
  var dias = entradaValor.match(reDias);
  var turno = entradaValor.match(reTurno);
  var horario = entradaValor.match(reHorario);

  if (dias == null || turno == null || horario == null) {
    return `<p>Código invalido</p>`;
  }

  const [primeiroDia, segundoDia] = entradaValor.split(" ");

  const horarioPrimeiroDia = entradaValor.substring(2, 5);
  const horarioSegundoDia = entradaValor.substring(7, 10);

  const primeiroHorarioPrimeiroDia = horarioPrimeiroDia[0];
  const segundoHorarioPrimeiroDia = horarioPrimeiroDia[1];

  const primeiroHorarioSegundoDia = horarioSegundoDia[0];
  const segundoHorarioSegundoDia = horarioSegundoDia[1];

  if (
    primeiroDia == undefined ||
    primeiroHorarioPrimeiroDia == undefined ||
    turno == null ||
    turno == undefined
  ) {
    return `<p>Código invalido</p>`;
  }

  let saida = "<p>";
  saida = saida + queDia(primeiroDia[0]) + "</p>";

  saida =
    saida +
    "<p>" +
    queHorario(turno, primeiroHorarioPrimeiroDia, segundoHorarioPrimeiroDia) +
    "</p>";

  if (segundoDia != null) {
    saida = saida + "<p>" + queDia(segundoDia[0]) + "</p>";
  }
  saida =
    saida +
    "<p>" +
    queHorario(turno, primeiroHorarioSegundoDia, segundoHorarioSegundoDia) +
    "</p>";

  saida = saida + "<p>" + queTurno(turno) + "</p>";

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

function queTurno(turno) {
  if (turno == "t") {
    return "<p>Tarde</p>";
  }
  if (turno == "m") {
    return "<p>Manhã</p>";
  }
  if (turno == "n") {
    return "<p>Noite</p>";
  }
}

function queHorario(
  turno,
  primeiroHorarioPrimeiroDia,
  segundoHorarioPrimeiroDia
) {
  if (turno == "t") {
    hora =
      "<p>" +
      queHorarioTarde(primeiroHorarioPrimeiroDia) +
      "</p><p>" +
      queHorarioTarde(segundoHorarioPrimeiroDia) +
      "</p>";
    return hora;
  }
  if (turno == "m") {
    hora =
      "<p>" +
      queHorarioManha(primeiroHorarioPrimeiroDia) +
      "</p><p>" +
      queHorarioManha(segundoHorarioPrimeiroDia) +
      "</p>";
    return hora;
  }
  if (turno == "n") {
    hora =
      "<p>" +
      queHorarioNoite(primeiroHorarioPrimeiroDia) +
      "</p><p>" +
      queHorarioNoite(segundoHorarioPrimeiroDia) +
      "</p>";
    return hora;
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
