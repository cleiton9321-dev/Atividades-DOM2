/* ============================================
   PARTE 1 — FILTER
   ============================================ */

// ----- Exercício 1 — Idades maiores de 18 -----
const inputIdades = document.getElementById('idades');
const btnFilter1 = document.getElementById('btnFilter1');
const resultado1 = document.getElementById('resultado1');

btnFilter1.addEventListener('click', () => {
  const valores = inputIdades.value.split(',').map(i => Number(i.trim()));
  const maiores = valores.filter(idade => idade >= 18);
  resultado1.textContent = `Maiores de idade: ${maiores.join(', ')}`;
});

// ----- Exercício 2 — Números pares -----
const inputNumeros = document.getElementById('numeros');
const btnFilter2 = document.getElementById('btnFilter2');
const resultado2 = document.getElementById('resultado2');

btnFilter2.addEventListener('click', () => {
  const numeros = inputNumeros.value.split(',').map(n => Number(n.trim()));
  const pares = numeros.filter(n => n % 2 === 0);
  resultado2.textContent = `Números pares: ${pares.join(', ')}`;
});

// ----- Aluno 1 — Nomes que começam com A -----
const inputNomesA = document.getElementById('nomesA');
const btnA = document.getElementById('btnA');
const resultadoA = document.getElementById('resultadoA');

btnA.addEventListener('click', () => {
  const nomes = inputNomesA.value.split(',').map(n => n.trim());
  const comA = nomes.filter(n => n.toLowerCase().startsWith('a'));
  resultadoA.textContent = comA.length
    ? `Nomes com A: ${comA.join(', ')}`
    : 'Nenhum nome começa com A.';
});

// ----- Aluno 2 — Notas maiores ou iguais a 7 -----
const inputNotas = document.getElementById('notas');
const btnNotas = document.getElementById('btnNotas');
const resultadoNotas = document.getElementById('resultadoNotas');

btnNotas.addEventListener('click', () => {
  const notas = inputNotas.value.split(',').map(n => Number(n.trim()));
  const aprovados = notas.filter(n => n >= 7);
  resultadoNotas.textContent = `Notas aprovadas: ${aprovados.join(', ')}`;
});

// ----- Aluno 3 — Múltiplos de 3 -----
const inputMult3 = document.getElementById('mult3');
const btnMult3 = document.getElementById('btnMult3');
const resultadoMult3 = document.getElementById('resultadoMult3');

btnMult3.addEventListener('click', () => {
  const numeros = inputMult3.value.split(',').map(n => Number(n.trim()));
  const multiplos = numeros.filter(n => n % 3 === 0);
  resultadoMult3.textContent = `Múltiplos de 3: ${multiplos.join(', ')}`;
});


/* ============================================
   PARTE 2 — FIND
   ============================================ */

// ----- Exercício 1 — Encontrar "maçã" -----
const inputFrutas = document.getElementById('frutas');
const btnFind1 = document.getElementById('btnFind1');
const resultadoFind1 = document.getElementById('resultadoFind1');

btnFind1.addEventListener('click', () => {
  const frutas = inputFrutas.value.split(',').map(f => f.trim().toLowerCase());
  const fruta = frutas.find(f => f === 'maçã');
  resultadoFind1.textContent = fruta
    ? `A primeira maçã encontrada é: ${fruta}`
    : 'Nenhuma maçã encontrada.';
});

// ----- Exercício 2 — Primeiro nome com mais de 5 letras -----
const inputNomesFind = document.getElementById('nomesFind');
const btnFind2 = document.getElementById('btnFind2');
const resultadoFind2 = document.getElementById('resultadoFind2');

btnFind2.addEventListener('click', () => {
  const nomes = inputNomesFind.value.split(',').map(n => n.trim());
  const nome = nomes.find(n => n.length > 5);
  resultadoFind2.textContent = nome
    ? `Primeiro nome com mais de 5 letras: ${nome}`
    : 'Nenhum nome com mais de 5 letras encontrado.';
});

