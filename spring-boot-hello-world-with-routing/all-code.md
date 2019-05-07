<!---
Current Directory : /in28Minutes/git/spring-boot-vuejs-fullstack-examples/spring-boot-hello-world-with-routing
-->

## Complete Code Example


### /frontend-spring-boot-vue-hello-world-with-routing/public/index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="<%= BASE_URL %>favicon.ico">
    <title>frontend-spring-boot-vue-hello-world-with-routing</title>
  </head>
  <body>
    <noscript>
      <strong>We're sorry but frontend-spring-boot-vue-hello-world-with-routing doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
```
---

### /frontend-spring-boot-vue-hello-world-with-routing/babel.config.js

```js
module.exports = {
  presets: [
    '@vue/app'
  ]
}
```
---

### /frontend-spring-boot-vue-hello-world-with-routing/src/App.vue

```
<template>
  <div>
    <Menu></Menu>
    <router-view/>
  </div>
</template>

<script>
import Menu from './components/Menu';

export default {
  name: "app",
  components: {
    Menu
  }
};
</script>

<style>
@import url(https://unpkg.com/bootstrap@4.1.0/dist/css/bootstrap.min.css);
</style>
```
---

### /frontend-spring-boot-vue-hello-world-with-routing/src/main.js

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

### /frontend-spring-boot-vue-hello-world-with-routing/src/components/HelloWorldString.vue

```
<template>
  <div>
    <h1>Hello World String Component</h1>
    <div class="container">{{welcomeMessage}}</div>
    <div class="row">
      <button class="btn btn-success" v-on:click="gotoBeanComponent()">Go</button>
    </div>
  </div>
</template>
<script>
import HelloWorldService from '../service/HelloWorldService';

export default {
  name: "Hello-World-String",
  data() {
    return {
      welcomeMessage: ""
    };
  },
  created() {
    this.refreshData();
  },
  methods: {
    refreshData() {
        HelloWorldService.executeHelloWorldService().then((res) => {
            this.welcomeMessage = res.data;
        })
    },

    gotoBeanComponent() {
      this.$router.push(`/hello-world-bean`);
    }
  }
};
</script>
```
---

### /frontend-spring-boot-vue-hello-world-with-routing/src/components/HelloWorldBean.vue

```
<template>
  <div>
    <h1>Hello World Bean Component</h1>
    <div class="container">{{welcomeMessage}}</div>
    <div class="row">
      <button class="btn btn-success" v-on:click="gotoStringComponent()">Go</button>
    </div>
  </div>
</template>
<script>
import HelloWorldService from '../service/HelloWorldService';

export default {
  name: "Hello-World-Bean",
  data() {
    return {
      welcomeMessage: ""
    };
  },
  created() {
    this.refreshData();
  },
  methods: {
    refreshData() {
        HelloWorldService.executeHelloWorldBeanService().then((res) => {
            this.welcomeMessage = res.data.message;
        })
    },

    gotoStringComponent() {
      this.$router.push(`/hello-world-string`);
    }
  }
};
</script>
```
---

### /frontend-spring-boot-vue-hello-world-with-routing/src/components/Menu.vue

```
<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <div>
        <a href="http://www.in28minutes.com" class="navbar-brand">in28Minutes</a>
      </div>
      <ul class="navbar-nav">
        <li>
          <a class="nav-link" href="/hello-world-string">Hello World String</a>
        </li>
        <li>
          <a class="nav-link" href="/hello-world-bean">Hello World Bean</a>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  name: "Menu"
};
</script>
```
---

### /frontend-spring-boot-vue-hello-world-with-routing/src/routes.js

```js
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
    mode: 'history', // Use browser history
    routes: [
        {
            path: "/",
            name: "Hello-World-String",
            component: () => import("./components/HelloWorldString"),
        },
        {
            path: "/hello-world-string",
            name: "Hello-World-String",
            component: () => import("./components/HelloWorldString"),
        },
        {
            path: "/hello-world-bean",
            name: "Hello-World-Bean",
            component: () => import("./components/HelloWorldBean"),
        },
    ]
});

export default router;
```
---

### /frontend-spring-boot-vue-hello-world-with-routing/src/service/HelloWorldService.js

```js
import axios from 'axios'

class HelloWorldService {

    executeHelloWorldService() {
        return axios.get('http://localhost:8080/hello-world');
    }

    executeHelloWorldBeanService() {
        return axios.get('http://localhost:8080/hello-world-bean');
    }

    executeHelloWorldPathVariableService(name) {
        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`);
    }

}

export default new HelloWorldService()
```
---

### /frontend-spring-boot-vue-hello-world-with-routing/package.json

```json
{
  "name": "frontend-spring-boot-vue-hello-world-with-routing",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },
  "dependencies": {
    "core-js": "^2.6.5",
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

### /backend-spring-boot-hello-world-with-routing/pom.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>
	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>2.1.3.RELEASE</version>
		<relativePath /> <!-- lookup parent from repository -->
	</parent>
	<groupId>com.in28minutes.fullstack.springboot.react.helloworld</groupId>
	<artifactId>spring-boot-fullstack-hello-world-with-routing</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<name>spring-boot-fullstack-hello-world-with-routing</name>
	<description>Demo project for Spring Boot</description>

	<properties>
		<java.version>1.8</java.version>
	</properties>

	<dependencies>
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

### /backend-spring-boot-hello-world-with-routing/src/main/resources/application.properties

```properties

```
---

### /backend-spring-boot-hello-world-with-routing/src/main/java/com/in28minutes/fullstack/springboot/helloworld/springboothelloworldwithrouting/helloworld/HelloWorldController.java

```java
package com.in28minutes.fullstack.springboot.helloworld.springboothelloworldwithrouting.helloworld;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

//Controller
@RestController
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200", "http://localhost:8081" })
//
public class HelloWorldController {

	@GetMapping(path = "/hello-world")
	public String helloWorld() {
		return "Hello World";
	}

	@GetMapping(path = "/hello-world-bean")
	public HelloWorldBean helloWorldBean() {
		return new HelloWorldBean("Hello World From a Java Bean");
	}
	
	///hello-world/path-variable/in28minutes
	@GetMapping(path = "/hello-world/path-variable/{name}")
	public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
		//throw new RuntimeException("Something went wrong");
		return new HelloWorldBean(String.format("Hello World, %s", name));
	}
}
```
---

### /backend-spring-boot-hello-world-with-routing/src/main/java/com/in28minutes/fullstack/springboot/helloworld/springboothelloworldwithrouting/helloworld/HelloWorldBean.java

```java
package com.in28minutes.fullstack.springboot.helloworld.springboothelloworldwithrouting.helloworld;
public class HelloWorldBean {

	private String message;

	public HelloWorldBean(String message) {
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

### /backend-spring-boot-hello-world-with-routing/src/main/java/com/in28minutes/fullstack/springboot/helloworld/springboothelloworldwithrouting/SpringBootFullStackHelloWorldWithRoutingApplication.java

```java
package com.in28minutes.fullstack.springboot.helloworld.springboothelloworldwithrouting;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringBootFullStackHelloWorldWithRoutingApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootFullStackHelloWorldWithRoutingApplication.class, args);
	}

}
```
---
