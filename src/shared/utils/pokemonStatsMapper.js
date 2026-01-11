const STATS_NAME = {
    hp: 'Здоровье',
    attack: 'Урон',
    defense: 'Защита',
    'special-attack': 'Специальная атака',
    'special-defense': 'Специальная защита',
    speed: 'Скорость'
}

const STATS_COLOR = {
    hp: '#A8DF8E',
    attack: '#FBEF76',
    defense: '#B0FFFA',
    'special-attack': '#FEB05D',
    'special-defense': '#5A7ACD',
    speed: '#85409D'
}

export function pokemonStatsMapper(name) {
    return STATS_NAME[name] || name;
}

export function pokemonColorMapper(name) {
    return STATS_COLOR[name] || 'grey';
}