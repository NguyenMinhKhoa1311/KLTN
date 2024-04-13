export class CreateSkillDto {
    constructor(
        public SkillId: string,
        public Name: string,
        public Level: number,
    ){}
}
