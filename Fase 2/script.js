function trocarFoto(foto) {
    document.getElementById('foto-principal').src = foto;
  }
  
  function adicionarUC() {
    const novaUC = prompt("Digite o nome da nova UC:");
    if (novaUC) {
      const tabela = document.getElementById('ucs');
      const linha = tabela.insertRow();
      const celulaNome = linha.insertCell(0);
      const celulaAcoes = linha.insertCell(1);
  
      celulaNome.textContent = novaUC;
      celulaAcoes.innerHTML = `
        <button onclick="removerUC(this)">Remover</button>
        <button onclick="moverCima(this)">↑</button>
        <button onclick="moverBaixo(this)">↓</button>
      `;
    }
  }
  
  function removerUC(botao) {
    const linha = botao.parentNode.parentNode;
    linha.remove();
  }
  
  function moverCima(botao) {
    const linha = botao.parentNode.parentNode;
    const anterior = linha.previousElementSibling;
    if (anterior && anterior.rowIndex !== 0) {
      linha.parentNode.insertBefore(linha, anterior);
    }
  }
  
  function moverBaixo(botao) {
    const linha = botao.parentNode.parentNode;
    const proxima = linha.nextElementSibling;
    if (proxima) {
      linha.parentNode.insertBefore(proxima, linha);
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const cpfInput = document.getElementById('cpf');
    const emailInput = document.getElementById('email');
  
    cpfInput.addEventListener('input', () => {
      let cpf = cpfInput.value.replace(/\D/g, '');
      if (cpf.length > 11) {
        cpf = cpf.slice(0, 11);
      }
      cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
      cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
      cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
      cpfInput.value = cpf;
    });
  
    cpfInput.addEventListener('blur', () => {
      const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
      if (!cpfRegex.test(cpfInput.value)) {
        alert("CPF inválido! Formato correto: 000.000.000-00");
      }
    });
  
    emailInput.addEventListener('blur', () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value)) {
        alert("E-mail inválido!");
      }
    });
  
    document.getElementById("adicionar-descricao").addEventListener('click', () => {
      const novaDescricao = document.getElementById("nova-descricao").value;
      if (novaDescricao.trim() !== "") {
        const paragrafo = document.createElement("p");
        paragrafo.textContent = novaDescricao;
        document.getElementById("descricao-pessoal-extra").appendChild(paragrafo);
        document.getElementById("nova-descricao").value = "";
      }
    });
  });
  