function redirecionar(opcao1, opcao2) {
    var escolha;
  
    do {
      escolha = Number(prompt('Faça sua escolha:'));
  
      if (escolha === 1) {
        location.replace(opcao1);
      } else if (escolha === 2) {
        location.replace(opcao2);
      }
    } while (![1, 2].includes(escolha));
  }