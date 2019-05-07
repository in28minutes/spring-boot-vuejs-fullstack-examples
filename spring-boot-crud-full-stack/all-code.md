<!---
Current Directory : /in28Minutes/git/spring-boot-vuejs-fullstack-examples/spring-boot-crud-full-stack
-->

## Complete Code Example


### /backend-spring-boot-crud-full-stack/pom.xml

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
	<groupId>com.in28minutes.fullstack.springboot.react.maven.crud</groupId>
	<artifactId>spring-boot-react-crud-full-stack-with-maven</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<name>spring-boot-react-crud-full-stack-with-maven</name>
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

### /backend-spring-boot-crud-full-stack/src/test/java/com/in28minutes/fullstack/springboot/react/maven/crud/springbootreactcrudfullstackwithmaven/SpringBootReactCrudFullStackWithMavenApplicationTests.java

```java
package com.in28minutes.fullstack.springboot.react.maven.crud.springbootreactcrudfullstackwithmaven;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SpringBootReactCrudFullStackWithMavenApplicationTests {

	@Test
	public void contextLoads() {
	}

}
```
---

### /backend-spring-boot-crud-full-stack/src/main/resources/application.properties

```properties

```
---

### /backend-spring-boot-crud-full-stack/src/main/java/com/in28minutes/fullstack/springboot/react/maven/crud/springbootreactcrudfullstackwithmaven/SpringBootReactCrudFullStackWithMavenApplication.java

```java
package com.in28minutes.fullstack.springboot.react.maven.crud.springbootreactcrudfullstackwithmaven;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringBootReactCrudFullStackWithMavenApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootReactCrudFullStackWithMavenApplication.class, args);
	}

}
```
---

### /backend-spring-boot-crud-full-stack/src/main/java/com/in28minutes/fullstack/springboot/react/maven/crud/springbootreactcrudfullstackwithmaven/model/Course.java

```java
package com.in28minutes.fullstack.springboot.react.maven.crud.springbootreactcrudfullstackwithmaven.model;

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

### /backend-spring-boot-crud-full-stack/src/main/java/com/in28minutes/fullstack/springboot/react/maven/crud/springbootreactcrudfullstackwithmaven/service/CoursesHardcodedService.java

```java
package com.in28minutes.fullstack.springboot.react.maven.crud.springbootreactcrudfullstackwithmaven.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.in28minutes.fullstack.springboot.react.maven.crud.springbootreactcrudfullstackwithmaven.model.Course;

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

	public Course save(Course course) {
		if (course.getId() == -1 || course.getId() == 0) {
			course.setId(++idCounter);
			courses.add(course);
		} else {
			deleteById(course.getId());
			courses.add(course);
		}
		return course;
	}

	public Course deleteById(long id) {
		Course course = findById(id);

		if (course == null)
			return null;

		if (courses.remove(course)) {
			return course;
		}

		return null;
	}

	public Course findById(long id) {
		for (Course course : courses) {
			if (course.getId() == id) {
				return course;
			}
		}

		return null;
	}
}
```
---

### /backend-spring-boot-crud-full-stack/src/main/java/com/in28minutes/fullstack/springboot/react/maven/crud/springbootreactcrudfullstackwithmaven/resource/CourseResource.java

```java
package com.in28minutes.fullstack.springboot.react.maven.crud.springbootreactcrudfullstackwithmaven.resource;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.in28minutes.fullstack.springboot.react.maven.crud.springbootreactcrudfullstackwithmaven.model.Course;
import com.in28minutes.fullstack.springboot.react.maven.crud.springbootreactcrudfullstackwithmaven.service.CoursesHardcodedService;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200", "http://localhost:8081" })
@RestController
public class CourseResource {

	@Autowired
	private CoursesHardcodedService courseManagementService;

	@GetMapping("/instructors/{username}/courses")
	public List<Course> getAllCourses(@PathVariable String username) {
		return courseManagementService.findAll();
	}

	@GetMapping("/instructors/{username}/courses/{id}")
	public Course getCourse(@PathVariable String username, @PathVariable long id) {
		return courseManagementService.findById(id);
	}

	@DeleteMapping("/instructors/{username}/courses/{id}")
	public ResponseEntity<Void> deleteCourse(@PathVariable String username, @PathVariable long id) {

		Course course = courseManagementService.deleteById(id);

		if (course != null) {
			return ResponseEntity.noContent().build();
		}

		return ResponseEntity.notFound().build();
	}

	@PutMapping("/instructors/{username}/courses/{id}")
	public ResponseEntity<Course> updateCourse(@PathVariable String username, @PathVariable long id,
			@RequestBody Course course) {

		Course courseUpdated = courseManagementService.save(course);

		return new ResponseEntity<Course>(course, HttpStatus.OK);
	}

	@PostMapping("/instructors/{username}/courses")
	public ResponseEntity<Void> createCourse(@PathVariable String username, @RequestBody Course course) {

		Course createdCourse = courseManagementService.save(course);

		// Location
		// Get current resource url
		/// {id}
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdCourse.getId())
				.toUri();

		return ResponseEntity.created(uri).build();
	}

}
```
---

### /frontend-spring-boot-vuejs-crud-full-stack/public/index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="<%= BASE_URL %>favicon.ico">
    <title>frontend-spring-boot-vuejs-crud-full-stack</title>
  </head>
  <body>
    <noscript>
      <strong>We're sorry but frontend-spring-boot-vuejs-crud-full-stack doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
```
---

### /frontend-spring-boot-vuejs-crud-full-stack/babel.config.js

```js
module.exports = {
  presets: [
    '@vue/app'
  ]
}
```
---

### /frontend-spring-boot-vuejs-crud-full-stack/src/App.vue

