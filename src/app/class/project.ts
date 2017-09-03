export class Project {
  public id: number;
  public name: string;
  public country: string;
  public city: string;

  public creatorName: string;
  public creatorImage: string;

  public usdCollected: number;
  public collected: number;
  public goal: number;
  public currency: string;
  public currencySymbol: string;
  public backers: number;

  public image: string;
  public video: string;

  public url: string;

  constructor(options) {

    this.id = options.id;
    this.name = options.name;
    this.country = options.country;
    this.city = options.city;

    this.creatorName = options.creatorName;
    this.creatorImage = options.creatorImage;

    this.usdCollected = options.usdCollected;
    this.collected = options.collected;
    this.goal = options.goal;
    this.currency = options.currency;
    this.currencySymbol = options.currencySymbol;
    this.backers = options.backers;

    this.image = options.image;
    this.video = options.video;

    this.url = options.url;
  }
}
