# Software Requirements

## Vision

- What is the vision of this product?
  - For medical personnel who need an application to queue patients, iCare is a simple app that is easy to use for any person in the medical field. This app will be able to queue patients into different priority levels. 
- What pain point does this project solve?
  - Some apps may be complex to use but ours is simple and effective. By having multiple priority levels, doctors are easily able to track who to see next.
- Why should we care about your product?
  - Because our app will provide a faster and more efficient way of queuing patients.

## Scope (In/Out)

- IN - What will your product do?
  - Describe the individual features that your product will do.
    - Create account
    - Access account
    - Take in patient information
    - Queue patient into 3 severity levels
- OUT - What will your product not do?
    - This app will not run on mobile devices.

## Minimum Viable Product

- What will your MVP functionality be?
  - To be able to queue a person into different priority levels and be accepted by priority.
- What are your stretch goals?
  - Possibly put a patient back into queue
  - Have a database
  - Add a doctor's note after the patient has been seen
- What stretch goals are you going to aim for?
  - Database

## Functional Requirements

1. The app serves two roles: receptionist and provider. Both roles can authenticate and receive the appropriate authorization based on their role.
2. Front-desk medical personnel (receptionist) can create new patients and enter their data, such as name, age, SSN and the reason for visit
3. A receptionist can assign a patient into one of three queues, based on the reason for visit/ severity of symptoms
4. A receptionist can reassign patients between the queues if their symptoms worsen
5. Providers will see patients from the queue one by one.
6. All patients from the red queue have to be seen first, followed by yellow and green.
7. The app allows for multiple receptionists and providers to use the app at the same time.

## Data Flow

1. Receptionist and provider will sign up for the app and indicate their role.
2. They will sign into the app. Based on their role, they will have different functionality
3. They will operate using a terminal.
4. A receptionists will input patient data into the terminal (name, age, reason for visit/symptoms, select a queue)
5. The patient then will be put into selected queue (red, yellow or green)
6. The provider will be polling for patients in the queue continuously while the queue is empty.
7. The provider will receive patient data from the front of the queue, and remove that patient from the queue.
8. The provider will stop polling the queue until they are ready to see the next patient
9. When the provider is done seeing the patient, they will indicate in terminal that they are ready to see the next patient
10. While there is someone in the red queue, they will not look into yellow or green queue.

## Non-Functional Requirements

- Usability - Our app can be used by any urgent care clinic to manage the flow of walk-in patients. It allows for two user roles - a receptionist and a provider.
- Scalability - Multiple receptionists and providers are able to use the app. The will be use AWS SQS service to handle scalability.
