# FrontendChallenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

To start the angular Deno server : 
cd /frontendcodingchallenge
deno run --allow-net server.ts --port=8080


Comments:

1)Completed the angular application as mentioned in the 'frontend-challenge.md'
2)Bonus task: The issue was with invalid Id for enrollee 'Rand Miller'.
 and it failed to validate at 'UUID.validate(id)' which causes internal server error. 
 
 I have modified below Id:
 
 original Id: 89a0cd0525fb4b6ea8f8fc2187f690d0
 fixed Id: 89a0cd05-25fb-4b6e-a8f8-fc2187f690d0
