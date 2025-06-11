/*
//Criação timeline GSAP Com animções sincronizadas com scroll//
var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".two",
      start: "0% 95%",
      end: "70% 50%",
      scrub: true,
    }
  });

 tl.to(
      '#fanta',
      {
          top: '120%', //Move o elemento com id 'fanta' para 120% do topo
          left: '0%',
          ease: 'power1.out'
      },
      'orange'
  );//Nomeando este trecho de animação como 'orange'' para sincronização

  tl.to(
      '#orange',
      {
          top: '160%', //Move o elemento com id 'laranja-cortada' para 160% do topo
          left: '23%', //Move o elemento para 23% a esquerda
      },
      'orange'
  );//Nomeando este trecho de animação como 'orange'

  tl.to(
    '#laranja',
    {
        width: '15%', //Altera a largura do elemento com id 'orange' para 15%
        top: '160%', //Move o elemento com id 'laranja-cortada' para 160% do topo
        right: '10%', //Move o elemento para 23% a esquerda
    },
    'orange'
);//Nomeando este trecho de animação como 'orange'

tl.to(
    '#folha',
    {
        top: '110%', //Move o elemento com id 'laranja-cortada' para 160% do topo
        rotate: '530deg', //Gira a folha 530º
        left: '70%', //Move o elemento para 23% a esquerda
    },
    'orange'
);//Nomeando este trecho de animação como 'orange'

tl.to(
    '#folha2',
    {
        top: '110%', //Move o elemento com id 'laranja-cortada' para 160% do topo
        rotate: '530deg', //Gira a folha 530º
        left: '0%', //Move o elemento para 23% a esquerda
    },
    'orange'
);//Nomeando este trecho de animação como 'orange'

//CRIANDO OUTRA TIMELINE PARA A SEGUNDA ANIMAÇÃO

var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".three",
      start: "0% 95%",
      end: "20% 50%", //Fim da animação (topo da tela atinge 50% da altura quando estiver 20% da sessão three)
      scrub: true,
    }
  });
  tl2.from(
    '.lemon1',
    {
        rotate: '-90deg', //Inicia o elemento com classe 'lemon1' rotacionado -90º
        top: '100%', //Inicia o elemento fora da tela,à esquerda (100%)
        left: '-110%', //Inicia o elemnto ligeiramente abaixo da tela (-110%)
    },
    'ca'
);//Nomeando este trecho de animação como 'ca' para sincronização

tl2.from(
    '#cocacola',
    {
        rotate: '-90deg', //Inicia o elemento com classe 'cocacola' rotacionado -90º
        top: '100%', //Inicia o elemento fora da tela,à esquerda (100%)
        left: '-110%', //Inicia o elemnto ligeiramente abaixo da tela (-110%)
    },
    'ca'
);//Nomeando este trecho de animação como 'ca' para sincronização

tl2.from(
    '.lemon2',
    {
        rotate: '90deg', //Inicia i elemento com classe 'lemon2' rotacionado 90º
        top: '100%', //Inicia o elemento fora da tela,à esquerda (100%)
        left: '110%', //Inicia o elemnto ligeiramente abaixo da tela (110%)
    },
    'ca'
);//Nomeando este trecho de animação como 'ca' para sincronização

tl2.from(
    '#pepsi',
    {
        rotate: '90deg', //Inicia o elemento com classe 'pepsi' rotacionado 90º
        top: '100%', //Inicia o elemento fora da tela,à esquerda (100%)
        left: '110%', //Inicia o elemnto ligeiramente abaixo da tela (110%)
    },
    'ca'
);//Nomeando este trecho de animação como 'ca' para sincronização

tl2.to(
    '#laranja-cortada',
    {
        width: '18%', //Aumenta a largura do elemento com id 'laranja-cortada' para 18%
        top: '204%', //Move o elemento para 204% do topo
        left: '41.5%', //Move o elemento para 42% para esquerda
    },
    'ca'
);//Nomeando este trecho de animação como 'ca'

tl2.to(
    '#fanta',
    {
        width: '35%', //Aumenta a largura do elemento com id 'laranja-cortada' para 18%
        top: '210%', //Move o elemento para 204% do topo
        left: '33%', //Move o elemento para 42% para esquerda
    },
    'ca'
);//Nomeando este trecho de animação como 'ca'//*/

// TIMELINE 1 – Animações sincronizadas com scroll na seção ".two"
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".two",
    start: "0% 95%",
    end: "70% 50%",
    scrub: 0.7, // deixa a animação mais suave
  }
});

// Grupo de animações sincronizadas com o label 'orange'
tl.to('#fanta', {
    top: '120%',
    left: '0%',
    ease: 'power1.out'
}, 'orange');

tl.to('#orange', {
    top: '160%',
    left: '23%',
    ease: 'power1.out'
}, 'orange');

tl.to('#laranja', {
    width: '15%',
    top: '160%',
    right: '10%',
    ease: 'power1.out'
}, 'orange');

tl.to('#folha', {
    top: '110%',
    rotate: '530deg',
    left: '70%',
    ease: 'power1.out'
}, 'orange');

tl.to('#folha2', {
    top: '110%',
    rotate: '530deg',
    left: '0%',
    ease: 'power1.out'
}, 'orange');


// TIMELINE 2 – Animações sincronizadas com scroll na seção ".three"
var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".three",
    start: "0% 95%",
    end: "20% 50%",
    scrub: 0.7,
  }
});

// Grupo de animações sincronizadas com o label 'ca'
tl2.from('.lemon1', {
    rotate: '-90deg',
    top: '100%',
    left: '-100%',
    ease: 'power2.out'
}, 'ca');

tl2.from('#cocacola', {
    rotate: '-90deg',
    top: '100%',
    left: '-100%',
    ease: 'power2.out'
}, 'ca');

tl2.from('.lemon2', {
    rotate: '90deg',
    top: '100%',
    left: '100%',
    ease: 'power2.out'
}, 'ca');

tl2.from('#pepsi', {
    rotate: '90deg',
    top: '100%',
    left: '100%',
    ease: 'power2.out'
}, 'ca');

tl2.to('#laranja-cortada', {
    width: '18%',
    top: '204%',
    left: '41.5%',
    ease: 'power1.out'
}, 'ca');

tl2.to('#fanta', {
    width: '35%',
    top: '210%',
    left: '33%',
    ease: 'power1.out'
}, 'ca');

