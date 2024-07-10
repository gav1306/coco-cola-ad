import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import logo from "./assets/logo.png";
import can from "./assets/can.png";
import firecrackerOne from "./assets/firecracker-one.png";
import firecrackerTwo from "./assets/firecracker-two.png";

function App() {
  return (
    <main className="bg-[#1f2121] min-h-dvh flex items-center justify-center ">
      <Card className="w-[300px] bg-[#1f2121]  border-0 card text-white">
        <img src={logo} alt="coco-cola-logo" className="w-full logo" />
        <img src={can} alt="coco-cola-can" className="w-[250px] can" />
        <div className="content overflow-hidden absolute h-full rounded-xl">
          <CardHeader>
            <CardTitle className="text-2xl">Happy New Year!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className=" tracking-wide italic">Open Happiness </p>
          </CardContent>
          <CardFooter>
            <Button
              variant="outline"
              className="text-white bg-inherit "
              asChild
            >
              <a href="https://www.coca-colacompany.com/">Know More</a>
            </Button>
          </CardFooter>
          <div className="fire-cracker ">
            <img src={firecrackerOne} alt="fire-cracker" />
            <img src={firecrackerTwo} alt="fire-cracker" />
          </div>
        </div>
      </Card>
    </main>
  );
}

export default App;
