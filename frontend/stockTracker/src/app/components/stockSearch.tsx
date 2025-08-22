"use client";
import { Autocomplete, AutocompleteItem } from "@heroui/autocomplete";
import { Key, useState } from "react";

const placeholder = [{ label: "Search for an IPO", key: "label" }];

export default function StockSearch() {
  const [items, setItems] = useState([]);
  const [selection, setSelection] = useState<Key | null>();

  function onInputChange(input: string) {
    console.log(input);
  }

  function onSelectionChange(key: Key | null) {
    setSelection(key);
    console.log(key);
  }
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
