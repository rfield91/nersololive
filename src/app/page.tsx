import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  // const session = await getServerAuthSession();

  const navButtons = [
    {
      text: "Live Results",
      link: "/live",
      description: "Live results from the latest event",
      enabled: true,
    },
    {
      text: "Event Results",
      link: "/results",
      description: "Results from the current season",
      enabled: true,
    },
    {
      text: "Season Standings",
      link: "/standings",
      description: "Current season point standings",
      enabled: true,
    },
    {
      text: "Archive",
      link: "/archive",
      description: "Event results and season points from past seasons",
      enabled: false,
    },
  ];

  return (
    <main className="flex  flex-col items-center justify-center ">
      <div className="pt-16">
        <Image src={"/ner150.png"} alt="NER Logo" width={150} height={150} />
      </div>
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <div className="grid grid-cols-1 gap-4 text-center md:gap-8">
          {navButtons
            .filter((button) => button.enabled)
            .map((button) => (
              <Link
                key={button.link}
                className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
                href={button.link}
              >
                <h3 className="text-2xl font-bold">{button.text}</h3>
                {button.description && (
                  <div className="text-sm">{button.description}</div>
                )}
              </Link>
            ))}
        </div>
        {/* <div className="flex flex-col items-center gap-2">
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-center text-2xl text-white">
              {session && <span>Logged in as {session.user?.name}</span>}
            </p>
            <Link
              href={session ? "/api/auth/signout" : "/api/auth/signin"}
              className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
            >
              {session ? "Sign out" : "Sign in"}
            </Link>
          </div>
        </div> */}
      </div>
    </main>
  );
}
