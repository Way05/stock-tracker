"use client";
import { Autocomplete, AutocompleteItem } from "@heroui/autocomplete";
import { Key, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

const placeholder = [{ label: "Search for an IPO", key: "label" }];

export default function StockSearch() {
  const [items, setItems] = useState([]);
  const [selection, setSelection] = useState<Key | null>();
  const [input, setInput] = useState<string>("");
  const [debouncedInput] = useDebounce<string>(input, 500);

  function onInputChange(input: string) {
    setInput(input);
    console.log(input);
  }

  function onSelectionChange(key: Key | null) {
    setSelection(key);
    console.log(key);
  }

  async function fetchStocks(query: string) {
    try {
      const response: Response = await fetch("");

      if (response.status == 200) {
        const res = await response.json();
        console.log(res);
      }
    } catch (e) {
      if (e instanceof Error) {
        console.error(e.message);
      }
    }
  }

  useEffect(() => {
    if (debouncedInput) {
      const searchResults = fetchStocks(debouncedInput);
    }
  }, [debouncedInput]);

  return (
    <div>
      <Autocomplete
        defaultItems={placeholder}
        label="Search"
        placeholder="Search a stock"
        items={items}
        disabledKeys={["label"]}
        onInputChange={onInputChange}
        onSelectionChange={onSelectionChange}
      >
        {placeholder.map((stock) => {
          return (
            <AutocompleteItem key={stock.key}>{stock.label}</AutocompleteItem>
          );
        })}
      </Autocomplete>
    </div>
  );
}
