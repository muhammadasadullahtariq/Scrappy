export default function removeSide(num, width) {
  let total = 0;
  if (num <= 3) total = (5 / 100) * width;
  else total = (3 / 100) * width;
  total *= num * 2;
  console.log(total + ' is total');
  width -= total;
  return width / num;
}

const NumberOfColumn = width => {
  if (width < 480) {
    return 3;
  } else if (width < 786) {
    return 3;
  } else if (width <= 1080) {
    return 4;
  } else {
    return 4;
  }
};

export {NumberOfColumn};
