import NormalIcon from '../assets/typesIcon/Pokemon_Type_Icon_Normal.svg?react';
import FireIcon from '../assets/typesIcon/Pokemon_Type_Icon_Fire.svg?react';
import WaterIcon from '../assets/typesIcon/Pokemon_Type_Icon_Water.svg?react';
import ElectricIcon from '../assets/typesIcon/Pokemon_Type_Icon_Electric.svg?react';
import GrassIcon from '../assets/typesIcon/Pokemon_Type_Icon_Grass.svg?react';
import IceIcon from '../assets/typesIcon/Pokemon_Type_Icon_Ice.svg?react';
import FightingIcon from '../assets/typesIcon/Pokemon_Type_Icon_Fighting.svg?react';
import PoisonIcon from '../assets/typesIcon/Pokemon_Type_Icon_Poison.svg?react';
import GroundIcon from '../assets/typesIcon/Pokemon_Type_Icon_Ground.svg?react';
import FlyingIcon from '../assets/typesIcon/Pokemon_Type_Icon_Flying.svg?react';
import PsychicIcon from '../assets/typesIcon/Pokemon_Type_Icon_Psychic.svg?react';
import BugIcon from '../assets/typesIcon/Pokemon_Type_Icon_Bug.svg?react';
import RockIcon from '../assets/typesIcon/Pokemon_Type_Icon_Rock.svg?react';
import GhostIcon from '../assets/typesIcon/Pokemon_Type_Icon_Ghost.svg?react';
import DragonIcon from '../assets/typesIcon/Pokemon_Type_Icon_Dragon.svg?react';
import DarkIcon from '../assets/typesIcon/Pokemon_Type_Icon_Dark.svg?react';
import SteelIcon from '../assets/typesIcon/Pokemon_Type_Icon_Steel.svg?react';
import FairyIcon from '../assets/typesIcon/Pokemon_Type_Icon_Fairy.svg?react';

const TYPES = {
    normal: 'нормальный',
    fire: 'огненный',
    water: 'водный',
    electric: 'электрический',
    grass: 'травяной',
    ice: 'ледяной',
    fighting: 'боевой',
    poison: 'ядовитый',
    ground: 'земляной',
    flying: 'летающий',
    psychic: 'психический',
    bug: 'насекомый',
    rock: 'каменный',
    ghost: 'призрачный',
    dragon: 'драконий',
    dark: 'тёмный',
    steel: 'стальной',
    fairy: 'волшебный',
}

const TYPES_ICON = {
    normal: <NormalIcon />,
    fire: <FireIcon />,
    water: <WaterIcon />,
    electric: <ElectricIcon />,
    grass: <GrassIcon />,
    ice: <IceIcon />,
    fighting: <FightingIcon />,
    poison: <PoisonIcon />,
    ground: <GroundIcon />,
    flying: <FlyingIcon />,
    psychic: <PsychicIcon />,
    bug: <BugIcon />,
    rock: <RockIcon />,
    ghost: <GhostIcon />,
    dragon: <DragonIcon />,
    dark: <DarkIcon />,
    steel: <SteelIcon />,
    fairy: <FairyIcon />,
}

export function pokemonTypesMapper(name) {
    return TYPES[name] || name;
}

export function pokemonTypesIconMapper(name) {
    return TYPES_ICON[name] || <NormalIcon />;
}