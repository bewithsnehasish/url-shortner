import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const [longUrl, setLongUrl] = useState<string>("");
  const navigate = useNavigate();

  const handleShorten = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (longUrl) {
      navigate(`/auth?createNew=${longUrl}`);
    }
  };

  return (
    <div className="flex flex-col items-center ">
      <h2 className="my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-white text-center font-extrabold">
        The Only URL Shortner <br /> you &rsquo;ll ever need!! 👇
      </h2>
      <form
        onSubmit={handleShorten}
        className="sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-2"
      >
        <Input
          type="url"
          value={longUrl}
          placeholder="Enter the Loooooonggg Url!!!"
          onChange={(e) => setLongUrl(e.target.value)}
          className="flex-1 py-4 px-4 h-full"
        />
        <Button className="h-full" type="submit" variant="destructive">
          Shorten !
        </Button>
      </form>
      <img
        src="/banner.jpeg"
        alt="Banner"
        className="w-full my-10 md:px-11 lg:px-20"
      />
      <Accordion type="multiple" className="w-full md:px-11 lg:px-20">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is This Url Shortner?</AccordionTrigger>
          <AccordionContent>
            This is a Url Shortner that shortens long urls to a short url.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How to use this Url Shortner?</AccordionTrigger>
          <AccordionContent>
            To use this URL shortener, simply enter your long URL and click
            "Shorten!".
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            What are the benefits of shortening URLs?
          </AccordionTrigger>
          <AccordionContent>
            Shortened URLs are easier to share and can help track link
            performance.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Is it free to use?</AccordionTrigger>
          <AccordionContent>
            Yes, this URL shortener is completely free to use!
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
