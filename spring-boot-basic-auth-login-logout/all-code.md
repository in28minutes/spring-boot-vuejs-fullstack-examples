<!---
Current Directory : /in28Minutes/git/spring-boot-vuejs-fullstack-examples/spring-boot-basic-auth-login-logout
-->

## Complete Code Example


### /frontend-vuejs-basic-auth-login-logout/public/index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="<%= BASE_URL %>favicon.ico">
    <title>frontend-vuejs-basic-auth-login-logout</title>
  </head>
  <body>
    <noscript>
      <strong>We're sorry but frontend-vuejs-basic-auth-login-logout doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
```
---

### /frontend-vuejs-basic-auth-login-logout/babel.config.js

```js
module.exports = {
  presets: [
    '@vue/app'
  ]
}
```
---

### /frontend-vuejs-basic-auth-login-logout/src/App.vue

```
<template>
  <div className="container">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
@import url(https://unpkg.com/bootstrap@4.1.0/dist/css/bootstrap.min.css)
</style>
```
---

### /frontend-vuejs-basic-auth-login-logout/src/store.js

```js
const store = {
    state: {
        username: "",
        isAuthenticated: false,
    },
    login({isAuthenticated, username}) {
        this.state.username = username,
        this.state.isAuthenticated = isAuthenticated;
    },
    logout() {
        this.state.isAuthenticated = false;
        this.state.username = '';
    }
};

export default store;
```
---

### /frontend-vuejs-basic-auth-login-logout/src/main.js

```js
import Vue from 'vue'
import App from './App.vue'
import router from './routes';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
```
---

### /frontend-vuejs-basic-auth-login-logout/src/components/Login.vue

```
<template>
  <section>
    <Menu/>
    <h1>Login</h1>
    <div class="container">
      <div v-if="hasLoginFailed" class="alert alert-warning">Invalid Credentials</div>
      <div v-if="showSuccessMessage" class="alert">Login Sucessful</div>User Name:
      <input type="text" name="username" v-model="username">
      Password:
      <input type="password" name="password" v-model="password">
      <button class="btn btn-success" v-on:click="loginClicked">Login</button>
    </div>
  </section>
</template>
<script>
import Menu from "./Menu";
import AuthenticationService from "../service/AuthenticationService";

export default {
  name: "Login",
  components: {
    Menu
  },
  data() {
    return {
      username: "",
      password: "",
      hasLoginFailed: false,
      showSuccessMessage: false
    };
  },
  methods: {
    loginClicked() {
      AuthenticationService.executeBasicAuthenticationService(
        this.username,
        this.password
      )
        .then(() => {
          AuthenticationService.registerSuccessfulLogin(
            this.username,
            this.password
          );
          this.showSuccessMessage = true;
          this.$router.push("/courses");
        })
        .catch(() => {
          this.hasLoginFailed = true;
          this.showSuccessMessage = false;
        });
    }
  }
};
</script>
```
---

### /frontend-vuejs-basic-auth-login-logout/src/components/InstructorApp.vue

```
<template>
    <div>
        This is instructors test!
    </div>
</template>

<script>
export default {
    name: "InstructorApp"
}
</script>

<style scoped>

</style>
```
---

### /frontend-vuejs-basic-auth-login-logout/src/components/Courses.vue

```
<template>
  <section>
    <Menu/>
    <h3>All Courses</h3>
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="course in courses" v-bind:key="course.id">
            <td>{{course.id}}</td>
            <td>{{course.description}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
<script>
import Menu from "./Menu";
import CourseDataService from "../service/CourseDataService";

export default {
  name: "Courses",
  components: {
    Menu
  },
  data() {
    return {
      courses: [],
      message: null,
      INSTRUCTOR: "in28minutes"
    };
  },
  methods: {
    refreshCourses() {
      CourseDataService.retrieveAllCourses(this.INSTRUCTOR) //HARDCODED
        .then(response => {
          this.courses = response.data;
        });
    }
  },
  created() {
    this.refreshCourses();
  }
};
</script>
```
---

### /frontend-vuejs-basic-auth-login-logout/src/components/Logout.vue

```
<template>
  <section>
    <Menu/>
    <h1>You are logged out</h1>
    <div class="container">Thank You for Using Our Application.</div>
  </section>
</template>
<script>
import Menu from "./Menu";

export default {
  name: "Logout",
  components: {
    Menu
  }
};
</script>
```
---

### /frontend-vuejs-basic-auth-login-logout/src/components/Menu.vue

```
<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <div>
        <a href="http://www.in28minutes.com" class="navbar-brand">in28Minutes</a>
      </div>
      <ul class="navbar-nav">
        <li>
          <router-link v-if="isAuthenticated" class="nav-link" to="/courses">Courses</router-link>
        </li>
      </ul>
      <ul class="navbar-nav navbar-collapse justify-content-end">
        <li>
          <router-link v-if="!isAuthenticated" class="nav-link" to="/login">Login</router-link>
        </li>
        <li>
          <router-link v-if="isAuthenticated" class="nav-link" to="/logout" >Logout</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
import AuthenticationService from "../service/AuthenticationService";

export default {
  name: "Menu",
  data() {
    return {
      isAuthenticated: AuthenticationService.isUserLoggedIn()
    };
  },
}
</script>
```
---

### /frontend-vuejs-basic-auth-login-logout/src/routes.js

```js
import Vue from "vue";
import Router from "vue-router";
import AuthenticationService from "./service/AuthenticationService";

Vue.use(Router);

const router = new Router({
    mode: 'history', // Use browser history
    routes: [
        {
            path: "/",
            name: "Login",
            component: () => import("./components/Login"),
        },
        {
            path: "/login",
            name: "Login",
            component: () => import("./components/Login"),
        },
        {
            path: "/courses",
            name: "Courses",
            component: () => import("./components/Courses"),
            beforeEnter: (to, from, next) => {
                if (AuthenticationService.isUserLoggedIn()) {
                    next()
                } else {
                    next({ path: '/login'})
                }
            }
        },
        {
            path: "/logout",
            name: "Logout",
            component: () => import("./components/Logout"),
            beforeEnter: (to, from, next) => {
                if (AuthenticationService.isUserLoggedIn()) {
                    AuthenticationService.logout();
                }
                next();
            },

        },
    ]
});

export default router;
```
---

### /frontend-vuejs-basic-auth-login-logout/src/service/CourseDataService.js

```js
import axios from 'axios'

const INSTRUCTOR = 'in28minutes'
// const PASSWORD = 'dummy'
const COURSE_API_URL = 'http://localhost:8080'
const INSTRUCTOR_API_URL = `${COURSE_API_URL}/instructors/${INSTRUCTOR}`

class CourseDataService {

    retrieveAllCourses() {
        //console.log('executed service')
        return axios.get(`${INSTRUCTOR_API_URL}/courses`,
            //{ headers: { authorization: 'Basic ' + window.btoa(INSTRUCTOR + ":" + PASSWORD) } }
        );
    }
}

export default new CourseDataService()
```
---

### /frontend-vuejs-basic-auth-login-logout/src/service/AuthenticationService.js

```js
import axios from 'axios'

const API_URL = 'http://localhost:8080'

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

class AuthenticationService {

    executeBasicAuthenticationService(username, password) {
        return axios.get(`${API_URL}/basicauth`,
            { headers: { authorization: this.createBasicAuthToken(username, password) } })
    }

    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password)
    }

    registerSuccessfulLogin(username, password) {
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username)
        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password))
    }

    logout() {
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return false
        return true
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return ''
        return user
    }

    setupAxiosInterceptors(token) {
        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = token
                }
                return config
            }
        )
    }
}

