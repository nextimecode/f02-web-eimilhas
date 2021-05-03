import React from 'react'
import BemVindo from '../components/organisms/bemvindo'
import Depoimentos from '../components/organisms/depoimentos'
import Encontre from '../components/organisms/encontre'
import Faq from '../components/organisms/faq'
import Numeros from '../components/organisms/numeros'
import Promocoes from '../components/organisms/promocoes'
import PageTemplate from '../components/templates/pageTemplate'
import Section from '../components/templates/section'

export const whatsappUrl = 'https://api.whatsapp.com/send?phone=5531991464894'
export const instagramUrl = 'https://www.instagram.com/eimilhas/'

const listNavLinks = [
  {
    navLink: {
      href: '#home',
      label: 'Home'
    }
  },
  {
    navLink: {
      href: '#promocoes',
      label: 'Promoções'
    }
  },
  {
    navLink: {
      href: '#',
      label: 'A Empresa',
      items: [
        {
          navLink: {
            href: '#depoimentos',
            label: 'O que os clientes dizem?'
          }
        },
        {
          navLink: {
            href: '#numeros',
            label: 'Números da Empresa'
          }
        }
      ]
    }
  },
  {
    navLink: {
      href: '#faq',
      label: 'FAQ'
    }
  }
]

const formasPagamentoIconPath = 'assets/img/pagamentos'
const formasPagamento = [
  {
    card: {
      title: 'Boleto',
      imageIcon: `${formasPagamentoIconPath}/boleto.png`,
      subtitle: '5% OFF'
    }
  },
  {
    card: {
      title: 'PIX',
      imageIcon: `${formasPagamentoIconPath}/pix.png`,
      subtitle: '5% OFF'
    }
  },
  {
    card: {
      title: 'TED',
      imageIcon: `${formasPagamentoIconPath}/ted.png`,
      subtitle: '5% OFF'
    }
  },
  {
    card: {
      title: 'Cartão',
      imageIcon: `${formasPagamentoIconPath}/cartao.png`,
      subtitle: 'em até 12x'
    }
  }
]

const pathLugares = 'assets/img/lugares/fotos'
const promocoes = [
  {
    promocao: {
      foto: `${pathLugares}/paris.jpg`,
      localEspecifico: 'França',
      localGenerico: 'Europa',
      artigo: 'a',
      preco: 2300,
      trecho: 'ida e volta'
    }
  },
  {
    promocao: {
      foto: `${pathLugares}/ny.jpg`,
      localEspecifico: 'Nova York',
      localGenerico: 'EUA',
      artigo: '',
      preco: 2000,
      trecho: 'ida e volta'
    }
  },
  {
    promocao: {
      foto: `${pathLugares}/londres.jpg`,
      localEspecifico: 'Inglaterra',
      localGenerico: 'Europa',
      artigo: 'a',
      preco: 2300,
      trecho: 'ida e volta'
    }
  },
  {
    promocao: {
      foto: `${pathLugares}/roma.jpg`,
      localEspecifico: 'Itália',
      localGenerico: 'Europa',
      artigo: 'a',
      preco: 2300,
      trecho: 'ida e volta'
    }
  },
  {
    promocao: {
      foto: `${pathLugares}/sydney.jpg`,
      localEspecifico: 'Austrália',
      localGenerico: 'Austrália',
      artigo: 'a',
      preco: 5000,
      trecho: 'ida e volta'
    }
  }
]

const pathAvatars = 'assets/img/avatars'
const depoimentos = [
  {
    depoimento: {
      foto: `${pathAvatars}/pedro_duarte.png`,
      nome: 'Pedro Duarte',
      profissao: 'Engenheiro de Software',
      texto: 'Tive a oportunidade de viajar com EiMilhas várias vezes, sempre tive um ótimo atendimento e principalmente saber que estou economizando.'
    }
  },
  {
    depoimento: {
      foto: `${pathAvatars}/artur.jpg`,
      nome: 'Artur',
      texto: 'Viajo frequentemente para o exterior e só compro passagens com o EiMilhas. Ganho flexibilidade e comodidade: todo processo de compra e problemas com a passagem ele resolve! Além de ser super barato! Já indiquei para toda minha família, e todos compram pelo EiMilhas. Recomendo fortemente!'
    }
  },
  {
    depoimento: {
      foto: `${pathAvatars}/bruno.jpg`,
      nome: 'Bruno',
      texto: 'Excelente experiência, já viajei 6 vezes pela EiMilhas, sempre bem assessorado e nenhum problema a relatar, fora o preço que é um dos melhores do mercado, ou seja, só coisas boas! Indico demais.'
    }
  },
  {
    depoimento: {
      foto: `${pathAvatars}/clah_campos.jpg`,
      nome: 'Clah Campos',
      texto: 'Amei a experiência com a EiMilhas , preço excelente, atendimento rápido e mto atencioso, indico pra todo mundo!'
    }
  }
]

