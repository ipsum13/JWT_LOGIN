# MERN JWT Authentication

MERN JWT Authentication is a minimal full-stack login/authorization app developed using the `MERN` stack (`MongoDB` for our database, `Express` and `Node` for our backend, and `React` for our frontend). Also integrate `Redux` for state management for our `React` components.

## :link: Live Demo

Here's a [live demo](https://mern-jwt-login.herokuapp.com/)

<p align="center"> 
  <kbd>
<img src="https://res.cloudinary.com/sam13/image/upload/v1614530452/signup_rf98dh.png"></img>
  </kbd>
</p>

<p align="center"> 
  <kbd>
<img src="https://res.cloudinary.com/sam13/image/upload/v1614530446/signin_bjhorp.png"></img>
  </kbd>
</p>

<p align="center"> 
  <kbd>
<img src="https://res.cloudinary.com/sam13/image/upload/v1614530459/screen_evc9bd.png"></img>
  </kbd>
</p>

**MERN JWT Authentication app will allow users to**

- Register
- Log in
- Access protected pages only accessible to logged in users
- Stay logged in when they close the app or refresh the page
- Log out



## Requirements

##### **Prerequisites**

You should have at least a basic understanding of fundamental programming concepts and some experience with introductory [`HTML`](https://developer.mozilla.org/en-US/docs/Web/HTML)/[`CSS`](https://developer.mozilla.org/en-US/docs/Learn/CSS)/[`Javascript`](https://developer.mozilla.org/en-US/docs/Web/JavaScript). And the knowledge of `MERN` stack  ([`Mongo`](https://university.mongodb.com/), [`Express`](https://expressjs.com/), [`React`](https://reactjs.org/), [`Node`](https://nodejs.dev/)) is an advantage.

##### **Install**

Lastly, make sure you have the following installed.

- Latest version of [Node.js](https://nodejs.org/en/)
- Latest version of [NPM (Node Package Manage)](https://www.npmjs.com/get-npm)
- Latest version of [MongoDB](https://docs.mongodb.com/manual/administration/install-community/)
- Latest version of [git](https://git-scm.com/) (**This is optional. It requires only if you choose to clone project**)



### Getting Started

1. Either you can **clone** or **download** repository from GitHub.

   - Clone with HTTPS *(required [git](https://git-scm.com/) installed in your system)*

     ```shell
     git clone https://github.com/ipsum13/JWT_LOGIN.git
     ```

   - Clone with SSH *(required [git](https://git-scm.com/) installed in your system)*

     ```sh
     git clone git@github.com:ipsum13/JWT_LOGIN.git
     ```

   - [Download Zip](https://github.com/ipsum13/JWT_LOGIN/archive/master.zip)

2. Navigate to project directory in the terminal or command prompt.

   ```shell
   cd jwt_login
   ```

3. Install project dependencies

   ```shell
   npm i && npm run client-install
   ```

4. Create a `keys.js` file in `config` directory

   - create the config.env file 

   **Note:** update `config.env` file variables as per the requirements.

5. Run the project server

   - Run development server (*it runs both **frontend** and **backend** server together at same time*)

     ```shell
     npm run dev
     ```

   - Run **backend** development server

     ```shell
     npm run server
     ```

   - Run **frontend** development server

     ```shell
     npm run client
     ```

   - Run **production** server

     - Build and run the production server

       ```shell
       npm run build-prod
       ```

     **OR**

     - Create build first

       ```shell
       npm run build
       ```

       Run the production server

       ```shell
       npm run prod
       ```   

6. Project server is running at:

   - **Development**
     - Frontend server is running at [http://localhost:3000](http://localhost:3000)
     - Backend server is running at [http://localhost:5000](http://localhost:5000)

   - **Production** server is running at [http://localhost:5000](http://localhost:5000)


#### Contributing

1. Fork it ( https://github.com/ipsum13/JWT_LOGIN/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new pull request.