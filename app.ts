class User {
	skills: string[];

	addSkill(skill: string): void;
	addSkill(skill: string[]): void;
	addSkill(skillOrSkills: string | string[]): void {
		if (typeof skillOrSkills === 'string') {
			this.skills.push(skillOrSkills);
		} else if (Array.isArray(skillOrSkills)) {
			this.skills.concat(skillOrSkills);
		}
	}
}

function run(distance: number): number;
function run(distance: string): string;
function run(distance: number | string): number | string {
	if (typeof distance === 'number') {
		return distance;
	} else {
		return distance;
	}
}