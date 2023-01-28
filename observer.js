/*
Task & Assignment
For this exercise, our goal is to create a telephone package. The telephone class should expose 3 different methods.

AddPhoneNumber - For adding a new phone number
RemovePhoneNumber - For removing a phone number
DialPhoneNumber - For dialling a phone number (only phone numbers that have been added can be dialled)
The telephone class should also maintain a list of #observers and notify them whenever a phone number is dialled. 



Requirements

Create a telephone class. It should expose 3 public methods - AddPhoneNumber, RemovePhoneNumber, and DialPhoneNumber.
Update the telephone class, so it uses the observer pattern (have methods to add, remove and notify #observers)

Create a class for the observer, it should have a method that can be called by the telephone class to notify it. 
Have the telephone class notify the #observers any time a phone number is dialed. 
Add two #observers to the telephone class

 The first one should print the phone number
  The second one should print `Now Dialling 2347023232`

  */




/**
 * @class
 */
class Telephone {

    /**
     * @private
     * @type {...number}
     */

    #contactList;

    /**
     * @private
     * @type {...number}
     */

    #observers;

    _phoneNumber;




    constructor() {
        this.#contactList = new Array();
        this.#observers = new Array()
    }




    /**
     * adds a phone number to the observer array
     * @param {number} phoneNumber
     * @return {void} 
     */

    _addObserver(phoneNumber) {
        this.#observers.push(phoneNumber);
        this._notifyObserver()
    }




    /**
     * @protected
     * removes the first element in the observer array
     */

    _removeObserver() {
        this.#observers.shift()
    }




    /**
     * @protected
     * call the update method in the observer class
     */

    _notifyObserver() {
        this.#observers.forEach(phoneNumber => {
            observer.update(phoneNumber);
            this._removeObserver()
        })
    }




    /**
     * @protected
     * @param {number} phoneNumber - phone number to find its index
     * @returns {number} index - index of the phoneNumber passed in
     */

    _findContact(phoneNumber) {
        return this.#contactList.findIndex(contact => contact === phoneNumber);
    }



    

    /**
     * 
     * @param {*} phoneNumber 
     * @returns {number} PhoneNumber
     */

    _checkAndConvertToNumber(phoneNumber){
        if (typeof (phoneNumber) !== 'number') {
            // what!!! Phone number is not a number ? how dare them
            // lets assume it was a string or string of numbers seperated by dashes
            phoneNumber = parseInt(phoneNumber.replaceAll('-', ""))

            // What if after all the bashing phone number still isn't a number ?  well let's check
            if (typeof (phoneNumber) !== 'number') throw new Error('Phone Number must be a Number')
        }

        return phoneNumber;
    }





    /**
     * Adds a phone number to our contact list
     * @public
     * @param {number} phoneNumber - Adds the Phone number to our contact list
     */

    addPhoneNumber(phoneNumber) {

        this._phoneNumber = this._checkAndConvertToNumber(phoneNumber);
        
        if(isNaN(this._phoneNumber)) throw new Error('Phone Number must be a Number');
        
        this.#contactList.push(this._phoneNumber);

        return this;
    }





    /**
     * Removes a phone number from our contact list
     * @public
     * @param {number} phoneNumber - phone number to remove
     * @returns {string | this}
     */

    removePhoneNumber(phoneNumber) {

        this._phoneNumber = this._checkAndConvertToNumber(phoneNumber);
        if(isNaN(this._phoneNumber)) throw new Error('Phone Number must be a Number');

        const requestedContact = this._findContact(phoneNumber)

        if (requestedContact === -1) return ('phoneNumber not found');

        this.#contactList.splice(requestedContact, 1);
        

        return this;
    }





    /**
     * @public
     * @param {number} phoneNumber 
     * @returns { string | this}
     */

    dialPhoneNumber(phoneNumber) {

        this._phoneNumber = this._checkAndConvertToNumber(phoneNumber);
        if(isNaN(this._phoneNumber)) throw new Error('Phone Number must be a Number');

        const requestedContact = this._findContact(this._phoneNumber);

        if (requestedContact === -1) return ('phoneNumber not found');

        this._addObserver(this._phoneNumber);

        return this
    }


}


/**
 * Creates a new observer
 * @class 
 */
class Observer {

    /**
     * logs the dialled number to the console and also return the number just in case we need it
     * @param {number} phoneNumber 
     * @returns {number} the dialed phone Number 
     */
    update(phoneNumber) {

        console.log(`Dialling... ${phoneNumber}`);

        return `Dialling... ${phoneNumber}`
    }
}





const telephone = new Telephone()
const observer = new Observer()

telephone.addPhoneNumber('111-111-111')
telephone.addPhoneNumber(5678)
telephone.addPhoneNumber(9101)
telephone.addPhoneNumber(1213)
telephone.addPhoneNumber(1415)
telephone.addPhoneNumber(1617)

telephone.removePhoneNumber(5678)

telephone.dialPhoneNumber('111-111-111')
telephone.dialPhoneNumber(5678)
telephone.dialPhoneNumber(9101)
telephone.dialPhoneNumber(1213)


telephone.addPhoneNumber(5555).addPhoneNumber(6666).removePhoneNumber(6666).dialPhoneNumber(5555)