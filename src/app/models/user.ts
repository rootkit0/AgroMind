export class User {
    uid: string;
    companyId: string;
    storeId: string;
    email: string;
    emailVerified: boolean;
    phoneNumber: string;
    name: string;
    surname: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;

    constructor(uid: string, companyId: string, storeId: string, email: string, emailVerified: boolean, phoneNumber: string, name: string, surname: string, address: string, city: string, postalCode: string, country: string, companyName: string) {
        this.uid = uid;
        this.companyId = companyId;
        this.storeId = storeId;
        this.email = email;
        this.emailVerified = emailVerified;
        this.phoneNumber = phoneNumber;
        this.name = name;
        this.surname = surname;
        this.address = address;
        this.city = city;
        this.postalCode = postalCode;
        this.country = country;        
    }
}