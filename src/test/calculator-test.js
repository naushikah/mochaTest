const chai = require('chai');
const calculator = require('../demo1/calculator');
const assert = chai.assert;
const expect = chai.expect;

//describe what will be done
describe('TDD - Operações da calculadora', () => {
  //test chain and test case
  it('Teste: somar 02 números', () => {
    //what do we want to test
    assert.equal(calculator.addition(10,5), 15);
  });

  it('Teste: subtrair 02 números', () => {
    assert.equal(calculator.subtraction(10,5), 5);
  });

  it('Teste: multiplicar 02 números', () => {
    assert.equal(calculator.multiplication(10,5), 50);
  });

  it('Teste: dividir 02 números', () => {
    assert.equal(calculator.division(10,5), 2);
  });

  it('Teste: Não é possível dividir por zero', () => {
    expect(calculator.division(10,0)).to.equal(null);
  });
});

describe('TDD - outros testes com assertions - Chai ', () => {
  it('Teste: verificar se o número é maior ou igual', () => {
    assert.isAtLeast(6, 2, '6 é maior do que 2');
    assert.isAtLeast(7, 7, '7 é igual a 7');
  });
  
  it('Teste: verificar se o número é menor', () => {
    assert.isBelow(-15,12, '-15 é menor do que 12');
  });
});



