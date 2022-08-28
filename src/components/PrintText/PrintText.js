import React, { useEffect, useState } from 'react';

const PrintText = (props) => {

  const {
    text
  } = props;

  const [indexTextPrinted, setIndexTextPrinted] = useState(0);

  const textPrinted = text.substring(0,indexTextPrinted);

  useEffect(() => {
    setTimeout(() => {
      if (indexTextPrinted < text.length) {
        let nextIndex = indexTextPrinted + 1;
        const nextChart = text.substring(indexTextPrinted, nextIndex);
        if (nextChart === "<") {
          const nextCloseIndex = text.substring(indexTextPrinted).indexOf(">");
          if (nextCloseIndex >= 0) nextIndex = indexTextPrinted + nextCloseIndex;
          else nextIndex = text.length;
        }
        debugger;
        setIndexTextPrinted(nextIndex);
      }
    }, 20);
  }, [indexTextPrinted]);

  return (
    <div dangerouslySetInnerHTML={{ __html: textPrinted }}></div>
  );
}

export default PrintText;
