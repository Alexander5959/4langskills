export class Word {
    constructor(
        public word: string,
        public translate: string,
        public transcription: string,
        public pic_url: string,
        public sound_url: string,
        public id?: number
    ) {}
}
