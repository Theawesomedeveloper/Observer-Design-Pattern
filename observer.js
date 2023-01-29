
/**
 * This is the telephone class
 * @class
 */
class Telephone {

    #observers;

    /**
     * this initializes an empty set when an instance of the Telephone class is created
     * @constructor
     */
    constructor() {
        this.#observers = new Set()
    }

    /**
     * @public
     * @param {object} contactInfo - an instance of the Contact class
     * @this Telephone
     * @returns 
     */
    addPhoneNumber(contactInfo) {

        this.#observers.add(contactInfo);

        console.log(`${contactInfo.name} added sucessfully`)

        return this;
    }

    /**
     * This removes a specified observer from the list of observers
     * @param {object | string | number} contactInfo - information associated with the number to be removed from the list of observers
     * @this Telephone
     */
    removePhoneNumber(contactInfo) {

        this.#observers.forEach(observer => {
            if (observer.phoneNumber === contactInfo || observer.name === contactInfo.name || observer.name === contactInfo) {
                this.#observers.delete(observer);
                console.log(`${contactInfo.name} removed from the list of observers`)
            }
        });

        return this;
    }


    /**
     * This notifies an observer 
     * @param {object | string | number} contactInfo - information associated with the number to be notified in the list of observers
    * @this Telephone
     */

    dialPhoneNumber(contactInfo) {
        this.#observers.forEach(observer => {
            if (observer.phoneNumber === contactInfo || observer.name === contactInfo.name || observer.name === contactInfo) {
                observer.update(observer);
            }
        });

        return this;
    }


}


/**
 * This is the observer class
 * @class
 */
class Contact {

    constructor(name, phoneNumber) {
        this.name = name;
        this.phoneNumber = phoneNumber;
    }

    /**
     * this listens for when an instance of this class is dialled
     * @public
     * @param {object} observer 
     * @returns {object}  observer that called the method
     */
    update(observer) {
        console.log(`Now dialling... ${observer.phoneNumber}`);

        return observer;
    }
}





const telephone = new Telephone();

const james = new Contact('james', 09060145678)
const bright = new Contact('bright', 08123456783)
const bliss = new Contact('bliss', 08045632451)

// Methods are also Chainable

telephone
    .addPhoneNumber(james)
    .addPhoneNumber(bright)
    .removePhoneNumber(james)
    .dialPhoneNumber(bright)
    .dialPhoneNumber(bright)


// OR YOU CAN WRITE THEM AS YOU PLEASE

// telephone.addPhoneNumber(james)
// telephone.addPhoneNumber(bright)
// telephone.addPhoneNumber(bliss)

// telephone.removePhoneNumber(1234)
// telephone.removePhoneNumber(bright)
// telephone.removePhoneNumber('bliss')

// telephone.dialPhoneNumber(1234)
// telephone.dialPhoneNumber(bright)
// telephone.dialPhoneNumber('bliss')
