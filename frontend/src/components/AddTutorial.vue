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

      <button @click="saveTutorial" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h1 class="text-center">You submitted successfully!</h1>
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
          console.log(e);
          alert(e)
        });
    },

    newTutorial() {
      this.submitted = false;
      this.tutorial = {};
      this.$router.back();
    },
  },
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