export default new AuthenticationService()
```
---

### /frontend-vuejs-basic-auth-login-logout/package.json

```json
{
  "name": "frontend-vuejs-basic-auth-login-logout",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },
  "dependencies": {
    "axios": "^0.18.0",
    "vue": "^2.6.6",
    "vue-router": "^3.0.2"
  },
  "devDependencies": {
    "@vue/cli-plugin-babel": "^3.5.0",
    "@vue/cli-plugin-eslint": "^3.5.0",
    "@vue/cli-service": "^3.5.0",
    "babel-eslint": "^10.0.1",
    "eslint": "^5.8.0",
    "eslint-plugin-vue": "^5.0.0",
    "vue-template-compiler": "^2.5.21"
  },
  "eslintConfig": {
    "root": true,
    "env": {
      "node": true
    },
    "extends": [
      "plugin:vue/essential",
      "eslint:recommended"
    ],
    "rules": {},
    "parserOptions": {
      "parser": "babel-eslint"
    }
  },
  "postcss": {
    "plugins": {
      "autoprefixer": {}
    }
  },
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not ie <= 8"
  ]
}
```
---

### /backend-spring-boot-basic-auth-login-logout/pom.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>
	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>2.1.3.RELEASE</version>
		<relativePath/> <!-- lookup parent from repository -->
	</parent>
	<groupId>com.in28minutes.fullstack.springboot.react.basic.authentication</groupId>
	<artifactId>spring-boot-react-basic-auth-login-logout</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<name>spring-boot-react-basic-auth-login-logout</name>
	<description>Demo project for Spring Boot</description>

	<properties>
		<java.version>1.8</java.version>
	</properties>

	<dependencies>
 		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-security</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>

		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-devtools</artifactId>
			<scope>runtime</scope>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-test</artifactId>
			<scope>test</scope>
		</dependency>
		<dependency>
			<groupId>org.springframework.security</groupId>
			<artifactId>spring-security-test</artifactId>
			<scope>test</scope>
		</dependency>
	</dependencies>

	<build>
		<plugins>
			<plugin>
				<groupId>org.springframework.boot</groupId>
				<artifactId>spring-boot-maven-plugin</artifactId>
			</plugin>
		</plugins>
	</build>

</project>
```
---

