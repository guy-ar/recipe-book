export class Recipe {
    public name: string;
    public description: string;
    public imgUrl: string;

    constructor(name: string, desc: string, img: string) {
        this.description = desc;
        this.imgUrl = img;
        this.name = name;
    }


}