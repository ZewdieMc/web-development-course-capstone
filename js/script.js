const navMenu = document.querySelector('header .nav-menu');
const navMenuIcon = document.querySelector('header img');
const closeMenu = document.querySelector('.nav-menu .close-menu a');
const spkearsContainer = document.querySelector('.speakers .speakers-container');

navMenuIcon.addEventListener('click', () => {
  navMenu.style.display = 'flex';
});

closeMenu.addEventListener('click', () => {
  navMenu.style.display = 'none';
});

const speakers = [
  {
    image: './images/speaker_01.png',
    name: 'Yohai Benkler',
    designation: 'Harvard Law School Professor',
    about: `
    Focusing on a common approach in a networked environment
    `,
  },
  {
    image: './images/speaker_02.png',
    name: 'Soyoung Noh',
    designation: 'Art Center Nabi Director, CC Korea Director',
    about: `
    As the author of "Digital Art, Art of Our Time", 
    he opened 'Art Center Nabi', the first digital art.
    `,
  },
  {
    image: './images/speaker_03.png',
    name: 'Lyla Treticov',
    designation: 'Secretary General of the Wikimedia Foundation',
    about: `
    Layla Treticov is the Executive Director of the Wikimedia Foundation, 
    the non-profit organization that runs Wikipedia.
    `,
  },
  {
    image: './images/speaker_04.png',
    name: 'Gilnam Jeon',
    designation: 'Korea Advanced Institute of Science and Technology (KAIST) Emeritus Professor',
    about: `
    It opened the Internet era in earnest by developing Asia's 
    first internet protocol network SDN.
    `,
  },
  {
    image: './images/speaker_05.png',
    name: 'Julia Leda',
    designation: 'Representative of the Young Pirates of Europe',
    about: `
    European integration and young people's participation in 
    politics and democracy online are major concerns.
    `,
  },
  {
    image: './images/speaker_06.png',
    name: 'Ryan Merkly',
    designation: 'Creative Commons CEO, former Mozilla Foundation COO',
    about: `
    He led the open source project at the Mozilla Foundation
    and joined the CC CEO in 2014.
    `,
  },
];

const dispayListNodes = (nodes) => {
  nodes.forEach((node) => { node.style.display = 'flex'; });
};

const hideListNodes = (nodes) => {
  nodes.forEach((node) => { node.style.display = 'none'; });
};

window.onload = () => {
  speakers.forEach((speaker, i) => {
    spkearsContainer.innerHTML += `
  <div class='speaker'>
    <div class="speaker-img">
      <img class="image" src="${speaker.image}" alt="">
    </div>
    <div class="speaker-detail">
      <h3 class="name">${speaker.name}</h3>
      <p class="designation">${speaker.designation}</p>
      <div class="guide_bar"></div>
      <p class="about">${speaker.about}</p>
    </div>
  </div>
    `;
    spkearsContainer.innerHTML += i === 1 ? '<div id="more-speakers"> MORE <i class="fas fa-chevron-down fa-1x"></i></div>' : '';
  });

  spkearsContainer.innerHTML += '<div class="less-speakers"> LESS <i class="fas fa-chevron-up fa-1x"></i></div>';
  const moreSpeakers = document.querySelectorAll('.speakers-container > div:nth-child(n+4)');
  const allSpeaksers = document.querySelectorAll('.speakers-container > div:not(#more-speakers)');
  const seeMore = document.querySelector('.speakers-container #more-speakers');
  const seeLess = document.querySelector('.speakers-container .less-speakers');

  seeMore.addEventListener('click', () => { dispayListNodes(allSpeaksers); seeMore.style.display = 'none'; });
  seeLess.addEventListener('click', () => { hideListNodes(moreSpeakers); seeMore.style.display = 'flex'; });
};
