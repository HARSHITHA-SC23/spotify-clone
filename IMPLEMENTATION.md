# Tech Stack
1. React JS
2. Material UI
3. SCSS

# Creating a Client application in the Spotify developer dashboard
1. Once we created an application by giving the application name and description we need to edit the following details
   1. Redirect URI: Here we need to give all the URIs that we need to whitelists, i.e., the URI from where we are making a request for the Spotify API endpoints.
      for example: http://localhost:3000/

      NOTE: slash '/' at the end is a must.

# Authentication (For making a call to Spotify endpoints auth token is a must)
In 4 ways we can authorize an application they are:
1. Authorization code
2. Authorization code PKCE
3. Client credentials
4. Implicit grant

Note: We will be making use of the "Authorization code".

# Making a call to Authorization and storing "authToken" in the local storage.
## Authorization 
1. Create a login URL where we will be redirecting the user to this URL by passing this URL as a href to the anchor(<a></a>) tag.
   1. The login URL contains the following:
      1. Base URL: "https://accounts.spotify.com/authorize"
      2. Query Parameters:
         1. client_id: Get the client ID from the application created in the Spotify dashboard.
         2. redirect_uri: The URI that we whitelisted (the URI from where we will make a call to the endpoints).
         3. scope: refer to "https://developer.spotify.com/documentation/web-api/concepts/scopes".
         4. response_type: token
         5. show_dialog: true
      3. Once we have all the necessary information the login URL will look something like this:<br>
         `${Base URL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`
      4. Once the authorization is completed we will be redirected to the landing page but with an auth token in the URL bar on the top.

## Storing authToken in the local storage and redirecting to the playlist page.
1. we will be extracting authToken from the URL bar using the hash. We can use the below code to do the following<br>
   "hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]"
2. Once we extract the token we will be storing it in the local storage.

# Making a call to get current user data after logging in
1. We will get the authToken from the local storage and pass it as a header authorization.
2. The API endpoint used here is: "https://api.spotify.com/v1/me"


