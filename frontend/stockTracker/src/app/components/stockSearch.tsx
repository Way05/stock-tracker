"use client";
import { Autocomplete, AutocompleteItem } from "@heroui/autocomplete";
import { Key, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { stockObject } from "../dataInterfaces";
import ViewStockDrawer from "./viewStockDrawer";
import { useDisclosure } from "@heroui/use-disclosure";
import { Button } from "@heroui/button";

const placeholder: stockObject = {
  ticker: "Search for an IPO",
  company: "",
};

const testStocks: stockObject[] = [{ ticker: "AAPL", company: "aaple" }];

export default function StockSearch() {
  const [input, setInput] = useState<string>("");
  const [debouncedInput] = useDebounce<string>(input, 500);
  const [items, setItems] = useState<stockObject[]>([
    placeholder,
    ...testStocks,
  ]);
  const [selection, setSelection] = useState<Key | null>("Null");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  function onInputChange(input: string) {
    setInput(input);
  }

  function onSelectionChange(key: Key | null) {
    setSelection(key);
    if (key != null) onOpen();
  }

  async function fetchStocks(query: string) {
    try {
      const params: URLSearchParams = new URLSearchParams({
        ticker: query.toUpperCase(),
      });
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
        {items &&
          items.map((stock) => {
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
                  </div>
                </div>
              </AutocompleteItem>
            );
          })}
      </Autocomplete>
      <ViewStockDrawer
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
        ticker={selection!.toString()}
        company="Nvidia"
      />
    </div>
  );
}
