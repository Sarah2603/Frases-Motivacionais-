// lista de frases motivacionais
const motivacionais = [
    "Acredite em si mesmo e tudo será possível.",
    "Tudo começa com um sonho.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "Seja a mudança que você quer ver no mundo.",
    "Nunca é tarde demais para ser o que você poderia ter sido.",
    "O sucesso não é final, o fracasso não é fatal: é a coragem de continuar que conta.",
    "Nas pessoas de capacidade limitada, a modéstia não passa de mera honestidade, mas em quem possui grande talento, é hipocrisia.",
    "A persistência é o caminho do êxito.",
    "A vida é uma aventura, corra o risco.",
    "O êxito é fácil de obter. O difícil é merecê-lo.",
  ];
  
  // função para escolher uma frase aleatória
  function escolherFrase() {
    return motivacionais[Math.floor(Math.random() * motivacionais.length)];
  }
  
  // função para exibir a frase na tela usando o DOM
  function exibirFrase(frase) {
    const div = document.getElementById("frase");
    div.textContent = frase;
  }
  
  // função para atualizar a frase
  function atualizarFrase() {
    const novaFrase = escolherFrase();
    exibirFrase(novaFrase);
  }
  
  // evento de clique do botão "Gerar frase"
  const btnGerar = document.getElementById("gerar");
  btnGerar.addEventListener("click", atualizarFrase);
  
  // gerar e exibir a primeira frase aleatória
  const primeiraFrase = escolherFrase();
  exibirFrase(primeiraFrase);
  