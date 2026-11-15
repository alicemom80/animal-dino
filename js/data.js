// 동물 데이터: id(그림 파일 이름), en(영어), ko(한글), say(읽을 소리, 없으면 en)
window.A = window.A || {};

A.THEMES = [
  { id: 'dino', ko: '공룡·상상', en: 'Dinosaurs & Fantasy', icon: '🦖', cover: 'trex', color: '#d7c9f2',
    words: [
      ['trex', 'T-rex', '티라노사우루스', 'tie ranno saurus'], ['stego', 'stegosaurus', '스테고사우루스'], ['brachio', 'brachiosaurus', '브라키오사우루스'],
      ['ptera', 'pteranodon', '프테라노돈'], ['unicorn', 'unicorn', '유니콘'],
      ['dragon', 'dragon', '용'], ['triceratops', 'triceratops', '트리케라톱스'], ['velociraptor', 'velociraptor', '벨로시랩터'],
      ['ankylosaurus', 'ankylosaurus', '안킬로사우루스'], ['mammoth', 'mammoth', '매머드'],
      ['spinosaurus', 'spinosaurus', '스피노사우루스'], ['parasaurolophus', 'parasaurolophus', '파라사우롤로푸스'], ['pegasus', 'pegasus', '페가수스'],
      ['phoenix', 'phoenix', '불사조'], ['sabertooth', 'sabertooth', '검치호랑이', 'saber tooth'],
    ] },
];

// 5개씩 묶음으로 나누기 (맨 끝 묶음은 5개보다 적을 수 있음)
A.GROUP_SIZE = 5;
A.THEMES.forEach(t => {
  t.words = t.words.map(([id, en, ko, say]) => ({
    id, en, ko, say: say || en,
    art: /^[aeiou]/i.test(en) && !/^uni/i.test(en) ? 'an' : 'a',   // unicorn 은 '유'로 시작하는 소리라 a
  }));
  t.groups = [];
  for (let i = 0; i < t.words.length; i += A.GROUP_SIZE) {
    t.groups.push(t.words.slice(i, i + A.GROUP_SIZE));
  }
});
