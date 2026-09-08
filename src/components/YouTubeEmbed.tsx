"use client";

import { useState } from "react";
import { Play } from "lucide-react";

interface YouTubeEmbedProps {
  youtubeId: string;
  title: string;
}

export default function YouTubeEmbed({ youtubeId, title }: YouTubeEmbedProps) {
  const [loaded, setLoaded] = useState(false);
  const [thumbnailFailed, setThumbnailFailed] = useState(false);

  if (loaded) {
    return (
      <div className="aspect-video overflow-hidden rounded-2xl border border-navy-900/10">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      className="group relative aspect-video w-full overflow-hidden rounded-2xl border border-navy-900/10 bg-navy-900"
      aria-label={`Play video: ${title}`}
    >
      {!thumbnailFailed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`}
          alt={title}
          className="h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
          loading="lazy"
          onError={() => setThumbnailFailed(true)}
          onLoad={(event) => {
            // YouTube returns a 120x90 grey placeholder (still a valid image,
            // so onError never fires) when the real thumbnail hasn't finished
            // processing yet, e.g. right after upload. Treat that as failed.
            if (event.currentTarget.naturalWidth <= 120) {
              setThumbnailFailed(true);
            }
          }}
        />
      )}
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-500 text-navy-950 shadow-lg transition-transform group-hover:scale-110">
          <Play className="h-7 w-7 fill-current" aria-hidden />
        </span>
      </span>
    </button>
  );
}