const pathFaqImg = 'assets/img/faq'
const frequentQuestions = [
  {
    question: {
      label: 'Meu voo foi alterado ou cancelado pela companhia aérea. O que posso fazer?',
      answer:
        <>
          <p>
            A companhia aérea pode cancelar ou alterar a sua viagem. Essas mudanças não estão em nosso controle, já que somo apenas uma plataforma de emissão de passagens.
          </p>
          <p>
            Nesses casos, a companhia aérea permite que você cancele a viagem sem custos ou remarque o voo para outra data e horário.
          </p>
          <p>
            Para isso, a alteração feita pela companhia deve ser <span className="fw-bold">superior a 31 minutos para voos nacionais e superior a 1h para voos internacionais</span>.
          </p>
          <p>
            <span className="fw-bold">Se você optar por cancelar a viagem</span>, poderá converter o valor em crédito imediato na EiMilhas, para utilizar em um novo voo da mesma companhia, ou pedir o reembolso da passagem em dinheiro, que será devolvido em até 12 meses.
          </p>
          <p>
            <span className="fw-bold">Se você preferir remarcar a viagem</span>, poderá escolher outras opções de data e horário, mantendo a origem e o destino da compra original. A nova viagem deve ser remarcada para, pelo menos, 2 dias antes da data de embarque original, e estará sujeita à disponibilidade de voos da companhia.
          </p>
          <p>
            Cancelamento gratuito para passagens canceladas pelo próprio cliente, em até um prazo de 24 horas após emitida, desde que o voo seja posterior a 7 dias. Em caso de cancelamento, os estornos das taxas podem ser em até duas faturas.
          </p>
        </>
    }
  },
  {
    question: {
      label: 'Posso corrigir o nome do viajante na passagem aérea?',
      answer:
        <>
          <p>
            As correções de nome e sobrenome dos viajantes são analisadas exclusivamente pelas companhias aéreas. Em grande parte dos casos, é possível <span className="fw-bold">corrigir erros de grafia de nomes e sobrenomes</span> ou alteração de até 3 caracteres nas passagens aéreas sem custos, desde que a alteração não represente a troca de passageiros.
          </p>
          <p>
            A inclusão ou a exclusão de nomes não são permitidas, mas casos específicos, como divórcio ou casamento, podem ser avaliados pelas companhias aéreas. Vale lembrar que as <span className="fw-bold">passagens aéreas são pessoais e intransferíveis</span>.
          </p>
          <p>
            Para fazer a solicitação junto às aéreas, <span className="fw-bold">precisamos dos seguintes documentos</span>
            <ul>
              <li>Cópia do documento de identidade do viajante, se for um voo nacional.</li>
              <li>Cópia da 1ª página e do verso do passaporte, se for um voo internacional.</li>
              <li>Cópia da Certidão de Casamento ou de Nascimento, quando a alteração de nome.</li>
            </ul>
          </p>
        </>
    }
  },
  {
    question: {
      label: 'Qual é o limite de bagagem de mão?',
      answer:
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <img src={`${pathFaqImg}/bagagem_mao_1.png`}/>
            </div>
            <div className="col-sm-12 col-md-6">
              <img src={`${pathFaqImg}/bagagem_mao_2.png`}/>
            </div>
          </div>
        </div>
    }
  },
  {
    question: {
      label: 'Qual é o limite de bagagem despachada?',
      answer:
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <img src={`${pathFaqImg}/bagagem_despachada_1.png`}/>
            </div>
            <div className="col-sm-12 col-md-6">
              <img src={`${pathFaqImg}/bagagem_despachada_2.png`}/>
            </div>
          </div>
        </div>
    }
  },
  {
    question: {
      label: 'Como viajar com animais de estimação?',
      answer:
        <>
          <p>
            O trânsito de cães e gatos entre países exige documento emitido pela autoridade veterinária do país de origem e aceito pelos países de destino que ateste as condições e o histórico de saúde do animal de estimação bem como o atendimento às exigências sanitárias do país de destino. No Brasil, os documentos utilizados para essa finalidade são o CVI (Certificado Veterinário Internacional) e o Passaporte para Trânsito de Cães e Gatos, que são expedidos por Auditores Fiscais Federais Agropecuários das unidades de Vigilância Agropecuária Internacional (Vigiagro), vinculado à Secretaria de Defesa Agropecuária (SDA) do Ministério da Agricultura, Pecuária e Abastecimento.
          </p>
          <p>
            Cada país tem requisitos específicos para autorizar o ingresso de cães e gatos no seu território. Portanto, é importante planejar a viagem do animal com bastante antecedência para dispor de tempo suficiente para cumprir as exigências do país de destino, o que às vezes pode requerer alguns meses.
          </p>
          <p>
            É responsabilidade do proprietário do animal procurar se informar sobre as exigências junto à Embaixada/Consulado do país de destino. Abaixo você encontra as principais informações sobre o trânsito internacional de cães e gatos.
          </p>
          <p>
            Para embarcar com o seu animal de estimação, você deve apresentar um <span className="fw-bold">atestado médico emitido por um veterinário até 10 dias antes do voo</span>. Além disso, você deverá apresentar a seguinte documentação adicional exigida em algumas rotas:
          </p>
          <p>
            <span className="fw-bold">Para voos nacionais</span>: comprovante vigente de vacina antirrábica, recomendado para animais com mais de 90 dias de vida. Ao aplicar a primeira dose, é necessário esperar 30 dias para o embarque. Se esse período não for respeitado ou se a vacina estiver fora do período de validade, seu animal não poderá viajar.
          </p>
          <p>
            Para viajar junto ao seu animal em <span className="fw-bold">cabine Economy</span>, você deverá levá-lo dentro de um recipiente apropriado, que deve atender às seguintes regras:
          </p>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <img src={`${pathFaqImg}/bagagem_animal_1.png`}/>
              </div>
              <div className="col-sm-12 col-md-6">
                <h6>Bolsas de Transporte</h6>
                <ul>
                  <li><span className="fw-bold">Medidas</span>: 36 cm de comprimento x 33 cm de largura x 23 cm de altura</li>
                  <li><span className="fw-bold">Peso</span>(soma do animal e da bolsa): 7 kg / 15 lbs.</li>
                  <li><span className="fw-bold">A bolsa deve ter uma trava que garanta que o animal não saia durante o voo.</span></li>
                </ul>

              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <img src={`${pathFaqImg}/bagagem_animal_2.png`}/>
              </div>
              <div className="col-sm-12 col-md-6">
                <h6>Caixas de Transporte</h6>
                <ul>
                  <li><span className="fw-bold">Medidas</span>: 36 cm de comprimento x 33 cm de largura x 19 cm de altura</li>
                  <li><span className="fw-bold">Peso</span>(soma do animal e da bolsa): 7 kg / 15 lbs.</li>
                  <li><span className="fw-bold">Para a segurança do seu animal, a caixa deve ter uma porta de metal com trava dupla que impeça a introdução do focinho ou pernas na ranhura.</span></li>
                </ul>

              </div>
            </div>
          </div>
        </>
    }
  }
]