// ----- Aluno 1 — Primeiro número negativo -----
const inputNeg = document.getElementById('negativos');
const btnNeg = document.getElementById('btnNeg');
const resultadoNeg = document.getElementById('resultadoNeg');

btnNeg.addEventListener('click', () => {
  const numeros = inputNeg.value.split(',').map(n => Number(n.trim()));
  const negativo = numeros.find(n => n < 0);
  resultadoNeg.textContent = negativo !== undefined
    ? `Primeiro número negativo: ${negativo}`
    : 'Nenhum número negativo encontrado.';
});

// ----- Aluno 2 — Primeiro preço acima de 100 -----
const inputPrecosFind = document.getElementById('precosFind');
const btnPreco = document.getElementById('btnPreco');
const resultadoPreco = document.getElementById('resultadoPreco');

btnPreco.addEventListener('click', () => {
  const precos = inputPrecosFind.value.split(',').map(p => Number(p.trim()));
  const caro = precos.find(p => p > 100);
  resultadoPreco.textContent = caro !== undefined
    ? `Primeiro preço acima de 100: R$${caro}`
    : 'Nenhum preço acima de 100.';
});

// ----- Aluno 3 — Primeira palavra com Z -----
const inputPalavrasZ = document.getElementById('palavrasZ');
const btnZ = document.getElementById('btnZ');
const resultadoZ = document.getElementById('resultadoZ');

btnZ.addEventListener('click', () => {
  const palavras = inputPalavrasZ.value.split(',').map(p => p.trim());
  const comZ = palavras.find(p => p.toLowerCase().includes('z'));
  resultadoZ.textContent = comZ
    ? `Primeira palavra com Z: ${comZ}`
    : 'Nenhuma palavra com Z encontrada.';
});


/* ============================================
   PARTE 3 — REDUCE
   ============================================ */

// ----- Exercício 1 — Somar números -----
const inputNumerosReduce1 = document.getElementById('numerosReduce1');
const btnReduce1 = document.getElementById('btnReduce1');
const resultadoReduce1 = document.getElementById('resultadoReduce1');

btnReduce1.addEventListener('click', () => {
  const numeros = inputNumerosReduce1.value.split(',').map(n => Number(n.trim()));
  const soma = numeros.reduce((acc, atual) => acc + atual, 0);
  resultadoReduce1.textContent = `Soma total: ${soma}`;
});

// ----- Exercício 2 — Total da compra -----
const inputPrecos = document.getElementById('precos');
const btnReduce2 = document.getElementById('btnReduce2');
const resultadoReduce2 = document.getElementById('resultadoReduce2');

btnReduce2.addEventListener('click', () => {
  const precos = inputPrecos.value.split(',').map(p => Number(p.trim()));
  const total = precos.reduce((acc, atual) => acc + atual, 0);
  resultadoReduce2.textContent = `Total da compra: R$${total}`;
});

// ----- Aluno 1 — Média de idades -----
const inputIdadesR = document.getElementById('idadesReduce');
const btnMedia = document.getElementById('btnMedia');
const resultadoMedia = document.getElementById('resultadoMedia');

btnMedia.addEventListener('click', () => {
  const idades = inputIdadesR.value.split(',').map(n => Number(n.trim()));
  const soma = idades.reduce((acc, atual) => acc + atual, 0);
  const media = idades.length ? (soma / idades.length).toFixed(1) : 0;
  resultadoMedia.textContent = `Média das idades: ${media}`;
});

// ----- Aluno 2 — Produto (multiplicação) de todos -----
const inputProduto = document.getElementById('produto');
const btnProduto = document.getElementById('btnProduto');
const resultadoProduto = document.getElementById('resultadoProduto');

btnProduto.addEventListener('click', () => {
  const numeros = inputProduto.value.split(',').map(n => Number(n.trim()));
  const produto = numeros.reduce((acc, atual) => acc * atual, 1);
  resultadoProduto.textContent = `Produto: ${produto}`;
});

