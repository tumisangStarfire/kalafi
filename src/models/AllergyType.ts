

export class AllergyTypes {
    private id?: number;
    private allergyName: string;
    private allergySeverity: string;
    private allergyDescription: string;
    private category: string;



    set setAllergyName(allergyName: string) {
        this.allergyName = allergyName;
    }
    get getAllergyName(): string {
        return this.allergyName;
    }

    set setAllergySeverity(allergySeverity: string) {
        this.allergySeverity = allergySeverity;
    }
    get getAllergySeverity(): string {
        return this.allergySeverity;
    }

    set setAllergyDescription(allergyDescription: string) {
        this.allergyDescription = allergyDescription;
    }
    get getAllergyDescription(): string {
        return this.allergyDescription;
    }

    set setCategory(category: string) {
        this.category = category;
    }


} 