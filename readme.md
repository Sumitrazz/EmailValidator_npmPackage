
# custommailvalidator

A custom email validation library for Node.js and the browser. It provides a simple way to validate email addresses in your application.

## Installation

Install the package via npm:

```bash
npm i custommailvalidator
```

## Usage

### Basic Usage:

To use `custommailvalidator`, import it into your project and use the provided validation function.

```javascript
const { validateEmail } = require('custommailvalidator');

// Example email
const email = 'example@domain.com';

if (validateEmail(email)) {
  console.log('Valid email address.');
} else {
  console.log('Invalid email address.');
}
```

### ES6 Import:

If you're using ES6 modules:

```javascript
import { validateEmail } from 'custommailvalidator';

const email = 'example@domain.com';

if (validateEmail(email)) {
  console.log('Valid email address.');
} else {
  console.log('Invalid email address.');
}
```

## API

### `validateEmail(email: string)`

- **Parameters**: A string representing the email address to validate.
- **Returns**: `true` if the email address is valid, `false` otherwise.

## Examples

```javascript
// Valid email
validateEmail('test@example.com'); // true

// Invalid email
validateEmail('invalid-email'); // false
```

## License

This project is licensed under the MIT License.




For any inquiries, please contact [Sumit kumar]()- s4sumit30@gmail.com.
