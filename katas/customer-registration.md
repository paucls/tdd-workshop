# Customer Registration Kata

Your job is to implement a complete feature to allow customers to register in our online store.

### Requirements

Whenever a customer is registered successfully the system should send a welcome email `Welcome John Doe!`

Registration should validate that the customer provides name, email and password fields.

The rules for a valid email are as follows:
- Should be at least 5 characters long
- Contains a @

The rules for a valid password are as follows:
- Should be at least 8 characters long
- Contains a capital letter
- Contains a lowercase
- Contains a number
- Contains an underscore

Registration should also validate that a customer with the same email does not already exists.

### Considerations

This exercise is meant to be used to practice the inner and outer feedback loops in TDD.
Start writing an Acceptance Test to guide your development, next do TDD of the implementation.