// ----- Aluno 3 — Juntar nomes em uma string -----
const inputJuntar = document.getElementById('juntarNomes');
const btnJuntar = document.getElementById('btnJuntar');
const resultadoJuntar = document.getElementById('resultadoJuntar');

btnJuntar.addEventListener('click', () => {
  const nomes = inputJuntar.value
    .split(',')
    .map(n => n.trim())
    .filter(n => n);
  const frase = nomes.reduce((acc, nome, i) => {
    if (i === 0) return nome;
    if (i === nomes.length - 1) return `${acc} e ${nome}`;
    return `${acc}, ${nome}`;
  }, '');
  resultadoJuntar.textContent = frase || 'Nenhum nome digitado.';
});


/* ============================================
   PARTE 4 — FOREACH
   ============================================ */

// ----- Exercício 1 — Saudação para cada nome -----
const inputNomesFor = document.getElementById('nomesFor');
const btnForEach1 = document.getElementById('btnForEach1');
const resultadoForEach1 = document.getElementById('resultadoForEach1');

btnForEach1.addEventListener('click', () => {
  resultadoForEach1.textContent = '';
  const nomes = inputNomesFor.value.split(',').map(n => n.trim());
  nomes.forEach(nome => {
    const p = document.createElement('p');
    p.textContent = `Olá, ${nome}!`;
    resultadoForEach1.appendChild(p);
  });
});

// ----- Exercício 2 — Dobro de cada número -----
const inputNumerosFor = document.getElementById('numerosFor');
const btnForEach2 = document.getElementById('btnForEach2');
const resultadoForEach2 = document.getElementById('resultadoForEach2');

btnForEach2.addEventListener('click', () => {
  resultadoForEach2.textContent = '';
  const numeros = inputNumerosFor.value.split(',').map(n => Number(n.trim()));
  numeros.forEach(num => {
    const p = document.createElement('p');
    p.textContent = `${num} x 2 = ${num * 2}`;
    resultadoForEach2.appendChild(p);
  });
});

// ----- Aluno 1 — "Eu gosto de [fruta]" -----
const inputFrutasFor = document.getElementById('frutasFor');
const btnFruta = document.getElementById('btnFruta');
const resultadoFruta = document.getElementById('resultadoFruta');

btnFruta.addEventListener('click', () => {
  resultadoFruta.textContent = '';
  const frutas = inputFrutasFor.value.split(',').map(f => f.trim());
  frutas.forEach(fruta => {
    const p = document.createElement('p');
    p.textContent = `Eu gosto de ${fruta}`;
    resultadoFruta.appendChild(p);
  });
});

// ----- Aluno 2 — Preço com desconto -----
const inputDesconto = document.getElementById('desconto');
const btnDesconto = document.getElementById('btnDesconto');
const resultadoDesconto = document.getElementById('resultadoDesconto');

btnDesconto.addEventListener('click', () => {
  resultadoDesconto.textContent = '';
  const precos = inputDesconto.value.split(',').map(p => Number(p.trim()));
  precos.forEach(preco => {
    const comDesconto = (preco * 0.9).toFixed(2);
    const p = document.createElement('p');
    p.textContent = `Preço: R$${preco.toFixed(2)} → Com desconto: R$${comDesconto}`;
    resultadoDesconto.appendChild(p);
  });
});

// ----- Aluno 3 — Aprovado ou Reprovado -----
const inputNotasFor = document.getElementById('notasFor');
const btnSituacao = document.getElementById('btnSituacao');
const resultadoSituacao = document.getElementById('resultadoSituacao');

btnSituacao.addEventListener('click', () => {
  resultadoSituacao.textContent = '';
  const notas = inputNotasFor.value.split(',').map(n => Number(n.trim()));
  notas.forEach((nota, i) => {
    const p = document.createElement('p');
    const status = nota >= 7 ? 'Aprovado' : 'Reprovado';
    p.textContent = `Aluno ${i + 1}: nota ${nota} → ${status}`;
    resultadoSituacao.appendChild(p);
  });
});