### /backend-spring-boot-basic-auth-login-logout/src/test/java/com/in28minutes/fullstack/springboot/react/basic/authentication/springbootreactbasicauthloginlogout/SpringBootReactBasicAuthLoginLogoutApplicationTests.java

```java
package com.in28minutes.fullstack.springboot.react.basic.authentication.springbootreactbasicauthloginlogout;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SpringBootReactBasicAuthLoginLogoutApplicationTests {

	@Test
	public void contextLoads() {
	}

}
```
---

### /backend-spring-boot-basic-auth-login-logout/src/main/resources/application.properties

```properties
spring.security.user.name=in28minutes
spring.security.user.password=dummy
```
---

### /backend-spring-boot-basic-auth-login-logout/src/main/java/com/in28minutes/fullstack/springboot/react/basic/authentication/springbootreactbasicauthloginlogout/course/CoursesHardcodedService.java

```java
package com.in28minutes.fullstack.springboot.react.basic.authentication.springbootreactbasicauthloginlogout.course;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class CoursesHardcodedService {

	private static List<Course> courses = new ArrayList<>();
	private static long idCounter = 0;

	static {
		courses.add(new Course(++idCounter, "in28minutes", "Learn Full stack with Spring Boot and Angular"));
		courses.add(new Course(++idCounter, "in28minutes", "Learn Full stack with Spring Boot and React"));
		courses.add(new Course(++idCounter, "in28minutes", "Master Microservices with Spring Boot and Spring Cloud"));
		courses.add(new Course(++idCounter, "in28minutes",
				"Deploy Spring Boot Microservices to Cloud with Docker and Kubernetes"));
	}

	public List<Course> findAll() {
		return courses;
	}
}
```
---

### /backend-spring-boot-basic-auth-login-logout/src/main/java/com/in28minutes/fullstack/springboot/react/basic/authentication/springbootreactbasicauthloginlogout/course/Course.java

