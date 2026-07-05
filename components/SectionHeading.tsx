type Props = {
  title: string
  /** Mono eyebrow, e.g. "// stack". Encodes what the section is, not decoration. */
  tag?: string
  /** Optional right-aligned mono data, e.g. "19 tools" or a date range. */
  meta?: string
}

// Swiss/technical section header: mono tag + oversized grotesque title on a
// hairline baseline, left-aligned. Lives in normal flow so it can never
// overlap content.
const SectionHeading = ({ title, tag, meta }: Props) => {
  return (
    <div className="w-full border-b border-ink pb-3 sm:pb-4">
      <div className="flex items-end justify-between gap-4">
        <div>
          {tag && <span className="label block mb-1.5">{tag}</span>}
          <h2 className="font-bold uppercase leading-[0.88] tracking-[-0.02em] text-[clamp(2.2rem,1.1rem+5.4vw,5.5rem)]">
            {title}
          </h2>
        </div>
        {meta && (
          <span className="label hidden sm:block whitespace-nowrap pb-1">
            {meta}
          </span>
        )}
      </div>
    </div>
  )
}

export default SectionHeading
