
import { letters, letters_names } from '../constants/messages';


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

export function codeCoordinateNames(x, y)
{
  return letters_names[x]+" "+(y+1);
}



export function decodeCoordinate(s)
{
  let result=null;

  //s=String.fromCodePoint(1072,1072,32,1086,1076,1080,1085);
  //result={x:3, y:2};
  //return result;

  //s="Валера восемь";
  //s=s.replaceAll("1", " ОДИН ");

  let y=-1;
  let s2=s.replace("-", " ").toUpperCase();
  const digits_alphabetical=[{idx: 1, s:'ОДИН'}, {idx: 2, s:'ДВА'}, {idx: 4, s:'ЧЕТЫРЕ'}, {idx: 5, s:'ПЯТЬ'},
   {idx: 6, s:'ШЕСТЬ'}, {idx: 8, s:'ВОСЕМЬ'}, {idx: 7, s:'СЕМЬ'}, {idx: 9, s:'ДЕВЯТЬ'}, {idx: 10, s:'ДЕСЯТЬ'}, 
   // Три идет последним, на случай если сказали Дмитрий
   {idx: 3, s:'ТРИ'}];
  for (let i=0; i<digits_alphabetical.length; i++)
  {
    //s2=s2.replace(digits_alphabetical[i], (i+1).toString());
    let idx=s2.lastIndexOf(digits_alphabetical[i].s);
    if (idx>=0)
    {
      s2 = s2.substring(0, idx) + (digits_alphabetical[i].idx).toString() + s2.substring(idx + digits_alphabetical[i].s.length);
      break;
    }
  }

  s2=s2.replace(/ /g, "");

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

  s2=s2.replace(/ /g, "");

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
      case 'Э': // это так бот говорит букву Е - Эхо
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