```java
package com.in28minutes.fullstack.springboot.react.basic.authentication.springbootreactbasicauthloginlogout.course;

public class Course {
	private Long id;
	private String username;
	private String description;

	public Course() {

	}

	public Course(long id, String username, String description) {
		super();
		this.id = id;
		this.username = username;
		this.description = description;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((description == null) ? 0 : description.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((username == null) ? 0 : username.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Course other = (Course) obj;
		if (description == null) {
			if (other.description != null)
				return false;
		} else if (!description.equals(other.description))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (username == null) {
			if (other.username != null)
				return false;
		} else if (!username.equals(other.username))
			return false;
		return true;
	}

}
```
---

### /backend-spring-boot-basic-auth-login-logout/src/main/java/com/in28minutes/fullstack/springboot/react/basic/authentication/springbootreactbasicauthloginlogout/course/CourseResource.java

```java
package com.in28minutes.fullstack.springboot.react.basic.authentication.springbootreactbasicauthloginlogout.course;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200", "http://localhost:8081" })
@RestController
public class CourseResource {

	@Autowired
	private CoursesHardcodedService courseManagementService;

	@GetMapping("/instructors/{username}/courses")
	public List<Course> getAllCourses(@PathVariable String username) {
		return courseManagementService.findAll();
	}
}
```
---

### /backend-spring-boot-basic-auth-login-logout/src/main/java/com/in28minutes/fullstack/springboot/react/basic/authentication/springbootreactbasicauthloginlogout/basic/auth/AuthenticationBean.java

```java
package com.in28minutes.fullstack.springboot.react.basic.authentication.springbootreactbasicauthloginlogout.basic.auth;
public class AuthenticationBean {

    private String message;

    public AuthenticationBean(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    @Override
    public String toString() {
        return String.format("HelloWorldBean [message=%s]", message);
    }

}
```
---

### /backend-spring-boot-basic-auth-login-logout/src/main/java/com/in28minutes/fullstack/springboot/react/basic/authentication/springbootreactbasicauthloginlogout/basic/auth/BasicAuthenticationController.java

```java
package com.in28minutes.fullstack.springboot.react.basic.authentication.springbootreactbasicauthloginlogout.basic.auth;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

//Controller
@CrossOrigin(origins={ "http://localhost:3000", "http://localhost:4200", "http://localhost:8081" })
@RestController
public class BasicAuthenticationController {

    @GetMapping(path = "/basicauth")
    public AuthenticationBean helloWorldBean() {
        //throw new RuntimeException("Some Error has Happened! Contact Support at ***-***");
        return new AuthenticationBean("You are authenticated");
    }   
}
```
---

### /backend-spring-boot-basic-auth-login-logout/src/main/java/com/in28minutes/fullstack/springboot/react/basic/authentication/springbootreactbasicauthloginlogout/basic/auth/SpringSecurityConfigurationBasicAuth.java

```java
package com.in28minutes.fullstack.springboot.react.basic.authentication.springbootreactbasicauthloginlogout.basic.auth;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class SpringSecurityConfigurationBasicAuth extends WebSecurityConfigurerAdapter{
    
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
        .csrf().disable()   
        .authorizeRequests()
        .antMatchers(HttpMethod.OPTIONS,"/**").permitAll()
                .anyRequest().authenticated()
                .and()
            //.formLogin().and()
            .httpBasic();
    }
}
```
---

### /backend-spring-boot-basic-auth-login-logout/src/main/java/com/in28minutes/fullstack/springboot/react/basic/authentication/springbootreactbasicauthloginlogout/SpringBootReactBasicAuthLoginLogoutApplication.java

```java
package com.in28minutes.fullstack.springboot.react.basic.authentication.springbootreactbasicauthloginlogout;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringBootReactBasicAuthLoginLogoutApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootReactBasicAuthLoginLogoutApplication.class, args);
	}

}
```
---
