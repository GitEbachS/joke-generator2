import renderToDom from '../utils/renderToDom';

const jokeBtn = () => {
  const domString = '<button type="button" id="joke-btn" class="btn btn-primary">Get a joke</button>';
  renderToDom('#joke-btn', domString);
};

const punchlineBtn = () => {
  const domString = '<button type="button" id="joke-btn" class="btn btn-primary">Get the punchline</button>';
  renderToDom('#punchline-btn', domString);
};

const resetBtn = () => {
  const domString = '<button type="button" id="joke-btn" class="btn btn-primary">Get another joke</button>';
  renderToDom('#reset-btn', domString);
};

export { jokeBtn, punchlineBtn, resetBtn };
