import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import Searchform from "../../components/Searchform";
import Startupcard, { StartupCardType } from "../../components/Startupcard";
import { STARTUP_QUERY } from "@/sanity/lib/queries";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const params = { search: query || null}
  const {data: posts} = await sanityFetch( { query: STARTUP_QUERY, params} )

  return (
    <>
      <section className="pink_container">
        <p className="tag">PITCH AND GROW</p>
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect With Entrepreneurs{" "}
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit ideas, Vote on Pitches and Get Noticed in Virtual Competitions.
        </p>

        <Searchform />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for: ${query}` : "All Pitches"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => {
              return <Startupcard key={post._id} post={post} />;
            })
          ): ( <p className="no-results">No posts found</p> )}
        </ul>
      </section>

      <SanityLive/>
    </>
  );
}
