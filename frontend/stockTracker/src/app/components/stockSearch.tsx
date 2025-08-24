"use client";
import { Autocomplete, AutocompleteItem } from "@heroui/autocomplete";
import { Key, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { stockObject } from "../dataInterfaces";

const placeholder: stockObject = {
  ticker: "Search for an IPO",
  company: "",
  price: "",
};

export default function StockSearch() {
  const [items, setItems] = useState<stockObject[]>([placeholder]);
  const [selection, setSelection] = useState<Key | null>();
  const [input, setInput] = useState<string>("");
  const [debouncedInput] = useDebounce<string>(input, 500);

  function onInputChange(input: string) {
    setInput(input);
  }

  function onSelectionChange(key: Key | null) {
    setSelection(key);
    console.log(key);
  }

  async function fetchStocks(query: string) {
    try {
      const params: URLSearchParams = new URLSearchParams({ ticker: query });
      const response: Response = await fetch(
        "http://localhost:8080/api/stock/search?" + params.toString(),
      );

      if (response.status == 200) {
        const res = await response.json();
        return res;
      }
    } catch (e) {
      if (e instanceof Error) {
        console.error(e.message);
      }
    }
  }

  useEffect(() => {
    if (debouncedInput) {
      (async () => {
        const searchResults: stockObject[] = await fetchStocks(debouncedInput);
        console.log(searchResults);
        setItems(searchResults);
      })();
    } else {
      setItems([placeholder]);
    }
  }, [debouncedInput]);

  return (
    <div>
      <Autocomplete
        label="Search"
        defaultItems={items}
        placeholder="Search a stock"
        disabledKeys={["Search for an IPO"]}
        onInputChange={onInputChange}
        onSelectionChange={onSelectionChange}
      >
        {items.map((stock) => {
          return (
            <AutocompleteItem key={stock.ticker} textValue={stock.ticker}>
              <div className="flex grid-rows-2 items-center gap-2">
                <div className="flex">
                  <div className="flex flex-col">
                    <span className="text-small">{stock.ticker}</span>
                    <span className="text-tiny text-default-400">
                      {stock.company}
                    </span>
                  </div>
                  <div className="row-span-2 ml-5 flex items-center">
                    <span className="text-small font-bold">{stock.price}</span>
                  </div>
                </div>
              </div>
            </AutocompleteItem>
          );
        })}
      </Autocomplete>
    </div>
  );
}
