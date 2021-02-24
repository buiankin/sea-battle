
export default (field, ship) => {
    const offsets=[{x:-1,y:-1}, {x:0,y:-1}, {x:1,y:-1},
        {x:-1,y:0}, {x:0,y:0}, {x:1,y:0},
        {x:-1,y:1}, {x:0,y:1}, {x:1,y:1},
    ];
    switch(ship.direction) {
        case 'right':
            for (let i = ship.startSquare.x - 1; i < ship.startSquare.x - 1 + ship.size; i++) {
                //field[ship.startSquare.y - 1][i].containsShip = true;
                //field[ship.startSquare.y - 1][i].shipId = ship.id;
                for (let j=0; j<offsets.length; j++)
                {
                    let y=offsets[j].y+ship.startSquare.y - 1;
                    let x=offsets[j].x+i;
                    if (x<0||y<0||x>=10|y>=10)
                    {
                        // корабль находится в углу поля, там других кораблей нет
                    } else {
                        if (field[y][x].containsShip)
                            return false;
                    }
                }

            }
            break;
        case 'down':
            for (let i = ship.startSquare.y - 1; i < ship.startSquare.y - 1 + ship.size; i++) {
                //field[i][ship.startSquare.x - 1].containsShip = true;
                //field[i][ship.startSquare.x - 1].shipId = ship.id;
                for (let j=0; j<offsets.length; j++)
                {
                    let y=offsets[j].y+i;
                    let x=offsets[j].x+ship.startSquare.x - 1;
                    if (x<0||y<0||x>=10|y>=10)
                    {
                        // корабль находится в углу поля, там других кораблей нет
                    } else {
                        if (field[y][x].containsShip)
                            return false;
                    }
                }

            }
            break;
        default:
    }
    return true;
}