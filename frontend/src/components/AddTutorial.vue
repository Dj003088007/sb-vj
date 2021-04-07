<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="tutorial.title"
          name="title"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="tutorial.description"
          name="description"
        />
      </div>

      <div class="group-btn">
        <button class="badge badge-light mr-2"
          @click="back"
        >
          Cancel
        </button>
        <button type="submit" class="badge badge-success mr-2"
          @click="saveTutorial"
          >
          Submit
        </button>
      </div>
    </div>

    <div v-else>
      <h1 style="text-align: center;">You submitted successfully!</h1>
    </div>
  </div>
</template>

<script>
import TutorialDataService from '../services/tutorialDataService';

export default {
  name: 'addTutorial',
  data() {
    return {
      tutorial: {
        id: null,
        title: '',
        description: '',
        published: false,
      },
      submitted: false,
    };
  },
  methods: {
    back() {
      return this.$router.push({ name: 'tutorials' });
    },
    saveTutorial() {
      const data = {
        title: this.tutorial.title,
        description: this.tutorial.description,
      };
      TutorialDataService.create(data)
        .then((response) => {
          this.tutorial.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
          setTimeout(() => {
            this.newTutorial();
          }, 1000);
        })
        .catch((e) => {
          /* eslint-disable no-alert, no-console */
          console.log(e);
          alert(e);
        });
    },
    newTutorial() {
      this.submitted = false;
      this.tutorial = {};
      this.$router.push({ name: 'tutorials' });
    },
  },
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
.group-btn {
  text-align: center;
  max-width: 300px;
  margin: 0 auto;
}
</style>
