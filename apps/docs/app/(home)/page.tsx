import { Button } from '@docs/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main
      id="nd-page"
      className="max-w-fd-container mx-auto flex w-full flex-col items-center gap-4">
      <div className="container flex flex-col items-center gap-2 py-8 text-center md:py-16 lg:py-20 xl:gap-4">
        <h1 className="text-primary/90 leading-tighter max-w-3xl text-balance text-4xl font-semibold tracking-tight lg:leading-[1.1] xl:max-w-7xl xl:text-5xl xl:font-medium xl:tracking-tighter">
          Copy-paste ready Universal Forms
        </h1>
        <h3 className="text-muted-foreground leading-tighter max-w-3xl text-balance text-2xl font-semibold tracking-tight lg:leading-1 xl:max-w-7xl xl:text-3xl xl:font-medium xl:tracking-tighter">
          Easy to install, customize and maintain
        </h3>
        <figure className="flex flex-col gap-4">
          <Image
            src="/images/banner-light.svg"
            width="600"
            height="300"
            alt="Registry"
            className="mt-6 dark:hidden"
          />
          <Image
            src="/images/banner-dark.svg"
            width="600"
            height="300"
            alt="Registry"
            className="mt-6 hidden shadow-sm dark:block"
          />
          <figcaption className="text-center text-gray-500">
            A forms library for React Native and Expo apps
          </figcaption>
        </figure>
        <div className="**:data-[slot=button]:shadow-none flex w-full items-center justify-center gap-2 pt-2">
          <Button asChild size="sm">
            <Link href="/docs">Get Started</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
