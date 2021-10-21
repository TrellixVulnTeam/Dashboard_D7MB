export class Product {


  private _id: number;
  private _animal: string;
  private _category: string;
  private _name: string;
  private _price: number;
  private _marque: string;

  static productLength = 1;


	constructor(animal: string, category: string, name: string, price: number, marque: string) {
		this._id = Product.productLength;
		this._animal = animal;
    this._marque = marque;
		this._category = category;
		this._name = name;
		this._price = price;

    Product.productLength++;
	}


    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter animal
     * @return {string}
     */
	public get animal(): string {
		return this._animal;
	}

    /**
     * Getter category
     * @return {string}
     */
	public get category(): string {
		return this._category;
	}

    /**
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
	}

    /**
     * Getter price
     * @return {number}
     */
	public get price(): number {
		return this._price;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter animal
     * @param {string} value
     */
	public set animal(value: string) {
		this._animal = value;
	}

    /**
     * Setter category
     * @param {string} value
     */
	public set category(value: string) {
		this._category = value;
	}

    /**
     * Setter name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
	}

    /**
     * Setter price
     * @param {number} value
     */
	public set price(value: number) {
		this._price = value;
	}

   /**
     * Getter marque
     * @return {string}
     */
	public get marque(): string {
		return this._marque;
	}

    /**
     * Setter marque
     * @param {string} value
     */
	public set marque(value: string) {
		this._marque = value;
  }

}
