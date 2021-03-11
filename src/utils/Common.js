
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
  return letters[y]+(x+1);
}


export function decodeCoordinate(s)
{
  let result=null;
  let x=-1;
  let s2=s.trim().toUpperCase();
  if (s2.length===3&&s2.substring(1)==="10")
  {
    x=9;
  } else if (s2.length===2) {
    if ('0123456789'.includes(s2.substring(2)))
      x=parseInt(s2.substring(1))-1;
  }
  switch (s2.substring(0,1))
  {
    case 'А':
      result={y:0, x:x};
      break;
    case 'Б':
      result={y:1, x:x};
      break;
    case 'В':
      result={y:2, x:x};
      break;
    case 'Г':
      result={y:3, x:x};
      break;
    case 'Д':
      result={y:4, x:x};
      break;
    case 'Е':
      result={y:5, x:x};
      break;
    case 'Ж':
      result={y:6, x:x};
      break;
    case 'З':
      result={y:7, x:x};
      break;
    case 'И':
      result={y:8, x:x};
      break;
    case 'К':
      result={y:9, x:x};
      break;
                                                                
  }
  return result;
}