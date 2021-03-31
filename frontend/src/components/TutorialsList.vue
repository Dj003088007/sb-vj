<template>
  <div class="list row">
    <div class="col-md-8">
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
    <div class="col-md-6">
      <h4>Tutorials List</h4>
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

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllTutorials">
        Remove All
      </button>
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
      <div v-else>
        <br />
        <p>Please click on a Tutorial...</p>
      </div>
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
          console.log(response.data);
          this.refreshList();
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
  margin: auto;
}
</style>
