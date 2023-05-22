

interface Element {
  position: string;
  status: string;
}

export function filterArray(array: Element[]): Element[] {
  let lastStartIndex = -1;
  let lastEndIndex = -1;

  for (let i = array.length - 1; i >= 0; i--) {
    const element = array[i];

    if (element.status === 'start') {
      lastStartIndex = i;
      break;
    }
  }

  for (let i = array.length - 1; i >= 0; i--) {
    const element = array[i];

    if (element.status === 'end' && lastEndIndex === -1) {
      lastEndIndex = i;
      break;
    }
  }

  const filteredArray: Element[] = [];

  if (lastStartIndex !== -1) {
    filteredArray.push(array[lastStartIndex]);
  }

  for (let i = array.length - 1; i >= 0; i--) {
    const element = array[i];

    if (element.status === 'wall') {
      filteredArray.push(element);
    }
  }

  if (lastEndIndex !== -1) {
    filteredArray.push(array[lastEndIndex]);
  }

  return filteredArray.reverse();
}



