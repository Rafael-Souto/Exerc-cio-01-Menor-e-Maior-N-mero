// Escreva	um	programa	para	que	sejam	informados	10	números	inteiros.	O	programa deve	informar	o	menor	e	o	maior	valor	informado.

var numero = parseInt(prompt('Digite um número: '))
menor = numero
maior = numero

// Consultando outros 9 números
for(x = 1; x <= 9; x++){
  numero = parseInt(prompt('Digite um número: '))

  if(numero > maior){
    maior = numero
  }
  else if(numero < menor){
    menor = numero
  }
}

alert('Menor: ' + menor)
alert('Maior: ' + maior)