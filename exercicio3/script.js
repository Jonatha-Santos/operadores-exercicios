console.log(5 > 20 && 5 < 2)

console.log(5 === 5 || 5 === "5")

console.log(! (20 > 50))  // 20 é maior que 50? FALSE, PORÉM EU ESTOU DIZENDO QUE NÃO É "!"  // "!" ALTERA A RESPOSTA

console.log(! ((20 > 50)  || (50 > 60)))

/////////////////////////////////////////////////// PARTE 2 ///////////////////////////////////////////////////////////////////

var totalSalario = 0

const fulano = {
    nome: "Fulano de Silva",
    cpf: "000.000.000-00",
    nascimento: "10/02/1990",
    logradouro: "Rua dos bobos nº 0",
    filhos: 2,
    habilitado: true,
    profissao: "Vendedor",
    salario: 2000,
    contratado: 2019
}

const beneficios = {
    comissao: 0.1,
    auxilioCreche: 45.50,
    inss: 0.05,
}

const vendas = {
    janeiro: 5784.50,
    fevereiro: 3418.41,
    março: 4124.10,
    abril: 1874,
    maio: 7000,
    junho: 9450,
}

console.log(`O salário mais auxílio é: ${fulano.salario + beneficios.auxilioCreche * fulano.filhos} `)

console.log(`Comissão de janeiro: ${vendas.janeiro * beneficios.comissao}`)

console.log(`Será descontado em janeiro pelo INSS: ${((fulano.salario + vendas.janeiro * beneficios.comissao) * beneficios.inss).toFixed(2)}`)

for (let index in vendas) {
    let salarioLiquido = Number((fulano.salario + vendas[index] * beneficios.comissao + beneficios.auxilioCreche * fulano.filhos - (fulano.salario + vendas[index] * beneficios.comissao) * beneficios.inss).toFixed(2)) //salario fixo + comissao + auxilio de creche - INSS
    console.log(`O salário do mês ${index}: ${salarioLiquido}`)
    totalSalario = Number(totalSalario + salarioLiquido)
}
var mediaSalario = Number((totalSalario / 6).toFixed(2))
console.log(`A média do salário em seis meses é: ${mediaSalario} ` )