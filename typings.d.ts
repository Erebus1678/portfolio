export interface Skill {
  image: string
  title: string
}

export interface Project {
  /** Screenshot/preview image. Omitted for projects without a real shot. */
  projPhoto?: string
  title: string
  summary: string
  techno: string[]
  /** Live demo URL (optional — some projects are code-only). */
  link?: string
  /** Public source repository URL. */
  repo?: string
}

export interface Experience {
  job_img: string
  job_title: string
  job_company: string
  technologies: string[]
  /** Start date label, e.g. "Feb 2023". */
  dateStarted: string
  /** End date label, ignored when isCurrentlyWorkingHere is true. */
  dateEnded?: string
  isCurrentlyWorkingHere: boolean
  points: string[]
}
