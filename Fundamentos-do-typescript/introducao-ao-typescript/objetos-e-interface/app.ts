interface Pessoa {
  nome: string,
  idade: number,
  // Tipo opcional
  profissao?: string
}

const pessoa: Pessoa = {
  nome: 'Fernando',
  idade: 23
}

const outraPessoa: Pessoa = {
  nome: 'Paulo',
  idade: 25,
  profissao: 'Desenvolvedor'
}

const arrayPessoa:Array<Pessoa> = [
  // tambem pode ser Pessoa[]
  pessoa,
  outraPessoa
]

const arrayNum: number[] = [
  1,
  2,
  3
]

const arrayString: Array<string> = [
  '1', '2', '3'
]