```
<template>
  <div class="container">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
@import url(https://unpkg.com/bootstrap@4.1.0/dist/css/bootstrap.min.css);
</style>
```
---

### /frontend-spring-boot-vuejs-crud-full-stack/src/main.js

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

### /frontend-spring-boot-vuejs-crud-full-stack/src/components/Courses.vue

```
<template>
    <div class="container">
                <h3>All Courses</h3>
                <div v-if="message" class="alert alert-success">{{this.message}}</div>
                <div class="container">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Description</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="course in courses" v-bind:key="course.id">
                                <td>{{course.id}}</td>
                                <td>{{course.description}}</td>
                                <td><button class="btn btn-success" v-on:click="updateCourse(course.id)">Update</button></td>
                                <td><button class="btn btn-warning" v-on:click="deleteCourse(course.id)">Delete</button></td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="row">
                        <button class="btn btn-success" v-on:click="addCourse()">Add</button>
                    </div>
                </div>
            </div>
</template>
<script>
import CourseDataService from '../service/CourseDataService';

export default {
    name: "Courses",
    data() {
        return {
            courses: [],
            message: "",
            INSTRUCTOR: "in28minutes"
        }
    },
    methods: {
        refreshCourses() {
            CourseDataService.retrieveAllCourses(this.INSTRUCTOR)
            .then((res) => {
                this.courses = res.data;
            });
        },
        addCourse() {
            this.$router.push(`/course/-1`);
        },
        updateCourse(id) {
            this.$router.push(`/course/${id}`);
        },
        deleteCourse(id) {
            CourseDataService.deleteCourse(this.INSTRUCTOR, id)
            .then(() => {
                this.refreshCourses();
            });
        },
    },
    created() {
        this.refreshCourses();
    }
}
</script>
```
---

### /frontend-spring-boot-vuejs-crud-full-stack/src/components/Course.vue

```
<template>
  <div>
    <h3>Course</h3>
    <div class="container">
      <form @submit="validateAndSubmit">
        <div v-if="errors.length">
          <div class="alert alert-warning" v-bind:key="index" v-for="(error, index) in errors">{{error}}</div>
        </div>
        <fieldset class="form-group">
          <label>Id</label>
          <input type="text" class="form-control" v-model="id" disabled>
        </fieldset>
        <fieldset class="form-group">
          <label>Description</label>
          <input type="text" class="form-control" v-model="description">
        </fieldset>
        <button class="btn btn-success" type="submit">Save</button>
      </form>
    </div>
  </div>
</template>
<script>
import CourseDataService from "../service/CourseDataService";

export default {
  name: "Course",
  data() {
    return {
      description: "",
      INSTRUCTOR: "in28minutes",
      errors: []
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    }
  },
  methods: {
    refreshCourseDetails() {
        CourseDataService.retrieveCourse(this.INSTRUCTOR, this.id).then(res => {
          this.description = res.data.description;
        });
    },
    validateAndSubmit(e) {
        e.preventDefault();
        this.errors = [];
        if(!this.description) {
            this.errors.push("Enter valid values");
        } else if(this.description.length < 5) {
            this.errors.push("Enter atleast 5 characters in Description");
        }

        if(this.errors.length === 0) {
            if (this.id === -1) {
                CourseDataService.createCourse(this.INSTRUCTOR, {
                    description: this.description
                })
                .then(() => {
                    this.$router.push('/courses');
                });
            } else {
                CourseDataService.updateCourse(this.INSTRUCTOR, this.id, {
                    id: this.id,
                    description: this.description
                })
                .then(() => {
                    this.$router.push('/courses');
                });
            }
        }
    }
  },
  created() {
    this.refreshCourseDetails();
  }
};
</script>
```
---

### /frontend-spring-boot-vuejs-crud-full-stack/src/routes.js

```js
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
    mode: 'history', // Use browser history
    routes: [
        {
            path: "/",
            name: "Courses",
            component: () => import("./components/Courses"),
        },
        {
            path: "/courses",
            name: "Courses",
            component: () => import("./components/Courses"),
        },
        {
            path: "/course/:id",
            name: "Courses",
            component: () => import("./components/Course"),
        },
    ]
});

export default router;
```
---

### /frontend-spring-boot-vuejs-crud-full-stack/src/service/CourseDataService.js

```js
import axios from 'axios'

const INSTRUCTOR = 'in28minutes'
const COURSE_API_URL = 'http://localhost:8080'
const INSTRUCTOR_API_URL = `${COURSE_API_URL}/instructors/${INSTRUCTOR}`

class CourseDataService {

    // eslint-disable-next-line
    retrieveAllCourses(name) {
        //console.log('executed service')
        return axios.get(`${INSTRUCTOR_API_URL}/courses`);
    }

    // eslint-disable-next-line
    retrieveCourse(name, id) {
        //console.log('executed service')
        return axios.get(`${INSTRUCTOR_API_URL}/courses/${id}`);
    }

    // eslint-disable-next-line
    deleteCourse(name, id) {
        //console.log('executed service')
        return axios.delete(`${INSTRUCTOR_API_URL}/courses/${id}`);
    }

    // eslint-disable-next-line
    updateCourse(name, id, course) {
        //console.log('executed service')
        return axios.put(`${INSTRUCTOR_API_URL}/courses/${id}`, course);
    }

    // eslint-disable-next-line
    createCourse(name, course) {
        //console.log('executed service')
        return axios.post(`${INSTRUCTOR_API_URL}/courses/`, course);
    }
}

export default new CourseDataService()
```
---

### /frontend-spring-boot-vuejs-crud-full-stack/package.json

```json
{
  "name": "frontend-spring-boot-vuejs-crud-full-stack",
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
