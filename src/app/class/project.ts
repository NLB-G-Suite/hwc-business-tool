export class Project {
  public identifiant: number;
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

  public origin: string;

  public pined: boolean;
  public notes: boolean;

  public googleSave: any;

  constructor(options) {

    this.identifiant = options.identifiant;
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

    this.origin = options.origin;

    this.pined = options.pined === 'VRAI' ? true : false;
    this.notes = options.notes ? options.notes : '';

    this.googleSave = options.googleSave ? options.googleSave : null;
  }
}
