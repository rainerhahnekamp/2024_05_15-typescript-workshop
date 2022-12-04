# TypeScript Workshop - Details

1. Study the example shown by the trainer
2. Create `AbstractPassengerManager`, an abstract class that should be implemented by your existing PassengerManagers
3. Create a function `createPassengerManager` that returns an implementation of `AbstractPassengerManager`.
4. Test your implementation
5. Create a new interface `IPassenger`. Create two classes that implement it:
   1. `Passenger`: We have that already
   2. `PremiumPassenger`: Has an additional property `miles`.
6. Update your PassengerManagers to depend only on `IPassenger`.
7. Test your implementation
8. Add a method `where` that accepts a lambda function as selector.
9. Test your implementation
