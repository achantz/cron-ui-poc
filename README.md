# CRON-UI Proof of Concept

## Description

This application uses cron-ui to make a GET call to a NestJS API.

To create a **cron** job add the following command to a new job in order to make a cUrl GET call to the API endpoint:

`curl -X GET -H "Accept: application/json" -H "Content-type: application/json" "http://cron-ui-api:3333/api/cron"`

When the job is added, ensure you click the _"Save to Crontab"_ button to ensure the job is added to the crontab.db file so it can run again when the container is restarted.

This curl command will make a GET request to the NestJS endpoint which will return the current date and time. This response will show up in the **cron** job log.

## Requirements

- Local docker instance

## Running Application

From the cloned directory run: `docker-compose up`

## Accessing Application

Navigate to <http://localhost:8000>

# Test
