import React, { Component } from "react";
import PerguntaResposta from "../components/perguntaResposta";
import FibonacciVerificador from "../components/FibonacciVerificador";

import "../App.css";
import InverterString from "../components/InverterString";

class Quest1 extends Component {
  render() {
    return (
      <>
        <div>
          <div>
            <PerguntaResposta
              pergunta="Observe o trecho de código abaixo:
            
            int INDICE = 13, SOMA = 0, K = 0;
            
            enquanto K < INDICE faça
            
            {
            
            K = K + 1;
            
            SOMA = SOMA + K;
            
          }
          
          imprimir(SOMA);
          
          
          
          Ao final do processamento, qual será o valor da variável SOMA?"
              resposta="A soma é 91, o retorno desse código é 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13"
            />
          </div>
        </div>
        <div>
          <div>
            <PerguntaResposta
              pergunta="Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
              IMPORTANTE:

Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;"
            />
          </div>
          <FibonacciVerificador />
          <div>
            <PerguntaResposta
              pergunta="Descubra a lógica e complete o próximo elemento:
              "
              resposta="a) 1, 3, 5, 7, 9;

              b) 2, 4, 8, 16, 32, 64, 128;
              
              c) 0, 1, 4, 9, 16, 25, 36;
              
              d) 4, 16, 36, 64, 100;
              
              e) 1, 1, 2, 3, 5, 8, 12;
              
              f) 2,10, 12, 16, 17, 18, 19, 20? "
            />
          </div>
          <div>
            <PerguntaResposta
              pergunta="4 - Dois veículos (um carro e um caminhão) saem respectivamente de cidades opostas pela mesma rodovia. O carro de Ribeirão Preto em direção a Franca, a uma velocidade constante de 110 km/h e o caminhão de Franca em direção a Ribeirão Preto a uma velocidade constante de 80 km/h. Quando eles se cruzarem na rodovia, qual estará mais próximo a cidade de Ribeirão Preto?
              IMPORTANTE:

a) Considerar a distância de 100km entre a cidade de Ribeirão Preto <-> Franca.

b) Considerar 2 pedágios como obstáculo e que o caminhão leva 5 minutos a mais para passar em cada um deles e o carro possui tag de pedágio (Sem Parar)

c) Explique como chegou no resultado."
              resposta="Carro leva 54 min para chegar. formula d (distância) = v (velocidade) × t (tempo de deslocamento).
              o resultado do carro deu 0,90...pensando assim, se fizer 200kmh em uma hora ele vai gastar 30 min ou 0,5..então eu fiz uma regra de 3 para saber quantos minutor 0,90 vale e cheguei nos 54 minutos.
              Caminhão leva 1 hora e 8 minutos, fiz a mesma lógica do carro, porem eu subtrair 10 min do pedágio. 100=80xT no final deu 1,25 e fiz uma regra de 3 para achar o tempo certo usando 200km/h como base.
              "
            />
          </div>
          <div>
            <PerguntaResposta
              pergunta="Escreva um programa que inverta os caracteres de um string:
              "
              resposta=""
            />
            <InverterString />
          </div>
        </div>
      </>
    );
  }
}

export default Quest1;
