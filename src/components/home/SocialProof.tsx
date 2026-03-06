const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    text: "Absolutely the best sushi in Austin. The dragon roll is a work of art — and the atmosphere is so calming and beautiful. Will be back every week.",
    stars: 5,
    source: "Google",
  },
  {
    id: 2,
    name: "James T.",
    text: "Kitsu Nori has spoiled me for every other sushi spot. The wagyu tataki is unreal. Chef Kenji clearly pours his heart into every dish.",
    stars: 5,
    source: "Yelp",
  },
  {
    id: 3,
    name: "Priya K.",
    text: "Took my partner here for our anniversary. The omakase experience was flawless — each course a surprise, each bite better than the last. Truly special.",
    stars: 5,
    source: "Google",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-3" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[rgb(184,152,90)] fill-current" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function SocialProof() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.4em] uppercase text-[rgb(184,152,90)] font-medium mb-3">
            What Our Guests Say
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-[rgb(29,51,98)]">
            Loved by Austin
          </h2>
        </div>

        {/* Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <blockquote
              key={review.id}
              className="bg-[rgb(252,250,246)] p-8 border-l-2 border-[rgb(184,152,90)]"
            >
              <StarRating count={review.stars} />
              <p className="text-[rgb(42,40,38)] text-sm leading-relaxed mb-6 italic font-light">
                &ldquo;{review.text}&rdquo;
              </p>
              <footer className="flex items-center justify-between">
                <cite className="text-xs tracking-widest uppercase text-[rgb(29,51,98)] font-medium not-italic">
                  {review.name}
                </cite>
                <span className="text-[10px] text-[rgb(156,148,138)] uppercase tracking-widest">
                  via {review.source}
                </span>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* Press mentions */}
        <div className="mt-16 pt-12 border-t border-gray-100">
          <p className="text-center text-xs tracking-[0.4em] uppercase text-[rgb(156,148,138)] font-medium mb-8">
            As Seen In
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 opacity-40">
            {["Austin Chronicle", "Eater Austin", "Austin Monthly", "Texas Monthly", "Zagat"].map(
              (pub) => (
                <span
                  key={pub}
                  className="text-sm font-serif text-[rgb(29,51,98)] font-semibold tracking-wide"
                >
                  {pub}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
