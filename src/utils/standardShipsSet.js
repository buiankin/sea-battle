// компонент, который создает и экспортирует стандартный набор кораблей
// направление кораблю задается для того, чтобы можно было определить, в какую сторону его рисовать из стартовой точки
// Размещать корабли можно либо вертикально, либо горизонтально, были выбраны направления вправо(right) и вниз(down), 
// поскольку они совпадают с положительными направлениеми координатных осей

import {getRandomInt} from './Common'
import placeShip from "./placeShip";
import checkPlaceShip from "./checkPlaceShip";

class Ship {
    constructor(size, startSquare, direction) {
        this.size = size;
        this.startSquare = startSquare;
        this.direction = direction;
        this.id = Ship.incrementId();
        this.hitpoints = this.size;
    }

    static incrementId() {
        if (!this.latestId) {
            this.latestId = 1;
        } else {
            this.latestId++;
        }
        return this.latestId
    }
}


export function placeVarious()
{
    let enemyField = [];

    // первоначальное (пустое) состояние поля
    for (let i = 0; i < 10; i++) {
        enemyField.push([]);
    }

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            enemyField[i].push({
                x: j,
                y: i,
                containsShip: false,
                shot: false,
                isShipVisible: false,
                shipId: null,
            });
        }
    }


    let variableSet = [];
    // i-порядок расстановки (оно же количество короблей такой длины)
    // и соответственно длина на каждом уровне  5-i
    for (let i=1; i<=4; i++)
    {
        for (let j=1; j<=i; j++)
        {
            // длина корабля
            let l=5-i;
            let ship, x, y;
            for(;;) {
                x = getRandomInt(1, 10 - l + 1);
                y = getRandomInt(1, 10);

                let direction=Math.random();
                if (direction>= 0.5) {
                    ship = new Ship(l, {y: y, x: x}, 'right');
                } else {
                    ship = new Ship(l, {y: x, x: y}, 'down');
                }
                if (checkPlaceShip(enemyField, ship))
                   break;
            }
            placeShip(enemyField, ship);
            variableSet.push(ship);
        }

    }
    return variableSet;
}

export default placeVarious;