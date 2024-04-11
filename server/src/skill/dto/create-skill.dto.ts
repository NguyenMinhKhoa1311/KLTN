export class CreateSkillDto {
    constructor(
        public skillId: string,
        public name: string,
        public description: string,
        public level: number,
    ){}
}
