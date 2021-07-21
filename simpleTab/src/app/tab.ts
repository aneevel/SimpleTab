export class Tab {

    notes?: any;
    staves?: any[];
    title?: string;
    artist?: string;
    transcriber?: string;
    bpm?: number;

    constructor(notes: any[], staves: any[], 
        title: string, artist: string, 
        transcriber: string, bpm: number) {
        this.notes = notes;
        this.staves = staves;
        this.title = title;
        this.artist = artist;
        this.transcriber = transcriber;
        this.bpm = bpm;
    }
}
