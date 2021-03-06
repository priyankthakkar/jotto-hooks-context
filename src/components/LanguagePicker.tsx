import React from "react";

function LanguagePicker({ setLanguage }: { setLanguage: any }) {
  const languages = [
    { code: "en", symbol: "🇺🇸" },
    { code: "emoji", symbol: "😊" },
  ];

  const languageIcons = languages.map((lang) => (
    <span
      data-test="language-icon"
      key={lang.code}
      onClick={() => setLanguage(lang.code)}
    >
      {lang.symbol} {lang.code + " "}
    </span>
  ));
  return <div data-test="component-language-picker">{languageIcons}</div>;
}

export default LanguagePicker;
