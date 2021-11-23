export const seperateThousands = (value: string) => {
  return [...value]
    .map((letter, index, letters) => {
      if (index === 0) {
        return letter;
      }

      const reverseIndex = letters.length - index;

      return reverseIndex % 3 ? letter : `,${letter}`;
    })
    .join("");
};

export const removeNonDigit = (value: string) => {
  const numberCheckRegex = /[^0-9]/g;
  return value.replace(numberCheckRegex, "");
};
