export const minimizeText = (text, length) => {
    if (text.length >= length) return `${text.substr(0, length - 3)}...`;
    return text;
  };