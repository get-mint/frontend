import { useEffect, useState } from "react";

export function useCurrency() {
  const [currency, setCurrency] = useState("USD");
  const [symbol, setSymbol] = useState("$");

  useEffect(() => {
    try {
      const userLocale = navigator.language || "en-US";

      let currencyCode = "USD";

      const localeCurrencyMap: { [key: string]: string } = {
        "de-AT": "EUR", // Austria
        "nl-BE": "EUR", // Belgium
        "fr-BE": "EUR", // Belgium
        "el-CY": "EUR", // Cyprus
        "et-EE": "EUR", // Estonia
        "fi-FI": "EUR", // Finland
        "fr-FR": "EUR", // France
        "el-GR": "EUR", // Greece
        "en-IE": "EUR", // Ireland
        "it-IT": "EUR", // Italy
        "lv-LV": "EUR", // Latvia
        "lt-LT": "EUR", // Lithuania
        "fr-LU": "EUR", // Luxembourg
        "de-LU": "EUR", // Luxembourg
        "mt-MT": "EUR", // Malta
        "nl-NL": "EUR", // Netherlands
        "pt-PT": "EUR", // Portugal
        "sk-SK": "EUR", // Slovakia
        "sl-SI": "EUR", // Slovenia
        "es-ES": "EUR", // Spain
      };

      const fullLocaleMatch = localeCurrencyMap[userLocale];

      currencyCode = fullLocaleMatch || "USD";

      const formatter = new Intl.NumberFormat(userLocale, {
        style: "currency",
        currency: currencyCode,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });

      const parts = formatter.formatToParts(0);
      const symbolPart = parts.find((part) => part.type === "currency");
      const currencySymbol = symbolPart
        ? symbolPart.value
        : currencyCode === "EUR"
        ? "€"
        : "$";

      setCurrency(currencyCode);
      setSymbol(currencySymbol);
    } catch (error) {
      console.warn("Error detecting currency:", error);
      setCurrency("USD");
      setSymbol("$");
    }
  }, []);

  return { currency, symbol };
}
