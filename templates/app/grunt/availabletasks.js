'use strict';

/**
 * Grunt - available-tasks (https://github.com/ben-eb/grunt-available-tasks)
 */
module.exports = () => {
  return {
    options: {
      filter: 'exclude',
      tasks: ['availabletasks', 'default']
    }
  };
};
