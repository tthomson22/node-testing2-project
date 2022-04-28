exports.seed = function(knex, Promise) {
    return knex('pokemon')
      .truncate()
      .then(function() {
        return knex('pokemon').insert([
          { name: 'shedinja', type: 'ghost bug' },
          { name: 'shuckle', type: 'rock bug' },
          { name: 'kecleon', type: 'normal' },
          { name: 'slaking', type: 'normal' },
          { name: 'dunsparce', type: 'normal' },
          { name: 'golisopod', type: 'water bug' },
        ]);
      });
  };