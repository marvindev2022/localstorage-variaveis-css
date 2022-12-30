const h1PortugueseTitle = "QUAIS SÃO AS CIDADES MAIS INTELIGENTES DO BRASIL?";
const h1EnglishTitle = "WHAT ARE THE SMARTEST CITIES IN BRAZIL?";
const h2PortugueseTitle =
  "Paula Faria, CEO da Necta e idealizadora do Connected Smart Cities, foi entrevistada pela Revista Prefeitos & Gestões e comentou acerca da Plataforma CSCM e dos desafios encontrados nas cidades";
const h2EnglishTitle =
  "Paula Faria, CEO of Necta and creator of Connected Smart Cities, was interviewed by Revista Prefeitos & Gestões and commented on the CSCM Platform and the challenges encountered in cities";
const h3PortugueseTitle = "Assim, em 2021, o Ranking CSC ficou desta maneira:";
const h3EnglishTitle = "So, in 2021, the CSC Ranking looked like this:";
const portugueseText =
  "Em meio ao contexto de evolução da “inteligência” dos municípios, surgiu o Connected Smart Cities, uma plataforma multidimensional que acelera o processo de desenvolvimento das cidades inteligentes. O objetivo da plataforma é reunir os atores do ecossistema, com o propósito de proporcionar espaços para integração e estimular a inovação. Assim, através de cinco canais de conexão – portal, eventos, ranking, prêmio e cursos – o Connected Smart Cities aproxima empresas, entidades, academia e governo para a troca de experiência. Por meio desta plataforma, foi criado o Ranking Connected Smart Cities, que considera o “Conceito de Conectividade” como a relação existente entre os diversos setores analisados. O critério foi estabelecido por haver diversos conceitos de Cidades Inteligentes, desde os que estão mais apoiados em tecnologia, até aqueles que estão mais relacionados ao meio ambiente e a sustentabilidade. É o que explica a CEO da Necta e idealizadora do Connected Smart Cities, Paula Faria. “O Ranking Connected Smart Cities é composto por 75 indicadores em 11 eixos temáticos: mobilidade, urbanismo, meio ambiente, tecnologia e inovação, empreendedorismo, educação, saúde, segurança, energia, governança e economia”, detalha.";
const englishText =
  "In the context of the evolution of the “intelligence” of municipalities, Connected Smart Cities emerged, a multidimensional platform that accelerates the process of developing smart cities. The objective of the platform is to bring together the actors of the ecosystem, with the purpose of providing spaces for integration and stimulating innovation. Thus, through five connection channels – portal, events, ranking, award and courses – Connected Smart Cities brings together companies, entities, academia and government to exchange experiences. Through this platform, the Connected Smart Cities Ranking was created, which considers the “Concept of Connectivity” as the existing relationship between the various sectors analyzed. The criterion was established because there are several concepts of Smart Cities, from those that are more supported by technology, to those that are more related to the environment and sustainability. This is what the CEO of Necta and creator of Connected Smart Cities, Paula Faria, explains. “The Connected Smart Cities Ranking is composed of 75 indicators in 11 thematic axes: mobility, urbanism, environment, technology and innovation, entrepreneurship, education, health, security, energy, governance and economy”, he details.";

const brasilFlag = document.querySelector("#brasil-flag");
const englandFlag = document.querySelector("#england-flag");

const h1 = document.querySelector("article h1");
const h2 = document.querySelector("article h2");
const h3 = document.querySelector("article h3");
const p = document.querySelector("article p");

function applyCurrentLanguage() {
  const currentLanguage = localStorage.getItem("lang");

  if (!currentLanguage || currentLanguage === "pt-br") {
    h1.textContent = h1PortugueseTitle;
    h2.textContent = h2PortugueseTitle;
    h3.textContent = h3PortugueseTitle;
    p.textContent = portugueseText;

    return;
  }

  h1.textContent = h1EnglishTitle;
  h2.textContent = h2EnglishTitle;
  h3.textContent = h3EnglishTitle;
  p.textContent = englishText;
}

applyCurrentLanguage();

function toggleLanguage(newLanguage) {
  localStorage.setItem("lang", newLanguage);
  applyCurrentLanguage();
}

brasilFlag.addEventListener("click", () => toggleLanguage("pt-br"));
englandFlag.addEventListener("click", () => toggleLanguage("en"));

