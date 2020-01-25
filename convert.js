const names = ['agnus-dei',
  'are-are',
  'ballade',
  'camino',
  'ed-lewis',
  'funeraire',
  'indvumo',
  'madinda',
  'mariola',
  'mississipi',
  'mocita',
  'nubian',
  'ogbeler',
  'orillas',
  'ossie',
  'pae',
  'rueda',
  'tabla',
]

const cmd = (name) => `ffmpeg -i audiosets/continentes/${name}.wav audiosets/continentes/${name}.ogg`
console.log(names.map(cmd).join("\n"))