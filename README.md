
# SAMPLE OBSERVER DESIGN PATTERN 

This demonstrates how the observer pattern works using a Telephone and Contact (observer) pattern


## Run Locally

Clone the project

```bash
  git clone https://github.com/Theawesomedeveloper/Observer-Design-Pattern.git
```

Go to the project directory

```bash
  cd Observer-Design-Pattern
```

Run the code

```bash
  node observer.js
```


## API Reference

### Telephone 

#### Get started by creating an instance of the Telephone Class

```js
  const jonathan = new Telephone()
```

The telephone Class exposes 3 public API's 

- `addPhoneNumber()`
- `removePhoneNumber()`
- `dialPhoneNumber()`

1. ### addPhoneNumber(contactInfo)

This adds an instance of the `Contact` Class to the list of observers

```js
  jonathan.addPhoneNumber(bliss)
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `contactInfo` | `object` | **Required**. Instance of an observer Class |


click ()here to know more about observer Class

2. ### removePhoneNumber(contactInfo)

This removes an instance of the `Contact` Class to the list of observers

```js
  jonathan.removePhoneNumber(bliss)
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `contactInfo` | `object` | **Required**. Instance of an observer Class |

3. ### dialPhoneNumber(bliss)

This notifies the observer that was passed into the method

```js
  jonathan.dialPhoneNumber(bliss)
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `contactInfo` | `object` | **Required**. Instance of an observer Class |

#### Note: This can also take as an argument the name or phone number of a Contact instance


### Contact

This is the observers Class, it is responsible for creating instances that can be observed by the telephone Class

#### Get started by creating an instance of the Telephone Class

```js
  const bliss = new Contact('bliss', 11111111)
  const peter = new Contact('peter', 55555555)
  const jane = new Contact('jane' 212121000)
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. name of the contact |
| `phoneNumber` | `number` | **Required**. phone number of the contact |