const Index: React.FC = () => {
  return (
    <PageTemplate menuLinks={listNavLinks}>

      <Section
        id="home"
        bgUrl='assets/img/traveller.jpg'
        bgColor='rgba(17,26,58,0.7)'
        classes="min-vh-100 bg-image"
      >
        <Encontre/>
        <BemVindo formasPagamento={formasPagamento}/>
      </Section>

      <Section id="promocoes">
        <Promocoes promocoes={promocoes}/>
      </Section>

      <Section
        id="depoimentos"
        bgUrl='assets/img/traveller2.jpg'
        bgColor='rgba(17,26,58,0.8)'
        classes="min-vh-50 bg-image bg-position-top my-5"
      >
        <Depoimentos depoimentos={depoimentos}/>
      </Section>

      <Section
        id="numeros"
        bgUrl='assets/img/customers.jpg'
        bgColor='rgba(255,255,255,0.7)'
        classes="min-vh-50 bg-image bg-position-top my-5"
      >
        <Numeros/>
      </Section>

      <Section
        id="faq"
        bgUrl='assets/img/doubt.jpg'
        bgColor='rgba(255,255,255,0.8)'
        classes="min-vh-50 bg-image bg-position-top my-5"
      >
        <Faq questions={frequentQuestions}/>
      </Section>

    </PageTemplate>
  )
}

export default Index
