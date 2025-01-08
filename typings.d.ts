export interface Skill {
  image: string
  title: string
}

export interface Project {
  projPhoto: string;
  title: string;
  summary: string;
  techno: string[];
  link: string;
}

export interface Experience {
	job_img: string;
	job_title: string;
	job_company: string;
	technologies: string[];
	dataStarted: string;
	isCurrentlyWorkingHere: boolean;
	points: string[];
}