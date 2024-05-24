//Atividade 1 - Escreva um programa que receba duas variáveis de números inteiros e realize as quatro operações básicas
// (adição, subtração, multiplicação e divisão). Mostre os resultados.

var numeroAtv1 = 25
var numeroAtv2 = 100

console.log(numeroAtv1,"+"+numeroAtv2, "=", numeroAtv1 + numeroAtv2 )
console.log(numeroAtv1,"-"+numeroAtv2, "=", numeroAtv1 - numeroAtv2 )
console.log(numeroAtv1,"/"+numeroAtv2, "=", numeroAtv1 / numeroAtv2 )
console.log(numeroAtv1,"*"+numeroAtv2, "=", numeroAtv1 * numeroAtv2 )

console.log("---------------------------------------------------------------------")

//2. Crie um programa que converta uma temperatura de Fahrenheit  para Celsius. A fórmula de conversão é: C = (F - 32 ) / 1,8
 
var F = 96

console.log("C","= (",F," - 32)/1,8:",C = (F - 32) / 1.8 )

console.log("---------------------------------------------------------------------")

//3. Crie um programa que converta uma temperatura de Celsius para Fahrenheit. A fórmula de conversão é: F = C x (9/5) + 32.

var C = 26

console.log("F", "= ",C,"x (9/5) + 32:", F = C * (9/5) + 32)

console.log("---------------------------------------------------------------------")

// 4. Faça um programa que converta metros para centímetros. A variavel deve receber o valor em metros.

var metros = 2
var centimetros = (metros * 100)
console.log("Eu tenho ",metros," metros que é igual à",centimetros,"centimetros")

console.log("---------------------------------------------------------------------")

//5. Crie um programa que calcule o preço final de um produto após um desconto de 10%, a variável deve receber o valor total da venda.

var valorTotal = 50
var valorDesconto = (valorTotal * 0.9)

console.log("Vendo uma camisa que custa R$",valorTotal,"reais, caso queira desconto de 10%, o valor será de R$", valorDesconto,"reais no total.")