
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
  // И сразу добавим пробелы по краям, чтобы можно было найти числа, произнесенные голосом
  let s2=s.replaceAll("-", " ").toUpperCase();
  const digits_alphabetical=['ОДИН', 'ДВА', 'ТРИ', 'ЧЕТЫРЕ', 'ПЯТЬ', 'ШЕСТЬ', 'СЕМЬ', 'ВОСЕМЬ', 'ДЕВЯТЬ', 'ДЕСЯТЬ'];
  for (let i=0; i<digits_alphabetical.length; i++)
  {
    s2=s2.replace(digits_alphabetical[i], (i+1).toString());
  }

  s2=s2.replaceAll(" ", "");

  // 08.04.2021
  // все, что не на первом и не на последнем месте и не цифра, заменяем на пробел
  // пока такая простейшая проверка на координаты типа Игорь-3
  for (let i=1; i<s2.length-1; i++)
  {
    if (!('0123456789'.includes(s2[i])))
    {
      s2 = s2.substring(0, i) + ' ' + s2.substring(i + 1);
    }
  }
  //

  s2=s2.replaceAll(" ", "");

  if (s2.length===3&&s2.substring(1)==="10")
  {
    y=9;
  } else if (s2.length===2) {
    if ('0123456789'.includes(s2.substring(2)))
      y=parseInt(s2.substring(1))-1;
  }
  if (y>=0)
  {
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
  }
  return result;
}