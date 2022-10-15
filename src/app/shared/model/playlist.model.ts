import { SafeResourceUrl } from "@angular/platform-browser";

export class Playlist {
    id!: string;
    name!: string;
    link!: string;
    date!: string;
    style!: string;
    urlSafe!: SafeResourceUrl;
}