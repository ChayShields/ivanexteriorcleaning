import { beforeAfterVideos } from "@/lib/videos";
import YouTubeEmbed from "./YouTubeEmbed";

export default function BeforeAfterGallery() {
  if (beforeAfterVideos.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">
        Before &amp; After
      </h2>
      <p className="mt-2 max-w-2xl text-navy-800/80">
        Real jobs, filmed as they happened — no staging, just the actual
        difference a proper clean makes.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {beforeAfterVideos.map((video) => (
          <div key={video.youtubeId}>
            <YouTubeEmbed youtubeId={video.youtubeId} title={video.title} />
            <p className="mt-3 text-sm font-medium text-navy-800">{video.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
