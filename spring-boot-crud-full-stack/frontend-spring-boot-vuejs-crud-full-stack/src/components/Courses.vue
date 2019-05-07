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