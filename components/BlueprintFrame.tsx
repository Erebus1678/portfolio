// Persistent blueprint frame: hairline guides at the content-column edges,
// fixed and full-height so the hero's drawing language continues down every
// section instead of stopping after the hero. Static, decorative, and behind
// content (main sits at z-10), so it reads through the gutters.
const BlueprintFrame = () => (
  <div
    className="pointer-events-none fixed inset-0 z-0 hidden xl:block"
    aria-hidden="true"
  >
    <div className="mx-auto h-full w-full max-w-6xl min-[2000px]:max-w-[1680px] min-[2560px]:max-w-[1920px] border-x border-wire" />
  </div>
)

export default BlueprintFrame
