export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-blue-400">
          <span className="gradient-text">QuantumKit</span>
          <br />
          Modern Software Solutions
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto lg:mx-0">
          Transforming Ideas Into Digital Reality. We specialize in Mobile Apps,
          Web Development, AI Integration, and Custom Software Development.
        </p>
      </main>
    </div>
  );
}
