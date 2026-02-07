import { title } from "@/components/primitives";
import { Counter } from "@/components/counter";
export default function AboutPage() {
  return (
    <div>
      <h1 className={title()}>About</h1>
      <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <Counter />
      </div>
    </div>
  );
}
