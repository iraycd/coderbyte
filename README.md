# Code Challenge

1. I added TypeScript types to the function arguments and return values, which improves code clarity and helps to avoid potential type errors.
2. I renamed the candidate variable to `candidatePartitionKey` to provide more context to the variable's purpose.
3. I removed the nested if statements and simplified the logic by using the ternary operator.
4. I replaced the `generateHash` function name with `generateKey` to better reflect its purpose. Overall, these changes make the code more concise and easier to understand, making it more maintainable in the long term.

## Tickets

### Ticket 1: Add ability for Facilities to save custom ids for Agents

Description: Create a new feature that allows Facilities to save custom ids for each Agent they work with. This new id will be used instead of the internal database id when generating reports for the Facility.

**Acceptance Criteria:**

- A new "Custom ID" field is added to the Agent table in the database.
- A new API endpoint is created that allows Facilities to update the custom id for a specific Agent.
- The "generateReport" function is updated to use the custom id instead of the internal database id when generating reports for a Facility.
- The new feature is well-documented in the platform's user guide.

**Time/Effort Estimates:**

- Database changes: 2 hours
- API endpoint creation: 4 hours
- Function update: 2 hours
- User guide documentation: 2 hours

**Implementation Details:**

- The database schema will need to be updated to include the new "Custom ID" field for the Agent table.
- The API endpoint should be secured and only allow Facilities to update custom ids for Agents that are assigned to their account.
- The "generateReport" function will need to be updated to check if a custom id exists for an Agent before using it in the report.
- The user guide should include step-by-step instructions on how to update an Agent's custom id and how to generate a report using custom ids.

### Ticket 2: Add validation for custom ids when generating reports

Description: Update the "generateReport" function to validate that the custom ids provided by Facilities are valid and exist in the Agent table of the database. This will prevent Facilities from generating reports with invalid custom ids.

**Acceptance Criteria:**

- The "generateReport" function now validates that each custom id provided by the Facility exists in the Agent table of the database.
- If an invalid custom id is detected, the function returns an error message to the Facility.

**Time/Effort Estimates:**

- Function update: 2 hours

**Implementation Details:**

- The "generateReport" function should query the database to ensure that each custom id provided by the Facility exists in the Agent table.
- If an invalid custom id is detected, the function should return an error message to the Facility indicating which custom id is invalid.
- The error message should be clear and informative to help the Facility correct the mistake.

### Ticket 3: Update Agent management UI to allow Facilities to save custom ids

Description: Update the Agent management UI to allow Facilities to input and save custom ids for each Agent they work with.

**Acceptance Criteria:**

- The Agent management UI now includes a new "Custom ID" field.
- Facilities can input and save custom ids for each Agent they work with.
- The custom ids are properly saved to the database.

**Time/Effort Estimates:**

- UI update: 4 hours

**Implementation Details:**

- The Agent management UI should be updated to include a new "Custom ID" field next to the existing fields.
- The front-end should send the custom id to the backend API when saving an Agent's information.
- The backend API should be updated to save the custom id to the Agent table in the database.

### Ticket 4: Update Report generation UI to use custom ids

Description: Update the Report generation UI to allow Facilities to select whether they want to use the internal database id or custom id for each Agent in the report.

**Acceptance Criteria:**

- The Report generation UI now includes a new option to select whether to use internal database ids or custom ids for Agents in the report.
- When custom ids are selected, the report is generated using the custom ids.
- The report includes the custom id for each Agent.

**Time/Effort Estimates:**

- UI update: 4 hours

**Implementation Details:**

- The Report generation UI should be updated to include a new option to select whether to use internal database ids or custom ids for Agents in the report.
- When the custom id option is selected, the front-end should send the custom ids to the backend API when generating the report.
- The backend API should be updated to use the custom ids instead of the internal database ids when generating the report.
- The report template should be updated to include the custom id for each Agent.
