import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeExperience(
  ".digitalhouse",
  `Our AI utilizes real-world data to forecast the development of ecosystems on ocean worlds. By analyzing various environmental factors, including chemical compositions, energy sources, and atmospheric conditions, the AI generates accurate predictions about how these unique ecosystems may evolve over time. This approach not only enhances our understanding of potential life forms but also aids in identifying the most promising celestial bodies for future exploration.`,
  "Professor conteudista em Frontend",
  "Digital House",
  "Nov 2021 - Nov 2022 (1 ano)"
);

hoverChangeExperience(
  ".zuplae",
  `Our project focuses on simulating potential life forms that could thrive in various environments, taking into account factors such as temperature, chemical composition, and energy sources. By integrating these elements, the AI creates detailed models of how organisms might adapt to and flourish in extreme conditions, offering valuable insights into the possibilities of life beyond Earth.4`,
  "Social Media e UI Designer",
  "Zuplae",
  "Jan 2022 - Abril 2022 (4 meses)"
);

hoverChangeExperience(
  ".contweb",
  `Our project aims to predict the dynamic changes in surface and atmospheric conditions over millions of years. By leveraging advanced modeling techniques, we analyze how various factors—such as geological activity, climate fluctuations, and chemical interactions—can shape these environments over time. This long-term perspective allows us to better understand the evolution of ocean worlds and their potential for supporting life.`,
  "Social Media e Designer",
  "Código Fonte TV",
  "Jun 2021 - Jan 2022 (8 meses)"
);

hoverChangeDescription(
  ".html",
  "HTML é uma linguagem de marcação, onde marcamos os elementos para definir quais informações a página vai exibir."
);
hoverChangeDescription(
  ".css",
  "CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas."
);
hoverChangeDescription(
  ".js",
  "JavaScript é uma linguagem de programação que permite a você implementar elementos dinâmicos em páginas web."
);
hoverChangeDescription(
  ".sass",
  "Sass é um pré-processador CSS que adiciona alguns recursos que não estão disponíveis de forma nativa."
);
hoverChangeDescription(
  ".react",
  "React é uma biblioteca JavaScript com foco em criar interfaces de usuário de forma componetizada."
);
hoverChangeDescription(
  ".next",
  "Next.js é uma estrutura da web que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para web baseados em React."
);
hoverChangeDescription(
  ".styled",
  "styled-components é uma biblioteca que utiliza o conceito de CSS-in-JS, ou seja, que nos permite escrever códigos CSS dentro do Javascript."
);
hoverChangeDescription(
  ".tailwind",
  "Tailwind CSS é um framework CSS que nos fornece classes utilitárias com o propósito de estilizar as páginas."
);
hoverChangeDescription(
  ".typescript",
  "TypeScript é um superset do JavaScript que incluir recursos que não estão presentes na linguagem de forma nativa, além de torná-la estática."
);
hoverChangeDescription(
  ".radix",
  "Radix é uma biblioteca que fornece componentes acessíveis e sem estilos para a criação de aplicação em React."
);
hoverChangeDescription(
  ".cypress",
  "Cypress é um framework para automação de testes end-to-end, onde atualmente usa a linguagem JavaScript."
);
hoverChangeDescription(
  ".storybook",
  "Storybook é uma ferramenta que tem como objetivo documentar e testar os componentes da aplicação."
);
