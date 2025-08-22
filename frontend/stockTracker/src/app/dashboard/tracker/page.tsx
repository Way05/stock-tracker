import StockList from "@/app/components/stockList";
import StockSearch from "@/app/components/stockSearch";
import { clearCookies } from "@/app/cookieHandler";
import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Link } from "@heroui/link";

export default function Tracker() {
  return (
    <div className="mx-auto flex h-screen flex-col items-center justify-center">
      <div className="absolute top-5 flex gap-5">
        <h1 className="text-3xl font-bold">tracker</h1>
        <Button
          type="submit"
          color="success"
          variant="ghost"
          href="/dashboard"
          as={Link}
        >
          dashboard
        </Button>
        <Button
          type="submit"
          color="success"
          variant="ghost"
          href="/dashboard/bulletin"
          as={Link}
        >
          bulletin
        </Button>
        <Button
          type="submit"
          color="success"
          variant="ghost"
          onPress={clearCookies}
        >
          Log Out
        </Button>
      </div>
      <div className="grid h-full w-full grid-rows-3">
        <div className="row-start-2 mx-auto grid grid-cols-3 gap-5">
          <div className="col-span-1">
            <Card>
              <CardHeader>
                <h1 className="text-2xl">stats</h1>
              </CardHeader>
              <CardBody>
                <p>Holdings</p>
                <p>Current Value</p>
                <p>Gross Returns</p>
                <p>% Returns</p>
              </CardBody>
            </Card>
          </div>
          <div className="col-span-2 row-span-1 flex flex-col gap-5">
            <StockSearch />
            <StockList />
          </div>
        </div>
      </div>
    </div>
  );
}
