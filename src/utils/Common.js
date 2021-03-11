
import { letters } from '../constants/messages';


export function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function codeCoordinate(x, y)
{
  return letters[x]+(y+1);
}


export function decodeCoordinate(s)
{
  let result=null;
  let y=-1;
  let s2=s.trim().toUpperCase();
  if (s2.length===3&&s2.substring(1)==="10")
  {
    y=9;
  } else if (s2.length===2) {
    if ('0123456789'.includes(s2.substring(2)))
      y=parseInt(s2.substring(1))-1;
  }
  switch (s2.substring(0,1))
  {
    case 'А':
      result={x:0, y:y};
      break;
    case 'Б':
      result={x:1, y:y};
      break;
    case 'В':
      result={x:2, y:y};
      break;
    case 'Г':
      result={x:3, y:y};
      break;
    case 'Д':
      result={x:4, y:y};
      break;
    case 'Е':
      result={x:5, y:y};
      break;
    case 'Ж':
      result={x:6, y:y};
      break;
    case 'З':
      result={x:7, y:y};
      break;
    case 'И':
      result={x:8, y:y};
      break;
    case 'К':
      result={x:9, y:y};
      break;
                                                                
  }
  return result;
}