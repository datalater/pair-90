import { ChangeEvent, useCallback, useState } from "react";

interface CurrencyFormatInputProps {
  blocks: number[];
  delimiter: string;
}

// blocks
/*

[3, 4, 4]

000 delmiter 0000 delmiter 0000
*/

const CurrencyFormatInput = ({
  blocks,
  delimiter,
}: CurrencyFormatInputProps) => {
  const [content, setContent] = useState("");

  const formatValue = (value: string) => {
    const result: string[] = [];
    let inputValue = value;
    blocks.forEach((block) => {
      result.push(inputValue.substr(0, block));
      inputValue = inputValue.substr(block);
    });

    return result.join(delimiter);
  };

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    // const formattedValue = "4444 3333 2222 1111";
    const formattedValue = formatValue(value);

    setContent(formattedValue);
  }, []);

  return (
    <>
      <div>카드번호 포맷팅</div>
      <input
        type="text"
        placeholder="카드번호를 넣어주세요"
        onChange={handleChange}
        value={content}
      />
    </>
  );
};

export default CurrencyFormatInput;
