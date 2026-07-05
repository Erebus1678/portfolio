type Props = {
  title: string
  subtitle?: string
}

// Fluid section heading kept in normal flow (no absolute positioning),
// so it can never overlap the content below it. Sizing scales with the
// viewport via clamp(); letter-spacing uses em so it tracks the font size.
const SectionHeading = ({ title, subtitle }: Props) => {
  return (
    <div className="shrink-0 text-center">
      <h2 className="uppercase font-medium text-gray-500 tracking-[0.35em] sm:tracking-[0.5em] text-[clamp(1.1rem,0.9rem+1.2vw,1.6rem)]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 uppercase text-gray-400 tracking-[0.15em] text-[clamp(0.7rem,0.62rem+0.35vw,0.9rem)]">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
