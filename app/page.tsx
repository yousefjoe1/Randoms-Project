import { Laugh, Notebook, Quote } from "lucide-react";
import Link from "next/link";
import Generate from "./_components/Forms/Generate";

export default function Home() {
  return (
    <main>

      <div className="flex gap-4 px-3">
        <Link href={'/my-advices'} className="base-btn">
          <span className="base-btn-text-one flex justify-center">
            <Notebook  />
          </span>
          <span className="base-btn-text-two flex justify-center">Advices</span>
        </Link>
        <Link href={'/quotes'} className="base-btn">
          <span className="base-btn-text-one flex justify-center">
            <Quote  />
          </span>
          <span className="base-btn-text-two flex justify-center">Qoutes</span>
        </Link>
        <Link href={'/jokes'} className="base-btn">
          <span className="base-btn-text-one flex justify-center">
            <Laugh  />
          </span>
          <span className="base-btn-text-two flex justify-center">Jokes</span>
        </Link>
      </div>




        <div className="flex justify-center items-center w-full pt-10">
          <Generate />

        </div>
    </main>
  );
}
