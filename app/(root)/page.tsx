import Searchform from "../../components/Searchform";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect With Entrepreneurs{" "}
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit ideas, Vote on Pitches and Get Noticed in Virtual Competitions.
        </p>

        <Searchform />
      </section>
    </>
  );
}