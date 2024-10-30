import { auth } from "@/auth";
import Searchform from "../../components/Searchform";
import Startupcard from "../../components/Startupcard";
import { client } from "@/sanity/lib/client";
import { STARTUP_QUERY } from "@/sanity/lib/queries";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = await client.fetch(STARTUP_QUERY)

  // const posts = [ { 
  //   _createdAt: new Date(),
  //   views: 100,
  //   author: { _id: 1, name: "Aryan Shandilya" },
  //   _id : 1,
  //   description: "Detoxify your social media feed and make it more productive with Detoxify UI",
  //   image: "https://images.unsplash.com/photo-1587727383733-f5222d6855b5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   category: "Tech",
  //   title: "Detoxify UI",
  // }, ]

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
    </>
  );
}
