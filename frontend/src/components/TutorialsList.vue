<template>
  <div>
    <div class="list row" v-if="!submitted">
      <div class="col-md-12">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Search by title"
            v-model="title" v-on:keyup.enter="searchTitle"/>
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button"
              @click="searchTitle"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <br/>
      <div class="col-md-6">
        <div class="row">
          <div class="col-md-8">
            <h4>Tutorials List</h4>
          </div>
          <div class="group-btn btn btn-md col-md-4">
          <button class="badge badge-danger"
            @click="removeAllTutorials"
            >
            Remove All
          </button>
        </div>
        </div>
        <ul class="list-group">
          <li class="list-group-item"
            :class="{ active: index == currentIndex }"
            v-for="(tutorial, index) in tutorials"
            :key="index"
            @click="setActiveTutorial(tutorial, index)"
          >
            {{ tutorial.title }}
          </li>
        </ul>
      </div>
      <div class="col-md-6">
        <br />
        <div style="margin-top: 5px" v-if="statusDetail === true && currentIndex !== -1">
          <h4>Tutorial</h4>
          <div>
            <label><strong>Title:</strong></label> {{ currentTutorial.title }}
          </div>
          <div>
            <label><strong>Description:</strong></label> {{ currentTutorial.description }}
          </div>
          <div>
            <label><strong>Status:</strong></label> {{
              currentTutorial.published ? "Published" : "Pending"
            }}
          </div>

          <router-link
          :to="'/tutorials/' + currentTutorial.id"
          class="badge badge-warning">Edit</router-link>
        </div>
        <div v-else style="text-align: center;" class="border border-light mt-2">
          <br />
          <p>Please click on a Tutorial...</p>
        </div>
      </div>
    </div>
    <div v-else>
      <h1 style="text-align: center;">You deleted all successfully!</h1>
    </div>
  </div>
</template>

<script>
import TutorialDataService from '../services/tutorialDataService';

export default {
  name: 'tutorialsList',
  data() {
    return {
      tutorials: [],
      result: [],
      currentTutorial: null,
      currentIndex: -1,
      title: '',
      param: null,
      statusDetail: false,
      submitted: false,
    };
  },
  mounted() {
    this.refreshList();
  },
  methods: {
    retrieveTutorials() {
      this.statusDetail = false;
      TutorialDataService.getAll()
        .then((response) => {
          this.tutorials = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveTutorials();
      this.currentTutorial = null;
      this.currentIndex = -1;
      this.setActiveTutorial(this.tutorials, this.currentIndex);
    },
    setActiveTutorial(tutorial, index) {
      this.currentTutorial = tutorial;
      this.currentIndex = index;
      this.statusDetail = true;
    },
    removeAllTutorials() {
      TutorialDataService.deleteAll()
        .then((response) => {
          this.submitted = true;
          setTimeout(() => {
            console.log(response.data);
            this.submitted = false;
            this.refreshList();
          }, 1000);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    searchData(param) {
      TutorialDataService.findByTitle(param)
        .then((response) => {
          this.tutorials = response.data;
          this.result = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    async searchTitle() {
      await this.refreshList();
      if (this.title !== '') {
        if (this.param === this.title) {
          this.tutorials = this.result;
          /* eslint-disable no-alert, no-console */
          alert('Please Insert Another Title');
          this.title = '';
          this.param = null;
        } else {
          this.param = this.title;
          this.searchData(this.param);
        }
      } else {
        alert('Please Insert Title');
        this.retrieveTutorials();
      }
    },
  },
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: 0 auto;
}
.group-btn {
  text-align: center;
  max-width: 300px;
  margin: 0 auto;
}
</style>
